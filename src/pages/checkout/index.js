import CartCard from '@/components/CartCard'
import { CartContext } from '@/contexts/cartContext'
import React, { useContext, useState } from 'react'
import { toast } from "react-toastify";

function Index() {
    const { dispatch, state } = useContext(CartContext)
    const [selectedPayment, setSelectedPayment] = useState('card')

    const handleChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    const handleDeleteItem = (productId) => {
        dispatch({ type: 'DELETE_ITEM', payload: { id: productId } })
        toast.success('Item removed from cart', {
            theme: "colored",
          })
    }

    const calculateTotal = () => {
        const totalAmount = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
        return totalAmount
    }

    return (
        <div className='lg:px-[100px] flex flex-col lg:flex-row justify-between lg:py-[72px]'>
            <div className=''>
                <div className='p-8 mb-7 overflow-y-scroll flex flex-col lg:w-[760px] lg:h-[556px] rounded-[10px] border gap-6 border-[#d4d5d8]'>
                    <div className='flex gap-4'>
                        <h2 className='font-semibold text-2xl'>Order Summary</h2>
                    </div>
                    {
                        state.items.map((item, index) => (
                            <CartCard
                                name={item.name}
                                image={item.image}
                                price={item.price}
                                quantity={item.quantity}
                                id={item.id}
                                key={index}
                                handleDeleteItem={handleDeleteItem}
                            />
                        ))
                    }
                    {/* <CartCard />
                    <CartCard />
                    <CartCard /> */}
                </div>
                <div className='lg:p-8 p-3 bg-white flex flex-col lg:w-[760px] lg:h-[504px] rounded-[10px] border gap-6 border-[#d4d5d8]'>
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
                            <h4 className='font-medium text-sm text-[#344054] mb-1'>Address</h4>
                            <input type='text' placeholder='Address' className='w-full text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
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
                <div className='pb-6 border-b border-[#d4d5d8] py-6'>
                    <h4 className='font-semibold text-base text-[#101928] mb-3'>Pay With</h4>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-3'>
                            <input type="radio" id="html" name="paymentType" value="card"
                                checked={selectedPayment === 'card'}
                                onChange={handleChange}
                            />
                            <label for="html">Debit or Credit Card</label>
                        </div>
                        <div className='flex gap-3'>
                            <input type="radio" id="html" name="paymentType"
                                value="delivery"
                                checked={selectedPayment === 'delivery'}
                                onChange={handleChange}
                            />
                            <label for="html" className='font-medium text-base text-[#101928]'>Pay on Delivery</label>
                        </div>
                    </div>
                </div>
                {
                    selectedPayment === 'card' ?
                        <div className='pb-6 border-b border-[#d4d5d8] py-6'>
                            <h4 className='font-semibold text-base text-[#101928] mb-3'>Enter Card Information</h4>
                            <div className='flex flex-col gap-4'>
                                <div className='flex flex-col'>
                                    <h4 className='font-medium text-sm text-[#344054] mb-1'>Cardholder Name</h4>
                                    <input type='text' placeholder='Full name' className='w-full text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className='font-medium text-sm text-[#344054] mb-1'>Card Number</h4>
                                    <input type='text' placeholder='**** **** **** ****' className='w-full text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                                </div>
                                <div className='flex justify-between'>
                                    <div className='w-[196px]'>
                                        <h4 className='font-medium text-sm text-[#344054] mb-1'>Expiry Date</h4>
                                        <input type='date' placeholder='MM/YYYY' className='w-full text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                                    </div>
                                    <div className='w-[148px]'>
                                        <h4 className='font-medium text-sm text-[#344054] mb-1'>CVV</h4>
                                        <input type='text' placeholder='***' className='w-full text-sm h-[56px] p-4 rounded-md text-[#98A2B3] border border-[#D0D5DD]' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        null
                }

                <div className='flex flex-col gap-4 mb-7 border-b border-[#d4d5d8] py-6'>
                    <div className='flex justify-between'>
                        <h4 className='font-normal text-sm text-[#475367]'>Sub Total</h4>
                        <span className='font-medium text-base text-[#475367]'>₦ {calculateTotal()}</span>
                    </div>
                    <div className='flex justify-between'>
                        <h4 className='font-normal text-sm text-[#475367]'>Tax (10%)</h4>
                        <span className='font-medium text-base text-[#475367]'>₦ {(calculateTotal() * 10) / 100}</span>
                    </div>
                    <div className='flex justify-between'>
                        <h4 className='font-normal text-sm text-[#475367]'>Shipping</h4>
                        <span className='font-medium text-base text-[#475367]'>₦ 0.00</span>
                    </div>
                </div>
                <div className='flex justify-between mb-7'>
                    <h4 className='font-normal text-sm text-[#475367]'>Total</h4>
                    <span className='font-semibold text-base text-[#1D2739]'>₦ {calculateTotal() + ((calculateTotal() * 10) / 100)}</span>
                </div>
                <button className="bg-[#F56630] text-white flex rounded-[30px] h-[55px] w-full items-center 
                            justify-center text-base font-semibold">Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default Index