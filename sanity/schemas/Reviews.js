const Reviews = {
  name: "reviews",
  title: "Opinie Klientów",
  type: "document",
  fields: [
    { name: "title", title: "Nagłówek", type: "i18n.string" },
    {
      name: "icon",
      title: "Ikona",
      type: "image",
    },
    {
      name: "clients",
      title: "Opinie Klientów",
      type: "array",
      of: [
        {
          type: "object",
          name: "client",
          fields: [
            { type: "i18n.string", name: "descritpion", title: "Opinia" },
            { type: "i18n.string", name: "name", title: "Imię klienta" },
          ],
        },
      ],
    },
    { name: "description", title: "Opis", type: "i18n.string" },
    { name: "rating", title: "Ocena", type: "string" },
    { name: "ratingDescription", title: "Opis oceny", type: "i18n.string" },
    {
      name: "badge",
      title: "Odznaka",
      type: "image",
    },
  ],
};

export default Reviews;
