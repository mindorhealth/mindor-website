import { defineField, defineType } from 'sanity'

export const quizResult = defineType({
  name: 'quizResult',
  title: 'Quiz Result',
  type: 'document',
  fields: [
    defineField({
      name: 'tier',
      title: 'Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Mild', value: 'mild' },
          { title: 'Moderate', value: 'moderate' },
          { title: 'Severe', value: 'severe' },
        ],
      },
    }),
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Headline (Georgian)', type: 'string' },
        { name: 'en', title: 'Headline (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Description (Georgian)', type: 'text' },
        { name: 'en', title: 'Description (English)', type: 'text' },
      ],
    }),
    defineField({
      name: 'explanation',
      title: 'Explanation',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Explanation (Georgian)', type: 'text' },
        { name: 'en', title: 'Explanation (English)', type: 'text' },
      ],
    }),
    defineField({
      name: 'recommendedProducts',
      title: 'Recommended Products',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{ type: 'product' }],
        },
      ],
    }),
    defineField({
      name: 'bundlePrice',
      title: 'Bundle Price (1 month)',
      type: 'number',
    }),
    defineField({
      name: 'bundleThreeMonthPrice',
      title: 'Bundle Price (3 months)',
      type: 'number',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'object',
      fields: [
        { name: 'ka', title: 'CTA Text (Georgian)', type: 'string' },
        { name: 'en', title: 'CTA Text (English)', type: 'string' },
      ],
    }),
  ],
})
