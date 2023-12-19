const FooterImage = {
  name: "localStore",
  title: "Sklep stacjonarny",
  type: "document",
  fields: [
    { name: "title", title: "Nagłówek", type: "i18n.string" },
    {
      name: "logo",
      title: "logo",
      type: "image",
    },
    { name: "storeDescription", title: "Opis", type: "i18n.string" },
    {
      title: "Film",
      name: "video",
      type: "file",
    },
  ],
};

export default FooterImage;
