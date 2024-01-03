import React,{useEffect} from 'react'
import Banner from "../components/banner/Banner";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import FooterBottom from "../components/footer/FooterBottom";
import Projects from "../components/projects/Projects";
import Resume from "../components/resume/Resume";
import Skills from "../components/skills/Skills";
import { useLocation } from "react-router-dom";

function Index() {

    const location = useLocation();
    useEffect(() => {
        
    if (location.state) {
        console.log(location.state);
        let elem = document.getElementById(location.state.section);
        if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
        }
    } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
    }, [location]);
  return (
    <div className="max-w-screen-xl mx-auto">
      <Banner />
      <Resume />
      <Skills />
      <Projects />
      <Footer />
      <FooterBottom/>
    </div>
  );
}

export default Index
