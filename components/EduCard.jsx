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
      className={`${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} border-[1px] h-[80%] w-[90%] 2xl:w-[46%] ml-[5%] mr-[5%] 2xl:ml-[2%] 2xl:mr-[2%] mt-[4%] mb-[4%] overflow-hidden relative float-left rounded-2xl sm:text-[10px] md:text-[15px] lg:text-[20px]`}
    >
      <div className="h-[100%] sm:w-[30%] md:w-[40%] float-left flex justify-center items-center">
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
      <div className="h-[100%] sm:w-[70%] md:w-[60%] float-left flex justify-center items-center">
        <div className="w-[90%] mr-[10%] overflow-hidden relative">
          <div className="tracking-wide text-center text-blue-500 font-bold lg:text-[20px]">
            {degree}
          </div>
          <div className="tracking-wide text-center mt-2 font-bold text-slate-200 lg:text-[18px]">
            {uni}
          </div>
          <div className="tracking-wide text-center mt-2  text-blue-400 lg:text-[17px]">
            {year}
          </div>
          <div className="tracking-wide text-justify mt-2 text-[#cccccc] lg:text-[16px]">
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
    </motion.div>
  );
}
