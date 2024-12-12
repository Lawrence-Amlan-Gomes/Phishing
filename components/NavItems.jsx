import Link from "next/link";
import colors from "@/app/colors/colors";
export default function NavItems({ linkTo, text }) {
  return (
    <>
      <Link href={linkTo}>
        <div className={`ml-5 mr-5 tracking-wider ${colors.KeyHoverText}`}>
          {text}
        </div>
      </Link>
    </>
  );
}
