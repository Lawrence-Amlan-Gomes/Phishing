"use client";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import P2Pic from "../public/P2Pic.png";
import P3Pic from "../public/P3pic.png";
import P4Pic from "../public/P4pic.png";
import P5Pic from "../public/P5pic.png";
import P6Pic from "../public/P6pic.png";
import P7Pic from "../public/P7pic.png";
import P8Pic from "../public/P8pic.png";
import P9Pic from "../public/P9pic.png";
// import P8Pic from "../public/p8pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import HomeProjectCard from "./HomeProjectCard";
export default function HomeProject() {
  const [num, setNum] = useState("-450%");
  const [speed, setSpeed] = useState(15);
  return (
    <>
      <div className="w-full relative">
        <Link href="/about">
          <div className="z-10 w-full py-[50px] float-left flex relative justify-center items-center text-[25px] sm:text-[35px] md:text-[45px] lg:text-[60px] xl:text-[65px] 2xl:text-[70px] text-blue-600 font-bold text-center tracking-wider lg:leading-[80px]">
            PROJECTS
          </div>
        </Link>
      </div>
      <div className="w-full relative overflow-hidden p-[1%] mb-[40px]">
        <HomeProjectCard img={P9Pic} title={"Time Track"} year={"Nov 2024"} />
        <HomeProjectCard img={P8Pic} title={"Eshan Agro"} year={"Oct 2024"} />
        <HomeProjectCard img={P1Pic} title={"Cafeteria"} year={"June 2024"} />
        <HomeProjectCard img={P6Pic} title={"Guest Book"} year={"June 2024"} />
        <HomeProjectCard
          img={P7Pic}
          title={"Shop Center"}
          year={"March 2024"}
        />
        <HomeProjectCard
          img={P5Pic}
          title={"NewsFeed"}
          year={"February 2024"}
        />
        <HomeProjectCard img={P2Pic} title={"Tasker"} year={"February 2024"} />
        <HomeProjectCard
          img={P4Pic}
          title={"Book Finder"}
          year={"January 2024"}
        />
        <HomeProjectCard
          img={P3Pic}
          title={"Short React Projects"}
          year={"Januray 2024"}
        />
      </div>
      <LineAnimate />
    </>
  );
}
