'use client'

import React from 'react'

const page = () => {
  return (
    <>
      <div id="NewRootRoot" className="flex flex-col w-full">
        <div className="bg-white flex flex-row justify-between items-center pl-24 pr-20">
          <div className="text-2xl font-['Poppins'] font-bold text-[#54b435]">
            ED Review
          </div>
          <div className="self-end flex flex-row gap-8 w-2/3 items-start mt-4 mb-0">
            <div className="flex flex-col mt-1 gap-5 w-[606px] items-end">
              <div className="self-stretch flex flex-row gap-1 items-start">
                <div className="font-['Poppins'] font-medium mt-3">
                  Companies
                  {"          "}
                  Course
                  {"          "}
                  Booka demo
                  {"          "}
                  Internships
                </div>
                <div className="text-xs font-['Poppins'] leading-[8.35px] text-white mt-2 mr-6">
                  6
                </div>
                <div className="relative flex flex-col w-6 shrink-0 items-start mt-1 mr-6 pb-4 px-0">
                  <img
                    src="https://file.rendit.io/n/5yZtpPl7SRI8ae6vVel3.svg"
                    className="w-6 h-6 absolute top-1 left-0"
                  />
                  <img
                    src="https://file.rendit.io/n/14xE6A8uD2N0q7dEA3bd.svg"
                    id="Ellipse1"
                    className="relative ml-2 w-4"
                  />
                </div>
                <img
                  src="https://file.rendit.io/n/36em066W0yFCIuh7WDYP.png"
                  id="Ellipse"
                  className="w-10 shrink-0"
                />
              </div>
              <img
                src="https://file.rendit.io/n/KpSJkPPcM2PSU9AzGfuR.svg"
                className="mr-px"
              />
            </div>
            <div className="bg-[#67e776] flex flex-col justify-center h-12 items-center rounded">
              <div className="font-['Poppins'] font-medium mx-8">Post a Review</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page