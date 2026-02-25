import { defineField, defineType } from 'sanity'

export const homePage = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    // Hero Section
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Hero Headline (Georgian)', type: 'string' },
        { name: 'en', title: 'Hero Headline (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'heroSubtext',
      title: 'Hero Subtext',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Hero Subtext (Georgian)', type: 'text' },
        { name: 'en', title: 'Hero Subtext (English)', type: 'text' },
      ],
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Hero CTA Text',
      type: 'object',
      fields: [
        { name: 'ka', title: 'CTA Text (Georgian)', type: 'string' },
        { name: 'en', title: 'CTA Text (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'heroBackgroundType',
      title: 'Hero Background Type',
      type: 'string',
      options: {
        list: [
          { title: 'Gradient', value: 'gradient' },
          { title: 'Image', value: 'image' },
          { title: 'Animation', value: 'animation' },
        ],
      },
    }),

    // Symptoms Section
    defineField({
      name: 'symptoms',
      title: 'Symptoms',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'icon', title: 'Icon', type: 'string' },
            {
              name: 'title',
              title: 'Title',
              type: 'object',
              fields: [
                { name: 'ka', title: 'Title (Georgian)', type: 'string' },
                { name: 'en', title: 'Title (English)', type: 'string' },
              ],
            },
            {
              name: 'description',
              title: 'Description',
              type: 'object',
              fields: [
                { name: 'ka', title: 'Description (Georgian)', type: 'string' },
                { name: 'en', title: 'Description (English)', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),

    // Explanation Section
    defineField({
      name: 'explanationHeadline',
      title: 'Explanation Headline',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Headline (Georgian)', type: 'string' },
        { name: 'en', title: 'Headline (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'explanationBody',
      title: 'Explanation Body',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Body (Georgian)', type: 'text' },
        { name: 'en', title: 'Body (English)', type: 'text' },
      ],
    }),

    // Doctor Section
    defineField({
      name: 'doctorName',
      title: 'Doctor Name',
      type: 'string',
    }),
    defineField({
      name: 'doctorTitle',
      title: 'Doctor Title',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Title (Georgian)', type: 'string' },
        { name: 'en', title: 'Title (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'doctorPhoto',
      title: 'Doctor Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'doctorBio',
      title: 'Doctor Bio',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Bio (Georgian)', type: 'text' },
        { name: 'en', title: 'Bio (English)', type: 'text' },
      ],
    }),

    // Credibility Stats
    defineField({
      name: 'credibilityStats',
      title: 'Credibility Stats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', title: 'Number', type: 'string' },
            {
              name: 'label',
              title: 'Label',
              type: 'object',
              fields: [
                { name: 'ka', title: 'Label (Georgian)', type: 'string' },
                { name: 'en', title: 'Label (English)', type: 'string' },
              ],
            },
          ],
        },
      ],
    }),

    // Steps Section
    defineField({
      name: 'steps',
      title: 'Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'object',
              fields: [
                { name: 'ka', title: 'Title (Georgian)', type: 'string' },
                { name: 'en', title: 'Title (English)', type: 'string' },
              ],
            },
            {
              name: 'description',
              title: 'Description',
              type: 'object',
              fields: [
                { name: 'ka', title: 'Description (Georgian)', type: 'string' },
                { name: 'en', title: 'Description (English)', type: 'string' },
              ],
            },
            { name: 'icon', title: 'Icon', type: 'string' },
          ],
        },
      ],
    }),

    // Testimonials
    defineField({
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'quote',
              title: 'Quote',
              type: 'object',
              fields: [
                { name: 'ka', title: 'Quote (Georgian)', type: 'text' },
                { name: 'en', title: 'Quote (English)', type: 'text' },
              ],
            },
            { name: 'name', title: 'Name', type: 'string' },
            { name: 'duration', title: 'Duration', type: 'string' },
            { name: 'product', title: 'Product', type: 'string' },
          ],
        },
      ],
    }),

    // Final CTA
    defineField({
      name: 'finalCtaHeadline',
      title: 'Final CTA Headline',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Headline (Georgian)', type: 'string' },
        { name: 'en', title: 'Headline (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'finalCtaButtonText',
      title: 'Final CTA Button Text',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Button Text (Georgian)', type: 'string' },
        { name: 'en', title: 'Button Text (English)', type: 'string' },
      ],
    }),
  ],
})
