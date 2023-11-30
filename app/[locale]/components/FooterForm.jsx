const FooterForm = ({ form, locale }) => {
  return (
    <div className="w-full text-main-fr">
      <h3 className="mb-8 text-3xl font-bold">
        {!form.title[`${locale}`] ? form.title["pl"] : form.title[`${locale}`]}
      </h3>
      <form className="flex w-full flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label for="userName" className="text-sm">
            {!form.name[`${locale}`] ? form.name["pl"] : form.name[`${locale}`]}
          </label>
          <input
            type="text"
            id="userName"
            placeholder={
              !form.namePlaceholder[`${locale}`]
                ? form.namePlaceholder["pl"]
                : form.namePlaceholder[`${locale}`]
            }
            className="bg-main-fr/10 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label for="email" className="text-sm">
            {!form.email[`${locale}`]
              ? form.email["pl"]
              : form.email[`${locale}`]}
          </label>
          <input
            type="email"
            id="email"
            placeholder={
              !form.emailPlaceholder[`${locale}`]
                ? form.emailPlaceholder["pl"]
                : form.emailPlaceholder[`${locale}`]
            }
            className="bg-main-fr/10 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label for="subject" className="text-sm">
            {!form.subject[`${locale}`]
              ? form.subject["pl"]
              : form.subject[`${locale}`]}
          </label>
          <input
            type="text"
            id="subject"
            placeholder={
              !form.subjectPlaceholder[`${locale}`]
                ? form.subjectPlaceholder["pl"]
                : form.subjectPlaceholder[`${locale}`]
            }
            className="bg-main-fr/10 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label for="text" className="text-sm">
            {!form.message[`${locale}`]
              ? form.message["pl"]
              : form.message[`${locale}`]}
          </label>
          <textarea
            name="content"
            id="text"
            className="resize-none bg-main-fr/10 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
            rows="5"
            placeholder={
              !form.messagePlaceholder[`${locale}`]
                ? form.messagePlaceholder["pl"]
                : form.messagePlaceholder[`${locale}`]
            }
          ></textarea>
        </div>
        <button
          className="bg-main-fr/10 px-8 py-4 rounded-sm hover:bg-main-fr/20 outline-none transition self-start"
          type="submit"
        >
          {!form.button[`${locale}`]
            ? form.button["pl"]
            : form.button[`${locale}`]}
        </button>
      </form>
    </div>
  );
};

export default FooterForm;
