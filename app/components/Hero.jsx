"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  return (
    <di
      id="home"
      className="h-auto z-[1] lg:h-[650px] w-full relative flex items-center justify-center flex-wrap xl:justify-end max-w-[2000px] pt-[100px] overflow-hidden lg:mt-20 min-[1100px]:mt-0 max-lg:flex-col-reverse"
    >
      {/* left */}
      <div className="flex_itemsStartColmn relative w-[50%] min-[1500px]:w-[45%] text-white pl-8 gap-6 max-lg:w-full max-lg:items-center max-lg:py-5 max-lg:pl-4 max-lg:px-4">

        <button className="bg-transparent px-6 py-3 border-white border-[1px] rounded-lg font_super_small black_btn">
          LET US GUIDE YOUR HOME
        </button>

        <h1 className="text-[40px] min-[1700px]:text-[60px] font-bold max-lg:text-center leading-[1]">
          Find Your <span className="text-[#e7c873]">Dream</span> Home.
        </h1>

        <p className="font_small max-lg:text-center">
          From as low as $10 per day with limited time offer discounts
        </p>

        {/* input */}
        <div className="flex_itemsStartColmn gap-6 w-[90%] relative">

          {/* choise */}
          <div className="flex_items gap-10">
            <div className="flex_center relative">
              <p className="font_normal leading-[2]">Sale</p>
              <span className="absolute w-full h-[2px] bg-white bottom-0"></span>
            </div>

            <p className="font_normal leading-[2]">Rent</p>
          </div>

          {/* input */}
          <div className="w-full h-[55px] flex_center overflow-hidden relative">

            <input type="text" className="w-full h-full bg-white px-6  rounded-[50px] text-black placeholder:text-black" placeholder="Enter Name, Keywords..."/>

            <div className="search_btn h-[52px] w-[52px] bg_secondary absolute rounded-full right-1 cursor-pointer flex_center duration-200 hover:scale-90">
            <Image
                  src="/icons/search.svg"
                  alt="Logo"
                  width={0}  
                  height={0} 
                  className='object-contain w-[50%] h-auto'/>
            </div>

          </div>
        </div>
        
        {/* view property */}
        <div className="flex_items gap-4 w-full max-lg:justify-center">
      
        <Image
          width={100}
          height={100}
          src="/images/property_hero.png"
          alt=""
          className="w-[150px] h-auto object-cover max-h-[100%]"
        />

        <p className="font_small">View Property Type</p>

        </div>

      </div>

      {/* right */}
      <div className="flex_center relative w-[50%] h-full max-sm:w-full max-lg:w-[50%]">
        <Image
          width={1100}
          height={1100}
          src="/images/hero_img.png"
          alt=""
          className="w-full h-auto object-cover max-h-[100%]"
        />
      </div>
    </di>
  );
};

export default Hero;
