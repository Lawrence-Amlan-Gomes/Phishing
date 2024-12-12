"use client";
import { motion } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import colors from "@/app/colors/colors";
export default function HomeHome() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="z-10 w-full h-full flex relative justify-center items-center px-[10%]"
      >
        <div className={`w-full`}>
          <div className="text-[#eeeeee] font-bold text-center md:pb-[20px] text-[20px] sm:text-[35px] md:text-[40px] lg:text-[50px] xl:text-[65px] 2xl:text-[80px]">
            Transform Your Digital Concepts Into Seamless{" "}
            <span className={`${colors.keyText}`}>User Experiences</span>
          </div>
          <div className="text-[#dddddd] sm:pb-[20px] pb-[20px] pt-[15px] text-[13px] sm:pt-[10px] md:pb-[40px] text-center md:text-[20px] lg:text-[22px] xl:text-[26px] 2xl:text-[35px]">
            Hi, I am Lawrence, a Next.js Web Developer.
          </div>
          <div className="w-full flex justify-center items-center text-[11px] sm:text-[18px]">
            <Link href="/project">
              <button className="sm:p-3 p-2 rounded-md bg-blue-800 border-[1px] border-blue-800 hover:bg-blue-700 mx-5 text-white">
                My Projects
              </button>
            </Link>
            <Link href="/contact">
              <button className="sm:p-3 p-2 rounded-md bg-blue-800 border-[1px] border-white text-white hover:border-blue-600 mx-5 bg-transparent hover:text-blue-600">
                Hire Me
              </button>
            </Link>
          </div>
        </div>
      </motion.div>
      <LineAnimate />
    </>
  );
}
