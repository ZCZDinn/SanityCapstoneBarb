import {defineType} from 'sanity'

export const athletePerformanceType = defineType({
  name: 'athletePerformanceInfo',
  title: 'Athlete Performance Page Info',
  type: 'document',
  fields: [
    {
      name: 'mainHeader',
      title: 'The Main Header of the athlete performance Page',
      type: 'string'
    },
    {
      name: 'athletePerformanceDescription',
      title: 'athlete Performance Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Introduction to athelete performance program'
    },
    {
      name: 'cyclingActivitySubheading',
      title: 'Cycling Activity Subheading',
      type: 'string'
    },
    {
      name: 'cyclingActivityDescription',
      title: 'Cycling Activity Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Introduction to the cycling activity table below'
    },
    {
      name: 'cyclingActivityTable',
      title: 'cycling Activity Table',
      type: 'table',
      description: 'Table with info on columns: Cycling activity, and Description'
    }, {
      name: 'contact',
      title: 'Contact Info',
      type: 'array',
      of: [{type: 'block'}],
      description: 'general contact info for interest in cycling'
    },
    {
      name: 'highPerformanceSubheading',
      title: 'High Performance Subheading',
      type: 'string'
    },
    {
      name: 'highPerformanceDescription',
      title: 'High Performance Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Paragraph describing high performance program'
    },
    {
      name: 'roadHighPerformanceSubheading',
      title: 'Road High Performance Subheading',
      type: 'string'
    },
    {
      name: 'roadHighPerformanceAddress',
      title: 'Road High Performance Address',
      type: 'text',
      description: 'email address for road coach'
    },
    {
      name: 'mountainHighPerformanceSubheading',
      title: 'Mountain High Performance Subheading',
      type: 'string'
    },
    {
      name: 'mountainHighPerformanceAddress',
      title: 'Mountain High Performance Address',
      type: 'text',
      description: 'email address for mountain biking coach'
    },
        {
      name: 'canadaGamesSubheading',
      title: 'Canada Games Subheading',
      type: 'string'
    },
    {
      name: 'canadaGamesDescription',
      title: 'Canada Games Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'Info on Canada Games'
    },
    {
      name: 'teamsTable',
      title: 'Team MembersTable',
      type: 'table',
      description: 'Table with members of both teams, road and mountain bike'
    },
    {
      name: 'teamLocationDescription',
      title: 'Team Location Description',
      type: 'array',
      of: [{type: 'block'}],
      description: 'List where each team competes'
    },
    {
      name: 'roadTeamImage',
      title: 'road Team Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'mountainTeamImage',
      title: 'Mountain Team Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'teamExpectationsSubheading',
      title: 'Team Expectations Subheading',
      type: 'string'
    },
    {
      name: 'teamExpectations',
      title: 'Team Expectations',
      type: 'text',
      description: 'Description of team expectations for athletes'}
    ],
})