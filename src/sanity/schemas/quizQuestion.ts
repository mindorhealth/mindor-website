import { defineField, defineType } from 'sanity'

export const quizQuestion = defineType({
  name: 'quizQuestion',
  title: 'Quiz Question',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'question',
      title: 'Question',
      type: 'object',
      fields: [
        { name: 'ka', title: 'Question (Georgian)', type: 'string' },
        { name: 'en', title: 'Question (English)', type: 'string' },
      ],
    }),
    defineField({
      name: 'answers',
      title: 'Answers',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'text',
              title: 'Answer Text',
              type: 'object',
              fields: [
                { name: 'ka', title: 'Text (Georgian)', type: 'string' },
                { name: 'en', title: 'Text (English)', type: 'string' },
              ],
            },
            {
              name: 'score',
              title: 'Score',
              type: 'number',
            },
          ],
        },
      ],
    }),
  ],
})
