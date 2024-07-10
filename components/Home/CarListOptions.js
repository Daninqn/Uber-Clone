"use client";
import React, { useState } from 'react'
import {CarListData} from '@/utils/CarListData'
import CarListItem from '@/components/Home/CarListItem'

const CarListOptions = ({distance}) => {
  const [activeIndex,setActiveIndex]=useState();
  const [selectedCar,setselectedCar]=useState([]);
  return (
    <div className='mt-5 p-5 overflow-auto h-[350px]'>
      <h2 className='text-[22px] font-bold'>Recomendados</h2>
      {CarListData.map((item,index)=>(
        <div className={`cursor-pointer p-2 rounded-md border-black px-4
          ${activeIndex==index?'border-[3px]':null}`}
        onClick={()=>{setActiveIndex(index); setselectedCar(item)}}
        >
            <CarListItem car={item} distance={distance}/>
        </div>
      ))}
      {selectedCar?.name? <div className='flex justify-between fixed
      bottom-5 bg-white p-3 shadow-xl rounded-lg
      w-full md:w-[30%] border-[1px] items-center'>
        <h2>Make {selectedCar.name}</h2>
        <button className='p-3 bg-black text-white rounded-lg text-center'>Request</button>
      </div>:null}
    </div>
  )
}

export default CarListOptions
