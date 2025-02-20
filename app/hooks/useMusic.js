import { MusicContext } from "../contexts";
import { useContext } from "react";

export const useMusic = () => {
    const { isPlaying, toggleMusic, firstClick  } = useContext(MusicContext);
    return { isPlaying, toggleMusic, firstClick  };
}