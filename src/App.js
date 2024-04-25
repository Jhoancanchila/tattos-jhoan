import { Fragment } from "react";
import Layout from "./components/Layout";
import About from "./components/About";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Layout>
        <About/>
        <Testimonial/>
        <Contact/>
        <Footer/>
      </Layout>
    </Fragment>
  );
}

export default App;
