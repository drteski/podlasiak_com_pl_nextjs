export const Offers = {
  name: 'offersContent',
  title: 'Oferta',
  type: 'object',
  group: 'offers',
  fields: [
    { name: 'title', title: 'Tytuł', type: 'string' },
    {
      name: 'alt',
      title: 'Alternatywny opis zdjęcia',
      type: 'string',
    },
    {
      name: 'offers',
      title: 'Oferta',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'offer',
          fields: [
            {
              name: 'icon',
              title: 'Ikona',
              type: 'image',
            },
            { type: 'string', name: 'title', title: 'Nazwa' },
            { type: 'string', name: 'descriptionTitle', title: 'Tytuł opisu' },
            { type: 'string', name: 'description', title: 'Opis' },
            {
              type: 'array',
              name: 'images',
              title: 'Zdjęcia',
              of: [
                {
                  name: 'image',
                  title: 'Zdjęcie',
                  type: 'image',
                  fieldset: 'logo',
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
    },
  ],
};
