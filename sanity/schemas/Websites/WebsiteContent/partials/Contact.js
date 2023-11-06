export const Contact = {
  name: 'contactContent',
  title: 'Kontakt',
  type: 'object',
  fieldsets: [
    { name: 'company', title: 'Dane firmy' },
    { name: 'description', title: 'Opis firmy' },
    { name: 'social', title: 'Social' },
  ],
  group: 'contact',
  fields: [
    {
      name: 'contactDescription',
      title: 'Opis Firmy',
      type: 'string',
      fieldset: 'description',
    },
    {
      name: 'contactSocialFacebook',
      title: 'Facebook',
      type: 'string',
      fieldset: 'social',
    },
    {
      name: 'contactSocialInstagram',
      title: 'Instagram',
      type: 'string',
      fieldset: 'social',
    },
    {
      name: 'contactCompanyName',
      title: 'Nazwa firmy',
      type: 'string',
      fieldset: 'company',
    },
    {
      name: 'contactCompanyAddress',
      title: 'Adres',
      type: 'string',
      fieldset: 'company',
    },
    {
      name: 'contactCompanyId',
      title: 'NIP Firmy',
      type: 'string',
      fieldset: 'company',
    },
    {
      name: 'contactCompanyPhone',
      title: 'Telefon',
      type: 'string',
      fieldset: 'company',
    },
    {
      name: 'contactCompanyMail',
      title: 'E-Mail',
      type: 'string',
      fieldset: 'company',
    },
  ],
};
