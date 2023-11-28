const FooterContact = {
  name: "footercontact",
  title: "Dane Kontaktowe",
  type: "document",
  fields: [
    { name: "title", title: "Nagłówek", type: "i18n.string" },
    { name: "locale", title: "Kraj", type: "string" },
    {
      name: "contactPlaces",
      title: "Dane Kontaktowe",
      type: "array",
      of: [
        {
          type: "object",
          name: "contactPlace",
          fields: [
            {
              name: "icon",
              title: "Ikona",
              type: "image",
            },
            { type: "string", name: "title", title: "Tytuł" },
            {
              name: "contacts",
              title: "Cechy",
              type: "array",
              of: [
                {
                  type: "object",
                  name: "contact",
                  fields: [
                    {
                      type: "string",
                      name: "subTitle",
                      title: "Nazwa działu",
                    },
                    {
                      type: "string",
                      name: "name",
                      title: "Typ kontaktu",
                    },
                    { type: "string", name: "value", title: "Kontakt" },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default FooterContact;
