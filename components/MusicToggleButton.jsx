"use client";

import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";
import { useMusic } from "@/app/hooks/useMusic";

const MusicToggleButton = () => {
  const { isPlaying, toggleMusic } = useMusic();

  return (
    <motion.div
      animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
      transition={
        isPlaying
          ? { repeat: Infinity, duration: 3, ease: "linear" }
          : { duration: 0 }
      }
      className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-transparent hover:border-[#ffffff] bg-[#282828] border-[1px] border-[#282828] cursor-pointer"
      onClick={toggleMusic}
    >
      <div className="z-10 text-white">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </div>
    </motion.div>
  );
};

export default MusicToggleButton;
