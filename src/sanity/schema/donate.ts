import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'donationMethod',
    title: 'Donation Method',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Method Name',
            type: 'string',
            validation: Rule => Rule.required().error('Method Name is required')
        }),
        defineField({
            name: 'url',
            title: 'Donation URL',
            type: 'url',
            validation: Rule => Rule.required().error('Donation URL is required')
        }),
    ],
});
