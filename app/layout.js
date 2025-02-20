import { Inter, Roboto } from "next/font/google";
import Head from "next/head";
import "./globals.css";
import colors from "./colors/colors";
import { dbConnect } from "@/services/mongo";
import WorkProvider from "./providers/WorkProvider";
import MusicProvider from "./providers/MusicProvider";

// Importing Roboto font
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Choose font weights you need
  variable: "--font-roboto", // Custom CSS variable name
});

export const metadata = {
  title: "Our Agency | We Develop Web Apps",
  description:
    "Our Agency is a digital agency that specializes in web development, design, and marketing.",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en" className={roboto.variable}>
      {" "}
      {/* Apply font variable */}
      <Head>
        <link
          rel="icon"
          href="/icon.png"
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
      </Head>
      <body className="w-screen h-screen overflow-hidden relative bg-black font-roboto">
        <WorkProvider>
          <MusicProvider>
            <div className="relative h-full w-full">{children}</div>
          </MusicProvider>
        </WorkProvider>
      </body>
    </html>
  );
}
