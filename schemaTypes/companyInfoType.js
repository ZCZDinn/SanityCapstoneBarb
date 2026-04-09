import {defineType, defineField} from 'sanity'

export const companyInfoType = defineType({
  name: 'companyInfo',
  title: 'Company Page Info',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
    }),
    defineField({
      name: 'order',
      type: 'number',
    }),
    defineField({
        title: 'Content', 
        name: 'content',
        type: 'array', 
        of: [{type: 'block'}, {type:'image'}, {type: 'table'}]
    })
  ],
})