const NabBar = {
  name: "navbar",
  title: "Menu główne",
  type: "document",
  fields: [
    {
      name: "imageLight",
      title: "Logo",
      description: "Logo na ciemne tło",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
    {
      name: "imageDark",
      title: "Logo",
      description: "Logo na jasne tło",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
    {
      name: "links",
      title: "Linki",
      type: "array",
      of: [
        {
          type: "object",
          name: "offer",
          fields: [
            { type: "i18n.string", name: "title", title: "Nazwa" },
            { type: "string", name: "url", title: "Link" },
          ],
        },
      ],
    },
  ],
};

export default NabBar;
