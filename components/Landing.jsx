"use client";
import { useWork } from "@/app/hooks/useWork";
import works from "@/app/works/works";
import { motion } from "framer-motion";
import BgImg from "./BgImg";
import Nav from "./Nav";
import WorkList from "./WorkList";
import WorkShow from "./WorkShow";

export default function Landing() {
  const { hoveredId, setHoveredId } = useWork();
  return (
    <div className="relative h-full w-full">
      <div className="w-full h-full absolute">
        <BgImg works={works} hoveredId={hoveredId} />
      </div>
      <div className="absolute h-full w-full z-30">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{ duration: 2, type: "spring" }}
          className="w-full h-[10%]"
        >
          <Nav />
        </motion.div>
        <div className="w-full h-[90%] p-[5%]">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring" }}
            className="h-full w-[20%] flex justify-center items-center overflow-hidden float-left"
          >
            <WorkList works={works} setHoveredId={setHoveredId} />
          </motion.div>
          <div className="flex justify-center items-center h-full w-[80%] float-left">
            <WorkShow works={works} hoveredId={hoveredId} />
          </div>
        </div>
      </div>
    </div>
  );
}
