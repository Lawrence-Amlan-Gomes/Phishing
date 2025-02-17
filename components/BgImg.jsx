"use client";
import { motion } from "framer-motion";
import BgImage from "../public/bgImg2.png";
import Image from "next/image";
export default function BgImg({ works, hoveredId }) {
  return (
    <div className="w-full h-full relative">
      {works.map((work) => (
        <motion.div
          key={work.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredId === work.id ? 1 : 0 }}
          transition={{ duration: hoveredId === work.id ? 1 : 0.5 }}
        >
          <div
            className={`absolute h-full w-full bg-black text-black z-20 ${work.opacity}`}
          ></div>
          <div className="h-full w-full relative">
            <Image
              src={work.img1}
              alt={work.title}
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </motion.div>
      ))}
      <div className="w-full h-full flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: hoveredId ? 0 : 1,
          }}
          transition={{ duration: hoveredId ? 0.5 : 1, type: "spring" }}
          className="absolute h-full w-full z-10"
        >
          <Image
            src={BgImage}
            alt="Descriptive alt text"
            layout="fill"
            className="object-cover"
            objectFit="cover"
            objectPosition="top"
          />
        </motion.div>
        <div
          className={`absolute h-full w-full bg-black text-black z-0 ${
            hoveredId ? "opacity-0" : "opacity-100"
          }`}
        ></div>
      </div>
    </div>
  );
}
