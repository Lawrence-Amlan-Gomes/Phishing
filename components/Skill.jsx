"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Html from "../public/html.png";
import Css from "../public/css.png";
import Js from "../public/js.png";
import React from "../public/React.png";
import NextJS from "../public/NextJS.png";
import Firebase from "../public/Firebase.png";
import Mongodb from "../public/Mongodb.png";
import TailwindCss from "../public/TailwindCss.png";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
export default function Skill() {
  return (
      <div className="w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="w-full h-[20%] lg:text-[50px] font-bold text-blue-600 tracking-wider flex justify-center items-center"
        >
          Learned Skills
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
          }}
          className="w-full h-[70%] p-[1%] relative overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-black"
        >
          <SkillCard
            img={Html}
            title={"HTML"}
            des={
              "At the beginning of my web development journey, I started learning HTML in April 2023. It is the basic foundation of web development."
            }
          />
          <SkillCard
            img={Css}
            title={"CSS"}
            des={
              "After learning HTML, I learned CSS within one month and did some small projects. It gives styling to our website."
            }
          />
          <SkillCard
            img={Js}
            title={"Java Script"}
            des={
              "After learning CSS, I learned Java Script within three month and did some small projects. It gives our website the power of movability with user interaction."
            }
          />
          <SkillCard
            img={React}
            title={"React JS"}
            des={
              "After learning Java Script, I learned React JS within three month and did some small projects. It is a Java Script library."
            }
          />
          <SkillCard
            img={TailwindCss}
            title={"Tailwind CSS"}
            des={
              "After learning React JS, I learned Tailwind CSS within one month and did some small projects. It is a CSS fram work."
            }
          />
          <SkillCard
            img={NextJS}
            title={"Next JS"}
            des={
              "After learning Tailwind CSS, I learned Next within two month and did some small projects. It is a React JS fram work."
            }
          />
          <SkillCard
            img={Firebase}
            title={"Firebase"}
            des={
              "After learning Next JS, I learned Firebase within half month and did some small projects. It is a backend system for any frontend project."
            }
          />
          <SkillCard
            img={Mongodb}
            title={"Mongo DB Atlas"}
            des={
              "After learning Firebase, I learned Mongo DB Atlas within half month and did some small projects. It is also a backend system for any frontend project."
            }
          />
        </motion.div>
      </div>
  );
}
