import React, { useState } from "react";
import FolderIcons from "./FolderIcons";
import FolderIconsAvailable from "./FolderIconsAvailable";
import File from "../file/FileRoute";

type FolderProps = {
    name: string;
    logo: FolderIconsAvailable;
    children?: React.ReactNode;
};

export default function Folder({ name, logo, children }: FolderProps) {
    const [isOpen, setOpen] = useState(false)

    const onClickhandler = () => setOpen(o => !o)
    return (
        <>
            <div className="text-white w-full px-2 text-lg hover:bg-[#37373d] inline-block align-middle h-8" onClick={onClickhandler}>
                {isOpen
                    ? <span className="material-symbols-outlined align-middle">
                        expand_more
                    </span>
                    : <span className="material-symbols-outlined align-middle">
                        chevron_right
                    </span>}
                <div className="mr-1 inline-block align-middle"><FolderIcons open={isOpen} folder={logo} /></div>
                {name}
            </div>
            <div className={`ml-[1.12rem] pl-2 border-l-2 border-gray-400 flex flex-col ${isOpen || "hidden"}`}>
                {children}
            </div>
        </>
    );
};