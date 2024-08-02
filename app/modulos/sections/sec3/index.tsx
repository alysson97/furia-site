'use client';
import useStore from "@/app/components/context";
import CarouselJogos from "@/app/components/carouselJogos/imageCarousel";
import Jogos from "@/app/components/carouselJogos/caroseless";
/* import "./index.css"; */
import time1 from "@/public/images/time1.png";
import time2 from "@/public/images/time2.png";
import time3 from "@/public/images/time3.png";
import time4 from "@/public/images/time4.png";


import lol from "@/public/images/lol.jpg";
import r6 from "@/public/images/r6.jpg";
import csgo from "@/public/images/csgo.jpg";
import rocket from "@/public/images/rocket.jpg";


export default function App(){

  const jogosArr = [
    {id:1, item:lol,time: time1, nome:"League Of Legends", desc: "Lorem"},
    {id:2, item: r6,time: time2, nome:"Rainbow Six", desc: "Lorem"},
    {id:3, item: csgo,time: time3, nome:"Rocket league", desc: "Lorem"},
    {id:4, item:rocket,time: time4, nome:"Counter Strike", desc: "Lorem"}
  ]

  const imageClasses: { [key: string]: string } = {
    lol: "lol",
    r6: "r6",
    rocket: "rocket",
    csgo: "csgo"
  };
  const curImg = useStore((state)=> state.currentImage);
  const currentClass = curImg && imageClasses[curImg] ? imageClasses[curImg] : "";
  return (
    <>
      <section className={`sec3 h-screen border-y-8 border-yellow-500 ${currentClass}`} id="sec3">
        {/* <CarouselJogos images={jogosArr}/> */}
        <Jogos images={jogosArr}/>
      </section>
    </>
  );
}