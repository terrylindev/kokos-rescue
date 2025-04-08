import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'successStory',
    title: 'Success Story',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            description: 'Name of the person and their cat (e.g., "Jessica & Whiskers")',
            type: 'string',
            validation: Rule => Rule.required().error('Name is required')
        }),
        defineField({
            name: 'time',
            title: 'Time Period',
            description: 'When they adopted/fostered (e.g., "6 months ago" or "Foster parent for 2+ years")',
            type: 'string',
            validation: Rule => Rule.required().error('Time period is required')
        }),
        defineField({
            name: 'initial',
            title: 'Initial',
            description: 'First letter of the person\'s name',
            type: 'string',
            validation: Rule => Rule.max(1).error('Only one character allowed for initial')
        }),
        defineField({
            name: 'color',
            title: 'Color Theme',
            type: 'string',
            options: {
                list: [
                    { title: 'Red', value: 'red' },
                    { title: 'Blue', value: 'blue' },
                    { title: 'Green', value: 'green' },
                    { title: 'Purple', value: 'purple' },
                    { title: 'Yellow', value: 'yellow' },
                    { title: 'Pink', value: 'pink' },
                ],
            },
            validation: Rule => Rule.required().error('Color theme is required')
        }),
        defineField({
            name: 'type',
            title: 'Story Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Adoption', value: 'adoption' },
                    { title: 'Foster', value: 'foster' },
                ],
            },
            validation: Rule => Rule.required().error('Story type is required')
        }),
        defineField({
            name: 'story',
            title: 'Story',
            description: 'The success story text',
            type: 'text',
            validation: Rule => Rule.required().error('Story content is required')
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'type',
            media: 'photo'
        }
    }
}); 