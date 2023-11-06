export const Portfolio = {
  name: 'portfolioContent',
  title: 'Portfolio',
  type: 'object',
  group: 'portfolio',
  fields: [
    { name: 'title', title: 'Tytuł', type: 'string' },
    {
      name: 'images',
      title: 'Zdjęcia',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'images',
          fields: [
            { type: 'string', name: 'title', title: 'Tytuł' },
            { type: 'string', name: 'description', title: 'Krótki opis' },
            {
              name: 'image',
              title: 'Zdjęcie',
              type: 'image',
              options: {
                hotspot: true,
                metadata: ['lqip'],
              },
            },
          ],
        },
      ],
    },
  ],
};
