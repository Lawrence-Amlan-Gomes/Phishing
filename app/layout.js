import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import colors from "./colors/colors";
import { dbConnect } from "@/services/mongo";

export const metadata = {
  title: "Lawrence Amlan",
  description: "Personal Portfolio",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="/icon.png"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <body className={`${colors.bg} w-screen h-screen overflow-hidden relative`}>
        <div className="w-full h-[10%] overflow-hidden relative">
          <Nav />
        </div>
        <div className="w-full h-[90%] overflow-hidden relative">{children}</div>
      </body>
    </html>
  );
}
