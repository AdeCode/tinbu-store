import { GET_PRODUCT } from '@/utils/endpoints'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import axios from 'axios'

function ProductDetails() {
    const router = useRouter()
    const productId = router.query.slug
    console.log(productId)
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(0)

    const handleIncrease = () => {
        setQuantity(quantity+1)
    }

    const handleDecrease = () => {
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    const handleGetProduct = async() => {
        try{
            const response = await axios.get(GET_PRODUCT(productId))
            // setProduct(response.data.items)
            console.log(response.data)
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        handleGetProduct()
    },[])

    return (
        <div className='lg:px-[100px] px-3 py-[91px] flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-[548px]'>
                <Image
                    src="/assets/products/sneaker.png"
                    width='548'
                    height='696'
                    alt='product'
                    className='mb-4 rounded-[10px]'
                />
                <div className='hidden lg:flex justify-between'>
                    <Image
                        src="/assets/products/sneaker.png"
                        width='122'
                        height='120'
                        alt='product details'
                        className='rounded-[10px]'
                    />
                    <Image
                        src="/assets/products/sneaker.png"
                        width='122'
                        height='120'
                        alt='product details'
                        className='rounded-[10px]'
                    />
                    <Image
                        src="/assets/products/sneaker.png"
                        width='122'
                        height='120'
                        alt='product details'
                        className='rounded-[10px]'
                    />
                    <Image
                        src="/assets/products/sneaker.png"
                        width='122'
                        height='120'
                        alt='product details'
                        className='rounded-[10px]'
                    />
                </div>
            </div>
            <div className='lg:w-[570px] flex flex-col'>
                <h2 className='font-semibold text-[32px] text-[#101928] mb-3'>Nike Blazer Low ‘77 Vintage</h2>
                <p className='font-normal text-sm text-[#667185] mb-3'>Praised by the streets for its classic simplicity and comfort, the Nike Blazer Low '77 Vintage returns with its low-profile style and heritage b-ball looks.</p>
                <div className='flex items-center gap-4 mb-6'>
                    <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.84595 2.30078C7.37767 1.4554 8.62232 1.4554 9.15404 2.30078L10.44 4.34528C10.627 4.64272 10.9242 4.85617 11.2682 4.94014L13.6326 5.51731C14.6102 5.75596 14.9948 6.92613 14.3458 7.68726L12.7762 9.52799C12.5478 9.79579 12.4343 10.1412 12.4598 10.4905L12.6352 12.8917C12.7077 13.8846 11.7007 14.6078 10.7679 14.2328L8.51188 13.3259C8.18367 13.194 7.81632 13.194 7.48811 13.3259L5.23211 14.2328C4.29928 14.6078 3.29233 13.8846 3.36483 12.8917L3.54017 10.4905C3.56568 10.1412 3.45216 9.79579 3.22381 9.52799L1.65419 7.68726C1.00517 6.92613 1.38979 5.75596 2.36743 5.51731L4.73178 4.94014C5.07576 4.85617 5.37296 4.64272 5.56004 4.34528L6.84595 2.30078Z" fill="#F56630" />
                        <path d="M24.846 2.30078C25.3777 1.4554 26.6223 1.4554 27.154 2.30078L28.44 4.34528C28.627 4.64272 28.9242 4.85617 29.2682 4.94014L31.6326 5.51731C32.6102 5.75596 32.9948 6.92613 32.3458 7.68726L30.7762 9.52799C30.5478 9.79579 30.4343 10.1412 30.4598 10.4905L30.6352 12.8917C30.7077 13.8846 29.7007 14.6078 28.7679 14.2328L26.5119 13.3259C26.1837 13.194 25.8163 13.194 25.4881 13.3259L23.2321 14.2328C22.2993 14.6078 21.2923 13.8846 21.3648 12.8917L21.5402 10.4905C21.5657 10.1412 21.4522 9.79579 21.2238 9.52799L19.6542 7.68726C19.0052 6.92613 19.3898 5.75596 20.3674 5.51731L22.7318 4.94014C23.0758 4.85617 23.373 4.64272 23.56 4.34528L24.846 2.30078Z" fill="#F56630" />
                        <path d="M42.846 2.30078C43.3777 1.4554 44.6223 1.4554 45.154 2.30078L46.44 4.34528C46.627 4.64272 46.9242 4.85617 47.2682 4.94014L49.6326 5.51731C50.6102 5.75596 50.9948 6.92613 50.3458 7.68726L48.7762 9.52799C48.5478 9.79579 48.4343 10.1412 48.4598 10.4905L48.6352 12.8917C48.7077 13.8846 47.7007 14.6078 46.7679 14.2328L44.5119 13.3259C44.1837 13.194 43.8163 13.194 43.4881 13.3259L41.2321 14.2328C40.2993 14.6078 39.2923 13.8846 39.3648 12.8917L39.5402 10.4905C39.5657 10.1412 39.4522 9.79579 39.2238 9.52799L37.6542 7.68726C37.0052 6.92613 37.3898 5.75596 38.3674 5.51731L40.7318 4.94014C41.0758 4.85617 41.373 4.64272 41.56 4.34528L42.846 2.30078Z" fill="#F56630" />
                        <path d="M60.846 2.30078C61.3777 1.4554 62.6223 1.4554 63.154 2.30078L64.44 4.34528C64.627 4.64272 64.9242 4.85617 65.2682 4.94014L67.6326 5.51731C68.6102 5.75596 68.9948 6.92613 68.3458 7.68726L66.7762 9.52799C66.5478 9.79579 66.4343 10.1412 66.4598 10.4905L66.6352 12.8917C66.7077 13.8846 65.7007 14.6078 64.7679 14.2328L62.5119 13.3259C62.1837 13.194 61.8163 13.194 61.4881 13.3259L59.2321 14.2328C58.2993 14.6078 57.2923 13.8846 57.3648 12.8917L57.5402 10.4905C57.5657 10.1412 57.4522 9.79579 57.2238 9.52799L55.6542 7.68726C55.0052 6.92613 55.3898 5.75596 56.3674 5.51731L58.7318 4.94014C59.0758 4.85617 59.373 4.64272 59.56 4.34528L60.846 2.30078Z" fill="#F56630" />
                        <path d="M78.846 2.30078C79.3777 1.4554 80.6223 1.4554 81.154 2.30078L82.44 4.34528C82.627 4.64272 82.9242 4.85617 83.2682 4.94014L85.6326 5.51731C86.6102 5.75596 86.9948 6.92613 86.3458 7.68726L84.7762 9.52799C84.5478 9.79579 84.4343 10.1412 84.4598 10.4905L84.6352 12.8917C84.7077 13.8846 83.7007 14.6078 82.7679 14.2328L80.5119 13.3259C80.1837 13.194 79.8163 13.194 79.4881 13.3259L77.2321 14.2328C76.2993 14.6078 75.2923 13.8846 75.3648 12.8917L75.5402 10.4905C75.5657 10.1412 75.4522 9.79579 75.2238 9.52799L73.6542 7.68726C73.0052 6.92613 73.3898 5.75596 74.3674 5.51731L76.7318 4.94014C77.0758 4.85617 77.373 4.64272 77.56 4.34528L78.846 2.30078Z" fill="#F56630" />
                    </svg>
                    <span className='font-normal text-sm text-[#344054]'>(121)</span>
                </div>
                <h3 className='font-bold text-2xl text-[#101928]'>₦ 300,000</h3>
                <h3 className='mb-4'>Choose a Color</h3>
                <Image
                    src="/assets/images/color.png"
                    width='306'
                    height='56'
                    alt='color'
                    className='mb-12'
                />
                <h3 className='mb-4'>Choose a Color</h3>
                <Image
                    src="/assets/images/size.png"
                    width='532'
                    height='56'
                    alt='color'
                    className='mb-12'
                />
                <h3 className='mb-4'>Quantity</h3>
                <div className='flex flex-col lg:flex-row mb-6 gap-4 lg:items-center'>
                    <div className='flex w-[200px] rounded-[40px] justify-between items-center bg-[#F0F2F5] py-5 px-[30px]'>
                        <button className='text-[#667185] text-2xl' onClick={handleDecrease}>-</button>
                        <h3 className='text-[#F56630] font-semibold text-xl'>{quantity}</h3>
                        <button className='text-[#F56630] text-2xl' onClick={handleIncrease}>+</button>
                    </div>
                    <div className='lg:w-[139px]'>
                            <h3 className='font-normal text-sm text-[#667185'>
                        Only <span className='text-[#F56630]'>12 Items</span> Left!
                        Don’t miss it
                        </h3>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 mb-8'>
                    <button className="bg-[#F56630] text-white flex lg:w-[194px] rounded-[30px] h-[56px] items-center 
                            justify-center text-base font-semibold">Buy Now
                    </button>
                    <button onClick={()=>{router.push('/cart')}} className="bg-white border border-[#F56630] text-[#F56630] flex lg:w-[194px] rounded-[30px] h-[56px] items-center 
                            justify-center text-base font-semibold">Add to Cart
                    </button>
                </div>
                <div className='w-full flex border border-[#E4E7EC] rounded-[10px] py-6 px-7 items-center gap-4'>
                    <svg width="30" height="27" viewBox="0 0 30 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6002 0.164062L5.96813 0.684635C3.91236 0.808612 2.09858 2.02531 1.26202 3.84151L0.507678 5.47924C-0.305988 7.24575 -0.065308 9.29881 1.13674 10.8453L1.49366 11.3045L1.98535 21.7422C2.11953 24.5906 4.55188 26.8333 7.50692 26.8333H21.6934C24.6484 26.8333 27.0808 24.5906 27.215 21.7422L27.6977 11.4954C29.0123 10.3096 29.4967 8.45984 28.8656 6.78536L27.8811 4.17284C27.1298 2.17927 25.2255 0.804846 23.0314 0.672524L14.6002 0.164062ZM4.74614 21.6211L4.32769 12.7383C5.51134 12.8728 6.73307 12.6076 7.76666 11.9427L7.91018 11.8504C8.69056 11.3484 9.68987 11.2884 10.5288 11.6931L12.1283 12.4648C13.6844 13.2155 15.516 13.2155 17.072 12.4648L18.6716 11.6931C19.5105 11.2884 20.5098 11.3484 21.2901 11.8504L21.4337 11.9427C22.4673 12.6076 23.689 12.8728 24.8726 12.7383L24.4542 21.6211C24.3871 23.0453 23.1709 24.1667 21.6934 24.1667H18.8656L19.1449 20.9325C19.3664 18.367 17.2682 16.1667 14.6002 16.1667C11.9321 16.1667 9.83389 18.367 10.0555 20.9325L10.3348 24.1667H7.50692C6.02941 24.1667 4.81323 23.0453 4.74614 21.6211ZM22.9667 9.72393C23.7576 10.2328 24.7881 10.2328 25.5791 9.72393C26.2657 9.28227 26.5504 8.44495 26.2684 7.69667L25.2838 5.08415C24.9082 4.08737 23.9561 3.40016 22.859 3.334L14.6002 2.83593L6.14052 3.34611C5.11264 3.4081 4.20574 4.01644 3.78747 4.92455L3.03312 6.56227C2.62629 7.44553 2.74663 8.47206 3.34765 9.24531L3.80128 9.82892C4.56399 10.2299 5.50144 10.195 6.23367 9.72393L6.37719 9.63161C7.98275 8.59879 10.0388 8.47528 11.7647 9.30796L13.3642 10.0797C14.1423 10.455 15.0581 10.455 15.8361 10.0797L17.4356 9.30796C19.1616 8.47528 21.2176 8.59879 22.8231 9.63161L22.9667 9.72393ZM16.3908 20.7111L16.0923 24.1667H13.108L12.8095 20.7111C12.7222 19.7003 13.5489 18.8333 14.6002 18.8333C15.6514 18.8333 16.4781 19.7003 16.3908 20.7111Z" fill="#F56630"/>
                    </svg>
                    <div className='flex flex-col mb-1'>
                        <h2 className='font-semibold text-base text-[#101928]'>Free Delivery</h2>
                        <p className='font-normal text-sm text-[#667185] underline'>Enter your Postal Code for Delivery Availability</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails