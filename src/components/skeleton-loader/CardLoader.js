import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardLoader() {
  return (
    <div className='flex flex-col gap-4'>
        <div>
            <Skeleton style={{height:'300px'}}/>
        </div>
        <div className='flex justify-between'>
            <Skeleton style={{height:'20px',width:'100px'}}/>
            <Skeleton style={{height:'20px', width:'50px'}}/>
        </div>
        <div className='w-[200px] h-[100px]'>
            <Skeleton count={2} />
        </div>
    </div>
  )
}

export default CardLoader