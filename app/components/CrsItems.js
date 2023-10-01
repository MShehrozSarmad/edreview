import React from 'react';
import Carousel from '@itseasy21/react-elastic-carousel';
import Image from 'next/image';
import ds from './ds.png'
import crr from './portfolio.png'
import clndr from './calendar.png'
import dlr from './dollar.png'

const CrsItems = () => {
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 2 },
        { width: 1200, itemsToShow: 3 }
    ]
    // const items = [
    //     { id: 1, title: 'item #1' },
    //     { id: 2, title: 'item #2' },
    //     { id: 3, title: 'item #3' },
    //     { id: 4, title: 'item #4' },
    //     { id: 5, title: 'item #5' }
    // ];

    return (
        <Carousel breakPoints={breakPoints}>
            {/* {items.map(item => <div className=' w-4 border crd' key={item.id}>{item.title}</div>)} */}
            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border m-1'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={ds} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px] w-full text-justify">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full text-left">
                            Acmegrade
                        </span>
                    </p>
                </div>
                <div className="text-[grey] text-sm flex w-full justify-evenly p-4 pt-0">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none" className=' inline'>
                            <path d="M14.2857 7.85714C14.2857 6.15218 13.6084 4.51705 12.4028 3.31146C11.1972 2.10587 9.56211 1.42857 7.85714 1.42857C6.15218 1.42857 4.51705 2.10587 3.31146 3.31146C2.10587 4.51705 1.42857 6.15218 1.42857 7.85714C1.42857 10.4943 3.53857 13.9314 7.85714 18.0486C12.1757 13.9314 14.2857 10.4943 14.2857 7.85714ZM7.85714 20C2.61857 15.2386 0 11.19 0 7.85714C0 5.7733 0.827804 3.7748 2.3013 2.3013C3.7748 0.827804 5.7733 0 7.85714 0C9.94099 0 11.9395 0.827804 13.413 2.3013C14.8865 3.7748 15.7143 5.7733 15.7143 7.85714C15.7143 11.19 13.0957 15.2386 7.85714 20Z" fill="#777777" />
                            <path d="M7.85715 9.99999C8.42547 9.99999 8.97051 9.77423 9.37238 9.37236C9.77424 8.9705 10 8.42546 10 7.85713C10 7.28881 9.77424 6.74377 9.37238 6.34191C8.97051 5.94004 8.42547 5.71428 7.85715 5.71428C7.28883 5.71428 6.74378 5.94004 6.34192 6.34191C5.94006 6.74377 5.71429 7.28881 5.71429 7.85713C5.71429 8.42546 5.94006 8.9705 6.34192 9.37236C6.74378 9.77423 7.28883 9.99999 7.85715 9.99999ZM7.85715 11.4286C6.90995 11.4286 6.00154 11.0523 5.33177 10.3825C4.662 9.71274 4.28572 8.80434 4.28572 7.85713C4.28572 6.90993 4.662 6.00153 5.33177 5.33175C6.00154 4.66198 6.90995 4.28571 7.85715 4.28571C8.80435 4.28571 9.71276 4.66198 10.3825 5.33175C11.0523 6.00153 11.4286 6.90993 11.4286 7.85713C11.4286 8.80434 11.0523 9.71274 10.3825 10.3825C9.71276 11.0523 8.80435 11.4286 7.85715 11.4286Z" fill="#777777" />
                        </svg> Mumbai,India
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=' inline'>
                            <path d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z" fill="#54B435" />
                        </svg> <span className='text-[#54B435]'>4.9</span> (345 Reviews)
                    </span>
                </div>

                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <p className=" text-[grey] inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#4E1D9A" />
                        </svg>
                        <span className=' pl-2'>Begginer Level Course</span>
                    </p>
                    <a className="inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0 text-[#54B435]">
                        View Details
                    </a>
                </div>
            </div>


            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border m-1'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={ds} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px] w-full text-justify">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full text-left">
                            Acmegrade
                        </span>
                    </p>
                </div>
                <div className="text-[grey] text-sm flex w-full justify-evenly p-4 pt-0">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none" className=' inline'>
                            <path d="M14.2857 7.85714C14.2857 6.15218 13.6084 4.51705 12.4028 3.31146C11.1972 2.10587 9.56211 1.42857 7.85714 1.42857C6.15218 1.42857 4.51705 2.10587 3.31146 3.31146C2.10587 4.51705 1.42857 6.15218 1.42857 7.85714C1.42857 10.4943 3.53857 13.9314 7.85714 18.0486C12.1757 13.9314 14.2857 10.4943 14.2857 7.85714ZM7.85714 20C2.61857 15.2386 0 11.19 0 7.85714C0 5.7733 0.827804 3.7748 2.3013 2.3013C3.7748 0.827804 5.7733 0 7.85714 0C9.94099 0 11.9395 0.827804 13.413 2.3013C14.8865 3.7748 15.7143 5.7733 15.7143 7.85714C15.7143 11.19 13.0957 15.2386 7.85714 20Z" fill="#777777" />
                            <path d="M7.85715 9.99999C8.42547 9.99999 8.97051 9.77423 9.37238 9.37236C9.77424 8.9705 10 8.42546 10 7.85713C10 7.28881 9.77424 6.74377 9.37238 6.34191C8.97051 5.94004 8.42547 5.71428 7.85715 5.71428C7.28883 5.71428 6.74378 5.94004 6.34192 6.34191C5.94006 6.74377 5.71429 7.28881 5.71429 7.85713C5.71429 8.42546 5.94006 8.9705 6.34192 9.37236C6.74378 9.77423 7.28883 9.99999 7.85715 9.99999ZM7.85715 11.4286C6.90995 11.4286 6.00154 11.0523 5.33177 10.3825C4.662 9.71274 4.28572 8.80434 4.28572 7.85713C4.28572 6.90993 4.662 6.00153 5.33177 5.33175C6.00154 4.66198 6.90995 4.28571 7.85715 4.28571C8.80435 4.28571 9.71276 4.66198 10.3825 5.33175C11.0523 6.00153 11.4286 6.90993 11.4286 7.85713C11.4286 8.80434 11.0523 9.71274 10.3825 10.3825C9.71276 11.0523 8.80435 11.4286 7.85715 11.4286Z" fill="#777777" />
                        </svg> Mumbai,India
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=' inline'>
                            <path d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z" fill="#54B435" />
                        </svg> <span className='text-[#54B435]'>4.9</span> (345 Reviews)
                    </span>
                </div>

                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <p className=" text-[grey] inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#4E1D9A" />
                        </svg>
                        <span className=' pl-2'>Begginer Level Course</span>
                    </p>
                    <a className="inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0 text-[#54B435]">
                        View Details
                    </a>
                </div>
            </div>





            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border m-1'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={ds} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px] w-full text-justify">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full text-left">
                            Acmegrade
                        </span>
                    </p>
                </div>
                <div className="text-[grey] text-sm flex w-full justify-evenly p-4 pt-0">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none" className=' inline'>
                            <path d="M14.2857 7.85714C14.2857 6.15218 13.6084 4.51705 12.4028 3.31146C11.1972 2.10587 9.56211 1.42857 7.85714 1.42857C6.15218 1.42857 4.51705 2.10587 3.31146 3.31146C2.10587 4.51705 1.42857 6.15218 1.42857 7.85714C1.42857 10.4943 3.53857 13.9314 7.85714 18.0486C12.1757 13.9314 14.2857 10.4943 14.2857 7.85714ZM7.85714 20C2.61857 15.2386 0 11.19 0 7.85714C0 5.7733 0.827804 3.7748 2.3013 2.3013C3.7748 0.827804 5.7733 0 7.85714 0C9.94099 0 11.9395 0.827804 13.413 2.3013C14.8865 3.7748 15.7143 5.7733 15.7143 7.85714C15.7143 11.19 13.0957 15.2386 7.85714 20Z" fill="#777777" />
                            <path d="M7.85715 9.99999C8.42547 9.99999 8.97051 9.77423 9.37238 9.37236C9.77424 8.9705 10 8.42546 10 7.85713C10 7.28881 9.77424 6.74377 9.37238 6.34191C8.97051 5.94004 8.42547 5.71428 7.85715 5.71428C7.28883 5.71428 6.74378 5.94004 6.34192 6.34191C5.94006 6.74377 5.71429 7.28881 5.71429 7.85713C5.71429 8.42546 5.94006 8.9705 6.34192 9.37236C6.74378 9.77423 7.28883 9.99999 7.85715 9.99999ZM7.85715 11.4286C6.90995 11.4286 6.00154 11.0523 5.33177 10.3825C4.662 9.71274 4.28572 8.80434 4.28572 7.85713C4.28572 6.90993 4.662 6.00153 5.33177 5.33175C6.00154 4.66198 6.90995 4.28571 7.85715 4.28571C8.80435 4.28571 9.71276 4.66198 10.3825 5.33175C11.0523 6.00153 11.4286 6.90993 11.4286 7.85713C11.4286 8.80434 11.0523 9.71274 10.3825 10.3825C9.71276 11.0523 8.80435 11.4286 7.85715 11.4286Z" fill="#777777" />
                        </svg> Mumbai,India
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=' inline'>
                            <path d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z" fill="#54B435" />
                        </svg> <span className='text-[#54B435]'>4.9</span> (345 Reviews)
                    </span>
                </div>

                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <p className=" text-[grey] inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#4E1D9A" />
                        </svg>
                        <span className=' pl-2'>Begginer Level Course</span>
                    </p>
                    <a className="inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0 text-[#54B435]">
                        View Details
                    </a>
                </div>
            </div>


            <div className='w-[412px] flex flex-col justify-around bg-white rounded-md shadow-xl z-10 border m-1'>
                <div className='flex flex-row items-center text-center p-4 '>
                    <div>
                        <Image src={ds} alt='google' width={53} height={53} />
                    </div>
                    <p className='flex flex-col items-center pl-[5px] w-full'>
                        <span className="font-[700px] w-full text-justify">Commercial Industrial Placement</span>
                        <span className="text-[grey] text-sm flex w-full text-left">
                            Acmegrade
                        </span>
                    </p>
                </div>
                <div className="text-[grey] text-sm flex w-full justify-evenly p-4 pt-0">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none" className=' inline'>
                            <path d="M14.2857 7.85714C14.2857 6.15218 13.6084 4.51705 12.4028 3.31146C11.1972 2.10587 9.56211 1.42857 7.85714 1.42857C6.15218 1.42857 4.51705 2.10587 3.31146 3.31146C2.10587 4.51705 1.42857 6.15218 1.42857 7.85714C1.42857 10.4943 3.53857 13.9314 7.85714 18.0486C12.1757 13.9314 14.2857 10.4943 14.2857 7.85714ZM7.85714 20C2.61857 15.2386 0 11.19 0 7.85714C0 5.7733 0.827804 3.7748 2.3013 2.3013C3.7748 0.827804 5.7733 0 7.85714 0C9.94099 0 11.9395 0.827804 13.413 2.3013C14.8865 3.7748 15.7143 5.7733 15.7143 7.85714C15.7143 11.19 13.0957 15.2386 7.85714 20Z" fill="#777777" />
                            <path d="M7.85715 9.99999C8.42547 9.99999 8.97051 9.77423 9.37238 9.37236C9.77424 8.9705 10 8.42546 10 7.85713C10 7.28881 9.77424 6.74377 9.37238 6.34191C8.97051 5.94004 8.42547 5.71428 7.85715 5.71428C7.28883 5.71428 6.74378 5.94004 6.34192 6.34191C5.94006 6.74377 5.71429 7.28881 5.71429 7.85713C5.71429 8.42546 5.94006 8.9705 6.34192 9.37236C6.74378 9.77423 7.28883 9.99999 7.85715 9.99999ZM7.85715 11.4286C6.90995 11.4286 6.00154 11.0523 5.33177 10.3825C4.662 9.71274 4.28572 8.80434 4.28572 7.85713C4.28572 6.90993 4.662 6.00153 5.33177 5.33175C6.00154 4.66198 6.90995 4.28571 7.85715 4.28571C8.80435 4.28571 9.71276 4.66198 10.3825 5.33175C11.0523 6.00153 11.4286 6.90993 11.4286 7.85713C11.4286 8.80434 11.0523 9.71274 10.3825 10.3825C9.71276 11.0523 8.80435 11.4286 7.85715 11.4286Z" fill="#777777" />
                        </svg> Mumbai,India
                    </span>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" className=' inline'>
                            <path d="M7.23915 1.34164C7.47864 0.604591 8.52136 0.604592 8.76085 1.34164L10.0655 5.35704C10.1726 5.68666 10.4798 5.90983 10.8264 5.90983H15.0484C15.8234 5.90983 16.1456 6.90152 15.5186 7.35704L12.1029 9.8387C11.8226 10.0424 11.7052 10.4035 11.8123 10.7331L13.117 14.7485C13.3565 15.4856 12.5129 16.0985 11.8859 15.643L8.47023 13.1613C8.18984 12.9576 7.81016 12.9576 7.52977 13.1613L4.11407 15.643C3.48709 16.0985 2.64351 15.4856 2.88299 14.7485L4.18768 10.7331C4.29478 10.4035 4.17745 10.0424 3.89706 9.8387L0.481353 7.35704C-0.145618 6.90152 0.176603 5.90983 0.951581 5.90983H5.17363C5.52021 5.90983 5.82737 5.68666 5.93447 5.35704L7.23915 1.34164Z" fill="#54B435" />
                        </svg> <span className='text-[#54B435]'>4.9</span> (345 Reviews)
                    </span>
                </div>

                <div className="flex p-1rem border-t w-full p-4 justify-between">
                    <p className=" text-[grey] inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0">
                        <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                            <circle cx="3" cy="3" r="3" fill="#4E1D9A" />
                        </svg>
                        <span className=' pl-2'>Begginer Level Course</span>
                    </p>
                    <a className="inline-flex items-center py-1 px-3 text-base mt-4 md:mt-0 text-[#54B435]">
                        View Details
                    </a>
                </div>
            </div>


        </Carousel>
    );
};

export default CrsItems;
