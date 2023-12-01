import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Heading } from "@react-email/heading";

const EmailMessage = (name, email, subject, message, locale) => {
  return (
    <Html>
      <Heading as="h1">Wiadomość z podlasiak.com.pl kraj - {locale}</Heading>
      <Text>
        <strong>Od:</strong> {name} - {email}
      </Text>
      <Text>
        <strong>Temat:</strong> {subject}
      </Text>
      <Text>
        <strong>Treść:</strong> {message}
      </Text>
    </Html>
  );
};

export default EmailMessage;
