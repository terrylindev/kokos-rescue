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
        }),
        defineField({
            name: 'url',
            title: 'Donation URL',
            type: 'url',
        }),
    ],
});
