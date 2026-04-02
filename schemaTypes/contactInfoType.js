import {defineType} from 'sanity'

export const contactInfoType = defineType({
  name: 'contactInfo',
  title: 'Contact Page Info',
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