import Back from "../public/Back.jpg";
import Image from "next/image";
import HomeHome from "./HomeHome";
import HomeAbout from "./HomeAbout";
import HomeProject from "./HomeProject";
import HomeSkill from "./HomeSkill";
import HomeEducation from "./HomeEducation";
import HomeContact from "./HomeContact";
import Footer from "./Footer";
import MobileNav from "./MoblileNav";
export default function Home() {
  return (
    <div className="h-full w-full justify-center relative overflow-hidden">
      {/* <Image
        src={Back}
        alt="Descriptive alt text"
        layout="fill"
        className="object-cover obsolute z-0"
      /> */}
      <div className="w-full sm:h-full h-[90%] overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-[#080808]">
        {/* Landing Part */}
        <HomeHome />
        {/* About Me */}
        <HomeAbout />
        {/* Projects */}
        <HomeProject />
        {/* Skills */}
        <HomeSkill />
        {/* Education */}
        <HomeEducation />
        {/* Contact */}
        <HomeContact />
        {/* <Footer/> */}
      </div>
      <div className="w-full h-[10%] opacity-100 sm:w-0 sm:h-0 sm:opacity-0 sm:hidden visible">
        <MobileNav/>
      </div>
    </div>
  );
}
