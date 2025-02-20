"use client";
import { useMusic } from "@/app/hooks/useMusic";
import MusicToggleButton from "./MusicToggleButton";
import Link from "next/link";

export default function Nav() {
  const { firstClick } = useMusic();
  return (
    <div onClick={firstClick} className="w-full h-full pl-[5%] pr-[5%]">
      <div className="h-full w-[40%] float-left flex justify-start items-center text-[#f8f8f8] gap-5">
        <Link href="/works">
          <div className="border-[1px] border-transparent hover:border-[#e8e8e8] px-3 py-1 rounded-full hover:cursor-pointer">
            Our works
          </div>
        </Link>
        <div className="border-[1px] border-transparent hover:border-[#e8e8e8] px-3 py-1 rounded-full hover:cursor-pointer">
          What we do
        </div>
      </div>
      <div className="h-full w-[20%] hover:cursor-pointer float-left flex justify-center items-center text-center sm:text-[20px] font-bold text-[#ffffff]">
        <Link href="/">Agency Name</Link>
      </div>
      <div className="h-full w-[40%] float-left flex justify-end items-center text-[#f8f8f8] gap-5">
        <MusicToggleButton />
        <div className="border-[1px] border-transparent hover:border-[#e8e8e8] px-3 py-1 rounded-full hover:cursor-pointer">
          <Link href="/contact">Get in touch</Link>
        </div>
      </div>
    </div>
  );
}
