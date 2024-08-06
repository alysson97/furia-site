import CarouselLoja from "@/app/components/carouselStore/imageCarousel";
import car1 from "@/public/images/jaqueta.webp"
import car1Nome from "@/public/images/jaqueta-nome.png"
import car2 from "@/public/images/gorro.webp" 
import car2Nome from "@/public/images/gorro-nome.png"
import car3 from "@/public/images/camiseta.webp";
import car3Nome from "@/public/images/camiseta-nome.png"
import car4 from "@/public/images/cropped.webp";
import car4Nome from "@/public/images/cropped-nome.png"
import car5 from "@/public/images/regata.webp";
import car5Nome from "@/public/images/regate-nome.png"


const carArr = [
  {id:1, item:car1,nome:car1Nome},
  {id:2, item:car2, nome: car2Nome},
  {id:3, item:car3, nome: car3Nome},
  {id:4, item:car4, nome:car4Nome},
  {id:5, item:car5, nome:car5Nome}
];

export default function App(){
  return (
    <>
      <section className="sec5" id="sec5">
        <CarouselLoja
          images={carArr}
        /> 
      </section>
    </>
  );
}