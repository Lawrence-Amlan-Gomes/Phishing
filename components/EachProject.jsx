"use client";
import { motion } from "framer-motion";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
export default function EachProject({ work }) {
  const [hoveredArrow, setHoveredArrow] = useState(false);
  return (
    <motion.div
      initial={{ x: work.id % 2 == 0 ? +100 : -100, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: false }}
      className={`h-[500px] w-[47.5%] overflow-hidden mb-[50px] rounded-xl ${
        work.id % 2 == 0 ? `float-right ml-[2.5%]` : `float-left mr-[2.5%]`
      }`}
    >
      <div className="w-full h-[350px] relative overflow-hidden rounded-xl hover:border-[#eeeeee] border-[1px] border-transparent">
        <Link href={`works/${work.routeName}`}>
          <Image
            src={work.img1}
            alt={work.title}
            layout="fill"
            className="object-cover"
            objectFit="cover"
            objectPosition="top"
          />
        </Link>
      </div>
      <div
        className={`w-full h-[50px] flex items-center sm:text-[15px] ${
          work.id % 2 == 0 ? `justify-end pr-[10px]` : `justify-start pl-[10px]`
        }`}
      >
        {work.type}
      </div>
      <Link href={`works/${work.routeName}`}>
        <div
          onMouseOver={() => {
            setHoveredArrow(true);
          }}
          onMouseOut={() => {
            setHoveredArrow(false);
          }}
          className={`w-full h-[100px] flex items-start sm:text-[25px] hover:cursor-pointer ${
            work.id % 2 == 0
              ? `justify-end pr-[10px]`
              : `justify-start pl-[10px]`
          }`}
        >
          {work.id % 2 == 0 ? (
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{
                opacity: hoveredArrow ? 1 : 0,
                x: hoveredArrow ? 0 : 30,
              }}
              transition={{ duration: hoveredArrow ? 0.5 : 0.3 }}
              className="h-full float-left pt-2"
            >
              <FaArrowLeft />
            </motion.div>
          ) : (
            <></>
          )}
          <div
            className={`h-full float-left ${
              work.id % 2 == 0 ? `pl-3` : `pr-3`
            }`}
          >
            {work.title}
          </div>
          {work.id % 2 != 0 ? (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{
                opacity: hoveredArrow ? 1 : 0,
                x: hoveredArrow ? 0 : -30,
              }}
              transition={{ duration: hoveredArrow ? 0.5 : 0.3 }}
              className="h-full float-left pt-2"
            >
              <FaArrowRight />
            </motion.div>
          ) : (
            <></>
          )}
        </div>
      </Link>
    </motion.div>
  );
}
