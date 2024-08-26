import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'about',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'content',
            title: 'Content',
            type: 'text',
            validation: Rule => Rule.required().error('Content is required')
        }),
    ],
});
