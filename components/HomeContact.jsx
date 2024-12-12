"use client";
import Gmail from "../public/Gmail.png";
import GitHub from "../public/GitHub.png";
import LinkedIn from "../public/LinkedIn.png";
import { motion, useInView } from "framer-motion";
import LineAnimate from "./LineAnimate";
import Link from "next/link";
import P1Pic from "../public/p1pic.png";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useRef, useState } from "react";
import HomeProjectCard from "./HomeProjectCard";
import HomeSkillCard from "./HomeSkillCard";
import HomeEduCard from "./HomeEduCard";
import HomeContactCard from "./HomeContactCard";

export default function HomeContact() {
  const [speed, setSpeed] = useState(15);
  const [index, setIndex] = useState(true);
  const [num, setNum] = useState("-500%");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <>
      <div ref={ref} className="w-full h-[30%] relative">
        <Link href="/contact">
          <>
            <div
              className="z-10 w-full float-left h-full flex relative justify-center items-center lg:text-[60px] text-blue-600 font-bold text-center tracking-wider lg:leading-[80px]"
            >
              CONTACT
            </div>
          </>
        </Link>
      </div>
      <div
        ref={ref}
        className="w-full h-[70%] relative overflow-hidden"
      >
        <div className="w-full h-[80%] flex justify-center items-center">
          <HomeContactCard
            index={index}
            setIndex={setIndex}
            ownIdx={1}
            img={Gmail}
            text={"amlan@gmail.com"}
            livelink={
              "https://mail.google.com/mail/u/0/#inbox?compose=DmwnWtDmBVfPnSRQbxJVPTzwGzhhNBLbStGwMfWdlFhdBlBJzkFBrFtwNtGPTmKTlDcQdBPQmQgV"
            }
          />
          <HomeContactCard
            index={index}
            setIndex={setIndex}
            ownIdx={2}
            img={GitHub}
            text={"Lawrence-Amlan-Gomes"}
            livelink={"https://github.com/Lawrence-Amlan-Gomes"}
          />
          <HomeContactCard
            index={index}
            setIndex={setIndex}
            ownIdx={3}
            img={LinkedIn}
            text={"Lawrence Amlan Gomes"}
            livelink={
              "https://www.linkedin.com/in/lawrence-amlan-gomes-13847426b/"
            }
          />
        </div>
      </div>
    </>
  );
}
