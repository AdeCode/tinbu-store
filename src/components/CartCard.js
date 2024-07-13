import Image from 'next/image'
import React from 'react'

function CartCard() {
  return (
    <div className='flex justify-between'>
        <div className='flex lg:gap-5 gap-2'>
            <Image
                src="/assets/products/nike-blazer.png"
                width='120'
                height='120'
                alt='nike'
                // className='mb-6'
            />
            <div className='flex flex-col'>
                <h3 className='lg:font-semibold font-medium lg:text-xl text-base text-[#101928] mb-1'>Nike Blazer Low ‘77 Vintage X 1</h3>
                <p className='font-normal lg:text-sm text-xs text-[#475367] mb-1'>Color : Black</p>
                <p className='font-normal lg:text-sm text-xs text-[#475367] mb-1'>Size: 41</p>
            </div>
        </div>
        <h3 className='font-semibold lg:text-xl text-base text-[#101928]'>₦30,000</h3>
    </div>
  )
}

export default CartCard