"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Pic from "../public/2.jpg";
import P1Pic from "../public/p1pic.png";
import P2Pic from "../public/P2Pic.png";
import P3Pic from "../public/P3pic.png";
import P4Pic from "../public/P4pic.png";
import P5Pic from "../public/P5pic.png";
import P6Pic from "../public/P6pic.png";
import P7Pic from "../public/P7pic.png";
// import P8Pic from "../public/p8pic.png";
import Person from "../public/Person.png";
import Coder from "../public/Coder.png";
import TimeZone from "../public/TimeZone.png";
import Communication from "../public/Communication.png";
import { motion } from "framer-motion";
import AboutCard from "./AboutCard";
import SingleProject from "./SingleProject";
export default function Project() {
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
        All Projects
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        className="w-full p-[1%] h-[70%] relative overflow-y-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-[#000000]"
      >
        <SingleProject
          pic={P1Pic}
          title={"Cafeteria"}
          text={
            "This is a full stack Next JS website for a Cafeteria Management System built in June 2024."
          }
          livelink={"https://cafeteria-opal-psi.vercel.app/"}
        />
        <SingleProject
          pic={P6Pic}
          title={"Guest Book"}
          text={
            "This is a full stack React JS website where users can log in and open their accounts, built in June 2024."
          }
          livelink={"https://guest-book-gamma.vercel.app/"}
        />
        <SingleProject
          pic={P7Pic}
          title={"Shop Center"}
          text={
            "This is a Frontend Next JS e-commerce website a shop, built in March 2024."
          }
          livelink={"https://shop-center-black.vercel.app/"}
        />
        <SingleProject
          pic={P5Pic}
          title={"NewsFeed"}
          text={
            "This is a Frontend React JS website for reading global news, built in February 2024."
          }
          livelink={"https://news-feed-swart-nine.vercel.app/"}
        />
        <SingleProject
          pic={P2Pic}
          title={"Tasker"}
          text={
            "This is a Frontend React JS website for a Task Management of a person, built in February 2024."
          }
          livelink={"https://improved-tasker5.vercel.app/"}
        />
        <SingleProject
          pic={P4Pic}
          title={"Book Finder"}
          text={
            "This is a Frontend React website of a library, built in January 2024."
          }
          livelink={"https://lws-react-js-assignment-2-ya8w.vercel.app/"}
        />
        <SingleProject
          pic={P3Pic}
          title={"Short React Projects"}
          text={
            "This is all of my best react short projects when I when a begginer, built in January 2024."
          }
          livelink={"https://react-projects-ruddy-seven.vercel.app/"}
        />
      </motion.div>
    </div>
  );
}
