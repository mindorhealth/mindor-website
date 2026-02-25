import { defineField, defineType } from 'sanity'

export const quizSettings = defineType({
  name: 'quizSettings',
  title: 'Quiz Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'mildMaxScore',
      title: 'Mild Max Score',
      type: 'number',
      initialValue: 8,
    }),
    defineField({
      name: 'moderateMaxScore',
      title: 'Moderate Max Score',
      type: 'number',
      initialValue: 16,
    }),
  ],
})
