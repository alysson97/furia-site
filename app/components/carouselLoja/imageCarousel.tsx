'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const ImageCarousel = ({ images }:any) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3.5,
    slidesToScroll: 1,
    swipeToSlide: true,
    arrows: false,
    afterChange: (index:any) => setCurrentSlide(index),
  };
  
  function backgroundUrl(url:any){
    const estilo = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      width: '100%',
      height: '600px' 
    };
  
    return estilo;
  }

  return (
    <div className='.slider'>
      <Slider {...settings}>
        {images.map((image:any, index:any) =>{
          /* console.log(image); */
          return(
            <div
              key={index}
            >
              <div
                style={backgroundUrl(image.item.src)}
                className={`py-20 min-w-96 grayscale hover:grayscale-0 ease-in duration-300`}
              >
                <Image
                  src={image.nome.src}
                  alt={`Slide ${index}`}
                  width={40}
                  height={70}
                  style={{height:"auto", width:"auto"}}
                />
              </div>
              
            </div>
          )
        } 
        )}
      </Slider>
    </div>
  );
};

export default ImageCarousel;