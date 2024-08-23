import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'fosterReasons',
    title: 'Foster Reasons',
    type: 'document',
    fields: [
        defineField({
            name: 'number',
            title: 'Number',
            type: 'number',
        }),
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'content',
            title: 'Content',
            type: 'string',
        }),
    ],
});
