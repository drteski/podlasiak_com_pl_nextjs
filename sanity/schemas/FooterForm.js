const FooterForm = {
  name: "footerform",
  title: "Formularz kontaktowy",
  type: "document",
  fields: [
    { name: "title", title: "Nagłówek", type: "i18n.string" },
    {
      name: "name",
      title: "Nagłówek pola imię i nazwisko",
      type: "i18n.string",
    },
    {
      name: "namePlaceholder",
      title: "Pole imię i nazwisko",
      type: "i18n.string",
    },
    {
      name: "email",
      title: "Nagłówek pola email",
      type: "i18n.string",
    },
    {
      name: "emailPlaceholder",
      title: "Pole email",
      type: "i18n.string",
    },
    {
      name: "subject",
      title: "Nagłówek pola temat",
      type: "i18n.string",
    },
    {
      name: "subjectPlaceholder",
      title: "Pole temat",
      type: "i18n.string",
    },
    {
      name: "message",
      title: "Nagłówek pola wiadomość",
      type: "i18n.string",
    },
    {
      name: "messagePlaceholder",
      title: "Pole wiadomość",
      type: "i18n.string",
    },
    {
      name: "button",
      title: "Przycisk wyślij",
      type: "i18n.string",
    },
  ],
};

export default FooterForm;
