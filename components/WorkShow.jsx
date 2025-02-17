"use client";
import { motion } from "framer-motion";
import Image from "next/image";
export default function WorkShow({ showWork, works, hoveredId }) {
  return (
    <div className="w-full h-full relative">
      {works.map((work) => (
        <motion.div
          key={work.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: hoveredId === work.id ? 1 : 0 }}
          transition={{ duration: hoveredId === work.id ? 1 : 0.4 }}
        >
          <motion.div
            initial={{ y: -50 }}
            animate={{ y: hoveredId === work.id ? 0 : -50 }}
            transition={{
              duration: hoveredId === work.id ? 1 : 0.5,
              type: "spring",
            }}
            className="float-left h-[40%] w-[45%] flex justify-center items-center text-center sm:text-[30px] font-bold text-[#ffffff]"
          >
            {work.title}
          </motion.div>
          <motion.div
            initial={{ x: +100 }}
            animate={{ x: hoveredId === work.id ? 0 : +100 }}
            transition={{
              duration: hoveredId === work.id ? 2 : 0.5,
              type: "spring",
            }}
            className="float-left h-[40%] w-[55%] flex justify-center items-center text-center sm:text-[23px] text-[#f8f8f8]"
          >
            {work.type}
          </motion.div>
          <motion.div
            initial={{ y: +50 }}
            animate={{ y: hoveredId === work.id ? 0 : +50 }}
            transition={{
              duration: hoveredId === work.id ? 1 : 0.5,
              type: "spring",
            }}
            className="float-left h-[60%] px-10 text-justify w-[45%] flex justify-center items-center overflow-y-auto scrollbar-none sm:text-[15px] text-[#f8f8f8]"
          >
            {work.shortDes}
          </motion.div>

          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: hoveredId === work.id ? "55%" : "0%" }}
            transition={{
              duration: hoveredId === work.id ? 1 : 0.5,
              type: "just",
            }}
            className="float-right h-[60%] w-[55%] relative rounded-xl overflow-hidden"
          >
            <Image
              src={work.img2}
              alt="Descriptive alt text"
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </motion.div>
        </motion.div>
      ))}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-full">
          <motion.div
            initial={{ x: +100, opacity: 0 }}
            animate={{
              x: hoveredId ? +100 : 0,
              opacity: hoveredId ? 0 : 1,
            }}
            transition={{ duration: hoveredId ? 0.5 : 1.5, type: "spring" }}
            className="w-full flex justify-center items-center sm:text-[50px] text-[#ffffff] font-bold mb-[30px]"
          >
            We Develop Web Apps
          </motion.div>
          <motion.div
            initial={{ x: +100, opacity: 0 }}
            animate={{
              x: hoveredId ? +100 : 0,
              opacity: hoveredId ? 0 : 1,
            }}
            transition={{ duration: hoveredId ? 0.5 : 1.5, type: "spring" }}
            className="w-full flex justify-center items-center text-center sm:text-[22px] text-[#efefef] pl-[20%] pr-[20%]"
          >
            Building high-performance, user-friendly web apps with cutting-edge technology to elevate your business and deliver seamless digital experiences.
          </motion.div>
        </div>
      </div>
    </div>
  );
}
