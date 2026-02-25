// Helper to create a localized field (ka + en)
export function localized(name: string, title: string, type: 'string' | 'text' = 'string') {
  return {
    name,
    title,
    type: 'object',
    fields: [
      {
        name: 'ka',
        title: `${title} (Georgian)`,
        type,
      },
      {
        name: 'en',
        title: `${title} (English)`,
        type,
      },
    ],
  }
}
