import React, { useRef } from "react";
import "./projectExperience.css";
import ProjectsCard from "./projectsCard";
import { Project_Experience } from "./projectData";
import Slider from "react-slick";
function ProjectExperience() {
  const sliderRef = useRef();
  const settings = {
    dots: false,
    Infinity: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    Responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <section className="experience-container">
      <h5>Projects</h5>

      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="material-symbols-outlined">{">"}</span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="material-symbols-outlined">{"<"}</span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {Project_Experience.map((exp, i) => (
            <ProjectsCard key={i} details={exp} />
          ))}
        </Slider>
      </div>
    </section>
  );
}
export default ProjectExperience;
