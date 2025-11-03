import type { Metadata } from "next";
import "./globals.css";
// import { Marcellus } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

import { Lato, Parisienne } from 'next/font/google'


const lato = Lato({
  weight: ['400', '700','300'], // add weights as needed
  subsets: ['latin'],
})

const parisienne = Parisienne({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-signature',
})

// const marcellus = Marcellus({
//   subsets: ["latin"],
//   variable: "--font-marcellus",
//   weight: "400", // specify weight if needed
// });

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
       className={`${lato.className} ${parisienne.variable}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
