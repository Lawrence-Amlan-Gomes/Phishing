"use client";
import works from "@/app/works/works";
import EachProject from "./EachProject";
export default function AllWorks() {
  return (
    <div className="w-full px-[5%] overflow-x-hidden">
      {works.map((work) => (
        <EachProject key={work.id} work={work} />
      ))}
    </div>
  );
}
