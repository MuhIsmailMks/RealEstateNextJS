import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';  
import { Navigation, A11y, Pagination, Scrollbar } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { DealsContainer } from "./ComponentsContainer";


const swiperBreakpoints = {
    0: {
      slidesPerView: 1,
    },
    400: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };
  

const SwiperDeals1 = () => {
  return (
    <>
       <Swiper 
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        className="max-w-[1900px]" 
        slidesPerView={3}
        breakpoints={swiperBreakpoints} 
        pagination={{ clickable: true }}  
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
     
     
      <SwiperSlide>

          <DealsContainer
            imageSrc={'/images/deals4.png'}
            title='Aurora Skylodge'
            location='1457 Northern Lights Blvd, Anchorage'
            bed='6'
            bathroom='3'
            wide='480'
            price='$230,000'
            aboutDeals='For Sale' 
            />

      </SwiperSlide> 
     
     
      <SwiperSlide>

          <DealsContainer
            imageSrc={'/images/deals5.png'}
            title='Rustic Timber Retreat'
            location='987 Pine Hollow Lane, Boulder'
            bed='3'
            bathroom='1'
            wide='400'
            price='$120,000'
            aboutDeals='For Sale'
            isFeatured={true}
            />

      </SwiperSlide> 
     
      <SwiperSlide>

          <DealsContainer
            imageSrc={'/images/deals6.png'}
            title='Golden Prairie Inn'
            location='420 Sunset Meadow Way, Wichita'
            bed='9'
            bathroom='5'
            wide='650'
            price='$5,000'
            aboutDeals='For Rent' 
            isRent={true}
            />

      </SwiperSlide> 
     
     
       </Swiper>
    </>
  );
};
 

export default SwiperDeals1;
