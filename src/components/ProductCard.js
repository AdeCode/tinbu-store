import { CartContext } from '@/contexts/cartContext'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, {useContext} from 'react'

function ProductCard({name,price,img,productId, handleAddItem}) {
    const router = useRouter()
    // const { state, dispatch } = useContext(CartContext)

    // const handleAddItem = () => {
    //     console.log('adding to cart')
    //     dispatch({ type: 'ADD_ITEM', payload: {
    //         name,
    //         amount:price,
    //         image:`https://api.timbu.cloud/images/${img}`
    //     } })
    // }

    const gotoDetails = () => {
        console.log('going to details')
        router.push(`/products/${productId}`)
    }

  return (
    <div className='flex flex-col w-full lg:w-[286px] cursor-pointer lg:mb-6 mb-3'>
        <div className='w-[286px] h-[260px] lg:mb-6 mb-4' onClick={gotoDetails}>
            <Image
                src={`https://api.timbu.cloud/images/${img}`}
                width='286'
                height='260'
                alt='product'
                objectFit="cover"
                className='object-center max-w-[286px] max-h-[260px]'
            />
        </div>
        <div className='flex flex-col'>
            <div className='flex justify-between mb-1'>
                <h3 className='text-base font-medium text-[#101928]'>{name}</h3>
                {/* <h3 className='text-base font-medium text-[#101928]'>Court Heels</h3> */}
                <h3 className='font-semibold text-lg'>₦ {price}</h3>
                {/* <h3 className='font-semibold text-lg'>₦ 30,000</h3> */}
            </div>
            <div className='mb-4'>
                <h4 className='font-normal text-xs mb-1'>Red Silettos</h4>
                <div className='flex items-center gap-3'>
                    <svg width="88" height="16" viewBox="0 0 88 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.84595 2.30078C7.37767 1.4554 8.62232 1.4554 9.15404 2.30078L10.44 4.34528C10.627 4.64272 10.9242 4.85617 11.2682 4.94014L13.6326 5.51731C14.6102 5.75596 14.9948 6.92613 14.3458 7.68726L12.7762 9.52799C12.5478 9.79579 12.4343 10.1412 12.4598 10.4905L12.6352 12.8917C12.7077 13.8846 11.7007 14.6078 10.7679 14.2328L8.51188 13.3259C8.18367 13.194 7.81632 13.194 7.48811 13.3259L5.23211 14.2328C4.29928 14.6078 3.29233 13.8846 3.36483 12.8917L3.54017 10.4905C3.56568 10.1412 3.45216 9.79579 3.22381 9.52799L1.65419 7.68726C1.00517 6.92613 1.38979 5.75596 2.36743 5.51731L4.73178 4.94014C5.07576 4.85617 5.37296 4.64272 5.56004 4.34528L6.84595 2.30078Z" fill="#F56630"/>
                    <path d="M24.846 2.30078C25.3777 1.4554 26.6223 1.4554 27.154 2.30078L28.44 4.34528C28.627 4.64272 28.9242 4.85617 29.2682 4.94014L31.6326 5.51731C32.6102 5.75596 32.9948 6.92613 32.3458 7.68726L30.7762 9.52799C30.5478 9.79579 30.4343 10.1412 30.4598 10.4905L30.6352 12.8917C30.7077 13.8846 29.7007 14.6078 28.7679 14.2328L26.5119 13.3259C26.1837 13.194 25.8163 13.194 25.4881 13.3259L23.2321 14.2328C22.2993 14.6078 21.2923 13.8846 21.3648 12.8917L21.5402 10.4905C21.5657 10.1412 21.4522 9.79579 21.2238 9.52799L19.6542 7.68726C19.0052 6.92613 19.3898 5.75596 20.3674 5.51731L22.7318 4.94014C23.0758 4.85617 23.373 4.64272 23.56 4.34528L24.846 2.30078Z" fill="#F56630"/>
                    <path d="M42.846 2.30078C43.3777 1.4554 44.6223 1.4554 45.154 2.30078L46.44 4.34528C46.627 4.64272 46.9242 4.85617 47.2682 4.94014L49.6326 5.51731C50.6102 5.75596 50.9948 6.92613 50.3458 7.68726L48.7762 9.52799C48.5478 9.79579 48.4343 10.1412 48.4598 10.4905L48.6352 12.8917C48.7077 13.8846 47.7007 14.6078 46.7679 14.2328L44.5119 13.3259C44.1837 13.194 43.8163 13.194 43.4881 13.3259L41.2321 14.2328C40.2993 14.6078 39.2923 13.8846 39.3648 12.8917L39.5402 10.4905C39.5657 10.1412 39.4522 9.79579 39.2238 9.52799L37.6542 7.68726C37.0052 6.92613 37.3898 5.75596 38.3674 5.51731L40.7318 4.94014C41.0758 4.85617 41.373 4.64272 41.56 4.34528L42.846 2.30078Z" fill="#F56630"/>
                    <path d="M60.846 2.30078C61.3777 1.4554 62.6223 1.4554 63.154 2.30078L64.44 4.34528C64.627 4.64272 64.9242 4.85617 65.2682 4.94014L67.6326 5.51731C68.6102 5.75596 68.9948 6.92613 68.3458 7.68726L66.7762 9.52799C66.5478 9.79579 66.4343 10.1412 66.4598 10.4905L66.6352 12.8917C66.7077 13.8846 65.7007 14.6078 64.7679 14.2328L62.5119 13.3259C62.1837 13.194 61.8163 13.194 61.4881 13.3259L59.2321 14.2328C58.2993 14.6078 57.2923 13.8846 57.3648 12.8917L57.5402 10.4905C57.5657 10.1412 57.4522 9.79579 57.2238 9.52799L55.6542 7.68726C55.0052 6.92613 55.3898 5.75596 56.3674 5.51731L58.7318 4.94014C59.0758 4.85617 59.373 4.64272 59.56 4.34528L60.846 2.30078Z" fill="#F56630"/>
                    <path d="M78.846 2.30078C79.3777 1.4554 80.6223 1.4554 81.154 2.30078L82.44 4.34528C82.627 4.64272 82.9242 4.85617 83.2682 4.94014L85.6326 5.51731C86.6102 5.75596 86.9948 6.92613 86.3458 7.68726L84.7762 9.52799C84.5478 9.79579 84.4343 10.1412 84.4598 10.4905L84.6352 12.8917C84.7077 13.8846 83.7007 14.6078 82.7679 14.2328L80.5119 13.3259C80.1837 13.194 79.8163 13.194 79.4881 13.3259L77.2321 14.2328C76.2993 14.6078 75.2923 13.8846 75.3648 12.8917L75.5402 10.4905C75.5657 10.1412 75.4522 9.79579 75.2238 9.52799L73.6542 7.68726C73.0052 6.92613 73.3898 5.75596 74.3674 5.51731L76.7318 4.94014C77.0758 4.85617 77.373 4.64272 77.56 4.34528L78.846 2.30078Z" fill="#F56630"/>
                    </svg>
                    <span className='font-normal text-sm text-[#1D2739]'>(91)</span>
                </div>
            </div>
            <div className='w-[130px] bg-white rounded-2xl py-2 px-3 flex justify-center items-center border-[1.5px] border-[#D0D5DD]'>
                <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M1.08333 0.833252C0.623096 0.833252 0.25 1.20635 0.25 1.66659C0.25 2.12682 0.623096 2.49992 1.08333 2.49992C1.69035 2.49992 2.22066 2.94099 2.32984 3.56159L2.90141 6.81049L2.90192 6.81337L3.26813 8.85998C3.49716 10.14 3.68006 11.1622 3.9113 11.9742C4.14977 12.8116 4.45884 13.5007 4.98376 14.083C5.3443 14.4829 5.76614 14.8253 6.23364 15.0985C6.91088 15.4943 7.65747 15.6685 8.54511 15.752C9.40987 15.8333 10.4817 15.8333 11.8319 15.8333H12.2424C12.8429 15.8333 13.338 15.8333 13.7459 15.8036C14.1708 15.7727 14.5575 15.7068 14.9327 15.5468C15.4799 15.3135 15.9591 14.9468 16.3221 14.479C16.5727 14.1559 16.7291 13.7997 16.8574 13.4018C16.9798 13.0221 17.0915 12.5541 17.2256 11.9918L17.2425 11.9208C17.4465 11.0662 17.6131 10.3678 17.6937 9.79764C17.7767 9.21092 17.7858 8.65908 17.5969 8.12718C17.3313 7.37942 16.8086 6.74991 16.1246 6.3398C15.6428 6.0509 15.098 5.93786 14.4935 5.88492C13.9033 5.83323 13.1638 5.83324 12.2512 5.83325H4.42175L3.9713 3.27281C3.72412 1.86779 2.51195 0.833252 1.08333 0.833252ZM12.2122 7.49992C13.173 7.49992 13.8393 7.50067 14.3481 7.54523C14.851 7.58927 15.1024 7.67019 15.2676 7.76921C15.628 7.98531 15.8934 8.31069 16.0264 8.68501C16.0843 8.84819 16.1108 9.0883 16.0435 9.56417C15.9751 10.0476 15.8276 10.6696 15.6118 11.5742C15.4684 12.1752 15.3713 12.5797 15.2711 12.8904C15.1746 13.1898 15.0921 13.3454 15.0052 13.4574C14.8193 13.697 14.57 13.8897 14.2791 14.0136C14.139 14.0734 13.955 14.1173 13.6249 14.1413C13.2847 14.1661 12.8504 14.1666 12.2122 14.1666H11.874C10.4724 14.1666 9.47878 14.1657 8.70108 14.0926C7.93732 14.0208 7.45978 13.8846 7.0746 13.6595C6.75362 13.472 6.46605 13.2381 6.22168 12.967C5.93152 12.6451 5.71522 12.2235 5.51424 11.5178C5.30866 10.7959 5.13956 9.85642 4.90092 8.52274L4.7179 7.49992H12.2122Z" fill="#475367"/>
                <path d="M7.75 17.2916C7.75 17.8669 7.28363 18.3333 6.70833 18.3333C6.13304 18.3333 5.66667 17.8669 5.66667 17.2916C5.66667 16.7163 6.13304 16.2499 6.70833 16.2499C7.28363 16.2499 7.75 16.7163 7.75 17.2916Z" fill="#475367"/>
                <path d="M14.2083 18.3333C14.7836 18.3333 15.25 17.8669 15.25 17.2916C15.25 16.7163 14.7836 16.2499 14.2083 16.2499C13.633 16.2499 13.1667 16.7163 13.1667 17.2916C13.1667 17.8669 13.633 18.3333 14.2083 18.3333Z" fill="#475367"/>
                </svg>
                <h4 className='font-semibold text-sm text-[#475367]' onClick={handleAddItem}>Add to Cart</h4>
            </div>
        </div>
    </div>
  )
}

export default ProductCard