import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import colors from "./colors/colors";
import { dbConnect } from "@/services/mongo";
import MobileNav from "@/components/MoblileNav";
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
        <link rel="icon" href="/icon.png" />
      </Head>
      <body
        className={`${colors.bg} w-screen h-screen relative`}
      >
        <div className="w-full h-[10%] relative">
          <Nav />
        </div>
        <div className="w-full sm:h-[90%] h-[80%] relative">{children}</div>
        <div className="w-full h-[10%] block sm:hidden relative">
          <MobileNav />
        </div>
      </body>
    </html>
  );
}
