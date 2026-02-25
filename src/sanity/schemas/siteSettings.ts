import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Name',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'primaryColor',
      title: 'Primary Color',
      type: 'string',
      initialValue: '#2D5F3F',
    }),
    defineField({
      name: 'secondaryColor',
      title: 'Secondary Color',
      type: 'string',
      initialValue: '#F5F1EB',
    }),
    defineField({
      name: 'accentColor',
      title: 'Accent Color',
      type: 'string',
      initialValue: '#4A7C5C',
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      initialValue: '#FAFAF8',
    }),
    defineField({
      name: 'fontHeading',
      title: 'Heading Font',
      type: 'string',
      initialValue: 'DM Serif Display',
    }),
    defineField({
      name: 'fontBody',
      title: 'Body Font',
      type: 'string',
      initialValue: 'Inter',
    }),
  ],
})
