const Email = {
  name: "emailTemplate",
  title: "Formularz kontaktowy",
  type: "document",
  fields: [
    { name: "greeting", title: "Powitanie", type: "i18n.string" },
    { name: "senderSubject", title: "Temat nadawcy", type: "i18n.string" },
    { name: "clientSubject", title: "Temat klient", type: "i18n.string" },
    { name: "clientMessage", title: "Wiadomość klienta", type: "i18n.string" },
    { name: "farewell", title: "Pozdrowienia", type: "i18n.string" },
    { name: "messageContents", title: "Treść wiadomości", type: "i18n.string" },
  ],
};

export default Email;
