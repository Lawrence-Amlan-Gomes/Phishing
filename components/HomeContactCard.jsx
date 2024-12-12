"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import colors from "@/app/colors/colors";

export default function HomeContactCard({
  img,
  index,
  setIndex,
  ownIdx,
  text,
  livelink
}) {
  const [hide, setHide] = useState(true);
  useEffect(() => {
    if (ownIdx != index) {
      setHide(true);
    }
  }, [index, ownIdx]);
  return (
    <div
      onClick={() => {
        setHide((prev) => !prev);
        setIndex(ownIdx);
      }}
      className={`w-[15%] h-[60%] relative ml-[2%] mr-[2%] border-[1px] rounded-lg ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard}`}
    >
      <Link legacyBehavior href={livelink} passHref>
        <a target="_blank">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 50 }}
            animate={{
              opacity: !hide ? 1 : 0,
              y: !hide ? 1 : 50,
              transition: { duration: 0.5, type: "spring" },
            }}
            className={`h-[20%] w-[160%] ${
              hide ? "opacity-0" : "opacity-100"
            }  ml-[-30%] border-[1px] text-[16px] hover:underline border-slate-800 text-slate-200 p-2 flex justify-center items-center rounded-lg bg-gray-950 hover:text-blue-400 z-30 mt-[-30%]`}
          >
            {text}
          </motion.div>
        </a>
      </Link>

      <div className=" w-[60%] h-[100%] mt-[6%] ml-[20%] relative overflow-hidden flex justify-center p-[20%] items-center">
        <Image
          src={img}
          alt="Descriptive alt text"
          layout="fill"
          className="object-contain"
        />
      </div>
    </div>
  );
}
