import React from 'react';
import Carousel from '@itseasy21/react-elastic-carousel';
import Image from 'next/image';
import ggl from '../../public/images/ggl.png'
import jio from '../../public/images/jio.png'
import airtel from '../../public/images/airtel.png'
import crr from '../../public/images/portfolio.png'
import clndr from '../../public/images/calendar.png'
import dlr from '../../public/images/dollar.png'

const IndItem = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 }
    ]

    return (
        <Carousel breakPoints={breakPoints}>
            {/* {items.map(item => <div className=' w-4 border crd' key={item.id}>{item.title}</div>)} */}
            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border m-1'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={ggl} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px]">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full justify-evenly">
                            <span>
                                <Image src={crr} width={20} height={20} className=' inline' /> Google
                            </span>
                            <span>
                                <Image src={clndr} width={20} height={20} className=' inline' /> Internship (10 Months)
                            </span>
                        </span>
                    </p>
                </div>
                <div className="p-4">
                    <p>
                        <Image src={dlr} width={25} height={25} className=' inline' />
                        <span className='leading-6 align-middle pl-2'>10 Coins</span>
                    </p>
                </div>
                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                        Apply Now
                    </button>
                    <button className="inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 border">
                        View Program
                    </button>
                </div>
            </div>


            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={jio} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px]">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full justify-evenly">
                            <span>
                                <Image src={crr} width={20} height={20} className=' inline' /> Google
                            </span>
                            <span>
                                <Image src={clndr} width={20} height={20} className=' inline' /> Internship (10 Months)
                            </span>
                        </span>
                    </p>
                </div>
                <div className="p-4">
                    <p>
                        <Image src={dlr} width={25} height={25} className=' inline' />
                        <span className='leading-6 align-middle pl-2'>10 Coins</span>
                    </p>
                </div>
                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                        Apply Now
                    </button>
                    <button className="inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 border">
                        View Program
                    </button>
                </div>
            </div>

            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={airtel} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px]">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full justify-evenly">
                            <span>
                                <Image src={crr} width={20} height={20} className=' inline' /> Google
                            </span>
                            <span>
                                <Image src={clndr} width={20} height={20} className=' inline' /> Internship (10 Months)
                            </span>
                        </span>
                    </p>
                </div>
                <div className="p-4">
                    <p>
                        <Image src={dlr} width={25} height={25} className=' inline' />
                        <span className='leading-6 align-middle pl-2'>10 Coins</span>
                    </p>
                </div>
                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                        Apply Now
                    </button>
                    <button className="inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 border">
                        View Program
                    </button>
                </div>
            </div>

            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={ggl} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px]">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full justify-evenly">
                            <span>
                                <Image src={crr} width={20} height={20} className=' inline' /> Google
                            </span>
                            <span>
                                <Image src={clndr} width={20} height={20} className=' inline' /> Internship (10 Months)
                            </span>
                        </span>
                    </p>
                </div>
                <div className="p-4">
                    <p>
                        <Image src={dlr} width={25} height={25} className=' inline' />
                        <span className='leading-6 align-middle pl-2'>10 Coins</span>
                    </p>
                </div>
                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <button className="inline-flex items-center bg-green-500 border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                        Apply Now
                    </button>
                    <button className="inline-flex items-center py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 border">
                        View Program
                    </button>
                </div>
            </div>

        </Carousel>
    );
};

export default IndItem;
