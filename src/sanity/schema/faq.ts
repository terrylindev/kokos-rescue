import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
        defineField({
            name: 'question',
            title: 'Question',
            type: 'string',
            validation: Rule => Rule.required().error('Question is required')
        }),
        defineField({
            name: 'answer',
            title: 'Answer',
            type: 'text',
            validation: Rule => Rule.required().error('Answer is required')
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'General', value: 'general' },
                    { title: 'Adoption', value: 'adoption' },
                    { title: 'Foster', value: 'foster' },
                    { title: 'Donation', value: 'donation' },
                    { title: 'Contact', value: 'contact' },
                ],
            },
            validation: Rule => Rule.required().error('Category is required')
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            validation: Rule => Rule.required().error('Display order is required')
        }),
    ],
    preview: {
        select: {
            title: 'question',
            subtitle: 'category',
        },
    },
}); 