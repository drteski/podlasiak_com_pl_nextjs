import "./globals.css";

import { Chivo } from "next/font/google";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Podlasiak",
  description:
    "Podlasiak Andrzej Cylwik Spółka Komandytowa to międzynarodowa firma założona w 1994 roku. Nasze ponad 25 letnie doświadczenie w handlu pozwala dostarczać naszym klientom produkty oryginalne oraz wysokogatunkowe, dbając przy tym o najwyższą jakość świadczonych usług.",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body className={`font-primary ${chivo.className}`}>{children}</body>
    </html>
  );
}
