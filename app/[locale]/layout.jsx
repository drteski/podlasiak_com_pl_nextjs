import "./globals.css";

import { Chivo } from "next/font/google";

const chivo = Chivo({ subsets: ["latin"] });

export const metadata = {
  title: "Podlasiak",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body className={`font-primary ${chivo.className}`}>{children}</body>
    </html>
  );
}
