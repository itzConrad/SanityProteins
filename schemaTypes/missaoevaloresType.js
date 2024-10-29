import { defineField, defineType } from 'sanity'

export const missaoevaloresType = defineType({
    name: 'missaoevalores',
    title: 'MissaoEValores',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'body',
            type: 'string',
        })
    ],
})