"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import colors from "@/app/colors/colors";
export default function HomeProjectCard({ img, title, year }) {
  return (
    <div className={`w-[48%] h-[250px] md:w-[23%] lg:h-[350px] m-[1%] relative border-[1px] overflow-hidden rounded-lg sm:rounded-3xl float-left ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard}`}>
      <Link href="/project">
        <div className="w-full h-[25%] flex items-center justify-center text-white text-[13px] md:text-[24px]">
          {title}
        </div>
        <div className="w-[80%] mx-[10%] rounded-md overflow-hidden h-[50%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-cover"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="w-full h-[25%] flex items-center justify-center text-[#dddddd] text-[13px] md:text-[20px]">
          {year}
        </div>
      </Link>
    </div>
  );
}
