import { Context } from "@/context";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

export interface INavProps {
    toggleNav: () => void;
}

export function Nav({ toggleNav }: INavProps) {
    let { navOpen } = React.useContext(Context);
    return (
        <div className="w-full h-full flex flex-row space-y-1 bg-[#121212] h-5/5 rounded-b-3xl border-solid border-2 border-[#141414] text-white">
            <div className="flex flex-col justify-center ml-3 md:hidden w-5">
                {!navOpen && (
                    <FontAwesomeIcon
                        icon={faBars}
                        style={{ fontSize: "1.5rem" }}
                        onClick={() => toggleNav()}
                    />
                )}
                {navOpen && (
                    <FontAwesomeIcon
                        icon={faXmark}
                        style={{ fontSize: "1.5rem" }}
                        onClick={() => toggleNav()}
                    />
                )}
            </div>
            <div className="flex flex-col justify-center ml-8 md:ml-3">
                <h1 className="text-xl md:text-2xl font-semibold">
                    Browse Contacts
                </h1>
            </div>
        </div>
    );
}
