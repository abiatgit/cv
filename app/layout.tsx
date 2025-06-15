import type { Metadata } from "next";
import "./globals.css";
import { Marcellus } from "next/font/google";

const marcellus = Marcellus({
  subsets: ["latin"],
  variable: "--font-marcellus",
  weight: "400", // specify weight if needed
});

export const metadata: Metadata = {
  title: "Abi Geroge",
  description: "Software Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${marcellus.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
