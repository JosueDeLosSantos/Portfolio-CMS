import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'certification',
  title: 'Certification',
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'certificationLink',
      title: 'Certification Link',
      type: 'url',
      group: 'assets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'spanishCertificationLink',
      title: 'Spanish Certification Link',
      type: 'url',
      group: 'assets',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      group: 'details',
      fieldset: 'dates',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      group: 'details',
      fieldset: 'dates',
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
    }),
    defineField({
      name: 'spanishImage',
      title: 'Spanish Image',
      type: 'image',
      group: 'assets',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'englishFile',
      title: 'English certification',
      type: 'file',
      group: 'assets',
    }),
    defineField({
      name: 'spanishFile',
      title: 'Spanish certification',
      type: 'file',
      group: 'assets',
    }),
  ],
})
