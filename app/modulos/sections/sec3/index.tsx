'use client';
import useStore from "@/app/store";
import SwiperCarousel from "@/app/components/swiperCarousel"
import time1 from "@/public/images/time5-resized.png";
import time2 from "@/public/images/time2.png";
import time3 from "@/public/images/time3.png";
import time4 from "@/public/images/time4.png";
/* import "./index.css"; */



export default function App(){

  const jogosArr = [
    {id:0, item:"lol", time: time1, nome:"League Of Legends", desc: "A FURIA Esports é uma equipe de esports brasileira que compete no jogo League of Legends, um dos títulos mais populares do mundo. No segundo split de 2024 do Campeonato Brasileiro de League of Legends (CBLOL).Embora a FURIA enfrente desafios no segundo split de 2024, a equipe mantém uma atitude positiva e está comprometida em melhorar. Com talento e trabalho em equipe, a FURIA busca se recuperar e mostrar seu verdadeiro potencial nas competições."},
    {id:1, item: "r6", time: time2, nome:"Rainbow Six", desc: "A FURIA Esports está em um momento empolgante em 2024, com a adição de uma equipe campeã mundial de Rainbow Six Siege. Com jogadores talentosos e um histórico de sucesso, a FURIA está pronta para brilhar nas competições e conquistar mais vitórias, trazendo alegria para sua base de fãs apaixonada.Com a nova formação, a FURIA está posicionada para competir em torneios importantes e buscar mais títulos. A equipe tem o potencial de se tornar uma força dominante no cenário de Rainbow Six Siege, e os fãs estão animados para acompanhar seu progresso."},
    {id:2, item: "rocket", time: time3, nome:"Rocket league", desc: "Com um histórico recente de sucesso e uma equipe talentosa, a FURIA Esports está otimista em relação às suas futuras competições. A equipe busca continuar a trajetória de vitórias e se estabelecer como uma força dominante no cenário de Rocket League.A equipe se posicionou entre as melhores do mundo, terminando no Top 3 do mundial de Rocket League. Essa performance demonstra a habilidade e o potencial da FURIA em competições de alto nível."},
    {id:3, item: "csgo", time: time4, nome:"Counter Strike", desc: "A FURIA Esports está em um momento promissor no segundo semestre de 2024, com um desempenho forte em torneios e uma equipe talentosa. A organização busca continuar sua trajetória de sucesso e conquistar mais títulos no cenário competitivo de Counter-Strike.A equipe está focada em manter seu desempenho e buscar mais vitórias nas próximas competições. Com um histórico de sucesso e uma base sólida de jogadores, a FURIA tem o potencial de se destacar ainda mais no cenário de esports."}
  ]

  const imageClasses:any = {
    0: "lol",
    1: "r6",
    2: "rocket",
    3: "csgo"
  };

  const curImg = useStore((state)=> state.currentImage);

  return (
    <>
      <section className={`sec3 md:h-screen border-y-8 border-yellow-500 relative ${jogosArr.find(element => (element.id) === curImg)?.item}`} id="sec3" /* style={{backgroundImage: `${jogosArr.find(element => (element.id) === curImg)?.item}`}} */>
        {/* <CarouselJogos images={jogosArr}/> */}
        <div className="flex flex-col md:flex-row w-full h-full md:h-screen">
          <div className="flex items-center md:w-3/5 h-1/2 md:h-auto">
            <div className="texto-jogo md:px-12 p-6">
              <h1 className="pb-2">{`${jogosArr.find(element => (element.id) === curImg)?.nome}`}</h1>
              <p className="game-desc">{`${jogosArr.find(element => (element.id) === curImg)?.desc}`}</p>
              <button className='btn'>Conheça nosso time</button>
            </div>
          </div>
          <div className="flex items-center justify-center md:w-2/5 h-1/2 md:h-full pl-4 md:pl-0">
            <SwiperCarousel/>
          </div>
        </div>
      </section>
    </>
  );
}