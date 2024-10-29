import { defineField, defineType } from 'sanity'

export const produtosType = defineType({
    name: 'produto',
    title: 'Produto',
    type: 'document',
    fields: [
        defineField({
            name: 'Produto',
            type: 'string',
        }),
        defineField({
            name: 'Descricao',
            type: 'string',
        }),
        defineField({
            name: 'Imagem',
            type: 'image',
        }),
    ],
})