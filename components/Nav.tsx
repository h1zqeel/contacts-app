import { Context } from '@/context';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

export interface INavProps {
	setNavOpen: any;
}

export function Nav ({setNavOpen}: INavProps) {
	const {navOpen} = React.useContext(Context);
return (
<div className='w-full h-full flex flex-row space-y-1 bg-[#121212] h-5/5 rounded-3xl border-solid border-2 border-[#141414] text-white'>
	<div className='flex flex-col justify-center ml-3 md:hidden'>
		<FontAwesomeIcon icon={faBars} size={'2x'} onClick={()=>setNavOpen(true)}/>
	</div>
	<div className='flex flex-col justify-center ml-8 md:ml-3'>
		<h1 className='text-2xl font-semibold'>Browse Contacts</h1>
	</div>
</div>
);
}
