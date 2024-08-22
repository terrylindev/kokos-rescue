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
        }),
        defineField({
            name: 'formUrl',
            title: 'Form URL',
            type: 'url',
        }),
    ],
});
