import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
      <div className='flex flex-col pt-[64px] pb-8 px-[100px] bg-[#F9FAFB]'>
        <div className='flex justify-between lg:mb-24'>
          <div className='flex flex-col lg:w-[369px]'>
            <Image
              src='/assets/images/Quig-Logo.png'
              width="94"
              height="32"
              alt='logo'
              className='mb-8'
            />
            <h3 className='font-normal text-sm text-[#344054] mb-6'>Be the first to  receive all the recent updates, articles, and valuable materials.</h3>
            <div className='flex gap-2'>
              <input className='font-normal border border-[#D0D5DD] rounded-md text-sm text-[#98A2B3] h-[56px] lg:w-[238px] p-4' placeholder='Email address' type='text'/>
              <button className="bg-[#F56630] text-white flex lg:w-[123px] rounded-lg h-[55px] items-center 
                justify-center text-base font-semibold">
                  Subscribe
              </button>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-normal text-base text-[#98A2B3] lg:mb-6'>Company</h3>
            <div className='flex flex-col gap-4'>
              <Link className='font-medium text-base text-[#667185]' href='/'>About</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Blog</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Careers</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Community</Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-normal text-base text-[#98A2B3] lg:mb-6'>Quig Products</h3>
            <div className='flex flex-col gap-4'>
              <Link className='font-medium text-base text-[#667185]' href='/'>Men</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Women</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Kids</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>On Sale</Link>
            </div>
          </div>
          <div className='flex flex-col'>
            <h3 className='font-normal text-base text-[#98A2B3] lg:mb-6'>Useful Links</h3>
            <div className='flex flex-col gap-4'>
              <Link className='font-medium text-base text-[#667185]' href='/'>Contact Us</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Help Center</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Chat With Us</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Terms of Service</Link>
              <Link className='font-medium text-base text-[#667185]' href='/'>Privacy Policy</Link>
            </div>
          </div>
        </div>
        <div className='border-t border-[#E4E7EC] pt-8 flex items-center justify-between'>
          <div className='flex flex-col'>
            <h3 className='font-medium text-sm text-[#667185] mb-[10px]'>Payment Methods & Delivery Partners</h3>
            <Image
              src='/assets/images/payments.png'
              width="205"
              height="36"
              alt='payments'
            />
          </div>
          <h3 className='font-normal text-sm text-[#98A2B3]'>© 2024 Quig. All rights reserved.</h3>
        </div>
      </div>
  )
}

export default Footer