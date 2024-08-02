'use client';
import React, { useEffect, useState } from 'react';
import useStore from '../context';
import Image from 'next/image';
import lol from "@/public/images/lol.jpg";
import r6 from "@/public/images/r6.jpg";
import csgo from "@/public/images/csgo.jpg";
import rocket from "@/public/images/rocket.jpg";


const imageNames = [
  "League Of Legends",
  "Rainbow Six",
  "Counter Strike",
  "Rocket League"
];

const ImageCarousel = ({ images }:any) => {

  function backgroundUrl(url:any){
    const estilo = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    };
  
    return estilo;
  }

  const [index, setIndex] = useState(0);
  const setCurrentImage = useStore((state) => state.setCurrentImage);
  
  const imageArr: string[] = ["lol","rocket", "r6", "csgo","lol" ];

  useEffect(() => {
    const interval = setInterval(() => {
      if(index<3){
        setCurrentImage(imageArr[index])
        setIndex((previndex) => previndex + 1);
      
      }else{
        setIndex(0);
      }
    }, 8000);
    return () => clearInterval(interval);
  });

  return (
    <div className="flex items-center h-full">
      <div className="md:basis-1/2">
        <div className="texto-jogo px-12">
          <h1 className="pb-2">{imageNames[index]}</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolore amet nisi animi quaerat! Minima deleniti voluptatem harum sunt voluptatum veritatis praesentium alias rem laborum corporis? Quidem aperiam consectetur dolorum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione, distinctio maxime ducimus expedita perspiciatis animi officia consequuntur ut odio a officiis? Dolores impedit officiis eaque sapiente dolorem expedita magnam?</p>
          <button className='btn'>Conheça nosso time</button>
        </div>
        
      </div>
      <div className="flex items-center justify-center md:basis-1/2 md:block hidden">
        <div
          className='image-change p-48'
          style={backgroundUrl(images[index]?.time.src)}
        >
          {/* <Image
            src={images[index]?.time.src}
            alt=''
            width={100}
            height={100}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;