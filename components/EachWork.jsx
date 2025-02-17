"use client";
import Nav from "@/components/Nav";
import Image from "next/image";
import BgImage from "/public/bgImg2.png";
import works from "@/app/works/works";
import { motion } from "framer-motion";
import Link from "next/link";

export default function EachWork({ params }) {
  const { routeName } = params;
  let thisWork = {};
  for (let i of works) {
    if (i.routeName == routeName) {
      thisWork = i;
    }
  }
  return (
    <>
      <div className="absolute w-full h-full z-0">
        {/* <motion.div
          key={thisWork.id}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className={`absolute h-full w-full bg-black text-black z-20 ${thisWork.opacity}`}
          ></div>
          <div className="h-full w-full relative">
            <Image
              src={thisWork.img1}
              alt={thisWork.title}
              layout="fill"
              className="object-cover"
              objectFit="cover"
              objectPosition="top"
            />
          </div>
        </motion.div> */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity:1,
          }}
          transition={{ duration:1, type: "spring" }}
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
          className={`absolute h-full w-full bg-black text-black z-0 "opacity-100"
          `}
        ></div>
      </div>
      <div className="absolute w-full h-full z-30">
        <div className="w-full h-[10%] z-30">
          <Nav />
        </div>
        <div className="w-full h-[90%] z-30 pl-[5%]">
          <div className="float-left h-full w-[42.5%] mr-[2.5%]">
            <motion.div
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="float-left sm:text-[30px] font-bold h-[20%] w-full text-[#ffffff] flex justify-center items-center"
            >
              {thisWork.title}
            </motion.div>
            <motion.div
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{
                duration: 1,
                type: "just",
              }}
              className="float-left h-[55%] mb-[2%] w-full relative rounded-xl overflow-hidden "
            >
              <Image
                src={thisWork.img2}
                alt="Descriptive alt text"
                layout="fill"
                className="object-cover"
                objectFit="cover"
                objectPosition="top"
              />
            </motion.div>
            <motion.div
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="float-left sm:text-[22px] h-[10%] w-full text-[#ffffff] flex justify-center items-center"
            >
              {thisWork.type}
            </motion.div>
            <motion.div
              initial={{ x: -150 }}
              animate={{ x: 0 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
              className="float-left sm:text-[18px] h-[10%] mb-[2%] w-full text-[#ffffff] flex justify-center items-start"
            >
              <Link legacyBehavior href={thisWork.liveLink} passHref>
                <a target="_blank">
                  <span className="hover:underline hover:cursor-pointer">
                    Check Live Server
                  </span>
                </a>
              </Link>
            </motion.div>
          </div>
          <motion.div
            initial={{ x: +100 }}
            animate={{ x: 0 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="float-left text-justify pr-[5%] sm:text-[16px] h-[80%] w-[52.5%] ml-[2.5%] my-[5%] text-[#e9e9e9] overflow-y-auto overflow-x-hidden"
          >
            {thisWork.longDes}
          </motion.div>
        </div>
      </div>
    </>
  );
}
