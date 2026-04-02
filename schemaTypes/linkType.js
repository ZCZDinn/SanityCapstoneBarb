import {defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'linkItem',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'url',
      type: 'url',
    }),
  ],
})