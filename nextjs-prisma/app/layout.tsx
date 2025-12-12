import type { Metadata } from "next";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font-base",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VITRINE - Steven PYRAM",
  description: "Prestation de services en developpement informatique",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={roboto.variable}>
      <body className="bg-vitrine-grey-500">
        <main>{children}</main>
      </body>
    </html>
  );
}
