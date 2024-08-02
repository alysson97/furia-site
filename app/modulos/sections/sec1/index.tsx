export default function App(){
  return (
    <>
      <section className="sec1 h-screen md:mt-0 mt-48" id="sec1">
        <div className="flex items-center h-full justify-center md:flex-row flex-col">
          <div className="md:basis-2/5 items-center pl-8">
            <h1>Transformando diversão
            em competição, a Fúria domina com <span className="yellow">alegria e foco.</span></h1>
          </div>
          <div className="md:basis-3/5 w-full md:p-16 p-12 mt-36 md:mt-0" >
            <div className="video">
              {/* <iframe 
              src="https://www.youtube.com/embed/8-LTmQHXkdk" title="1826 DIAS DE FURIA, 5 ANOS DE HISTÓRIA"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen
              className="aspect-video w-full rounded-xl"
              /> */}
              <iframe src="https://www.youtube.com/embed/LOfs7jinyGI" title="#FURIAR1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="aspect-video w-full rounded-xl"/>
              <div className="flex justify-center">
                <div className="conquistas">
                  <h2>+40</h2>
                  <p>Vitórias</p>
                </div>
                <div className="conquistas">
                  <h2>+30</h2>
                  <p>Competições</p>
                </div>
                <div className="conquistas">
                  <h2>+10</h2>
                  <p>Times</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}