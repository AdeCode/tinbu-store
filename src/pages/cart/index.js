import CartCard from '@/components/CartCard'
import { CartContext } from '@/contexts/cartContext'
import { useRouter } from 'next/router'
import React, {useContext} from 'react'

function Index() {
    const router = useRouter()
    const { dispatch, state } = useContext(CartContext)

    console.log('state from cart', state)

    const handleAddItem = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: {
            name:product.name,
            price:product.current_price[0].NGN[0],
            image:`https://api.timbu.cloud/images/${product.photos[0].url}`
        } })
    }

    const handleDeleteItem = (productId) => {
        console.log('deleting item')
        dispatch({ type: 'DELETE_ITEM', payload: {id:productId} })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    return (
        <div className='lg:px-[100px] px-3 flex flex-col lg:flex-row justify-between py-4 lg:my-0 lg:py-[72px] gap-4'>
            <div className='lg:p-8 p-3 flex flex-col lg:w-[760px] lg:h-[558px] rounded-[10px] border gap-6 border-[#d4d5d8]'>
                <div className='flex lg:gap-4 gap-2'>
                    <h2 className='font-semibold text-2xl'>Cart</h2>
                    <p className='w-9 h-9 bg-[#F56630] rounded-[30px] font-semibold text-lg text-white text-center flex items-center justify-center'>
                        {state.items.length}
                    </p>
                </div>
                {
                    state.items.map((item,index)=>(
                        <CartCard 
                            handleDeleteItem={handleDeleteItem}
                            key={index}
                            id={item.id}
                        />
                    ))
                }
                {/* <CartCard 
                    handleDeleteItem={handleDeleteItem}
                />
                <CartCard 
                    handleDeleteItem={handleDeleteItem}
                />
                <CartCard 
                    handleDeleteItem={handleDeleteItem}
                /> */}
            </div>
            <div className='border border-[#d4d5d8] rounded-[10px] lg:p-8 p-3 lg:w-[424px] lg:h-[258px]'>
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