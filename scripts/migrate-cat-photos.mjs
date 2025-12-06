/**
 * Migration script to transfer legacy single 'photo' field to new 'photos' array
 * 
 * Run with: 
 *   PUBLIC_SANITY_PROJECT_ID=xxx PUBLIC_SANITY_DATASET=xxx SANITY_API_TOKEN=xxx node scripts/migrate-cat-photos.mjs
 * 
 * Or if you have a .env file:
 *   node --env-file=.env scripts/migrate-cat-photos.mjs
 */

import { createClient } from '@sanity/client';

// Load environment variables
const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN; // You'll need a write token

if (!projectId || !dataset) {
  console.error('❌ Missing environment variables: PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET');
  process.exit(1);
}

if (!token) {
  console.error('❌ Missing SANITY_API_TOKEN. You need a write token to run this migration.');
  console.log('\nTo get a token:');
  console.log('1. Go to https://www.sanity.io/manage');
  console.log('2. Select your project');
  console.log('3. Go to API → Tokens');
  console.log('4. Create a new token with "Editor" permissions');
  console.log('5. Add it to your .env file as SANITY_API_TOKEN=your_token_here\n');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-08-13',
  useCdn: false,
});

async function migrateCatPhotos() {
  console.log('🐱 Starting cat photo migration...\n');

  // Fetch all cats that have a legacy photo but no photos array (or empty photos array)
  const catsToMigrate = await client.fetch(`
    *[_type == "cat" && defined(photo) && (!defined(photos) || count(photos) == 0)] {
      _id,
      name,
      photo
    }
  `);

  if (catsToMigrate.length === 0) {
    console.log('✅ No cats need migration. All cats either:');
    console.log('   - Already have photos in the new array, or');
    console.log('   - Don\'t have any photos at all');
    return;
  }

  console.log(`Found ${catsToMigrate.length} cat(s) to migrate:\n`);

  for (const cat of catsToMigrate) {
    console.log(`  📸 Migrating "${cat.name}" (${cat._id})...`);

    try {
      // Generate a unique key for the array item
      const generateKey = () => Math.random().toString(36).substring(2, 10);
      
      // Create the photo with a _key property (required for Sanity arrays)
      const photoWithKey = {
        ...cat.photo,
        _key: generateKey(),
      };

      // Update the cat: set photos array with the legacy photo, then unset the legacy field
      await client
        .patch(cat._id)
        .set({ photos: [photoWithKey] })
        .unset(['photo'])
        .commit();

      console.log(`     ✅ Successfully migrated "${cat.name}"`);
    } catch (error) {
      console.error(`     ❌ Failed to migrate "${cat.name}":`, error.message);
    }
  }

  console.log('\n🎉 Migration complete!');
  console.log('\nNext steps:');
  console.log('1. Verify the migration in Sanity Studio (/studio)');
  console.log('2. Once confirmed, you can remove the legacy "photo" field from the schema');
}

migrateCatPhotos().catch(console.error);

