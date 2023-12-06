const Stores = {
  name: "stores",
  title: "Sklepy",
  type: "document",
  fields: [
    { name: "title", title: "Nagłówek", type: "i18n.string" },
    { name: "priority", title: "Priorytet", type: "number" },
    {
      name: "storeLogo",
      title: "Logo Sklepu",
      type: "image",
    },
    {
      name: "stores",
      title: "Sklepy",
      type: "array",
      of: [
        {
          type: "object",
          name: "store",
          fields: [
            {
              name: "flag",
              title: "Flaga",
              type: "image",
            },
            { type: "string", name: "name", title: "Kraj" },
            { type: "string", name: "url", title: "Link" },
          ],
        },
      ],
    },
  ],
};

export default Stores;
