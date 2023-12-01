"use client";
import { useRef, useState } from "react";
import axios from "axios";

const FooterForm = ({ form, locale }) => {
  const [sent, setSent] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const subjectRef = useRef(null);
  const messageRef = useRef(null);
  const handleSendEmail = async (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;
    if (name === "") nameRef.current.style.borderColor = "#ff0000";
    if (email === "") emailRef.current.style.borderColor = "#ff0000";
    if (subject === "") subjectRef.current.style.borderColor = "#ff0000";
    if (message === "") messageRef.current.style.borderColor = "#ff0000";
    if (name !== "" && email !== "" && subject !== "" && message !== "")
      await axios
        .post("/api/send", { name, email, subject, message, locale })
        .then(() => {
          setSent(true);
          nameRef.current.value = "";
          emailRef.current.value = "";
          subjectRef.current.value = "";
          messageRef.current.value = "";
          setTimeout(() => setSent(false), 2000);
        });
  };

  return (
    <div className="w-full text-main-fr">
      <h3 className="mb-8 text-3xl font-bold">
        {!form.title[`${locale}`] ? form.title["pl"] : form.title[`${locale}`]}
      </h3>
      <form onSubmit={handleSendEmail} className="flex w-full flex-col gap-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="userName" className="text-sm">
            {!form.name[`${locale}`] ? form.name["pl"] : form.name[`${locale}`]}
          </label>
          <input
            ref={nameRef}
            onChange={(e) => (e.target.style.borderColor = null)}
            type="text"
            id="userName"
            placeholder={
              !form.namePlaceholder[`${locale}`]
                ? form.namePlaceholder["pl"]
                : form.namePlaceholder[`${locale}`]
            }
            className="bg-main-fr/20 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm">
            {!form.email[`${locale}`]
              ? form.email["pl"]
              : form.email[`${locale}`]}
          </label>
          <input
            ref={emailRef}
            onChange={(e) => (e.target.style.borderColor = null)}
            type="email"
            id="email"
            placeholder={
              !form.emailPlaceholder[`${locale}`]
                ? form.emailPlaceholder["pl"]
                : form.emailPlaceholder[`${locale}`]
            }
            className="bg-main-fr/20 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="text-sm">
            {!form.subject[`${locale}`]
              ? form.subject["pl"]
              : form.subject[`${locale}`]}
          </label>
          <input
            ref={subjectRef}
            onChange={(e) => (e.target.style.borderColor = null)}
            type="text"
            id="subject"
            placeholder={
              !form.subjectPlaceholder[`${locale}`]
                ? form.subjectPlaceholder["pl"]
                : form.subjectPlaceholder[`${locale}`]
            }
            className="bg-main-fr/20 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="text" className="text-sm">
            {!form.message[`${locale}`]
              ? form.message["pl"]
              : form.message[`${locale}`]}
          </label>
          <textarea
            ref={messageRef}
            onChange={(e) => (e.target.style.borderColor = null)}
            name="content"
            id="text"
            className="resize-none bg-main-fr/20 px-5 py-4 rounded-sm placeholder:text-main-fr/30 border-2 border-transparent hover:bg-main-fr/20 focus:border-main-fr/30 outline-none transition"
            rows="5"
            placeholder={
              !form.messagePlaceholder[`${locale}`]
                ? form.messagePlaceholder["pl"]
                : form.messagePlaceholder[`${locale}`]
            }
          ></textarea>
        </div>
        <div className="flex justify-between items-center">
          <button
            className="bg-main-fr/20 px-8 py-4 rounded-sm hover:bg-main-fr/20 outline-none transition self-start"
            type="submit"
          >
            {!form.button[`${locale}`]
              ? form.button["pl"]
              : form.button[`${locale}`]}
          </button>
          {sent && (
            <p>
              {!form.confirmation[`${locale}`]
                ? form.confirmation["pl"]
                : form.confirmation[`${locale}`]}
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default FooterForm;
