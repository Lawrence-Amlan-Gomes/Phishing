"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import colors from "@/app/colors/colors";
export default function AboutCard({ text, img }) {
  return (
    <div
      className={`border-[1px] relative rounded-xl w-[96%] h-[150px] sm:h-[150px] lg:h-[200px] m-[2%] ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard}`}
    >
      <div className="h-[100%] sm:w-[70%] w-[60%] float-left flex justify-center items-center">
        <div className="rounded-lg w-[80%] relative overflow-hidden text-center text-[11px] lg:text-[20px] text-slate-300">
            {text}
        </div>
      </div>
      <div className="h-full sm:w-[30%] w-[40%] flex justify-center items-center float-left rounded-lg overflow-hidden">
        <div className="rounded-lg h-[70%] w-[70%] relative overflow-hidden">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-cover"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
      </div>
    </div>
  );
}
