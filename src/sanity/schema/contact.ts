import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'contact',
    title: 'Contact Page',
    type: 'document',
    fields: [
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
        }),
        defineField({
            name: 'instagram',
            title: 'Instagram Handle',
            type: 'string',
        }),
    ],
});
