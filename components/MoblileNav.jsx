import NavItems from "./NavItems";
import Image from "next/image";
import Logo from "../public/icon.png"
import Link from "next/link";

export default function MobileNav() {
  return (
    <div className="w-full h-full text-[#eeeeee] border-[#222222] border-b-[1px] bg-[#080808] relative text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px] justify-center flex items-center">
        <div className="flex items-center justify-center w-full relative h-full text-[10px]">
        <div className="ml-2 mr-1">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={25} height={0} />
          </Link>
        </div>
          <NavItems linkTo="/project" text="Projects" />
          <NavItems linkTo="/about" text="About" />
          <NavItems linkTo="/skill" text="Skill" />
          <NavItems linkTo="/education" text="Education" />
          <NavItems linkTo="/contact" text="Contact" />
        </div>
    </div>
  );
}
