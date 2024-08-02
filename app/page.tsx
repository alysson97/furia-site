import Image from "next/image";
import Header from "./modulos/header";
import Sections from "./modulos/sections";
import seta from "@/public/images/seta.png";
import Furia from "@/public/images/Furia.png";


export default function App(){
  
  return (
    <>
    <Header/>
    <main>
      <div className="fixed z-0 right-0 p-24">
        <Image 
        src={Furia} 
        alt=""
        width={150}
        />
      </div>
      <Sections/>
      
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 z-0">
        <div className="">
          <Image src={seta} alt="" width={70}/>
        </div>
      </div>
    </main>
    
    </>
  );
}