'use client';
import React, { useEffect, useState } from 'react';
import useStore from '../context';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import lol from "@/public/images/lol.jpg";
import r6 from "@/public/images/r6.jpg";
import csgo from "@/public/images/csgo.jpg";
import rocket from "@/public/images/rocket.jpg";

interface ImageType {
  time:{src: string;}
  
}

interface ImageCarouselProps {
  images: ImageType[];
}

const imageNames: { [key: string]: string } = {
  lol: "League Of Legends",
  r6: "Rainbow Six",
  csgo: "Counter Strike",
  rocket: "Rocket League"
};

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images }) => {


  const [currentSlide, setCurrentSlide] = useState(0);

  const setCurrentImage = useStore((state) => state.setCurrentImage);

  const imageArr: string[] = ["lol", "r6", "csgo", "rocket"];

  const handleAfterChange = (index: number) => {
    setCurrentImage(imageArr[index/* -.5 */]);
    setCurrentSlide(index); 
  };

  const settings = {
    className: 'center',
    centerMode: true,
    focusOnSelect: true,
    infinite: true,
    centerPadding: '100px',
    slidesToShow: 2,
    speed: 500,
    swipeToSlide: true,
    arrows:false,
    afterChange: handleAfterChange,
  };

  return (
    <div className="flex items-center h-full">
          <div className="basis-1/2">
            <div className="texto-jogo px-12">
              <h1 className="pb-2">{imageNames[imageArr[currentSlide/* -.5 */]]}</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore amet nisi animi quaerat! Minima deleniti voluptatem harum sunt voluptatum veritatis praesentium alias rem laborum corporis? Quidem aperiam consectetur dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione, distinctio maxime ducimus expedita perspiciatis animi officia consequuntur ut odio a officiis? Dolores impedit officiis eaque sapiente dolorem expedita magnam?</p>
            </div>
          </div>
          <div className="flex items-center justify-center basis-1/2 overflow-hidden">
            <div className="flex items-center "></div>
              <div className='w-full h-full' /* className="card rounded outline outline-offset-2 outline-1 w-fit" */>
              <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className=''>
                  <div className='duration-500'>
                    <Image
                      src={image.time.src}
                      alt={`Slide ${index}`}
                      width={1000}
                      height={2000}
                      /* style={{
                        height: (currentSlide+.5) == index  ? '50vh' : '35vh',
                      }} */
                      className='slider-image'
                    />
                  </div>
                </div>
            
              ))}
            </Slider>
          </div>
        </div>
        </div>
    
  );
};

export default ImageCarousel;