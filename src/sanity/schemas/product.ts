import { defineField, defineType } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Name (Georgian)', type: 'string' },
        { name: 'en', title: 'Name (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name.en',
        maxLength: 96,
      },
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
      name: 'price',
      title: 'Price (1 month)',
      type: 'number',
    }),
    defineField({
      name: 'priceThreeMonth',
      title: 'Price (3 months)',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'ka', title: 'Benefit (Georgian)', type: 'string' },
            { name: 'en', title: 'Benefit (English)', type: 'string' },
          ],
        },
      ],
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingredients',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
