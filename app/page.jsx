'use client'

// untuk hosting https://chatgpt.com/c/673fe638-a834-8011-9c82-ae478ba39f37

// design https://www.figma.com/design/wDqkuMqPNtsFSGaoyWvTaV/FigmaToNext?node-id=0-1&t=DKAGhkqvtXsZdb8M-0

import React, {useEffect, useState} from "react";
 

import Image from "next/image"; 
import Navbar from "./components/Navbar";   
import Hero from "./components/Hero";
import {CategoryCard, DealsContainer, AboutCities, FaqContainer, SocialLink, FooterLink} from "./components/ComponentsContainer";  
 
// swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import {Swiper, SwiperSlide} from 'swiper/react';  
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import dynamic from "next/dynamic"; 

const SwiperDeals1 = dynamic(() => import("./components/SwiperDeals1"), {
  ssr: false,
});

const SwiperDeals2 = dynamic(() => import("./components/SwiperDeals2"), {
  ssr: false,
});

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Fungsi untuk scroll ke atas
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-[20px] right-[20px] w-[45px] h-[45px] bg-black flex_center rounded-full ${isVisible ? "block" : "none"} z-[9999]`} 
    > 
      <span className="w-full h-full  ">
      <Image
                src="icons/backToTop.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-full h-full'
            />
      </span>
    </button>
  );
}

export default function Home() { 

  return (

    <main className="w-full h-auto relative flex flex-col items-center">
      
    <BackToTopButton />
     
     {/* hero and navbar */}
      <section className="hero bg-[#1A1A1A] flex flex-col items-center h-auto ">
        
        {/* bg gradient */}
        <span className="z-0 absolute hero_gradient left-[10%] top-[10%] w-[100px] h-[100px] rounded-full"></span>

        {/* navbar */}
        <Navbar/> 

        {/* hero */}
        <Hero/> 

        
      </section>

     {/* how it work */}
     <section className="h-auto   flex_col_center gap-10 ">
      
      {/* title */}
      <div className="title w-full relative flex_center flex-col gap-3 text-center px-4">
        <h2 className="font_title leading-[1] font-bold">How It works? Find a perfect home</h2>
        <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      
      {/* how step */}
      <div className="w-full relative flex_center flex-wrap gap-10 xl:gap-28">

        <div className="flex_col_center gap-4 w-[287.79px] text-center">

          <div className="icon flex_center bg_secondary h-[80px] w-[80px] rounded-md">
          <Image
                src="/icons/howWork1.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[40%]  h-auto'
            />
          </div>
          
          <h3 className="font_large font-bold">Find Real Estate</h3>
          
          <p>Sumo petentium ut per, at his wisim utinam
          adipiscing. Est ei graeco</p>

        </div>

        <div className="flex_col_center gap-4 w-[287.79px] text-center">

          <div className="icon flex_center bg_secondary h-[80px] w-[80px] rounded-md">
          <Image
                src="/icons/howWork2.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[40%]  h-auto'
            />
          </div>
          
          <h3 className="font_large font-bold">Meet Relator</h3>
          
          <p>Sumo petentium ut per, at his wisim utinam
          adipiscing. Est ei graeco</p>

        </div>

        <div className="flex_col_center gap-4 w-[287.79px] text-center">

          <div className="icon flex_center bg_secondary h-[80px] w-[80px] rounded-md">
          <Image
                src="/icons/howWork3.svg"
                alt="Logo"
                width={0}  
                height={0} 
                className='object-contain w-[40%]  h-auto'
            />
          </div>
          
          <h3 className="font_large font-bold">Take The Keys</h3>
          
          <p>Sumo petentium ut per, at his wisim utinam
          adipiscing. Est ei graeco</p>

        </div>

      </div>

     </section>

     {/* categories */}
     <section className="h-auto flex_col_center gap-10 ">
      
      {/* top section */}
      <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
        
        {/* title */}
          <div className="flex flex-col max-lg:gap-4">
            <h2 className="font_title leading-[1] font-bold">Featured Categories</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

            <p className="font-bold">View All Categories</p>

            <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[20px] h-auto'
            />

          </div>

      </div>
      
      {/* categories */}
      <div className="w-full relative flex_center flex-wrap gap-10 xl:gap-6 min-[1400px]:gap-10  min-[1800px]:gap-28 px-2">

      <CategoryCard 
        iconSrc="/icons/categori1.svg"
        title="Town House"
        properties={2}
      />

      <CategoryCard 
        iconSrc="/icons/categori2.svg"
        title="Modern Villa"
        properties={10}
      />
      <CategoryCard 
        iconSrc="/icons/categori3.svg"
        title="Apartment"
        properties={3}
      />
      <CategoryCard 
        iconSrc="/icons/categori4.svg"
        title="Office"
        properties={3}
      />
      <CategoryCard 
        iconSrc="/icons/categori5.svg"
        title="Single Family"
        properties={5}
      />
      <CategoryCard 
        iconSrc="/icons/categori6.svg"
        title="Shop House"
        properties={2}
      />

      </div>

     </section>
     
     {/* deals */}
     <section className="h-auto flex_col_center gap-10  ">
      
        {/* top section */}
        <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
          
          {/* title */}
            <div className="flex flex-col max-lg:gap-4">
              <h2 className="font_title leading-[1] font-bold">Discover Our Best Deals</h2>
              <p className="font_normal sub_title">Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

              <p className="font-bold">View All Properties</p>

              <Image
                  src="icons/arrow.svg"
                  alt="arrow"
                  width={0}  
                  height={0} 
                  className='object-contain w-[20px] h-auto'
              />

            </div>

        </div>
        
        {/* deals container */}
        <div className="flex_center relative w-full h-auto">

        {/* <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="max-w-[1900px]" 
        slidesPerView={3}
        breakpoints={{
        0: {
          slidesPerView: 1,
        },
        400: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      }} 
      pagination={{ clickable: true }} 
      onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(i) => console.log('slide change')}
      >
          <SwiperSlide>

            <DealsContainer
            imageSrc={'/images/deals1.webp'}
            title='Skyper Pool Apartment'
            location='1020 Bloomingdale Ave'
            bed='4'
            bathroom='2'
            wide='450'
            price='$280,000'
            aboutDeals='For Sale'
            />

          </SwiperSlide>
          <SwiperSlide>
            
            
          <DealsContainer
            imageSrc={'/images/deals2.webp'}
            title='North Dillard Street'
            location='4330 Bell Shoals Rd'
            bed='4'
            bathroom='2'
            wide='400'
            price='$250'
            isRent={true}
            aboutDeals='For Rent'
            />

          </SwiperSlide>

          <SwiperSlide>

              <DealsContainer
                imageSrc={'/images/deals3.webp'}
                title='Eaton Garth Penthouse'
                location='7722 18th Ave, Brooklyn'
                bed='4'
                bathroom='2'
                wide='450'
                price='$180,000'
                aboutDeals='For Sale'
                isFeatured={true}
                />

          </SwiperSlide>

          <SwiperSlide>Slide 4</SwiperSlide>

          <SwiperSlide>Slide 5</SwiperSlide>

          <SwiperSlide>Slide 6</SwiperSlide>
     
       </Swiper> */}
       
       <SwiperDeals1/>
          
        </div>

     </section>

     {/* number */}
     <section className="w-full  relative h-auto flex_center">

        <div className="bg_secondary rounded-xl w-[90%] h-auto lg:h-[300px] max-w-[2000px] flex_between px-4 lg:px-6 min-[1700px]:px-20 flex-col lg:flex-row max-lg:py-4 max-lg:text-center gap-10">
          
          <div className="flex_itemsStartColmn">
            <h4 className="font-bold font_title">Take a look at our numbers</h4>
            <p className="font_normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex_center gap-5 min-[1600px]:gap-10  flex-wrap">

            <div className="flex_itemsStartColmn">
              <p className='font_title font-bold'>99%</p>
              <p className="font_small">Customer satisfaction</p>
            </div>

            <div className="flex_itemsStartColmn">
              <p className='font_title font-bold'>50M+</p>
              <p className="font_small">In property sales</p>
            </div>

            <div className="flex_itemsStartColmn">
              <p className='font_title font-bold'>2,600+</p>
              <p className="font_small">Successful sales</p>
            </div>

          </div>

        </div>

     </section>
     
     {/* find the properties */}
     <section className="w-full flex_center  flex-col gap-20">

      {/* top section and title*/}
      <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
        
        {/* title */}
          <div className="flex flex-col max-lg:gap-4">
            <h2 className="font_title leading-[1] font-bold">Find Properties in These Cities</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>

          <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

            <p className="font-bold">View All Cities</p>

            <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[20px] h-auto'
            />

          </div>

      </div>

      {/* content  container */}
      <div className="flex_center flex-wrap relative w-full gap-2 sm:gap-4 h-auto lg:h-[500px] min-[1600px]:h-[668px] max-w-[1900px]">
        
        {/* column 1 */}
        <div className="min-w-[200px] w-[47%] lg:w-[28%] h-[370px] lg:h-full rounded-2xl overflow-hidden flex_center relative">
        
          {/* image */}
          <Image
                  src="/images/cities1.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />

          {/* about cities */} 
          <AboutCities
            properties='8'
            cities='New York'
          />

        </div>

        {/* column 2 */}
        <div className="min-w-[200px] w-[47%] lg:w-[28%] h-[370px] lg:h-full  overflow-hidden flex justify-between items-center flex-col relative max-[400px]:flex-row max-[400px]:w-full max-[400px]:justify-center max-[400px]:gap-4 max-[400px]:h-[200px]">
        
        {/* content 1 */}
        <div className="relative w-full rounded-2xl h-[48%] overflow-hidden flex_center max-[400px]:w-[47%] max-[400px]:h-full">
            {/* image */}
            <Image
                  src="/images/cities2.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='2'
            cities='Chicago'
          />

        </div>
 
        
        {/* content 2 */}
        <div className="relative w-full rounded-2xl h-[48%] overflow-hidden flex_center max-[400px]:w-[47%] max-[400px]:h-full">
       
            {/* image */}
          <Image
                  src="/images/cities4.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='0'
            cities='San Diego'
          />

        </div>
 

        </div>

        {/* column 3 */}
        <div className="min-w-[200px] w-[98%] lg:w-[28%] h-[200px] lg:h-full  overflow-hidden flex justify-center lg:justify-between items-center flex-col max-lg:flex-row max-lg:gap-4 relative">
        
        {/* content 1 */}
        <div className="relative w-[48%] lg:w-full rounded-2xl h-full lg:h-[48%] overflow-hidden flex_center">
            {/* image */}
            <Image
                  src="/images/cities3.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='1'
            cities='Los Angeles'
          />

        </div> 
        
        {/* content 2 */}
        <div className="relative w-[48%] lg:w-full rounded-2xl h-full lg:h-[48%] overflow-hidden flex_center">
       
            {/* image */}
          <Image
                  src="/images/cities5.webp"
                  alt="cities"
                  width={1000}  
                  height={1000} 
                  className='object-cover w-full h-full relative '
          />
          
          <AboutCities
            properties='3'
            cities='Florida'
          />

        </div>
 

        </div>
        
      </div>

     </section>

     {/* clients */}
     <section className="w-full flex_center flex-col gap-6">
        
        <h3 className="text-center font_normal px-4">Thousands of world’s leading companies trust Space</h3>

        <div className="w-full flex_center gap-14 flex-wrap px-7">
        
          <a href="#amazon" className="relative">
              <Image
              src='/images/amazon.webp'
              alt='amazon'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>
        
          <a href="#amd" className="relative">
              <Image
              src='/images/amd.webp'
              alt='amd'
              width={1000}  
              height={1000} 
              className='object-contain w-[90px] h-auto relative'
          />
          </a>
        
          <a href="#cisco" className="relative">
              <Image
              src='/images/cisco.webp'
              alt='cisco'
              width={1000}  
              height={1000} 
              className='object-contain w-[90px] h-auto relative'
          />
          </a>
        
          <a href="#dropcam" className="relative">
              <Image
              src='/images/dropcam.webp'
              alt='dropcam'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>
        
          <a href="#logitech" className="relative">
              <Image
              src='/images/logitech.webp'
              alt='logitech'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>
        
          <a href="#spotify" className="relative">
              <Image
              src='/images/spotify.webp'
              alt='spotify'
              width={1000}  
              height={1000} 
              className='object-contain w-[100px] h-auto relative'
          />
          </a>

        </div>

     </section>

      {/* deals */}
      <section className="h-auto flex_col_center gap-10  bg-[#1f4b43] text-white py-10 lg:py-36">
      
      {/* top section */}
      <div className="title relative flex items-end justify-between gap-3 text-center lg:text-left px-4 w-[95%] lg:w-[90%] max-w-[1700px]  max-lg:flex-col max-lg:items-center max-lg:gap-4">
        
        {/* title */}
          <div className="flex flex-col max-lg:gap-4">
            <h2 className="font_title leading-[1] font-bold">Discover Our Best Deals</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet.</p>
          </div>

          <div className="flex_center font_small gap-2 cursor-pointer max-lg:w-full">

            <p className="font-bold">View All Properties</p>

            <Image
                src="icons/arrow_white.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[20px] h-auto'
            />

          </div>

      </div>
      
      {/* deals container */}
      <div className="flex_center relative w-full h-auto deals2">
        
        <SwiperDeals2/>
        
      </div>

     </section>

      {/* meet our tean */}
      <section className="h-auto   flex_col_center gap-10 ">
      
        {/* title */}
        <div className="title w-full relative flex_center flex-col gap-3 text-center px-4">
          <h2 className="font_title leading-[1] font-bold">Meet Our Team Of Experts</h2>
          <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* teams */}
       <div className="relative w-full flex_center gap-7 flex-wrap">
        
        {/* person 1 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">John Powell</p>
            <p className="font_small">Service Support</p>
          </div>
       
        </div>
        
        {/* person 2 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team2.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">Thomas Powell</p>
            <p className="font_small">Marketing</p>
          </div>
       
        </div>
        
        {/* person 3 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team3.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">Tom Wilson</p>
            <p className="font_small">Designer</p>
          </div>
       
        </div>
        
        {/* person 4 */}
        <div className="flex_itemsStartColmn gap-4 w-1/3 sm:w-1/4 lg:w-1/6 max-w-[350px]">
       
          <Image
            src='/images/team4.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />

          {/* name */}
          <div className="relative">
            <p className="font-bold font_normal md:font_large">Samuel Palmer</p>
            <p className="font_small">Marketing</p>
          </div>
       
        </div>

       </div>

     </section>

     {/* work with us */}
     <section className="relative w-full h-auto flex_center max-w-[2000px] flex-col lg:flex-row max-lg:gap-8">

      {/* image */}
      <div className="w-full md:w-1/2 flex_center relative">
      <Image
            src='/images/workImage.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[100%]  h-auto rounded-md'
          />
      </div>

      {/* about work */}
      <div className="w-full lg:w-1/2 flex_center relative ">

      <div className=" w-[90%] md:w-[80%] min-[1800px]:w-[70%] flex flex-col items-start gap-6 max-lg:items-center">

        <div className="title w-full relative   text-left ">
          <h2 className="font_title leading-[1.1] font-bold">Why You Should Work
          With Us</h2> 
        </div>

        <p className="font_medium">Pellentesque egestas elementum egestas faucibus sem. Velit nunc egestas ut morbi. Leo diam diam nibh eget fermentum massa pretium. Mi mauris nulla ac dictum ut mauris non.</p>

        <div className="w-full flex justify-between  ">
          
          <div className="w-[45%] ">
            <h2 className="font-bold font_large mb-4">Buy or Rent Homes</h2>
            <p className="leading-[1.2] md:leading-[1.7] font_small">We sell your home at the best market
            price and very quickly as well.</p>
          </div>
          
          <div className="w-[45%] ">
            <h2 className="font-bold font_large mb-4">Trusted by Thousands</h2>
            <p className="leading-[1.2] md:leading-[1.7] font_small">We offer you free consultancy to get a
            loan for your new home.</p>
          </div>

        </div>

        <button className="bg_secondary rounded-xl px-7 py-3 flex_center gap-3 duration-200 hover:opacity-80">
          <span className="font_small font-bold">Learn More</span>
          <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[15px] h-auto'
            />
        </button>

      </div>

      </div>

     </section>

     {/* testimonials */}
     <section className="bg-[#1a1a1a] flex_center gap-8 py-12 max-w-[2000px] max-lg:flex-col-reverse">
        
        <div className="testimoni_container w-full md:w-1/2 flex_center relative flex-col">
            
            <div className="testimoni_word w-[90%] md:w-[500px] flex_itemsStartColmn gap-4">
               
               <div className="profile flex_between w-full">

                <div className="profileUser flex_center gap-4 max-md:flex-col max-md:items-start">
                
                <Image
                  src='/images/profileTestimoni1.webp'
                  alt='client'
                  width={100}  
                  height={100} 
                  className='object-contain w-[80px] lg:w-[100px] h-auto relative'
                   />

                   <div className="text-white">
                      <p className="font_xl_large font-bold">Cameron Williamson</p>
                      <p className="font_small">Designer</p>
                   </div>

                </div>

                <div className="icons">
                <Image
                  src='/icons/testimoniWord.svg'
                  alt='client'
                  width={100}  
                  height={100} 
                  className='object-contain w-[30px] md:w-[50px] lg:w-full h-auto relative'
                   />
                </div>

               </div>

               <div className="w-full ">
                  <p className="text-white"> Searches for multiplexes, property comparisons, and the loan estimator. Works great. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dores.</p>
               </div> 

            </div>
 

        </div>
        
        <div className="testimoni_image w-[90%] md:w-1/2 flex_center relative">
        <Image
            src='/images/testimoniImg.webp'
            alt="team"
            width={1000}  
            height={1000} 
            className='object-contain w-[80%]  h-auto rounded-xl'
          />
        </div>

     </section>

     {/* question */}
     <section className="flex_col_center">
          
          {/* title */}
          <div className="title w-full relative flex_center flex-col gap-3 text-center px-4">
            <h2 className="font_title leading-[1] font-bold">Hove More Question?</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        {/* faq container */}
        <div className="w-[90%] lg:w-[850px] flex_col_center mt-[100px] gap-6">
           

          <FaqContainer question={"What methods of payments are supported?"} answer={`
            We accept a variety of payment methods to ensure convenience and flexibility for our clients. These include: 
            1. Bank Transfer: Secure and reliable, ideal for larger transactions.
            2. Credit and Debit Cards: Widely accepted for smaller payments, such as deposits or service fees.
            3. Certified Check or Bank Draft: Common for initial payments and final settlements.
            4. Cash Payment: Accepted for certain smaller fees (where permitted by law).
            `}/>

          <FaqContainer question={"Can I cancel at anytime?"} answer={`
            Cancellation policies depend on the type of service or agreement you have with us:
            For Service Agreements: You can request cancellation at any time. However, please note that fees for services already rendered may apply.
            For Real Estate Transactions: Once a contract is signed (e.g., purchase or lease agreements), cancellation is subject to the terms outlined in that agreement. Some contracts may include penalties or conditions for cancellation.
            For Subscriptions or Property Listings: You can cancel these services anytime, and we’ll assist you with the process. Refunds, if applicable, will follow the terms stated in our agreement.
