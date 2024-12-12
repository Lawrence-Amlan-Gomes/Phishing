"use client";
import Image from "next/image";
import Link from "next/link";
export default function ContactCard({img, livelink}) {
  return (
    <div className="float-left w-[100%] h-[41.5%] flex justify-center items-center">
      <div className="w-[50%] h-[50%] relative">
        <Link legacyBehavior href={livelink} passHref>
          <a target="_blank">
            <Image
              src={img}
              alt="Descriptive alt text"
              layout="fill"
              className="object-contain"
            />
          </a>
        </Link>
      </div>
    </div>
  );
}
