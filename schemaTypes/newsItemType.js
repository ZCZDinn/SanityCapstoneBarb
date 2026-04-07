import {defineField, defineType} from 'sanity'

export const newsItemType = defineType({
  name: 'newsItem',
  title: 'News Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'postedAt',
      type: 'datetime',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
        slugify: (input) =>
          input
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, '')   // remove non-word chars
            .replace(/\s+/g, '-')      // spaces -> dashes
            .replace(/-+/g, '-'),      // collapse multiple dashes
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortenedContent',
      type: 'text',
    }),
    defineField({
      title: 'Content', 
      name: 'content',
      type: 'array', 
      of: [{type: 'block'}, {type:'image'}, {type: 'table'}]
    })
  ],
})