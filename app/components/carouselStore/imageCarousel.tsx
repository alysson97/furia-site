'use client';
import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

/*https://github.com/MohIdrees-Mohammadi/Image-Slider/blob/main/app.js */
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  function backgroundUrl(url:any){
    const estilo = {
      backgroundImage: `url(${url})`,
    };
  
    return estilo;
  }

  return (
    <div className='slider'>
      <Slider {...settings}>
        {images.map((image:any, index:any) =>{
          /* console.log(image); */
          return(
            <div
              key={index}
            >
              <div
                style={backgroundUrl(image.item.src)}
                className={`store-carousel-image cursor-pointer py-20 min-w-56 md:min-w-96 grayscale hover:grayscale-0 ease-in duration-300`}
              >
                <div className="store-carousel-img-txt ml-2 md:ml-8 md:max-w-10 w-6  md:w-14">
                  <Image
                    src={image.nome.src}
                    alt={`Slide ${index}`}
                    width={100}
                    height={100}
                    style={{height:"auto", width:"auto"}}
                  />
                </div>
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