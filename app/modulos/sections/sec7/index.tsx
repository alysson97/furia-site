import Image from "next/image";
import logo from "@/public/images/FURIA_Esports_logo.webp";
import seta from "@/public/images/seta.png";

export default function App(){
  return(
    <>
      <section className="sec7 flex mb-12 relative" id="sec7">
        <div className="form md:basis-3/5 py-24 px-16 mb-8 w-full">
          <h3>ENTRE EM CONTATO</h3>
          <form action="" className="flex flex-col pb-12">
            <input type="text" placeholder="NOME" />
            <input type="email" name="" id="" placeholder="EMAIL" />
            <input type="text" placeholder="MENSAGEM" />
            <button className="btn">ENVIAR</button>
          </form>
          <footer className="flex flex-wrap">
            <div className="footer-items order-1 w-1/2">
              <p>LINKS ÚTEIS</p>
              <p>POLÍTICA DE PRIVACIDADE</p>
              <p>POLÍTICA DE FRETE</p>
              <p className="">POLÍTICA DE REEMBOLSO</p>
            </div>
            <div className="footer-items order-2 md:order-3 w-1/2">             
              <p>SIGA-NOS EM NOSSAS REDES SOCIAIS</p>
              <p>INSTAGRAM</p>
              <p>TIKTOK</p>
              <p>YOUTUBE</p>
            </div>
            
            <div className="footer-items order-3 md:order-2 w-full mt-14 md:mt-0 md:w-1/2 flex justify-center">
              <div className="logo">
                <Image
                src={logo}
                alt=""
                />
              </div>
            </div>
            
          </footer>
        </div>
        <div className="form-images basis-2/5 relative hidden md:block">
          <Image src={"/images/garota-form.png"}
          alt="" fill
          sizes="(min-width: 400px) 50vw, 100vw"
          style={{
            objectFit: 'contain',
            objectPosition: 'center',
            borderRadius: '24px'
          }}
          />
        </div>
        
        
        <div className="absolute animate-bounce bottom-2 left-1/2 transform -translate-x-1/2 z-20 md:opacity-55 opacity-0">
          <a href="#sec1" className="w-full cursor-pointer">
            <Image className="rotate-180" src={seta} alt="" height={100}/>
          </a>
        </div>
      </section>
    </>
  )
}