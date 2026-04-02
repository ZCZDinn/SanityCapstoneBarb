import {defineField, defineType} from 'sanity'

export const linkType = defineType({
  name: 'linkItem',
  title: 'Links',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      type: 'string',
    }),
    defineField({
      name: 'facebook',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      type: 'string',
    }),
  ],
})