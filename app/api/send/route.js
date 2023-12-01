import { sendEmail } from "@/lib/email";
import { render } from "@react-email/render";
import confirmationTemplate from "@/email/EmailConfirmation";
import messageTemplate from "@/email/EmailMessage";
import { NextResponse } from "next/server";
import { client } from "@/lib/SanityClient";
import { emailQuery } from "@/sanity/queries/podlasiak";

export async function POST(request) {
  const { name, email, subject, message, locale } = await request.json();
  const translations = await client.fetch(emailQuery);
  new Promise(async (resolve, reject) => {
    await sendEmail({
      to: email,
      subject: `Potwierdzenie`,
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
      .then((res) => resolve("wysłane"))
      .catch((e) => console.log(e));
  });
  new Promise(async (resolve, reject) => {
    await sendEmail({
      to: "krzysztof.tomaszewski@rea.pl",
      subject: `Wiadomość`,
      html: render(
        messageTemplate(name, email, subject, message, locale, translations),
      ),
    })
      .then((res) => resolve("wysłane"))
      .catch((e) => console.log(e));
  });
  return new NextResponse(JSON.stringify({ message: "ok" }), {
    status: 200,
  });
}
