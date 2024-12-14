import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/icon.png";
import NavItems from "../NavItems";
export default function Nav() {
  return (
    <div className="w-full h-full text-[#eeeeee] border-[#222222] border-b-[1px] bg-[#080808] text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px] justify-center flex items-center">
      <div className="w-[95%] relative h-full">
        <div className="float-left w-[10%] sm:ml-0 ml-[45%] flex items-center justify-start h-full">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={0} />
          </Link>
        </div>
        <div className="flex items-center justify-center sm:w-[80%] relative sm:h-full sm:opacity-100 h-0 w-0 opacity-0">
          <NavItems linkTo="/project" text="Projects" />
          <NavItems linkTo="/about" text="About" />
          <NavItems linkTo="/skill" text="Skill" />
          <NavItems linkTo="/education" text="Education" />
          <NavItems linkTo="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
}
