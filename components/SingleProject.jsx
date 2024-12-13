"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import colors from "@/app/colors/colors";
export default function SingleProject({ pic, title, text, livelink }) {
  return (
    <div className={`border-[1px] w-[98%] md:w-[48%] sm:h-[96%] h-[98.5%] m-[1%] float-left relative ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} rounded-xl`}>
      <div className="text-[20px] md:text-[25px] text-slate-200 w-full text-center tracking-wide font-bold h-[20%] flex justify-center items-center">
        {title}
      </div>
      <div className="w-[90%] mx-[5%] rounded-lg relative overflow-hidden h-[50%]">
        <Image
          src={pic}
          alt="Descriptive alt text"
          layout="fill"
          className="object-cover"
        />
      </div>
      <div className="text-[11px] md:text-[15px] lg:text-[18px] pr-2 pl-2 text-[#dddddd] w-full h-[20%] flex justify-center items-center text-center">
        {text}
      </div>
      <Link legacyBehavior href={livelink} passHref>
        <a target="_blank">
          <div className="text-[#888888] text-[13px] lg:text-[16px] hover:underline hover:text-blue-400 h-[10%] hover:cursor-pointer flex justify-center items-start text-center">
            Check Live Site
          </div>
        </a>
      </Link>
    </div>
  );
}
