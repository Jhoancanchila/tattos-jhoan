import { Fragment, useRef } from "react";
import Layout from "./components/Layout";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import CTA from "./components/CTA";
import { RefContext } from "./context/ref";

function App() {

  const sectionRefAbout = useRef(null);
  const sectionRefTest = useRef(null);
  const sectionRefContact = useRef(null);

  return (
    <Fragment>
      <RefContext.Provider value={{ sectionRefAbout, sectionRefTest, sectionRefContact }}>
        <Sidebar/>
        <CTA/>
        <Layout>
          <About sectionRef={sectionRefAbout}/>
          <Testimonial sectionRef={sectionRefTest}/>
          <Contact sectionRef={sectionRefContact}/>
          <Footer/>
        </Layout>
      </RefContext.Provider>
    </Fragment>
  );
}

export default App;
