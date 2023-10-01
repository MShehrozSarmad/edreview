import React from 'react'

const Internships = () => {
    return (
        <>
            <h1 className="sm:text-3xl text-3xl title-font font-bold text-center">Latest Internships</h1>
            <section className="body-font">
                <div className="container px-5 py-10 mx-auto flex flex-wrap flex-col pb-0">
                    <div className="flex mx-auto flex-wrap mb-12 gap-2 justify-center">
                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none bg-violet-800 text-white tracking-wider rounded border">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M8.23529 0C6.98722 0 5.79026 0.495797 4.90773 1.37832C4.02521 2.26085 3.52941 3.4578 3.52941 4.70588C3.52941 5.95396 4.02521 7.15092 4.90773 8.03344C5.79026 8.91597 6.98722 9.41177 8.23529 9.41177C9.48337 9.41177 10.6803 8.91597 11.5629 8.03344C12.4454 7.15092 12.9412 5.95396 12.9412 4.70588C12.9412 3.4578 12.4454 2.26085 11.5629 1.37832C10.6803 0.495797 9.48337 0 8.23529 0ZM2.36353 10.5882C2.05369 10.587 1.74665 10.6469 1.46003 10.7646C1.1734 10.8823 0.912829 11.0554 0.693246 11.274C0.473664 11.4926 0.299394 11.7524 0.180431 12.0385C0.0614681 12.3246 0.000152367 12.6313 0 12.9412C0 14.9306 0.98 16.4306 2.51177 17.4082C4.02 18.3694 6.05294 18.8235 8.23529 18.8235H8.29412C8.25489 18.6299 8.23518 18.4328 8.23529 18.2353V13.5294C8.23521 12.8428 8.47536 12.1778 8.91413 11.6496C9.3529 11.1214 9.96263 10.7634 10.6376 10.6376C10.6407 10.6212 10.6438 10.6047 10.6471 10.5882H2.36353ZM11.7647 11.1765V11.7647H11.1765C10.7084 11.7647 10.2596 11.9506 9.92864 12.2816C9.59769 12.6125 9.41177 13.0614 9.41177 13.5294V18.2353C9.41177 18.7033 9.59769 19.1522 9.92864 19.4831C10.2596 19.8141 10.7084 20 11.1765 20H18.2353C18.7033 20 19.1522 19.8141 19.4831 19.4831C19.8141 19.1522 20 18.7033 20 18.2353V13.5294C20 13.0614 19.8141 12.6125 19.4831 12.2816C19.1522 11.9506 18.7033 11.7647 18.2353 11.7647H17.6471V11.1765C17.6471 10.7084 17.4611 10.2596 17.1302 9.92864C16.7992 9.59769 16.3504 9.41177 15.8824 9.41177H13.5294C13.0614 9.41177 12.6125 9.59769 12.2816 9.92864C11.9506 10.2596 11.7647 10.7084 11.7647 11.1765ZM13.5294 10.5882H15.8824C16.0384 10.5882 16.188 10.6502 16.2983 10.7605C16.4086 10.8708 16.4706 11.0205 16.4706 11.1765V11.7647H12.9412V11.1765C12.9412 11.0205 13.0032 10.8708 13.1135 10.7605C13.2238 10.6502 13.3734 10.5882 13.5294 10.5882Z" fill="white" />
                            </svg>
                            <span className='px-2'>Accounting</span>
                        </a>
                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider border rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="20" viewBox="0 0 23 20" fill="none">
                                <path d="M8.88889 14.4444V13.3333H1.12222L1.11111 17.7778C1.11111 19.0111 2.1 20 3.33333 20H18.8889C20.1222 20 21.1111 19.0111 21.1111 17.7778V13.3333H13.3333V14.4444H8.88889ZM20 4.44444H15.5444V2.22222L13.3222 0H8.87778L6.65555 2.22222V4.44444H2.22222C1 4.44444 0 5.44444 0 6.66667V10C0 11.2333 0.988889 12.2222 2.22222 12.2222H8.88889V10H13.3333V12.2222H20C21.2222 12.2222 22.2222 11.2222 22.2222 10V6.66667C22.2222 5.44444 21.2222 4.44444 20 4.44444ZM13.3333 4.44444H8.88889V2.22222H13.3333V4.44444Z" fill="#4E1D9A" />
                            </svg>
                            <span className="px-2">Marketing</span>
                        </a>
                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider border rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="20" viewBox="0 0 25 20" fill="none">
                                <path d="M20.25 7.77778C20.1018 7.77778 19.9815 7.73593 19.8889 7.65223C19.7963 7.56852 19.7315 7.46223 19.6944 7.33334L19.5555 6.61112C19.3889 6.55556 19.2363 6.48593 19.0978 6.40223C18.9593 6.31852 18.8341 6.22149 18.7222 6.11112L17.9722 6.36112C17.8611 6.39816 17.7452 6.39334 17.6244 6.34667C17.5037 6.30001 17.4067 6.22149 17.3333 6.11112L17 5.55556C16.9259 5.44445 16.9026 5.32408 16.93 5.19445C16.9574 5.06482 17.0178 4.95371 17.1111 4.86112L17.7222 4.33334C17.6852 4.24075 17.6667 4.16667 17.6667 4.11112V3.66667C17.6667 3.61112 17.6852 3.53705 17.7222 3.44445L17.1111 2.91668C17.0185 2.82408 16.9585 2.71297 16.9311 2.58334C16.9037 2.45371 16.9267 2.33334 17 2.22223L17.3333 1.66668C17.4074 1.55556 17.5048 1.47668 17.6255 1.43001C17.7463 1.38334 17.8618 1.3789 17.9722 1.41668L18.7222 1.66668C18.8333 1.55556 18.9585 1.45816 19.0978 1.37445C19.237 1.29075 19.3896 1.22149 19.5555 1.16668L19.6944 0.444454C19.7315 0.314824 19.7963 0.208158 19.8889 0.124454C19.9815 0.0407505 20.1018 -0.000730994 20.25 9.74659e-06H20.8611C21.0093 9.74659e-06 21.1296 0.0418615 21.2222 0.125565C21.3148 0.209269 21.3796 0.315565 21.4167 0.444454L21.5555 1.16668C21.7222 1.22223 21.8752 1.29186 22.0144 1.37556C22.1537 1.45927 22.2785 1.55631 22.3889 1.66668L23.1389 1.41668C23.25 1.37964 23.3659 1.38445 23.4867 1.43112C23.6074 1.47779 23.7044 1.55631 23.7778 1.66668L24.1111 2.22223C24.1852 2.33334 24.2085 2.45371 24.1811 2.58334C24.1537 2.71297 24.0933 2.82408 24 2.91668L23.3889 3.44445C23.4259 3.53705 23.4444 3.61112 23.4444 3.66667V4.11112C23.4444 4.16667 23.4259 4.24075 23.3889 4.33334L24 4.86112C24.0926 4.95371 24.153 5.06482 24.1811 5.19445C24.2092 5.32408 24.1859 5.44445 24.1111 5.55556L23.7778 6.11112C23.7037 6.22223 23.6067 6.30112 23.4867 6.34778C23.3667 6.39445 23.2507 6.3989 23.1389 6.36112L22.3889 6.11112C22.2778 6.22223 22.153 6.31964 22.0144 6.40334C21.8759 6.48704 21.723 6.5563 21.5555 6.61112L21.4167 7.33334C21.3796 7.46297 21.3148 7.56963 21.2222 7.65334C21.1296 7.73704 21.0093 7.77852 20.8611 7.77778H20.25ZM20.5555 5.27778C20.9444 5.27778 21.2733 5.14334 21.5422 4.87445C21.8111 4.60556 21.9452 4.27704 21.9444 3.8889C21.9444 3.50001 21.81 3.17112 21.5411 2.90223C21.2722 2.63334 20.9437 2.49927 20.5555 2.50001C20.1667 2.50001 19.8378 2.63445 19.5689 2.90334C19.3 3.17223 19.1659 3.50075 19.1667 3.8889C19.1667 4.27779 19.3011 4.60667 19.57 4.87556C19.8389 5.14445 20.1674 5.27853 20.5555 5.27778ZM17.4444 13.3333C17.4074 13.3333 17.3148 13.2593 17.1667 13.1111L17.0555 12.5C16.9444 12.463 16.8378 12.4211 16.7355 12.3744C16.6333 12.3278 16.5363 12.2585 16.4444 12.1667L15.8889 12.3611C15.8518 12.3796 15.7407 12.3426 15.5555 12.25L15.2222 11.6389L15.2778 11.3056L15.7222 10.8889V10.2222L15.2778 9.80556C15.2407 9.76852 15.2222 9.65741 15.2222 9.47223L15.5555 8.86112C15.5555 8.8426 15.6667 8.80556 15.8889 8.75001L16.4444 8.94445C16.5185 8.87038 16.6111 8.80556 16.7222 8.75001C16.8333 8.69445 16.9444 8.64815 17.0555 8.61112L17.1667 8.00001C17.1667 7.96297 17.2593 7.88889 17.4444 7.77778H18.1111C18.1481 7.77778 18.2407 7.85186 18.3889 8.00001L18.5 8.61112C18.6111 8.64815 18.7222 8.69445 18.8333 8.75001C18.9444 8.80556 19.037 8.87038 19.1111 8.94445L19.6667 8.75001C19.7037 8.73149 19.8148 8.76852 20 8.86112L20.3333 9.47223L20.2778 9.80556L19.8333 10.2222V10.8889L20.2778 11.3056C20.3148 11.3426 20.3333 11.4537 20.3333 11.6389L20 12.25C20 12.2685 19.8889 12.3056 19.6667 12.3611L19.1111 12.1667C19.0185 12.2593 18.9215 12.3289 18.82 12.3756C18.7185 12.4222 18.6118 12.4637 18.5 12.5L18.3889 13.1111C18.3889 13.1482 18.2963 13.2222 18.1111 13.3333H17.4444ZM17.7778 11.3889C18 11.3889 18.1944 11.3056 18.3611 11.1389C18.5278 10.9722 18.6111 10.7778 18.6111 10.5556C18.6111 10.3333 18.5278 10.1389 18.3611 9.97223C18.1944 9.80556 18 9.72223 17.7778 9.72223C17.5555 9.72223 17.3611 9.80556 17.1944 9.97223C17.0278 10.1389 16.9444 10.3333 16.9444 10.5556C16.9444 10.7778 17.0278 10.9722 17.1944 11.1389C17.3611 11.3056 17.5555 11.3889 17.7778 11.3889ZM8.88888 11.1111C7.66666 11.1111 6.62037 10.6759 5.75 9.80556C4.87963 8.93519 4.44444 7.88889 4.44444 6.66667H4.16667C4 6.66667 3.86592 6.61556 3.76444 6.51334C3.66296 6.41112 3.61185 6.27704 3.61111 6.11112C3.61111 5.94445 3.66222 5.81001 3.76444 5.70778C3.86667 5.60556 4.00074 5.55482 4.16667 5.55556H4.44444C4.44444 4.72223 4.64815 3.97223 5.05555 3.30556C5.46296 2.6389 6 2.11112 6.66666 1.72223V2.77779C6.66666 2.94445 6.71777 3.0789 6.82 3.18112C6.92222 3.28334 7.05629 3.33408 7.22222 3.33334C7.38889 3.33334 7.52333 3.28223 7.62555 3.18001C7.72777 3.07779 7.77851 2.94371 7.77777 2.77779V1.27779C7.94444 1.22223 8.12037 1.18038 8.30555 1.15223C8.49074 1.12408 8.68518 1.11038 8.88888 1.11112C9.09259 1.11112 9.28703 1.12519 9.47222 1.15334C9.6574 1.18149 9.83333 1.22297 10 1.27779V2.77779C10 2.94445 10.0511 3.0789 10.1533 3.18112C10.2556 3.28334 10.3896 3.33408 10.5556 3.33334C10.7222 3.33334 10.8567 3.28223 10.9589 3.18001C11.0611 3.07779 11.1118 2.94371 11.1111 2.77779V1.72223C11.7778 2.11112 12.3148 2.6389 12.7222 3.30556C13.1296 3.97223 13.3333 4.72223 13.3333 5.55556H13.6111C13.7778 5.55556 13.9122 5.60667 14.0144 5.7089C14.1167 5.81112 14.1674 5.94519 14.1667 6.11112C14.1667 6.27778 14.1155 6.41223 14.0133 6.51445C13.9111 6.61667 13.777 6.66741 13.6111 6.66667H13.3333C13.3333 7.88889 12.8981 8.93519 12.0278 9.80556C11.1574 10.6759 10.1111 11.1111 8.88888 11.1111ZM8.88888 8.88889C9.5 8.88889 10.0233 8.67112 10.4589 8.23556C10.8944 7.80001 11.1118 7.27704 11.1111 6.66667H6.66666C6.66666 7.27778 6.88444 7.80112 7.32 8.23667C7.75555 8.67223 8.27851 8.88964 8.88888 8.88889ZM0 20V16.8889C0 16.2778 0.157407 15.7037 0.472222 15.1667C0.787037 14.6296 1.22222 14.2222 1.77778 13.9444C2.72222 13.463 3.78704 13.0556 4.97222 12.7222C6.1574 12.3889 7.46296 12.2222 8.88888 12.2222C10.3148 12.2222 11.6204 12.3889 12.8055 12.7222C13.9907 13.0556 15.0555 13.463 16 13.9444C16.5555 14.2222 16.9907 14.6296 17.3055 15.1667C17.6204 15.7037 17.7778 16.2778 17.7778 16.8889V20H0Z" fill="#4E1D9A" />
                            </svg>
                            <span className="px-">Engineer</span>
                        </a>
                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider border rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M13.3333 10.1969L14.9021 13.3333H11.7646L12.4271 12.0104L13.3333 10.1969ZM20 1.66667V18.3333C20 18.7754 19.8244 19.1993 19.5118 19.5118C19.1993 19.8244 18.7754 20 18.3333 20H1.66667C1.22464 20 0.800716 19.8244 0.488155 19.5118C0.175595 19.1993 0 18.7754 0 18.3333V1.66667C0 1.22464 0.175595 0.800716 0.488155 0.488155C0.800716 0.175595 1.22464 0 1.66667 0H18.3333C18.7754 0 19.1993 0.175595 19.5118 0.488155C19.8244 0.800716 20 1.22464 20 1.66667ZM18.2458 16.2937L14.0792 7.96042C14.0101 7.82174 13.9036 7.70509 13.7719 7.62354C13.6401 7.542 13.4883 7.4988 13.3333 7.4988C13.1784 7.4988 13.0265 7.542 12.8948 7.62354C12.763 7.70509 12.6566 7.82174 12.5875 7.96042L11.2146 10.7083C10.3314 10.5354 9.49392 10.1806 8.75521 9.66667C9.9066 8.36315 10.619 6.73062 10.7917 5H12.5C12.721 5 12.933 4.9122 13.0893 4.75592C13.2455 4.59964 13.3333 4.38768 13.3333 4.16667C13.3333 3.94565 13.2455 3.73369 13.0893 3.57741C12.933 3.42113 12.721 3.33333 12.5 3.33333H8.33333V2.5C8.33333 2.27899 8.24554 2.06702 8.08926 1.91074C7.93297 1.75446 7.72101 1.66667 7.5 1.66667C7.27899 1.66667 7.06702 1.75446 6.91074 1.91074C6.75446 2.06702 6.66667 2.27899 6.66667 2.5V3.33333H2.5C2.27899 3.33333 2.06702 3.42113 1.91074 3.57741C1.75446 3.73369 1.66667 3.94565 1.66667 4.16667C1.66667 4.38768 1.75446 4.59964 1.91074 4.75592C2.06702 4.9122 2.27899 5 2.5 5H9.1125C8.94718 6.31487 8.39211 7.55016 7.51875 8.54688C7.14875 8.11495 6.83384 7.63873 6.58125 7.12917C6.4789 6.93831 6.30627 6.7948 6.09994 6.72903C5.8936 6.66325 5.66976 6.68039 5.47584 6.77681C5.28192 6.87323 5.13316 7.04135 5.06106 7.24556C4.98896 7.44978 4.99919 7.67403 5.08958 7.87083C5.40853 8.51399 5.80753 9.11424 6.27708 9.65729C5.16715 10.4247 3.8494 10.835 2.5 10.8333C2.27899 10.8333 2.06702 10.9211 1.91074 11.0774C1.75446 11.2337 1.66667 11.4457 1.66667 11.6667C1.66667 11.8877 1.75446 12.0996 1.91074 12.2559C2.06702 12.4122 2.27899 12.5 2.5 12.5C4.3091 12.5019 6.06914 11.9118 7.51146 10.8198C8.38418 11.4869 9.3826 11.9708 10.4469 12.2427L8.42083 16.2937C8.32193 16.4916 8.30566 16.7206 8.37559 16.9304C8.44553 17.1402 8.59594 17.3136 8.79375 17.4125C8.99156 17.5114 9.22055 17.5277 9.43036 17.4577C9.64016 17.3878 9.8136 17.2374 9.9125 17.0396L10.9312 15H15.7354L16.7542 17.0396C16.8031 17.1375 16.8709 17.2249 16.9536 17.2966C17.0364 17.3684 17.1324 17.4231 17.2363 17.4577C17.3402 17.4924 17.4499 17.5062 17.5591 17.4984C17.6683 17.4907 17.775 17.4615 17.8729 17.4125C17.9709 17.3635 18.0582 17.2957 18.1299 17.213C18.2017 17.1303 18.2564 17.0342 18.2911 16.9304C18.3257 16.8265 18.3395 16.7168 18.3318 16.6076C18.324 16.4983 18.2948 16.3917 18.2458 16.2937Z" fill="#4E1D9A" />
                            </svg>
                            <span className="px-2">Translation</span>
                        </a>
                        <a className="sm:px-6 py-3 w-1/2 sm:w-auto justify-center sm:justify-start title-font font-medium inline-flex items-center leading-none border-gray-200 hover:text-gray-900 tracking-wider border rounded">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                <path d="M1.51744 14.9482V18.4826H5.05184L15.476 8.04901L11.9416 4.51461L1.51744 14.9482ZM20 15.9943L15.9943 20L11.0933 15.099L12.7615 13.4307L13.7041 14.3732L16.032 12.0358L17.3704 13.3742L15.9943 14.7125L16.9934 15.655L18.3318 14.3355L20 15.9943ZM4.91989 8.89727L0 4.00565L4.00565 0L5.66447 1.66824L3.33647 4.00565L4.34496 5.00471L6.66352 2.66729L8.00188 4.00565L6.66352 5.33459L7.60603 6.2771L4.91989 8.89727ZM18.2092 5.28746C18.5768 4.91989 18.5768 4.34496 18.2092 3.95853L16.0038 1.79076C15.655 1.42319 15.0424 1.42319 14.6748 1.79076L12.9406 3.51555L16.475 7.04995L18.2092 5.28746Z" fill="#4E1D9A" />
                            </svg>
                            <span className="px-2">Graphic Design</span>
                        </a>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Internships