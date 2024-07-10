import React from 'react'
import Image from 'next/image'
import { HiUser } from 'react-icons/hi2'

const CarListItem = ({car, distance}) => {
  return (
    <div>
      <div className='flex items-center justify-between mt-5'>
        <div className='flex items-center gap-5'>
            <Image src={car.image}
            width={100} height={100}/>
            <div>
                <h2 className='font-semibold text-[18px] flex gap-3 items-center'>
                    {car.name}</h2>
                    <span className='flex gap-2 items-center font-normal text-[14px]'>
                        <HiUser />{car.seat}
                    </span>
                <p>{car.desc}</p>
            </div>
        </div>
        <h2 className='text-[18px] font-semibold'>${(car.amount*distance).toFixed(2)}</h2>
      </div>
    </div>
  )
}

export default CarListItem
