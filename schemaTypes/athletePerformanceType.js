import {defineType} from 'sanity'

export const athletePerformanceType = defineType({
  name: 'athletePerformanceInfo',
  title: 'Athlete Performance Page Info',
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