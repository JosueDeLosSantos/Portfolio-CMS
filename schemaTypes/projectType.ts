import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  groups: [
    {name: 'details', title: 'Details'},
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'framework',
      title: 'Framework',
      type: 'string',
      group: 'details',
      options: {
        list: [
          {title: 'Next.js', value: 'Next.js'},
          {title: 'React', value: 'React'},
          {title: 'JavaScript', value: 'JavaScript'},
        ],
        layout: 'radio',
      },
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
