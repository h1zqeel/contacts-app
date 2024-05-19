import * as React from 'react';
import Image from 'next/image';

export interface IAppProps {
	name : string,
	companyName : string,
	selected? : boolean | undefined
}

export function ListItem ({name, companyName, selected}: IAppProps) {
  return (
	<div className={`flex flex-row space-x-2 w-[100%] mx-2 p-1 rounded-3xl text-white hover:bg-sky-700 ${selected ? 'bg-gray-700' : ''}`}>
		<img className="w-11 h-11 rounded-full object-cover" src={`https://api.dicebear.com/8.x/lorelei/svg?seed=${name}`} alt="Avatar" />
		<div className='flex flex-col justify-start'>
			<p className="text-l font-semibold">{name}</p>
			<p className="text-sm text-gray-300">{companyName}</p>
		</div>
	</div>
  );
}
