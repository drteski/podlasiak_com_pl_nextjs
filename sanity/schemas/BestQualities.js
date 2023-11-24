const BestQualities = {
  name: "bestqualities",
  title: "Cechy sprzedawcy",
  type: "document",
  fields: [
    { name: "title", title: "Nagłówek", type: "i18n.string" },
    {
      name: "features",
      title: "Cechy",
      type: "array",
      of: [
        {
          type: "object",
          name: "feature",
          fields: [
            {
              name: "icon",
              title: "Ikona",
              type: "image",
            },
            { type: "i18n.string", name: "title", title: "Tytuł" },
            { type: "i18n.string", name: "descritpion", title: "Opis" },
          ],
        },
      ],
    },
  ],
};

export default BestQualities;
