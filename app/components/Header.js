'use client'
import React from 'react'
import Dropdown from './Dropdown';
import dp  from "../../public/images/dp.png";
import Image from 'next/image';

const Header = () => {
    return (
        <header className="text-black body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <span className="ml-3 text-xl font-bold text-green-500">ED Review</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <a className="mr-5">Companies</a>
                    <a className="mr-5">Course</a>
                    <a className="mr-5">Booka demo</a>
                    <a className="mr-5">Internships</a>
                    <Dropdown/>
                    <Image
                        className='mr-5 border-red-600 p-1 dp-style'
                        src={dp}
                        width={50}
                        height={50}
                        alt="dp"
                    />
                </nav>
                <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                    Post a Review
                </button>
            </div>
        </header>
    );
};

export default Header;