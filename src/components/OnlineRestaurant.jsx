import React, { useEffect, useRef, useState } from 'react'
import Card from './Card';

function OnlineRestaurant() {
   const [restaurant, setRestaurant] = useState([]);
   const [isAtTop, setIsAtTop]= useState(false);
   const componentRef =useRef(null);

   useEffect(()=>{
    const handleScroll =()=>{
        if (componentRef.current) {
          const rect = componentRef.current.getBoundingClientRect();
          setIsAtTop(rect.top <= 0)
        }
    };

    window.addEventListener('scroll', handleScroll);

    return ()=>{
      window.removeEventListener('scroll', handleScroll);
    }
   },[]);

  const fetchRestaurant = async() =>{
          const response = await fetch('/data/restaurantChains.json')
          const restaurantData = await response.json()
          setRestaurant(restaurantData)
  
      };
  
      useEffect(()=> fetchRestaurant, [])
  return (
    <div className='max-w-[1200px] mt-25'ref={componentRef}>
          
            <div className='m-8'>
              <h2 className='font-bold text-2xl'>Online Restaurant in Dhaka</h2>
            </div>
            <div className={isAtTop ? 'fixed top-0 z-50 bg-white w-full left-0':''}>
              <div className='max-w-[1200px] mx-auto flex my-4'>
                <div className='p-3 rounded-md shadow'>Filter</div>
                <div className='p-3 rounded-md shadow'>Sort</div>
                <div className='p-3 rounded-md shadow'>Filter</div>
                <div className='p-3 rounded-md shadow'>Filter</div>
                <div className='p-3 rounded-md shadow'>Filter</div>
                <div className='p-3 rounded-md shadow'>Filter</div>
                <div className='p-3 rounded-md shadow'>Filter</div>
              </div>
              
            </div>
            <div className='grid grid-cols-4 gap-5'>
              <Card restaurant={restaurant}/>
            </div>
    </div>
  )
}

export default OnlineRestaurant
