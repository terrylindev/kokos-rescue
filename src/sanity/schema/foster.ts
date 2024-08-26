import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'foster',
    title: 'Foster Information',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().error('Title is required'),
        }),
        defineField({
            name: 'bulletPoints',
            title: 'Bullet Points',
            type: 'array',
            of: [{ type: 'string' }],
            validation: Rule => Rule.required().error('Bullet Points are required'),
        }),
    ],
});
