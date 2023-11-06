const CountriesBar = {
  name: "countriesbar",
  title: "Menu językowe",
  type: "document",
  fields: [
    { name: "name", title: "Kraj", type: "string" },
    { name: "link", title: "Link", type: "string" },
    {
      name: "flag",
      title: "Flaga",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
    { name: "prority", title: "Priorytet", type: "number" },
  ],
};

export default CountriesBar;
