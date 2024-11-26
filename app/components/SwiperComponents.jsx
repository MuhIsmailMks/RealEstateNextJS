import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';  
import { Navigation, A11y, Pagination, Scrollbar } from "swiper/modules"; 
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { DealsContainer } from "./ComponentsContainer";

const SwiperDeals1 = () => {
  return (
    <>
       <Swiper 
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
     
       </Swiper>
    </>
  );
};
 

export default SwiperDeals1;
