import SanityImage from "@/app/[locale]/components/SanityImage";

const FooterContact = ({ contact, locale }) => {
  let currentContact;
  currentContact = contact.filter((cont) => cont.locale === locale)[0];
  if (!currentContact) {
    currentContact = contact.filter((cont) => cont.locale === "pl")[0];
  }

  return (
    <div className="w-full text-main-fr">
      <h3 className="mb-8 text-3xl font-bold">
        {!currentContact.title[`${locale}`]
          ? currentContact.title["pl"]
          : currentContact.title[`${locale}`]}
      </h3>
      <div className="">
        {currentContact.contactPlaces.map((details) => (
          <div key={details._key}>
            <div className="flex items-center gap-2 text-xl font-medium text-main-fr">
              <SanityImage data={details.icon} className="invert" />
              <h4>{details.title}</h4>
            </div>
            <div>
              {details.contacts.map((detail) => (
                <div className="mb-8 ml-10 flex flex-col" key={detail._key}>
                  <h5 className="py-2 font-medium">{detail.subTitle}</h5>
                  {detail.contactTypes.map((type) => (
                    <span key={type._key}>
                      <strong>{type.name}: </strong>
                      {type.value}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterContact;
