import { SearchIcon } from '@heroicons/react/solid';
import React from 'react';

const Header = () => {
    return (
            <header className='fixed top-0 w-full px-8 py-4 bg-amber-300 '>
                <div className='max-w-6xl w-full mx-auto flex justify-between items-center'>
                <h3 className='font-cookie text-white text-5xl'> Hasan</h3>
                <nav className='text-white'>
                    <SearchIcon className='h-6 w-6'/>
                </nav>
                </div>
            </header>
    );
};

export default Header;