`}/>

          <FaqContainer question={"How do I get a receipt for my purchase?"} answer={`Once your purchase is completed, a receipt will be automatically sent to the email address you provided during checkout. If you didn’t receive it, please check your spam or junk folder. You can also download a copy of your receipt from your account dashboard under the "Purchase History" section. For further assistance, feel free to contact our support team.`}/>

          <FaqContainer question={"Which license do I need?"} answer={`
            The type of license you need depends on how you plan to use the product:
            Personal Use: Choose the standard license for individual projects or non-commercial purposes.
            Business or Commercial Use: Select the extended license, which covers projects intended for resale or public distribution.
            Exclusive Use: Contact us if you require an exclusive license for unique rights.`}/>

          <FaqContainer question={"How do I get access to a theme I purchased?"} answer={`After completing your purchase, you’ll receive a download link in your email confirmation. Alternatively, you can access your purchased themes anytime by logging into your account and navigating to the "Downloads" section. If you encounter any issues, our support team is available to assist you promptly.`}/>

        </div>

     </section>

     {/* join us */}
     <section className="flex_items lg:px-[10%] max-lg:flex-col gap-5">

       {/* title */}
       <div className="title w-full relative flex flex-col max-lg:items-center gap-3 text-center lg:text-left px-4">
            <h2 className="text-[30px] leading-[1] font-bold">Become a Real Estate Agent</h2>
            <p className="font_normal sub_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>

        <div className="relative w-full lg:w-[30%] flex_items justify-center lg:justify-end">
        <button className="bg_secondary relative rounded-xl px-7 py-3 flex_center gap-3 duration-200 hover:opacity-80">
          <span className="font_small font-bold">Register Now</span>
          <Image
                src="icons/arrow.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[15px] h-auto'
            />
        </button>
        </div>

     </section>

     {/* footer */}
     <footer className="relative w-full bg-[#1f4b43] py-[10%] lg:py-[3%] px-[5%]  flex_col_center gap-10 max-w-[100%] overflow-x-hidden">

      {/* logo & social */}
      <div className="w-full flex_between flex-wrap max-lg:justify-center max-lg:gap-5">

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
      
      {/* social */}
      <div className="flex_center gap-4 md:gap-5 max-lg:w-full">
        
        <p className="text-[15px] md:font_xl_large font-bold text-white">Follow Us</p>

        <SocialLink links={"#face"} icons={'/icons/facebook.svg'} alt={"facebook"}/>
   
        <SocialLink links={"#twitter"} icons={'/icons/twitter.svg'} alt={"twitter"}/>
      
        <SocialLink links={"#instagram"} icons={'/icons/instagram.svg'} alt={"instagram"}/>
      
        <SocialLink links={"#linkedin"} icons={'/icons/linkedin.svg'} alt={"linkedin"}/>

      </div>

      </div>

      {/* lines */}
      <div className="w-full h-[.5px] bg-white opacity-20 "></div>

      {/* links container*/}
      <div className="w-full flex justify-center lg:justify-between flex-wrap gap-4 lg:gap-0">


        {/* contact form */}
        <div className=" w-full md:w-[300px] min-[1500px]:w-[400px] flex_itemsStartColmn gap-5">
          
          <p className="w-full text-left font_xl_large opacity-60 text-white tracking-[.05rem]">Subscribe</p>

          <div className="inputForm h-[70px] w-full relative border-b-[#ffffff91] border-b-[1px] flex_center">

            <input type="text" name="email" id="email" className="emailForm absolute w-full h-full text-white bg-transparent font_small" placeholder="Your e-mail"/>

            <button className="absolute right-[0%] py-3 px-7 text-white bg-[#ffffff2d] rounded-full flex_center gap-4">
              
              <p>Send</p>

              <Image
                src="icons/arrow_white.svg"
                alt="arrow"
                width={0}  
                height={0} 
                className='object-contain w-[15px] h-auto'
            />

            </button>

          </div>

          <p className="font_small text-white text-center">Subscribe to our newsletter to receive our weekly feed.</p>

        </div>

        {/* Discover link */}
        <div className="w-[45%] lg:w-auto flex flex-col gap-3">

          {/* title */}
          <p className="text-[16px] min-[1600px]:text-[19px] text-[#ffffff78]">Discover</p>
          
          {/* links */} 
          <FooterLink link={'miami'} text={'Miami'}/> 
          <FooterLink link={'new_york'} text={'New York'}/>  
          <FooterLink link={'Chicago'} text={'Chicago'}/>   
          <FooterLink link={'Florida'} text={'Florida'}/>   
          <FooterLink link={'Los Angeles'} text={'Los Angeles'}/>   
          <FooterLink link={'San Diego'} text={'San Diego'}/>   
          
        </div>

        {/* Quick Links link */}
        <div className="w-[45%] lg:w-auto flex flex-col gap-3">

          {/* title */}
          <p className="text-[16px] min-[1600px]:text-[19px] text-[#ffffff78]">Quick Links</p>
          
          {/* links */} 
          <FooterLink link={'About'} text={'About'}/> 
          <FooterLink link={'Contact'} text={'Contact'}/>  
          <FooterLink link={'FAQ’s'} text={'FAQ’s'}/>   
          <FooterLink link={'Blog'} text={'Blog'}/>   
          <FooterLink link={'Pricing Plans'} text={'Pricing Plans'}/> 
          <FooterLink link={'Privacy Policy'} text={'Privacy Policy'}/> 
          <FooterLink link={'Terms & Conditions'} text={'Terms & Conditions'}/> 
          
        </div>

         {/* Contact Us link */}
        <div className="w-[45%] lg:w-auto flex flex-col gap-3">

          {/* title */}
          <p className="text-[16px] min-[1600px]:text-[19px] text-[#ffffff78]">Contact Us</p>

          <FooterLink link={'hi@justhome.com'} text={'hi@justhome.com'}/> 
          <FooterLink link={'(123) 456-7890'} text={'(123) 456-7890'}/> 

        </div>

         {/* Our Address link */}
        <div className="w-[45%] lg:w-auto flex flex-col gap-3">

          {/* title */}
          <p className="text-[16px] min-[1600px]:text-[19px] text-[#ffffff78]">Our Address</p>

          <FooterLink link={'address'} text={'99 Fifth Avenue, 3rd Floor'}/> 
          <FooterLink link={'address'} text={'San Francisco, CA 1980'}/> 

        </div>
      
         {/* get app link */}
        <div className="w-full lg:w-auto flex flex-col gap-3 max-lg:items-center">

          {/* title */}
          <p className="text-[16px] min-[1600px]:text-[19px] text-[#ffffff78]">Get the app</p>

          {/* app links */}
          <a href="https://www.apple.com/store" target="_blank" className="app duration-200 hover:scale-90 flex_center relative rounded-lg bg-[#ffffff28] w-[50%] min-w-[170px] md:w-[180px] min-[1500px]:w-[210px] h-[58px] min-[1500px]:h-[63px]  gap-4">
          
            <div className="icon h-full flex_center">
              
              <img src='/icons/appStore.svg' alt="appStoreIcon" className="h-[50%] w-auto object-contain"/>
            </div>

            <span className="h-[50%] w-[0.2px] bg-[#ffffff3d]"></span>

            <div className="aboutApp text-white">
              <p className="text-[10px] min-[1500px]:text-[13px] ">Download on the</p>
              <b className="text-[14px] min-[1500px]:text-[16px]">Apple Store</b>
            </div>

          </a> 
      
          {/* play store */}
          <a href="https://play.google.com/store" target="_blank" className="app duration-200 hover:scale-90 flex_center relative rounded-lg bg-[#ffffff28] w-[50%] min-w-[170px] md:w-[180px] min-[1500px]:w-[210px] h-[58px] min-[1500px]:h-[63px]  gap-4">
          
            <div className="icon h-full flex_center">
              
              <img src='/icons/googleStore.svg' alt="googleStoreIcon" className="h-[50%] w-auto object-contain"/>
            </div>

            <span className="h-[50%] w-[0.2px] bg-[#ffffff3d]"></span>

            <div className="aboutApp text-white">
              <p className="text-[10px] min-[1500px]:text-[13px] ">Download on the</p>
              <b className="text-[14px] min-[1500px]:text-[16px]">Play Store</b>
            </div>

          </a> 

        </div>

      </div>

      {/* lines */}
      <div className="w-full h-[.5px] bg-white opacity-20 "></div>

      {/* by */}
      <p className="text-center text-[15px] text-white">Copyright © 2024. JustHome</p>

     </footer>

    </main>

  );
}
