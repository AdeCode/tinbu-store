import React, {useContext} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { CartContext } from '@/contexts/cartContext'


function Navbar() {
    const router = useRouter()
    const { dispatch, state } = useContext(CartContext)

    return (
        <div className='flex flex-col'>
            <div className='bg-brand-brown hidden md:flex justify-between py-[10px] px-[112px]'>
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
            <div className='flex flex-col gap-4 lg:gap-0 lg:flex-row bg-white justify-between items-center lg:px-[100px] py-2 px-2 lg:py-5'>
                <div className='flex lg:gap-10 md:gap-24 gap-12  items-center'>
                    <div className='h-8'>
                        <Link href='/'>
                            <Image
                                src="/assets/images/Quig-Logo.png"
                                width="94"
                                height="32"
                                alt="Quiq logo"
                            />
                        </Link>
                    </div>
                    <div className='flex justify-between items-center'>
                        <ul className='flex lg:h-full justify-between items-center text-primaryText font-medium lg:text-lg text-xs lg:gap-9 gap-2'>
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
                        <ul className='flex lg:h-full justify-between items-center text-primaryText font-medium lg:text-lg text-xs lg:gap-9 gap-2 mr-4'>
                            <li className='h-full'>
                                <Link className='h-full flex flex-col lg:gap-3 gap-1' href='/'>
                                    <div className='flex justify-center'>
                                        <svg width="14" height="19" viewBox="0 0 14 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 0.666664C4.69879 0.666664 2.83331 2.53214 2.83331 4.83333C2.83331 7.13452 4.69879 9 6.99998 9C9.30117 9 11.1666 7.13452 11.1666 4.83333C11.1666 2.53214 9.30117 0.666664 6.99998 0.666664ZM4.49998 4.83333C4.49998 3.45262 5.61927 2.33333 6.99998 2.33333C8.38069 2.33333 9.49998 3.45262 9.49998 4.83333C9.49998 6.21404 8.38069 7.33333 6.99998 7.33333C5.61927 7.33333 4.49998 6.21404 4.49998 4.83333Z" fill="#101928" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.99998 18.1667C5.71623 18.1667 3.85816 17.8752 2.46284 17.2645C1.77784 16.9647 1.08119 16.5356 0.676441 15.9145C0.463577 15.5879 0.329007 15.2031 0.333418 14.7735C0.337789 14.3479 0.477846 13.9401 0.713242 13.5607C1.85441 11.7213 4.18897 9.83333 6.99998 9.83333C9.81098 9.83333 12.1455 11.7213 13.2867 13.5607C13.5221 13.9401 13.6622 14.3479 13.6665 14.7735C13.671 15.2031 13.5364 15.5879 13.3235 15.9145C12.9188 16.5356 12.2221 16.9647 11.5371 17.2645C10.1418 17.8752 8.28373 18.1667 6.99998 18.1667ZM2.12947 14.4393C2.01974 14.6162 2.00062 14.7298 2 14.7906C1.99941 14.8475 2.01403 14.9144 2.07278 15.0046C2.21126 15.2171 2.54754 15.4822 3.13108 15.7376C4.27285 16.2374 5.89434 16.5 6.99998 16.5C8.10561 16.5 9.72711 16.2374 10.8689 15.7376C11.4524 15.4822 11.7887 15.2171 11.9272 15.0046C11.9859 14.9144 12.0005 14.8475 12 14.7906C11.9993 14.7298 11.9802 14.6162 11.8705 14.4393C10.9354 12.9321 9.07026 11.5 6.99998 11.5C4.9297 11.5 3.0646 12.9321 2.12947 14.4393Z" fill="#101928" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center lg:gap-3 gap-1'>
                                        <h3 className=''>Profile</h3>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.34551 2.2735L6.85771 8.40262C7.49946 9.00662 8.50051 9.00662 9.14226 8.40262L15.6545 2.2735C15.9896 1.95807 16.0056 1.43067 15.6901 1.09553C15.3747 0.760383 14.8473 0.744402 14.5122 1.05983L7.99998 7.18896L1.48779 1.05983C1.15264 0.744401 0.625245 0.760382 0.309816 1.09553C-0.00561505 1.43067 0.0103669 1.95807 0.34551 2.2735Z" fill="#F56630" />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                            <li className='h-full'>
                                <Link className='h-full flex flex-col lg:gap-3 gap-1' href='/'>
                                    <div className='flex justify-center'>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7.57502 7.5C7.77094 6.94305 8.15765 6.47342 8.66665 6.17428C9.17565 5.87513 9.7741 5.76578 10.356 5.86559C10.9379 5.9654 11.4657 6.26793 11.8459 6.7196C12.2261 7.17127 12.4342 7.74293 12.4334 8.33333C12.4334 10 9.93335 10.8333 9.93335 10.8333M10 14.1667H10.0084M18.3334 10C18.3334 14.6024 14.6024 18.3333 10 18.3333C5.39765 18.3333 1.66669 14.6024 1.66669 10C1.66669 5.39762 5.39765 1.66666 10 1.66666C14.6024 1.66666 18.3334 5.39762 18.3334 10Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </div>
                                    <div className='flex items-center lg:gap-3 gap-1'>
                                        <h3 className=''>Help</h3>
                                        <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.34551 2.2735L6.85771 8.40262C7.49946 9.00662 8.50051 9.00662 9.14226 8.40262L15.6545 2.2735C15.9896 1.95807 16.0056 1.43067 15.6901 1.09553C15.3747 0.760383 14.8473 0.744402 14.5122 1.05983L7.99998 7.18896L1.48779 1.05983C1.15264 0.744401 0.625245 0.760382 0.309816 1.09553C-0.00561505 1.43067 0.0103669 1.95807 0.34551 2.2735Z" fill="#F56630" />
                                        </svg>
                                    </div>
                                </Link>
                            </li>
                            <li className='h-full relative'>
                                {
                                    state.items.length > 0 ?
                                    <span className='flex items-center justify-center text-xs w-[20px] h-[20px] rounded-[50%] absolute bg-[#F56630] text-white right-3 top-[-10px]'>
                                        {state.items.length}
                                    </span>
                                    :
                                    null
                                }
                                <Link className='h-full flex flex-col lg:gap-3 gap-1' href='/cart'>
                                    <div className='flex justify-center'>
                                        <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.08333 0.833336C0.623096 0.833336 0.25 1.20643 0.25 1.66667C0.25 2.12691 0.623096 2.5 1.08333 2.5C1.69035 2.5 2.22066 2.94107 2.32984 3.56167L2.90141 6.81058L2.90192 6.81345L3.26813 8.86007C3.49716 10.1401 3.68006 11.1623 3.9113 11.9743C4.14977 12.8117 4.45884 13.5007 4.98376 14.083C5.3443 14.483 5.76614 14.8254 6.23364 15.0986C6.91088 15.4944 7.65747 15.6686 8.54511 15.7521C9.40987 15.8334 10.4817 15.8333 11.8319 15.8333H12.2424C12.8429 15.8333 13.338 15.8334 13.7459 15.8037C14.1708 15.7728 14.5575 15.7069 14.9327 15.5469C15.4799 15.3136 15.9591 14.9469 16.3221 14.479C16.5727 14.1559 16.7291 13.7998 16.8574 13.4019C16.9798 13.0222 17.0915 12.5542 17.2256 11.9918L17.2425 11.9209C17.4465 11.0662 17.6131 10.3679 17.6937 9.79772C17.7767 9.211 17.7858 8.65917 17.5969 8.12726C17.3313 7.37951 16.8086 6.74999 16.1246 6.33988C15.6428 6.05098 15.098 5.93794 14.4935 5.885C13.9033 5.83332 13.1638 5.83332 12.2512 5.83334H4.42175L3.9713 3.2729C3.72412 1.86787 2.51195 0.833336 1.08333 0.833336ZM12.2122 7.5C13.173 7.5 13.8393 7.50075 14.3481 7.54531C14.851 7.58936 15.1024 7.67027 15.2676 7.7693C15.628 7.9854 15.8934 8.31077 16.0264 8.68509C16.0843 8.84828 16.1108 9.08839 16.0435 9.56425C15.9751 10.0477 15.8276 10.6697 15.6118 11.5743C15.4684 12.1752 15.3713 12.5798 15.2711 12.8905C15.1746 13.1898 15.0921 13.3454 15.0052 13.4574C14.8193 13.6971 14.57 13.8897 14.2791 14.0137C14.139 14.0734 13.955 14.1174 13.6249 14.1414C13.2847 14.1662 12.8504 14.1667 12.2122 14.1667H11.874C10.4724 14.1667 9.47878 14.1658 8.70108 14.0927C7.93732 14.0209 7.45978 13.8847 7.0746 13.6596C6.75362 13.472 6.46605 13.2382 6.22168 12.9671C5.93152 12.6452 5.71522 12.2236 5.51424 11.5179C5.30866 10.7959 5.13956 9.85651 4.90092 8.52282L4.7179 7.5H12.2122Z" fill="#101928" />
                                            <path d="M7.75 17.2917C7.75 17.867 7.28363 18.3333 6.70833 18.3333C6.13304 18.3333 5.66667 17.867 5.66667 17.2917C5.66667 16.7164 6.13304 16.25 6.70833 16.25C7.28363 16.25 7.75 16.7164 7.75 17.2917Z" fill="#101928" />
                                            <path d="M14.2083 18.3333C14.7836 18.3333 15.25 17.867 15.25 17.2917C15.25 16.7164 14.7836 16.25 14.2083 16.25C13.633 16.25 13.1667 16.7164 13.1667 17.2917C13.1667 17.867 13.633 18.3333 14.2083 18.3333Z" fill="#101928" />
                                        </svg>

                                    </div>
                                    <div className='flex items-center lg:gap-3 gap-1'>
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
