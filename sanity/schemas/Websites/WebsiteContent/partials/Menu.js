export const Menu = {
  name: "menuContent",
  title: "Menu",
  type: "object",
  fieldsets: [
    { name: "logo", title: "Logo" },
    { name: "navbar", title: "Lista linków" },
  ],
  group: "menu",
  fields: [
    {
      name: "imageDark",
      type: "image",
      title: "Ciemne",
      fieldset: "logo",
      description: "Ciemne. Główne logo na pasku nawigacji.",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
    {
      name: "imageLight",
      type: "image",
      title: "Jasne",
      fieldset: "logo",
      description: "Jasne. Główne logo na pasku nawigacji.",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
    {
      name: "menulinks",
      title: " ",
      type: "array",
      description:
        "Lista linków na pasku nawigacji. Linki są podłączone do sekcji strony po id. Jeżeli ma być nowy link to trzeba wrzucić pełny adres strony https://",
      of: [
        {
          type: "object",
          name: "menulink",
          fields: [
            { type: "string", name: "title", title: "Nazwa" },
            { type: "string", name: "url", title: "Link" },
          ],
        },
      ],
      fieldset: "navbar",
    },
  ],
};
