import Image from "next/image";
import patrocinadores from "@/public/images/patrocinadores-nome.png";


export default function App(){
  return(
    <>
      <section className="sec6 py-24 flex items-center justify-center flex-col" id="sec6">
        <Image src={patrocinadores} alt=""/>
        <div className="patrocinadores flex mt-16">
          <div className="relative lg:h-20 md:h-12 h-8 w-16 md:w-36 lg:w-48 lg:mx-8 md:mx-4 mx-4  ">
            <Image className="img" src={"/images/redbull.png"} alt="" fill sizes="(max-width: 480px)50vw,100vw" quality={100}/>
          </div>
          <div className="relative lg:h-20 md:h-12 h-8 w-16 md:w-36 lg:w-52 lg:mx-8 md:mx-4 mx-4 ">
            <Image className="img" src={"/images/lenovo.png"} alt="" fill sizes="(max-width: 480px)50vw,100vw"/>
          </div>
          <div className="relative lg:h-20 md:h-12 h-8 w-16 md:w-36 lg:w-52 lg:mx-8 md:mx-4 mx-4 ">
            <Image className="img" src={"/images/pokerstars.png"} alt="" fill sizes="(max-width: 480px)50vw,100vw"/>
          </div>
          <div className="relative lg:h-20 md:h-12 h-8 w-16 md:w-36 lg:w-56 lg:mx-8 md:mx-4 mx-4">
            <Image className="img" src={"/images/uni-cruz.png"} alt="" fill sizes="(max-width: 480px)50vw,100vw"/>
          </div>
          
          
          
          
        </div>
      </section>
    </>
  )
}