import Image from "next/image";
import patrocinadores from "@/public/images/patrocinadores-nome.png";


export default function App(){
  return(
    <>
      <section className="sec6 py-24 flex items-center justify-center flex-col" id="sec6">
        <Image src={patrocinadores} alt="" className="p-8 md:p-0"/>
        <div className="patrocinadores grid grid-cols-2 gap-x-5 md:flex w-full h-full md:justify-around items-center md:mt-16 px-8 md:px-24 border-x-0 border-y-2 md:border-t-0 pb-8 md:pb-0">
          <div className="md:pb-10">
            <Image className="img" src={"/images/redbull-transformed.png"} alt="" width={150} height={100}/>
          </div>
          <div className="">
            <Image className="img" src={"/images/lenovo-up.png"} alt="" width={200} height={100}/>
          </div>
          <div className="">
            <Image className="img" src={"/images/pokerstars.png"} alt="" width={200} height={100}/>
          </div>
          <div className="">
            <Image className="img" src={"/images/uni-cruz.png"} alt="" width={200} height={100}/>
          </div>
        </div>
      </section>
    </>
  )
}