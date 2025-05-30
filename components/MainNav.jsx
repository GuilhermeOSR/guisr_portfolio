import React from "react";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { MdFileDownload} from "react-icons/md"
import DownloadButton from "./DownloadButton";

const MainNav = () => {
    return (
    <nav className="w-full pt-16 ">
        <div className="flex flex-col h-full items-center justify-between">
            <Logo />
            <NavLinks containerStyles="flex flex-col gap-6" />
                <DownloadButton />
        </div>
        </nav>
    )
};

export default MainNav
