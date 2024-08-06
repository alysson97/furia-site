import Image from "next/image";
import Header from "./modulos/header";
import Sections from "./modulos/sections";
import seta from "@/public/images/seta.png";
import DownArrow from "@/app/components/paginationArrow";
import Furia from "@/public/images/FURIA3.png";

export default function App(){
  
  return (
    <>
      <Header/>
      <main>
        <div className="fixed z-0 right-0 p-8 md:opacity-60 opacity-20">
          <Image 
            src={Furia} 
            alt=""
            /* width={150} */
            className="md:w-40 w-12"
            quality={100}
          />
        </div>
        <Sections/>    
      </main>
    </>
  );
}