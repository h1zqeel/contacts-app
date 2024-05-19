"use client";

import { ContactDetails } from "@/components/ContactDetails";
import { ContactList } from "@/components/ContactsList";
import { Context } from "@/context";
import type { Metadata } from "next";
import { useContext, useEffect, useState } from "react";

export default function Page() {

    const { selectedContact, navOpen } = useContext(Context);
    return selectedContact ? (
        <ContactDetails contact={selectedContact} />
    ) : (
        <div className={`md:flex items-center w-full justify-center text-white ${navOpen ? 'hidden': ''}`}>
			<div className="w-full text-center">
			No Contact Selected
			</div>
		</div>
    );
}
