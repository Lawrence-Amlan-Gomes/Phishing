import NavItems from "./NavItems";

export default function MobileNav() {
  return (
    <div className="w-full h-[10%] text-[#eeeeee] border-[#222222] border-t-[1px] bg-[#080808] z-20 text-[10px] md:text-[12px] lg:text-[14px] xl:text-[18px] 2xl:text-[22px] lg:h-[10%] justify-center flex items-center">
      <div className="w-full relative h-full">
        <div className="flex items-center justify-center w-full relative h-full visible sm:hidden text-[10px]">
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
