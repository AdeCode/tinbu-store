import React from 'react'
import Image from 'next/image'
import PopularCard from './PopularCard'

function Experience() {
    return (
        <section className=''>
            <h2 className='lg:w-[356px] text-center lg:text-start font-semibold lg:text-3xl text-xl lg:mb-10 mb-5 text-brand-black'>
                We provide the
                best customer experiences
            </h2>
            <div className='flex flex-col gap-5 items-center lg:items-start lg:flex-row justify-between lg:mb-[91px] mb-5'>
                <div className='flex flex-col items-center lg:items-start h-[132px] w-[248px] justify-between'>
                    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="44" rx="22" fill="#FFF4F0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 11C13.9477 11 13.5 11.4477 13.5 12C13.5 12.5523 13.9477 13 14.5 13C15.3085 13 16.0005 13.5798 16.1421 14.3758L16.8684 18.4608L17.2792 20.8415C17.5367 22.3337 17.7424 23.5252 18.0023 24.4717C18.2701 25.4467 18.6179 26.2529 19.2125 26.9368C19.6206 27.4061 20.0991 27.8091 20.631 28.1314C21.4061 28.6011 22.2597 28.8067 23.266 28.9048C24.2429 29 25.452 29 26.9661 29H27.4352C28.1078 29 28.6675 29 29.1298 28.9652C29.6136 28.9287 30.0597 28.8504 30.4938 28.6585C31.1219 28.3809 31.6679 27.9462 32.0794 27.3964C32.3637 27.0163 32.54 26.5991 32.684 26.1359C32.8217 25.6932 32.9472 25.1476 33.098 24.4922L33.117 24.4097C33.3463 23.4132 33.5336 22.5993 33.6243 21.9347C33.7175 21.2515 33.7278 20.6093 33.5154 19.9894C33.2167 19.1174 32.626 18.3753 31.8432 17.8886C31.2867 17.5427 30.6586 17.4087 29.9718 17.3463C29.3038 17.2857 28.4686 17.2857 27.4461 17.2857H18.6908L18.1112 14.0257C17.7999 12.2752 16.278 11 14.5 11ZM19.2413 20.4505L19.0403 19.2857H27.3983C28.4803 19.2857 29.2242 19.2867 29.7909 19.3381C30.3491 19.3888 30.6163 19.4809 30.7872 19.5872C31.1786 19.8305 31.474 20.2016 31.6234 20.6376C31.6886 20.828 31.7184 21.109 31.6426 21.6643C31.5657 22.2282 31.3998 22.9534 31.1572 24.0078C30.996 24.7084 30.8868 25.18 30.7742 25.542C30.6655 25.8916 30.5732 26.071 30.478 26.1982C30.2723 26.4731 29.9992 26.6904 29.6852 26.8293C29.5399 26.8935 29.3443 26.9433 28.9793 26.9708C28.6012 26.9993 28.1171 27 27.3983 27H27.0179C25.4403 27 24.3286 26.9989 23.46 26.9142C22.6096 26.8314 22.087 26.6751 21.6675 26.421C21.3129 26.2061 20.9939 25.9374 20.7218 25.6245C20.4 25.2544 20.1572 24.766 19.9309 23.942C19.6998 23.1004 19.5096 22.0052 19.2413 20.4505Z" fill="#F56630" />
                        <path d="M21.25 32C21.9404 32 22.5 31.4404 22.5 30.75C22.5 30.0596 21.9404 29.5 21.25 29.5C20.5596 29.5 20 30.0596 20 30.75C20 31.4404 20.5596 32 21.25 32Z" fill="#F56630" />
                        <path d="M31.5 30.75C31.5 31.4404 30.9404 32 30.25 32C29.5596 32 29 31.4404 29 30.75C29 30.0596 29.5596 29.5 30.25 29.5C30.9404 29.5 31.5 30.0596 31.5 30.75Z" fill="#F56630" />
                        <path d="M34.3419 13.7071C34.7325 13.3166 34.7325 12.6834 34.3419 12.2929C33.9514 11.9024 33.3183 11.9024 32.9277 12.2929L30.989 14.2316L30.7071 13.9497C30.3166 13.5592 29.6834 13.5592 29.2929 13.9497C28.9024 14.3403 28.9024 14.9734 29.2929 15.364L30.2819 16.3529C30.6724 16.7435 31.3056 16.7435 31.6961 16.3529L34.3419 13.7071Z" fill="#F56630" />
                    </svg>

                    <div className='flex flex-col items-center lg:items-start gap-[6px]'>
                        <h3 className='font-semibold text-lg text-center lg:text-start'>
                            Original Products
                        </h3>
                        <p className='text-brand-gray text-sm font-normal text-center lg:text-start'>
                            We ensure money-back guarantee if the product is counterfeit
                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start h-[132px] w-[248px] justify-between'>
                    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="44" rx="22" fill="#FFF4F0" />
                        <path d="M24 14C19.5817 14 16 17.5817 16 22C16 26.4183 19.5817 30 24 30C28.4183 30 32 26.4183 32 22C32 21.5446 31.962 21.0988 31.8893 20.6655C31.798 20.1208 32.1654 19.6052 32.7101 19.5138C33.2548 19.4224 33.7704 19.7899 33.8618 20.3345C33.9528 20.8768 34 21.4333 34 22C34 27.5228 29.5228 32 24 32C18.4772 32 14 27.5228 14 22C14 16.4772 18.4772 12 24 12C25.5947 12 27.1049 12.374 28.445 13.04C28.9396 13.2858 29.1413 13.886 28.8955 14.3806C28.6497 14.8751 28.0495 15.0768 27.555 14.831C26.4852 14.2994 25.279 14 24 14Z" fill="#F56630" />
                        <path d="M32 13C32.5523 13 33 13.4477 33 14V15H34C34.5523 15 35 15.4477 35 16C35 16.5523 34.5523 17 34 17H33V18C33 18.5523 32.5523 19 32 19C31.4477 19 31 18.5523 31 18V17H30C29.4477 17 29 16.5523 29 16C29 15.4477 29.4477 15 30 15H31V14C31 13.4477 31.4477 13 32 13Z" fill="#F56630" />
                        <path d="M21.2929 25.2929C21.6834 24.9024 22.3166 24.9024 22.7071 25.2929C23.4212 26.0069 24.5788 26.0069 25.2929 25.2929C25.6834 24.9024 26.3166 24.9024 26.7071 25.2929C27.0976 25.6834 27.0976 26.3166 26.7071 26.7071C25.212 28.2022 22.788 28.2022 21.2929 26.7071C20.9024 26.3166 20.9024 25.6834 21.2929 25.2929Z" fill="#F56630" />
                        <path d="M22.2 19.5C22.2 18.6716 21.5284 18 20.7 18C19.8716 18 19.2 18.6716 19.2 19.5C19.2 20.3284 19.8716 21 20.7 21C21.5284 21 22.2 20.3284 22.2 19.5Z" fill="#F56630" />
                        <path d="M27.3 18C28.1284 18 28.8 18.6716 28.8 19.5C28.8 20.3284 28.1284 21 27.3 21C26.4716 21 25.8 20.3284 25.8 19.5C25.8 18.6716 26.4716 18 27.3 18Z" fill="#F56630" />
                    </svg>
                    <div className='flex flex-col items-center lg:items-start gap-[6px]'>
                        <h3 className='font-semibold text-lg'>
                            Satisfaction Guarantee
                        </h3>
                        <p className='text-brand-gray text-sm font-normal text-center lg:text-start'>
                            We ensure money-back guarantee if the product is counterfeit                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start h-[132px] w-[248px] justify-between'>
                    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="44" rx="22" fill="#FFF4F0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24 12C23.5235 12 23.0529 12.1052 22.6218 12.3081L16.2968 15.2845C14.8948 15.9443 14 17.3544 14 18.9038V26C14 26.9978 14.5762 27.9058 15.479 28.3306L22.6218 31.6919C23.0529 31.8948 23.5235 32 24 32C24.4765 32 24.9471 31.8948 25.3782 31.6919L32.521 28.3306C33.4238 27.9058 34 26.9978 34 26V18.9038C34 17.3544 33.1052 15.9443 31.7032 15.2845L25.3782 12.3081C24.9471 12.1052 24.4765 12 24 12ZM32 24.382L25 20.882V14.3405L30.8516 17.0942C31.5526 17.4241 32 18.1291 32 18.9038V24.382ZM24 22.618L31.7343 26.4852C31.7136 26.4984 31.692 26.5104 31.6694 26.521L24.5266 29.8823C24.3619 29.9598 24.1821 30 24 30C23.8179 30 23.6381 29.9598 23.4734 29.8823L16.3306 26.521C16.308 26.5104 16.2864 26.4984 16.2657 26.4852L24 22.618ZM23 20.882L16 24.382V18.9038C16 18.1291 16.4474 17.4241 17.1484 17.0942L23 14.3405V20.882Z" fill="#F56630" />
                    </svg>


                    <div className='flex flex-col items-center lg:items-start gap-[6px]'>
                        <h3 className='font-semibold text-lg'>
                            New Arrival Everyday
                        </h3>
                        <p className='text-brand-gray text-sm font-normal text-center lg:text-start'>
                            We ensure money-back guarantee if the product is counterfeit                        </p>
                    </div>
                </div>
                <div className='flex flex-col items-center lg:items-start h-[132px] w-[248px] justify-between'>
                    <svg width="48" height="44" viewBox="0 0 48 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="48" height="44" rx="22" fill="#FFF4F0" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M22.9997 12.5C21.8951 12.5 20.9997 13.3954 20.9997 14.5V15.5H20.4997C18.2905 15.5 16.4997 17.2909 16.4997 19.5V21.132L15.3279 21.7178C13.9126 22.4255 12.9573 23.969 13.2885 25.657C13.4279 26.3678 13.6355 27.1968 13.9439 27.9893C14.2484 28.7716 14.6759 29.5836 15.2887 30.2032C15.9872 30.9094 16.7539 31.2953 17.5736 31.4385C18.3654 31.5768 19.1442 31.4771 19.8547 31.3254C20.2534 31.2403 20.7137 31.1171 21.1533 30.9994C21.4382 30.9231 21.7145 30.8492 21.9598 30.7894C22.6517 30.6207 23.3206 30.5 23.9997 30.5C24.6787 30.5 25.3476 30.6207 26.0395 30.7894C26.2848 30.8492 26.5611 30.9231 26.846 30.9994C27.2857 31.1171 27.7459 31.2403 28.1446 31.3254C28.8551 31.4771 29.6339 31.5768 30.4257 31.4385C31.2454 31.2953 32.0121 30.9094 32.7106 30.2032C33.3234 29.5836 33.7509 28.7716 34.0554 27.9893C34.3638 27.1968 34.5714 26.3678 34.7108 25.657C35.042 23.969 34.0867 22.4255 32.6714 21.7178L31.4997 21.132V19.5C31.4997 17.2909 29.7088 15.5 27.4997 15.5H26.9997V14.5C26.9997 13.3954 26.1042 12.5 24.9997 12.5H22.9997ZM22.2108 18.2764L18.4997 20.132V19.5C18.4997 18.3954 19.3951 17.5 20.4997 17.5H27.4997C28.6042 17.5 29.4997 18.3954 29.4997 19.5V20.132L25.7885 18.2764C24.6624 17.7133 23.3369 17.7133 22.2108 18.2764ZM23.1052 20.0652C23.6683 19.7837 24.331 19.7837 24.8941 20.0652L31.777 23.5067C32.5146 23.8755 32.8805 24.5979 32.7482 25.272C32.6226 25.9122 32.4429 26.618 32.1915 27.264C31.9361 27.9203 31.6312 28.4505 31.2887 28.7968C30.8696 29.2205 30.4748 29.3996 30.0816 29.4683C29.6605 29.5419 29.175 29.5003 28.5622 29.3695C28.1843 29.2888 27.8412 29.196 27.4645 29.0941C27.1771 29.0163 26.87 28.9332 26.5131 28.8462C25.7562 28.6618 24.91 28.5 23.9997 28.5C23.0893 28.5 22.2431 28.6618 21.4862 28.8462C21.1293 28.9332 20.8223 29.0163 20.5349 29.0941C20.1582 29.196 19.815 29.2889 19.4371 29.3695C18.8243 29.5003 18.3388 29.5419 17.9177 29.4683C17.5245 29.3996 17.1298 29.2205 16.7106 28.7968C16.3681 28.4505 16.0632 27.9203 15.8078 27.264C15.5564 26.618 15.3767 25.9122 15.2511 25.272C15.1188 24.5979 15.4847 23.8755 16.2223 23.5067L23.1052 20.0652ZM24.9997 15.5H22.9997V14.5H24.9997V15.5Z" fill="#F56630" />
                    </svg>


                    <div className='flex flex-col items-center lg:items-start gap-[6px]'>
                        <h3 className='font-semibold text-lg'>
                            Fast & Free Shipping
                        </h3>
                        <p className='text-brand-gray text-sm font-normal text-center lg:text-start'>
                            We ensure money-back guarantee if the product is counterfeit                        </p>
                    </div>
                </div>
            </div>
            <div className='hidden lg:flex-row justify-between lg:mb-[91px]'>
                <div className='bg-experience-left bg-center bg-cover lg:h-[532px] lg:w-[692px] rounded-[10px] lg:p-10 flex flex-col justify-between'>
                    <div className='flex justify-between'>
                        <h3 className='border border-[#F3A218] rounded-xl py-1 px-3 lg:w-[131px] text-sm font-semibold text-[#F3A218]'>UP TO 80% OFF</h3>
                        <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19.6499 0.817261C18.3613 0.817261 17.3166 1.86193 17.3166 3.15059C17.3166 4.43926 18.3613 5.48393 19.6499 5.48393H27.2161L1.50086 31.1992C0.589638 32.1104 0.589638 33.5878 1.50086 34.499C2.41208 35.4102 3.88947 35.4102 4.80069 34.499L30.5159 8.78376V16.3499C30.5159 17.6386 31.5606 18.6833 32.8493 18.6833C34.1379 18.6833 35.1826 17.6386 35.1826 16.3499V3.15059C35.1826 1.86193 34.1379 0.817261 32.8493 0.817261H19.6499Z" fill="white" />
                        </svg>
                    </div>
                    <div className='flex justify-between items-center'>
                        <h2 className='lg:w-[351px] text-white font-semibold'>Kiddies Korean Summer Collection</h2>
                        <button className="bg-[#F56630] text-white flex lg:w-[141px] rounded-lg h-[56px] items-center 
                            justify-center text-base font-semibold gap-2">Shop now
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.08315 11.3707C9.80795 10.6006 9.80795 9.39937 9.08315 8.62927L1.7282 0.814638C1.34969 0.412464 0.716812 0.393286 0.314638 0.771803C-0.0875353 1.15032 -0.106714 1.78319 0.271803 2.18537L7.62675 10L0.271803 17.8146C-0.106713 18.2168 -0.0875345 18.8497 0.314639 19.2282C0.716813 19.6067 1.34969 19.5875 1.7282 19.1854L9.08315 11.3707Z" fill="white" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className='lg:flex lg:flex-col justify-between'>
                    <div className='bg-center bg-cover flex items-center px-[33px] bg-experience-right-top lg:w-[484px] lg:h-[250px] rounded-[10px]'>
                        <div className=''>
                            <h3 className='bg-brand-orange mb-5 lg:w-[131px] text-white text-sm font-semibold rounded-xl py-1 px-3'>
                            UP TO 80% OFF
                            </h3>
                            <h2 className='text-white text-[28px] font-semibold lg:w-[274px]'>
                            Children Summer Play set
                            </h2>
                        </div>
                    </div>
                    <div className='hidden lg:flex'>
                        <Image
                            src='/assets/images/boot.png'
                            width="484"
                            height="250"
                            alt='children'
                            className='rounded-[10px]'
                        />
                    </div>
                </div>
            </div>
            <div className='lg:mb-[91px] px-4'>
                <div className='flex justify-between lg:mb-10 mb-5'>
                    <h2 className='text-[28px] font-semibold'>Popular</h2>
                    <div className='bg-white w-[103px] rounded-[30px] flex items-center py-2 px-4 gap-2'>
                        <h3 className='text-[#667185] text-sm font-medium'>Sort by</h3>
                        <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.11098 1.54615L6.97195 7.06237C7.54953 7.60597 8.45047 7.60597 9.02805 7.06237L14.889 1.54615C15.1907 1.26227 15.205 0.78761 14.9212 0.48598C14.6373 0.184349 14.1626 0.169966 13.861 0.453853L8 5.97007L2.13903 0.453852C1.8374 0.169965 1.36274 0.184348 1.07885 0.485979C0.794965 0.787609 0.809349 1.26226 1.11098 1.54615Z" fill="#475367"/>
                        </svg>
                    </div>
                </div>
                <div className='flex flex-col gap-5 lg:flex-row justify-between'>
                    <PopularCard/>
                    <PopularCard/>
                    <PopularCard/>
                    <PopularCard/>
                </div>
            </div>
            <div className=''>
                <div className='bg-bg-delivery w-full lg:h-[245px] bg-center bg-cover'></div>
                {/* <Image
                    src="/assets/images/delivery.png"
                    width='1216'
                    height='245'
                    alt='product'
                    className='mb-4'
                /> */}
            </div>
        </section>
    )
}

export default Experience