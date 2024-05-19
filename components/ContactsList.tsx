import * as React from "react";
import { ListItem } from "./ListItem";
import { Context } from "@/context";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export interface IAppProps {
    contacts: IContact[];
    loading: boolean;
}

export function ContactList({ contacts, loading }: IAppProps) {
    const { selectedContact, setSelectedContact, setNavOpen, navOpen } =
        React.useContext(Context);
    return (
        <div
            className={`md:flex flex-col space-y-1 mx-1 bg-[#121212] w-full md:w-2/5 h-4/4 rounded-3xl border-solid border-2 border-[#141414] ${
                navOpen && !selectedContact ? "" : "hidden"
            }`}
        >
            {!loading &&
                contacts.map((contact) => {
                    return (
                        <div
                            key={contact.id}
                            className="flex flex-row justify-center"
                            onClick={() => {
                                setSelectedContact(contact);
                                setNavOpen(false);
                            }}
                        >
                            <ListItem
                                name={contact.name}
                                companyName={contact.company.name}
                                selected={
                                    selectedContact
                                        ? contact.id === selectedContact.id
                                        : false
                                }
                            />
                        </div>
                    );
                })}
            {loading && (
				<SkeletonTheme baseColor="#202020" highlightColor="#444">
					<p className="m-3">
						<Skeleton height={5} width={'100%'} count={10} />
					</p>
				</SkeletonTheme>
            )}
        </div>
    );
}
