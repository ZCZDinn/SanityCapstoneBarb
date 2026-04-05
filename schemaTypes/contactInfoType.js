import {defineType} from 'sanity'

export const contactInfoType = defineType({
  name: 'contactInfo',
  title: 'Contact Page Info',
  type: 'document',
  fields: [
    {
      name: 'mainHeader',
      title: 'The Main Header of the Contact Page',
      type: 'string'
    },
    {
      name: 'mailingAddressHeading',
      title: 'Mailing Address Subheading',
      type: 'string',
      initialValue: 'Mailing Address'
    },
    {
      name: 'mailingAddress',
      title: 'Address',
      type: 'text',
      description: 'The mailing address paragraph'
    },
    {
      name: 'generalInquiriesHeading',
      title: 'General Inquires Subheading',
      type: 'string',
      initialValue: 'General Inquires'
    },
    {
      name: 'generalInquiriesEmail',
      title: 'Email Address for General Inquires',
      type: 'email'
    },
    {
      name: 'presidentHeading',
      title: 'President Subheading',
      type: 'string',
      initialValue: 'President'
    },
    {
      name: 'presidentEmail',
      title: 'Email Address for President',
      type: 'email'
    },
    {
      name: 'boardOfDirectorsHeading',
      title: 'Board of Directors Subheading',
      type: 'string'
    },
    {
      name: 'boardOfDirectorsDescription',
      title: 'Description',
      type: 'text',
      description: 'Paragraph describing the board of directors'
    },
    {
      name: 'currentBoardHeading',
      title: 'Current board Subheading',
      type: 'string',
      description: 'Heading above current board table'
    },
    {
      name: 'currentBoardTable',
      title: 'Board Members Table',
      type: 'table',
      description: 'Table with columns: Position and Name'
    }
  ]
})