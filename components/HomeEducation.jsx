"use client";
import Bracu from "../public/Bracu.png";
import Ndc from "../public/Ndc.png";
import HolyCross from "../public/HolyCross.png";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import HomeProjectCard from "./HomeProjectCard";
import HomeSkillCard from "./HomeSkillCard";
import HomeEduCard from "./HomeEduCard";

export default function HomeEducation() {
  // const [speed, setSpeed] = useState(15);
  // const [num, setNum] = useState("-500%");
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: false });

  return (
    <>
      <div className="w-full h-[30%] relative">
        <Link href="/education">
          <div
            className="z-10 w-full float-left h-full flex relative justify-center items-center text-[25px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px] text-blue-600 font-bold text-center tracking-wider lg:leading-[80px]"
          >
            EDUCATION
          </div>{" "}
        </Link>
      </div>
      <div
        className="w-full sm:h-[70%] relative sm:overflow-hidden overflow-auto flex [&>div]:flex-shrink-0 pb-[5%] pl-[2.5%] pr-[2.5%] sm:text-[11px] md:text-[15px] lg:text-[20px]"
      >
        <HomeEduCard
          img={Bracu}
          degree={"Bachelor Of Science In Computer Science"}
          uni={"BRAC UNIVERSITY"}
          year={"( 2022 - 2025 )"}
          title={"HTML"}
        />
        <HomeEduCard
          img={Ndc}
          degree={"Higher Secondary Certificate"}
          uni={"NOTRE DAME COLLEGE"}
          year={"( 2018 - 2020 )"}
          title={"HTML"}
        />
        {/* <HomeEduCard
          img={HolyCross}
          degree={"Secondary School Certificate"}
          uni={"BANDURA HOLYCROSS SCHOOL AND COLLEGE"}
          year={"( 2014 - 2018 )"}
          title={"HTML"}
        /> */}
      </div>
      <LineAnimate />
    </>
  );
}
