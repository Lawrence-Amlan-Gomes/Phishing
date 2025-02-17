"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause } from "lucide-react";
import { motion } from "framer-motion";

const MusicToggleButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.loop = true; // Ensures infinite looping
    }
  }, []);

  return (
    <motion.div
      animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
      transition={isPlaying ? { repeat: Infinity, duration: 3, ease: "linear" } : { duration: 0 }}
      className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-transparent hover:border-[#ffffff] bg-[#282828] border-[1px] border-[#282828] cursor-pointer"
      onClick={toggleMusic}
    >
      {/* Music Icon (Rotates with Component) */}
      <div className="z-10 text-white">
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </div>

      <audio ref={audioRef} src="/music.mp3" />
    </motion.div>
  );
};

export default MusicToggleButton;
