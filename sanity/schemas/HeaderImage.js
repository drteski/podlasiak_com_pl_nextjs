const HeaderImage = {
  name: "headerimage",
  title: "Zdjęcie główne",
  type: "document",
  fields: [
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
};

export default HeaderImage;
