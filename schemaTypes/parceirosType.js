import { defineField, defineType } from 'sanity'

export const parceirosType = defineType({
    name: 'parceiros',
    title: 'Parceiros',
    type: 'document',
    fields: [
        defineField({
            name: 'LogoParceiros',
            type: 'image',
        }),
    ],
})