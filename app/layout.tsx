"use client";

import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { ContactList } from "@/components/ContactsList";
import { useEffect, useState } from "react";
import { Context } from "@/context";
import { Nav } from "@/components/Nav";
import { Poppins } from "next/font/google";

config.autoAddCss = false;

const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "700"],
});

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [contacts, setContacts] = useState<IContact[]>([]);
    const [selectedContact, setSelectedContact] = useState<IContact | null>(
        null
    );
    const [navOpen, setNavOpen] = useState(true);
    const getContact = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setContacts(data);
    };

    const toggleNav = () => {
        if (!navOpen) {
            setSelectedContact(null);
        }
        setNavOpen(!navOpen);
    };

    useEffect(() => {
        getContact();
    }, []);

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>Contacts App</title>
            </head>
            <body className={poppins.className}>
                <Context.Provider
                    value={{
                        selectedContact,
                        setSelectedContact,
                        contacts,
                        navOpen,
                        setNavOpen,
                    }}
                >
                    <div className="flex flex-col h-[100dvh] space-y-1 shadow">
                        <div className="h-[7%]">
                            <Nav toggleNav={toggleNav} />
                        </div>
                        <div className="flex flex-row h-[92%]">
                            {/* Side Bar */}
                            <ContactList contacts={contacts} />
                            <>{children}</>
                        </div>
                    </div>
                </Context.Provider>
            </body>
        </html>
    );
}
