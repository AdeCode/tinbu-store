import CartCard from '@/components/CartCard'
import React from 'react'

function Index() {
    return (
        <div className='lg:px-[100px] flex justify-between lg:py-[72px]'>
            <div className=''>
                <div className='p-8 mb-7 flex flex-col lg:w-[760px] lg:h-[556px] rounded-[10px] border gap-6 border-[#d4d5d8]'>
                    <div className='flex gap-4'>
                        <h2 className='font-semibold text-2xl'>Order Summary</h2>
                    </div>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                </div>
                <div className='p-8 bg-white flex flex-col lg:w-[760px] lg:h-[504px] rounded-[10px] border gap-6 border-[#d4d5d8]'>
                    <h3 className='font-semibold text-2xl text-[#101928]'>Delivery Information</h3>
                    <div className=''>
                        <div className='flex justify-between mb-5'>
                            <div className='flex flex-col'>
                                <h4 className='font-medium text-sm text-[#344054] mb-1'>First Name</h4>
                                <input type='text' placeholder='First Name' className='w-full lg:w-[338px] text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='font-medium text-sm text-[#344054] mb-1'>Last Name</h4>
                                <input type='text' placeholder='Last Name' className='w-full lg:w-[338px] text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex flex-col mb-5'>
                            <h4 className='font-medium text-sm text-[#344054] mb-1'>First Name</h4>
                            <input type='text' placeholder='First Name' className='w-full text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                        </div>
                        <div className='flex justify-between mb-5'>
                            <div className='flex flex-col'>
                                <h4 className='font-medium text-sm text-[#344054] mb-1'>City/Town</h4>
                                <input type='text' placeholder="City/Town" className='w-full lg:w-[338px] text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='font-medium text-sm text-[#344054] mb-1'>Zip Code</h4>
                                <input type='text' placeholder='Zip Code' className='w-full lg:w-[338px] text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col'>
                                <h4 className='font-medium text-sm text-[#344054] mb-1'>Mobile Number</h4>
                                <input type='text' placeholder="08077882992" className='w-full lg:w-[338px] text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                            </div>
                            <div className='flex flex-col'>
                                <h4 className='font-medium text-sm text-[#344054] mb-1'>Email address</h4>
                                <input type='email' placeholder='user@example.com' className='w-full lg:w-[242px] text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='border border-[#d4d5d8] rounded-[10px] p-8 lg:w-[424px]'>
                <h3 className='font-semibold text-[#101928] text-2xl pb-7'>Payment Information</h3>
                <div className='pb-6 border-b border-[#d4d5d8]'>
                    <h4 className='font-semibold text-base text-[#101928] mb-3'>Apply Discount</h4>
                    <div className='flex gap-4'>
                        <input type='text' placeholder='Enter Coupon Code' className='w-full lg:w-[338px] text-sm h-[56px] p-4 bg-white rounded-[30px] text-[#98A2B3] border border-[#D0D5DD]' />
                        <button className="bg-[#F56630] text-white flex rounded-[30px] h-[55px] w-[102px] items-center 
                            justify-center text-base font-semibold">Apply
                        </button>
                    </div>
                </div>
                <div className='pb-6 border-b border-[#d4d5d8]'>
                    <h4 className='font-semibold text-base text-[#101928] mb-3'>Pay With</h4>
                    <div className='flex gap-4'>
                        <input type='radio' className='w-full lg:w-[338px] text-sm h-[56px] p-4 bg-white rounded-[30px] text-[#98A2B3] border border-[#D0D5DD]'/>
                        Debit or Credit Card
                        <button className="bg-[#F56630] text-white flex rounded-[30px] h-[55px] w-[102px] items-center 
                            justify-center text-base font-semibold">Apply
                        </button>
                    </div>
                </div>
                <div className='flex justify-between mb-7 pt-6'>
                    <h4 className='font-medium text-sm text-[#475367]'>Sub Total</h4>
                    <span className='font-semibold text-base text-[#1D2739]'>₦ 99,000</span>
                </div>
                <button className="bg-[#F56630] text-white flex rounded-[30px] h-[55px] w-full items-center 
                            justify-center text-base font-semibold">Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Index