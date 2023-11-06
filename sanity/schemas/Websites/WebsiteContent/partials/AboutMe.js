export const AboutMe = {
  name: 'aboutMeContent',
  title: 'O mnie',
  type: 'object',
  group: 'aboutme',
  fields: [
    { name: 'name', title: 'Imię Nazwisko', type: 'string' },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
      options: {
        hotspot: true,
        metadata: ['lqip'],
      },
    },
    {
      name: 'description',
      title: 'Opis',
      type: 'array',
      of: [{ type: 'string' }],
    },
  ],
};
