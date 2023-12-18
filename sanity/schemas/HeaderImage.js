const HeaderImage = {
  name: "headerimage",
  title: "Zdjęcie główne",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Tytuł",
      type: "i18n.string",
    },
    {
      name: "heros",
      title: "Zdjęcia na stronie głównej i opis",
      type: "array",
      of: [
        {
          type: "object",
          name: "hero",
          fields: [
            {
              name: "image",
              title: "Zdjęcie główne",
              type: "image",
              options: {
                hotspot: true,
                metadata: ["lqip"],
              },
            },
          ],
        },
      ],
    },
  ],
};

export default HeaderImage;
