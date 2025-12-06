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
            validation: Rule => Rule.required().error('Name is required')
        }),
        defineField({
            name: 'age',
            title: 'Age',
            type: 'string',
            validation: Rule => Rule.required().error('Age is required')
        }),
        defineField({
            name: 'gender',
            title: 'Gender',
            type: 'string',
            options: {
                list: [
                    { title: 'Male', value: 'male' },
                    { title: 'Female', value: 'female' },
                ],
            },
            validation: Rule => Rule.required().error('Gender is required')
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
        }),
        defineField({
            name: 'photo',
            title: 'Photo (Legacy)',
            type: 'image',
            options: {
                hotspot: true,
            },
            description: 'Legacy single photo field. Use "Additional Photos" for new uploads.',
            hidden: ({ document }) => !!(document?.photos && (document.photos as unknown[]).length > 0),
        }),
        defineField({
            name: 'photos',
            title: 'Photos',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: {
                        hotspot: true,
                    },
                },
            ],
            description: 'Add multiple photos for this cat. The first photo will be shown as the main image.',
        }),
        defineField({
            name: 'instagramLink',
            title: 'Instagram Link',
            type: 'url',
            validation: Rule => Rule.required().error('Instagram Link is required')
        }),
    ],
});
