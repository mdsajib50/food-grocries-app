import React, { useEffect, useState } from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Restaurant() {
    const [slide, setSlide] = useState(0);
    const [restaurant, setRestaurant] = useState([]);

    const fetchRestaurant = async() =>{
        const response = await fetch('/data/restaurantChains.json')
        const restaurantData = await response.json()
        setRestaurant(restaurantData)

    };

    useEffect(()=> fetchRestaurant, [])

    const prevSlide = ()=>{
        setSlide(slide -3)
    }
    const nextSlide = ()=>{
        setSlide(slide + 3)
    }
  return (
    <div className='max-w-[1200px] mt-8'>
          <div className='flex items-center justify-between mx-2.5'>
            <div>
              <h2>Top Restaurant in Dhaka</h2>
            </div>
              
            <div className='flex gap-2'>
              <div className="w-[30px] h-[30px] bg-gray-400 rounded-full cursor-pointer" onClick={prevSlide}>
                <FaArrowLeft className='m-1.5'/>
              </div>
            <div className="w-[30px] h-[30px] bg-gray-400 rounded-full cursor-pointer" onClick={nextSlide}><FaArrowRight className='m-1.5'/></div>
          </div>
            </div>
    </div>
  )
}

export default Restaurant
