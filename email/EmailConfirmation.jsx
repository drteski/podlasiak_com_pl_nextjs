import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Section } from "@react-email/section";
import { Hr } from "@react-email/hr";

const EmailConfirmation = (
  name,
  email,
  subject,
  message,
  locale,
  translations,
) => {
  return (
    <Html>
      <Section>
        <Text>
          {!translations.greeting[`${locale}`]
            ? translations.greeting["pl"]
            : translations.greeting[`${locale}`]}{" "}
          {name}
        </Text>
      </Section>
      <Section>
        <Text>
          {!translations.messageContents[`${locale}`]
            ? translations.messageContents["pl"]
            : translations.messageContents[`${locale}`]}
        </Text>
      </Section>
      <Hr />
      <Text>
        <Section>
          <strong>
            {!translations.clientSubject[`${locale}`]
              ? translations.clientSubject["pl"]
              : translations.clientSubject[`${locale}`]}
            :
          </strong>{" "}
          {subject}
        </Section>
        <Section>
          <strong>
            {!translations.clientMessage[`${locale}`]
              ? translations.clientMessage["pl"]
              : translations.clientMessage[`${locale}`]}
            :
          </strong>{" "}
          {message}
        </Section>
      </Text>
      <Hr />
      <Text>
        {!translations.farewell[`${locale}`]
          ? translations.farewell["pl"]
          : translations.farewell[`${locale}`]}
      </Text>
      <Text>Podlasiak</Text>
    </Html>
  );
};

export default EmailConfirmation;
