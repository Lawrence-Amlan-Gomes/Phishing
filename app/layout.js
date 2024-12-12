import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import colors from "./colors/colors";

export const metadata = {
  title: "Lawrence Amlan",
  description: "Personal Portfolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/icon.png" />
      </Head>
      <body className={`${colors.bg} w-screen h-screen overflow-hidden relative`}>
        <Nav />
        {children}
      </body>
    </html>
  );
}
