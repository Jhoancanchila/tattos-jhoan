import { Fragment, useState } from "react";
import "./Sidebar.css";
import Modal from "../Modal";
import { useReference } from "../../context/ref";
import { handleScroll } from "../../helpers";

const Sidebar = () => {

  const [ openModal, setOpenModal ] = useState(false);
  const [ itemSelected, setItemSelected ] = useState("");
  const { sectionRefAbout, sectionRefTest, sectionRefContact } = useReference();

  const handleMenu = ( selection, ref ) => {
    handleScroll(ref);
    setItemSelected(selection);
  };

  return (
    <Fragment>
      <nav>
        <span className="logo -rotate-6">
          <span className="italic font-bold text-white text-4xl ">tattos <span>julia</span></span>
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
        <button className="menu-icon">
          <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6H20M4 12H20M13 18H20" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </button>
      </nav>
      <Modal isOpen={openModal} onClose={setOpenModal}/>
    </Fragment>
  )
}

export default Sidebar