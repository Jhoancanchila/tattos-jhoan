import tribal from "../assets/tribal.webp";
import realista from "../assets/realista.avif";
import neotradicional from "../assets/neotradicional.avif";
import { handleScroll } from "../helpers";
import { useReference } from "../context/ref";

const Description = ({ sectionRef }) => {

  const { sectionRefContact } = useReference();
  return (
    <section ref={sectionRef}>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <header className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Nosotros
            </h2>

          <p className="mt-4 w-full text-gray-500">
            Bienvenidos a tattos Julia, donde cada tatuaje es una obra de arte única, diseñada para reflejar tu personalidad y estilo. Fundado en 2018, nuestro estudio se dedica a crear tatuajes que no solo son hermosos, sino que también tienen un significado profundo para cada cliente.
          </p>
          <p className="mt-4 w-full text-gray-500">
            En tattos Julia, creemos en la importancia de la comunicación y la conexión personal con cada cliente. Nuestro equipo de tatuadores, compuesto por 4 talentosos artistas, se dedica a escuchar tus ideas y visiones, y a transformarlas en tatuajes que te representen y te hagan sentir orgulloso.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-3">
          <li>
            <span className="group relative block">
              <img
                src={realista}
                alt="realista"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Realistas</h3>

                <button
                  onClick={() => handleScroll(sectionRefContact)}
                  className="mt-1.5 inline-block bg-[#272425] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Contáctanos
                </button>
              </div>
            </span>
          </li>

          <li>
            <span className="group relative block">
              <img
                src={tribal}
                alt="tribal"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Tribales</h3>

                <button
                  onClick={() => handleScroll(sectionRefContact)}
                  className="mt-1.5 inline-block bg-[#272425] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Contáctanos
                </button>
              </div>
            </span>
          </li>

          <li className="lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <span className="group relative block">
              <img
                src={neotradicional}
                alt="neotradicional"
                className="aspect-square w-full object-cover transition duration-500 group-hover:opacity-90"
              />

              <div className="absolute inset-0 flex flex-col items-start justify-end p-6">
                <h3 className="text-xl font-medium text-white">Neotradicionales</h3>

                <button
                  onClick={() => handleScroll(sectionRefContact)}
                  className="mt-1.5 inline-block bg-[#272425] px-5 py-3 text-xs font-medium uppercase tracking-wide text-white"
                >
                  Contáctanos
                </button>
              </div>
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Description