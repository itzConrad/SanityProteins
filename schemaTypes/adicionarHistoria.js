import { defineField, defineType } from "sanity";

export const adicionarHistoria = defineType({
  name: 'historia',
  title: 'História',
  type: 'document',
  fields: [
    defineField({
      name: 'texto', 
      type: 'string',
    }),
  ],
});
