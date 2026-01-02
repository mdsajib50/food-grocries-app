import React, { useEffect, useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Category() {
  const [slide, setSlide] = useState(0);
  const [categories, setCategories]=useState([]);

  const fetchCategory = async () => {
     const response= await fetch("/data/category.json");
     const data=await response.json();
     setCategories(data)
  }

  useEffect(()=>{

     fetchCategory();
  },[])
  
  const nextSlide = ()=>{
    if(categories.length - 8 === slide) return false;
    setSlide(slide + 3)
  }

  const prevSlide = ()=>{
    if(slide.length === 0) return false;
    setSlide(slide - 3)
  }
  return (
    <div className='max-w-[1200px] mt-8'>
      <div className='flex items-center justify-between mx-2.5'>
        <div>
          <h2>What's on your mind?</h2>
        </div>
          
        <div className='flex gap-2'>
          <div className="w-[30px] h-[30px] bg-gray-400 rounded-full cursor-pointer" onClick={prevSlide}>
            <FaArrowLeft className='m-1.5'/>
          </div>
        <div className="w-[30px] h-[30px] bg-gray-400 rounded-full cursor-pointer" onClick={nextSlide}><FaArrowRight className='m-1.5'/></div>
      </div>
        </div>
        <div className='flex overflow-hidden'>
          {
            categories.map((category, index)=>{
              return(
                <div style={{transform:`translateX(-${slide * 100}%)`}} className='w-[150px] shrink-0 duration-500' key={index}>
                <img src={`/images/${category.image}`} alt={category.path} srcSet=''/>
                
              </div>
              )
              
            })
          }
        </div>
        <hr className='my-6 border-2 border-amber-100'/>
    </div>
  )
}

export default Category
