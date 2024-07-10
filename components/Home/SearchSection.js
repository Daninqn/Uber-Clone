"use client";
import React, { useContext ,useEffect, useState} from 'react';
import InputItem from "@/components/Home/InputItem"
import CarListOptions from "@/components/Home/CarListOptions"
import { SourceContext } from '@/context/SourceContext';
import { DestinationContext } from '@/context/DestinationContext';

const SearchSection = () => {
  const {source,setSource} = useContext(SourceContext);
  const {destination,setDestination} = useContext(DestinationContext);
  const [distance, setDistance] = useState();

  const isValidLatLng = (latLng) => {
    return latLng && !isNaN(parseFloat(latLng.lat)) && !isNaN(parseFloat(latLng.lng));
  }

  const calculateDistance = () => {
    if (isValidLatLng(source) && isValidLatLng(destination)) {
      const dist = google.maps.geometry.spherical.computeDistanceBetween(
        new google.maps.LatLng(parseFloat(source.lat), parseFloat(source.lng)),
        new google.maps.LatLng(parseFloat(destination.lat), parseFloat(destination.lng))
      );
      setDistance(dist);
    } else {
      console.error("Invalid source or destination coordinates");
    }
  }

  useEffect(()=>{
    if(source){
      console.log(source);
    }else{
      console.log(destination);
    }
  },[source,destination])
  return (
    <div>
      <div className='p-2 md:pd-6
      border-[2px] rounded-xl'>
        <p className='text-[20px] font-bold'>Get a Ride</p>
        <InputItem type="source"/>
        <InputItem type="destination"/>
        <button className='p-3 bg-black w-full mt-5 text-white rounded-lg'
        onClick={()=>calculateDistance()}
        >Buscar</button>
      </div>
      {distance? <CarListOptions distance={distance}/>:null}
    </div>
  )
}

export default SearchSection
