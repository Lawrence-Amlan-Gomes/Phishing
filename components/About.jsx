"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Pic from "../public/2.jpg";
import Person from "../public/Person.png";
import Coder from "../public/Coder.png";
import TimeZone from "../public/TimeZone.png";
import Communication from "../public/Communication.png";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import colors from "@/app/colors/colors";
export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{ duration: 1, type: "spring" }}
      className="w-full h-full overflow-y-auto overflow-x-hidden"
    >
      <div className="w-full h-[20%] font-bold text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] text-blue-600 tracking-wider flex justify-center items-center">
        Know Me More
      </div>
      <div className="w-full h-[80%] p-[1%]">
        <div className={`sm:h-[100%] sm:w-[30%] w-0 h-0 opacity-0 sm:opacity-100 sm:ml-0 sm:mr-0  ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} relative border-[1px] overflow-hidden rounded-3xl float-left`}>
          <Image
            src={Pic}
            alt="Descriptive alt text"
            layout="fill"
            className="object-cover"
            objectFit="cover"
            objectPosition="top"
          />
        </div>
        <div className="sm:h-[100%] sm:w-[70%] sm:opacity-100 opacity-0 w-0 h-0 relative overflow-y-auto float-left scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-black">
          <AboutCard
            img={Person}
            text={
              "Hi, I am Lawrence Amlan Gomes, a full time full stack Next JS Web Developer having an experience of more than one year."
            }
          />
          <AboutCard
            img={Communication}
            text={
              "I Always prioritize client collaboration and fostering open communication so that my clients can get maximun benefit."
            }
          />
          <AboutCard
            img={TimeZone}
            text={
              "I am very flexible with time zone communications so that my clients can communicate with me at any time and from anywhere."
            }
          />
          <AboutCard
            img={Coder}
            text={
              "I am a tech enthusiast with a passion for web development, and I always enjoy the journey of learning new technology."
            }
          />
        </div>
        <div className="h-[100%] w-full opacity-100 sm:w-0 sm:h-0 sm:opacity-0 relative overflow-y-auto float-left scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-black">
          <AboutCard
            img={Pic}
            text={
              "Hi, I am Lawrence Amlan Gomes, a full time full stack Next JS Web Developer having an experience of more than one year."
            }
          />
          <AboutCard
            img={Communication}
            text={
              "I Always prioritize client collaboration and fostering open communication so that my clients can get maximun benefit."
            }
          />
          <AboutCard
            img={TimeZone}
            text={
              "I am very flexible with time zone communications so that my clients can communicate with me at any time and from anywhere."
            }
          />
          <AboutCard
            img={Coder}
            text={
              "I am a tech enthusiast with a passion for web development, and I always enjoy the journey of learning new technology."
            }
          />
        </div>
      </div>
    </motion.div>
  );
}
