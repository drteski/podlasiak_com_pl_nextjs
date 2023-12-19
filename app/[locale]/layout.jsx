import "./globals.css";

export const metadata = {
  title: "Podlasiak",
};

export default function RootLayout({ children, params }) {
  return (
    <html lang={params.locale}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Chivo&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-primary">{children}</body>
    </html>
  );
}
