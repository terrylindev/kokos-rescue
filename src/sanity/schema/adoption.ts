import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'adoption',
    title: 'Adoption Information',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'bulletPoints',
            title: 'Bullet Points',
            type: 'array',
            of: [{ type: 'string' }],
        }),
    ],
});
