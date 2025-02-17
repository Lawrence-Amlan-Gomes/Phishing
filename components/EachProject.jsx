"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
export default function EachProject({ work }) {
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
      <div
        className={`w-full h-[100px] flex items-start sm:text-[25px] ${
          work.id % 2 == 0 ? `justify-end pr-[10px]` : `justify-start pl-[10px]`
        }`}
      >
        {work.title}
      </div>
    </motion.div>
  );
}
