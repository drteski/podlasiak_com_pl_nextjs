const AboutUs = {
  name: "aboutus",
  title: "O nas",
  type: "document",
  fields: [
    { name: "title", title: "Nagłówek", type: "i18n.string" },
    {
      name: "image",
      title: "Ikona",
      type: "image",
    },
    { name: "firstRow", title: "Pierwszy akapit", type: "i18n.string" },
    { name: "secondRow", title: "Drugi akapit", type: "i18n.string" },
  ],
};

export default AboutUs;
