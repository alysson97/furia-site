import Image from "next/image";
import seta from "@/public/images/seta.png";

interface ArrowProps{
  sectionId:string
}
export default function Arrow({ sectionId }:ArrowProps){
  return (
    <div className="absolute animate-bounce bottom-2 left-1/2 transform -translate-x-1/2 z-20 md:opacity-55 opacity-0">
      <a href={sectionId} className="w-full cursor-pointer">
        <Image src={seta} alt="" height={100}/>
      </a>
    </div>
  );
}