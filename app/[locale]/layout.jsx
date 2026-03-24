import "./globals.css";

import { Chivo } from "next/font/google";
import Script from "next/script";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Podlasiak",
  description:
    "Podlasiak Andrzej Cylwik Spółka Komandytowa to międzynarodowa firma założona w 1994 roku. Nasze ponad 25 letnie doświadczenie w handlu pozwala dostarczać naszym klientom produkty oryginalne oraz wysokogatunkowe, dbając przy tym o najwyższą jakość świadczonych usług.",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body className={`font-primary ${chivo.className}`}>
        {children}
        <Script
          src="https://cookiechimp.com/portal/r2at9qJ/vendors.js"
          strategy="afterInteractive"
        ></Script>
        <div data-cookiechimp-vendor-list></div>
      </body>
      <Script
        src="https://cookiechimp.com/widget/r2at9qJ.js"
        strategy="afterInteractive"
      ></Script>
    </html>
  );
}
