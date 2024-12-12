"use client";
import Html from "../public/html.png";
import Css from "../public/css.png";
import Js from "../public/js.png";
import React from "../public/React.png";
import NextJS from "../public/NextJS.png";
import Firebase from "../public/Firebase.png";
import Mongodb from "../public/Mongodb.png";
import TailwindCss from "../public/TailwindCss.png";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import HomeProjectCard from "./HomeProjectCard";
import HomeSkillCard from "./HomeSkillCard";

export default function HomeSkill() {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className="w-full relative">
        <Link href="/skill">
          <div
            className="z-10 py-[40px] w-full float-left h-full flex relative justify-center items-center lg:text-[60px] text-blue-600 font-bold text-center tracking-wider lg:leading-[80px]"
          >
            SKILLS
          </div>
        </Link>
      </div>
      <div
        className="w-full relative overflow-hidden p-[1%] mb-[40px]"
      >
        <HomeSkillCard img={Html} title={"HTML"} />
        <HomeSkillCard img={Css} title={"CSS"} />
        <HomeSkillCard img={Js} title={"Java Script"} />
        <HomeSkillCard img={React} title={"React JS"} />
        <HomeSkillCard img={TailwindCss} title={"Tailwind CSS"} />
        <HomeSkillCard img={NextJS} title={"Next JS"} />
        <HomeSkillCard img={Firebase} title={"Firebase"} />
        <HomeSkillCard img={Mongodb} title={"Mongo DB"} />
      </div>
      <LineAnimate />
    </>
  );
}
