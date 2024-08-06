import Image from "next/image";
import time1 from "@/public/images/time1-cp.png";
import DownArrow from "@/app/components/paginationArrow"

export default function App(){
  return (
    <>
      <section className="sec2 relative" id="sec2">
        <div className="flex items-center mt-24 md:mt-0 ">
          <div className="md:basis-1/2 md:px-0 px-8">
            <h1 className='historia p-0 pt-3 mb-8 md:p-2 md:pt-12  text-center md:text-4xl text-lg'>Nossa história</h1>
            <p className="pb-8 md:pb-0 md:p-6 p-3 md:pl-16 tracking-tight text-justify historia-text">Fundada em agosto de 2017 em Uberlândia, Minas Gerais, a FURIA foi fruto da idealização do empresário Jaime Pádua, que já planejava investir nos esportes eletrônicos, e dos também empresários André Akkari e Cris Guedes. Esses dois tinham planos semelhantes e atribuíram a Jaime a missão de conduzir o projeto. No decorrer dos anos, a FURIA foi evoluindo no cenário mundial dos esportes eletrônicos, alcançando marcas históricas entre equipes brasileiras.</p>
          </div>
          <div className="basis-1/2 w-full h-full  hidden md:block p-16">
            <Image src={time1} alt="" className="historia-time w-full" quality={100}/>
          </div>
        </div>
        <DownArrow sectionId={"#sec3"}/>
      </section>
      
    </>
  )
}