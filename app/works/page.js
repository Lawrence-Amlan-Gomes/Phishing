"use client";
import Nav from "@/components/Nav";
import Image from "next/image";
import BgImage from "/public/bgImg2.png";
import AllWorks from "@/components/AllWorks";
import { motion } from "framer-motion";
import Footer from "@/components/Footer";

export default function WorkPage() {
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
        <div className="text-[60px] h-[90%] w-full text-white z-30 overflow-y-auto scrollbar-thin scrollbar-track-[#111111] scrollbar-thumb-[#555555]">
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false }}
            className="sm:text-[50px] w-full h-[100px] mb-[35px] text-white flex justify-center items-center font-bold"
          >
            OUR PROJECTS
          </motion.div>
          <AllWorks />
          <Footer/>
        </div>
      </div>
    </>
  );
}
