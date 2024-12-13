import { Inter } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import Nav from "@/components/nav/Nav";
import colors from "./colors/colors";
import NavItems from "@/components/NavItems";
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
        <link rel="icon" href="/icon.png" />
      </Head>
      <body
        className={`${colors.bg} w-screen h-screen sm:overflow-hidden sm:relative`}
      >
        <Nav />
        {children}
        <div className="w-full h-[10%] text-[#eeeeee] border-[#222222] border-t-[1px] bg-[#080808] z-20 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px] lg:h-[10%] justify-center flex items-center">
          <div className="w-full relative h-full">
            <div className="flex items-center justify-center w-full relative h-full visible sm:hidden text-[10px]">
              <NavItems linkTo="/project" text="Projects" />
              <NavItems linkTo="/about" text="About" />
              <NavItems linkTo="/skill" text="Skill" />
              <NavItems linkTo="/education" text="Education" />
              <NavItems linkTo="/contact" text="Contact" />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
