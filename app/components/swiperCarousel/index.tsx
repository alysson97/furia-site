'use client'
import React, { useRef, useState } from 'react';
import useStore from '@/app/store';
import {  Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import time1 from "@/public/images/time5-resized.png";
import time2 from "@/public/images/time2.png";
import time3 from "@/public/images/time3.png";
import time4 from "@/public/images/time1-resize.png";
import './index.css'
/* 
* import { Swiper as SwiperType } from 'swiper/types';
* import { Navigation,Pagination } from "swiper/modules";
* import 'swiper/css/navigation';
* import 'swiper/swiper-bundle.css'
*/

export default function TeamCarousel(){

  const teamSlides = [time1,time2,time3,time4];
  const [activeIndex, setActiveIndex] = useState(0);
  const setCurrentImage = useStore((state)=>state.setCurrentImage);
  
  const handleSlideChange = (swiper:any) => {
    setActiveIndex(swiper.realIndex);
    setCurrentImage(swiper.realIndex);
  };

  return(
    <>
      <Swiper
        navigation
        pagination
        loop
        slidesPerView={2.5}
        spaceBetween={10}
        breakpoints={{720:{slidesPerView:1.5, spaceBetween:30}}}
        /* onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={handleSlideChange} */
        onRealIndexChange={handleSlideChange}
        /* centeredSlides={true} */
      >
        {teamSlides.map((slide, index)=>{

          return (
            <SwiperSlide key={index}>
              <div className={`mb-14 slider-img-container ${activeIndex === index ? 'active' : ''}`}>
                <img src={slide.src} alt=''  className='w-full'/>
              </div>
                 
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
}
