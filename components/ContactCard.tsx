import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import {
    faEnvelope,
    faMessage,
    faPhone,
    faVideo,
} from "@fortawesome/free-solid-svg-icons";

export interface IContactCardProps {
    name: string;
    companyName: string;
}

export function ContactCard(props: IContactCardProps) {
    return (
        <div className="bg-[#121212] pb-5 rounded-3xl border-solid border-2 border-[#141414] text-white mx-1 h-full">
            <div className="flex flex-row justify-center">
                <div className="flex flex-col text-center">
					<div>
						<img
							className="w-64 h-64 rounded-full object-cover"
							src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${props.name}`}
							alt="Avatar"
						/>
					</div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-semibold">{props.name}</p>
                        <p className="text-l text-gray-300">
                            {props.companyName}
                        </p>
                        <div className="flex space-x-4 p-3 shadow-md">
                            <div className="flex items-center justify-center p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-blue-400"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                <FontAwesomeIcon
                                    icon={faVideo}
                                    className="text-green-400"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    className="text-yellow-400"
                                />
                            </div>
                            <div className="flex items-center justify-center p-4 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-red-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
