import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/NavBar/Navbar";
import Skills from "./components/Skills/Skills";
import ProjectExperience from "./components/Projects/projectExperience";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import { useRef } from "react";

function App() {
  const home = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contactMe = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <NavBar
        scrollToSection={scrollToSection}
        skills={skills}
        home={home}
        projects={projects}
        contactMe={contactMe}
      />
      <div className="container">
        <div ref={home}>
          <Hero />
        </div>
        <div ref={skills}>
          <Skills />
        </div>
        <div ref={projects}>
          <ProjectExperience />
        </div>
        <div ref={contactMe}>
          <ContactMe />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
