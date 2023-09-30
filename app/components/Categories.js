import React from 'react'
import Image from 'next/image'
import ico1 from './fsfsfsfsfe.png'
import ico2 from './6464646.png'
import ico3 from './presentationddddddddd.png'
import ico4 from './languagefff.png'
import ico5 from './playlistddd.png'
import ico6 from './dar.png'
import ico7 from './fsfsfsfsfe.png'
import ico8 from './6464647.png'

const Categories = () => {
  return (
    <>
      <h1 className=' text-center p-10 text-3xl font-bold'>Explore Categories</h1>
      <section className="body-font px-20">
        <div className="container px-5 py-5 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className=" block object-center" src={ico1} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font font-medium text-center">College & Universties</h2>
              </div>
            </div>
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className="object-center block" src={ico2} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font font-medium text-center">Courses & Classes</h2>
              </div>
            </div>
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className="object-center block" src={ico3} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 titlext-lg font-medium text-center">Educational Services</h2>
              </div>
            </div>
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className="object-center block" src={ico4} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font font-medium text-center">Language Learning</h2>
              </div>
            </div>
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className="object-center block" src={ico5} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font font-medium text-center">Music & Theater Classes</h2>
              </div>
            </div>
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className="object-center block" src={ico6} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font font-medium text-center">Vocational Training Center</h2>
              </div>
            </div>
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className="object-center block" src={ico7} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 titlext-lg font-medium text-center">College & Universties</h2>
              </div>
            </div>
            <div className=" border m-2 lg:w-1/5 md:w-1/2 p-4 w-full">
              <a className="relative rounded overflow-hidden flex justify-center items-center">
                <div className=' p-5 crcl'>
                  <Image alt="icon" width={45} height={45} className="object-center block" src={ico8} />
                </div>
              </a>
              <div className="mt-4">
                <h2 className="text-gray-900 title-font font-medium text-center">College & Universties</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Categories       