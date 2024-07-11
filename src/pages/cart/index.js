import CartCard from '@/components/CartCard'
import { useRouter } from 'next/router'
import React from 'react'

function Index() {
    const router = useRouter()
    return (
        <div className='lg:px-[100px] flex justify-between lg:py-[72px]'>
            <div className='p-8 flex flex-col lg:w-[760px] lg:h-[558px] rounded-[10px] border gap-6 border-[#d4d5d8]'>
                <div className='flex gap-4'>
                    <h2 className='font-semibold text-2xl'>Cart</h2>
                    <p className='w-9 h-9 bg-[#F56630] rounded-[30px] font-semibold text-lg text-white text-center'>3</p>
                </div>
                <CartCard />
                <CartCard />
                <CartCard />
            </div>
            <div className='border border-[#d4d5d8] rounded-[10px] p-8 lg:w-[424px] lg:h-[258px]'>
                <h3 className='font-semibold text-[#101928] text-base pb-7 border-b border-[#d4d5d8]'>Cart Summary</h3>
                <div className='flex justify-between mb-7 pt-6'>
                    <h4 className='font-medium text-sm text-[#475367]'>Sub Total</h4>
                    <span className='font-semibold text-base text-[#1D2739]'>₦ 99,000</span>
                </div>
                <button 
                    onClick={()=>router.push('/checkout')}
                    className="bg-[#F56630] text-white flex rounded-[30px] h-[55px] w-full items-center 
                            justify-center text-base font-semibold">Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Index