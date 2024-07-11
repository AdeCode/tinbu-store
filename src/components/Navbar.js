import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


function Navbar() {
    return (
        <div className='flex flex-col'>
            <div className='bg-brand-brown flex justify-between py-[10px] px-[112px]'>
                <div className='font-medium text-xs text-white flex gap-1'>
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.926694 1.20016L1.28372 0.843142C2.06477 0.0620932 3.33109 0.062092 4.11214 0.84314L4.7314 1.46239C5.36803 2.09902 5.5008 3.08256 5.05576 3.86521L5.01917 3.92957C4.66262 4.5566 4.66431 5.33252 5.08721 5.91686C5.2979 6.20798 5.53592 6.50956 5.76206 6.7357C5.9882 6.96184 6.28977 7.19986 6.5809 7.41055C7.16524 7.83344 7.94116 7.83514 8.56819 7.47859L8.63255 7.442C9.4152 6.99696 10.3987 7.12973 11.0354 7.76636L11.6546 8.38561C12.4357 9.16666 12.4357 10.433 11.6546 11.214L11.2976 11.5711C10.9225 11.9461 10.4116 12.1551 9.89582 12.0311C8.79364 11.7663 6.6697 10.9432 4.11214 8.38561C1.55459 5.82806 0.731501 3.70412 0.466611 2.60193C0.342661 2.08619 0.551622 1.57524 0.926694 1.20016Z" fill="white" />
                    </svg>
                    +1 2345 56768
                </div>
                <div className='flex gap-2'>
                    <h3 className='font-medium text-xs text-white opacity-70'>
                        Get 50% Off on Selected Items
                    </h3>
                    <div className="border-l opacity-70 border-gray-300 h-4"></div>
                    <h3 className='font-medium text-xs text-brand-orange'>
                        Shop Now
                    </h3>
                </div>
                <div className='flex gap-8'>
                    <div className='flex items-center gap-[5px]'>
                        <h3 className='font-medium text-xs text-white'>EN</h3>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.876445 1.81879L6.0862 6.72209C6.5996 7.20529 7.40044 7.20529 7.91384 6.72209L13.1236 1.81879C13.3917 1.56645 13.4045 1.14453 13.1522 0.876416C12.8998 0.6083 12.4779 0.595515 12.2098 0.847859L7.00002 5.75116L1.79027 0.847858C1.52215 0.595514 1.10023 0.608299 0.847889 0.876415C0.595545 1.14453 0.60833 1.56645 0.876445 1.81879Z" fill="white" />
                        </svg>
                    </div>
                    <div className='flex items-center gap-[5px]'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.208333" y="3.06666" width="19.5833" height="13.869" rx="1.45833" fill="white" stroke="#F5F5F5" stroke-width="0.416667" />
                            <mask id="mask0_6_1400" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="0" y="2" width="20" height="16">
                                <rect x="0.208333" y="3.06666" width="19.5833" height="13.869" rx="1.45833" fill="white" stroke="white" stroke-width="0.416667" />
                            </mask>
                            <g mask="url(#mask0_6_1400)">
                                <rect x="13.3334" y="2.85832" width="6.66667" height="14.2857" fill="#189B62" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 17.144H6.66667V2.85832H0V17.144Z" fill="#189B62" />
                            </g>
                        </svg>

                        <h3 className='font-medium text-xs text-white opacity-70'>Nigeria</h3>
                        <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.876384 1.81879L6.08614 6.72209C6.59954 7.20529 7.40038 7.20529 7.91378 6.72209L13.1235 1.81879C13.3917 1.56645 13.4044 1.14453 13.1521 0.876416C12.8998 0.6083 12.4778 0.595515 12.2097 0.847859L6.99996 5.75116L1.7902 0.847858C1.52209 0.595514 1.10017 0.608299 0.847828 0.876415C0.595484 1.14453 0.608269 1.56645 0.876384 1.81879Z" fill="white" />
                        </svg>

                    </div>
                </div>
            </div>
            <div className='flex bg-white justify-between items-center lg:px-[100px] lg:py-5'>
                <div className='flex gap-10 items-center'>
                    <div className='h-8'>
                        <Image
                            src="/assets/images/Quig-Logo.png"
                            width="94"
                            height="32"
                            alt="Quiq logo"
                        />
                    </div>
                    <div className='flex justify-between items-center'>
                        <ul className='flex lg:h-full justify-between items-center text-primaryText font-medium lg:text-lg lg:gap-9 mr-4'>
                            <li className='h-full'>
                                <Link className='h-full flex items-center' href='/products'>Men</Link>
                            </li>
                            <li className='h-full'>
                                <Link className='h-full flex items-center' href='/products'>Women</Link>
                            </li>
                            <li className='text-darkBlue h-full'>
                                <Link className='h-full flex items-center' href='/products'>Kids</Link>
                            </li>
                            <li className='text-darkBlue h-full'>
                                <Link className='h-full flex items-center' href='/products'>On Sale</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='flex items-center'>
                    <form className='mr-8'>
                        <div className='bg-gray border border-[#D0D5DD] h-9 py-[14px] px-5 lg:min-w-[400px] rounded-[10px] flex items-center'>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16666 1.66666C5.02452 1.66666 1.66666 5.02453 1.66666 9.16666C1.66666 13.3088 5.02452 16.6667 9.16666 16.6667C10.9375 16.6667 12.565 16.0529 13.8481 15.0266L16.9107 18.0893C17.2362 18.4147 17.7638 18.4147 18.0892 18.0893C18.4147 17.7638 18.4147 17.2362 18.0892 16.9107L15.0266 13.8481C16.0529 12.565 16.6667 10.9375 16.6667 9.16666C16.6667 5.02453 13.3088 1.66666 9.16666 1.66666ZM3.33332 9.16666C3.33332 5.945 5.945 3.33333 9.16666 3.33333C12.3883 3.33333 15 5.945 15 9.16666C15 12.3883 12.3883 15 9.16666 15C5.945 15 3.33332 12.3883 3.33332 9.16666Z" fill="#667185" />
                            </svg>
                            <input type='text' placeholder='Search here...' className='w-full bg-gray pl-5 border-none focus:border-none focus:outline-none text-[#7C8087]' />
                        </div>
                    </form>
                    <div className='flex justify-between items-center'>
                        <ul className='flex lg:h-full justify-between items-center text-primaryText font-medium lg:text-lg lg:gap-9 mr-4'>
                            <li className='h-full'>
                                <Link className='h-full flex flex-col gap-3' href='/'>
                                    <div className='flex justify-center'>
                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 0.666664C4.69879 0.666664 2.83331 2.53214 2.83331 4.83333C2.83331 7.13452 4.69879 9 6.99998 9C9.30117 9 11.1666 7.13452 11.1666 4.83333C11.1666 2.53214 9.30117 0.666664 6.99998 0.666664ZM4.49998 4.83333C4.49998 3.45262 5.61927 2.33333 6.99998 2.33333C8.38069 2.33333 9.49998 3.45262 9.49998 4.83333C9.49998 6.21404 8.38069 7.33333 6.99998 7.33333C5.61927 7.33333 4.49998 6.21404 4.49998 4.83333Z" fill="#101928" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 18.1667C5.71623 18.1667 3.85816 17.8752 2.46284 17.2645C1.77784 16.9647 1.08119 16.5356 0.676441 15.9145C0.463577 15.5879 0.329007 15.2031 0.333418 14.7735C0.337789 14.3479 0.477846 13.9401 0.713242 13.5607C1.85441 11.7213 4.18897 9.83333 6.99998 9.83333C9.81098 9.83333 12.1455 11.7213 13.2867 13.5607C13.5221 13.9401 13.6622 14.3479 13.6665 14.7735C13.671 15.2031 13.5364 15.5879 13.3235 15.9145C12.9188 16.5356 12.2221 16.9647 11.5371 17.2645C10.1418 17.8752 8.28373 18.1667 6.99998 18.1667ZM2.12947 14.4393C2.01974 14.6162 2.00062 14.7298 2 14.7906C1.99941 14.8475 2.01403 14.9144 2.07278 15.0046C2.21126 15.2171 2.54754 15.4822 3.13108 15.7376C4.27285 16.2374 5.89434 16.5 6.99998 16.5C8.10561 16.5 9.72711 16.2374 10.8689 15.7376C11.4524 15.4822 11.7887 15.2171 11.9272 15.0046C11.9859 14.9144 12.0005 14.8475 12 14.7906C11.9993 14.7298 11.9802 14.6162 11.8705 14.4393C10.9354 12.9321 9.07026 11.5 6.99998 11.5C4.9297 11.5 3.0646 12.9321 2.12947 14.4393Z" fill="#101928" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <h3 className=''>Profile</h3>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.34551 2.2735L6.85771 8.40262C7.49946 9.00662 8.50051 9.00662 9.14226 8.40262L15.6545 2.2735C15.9896 1.95807 16.0056 1.43067 15.6901 1.09553C15.3747 0.760383 14.8473 0.744402 14.5122 1.05983L7.99998 7.18896L1.48779 1.05983C1.15264 0.744401 0.625245 0.760382 0.309816 1.09553C-0.00561505 1.43067 0.0103669 1.95807 0.34551 2.2735Z" fill="#F56630" />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                            <li className='h-full'>
                                <Link className='h-full flex flex-col gap-3' href='/'>
                                    <div className='flex justify-center'>
                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 0.666664C4.69879 0.666664 2.83331 2.53214 2.83331 4.83333C2.83331 7.13452 4.69879 9 6.99998 9C9.30117 9 11.1666 7.13452 11.1666 4.83333C11.1666 2.53214 9.30117 0.666664 6.99998 0.666664ZM4.49998 4.83333C4.49998 3.45262 5.61927 2.33333 6.99998 2.33333C8.38069 2.33333 9.49998 3.45262 9.49998 4.83333C9.49998 6.21404 8.38069 7.33333 6.99998 7.33333C5.61927 7.33333 4.49998 6.21404 4.49998 4.83333Z" fill="#101928" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 18.1667C5.71623 18.1667 3.85816 17.8752 2.46284 17.2645C1.77784 16.9647 1.08119 16.5356 0.676441 15.9145C0.463577 15.5879 0.329007 15.2031 0.333418 14.7735C0.337789 14.3479 0.477846 13.9401 0.713242 13.5607C1.85441 11.7213 4.18897 9.83333 6.99998 9.83333C9.81098 9.83333 12.1455 11.7213 13.2867 13.5607C13.5221 13.9401 13.6622 14.3479 13.6665 14.7735C13.671 15.2031 13.5364 15.5879 13.3235 15.9145C12.9188 16.5356 12.2221 16.9647 11.5371 17.2645C10.1418 17.8752 8.28373 18.1667 6.99998 18.1667ZM2.12947 14.4393C2.01974 14.6162 2.00062 14.7298 2 14.7906C1.99941 14.8475 2.01403 14.9144 2.07278 15.0046C2.21126 15.2171 2.54754 15.4822 3.13108 15.7376C4.27285 16.2374 5.89434 16.5 6.99998 16.5C8.10561 16.5 9.72711 16.2374 10.8689 15.7376C11.4524 15.4822 11.7887 15.2171 11.9272 15.0046C11.9859 14.9144 12.0005 14.8475 12 14.7906C11.9993 14.7298 11.9802 14.6162 11.8705 14.4393C10.9354 12.9321 9.07026 11.5 6.99998 11.5C4.9297 11.5 3.0646 12.9321 2.12947 14.4393Z" fill="#101928" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <h3 className=''>Help</h3>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.34551 2.2735L6.85771 8.40262C7.49946 9.00662 8.50051 9.00662 9.14226 8.40262L15.6545 2.2735C15.9896 1.95807 16.0056 1.43067 15.6901 1.09553C15.3747 0.760383 14.8473 0.744402 14.5122 1.05983L7.99998 7.18896L1.48779 1.05983C1.15264 0.744401 0.625245 0.760382 0.309816 1.09553C-0.00561505 1.43067 0.0103669 1.95807 0.34551 2.2735Z" fill="#F56630" />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                            <li className='h-full'>
                                <Link className='h-full flex flex-col gap-3' href='/'>
                                    <div className='flex justify-center'>
                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 0.666664C4.69879 0.666664 2.83331 2.53214 2.83331 4.83333C2.83331 7.13452 4.69879 9 6.99998 9C9.30117 9 11.1666 7.13452 11.1666 4.83333C11.1666 2.53214 9.30117 0.666664 6.99998 0.666664ZM4.49998 4.83333C4.49998 3.45262 5.61927 2.33333 6.99998 2.33333C8.38069 2.33333 9.49998 3.45262 9.49998 4.83333C9.49998 6.21404 8.38069 7.33333 6.99998 7.33333C5.61927 7.33333 4.49998 6.21404 4.49998 4.83333Z" fill="#101928" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 18.1667C5.71623 18.1667 3.85816 17.8752 2.46284 17.2645C1.77784 16.9647 1.08119 16.5356 0.676441 15.9145C0.463577 15.5879 0.329007 15.2031 0.333418 14.7735C0.337789 14.3479 0.477846 13.9401 0.713242 13.5607C1.85441 11.7213 4.18897 9.83333 6.99998 9.83333C9.81098 9.83333 12.1455 11.7213 13.2867 13.5607C13.5221 13.9401 13.6622 14.3479 13.6665 14.7735C13.671 15.2031 13.5364 15.5879 13.3235 15.9145C12.9188 16.5356 12.2221 16.9647 11.5371 17.2645C10.1418 17.8752 8.28373 18.1667 6.99998 18.1667ZM2.12947 14.4393C2.01974 14.6162 2.00062 14.7298 2 14.7906C1.99941 14.8475 2.01403 14.9144 2.07278 15.0046C2.21126 15.2171 2.54754 15.4822 3.13108 15.7376C4.27285 16.2374 5.89434 16.5 6.99998 16.5C8.10561 16.5 9.72711 16.2374 10.8689 15.7376C11.4524 15.4822 11.7887 15.2171 11.9272 15.0046C11.9859 14.9144 12.0005 14.8475 12 14.7906C11.9993 14.7298 11.9802 14.6162 11.8705 14.4393C10.9354 12.9321 9.07026 11.5 6.99998 11.5C4.9297 11.5 3.0646 12.9321 2.12947 14.4393Z" fill="#101928" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <h3 className=''>Cart</h3>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.34551 2.2735L6.85771 8.40262C7.49946 9.00662 8.50051 9.00662 9.14226 8.40262L15.6545 2.2735C15.9896 1.95807 16.0056 1.43067 15.6901 1.09553C15.3747 0.760383 14.8473 0.744402 14.5122 1.05983L7.99998 7.18896L1.48779 1.05983C1.15264 0.744401 0.625245 0.760382 0.309816 1.09553C-0.00561505 1.43067 0.0103669 1.95807 0.34551 2.2735Z" fill="#F56630" />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Navbar
