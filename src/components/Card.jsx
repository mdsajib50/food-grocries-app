import React from 'react';
import { FcRating } from "react-icons/fc";

function Card({restaurant, slide}) {
    console.log(restaurant);
    
  return (
    <>
      {
        restaurant.map(item=>{
            return(
                <div style={{transform: `translateX(${slide * 100}%)`}} className='w-[273px] shrink-0 grow shadow-blue-400/40 shadow-lg'>
                    <div className='h-[182px] rounded-[15px] overflow-hidden relative'>
                        <img src={`/public/images/${item.image}`} alt="" srcSet="" className='object-cover w-full h-full'/>
                        <div className='image-overlay absolute w-full h-full top-0'><h3 className='font-bold text-amber-100 text-xl top-35 p-2 absolute'>${item.offer}</h3></div>
                    </div>
                    <div className="content mt-4">
                      <h3 className='font-bold'>{item.title}</h3>
                      <span className='flex gap-1.5 items-center font-bold'><FcRating />{item.rating} . {item.maxTime}-{item.minTime} mins</span>
                      <p>{item.name}</p>
                      <h4>{item.place}</h4>
                    </div>
            </div>
            )
        })
      }
    </>
  )
}

export default Card
