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
            validation: Rule => Rule.required().error('Description is required')
        }),
        defineField({
            name: 'instagramEmbed',
            title: 'Instagram Embed Code',
            type: 'text',
            validation: Rule => Rule.required().error('Instagram Embed Code is required')
        }),
    ],
});
