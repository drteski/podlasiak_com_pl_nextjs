import { sendEmail } from "@/lib/email";
import { render } from "@react-email/render";
import confirmationTemplate from "@/email/EmailConfirmation";
import messageTemplate from "@/email/EmailMessage";
import { NextResponse } from "next/server";
import { client } from "@/lib/SanityClient";
import { emailQuery } from "@/sanity/queries/podlasiak";

const recipientList = {
  pl: "biuro.rea@podlasiak.com.pl",
  en: "customer@bathroom-rea.co.uk",
  de: "info@badezimmer-rea.de",
  ru: "office@santechnika-rea.ru",
  it: "ufficio@bagno-rea.it",
  fr: "bureau@salledebain-rea.fr",
  cz: "ukladat@koupelna-rea.cz",
  sk: "obchod@kupelna-rea.sk",
  ro: "birou@baie-rea.ro",
  hu: "iroda@furdoszoba-rea.hu",
  bg: "office@bania-rea.bg",
  lt: "biuras@vonioskambarys-rea.lt",
  lv: "birojs@vannasistaba-rea.lv",
  ua: "office@rea.ua",
  es: "info@bano-rea.es",
  nl: "iroda@furdoszoba-rea.hu",
  ee: "buroo@vannituba-rea.ee",
  hr: "ured@kupaona-rea.hr",
  md: "ured@kupaona-rea.hr",
  rs: "ured@kupaona-rea.hr",
  at: "info@badezimmer-rea.de",
  be: "bureau@salledebain-rea.be",
  si: "urad@kopalnica-rea.si",
  fi: "biuras@vonioskambarys-rea.lt",
  se: "biuras@vonioskambarys-rea.lt",
  ie: "customer@bathroom-rea.co.uk",
  pt: "info@bano-rea.es",
  ch: "info@badezimmer-rea.de",
  gr: "biuras@vonioskambarys-rea.lt",
};

export const country = (lang) => {
  switch (lang) {
    case "pl":
      return "Polska";
    case "uk":
      return "Anglia";
    case "de":
      return "Niemcy";
    case "cz":
      return "Czechy";
    case "fr":
      return "Francja";
    case "lt":
      return "Litwa";
    case "ro":
      return "Rumunia";
    case "sk":
      return "Słowacja";
    case "hu":
      return "Węgry";
    case "it":
      return "Włochy";
    case "bg":
      return "Bułgaria";
    case "ua":
      return "Ukraina";
    case "es":
      return "Hiszpania";
    case "ee":
      return "Estonia";
    case "hr":
      return "Chorwacja";
    case "lv":
      return "Łotwa";
    case "nl":
      return "Holandia";
    case "me":
      return "Czarnogóra";
    case "rs":
      return "Serbia";
    case "be":
      return "Belgia";
    case "at":
      return "Austria";
    case "ie":
      return "Irlandia";
    case "si":
      return "Słowenia";
    case "fi":
      return "Finlandia";
    case "se":
      return "Szwecja";
    case "gr":
      return "Grecja";
    case "ch":
      return "Szwajcaria";
    case "pt":
      return "Portugalia";
    default:
      return "Poland";
  }
};

export async function POST(request) {
  const { name, email, subject, message, locale } = await request.json();
  const translations = await client.fetch(emailQuery);
  new Promise(async (resolve, reject) => {
    await sendEmail({
      to: email,
      subject: !translations.senderSubject[`${locale}`]
        ? translations.senderSubject["pl"]
        : translations.senderSubject[`${locale}`],
      html: render(
        confirmationTemplate(
          name,
          email,
          subject,
          message,
          locale,
          translations,
        ),
      ),
    })
      .then((res) => resolve({ message: "wysłane", data: res }))
      .catch((e) => reject(e));
  });
  new Promise(async (resolve, reject) => {
    await sendEmail({
      to: !recipientList[`${locale}`]
        ? recipientList["pl"]
        : recipientList[`${locale}`],
      subject: `Wiadomość z podlasiak.com.pl - ${country(locale)}`,
      html: render(
        messageTemplate(name, email, subject, message, locale, translations),
      ),
    })
      .then((res) => resolve({ message: "wysłane", data: res }))
      .catch((e) => reject(e));
  });
  return new NextResponse(JSON.stringify({ message: "ok" }), {
    status: 200,
  });
}
