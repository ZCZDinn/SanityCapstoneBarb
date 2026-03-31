import {defineType} from 'sanity'

export const membershipInsuranceType = defineType({
  name: 'membershipInsuranceInfo',
  title: 'Membership and Insurance Page Info',
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