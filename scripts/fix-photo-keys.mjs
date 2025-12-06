/**
 * Fix script to add missing _key properties to photos array items
 * 
 * Run with: 
 *   PUBLIC_SANITY_PROJECT_ID=xxx PUBLIC_SANITY_DATASET=xxx SANITY_API_TOKEN=xxx node scripts/fix-photo-keys.mjs
 * 
 * Or if you have a .env file:
 *   node --env-file=.env scripts/fix-photo-keys.mjs
 */

import { createClient } from '@sanity/client';

const projectId = process.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_TOKEN;

if (!projectId || !dataset) {
  console.error('❌ Missing environment variables: PUBLIC_SANITY_PROJECT_ID or PUBLIC_SANITY_DATASET');
  process.exit(1);
}

if (!token) {
  console.error('❌ Missing SANITY_API_TOKEN. You need a write token to run this fix.');
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  token,
  apiVersion: '2024-08-13',
  useCdn: false,
});

// Generate a unique key
const generateKey = () => Math.random().toString(36).substring(2, 10);

async function fixPhotoKeys() {
  console.log('🔧 Fixing missing _key properties in photos arrays...\n');

  // Fetch all cats with photos
  const cats = await client.fetch(`
    *[_type == "cat" && defined(photos)] {
      _id,
      name,
      photos
    }
  `);

  if (cats.length === 0) {
    console.log('No cats with photos found.');
    return;
  }

  let fixedCount = 0;

  for (const cat of cats) {
    // Check if any photos are missing _key
    const needsFix = cat.photos?.some(photo => !photo._key);
    
    if (!needsFix) {
      console.log(`  ✓ "${cat.name}" - photos already have keys`);
      continue;
    }

    console.log(`  🔧 Fixing "${cat.name}" (${cat._id})...`);

    try {
      // Add _key to each photo that's missing one
      const fixedPhotos = cat.photos.map(photo => ({
        ...photo,
        _key: photo._key || generateKey(),
      }));

      await client
        .patch(cat._id)
        .set({ photos: fixedPhotos })
        .commit();

      console.log(`     ✅ Fixed "${cat.name}"`);
      fixedCount++;
    } catch (error) {
      console.error(`     ❌ Failed to fix "${cat.name}":`, error.message);
    }
  }

  console.log(`\n🎉 Done! Fixed ${fixedCount} cat(s).`);
}

fixPhotoKeys().catch(console.error);

