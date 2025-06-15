import type { Metadata } from "next";
import "./globals.css";
import { Marcellus } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";

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
