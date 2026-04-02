import {defineType} from 'sanity'

export const nlCyclingEventsType = defineType({
  name: 'nlCyclingEventsInfo',
  title: 'NL Cycling Events Page Info',
  type: 'document',
  fields: [
    {
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}, {type:'image'}]
    }
    ],
})