// import React from 'react'
// import { useState } from "react/cjs/react.production.min";
'use client'
import Image from "next/image"
import { useState } from 'react';

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };


  return (
    <div className="flex_center w-full  xl:h-auto  z-10 absolute top-0" >
      
      <div className="w-[95%] max-w-[1700px] flex_items py-6 max-sm:px-4">

        {/*  left */}
        <div className="w-full lg:w-[75%]  xl:w-[65%] flex_items max-lg:justify-between">
        
            {/* logo */}
            <div className="logo flex_items gap-4">

            <Image
                src="logo.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[25px] lg:w-[40px] h-auto'
            />

            <h3 className='text-white text-[16px] lg:text-[20px]'>JustHome</h3>

            </div>

            {/* links */}
            <ul className={`menu_links font_medium text-white ml-20 flex_center gap-7 absolute lg:relative max-lg:top-full max-lg:bg-[#1A1A1A] max-lg:left-0 max-lg:ml-0 max-lg:flex-col max-lg:w-full duration-200 ${isActive ? 'active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#Listings ">Listings </a></li>
                <li><a href="#Members">Members</a></li>
                <li><a href="#Blog">Blog</a></li>
                <li><a href="#Pages">Pages</a></li>
                <li><a href="#Contact">Contact</a></li>
                
                
                {/* hidden in desktop */}
                <li className='lg:hidden w-full flex_center flex-col gap-5'>

                  <div className="account flex_center ">
          
                  <Image
                  src="icons/account.svg"
                  alt="Logo"
                  width={0}  
                  height={0} 
                  className='object-contain w-[50px] h-auto'/>
  
                
                  </div>

                  <div className="property flex_center"> 

                    <button className="font_small rounded-full border-white border-[1px] py-2 px-4 black_btn">
                    Add Property
                    </button>
                    
                  </div>

                </li>

            </ul>

            {/* menu */}
            <div className="flex_center gap-8 text-white flex-wrap lg:hidden ">  
              <div className="contact flex_center gap-3">
              <Image
                  src="icons/phone.svg"
                  alt="Logo"
                  width={0}  
                  height={0} 
                  className='object-contain w-[20px] h-auto'/>

                  <p className="font_medium">+68 685 88666</p>
              </div>
              <div  onClick={handleToggle} className={`menu-button relative ${isActive ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
              </div>
            </div>

           
          

        </div>

        {/* right */}
        <div  className=" lg:w-[25%] xl:w-[35%] items-center justify-end gap-6 text-white hidden lg:flex max-xl:flex-col">

            <div className="contact flex_center gap-3">
            <Image
                src="icons/phone.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[20px] h-auto'/>

                <p className="font_medium">+68 685 88666</p>
            </div>

            <div className="account flex_center cursor-pointer rounded-full duration-300 hover:scale-90">
            <Image
                src="icons/account.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[50px] h-auto'/>
 
               
            </div>

            <div className="property flex_center"> 

               <button className="font_small rounded-full border-white border-[1px] py-2 px-4 black_btn">
               Add Property
               </button>
               
            </div>

              {/* menu button */}
              {/* <button className="">

              </button> */}

        </div>

      </div>

    </div>

  )
}

export default Navbar
