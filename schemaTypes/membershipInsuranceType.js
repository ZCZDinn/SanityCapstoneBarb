import {defineType, defineField} from 'sanity'

export const membershipInsuranceType = defineType({
  name: 'membershipInsuranceInfo',
  title: 'Membership and Insurance Page Info',
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