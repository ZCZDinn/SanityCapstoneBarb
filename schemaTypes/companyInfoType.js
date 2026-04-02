import {defineType} from 'sanity'

export const companyInfoType = defineType({
  name: 'companyInfo',
  title: 'Company Page Info',
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