import "./globals.css";

export const metadata = {
  title: "Podlasiak",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body className="font-primary">{children}</body>
    </html>
  );
}
