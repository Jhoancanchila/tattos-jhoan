//Manejo de formularios
import { Formik, Form, Field, ErrorMessage } from 'formik';
//Envío de email
import { sendContact } from '../connect-api';
import { useState } from 'react';
import Error from './Error';


const Contact = ({ sectionRef }) => {

  const [ messageConfirmation, setMessageConfirmation ] = useState("");
  const [ error, setError ] = useState(null);

  const handleFormContact = async (values, resetForm) => {
    try {
      const newValueParse = {...values,phone: values.phone.toString()}
      const response = await sendContact(newValueParse);

      if(response.status !== 201){
        setMessageConfirmation("Error enviando solicitud!!");
        return new Error("Error enviando información");
      }     
      setMessageConfirmation("Solicitud enviada!!");
      resetForm();
      setTimeout(() => {
        setMessageConfirmation("");
      },2000)
    } catch (error) {
      setError(error);     
    }
  };

  if(error) return <Error message="Enviando la solicitud."/>

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
              <span className="text-2xl font-bold text-[#E11D48]"> 313 2623933 </span>
              <address className="mt-2 not-italic">Cra 22 # 58 - 06 Corozal - Sucre</address>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
            <Formik
              initialValues={{ name: '', email: '', phone:'', message: '' }}
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Este campo es requerido';
                }else if (!values.email) {
                  errors.email = 'Este campo es requerido';
                } else if (
                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                  errors.email = 'Dirección de correo invalida';
                }else if (!values.phone) {
                  errors.phone = 'Este campo es requerido';
                }else if (!values.message) {
                  errors.message = 'Este campo es requerido';
                }
                return errors;
              }}
              onSubmit={(values, { resetForm }) => {
                handleFormContact(values, resetForm);
              }}
            >
              {
                ({isSubmitting, errors}) => (
                  <Form action="#" className="space-y-4">
                    <div>
                      <label className="sr-only" htmlFor="name">Nombre</label>
                      <Field
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="Nombre"
                        type="text"
                        id="name"
                        name="name"
                      />
                      <ErrorMessage name="name" component={() => (<span className='text-red-600 font-normal'>{errors.name}</span>)} />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="sr-only" htmlFor="email">Email</label>
                        <Field
                          className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                          placeholder="Email"
                          type="email"
                          id="email"
                          name="email"
                        />
                        <ErrorMessage name="email" component={() => (<span className='text-red-600 font-normal'>{errors.email}</span>)} />
                      </div>

                      <div>
                        <label className="sr-only" htmlFor="phone">Celular</label>
                        <Field
                          className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                          placeholder="Celular"
                          type="number"
                          id="phone"
                          name="phone"
                        />
                        <ErrorMessage name="phone" component={() => (<span className='text-red-600 font-normal'>{errors.phone}</span>)} />
                      </div>
                    </div>
                    <div>
                      <label className="sr-only" htmlFor="message">¿En qué podemos ayudarte?</label>

                      <Field
                        as="textarea"
                        className="w-full rounded-lg border border-gray-200 p-3 text-sm"
                        placeholder="¿En qué podemos ayudarte?"
                        rows="8"
                        id="message"
                        name="message"
                        maxLength={480}
                      />
                      <ErrorMessage name="message" component={() => (<span className='text-red-600 font-normal'>{errors.message}</span>)} />
                    </div>

                    <div className="mt-4">
                      <button
                        disabled={isSubmitting}
                        type="submit"
                        className="cursor-pointer inline-block w-auto rounded-lg bg-[#272425] px-5 py-3 font-medium text-white sm:w-auto"
                      >
                        Enviar
                      </button>
                      <span className='text-green-600 sm:text-xl text-base sm:ml-7 ml-2'>{messageConfirmation}</span>
                    </div>
                  </Form>
                )
              }
            </Formik>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact