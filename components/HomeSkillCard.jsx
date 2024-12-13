"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import colors from "@/app/colors/colors";
import { useState } from "react";
export default function HomeSkillCard({ img, title }) {
  return (
    <div className={`border-[1px] h-[100px] ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} overflow-hidden p-[1%] box-border relative w-[48%] md:w-[23%] m-[1%] float-left rounded-lg sm:rounded-2xl`}>
      <Link href="/skill">
      <>
        <div className="h-full sm:w-[35%] w-[30%] ml-[5%] sm:ml-0 flex justify-center items-center float-left relative">
          <div className="h-[60px] w-[60px] relative">
            <Image
              src={img}
              alt="Descriptive alt text"
              layout="fill"
              className="object-contain"
            />
          </div>
        </div>
        <div className="h-full w-[65%] float-left text-slate-300  flex justify-center items-center tracking-wide font-bold text-[11px] md:text-[20px]">
          {title}
        </div></>
      </Link>
    </div>
  );
}
