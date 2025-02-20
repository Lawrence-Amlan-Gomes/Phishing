"use client";
import { useRouter } from "next/navigation";
import { useWork } from "@/app/hooks/useWork";
import { set } from "mongoose";
import Image from "next/image";
import { useMusic } from "@/app/hooks/useMusic";
export default function EachWorkName({ work, setHoveredId }) {
  const router = useRouter();
  const { firstClick } = useMusic();
  const { setShowWork, setWork } = useWork();

  return (
    <div
      onMouseEnter={() => setHoveredId(work.id)}
      onMouseLeave={() => setHoveredId(null)}
      onClick={() => {
        firstClick();
        router.push(`works/${work.routeName}`);
      }}
      className="text-white text-center float-left w-full sm:text-[15px] bg-[#282828] border-[#282828] mb-3 py-2 px-3 rounded-xl hover:border-[#ffffff] border-[1px] hover:border-[1px] hover:bg-transparent hover:cursor-pointer"
    >
      {work.title}
    </div>
  );
}
