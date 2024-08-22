import { defineField, defineType } from 'sanity';

export default defineType({
    name: 'heroText',
    title: 'Hero Text',
    type: 'document',
    fields: [
        defineField({
            name: 'mainText',
            title: 'Main Text',
            type: 'string',
        }),
        defineField({
            name: 'subText',
            title: 'Sub Text',
            type: 'text',
        }),
    ],
});
