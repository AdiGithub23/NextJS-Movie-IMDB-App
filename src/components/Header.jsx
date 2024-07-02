import Link from "next/link";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import DarkModeSwitch from "@/components/DarkModeSwitch";
export default function Header() {
  return (
    // <div
    //   className="flex justify-between items-center p-3
    //   max-w-6xl mx-auto"
    // >
    //   <div className="flex gap-5">
    //     <MenuItem title="home" address="/" Icon={AiFillHome} />
    //     <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
    //   </div>

    //   <div className="flex gap-5 items-center">
    //     <DarkModeSwitch />
    //     <Link href={"/"} className="flex gap-1 items-center">
    //       <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg">
    //         IMDB
    //       </span>
    //       <span className="text-xl hidden sm:inline">Movie App</span>
    //     </Link>
    //   </div>
    // </div>

    <header className="flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-800 shadow-md max-w-full mx-auto pr-20 pl-20">
      <nav className="flex gap-5">
        <MenuItem title="Home" address="/" Icon={AiFillHome} />
        <MenuItem title="About" address="/about" Icon={BsFillInfoCircleFill} />
      </nav>

      <div className="flex gap-5 items-center">
        <DarkModeSwitch />
        <Link href="/" className="flex items-center gap-1">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg text-white">
            IMDB
          </span>
          <span className="text-xl hidden sm:inline text-gray-900 dark:text-white">
            Movie App
          </span>
        </Link>
      </div>
    </header>
  );
}
