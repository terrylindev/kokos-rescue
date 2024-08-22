import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'card',
    title: 'Card',
    type: 'document',
    fields: [
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
        }),
        defineField({
            name: 'instagramEmbed',
            title: 'Instagram Embed Code',
            type: 'text',
        }),
    ],
});
