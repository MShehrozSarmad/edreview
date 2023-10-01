import React from 'react'
import hero from "../../public/images/hero0.png";
import Image from 'next/image';

const New = () => {
    return (
        <>
            <section className="text-white body-font herosec flex ">

                <div className=" flex flex-col justify-center pl-9 ml-5 w-1/2 hero1st">
                    {/* headings */}
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-white">To be the best,</h1>
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-extrabold text-green-500">Choose the best...</h1>
                    <p className="leading-relaxed pb-5">Company reviews, Course review, Internship.</p>
                    {/* inputs */}
                    <div className="flex w-full md:justify-start justify-center items-center">
                        <div className=" cuHS w-3/4 rounded relative mr-4 md:w-full">
                            <input type="search" placeholder='Search by course' id="hero-field" name="hero-field" className=" w-3/4 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            <select className='text-black w-1/4 outline-none border-l-2 text-center'>
                                <option value="Course">Course</option>
                                <option value="Internship">Internship</option>
                                <option value="Job">Job</option>
                            </select>
                        </div>
                        <button className="inline-flex text-black bg-green-500 border-0 py-3 px-7 focus:outline-none hover:bg-green-600 rounded text-lg">Search</button>
                    </div>
                </div>

                {/* image */}
                <div className=" w-1/2 heropic">
                    <Image
                        className='object-cover object-center h-full'
                        src={hero}
                        alt="hero"
                    />
                </div>
            </section>
        </>
    )
}

export default New