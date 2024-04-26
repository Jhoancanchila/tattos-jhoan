import { useReference } from "../context/ref";
import { handleScroll } from "../helpers";

import bannerVideo from "../assets/tattos.mp4"

const CTA = () => {

  const { sectionRefContact } = useReference();

  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat mt-12 h-screen overflow-hidden"
    >
      <video autoPlay muted loop playsinline className="absolute object-cover top-0 left-0 w-full h-full">
        <source src={bannerVideo} type="video/mp4"/>
      </video>
      <div
        className="relative z-10 h-full w-full bg-black/25 mx-auto max-w-screen px-4 py-32 sm:px-6 lg:flex lg:items-center lg:px-8"
      >
        <div className="ltr:sm:text-left rtl:sm:text-right">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">Pregunta por nuestro servicio!</h2>

          <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            ¿Estás listo para darle vida a tu próximo tatuaje? En tattos Julia, creemos en la magia de cada diseño y en cómo cada tatuaje puede contar una historia única. No esperes más, ¡haz clic en el botón de abajo y descubre cómo podemos ayudarte a crear tu tatuaje perfecto!
          </p>

          <div className="mt-4 sm:mt-8">
            <button
              onClick={() => handleScroll(sectionRefContact)}
              className="inline-block rounded-full bg-[#E11D48] opacity-[0.9] px-12 py-3 text-sm font-medium text-white transition hover:bg-[#E11D48] hover:opacity-[1] focus:outline-none"
            >
              Obtener información
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA