const NabBar = {
  name: "navbar",
  title: "Menu główne",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Logo",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
    {
      name: "offers",
      title: "Linki",
      type: "array",
      of: [
        {
          type: "object",
          name: "offer",
          fields: [
            { type: "string", name: "url", title: "Link" },
            { type: "i18n.string", name: "title", title: "Nazwa" },
          ],
        },
      ],
    },
  ],
};

export default NabBar;
