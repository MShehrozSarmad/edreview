import React from 'react'
// import SearchBarDropdown from './Searchbox'
import hero  from "./hero.png";
import Image from 'next/image';

const Hero = () => {
    return (
        <>
            <section className="text-white body-font herosec">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">To be the best,</h1>
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-green-500">Choose the best...</h1>
                        <p className="mb-8 leading-relaxed">Company reviews, Course review, Internship.</p>
                        <div className="flex w-full md:justify-start justify-center items-center">
                            <div className="cuHS rounded relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                                <input type="search" placeholder='Search by course' id="hero-field" name="hero-field" className=" w-3/4 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                                <select className='text-black w-1/4 outline-none'>
                                    <option value="Course">Course</option>
                                    <option value="Internship">Internship</option>
                                    <option value="Job">Job</option>
                                </select>
                            </div>
                            <button className="inline-flex text-black bg-green-500 border-0 py-3 px-7 focus:outline-none hover:bg-green-600 rounded text-lg">Search</button>
                        </div>

                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        {/* <img className=" rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
                        <Image
                        className='object-cover object-center'
                        src={hero}
                        width={940}
                        height={631}
                        alt="hero"
                    />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero