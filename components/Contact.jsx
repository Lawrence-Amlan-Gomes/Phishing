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
export default function Contact() {
  return (
      <div className="w-full h-full overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{ duration: 1, type: "spring" }}
          className="w-full h-[20%] sm:text-[40px] lg:text-[50px] xl:text-[55px] 2xl:text-[60px] font-bold text-blue-600 tracking-wider flex justify-center items-center"
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
          className="w-full h-[70%] relative overflow-y-auto scrollbar-none flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className={`h-[90%] m-[2%] w-[10%] float-left border-[1px] ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard} rounded-xl`}
          >
            <div className="w-[80%] ml-[10%] h-[80%]">
              <ContactCard img={Gmail} livelink={"https://mail.google.com/mail/u/0/#inbox?compose=CllgCJftLmbMDDfmnMzMrFdjCZjvzPgpPhCSkXwkJSljNbNGzttgqJKwpZQqHGFrWBqzlXxjTNV"}/>
              <ContactCard img={GitHub} livelink={"https://github.com/Lawrence-Amlan-Gomes"}/>
              <ContactCard img={LinkedIn} livelink={"https://www.linkedin.com/in/lawrence-amlan-gomes-13847426b/"}/>
            </div>
          </motion.div>
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1 }}
            transition={{ duration: 1, type: "spring" }}
            className={`h-[90%] m-[2%] w-[40%] float-left border-[1px] relative rounded-xl ${colors.cardBorder} ${colors.cardHoverBorder} ${colors.bgCard}`}
          >
            <div className="w-full tracking-wider text-white h-[20%] pt-[1%] flex justify-center items-center text-center font-bold lg:text-[23px]">
              Send Me Direct Mail
            </div>
            <ContactForm/>
          </motion.div>
        </motion.div>
      </div>
  );
}
