import { IoNotifications } from "react-icons/io5";
import ProfileBox from "./ProfileBox";
import { MdOutlineLightMode } from "react-icons/md";
import Searchbar from "./Searchbar";
import ThemeToggle from "../Themes/ThemeToggle";

export default function Navbar () {

    return (
        <div className="w-full h-full items-center px-5 flex justify-between">
            <div className="font-semibold text-xl">Daily Ritual</div>
            <div className="flex items-center">
                <div className="px-5 flex gap-5 items-center">
                    <div className="w-md">
                        <Searchbar />
                    </div>
                    <div className="flex hover:text-white cursor-pointer text-[#b4b4b4]">
                        <IoNotifications  size={22} />
                        <div className="size-2 relative -left-2 bg-red-700 rounded-full"></div>
                    </div>
                    <div className="flex hover:text-white cursor-pointer text-[#b4b4b4]">
                        <ThemeToggle />
                    </div>
                </div>
                <div className="border-l-[1px] border-[#797979] px-5 ">
                    <ProfileBox />
                </div>
            </div>
        </div>
    )
}