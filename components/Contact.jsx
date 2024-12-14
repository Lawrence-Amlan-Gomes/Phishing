"use client";
import Back from "../public/Back.jpg";
import Image from "next/image";
import Gmail from "../public/Gmail.png";
import GitHub from "../public/GitHub.png";
import LinkedIn from "../public/LinkedIn.png";
import { motion } from "framer-motion";
import HomeEduCard from "./HomeEduCard";
import ContactCard from "./ContactCard";
import ContactForm from "./ContactForm";
import colors from "@/app/colors/colors";
import ContactBox from "./ContactBox";
export default function Contact() {
  return (
    <div className="w-full h-full overflow-auto scrollbar-thin scrollbar-thumb-blue-900 scrollbar-track-black">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{ duration: 1, type: "spring" }}
        className="w-full h-[20%] text-[30px] sm:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] font-bold text-blue-600 tracking-wider flex justify-center items-center"
      >
        Get In Touch
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5 },
        }}
        className="w-full sm:h-[800px] h-[600px] relative overflow-hidden flex justify-center items-center"
      >
        <div className="h-full">
          <div className="h-full float-left sm:mr-[15px] mr-[5px]">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className={`sm:h-[400px] bg-[#0f0f0f] sm:w-[100px] h-[250px] w-[50px] rounded-xl`}
            >
              <div className="w-[80%] ml-[10%] h-[80%]">
                <ContactCard
                  img={Gmail}
                  livelink={
                    "https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftLmbMDDfmnMzMrFdjCZjvzPgpPhCSkXwkJSljNbNGzttgqJKwpZQqHGFrWBqzlXxjTNV"
                  }
                />
                <ContactCard
                  img={GitHub}
                  livelink={"https://github.com/Lawrence-Amlan-Gomes"}
                />
                <ContactCard
                  img={LinkedIn}
                  livelink={
                    "https://www.linkedin.com/in/lawrence-amlan-gomes-13847426b/"
                  }
                />
              </div>
            </motion.div>
          </div>
          <div className="h-full float-left sm:ml-[15px] ml-[5px]">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 1, type: "spring" }}
              className={`h-full w-full bg-[#0f0f0f] relative rounded-xl`}
            >
              <ContactBox />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
