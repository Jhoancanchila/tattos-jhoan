
import 'keen-slider/keen-slider.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
import { useKeenSlider } from 'keen-slider/react';
import Skeleton from 'react-loading-skeleton';
import { useEffect, useState } from 'react';
import CardTestimony from "./CardTestimony";
import { getTestimonials } from '../connect-api';
import Error from './Error';

const Testimonial = ({ sectionRef }) => {
  const [options, setOptions] = useState({});
  const [dataTestimonials, setDataTestimonials] = useState([]);
  const [ error, setError ] = useState(null);
  const [sliderRef, instanceRef] = useKeenSlider(options);

  const nextSlide = () => {
    if (instanceRef) {
      instanceRef?.current?.next();
    }
  };

  const prevSlide = () => {
    if (instanceRef) {
      instanceRef?.current?.prev();
    }
  };

  const fetchTestimonials = async () => {
    try {
      const response = await getTestimonials();
      setDataTestimonials(response.data.data);
      if (!response.data.success) return new Error("fetch testimonials")
      setOptions({
        loop: true,
        slides: {
          origin: 'center',
          perView: 1.25,
          spacing: 16,
        },
        breakpoints: {
          '(min-width: 1024px)': {
            slides: {
              origin: 'auto',
              perView: 1.5,
              spacing: 32,
            },
          },
        },
      },
        [])
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  if(error) return <Error message="Cargando la información."/>

  return (
    <section ref={sectionRef} className="bg-gray-50" >
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-left ltr:sm:text-left rtl:sm:text-right">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Lea las opiniones de confianza de nuestros clientes
            </h2>

            <p className="mt-4 text-gray-700">
              En tattos Julia, creemos en la importancia de compartir las experiencias positivas de nuestros clientes. Aquí, te presentamos algunos de los testimonios que nos han llegado, reflejando la satisfacción y el valor que nuestro productos o servicios aportan a la vida de nuestros clientes.
            </p>

            <div className="hidden lg:mt-8 lg:flex lg:gap-4">
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                id="keen-slider-previous-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                disabled={dataTestimonials.length === 0}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                id="keen-slider-next-desktop"
                className="rounded-full border border-rose-600 p-3 text-rose-600 transition hover:bg-rose-600 hover:text-white"
                disabled={dataTestimonials.length === 0}
              >
                <svg
                  className="size-5 rtl:rotate-180"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <div ref={sliderRef} id="keen-slider" className="keen-slider">
              {
                dataTestimonials.length > 0 ?
                  dataTestimonials?.map(testimony =>
                    <CardTestimony key={testimony.id} testimony={testimony} />
                  )    
                :
                <div className="keen-slider__slide">
                  <blockquote
                    className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12"
                  >
                    <div>
                      <div className="w-36">
                        <Skeleton/>
                      </div>

                      <div className="mt-4">
                        <p className="w-1/2 text-2xl font-bold text-rose-600 sm:text-3xl"><Skeleton/></p>

                        <p className="mt-4 leading-relaxed text-gray-700">
                        <Skeleton count={4} />
                        </p>
                      </div>
                    </div>

                    <footer className="w-36 mt-4 text-sm font-medium text-gray-700 sm:mt-6">
                      <Skeleton/>
                    </footer>
                  </blockquote>
                </div>
                            
              }
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            onClick={prevSlide}
            id="keen-slider-previous"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            disabled={dataTestimonials.length === 0}
          >
            <svg
              className="size-5 -rotate-180 transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            id="keen-slider-next"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
            disabled={dataTestimonials.length === 0}
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonial