import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'googleForm',
    title: 'Google Form',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().error('Title is required'),
        }),
        defineField({
            name: 'formUrl',
            title: 'Form URL',
            type: 'url',
            validation: Rule => Rule.required().error('Form URL is required'),
        }),
    ],
});
