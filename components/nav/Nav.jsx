import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/icon.png";
import NavItems from "../NavItems";
export default function Nav() {
  return (
    <div className="w-full h-[10%] text-[#eeeeee] border-[#222222] border-b-[1px] bg-[#080808] z-20 text-[14px] lg:h-[10%] justify-center flex items-center">
      <div className="w-[95%] relative h-full">
        <div className="float-left w-[10%] flex items-center justify-start h-full">
          <Link href="/">
            <Image src={Logo} alt="Logo" width={50} height={0} />
          </Link>
        </div>

        <div className="flex items-center justify-center w-[80%] relative h-full">
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
