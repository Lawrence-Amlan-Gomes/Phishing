"use client";
import { motion } from "framer-motion";
import BgImage from "/public/bgImg2.png";
import Image from "next/image";
import ContactBox from "@/components/ContactBox";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <div className="absolute w-full h-full z-0">
        <Image
          src={BgImage}
          alt="Descriptive alt text"
          layout="fill"
          className="object-cover"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <div className="absolute w-full h-full z-30">
        <div className="w-full h-[10%] z-30">
          <Nav />
        </div>
        <div className="w-full h-[90%] overflow-y-auto">
            <ContactBox/>
            <div className="w-full h-[10px] float-left"></div>
            <Footer/>
        </div>
      </div>
    </>
  );
}
