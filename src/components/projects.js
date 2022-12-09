import React, { Fragment, useRef, useEffect } from "react";
import data from "../data/projects.json";
// import { useLocation } from "react-router-dom";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { StyledProjectSection } from "../styles/styled-components";

const Projects = (props) => {
  // const location = useLocation();
  const projectElRef = useRef();
  useEffect(() => {
    const locationName = window.location.pathname;
    if (locationName === "#projects") {
      projectElRef.current.focus();
    }
  }, []);
  return (
    <Fragment>
      <StyledProjectSection>
        <h2
          className="numbered-heading"
          ref={projectElRef}
          id="projects"
          tabIndex="-1"
        >
          Some Things I’ve Built
        </h2>
        <div className="projects-container">
          {data.map((project, idx) => (
            <article key={idx}>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink} target="blank" rel="noreferrer">
                  View on <FaGithubSquare />
                </a>
                <a href={project.deployedLink} target="blank" rel="noreferrer">
                  Visit!
                </a>
              </div>
              <div className="project-img">
                <img src={project.image} alt="" />
              </div>
            </article>
          ))}
        </div>
      </StyledProjectSection>
    </Fragment>
  );
};

export default Projects;
