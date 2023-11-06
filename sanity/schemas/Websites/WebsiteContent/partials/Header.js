export const Header = {
  name: "headerContent",
  title: "Slider",
  type: "object",
  fieldsets: [
    { name: "hero", title: "Główny tekst" },
    { name: "slider", title: "Zdjęcie główne" },
  ],
  group: "header",
  fields: [
    {
      name: "headerTitle",
      title: "Nagłówek główny",
      type: "string",
      fieldset: "hero",
    },
    {
      name: "headerDesc",
      title: "Krótki opis",
      type: "string",
      fieldset: "hero",
    },
    {
      name: "tags",
      title: "Tagi",
      type: "array",
      fieldset: "hero",
      description: "Tagi pod głównym nagłówkiem, najlepiej maksymalnie 3szt.",
      of: [
        {
          type: "object",
          name: "tag",
          fields: [
            {
              name: "icon",
              type: "image",
              title: "Ikona",
              description: "Najlepiej czarne i tylko svg.",
            },
            { type: "string", name: "title", title: "Nazwa" },
          ],
        },
      ],
    },
    {
      name: "image",
      type: "image",
      title: " ",
      fieldset: "slider",
      description: "Główne zdjęcie na sliderze",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
  ],
};
