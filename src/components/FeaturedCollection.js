import Image from 'next/image'
import React from 'react'

function FeaturedCollection() {
    return (
        <section className='lg:mb-[91px] mb-5'>
            <div className='flex justify-between px-4'>
                <h2 className='text-brand-black font-semibold lg:text-[28px] text-xl lg:mb-[32px] mb-4'>Featured Collections</h2>
                <div className='flex gap-2'>
                    <h3 className='text-brand-orange text-sm font-semibold'>View all</h3>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.83333 1.33333C8.83333 0.873096 8.46024 0.5 8 0.5C7.53976 0.5 7.16667 0.873096 7.16667 1.33333V7.16667H1.33333C0.873096 7.16667 0.5 7.53976 0.5 8C0.5 8.46024 0.873096 8.83333 1.33333 8.83333H7.16667V14.6667C7.16667 15.1269 7.53976 15.5 8 15.5C8.46024 15.5 8.83333 15.1269 8.83333 14.6667V8.83333H14.6667C15.1269 8.83333 15.5 8.46024 15.5 8C15.5 7.53976 15.1269 7.16667 14.6667 7.16667H8.83333V1.33333Z" fill="#CC5528" />
                    </svg>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='lg:w-[596px] flex flex-col justify-between bg-bg-left bg-center bg-cover pt-10 lg:px-10 px-4 pb-20'>
                    <h3 className='bg-brand-orange lg:w-[205px] w-fit text-white text-sm font-semibold rounded-xl py-1 px-3'>
                        WORLD GIRLFRIEND’S DAY
                    </h3>
                    <div className=''>
                        <h2 className='lg:w-[442px] mb-1 font-semibold text-4xl text-white'>
                            Free Delivery on all dresses ordered until November 30
                        </h2>
                        <p className='font-normal text-sm opacity-80 text-white mb-6'>All the sleekest dress for you to twin with your girlfriends.</p>
                        <button className="bg-[#F56630] text-white flex w-[141px] rounded-lg h-[56px] items-center 
                            justify-center text-base font-semibold gap-2">Shop now
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.08315 11.3707C9.80795 10.6006 9.80795 9.39937 9.08315 8.62927L1.7282 0.814638C1.34969 0.412464 0.716812 0.393286 0.314638 0.771803C-0.0875353 1.15032 -0.106714 1.78319 0.271803 2.18537L7.62675 10L0.271803 17.8146C-0.106713 18.2168 -0.0875345 18.8497 0.314639 19.2282C0.716813 19.6067 1.34969 19.5875 1.7282 19.1854L9.08315 11.3707Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='flex flex-col w-[596px] gap-6'>
                    <div className='lg:flex w-full lg:w-[596px] hidden'>
                        <Image
                            src='/assets/products/adidas.png'
                            width="596"
                            height="373"
                            alt='adidas'
                            className='rounded-[10px]'
                        />
                    </div>
                    <div className='lg:flex w-full lg:w-[596px] hidden'>
                        <Image
                            src='/assets/products/hill.png'
                            width="596"
                            height="373"
                            alt='adidas'
                            className='rounded-[10px]'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturedCollection