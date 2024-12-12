"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import colors from "@/app/colors/colors";
export default function HomeEduCard({ img, degree, uni, year }) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 0.98 }}
      transition={{ type: "spring", duration: 0.2 }}
      className={`border-[1px] ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} overflow-hidden p-[1%] h-full relative w-[28.4%] mr-[2.5%] ml-[2.5%] float-left rounded-2xl`}
    >
      <Link href="/education">
        <div className="h-[40%] w-full float-left mt-[10%] relative">
          <Image
            src={img}
            alt="Descriptive alt text"
            layout="fill"
            className="object-contain"
          />
        </div>
        <div className="h-[50%] w-full float-left  flex justify-center items-center">
          <div>
            <div className="tracking-wide text-white text-center">
              {degree}
            </div>
            <div className="tracking-wide text-center mt-2 text-blue-500 font-bold">
              {uni}
            </div>
            <div className="tracking-wide text-center mt-2 text-[#dddddd]">
              {year}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
