import Image from "next/image";
import time1 from "@/public/images/time1-cp.png";

export default function App(){
  return (
    <>
      <section className="sec2" id="sec2">
        <div className="flex items-center">
          <div className="md:basis-1/2 md:px-0 px-8">
            <h1 className='historia p-8 mb-8 text-center text-4xl'>Nossa história</h1>
            <p className="p-6">Fundada em agosto de 2017 em Uberlândia, Minas Gerais, a FURIA foi fruto da idealização do empresário Jaime Pádua, que já planejava investir nos esportes eletrônicos, e dos também empresários André Akkari e Cris Guedes. Esses dois tinham planos semelhantes e atribuíram a Jaime a missão de conduzir o projeto. No decorrer dos anos, a FURIA foi evoluindo no cenário mundial dos esportes eletrônicos, alcançando marcas históricas entre equipes brasileiras.</p>
          </div>
          <div className="basis-1/2 w-full  hidden md:block p-16">
            <Image src={time1} alt=""/>
          </div>
        </div>
      </section>
      
    </>
  )
}