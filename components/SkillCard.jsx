"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import colors from "@/app/colors/colors";
export default function SkillCard({ img, title, des }) {
  return (
    <div
      className={`border-[1px] h-[180px] 2xl:h-[250px] md:h-[200px] 2xl:w-[31%] md:w-[48%] m-[1%] ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} overflow-hidden relative float-left rounded-lg`}
    >
      <div className="h-[100%] w-[40%] float-left relative flex justify-center items-center">
        <div className="w-[60%] h-[60%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-contain"
          />
        </div>
      </div>
      <div className="h-[100%] w-[55%] mr-[5%] float-left">
        <div className="h-[40%] w-[100%] float-left flex justify-center items-center text-center text-[18px] sm:text-[20px] text-slate-200 font-bold">
          {title}
        </div>
        <div className="h-[60%] w-[100%] float-left flex justify-center items-start text-justify text-[10px] sm:text-[14px] text-slate-300">
          {des}
        </div>
        {title}
      </div>
    </div>
  );
}
