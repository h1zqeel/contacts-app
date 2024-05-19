import * as React from "react";
import { ListItem } from "./ListItem";
import { Context } from "@/context";

export interface IAppProps {
    contacts: IContact[];
}

export function ContactList({ contacts }: IAppProps) {
    const { selectedContact, setSelectedContact, setNavOpen, navOpen } =
        React.useContext(Context);
    return (
        <div
            className={`md:flex flex-col space-y-1 mx-1 bg-[#121212] w-full md:w-2/5 h-4/4 rounded-3xl border-solid border-2 border-[#141414] ${
                navOpen && !selectedContact ? "" : "hidden"
            }`}
        >
            {contacts.map((contact) => {
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
        </div>
    );
}
