const FooterImage = {
  name: "footerimage",
  title: "Zdjęcie w stopce",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Zdjęcie stopki",
      type: "image",
      options: {
        hotspot: true,
        metadata: ["lqip"],
      },
    },
  ],
};

export default FooterImage;
