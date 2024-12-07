import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {name: 'details', title: 'Details', default: true},
    {name: 'assets', title: 'assets'},
  ],
  fieldsets: [{name: 'dates', title: 'Dates', options: {columns: 2}}],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      group: 'details',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'details',
      validation: (Rule) => Rule.required().max(400).error('No more than 400 characters'),
    }),
    defineField({
      name: 'framework',
      title: 'Framework',
      type: 'reference',
      group: 'details',
      to: [{type: 'framework'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      group: 'details',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      group: 'details',
      fieldset: 'dates',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      group: 'details',
      fieldset: 'dates',
    }),
    defineField({
      name: 'githubLink',
      title: 'Github Link',
      type: 'url',
      group: 'assets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'livePreview',
      title: 'Live Preview',
      type: 'url',
      group: 'assets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'assets',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
  //   preview: {
  //     select: {
  //       title: 'name',
  //       media: 'image',
  //     },
  //   },
})
