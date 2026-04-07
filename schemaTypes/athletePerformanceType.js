import {defineType, defineField} from 'sanity'

export const athletePerformanceType = defineType({
  name: 'athletePerformanceInfo',
  title: 'Athlete Performance Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'order',
      type: 'string',
    }),
    defineField({
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}, {type:'image'}, {type: 'table'}]
    })
  ],
})