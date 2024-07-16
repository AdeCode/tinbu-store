import PopularCard from '@/components/PopularCard'
import { GET_PRODUCTS } from '@/utils/endpoints'
import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import CardLoader from '@/components/skeleton-loader/CardLoader'
import ProductCard from '@/components/ProductCard'
import { CartContext } from '@/contexts/cartContext'
import { toast } from "react-toastify";


function Index() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)
    const { dispatch } = useContext(CartContext)

    // const {state} = useContext(CartContext)

    const handleAddItem = (product) => {
        dispatch({ type: 'ADD_ITEM', payload: {
            name:product.name,
            price:product.current_price[0].NGN[0],
            image:`https://api.timbu.cloud/images/${product.photos[0].url}`,
            id:product.id,
            quantity:1
        } })
        toast.success('Item added to cart', {
            theme: "colored",
          })
    }

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' })
    }

    const handleGetProducts = async() => {
        try{
            setLoading(true)
            const response = await axios.get(GET_PRODUCTS())
            setProducts(response.data.items)
            setLoading(false)
        }catch(err){
            console.log(err)
            setLoading(false)
        }
    }

    useEffect(()=>{
        handleGetProducts()
        // clearCart()
    },[])
    return (
        <div className='flex justify-center px-3 lg:px-[100px] pt-10 lg:mb-[91px]'>
            <div className='flex flex-col'>
                {/* <div className='flex flex-col lg:flex-row gap-5 mb-6'> */}
                <div className=''>
                    {
                        loading ? 
                        <div className='flex gap-8 justify-center'>
                            <CardLoader/>
                            <CardLoader/>
                            <CardLoader/>
                        </div>
                        :
                        <div className='grid lg:grid-cols-3 gap-5 mb-6'>
                            {
                                products.map((product,index) => (
                                    <ProductCard 
                                        name={product.name}
                                        img={product.photos[0].url}
                                        price={product.current_price[0].NGN[0]}
                                        key={index}
                                        productId={product.id}
                                        handleAddItem={()=>handleAddItem(product)}
                                    />
                                ))
                            }
                        </div>
                    }
                </div>
                {/* <div className='flex flex-col lg:flex-row gap-5 mb-6'>
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                </div>
                <div className='flex flex-col lg:flex-row gap-5 mb-6'>
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                </div>
                <div className='flex flex-col lg:flex-row gap-5 mb-6'>
                    <PopularCard />
                    <PopularCard />
                    <PopularCard />
                </div> */}
                <div className='bg-white flex justify-between pt-4 pb-2'>
                    <button className="bg-white text-[#344054] flex lg:w-[141px] rounded-lg h-[56px] items-center 
                            justify-center border border-[#D0D5DD] text-base font-semibold gap-2">
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.597409 9.14232C-0.00659087 8.50057 -0.00659083 7.49952 0.597409 6.85777L6.72654 0.345572C7.04197 0.0104276 7.56936 -0.00555392 7.90451 0.309876C8.23965 0.625307 8.25563 1.1527 7.9402 1.48785L1.81108 8.00004L7.9402 14.5122C8.25563 14.8474 8.23965 15.3748 7.9045 15.6902C7.56936 16.0056 7.04197 15.9897 6.72653 15.6545L0.597409 9.14232Z" fill="#344054" />
                        </svg>
                        Previous
                    </button>
                    <button className="bg-white text-[#344054] flex lg:w-[141px] rounded-lg h-[56px] items-center 
                            justify-center border border-[#D0D5DD] text-base font-semibold gap-2">
                        Next
                        <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.40255 9.14232C9.00655 8.50057 9.00655 7.49952 8.40255 6.85777L2.27342 0.345572C1.95799 0.0104276 1.4306 -0.00555392 1.09545 0.309876C0.760306 0.625307 0.744324 1.1527 1.05975 1.48785L7.18888 8.00004L1.05975 14.5122C0.744324 14.8474 0.760307 15.3748 1.09545 15.6902C1.4306 16.0056 1.95799 15.9897 2.27342 15.6545L8.40255 9.14232Z" fill="#344054" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Index