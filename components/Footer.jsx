"use client";
import { motion } from "framer-motion";
export default function Footer() {
  return (
    <div className="w-full h-[250px] float-left bg-black border-t-[1px] border-t-[#666666] text-[#ffffff]">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false }}
        className="w-full h-[200px] flex justify-center items-center text-[#dddddd] sm:text-[50px]"
      >
        Lets Work Together
      </motion.div>
      <motion.div className="w-full h-[50px] flex justify-center items-start text-white text-[15px]">
        All right reserved by Our Agency
      </motion.div>
    </div>
  );
}
