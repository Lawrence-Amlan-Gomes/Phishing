"use client";

import { createContext, useContext, useRef, useState, useEffect } from "react";

import { MusicContext } from "../contexts";

export default function MusicProvider({ children }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio("/music.mp3");
    audioRef.current.loop = true; // Ensure it keeps looping

    return () => {
      audioRef.current.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const firstClick = () => {
    if (isFirst == false && audioRef.current) {
      audioRef.current.play();
      audioRef.current.volume = 0.3
      setIsPlaying(true);
      setIsFirst(true);
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, toggleMusic, firstClick }}>
      {children}
    </MusicContext.Provider>
  );
}
