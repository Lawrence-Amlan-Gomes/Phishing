"use client";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Image from "next/image";
import Link from "next/link";
import Pic from "../public/2.jpg";
import { FaArrowAltCircleRight } from "react-icons/fa";
import colors from "@/app/colors/colors";
import { useRef } from "react";
export default function HomeAbout() {
  // const aboutRef = useRef(null);
  // const aboutIsInView = useInView(aboutRef, { once: false });
  return (
    <>
      <Link href="/about">
        <div className="w-full h-[25%] relative">
          <div
            className="z-10 w-full cursor-pointer float-left h-full flex relative justify-center items-center text-[25px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px] text-blue-600 font-bold text-center tracking-wider lg:leading-[80px]"
          >
            ABOUT ME
          </div>
        </div>
        <div
          className="w-full h-[75%] relative pb-[5%] pl-[5%] pr-[5%]"
        >
          <div
            className={`sm:h-full sm:w-[32.5%] sm:mr-[2.5%] h-0 w-0 relative border-[1px] ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} overflow-hidden rounded-3xl float-left`}
          >
            <Image
              src={Pic}
              alt="Descriptive alt text"
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
          <div
            className={`p-[5%] overflow-y-auto text-[12px] lg:text-[20px] xl:text-[25px] 2xl:text-[30px] ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} scrollbar-none h-full sm:w-[62.5%] ml-[2.5%] w-[93%] relative border-[1px] overflow-hidden rounded-3xl float-left`}
          >
            <div>
              <samp className="text-white">&lt;body&gt;</samp>
            </div>
            <div>
              <samp className="text-blue-400 ml-[5%]">&lt;div&gt;</samp>
            </div>
            <div className="text-[#dddddd] ml-[10%]">
              Hi, I am Lawrence Amlan Gomes, a full time Next JS full stack
              developer
            </div>
            <div className="text-[#dddddd] ml-[10%]">
              Have an experience of more than one year in Next JS full stack
              development
            </div>
            <div className="text-[#dddddd] ml-[10%]">
              Always prioritize client collaboration, fostering open
              communication
            </div>
            <div className="text-[#dddddd] ml-[10%]">
              Tech enthusiast with a passion for development
            </div>
            <div className="text-[#dddddd] ml-[10%]">
              Very flexible with time zone communications
            </div>
            <div>
              <samp className="text-blue-400 ml-[5%]">&lt;/div&gt;</samp>
            </div>

            <div>
              <samp className="text-white">&lt;/body&gt;</samp>
            </div>
          </div>
        </div>
        <LineAnimate />
      </Link>
    </>
  );
}
