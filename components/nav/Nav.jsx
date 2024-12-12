import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/icon.png";
import NavItems from "../NavItems";
export default function Nav() {
  return (
    <div className="w-full h-[10%] text-[#eeeeee] border-[#222222] border-b-[1px] bg-[#080808] z-20 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px] lg:h-[10%] justify-center flex items-center">
      <div className="w-[95%] relative h-full">
        <div className="float-left w-[10%] sm:ml-0 ml-[45%] flex items-center justify-start h-full">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={0} />
          </Link>
        </div>

        <div className="sm:flex items-center justify-center w-[80%] relative h-full sm:visible hidden">
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
