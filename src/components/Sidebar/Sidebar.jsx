import { Fragment, useEffect, useState } from "react";
import "./Sidebar.css";
import Modal from "../Modal";
import { useReference } from "../../context/ref";
import { handleScroll } from "../../helpers";

const Sidebar = () => {

  const [ openModal, setOpenModal ] = useState(false);
  const [ openSidebar, setOpenSidebar ] = useState(false);
  const { sectionRefAbout, sectionRefTest, sectionRefContact, itemSelected, setItemSelected } = useReference();

  const handleMenu = ( selection, ref ) => {
    handleScroll(ref);
    setItemSelected(selection);
    setOpenSidebar(false);
  };

  /* useEffect(() => {
    const handleScroll = () => {
      let activeIndex = null;
      [sectionRefAbout, sectionRefTest, sectionRefContact].forEach((ref, index) => {
        if (ref.current && ref.current.getBoundingClientRect().top <= window.innerHeight / 2) {          
          activeIndex = index;
        }
      });
      setItemSelected(activeIndex === 0 ? 'ABOUT' : activeIndex === 1 ? 'TESTIMONIALS' : activeIndex === 2 ? 'CONTACT' : '');

    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); */


  return (
    <Fragment>
      <nav>
        <span className="logo -rotate-6 z-10">
          <span className={`${openSidebar ? 'text-white' : 'text-[#E11D48]'} italic font-bold text-4xl`}>tattos <span>Julia</span></span>
        </span>
        <ul>
          <li onClick={() => handleMenu("ABOUT", sectionRefAbout)}><span className={`${itemSelected === "ABOUT" ? "link active" : "link"} cursor-pointer`}>Nosotros</span></li>
          <li onClick={() => handleMenu("TESTIMONIALS",sectionRefTest)}><span className={`${itemSelected === "TESTIMONIALS" ? "link active" : "link"} cursor-pointer`}>Testimonios</span></li>
          <li onClick={() => handleMenu("CONTACT",sectionRefContact)}><span className={`${itemSelected === "CONTACT" ? "link active" : "link"} cursor-pointer`}>Contacto</span></li>
          <li>
            <button
              onClick={() => setOpenModal(true)}
              className="inline-flex shrink-0 items-center rounded-full border border-rose-600 px-3 py-1 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
            >
              <span className="font-medium"> Agendar cita</span>
            </button>
          </li>
        </ul>
        <button className="menu-icon" onClick={() => {setOpenSidebar(!openSidebar); }}>
          <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M13 18H20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
        {
          openSidebar ?
          <div className={`sidebar ${openSidebar ? 'open' : ''}`}>
            <ul className="flex-col flex">
            <li onClick={() => handleMenu("ABOUT", sectionRefAbout)}><span className={`${itemSelected === "ABOUT" ? "link active" : "link"} cursor-pointer`}>Nosotros</span></li>
            <li onClick={() => handleMenu("TESTIMONIALS",sectionRefTest)}><span className={`${itemSelected === "TESTIMONIALS" ? "link active" : "link"} cursor-pointer`}>Testimonios</span></li>
            <li onClick={() => handleMenu("CONTACT",sectionRefContact)}><span className={`${itemSelected === "CONTACT" ? "link active" : "link"} cursor-pointer`}>Contacto</span></li>
            <li>
              <button
                onClick={() => setOpenModal(true)}
                className="inline-flex shrink-0 items-center rounded-full border border-rose-600 px-3 py-1 text-rose-600 transition hover:bg-rose-600 hover:text-white md:mt-0"
              >
                <span className="font-medium"> Agendar cita</span>
              </button>
            </li>
          </ul>
          </div>
          :
          null
        }
      </nav>
      <Modal isOpen={openModal} onClose={setOpenModal}/>
    </Fragment>
  )
}

export default Sidebar