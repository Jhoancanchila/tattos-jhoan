import React from 'react'

const Contact = ({ sectionRef }) => {
  return (

    <section ref={sectionRef} className="bg-gray-100" >
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
          <div className="lg:col-span-2 lg:py-12">
            <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Contáctanos
            </h2>
            <p className="max-w-xl text-base mt-8">
              Ponte en contacto con nosotros y en breve estarémos respondiendo tú solicitud por cualquiera de los canales suministrados, gracias.
            </p>

            <div className="mt-8">
              <a href="#" className="text-2xl font-bold text-[#E11D48]"> 605-8580967 </a>
              <address className="mt-2 not-italic">Cra 22 # 58 - 06 Corozal - Sucre</address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <form action="#" className="space-y-4">
              <div>
                <label className="sr-only" htmlFor="name">Nombre</label>
                <input
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="Nombre"
                  type="text"
                  id="name"
                />
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="sr-only" htmlFor="email">Email</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Email"
                    type="email"
                    id="email"
                  />
                </div>

                <div>
                  <label className="sr-only" htmlFor="phone">Celular</label>
                  <input
                    className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                    placeholder="Celular"
                    type="number"
                    id="phone"
                  />
                </div>
              </div>

              <div>
                <label className="sr-only" htmlFor="message">¿En qué podemos ayudarte?</label>

                <textarea
                  className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                  placeholder="¿En qué podemos ayudarte?"
                  rows="8"
                  id="message"
                ></textarea>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="inline-block w-auto rounded-lg bg-[#272425] px-5 py-3 font-medium text-white sm:w-auto"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact