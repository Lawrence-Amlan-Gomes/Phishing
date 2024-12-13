"use client";
import { motion } from "framer-motion";
import colors from "@/app/colors/colors";
import Image from "next/image";
import Link from "next/link";
export default function EduCard({ img, degree, uni, year, des, livelink }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", duration: 0.2 }}
      className={`${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} border-[1px] sm:h-[85%] h-[95%] w-[90%] 2xl:w-[46%] ml-[5%] mr-[5%] 2xl:ml-[2%] 2xl:mr-[2%] mt-[4%] mb-[4%] overflow-hidden relative float-left rounded-2xl sm:text-[10px] md:text-[15px] lg:text-[20px]`}
    >
      <div className="sm:h-[100%] h-0 w-0 opacity-0 sm:opacity-100 sm:w-[30%] md:w-[40%] float-left flex justify-center items-center">
        <div className="h-[50%] w-[50%] overflow-hidden rounded-lg relative">
          <Link legacyBehavior href={livelink} passHref>
            <a target="_blank">
              <Image
                src={img}
                alt="Descriptive alt text"
                layout="fill"
                className="object-contain"
              />
            </a>
          </Link>
        </div>
      </div>
      <div className="sm:h-[100%] w-0 h-0 opacity-0 sm:opacity-100 sm:w-[70%] md:w-[60%] float-left flex justify-center items-center">
        <div className="w-[90%] mr-[10%] overflow-hidden relative">
          <div className="tracking-wide text-center text-blue-500 font-bold sm:text-[20px]">
            {degree}
          </div>
          <div className="tracking-wide text-center mt-2 font-bold text-slate-200 sm:text-[18px]">
            {uni}
          </div>
          <div className="tracking-wide text-center mt-2  text-blue-400 sm:text-[17px]">
            {year}
          </div>
          <div className="tracking-wide text-justify mt-2 text-[#cccccc] sm:text-[13px]">
            {des}
          </div>
          <Link legacyBehavior href={livelink} passHref>
            <a target="_blank">
              <div className="text-[#888888] text-[15px] hover:underline text-right hover:text-blue-500 hover:cursor-pointer mt-[5%]">
                Check Website
              </div>
            </a>
          </Link>
        </div>
      </div>
      <div className="sm:h-0 h-[45%] w-full opacity-100 sm:opacity-0 sm:w-0 float-left flex justify-center items-center">
        <div className="h-[50%] w-[30%] ml-[5%] mr-[5%] overflow-hidden rounded-lg relative">
          <Link legacyBehavior href={livelink} passHref>
            <a target="_blank">
              <Image
                src={img}
                alt="Descriptive alt text"
                layout="fill"
                className="object-contain"
              />
            </a>
          </Link>
        </div>
        <div className="w-[55%] h-[100%] mr-[5%] overflow-hidden relative flex justify-center items-center">
          <div className="w-full">
            <div className="tracking-wide text-center text-blue-500 font-bold text-[14px]">
              {degree}
            </div>
            <div className="tracking-wide text-center mt-2 font-bold text-slate-200 text-[13px]">
              {uni}
            </div>
            <div className="tracking-wide text-center mt-2  text-blue-400 text-[12px]">
              {year}
            </div>
          </div>
        </div>
      </div>
      <div className="sm:h-0 h-[45%] w-full p-[5%] opacity-100 sm:opacity-0 sm:w-0 float-left flex justify-center items-center">
        <div className="tracking-wide text-justify mt-2 text-[#cccccc] text-[12px]">
          {des}
        </div>
      </div>
      <div className="sm:h-0 h-[10%] w-full opacity-100 sm:opacity-0 sm:w-0 float-left flex justify-center items-start">
        <Link legacyBehavior href={livelink} passHref>
          <a target="_blank">
            <div className="text-[#888888] text-[13px] hover:underline text-right hover:text-blue-500 hover:cursor-pointer">
              Check Website
            </div>
          </a>
        </Link>
      </div>
    </motion.div>
  );
}
