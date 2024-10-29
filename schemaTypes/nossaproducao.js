import { defineField, defineType } from 'sanity'

export const nossaproducao = defineType({
    name: 'nossaproducao',
    title: 'Nossa produção',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'body',
            type: 'string',
        }),
    ],
})
