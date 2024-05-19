import * as React from "react";
import ContactInfomation from "./ContactInformation";
import { ContactCard } from "./ContactCard";
import { Context } from "@/context";

export interface IAppProps {
    contact: IContact;
}

export function ContactDetails({ contact }: IAppProps) {
    const { navOpen } = React.useContext(Context);
    return (
        <div
            className={`w-screen md:w-3/4 h-4/4 md:flex flex-col space-y-1 overflow-y-scroll ${
                navOpen ? "xs:hidden" : ""
            }`}
        >
            <div className="h-fit">
                <ContactCard
                    name={contact.name}
                    companyName={contact.company.name}
                />
            </div>
            <div className="h-fit flex-grow">
                <ContactInfomation contact={contact} />
            </div>
        </div>
    );
}
