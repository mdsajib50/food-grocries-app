import React from 'react'
import { RxCaretDown } from 'react-icons/rx';
import { ImCross } from "react-icons/im";
import { FaSearch } from "react-icons/fa";
import { RiDiscountPercentLine } from "react-icons/ri";
import { IoCartOutline } from "react-icons/io5";
import { PiSignInBold } from "react-icons/pi";
import { LiaHandsHelpingSolid } from "react-icons/lia";
function Header() {
  const [toggle, setToggle] = React.useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const links=[
    {
      name:'Search',
      icon:<FaSearch className='text-[1.2rem]'/>,
      link:'/'
    },
    {
      name:'Offers',
      icon:<RiDiscountPercentLine className='text-[1.2rem]'/>,
      link:'/',
      sup:'New'
    },
    {
      name:'Cart',
      icon:<IoCartOutline className='text-[1.2rem]'/>,
      link:'/',
      sup:'0'
    },
    {
      name:'Sign In',
      icon:<PiSignInBold className='text-[1.2rem]'/>,
      link:'/',
    },
    
    {
      name:'Help',
      icon:<LiaHandsHelpingSolid className='text-[1.2rem]'/>,
      link:'/',
    } ,
  ];

  return (
    <> 
      <div className="black-overlay w-full h-full fixed duration-500" style={{
        opacity: toggle ? 1: 0,
        visibility: toggle ? 'visible' : 'hidden'
      }}>
          <div className="w-[500px] bg-white h-full absolute duration-700"
          style={{
            left: toggle?'0%': '-100%',

          }}
          >
          <ImCross onClick={handleToggle} className='text-[2rem] text-[#79e8f0] absolute top-5 right-5 cursor-pointer border-2 border-amber-500 p-1 rounded-full'/>
          </div>
      </div>
      <header className='p-3 shadow-xl sticky top-0 bg-amber-50 z-10'>
     <div className='max-w-[1200px] mx-auto flex justify-between items-center'>
       <div>
          <div className='flex gap-2 items-center '>
          <img src="/public/images/swiggy.png" alt="logo" className='max-w-[100px]'/>
        <h1 className='text-3xl font-bold text-center text-orange-600'>SWIGGY</h1>
        </div>
        <div className='ml-28'>
          <span className='font-bold border-b-[3px] border-[black] hover:text-orange-600'>Ratanada</span> Jodpur,Rajasthan, India <RxCaretDown onClick={handleToggle} className='inline text-[1.2rem] text-orange-600 font-bold'/>

        </div>
      </div>
       <nav className='flex list-none gap-4 justify-end'>
          {
            links.map((link,i)=>(
              <li key={i} className='flex gap-2 items-center hover:text-orange-600'>
                {link.icon}
                {link.name}
                {link.sup && <sup className='text-[0.8rem]'>{link.sup}</sup>}
              </li>
            ))
          }
        
       </nav>
     </div>
    </header>
    </>
  )
}

export default Header
