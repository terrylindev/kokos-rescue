import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'cat',
    title: 'Cat',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
        }),
        defineField({
            name: 'age',
            title: 'Age',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'instagramLink',
            title: 'Instagram Link',
            type: 'url',
        }),
    ],
});
