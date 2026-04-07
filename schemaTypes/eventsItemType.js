import {defineField, defineType} from 'sanity'

export const newsItemType = defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({
      name: 'eventDate',
      type: 'date',
    }),
    defineField({
      name: 'raceName',
      type: 'string',
    }),
    defineField({
      name: 'discipline',
      type: 'string',
    }),
    defineField({
      name: 'location',
      type: 'string',
    }),
    defineField({
      name: 'linkName',
      type: 'string',
    }),
    defineField({
      name: 'linkUrl',
      type: 'url',
    })
  ],
})