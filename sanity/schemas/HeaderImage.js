const HeaderImage = {
  name: "headerimage",
  title: "Zdjęcie główne",
  type: "document",
  fields: [
    {
      name: "images",
      title: "Zdjęcia na stronie głównej",
      description: "Przynajmniej 4 zdjęcia",
      type: "array",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            {
              name: "type",
              title: "Rodzaj",
              description: "Rodzaj zdjęcia Rea lub Tutumi",
              type: "string",
            },
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
