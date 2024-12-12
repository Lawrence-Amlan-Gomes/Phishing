import Back from "../public/Back.jpg";
import Image from "next/image";
import HomeHome from "./HomeHome";
import HomeAbout from "./HomeAbout";
import HomeProject from "./HomeProject";
import HomeSkill from "./HomeSkill";
import HomeEducation from "./HomeEducation";
import HomeContact from "./HomeContact";
import Footer from "./Footer";
export default function Home() {
  return (
    <div className="sm:h-[90%] h-[80%] w-full justify-center relative overflow-hidden">
      {/* <Image
        src={Back}
        alt="Descriptive alt text"
        layout="fill"
        className="object-cover obsolute z-0"
      /> */}
      <div className="absolute w-full h-full overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-blue-800 scrollbar-track-[#080808]">
        {/* Landing Part */}
        <HomeHome />
        {/* About Me */}
        <HomeAbout />
        {/* Projects */}
        <HomeProject/>
        {/* Skills */}
        <HomeSkill/>
        {/* Education */}
        <HomeEducation/>
        {/* Contact */}
        <HomeContact/>
        {/* <Footer/> */}
      </div>
    </div>
  );
}
