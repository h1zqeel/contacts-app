import { createContext } from 'react';
interface IContextType {
	contacts: IContact[];
	selectedContact: IContact | null;
	setSelectedContact: (contact: IContact) => void;
	navOpen: boolean;
	setNavOpen: (navOpen: boolean) => void;
}
export const Context = createContext<IContextType>({} as IContextType);