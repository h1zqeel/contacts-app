import * as React from "react";

export interface IContactInfomationProps {
    contact: IContact;
}

export default function ContactInfomation({
    contact,
}: IContactInfomationProps) {
    return (
        <div className="bg-[#121212] p-5 rounded-3xl border-solid border-2 border-[#141414] text-white mx-1 shadow-lg h-full">
            <div className="flex md:flex-row flex-col justify-start md:space-x-24">
                <div>
                    <p className="text-lg text-gray-400 mb-1">
                        @{contact.username}
                    </p>
                    <p className="text-lg mb-3">{contact.email}</p>
                    <div className="mb-3">
                        <h2 className="text-xl font-semibold">Address</h2>
                        <p>
                            {contact.address.street}, {contact.address.suite}
                        </p>
                        <p>
                            {contact.address.city}, {contact.address.zipcode}
                        </p>
                        <p>
                            Geo: {contact.address.geo.lat},{" "}
                            {contact.address.geo.lng}
                        </p>
                    </div>
                    <p className="mb-3">
                        <span className="font-semibold">Phone:</span>{" "}
                        {contact.phone}
                    </p>
                    <p className="mb-3">
                        <span className="font-semibold">Website:</span>{" "}
                        <a
                            href={`http://${contact.website}`}
                            className="text-blue-400 hover:underline"
                        >
                            {contact.website}
                        </a>
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-semibold">Company</h2>
                    <p className="mb-1">{contact.company.name}</p>
                    <p className="italic">
                        &quot;{contact.company.catchPhrase}&quot;
                    </p>
                    <p>{contact.company.bs}</p>
                </div>
            </div>
        </div>
    );
}
