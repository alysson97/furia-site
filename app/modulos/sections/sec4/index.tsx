import Image from "next/image";
import produtos from "@/public/images/PRODUTOS.png";


const prodArr = [
  {id:1, item:produtos},
  {id:2, item:produtos},
  {id:3, item:produtos},
  {id:4, item:produtos},
  {id:5, item:produtos},
  {id:6, item:produtos},
  {id:7, item:produtos},
  {id:8, item:produtos}
];


export default function App(){
  return (
    <>
      <section className="sec4 flex overflow-hidden py-8 relative" id="sec4">
        {prodArr.map((produto, index)=>{
          return(
            <>
              <img
              src={produto.item.src}
              alt=""
              className="prod-carrossel px-5"
              style={{height:"40px"}}
              key={produto.id}
              /* width={600}
              height={900} */
              />
            </>
          )
        })}
      </section>
    </>
  );
}