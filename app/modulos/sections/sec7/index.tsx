import Image from "next/image";
import logo from "@/public/images/FURIA_Esports_logo.webp";

export default function App(){
  return(
    <>
      <section className="sec7 flex mb-12" id="sec7">
        <div className="form md:basis-3/5 py-24 px-16 mb-8 w-full">
          <h3>ENTRE EM CONTATO</h3>
          <form action="" className="flex flex-col pb-12">
            <input type="text" placeholder="NOME" />
            <input type="email" name="" id="" placeholder="EMAIL" />
            <input type="text" placeholder="MENSAGEM" />
            <button className="btn">ENVIAR</button>
          </form>
          <footer className="flex">
            <div className="basis-3/5">
              <p>LINKS ÚTEIS</p>
              <p>POLÍTICA DE PRIVACIDADE</p>
              <p>POLÍTICA DE FRETE</p>
              <p className="pb-12">POLÍTICA DE REEMBOLSO</p>
              <p>SIGA-NOS EM NOSSAS REDES SOCIAIS</p>
              <p>INSTAGRAM</p>
              <p>TIKTOK</p>
              <p>YOUTUBE</p>
            </div>
            <div className="basis-2/5">
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
      </section>
    </>
  )
}