import React, { Fragment } from "react";
import { Link } from "gatsby";
import {
  StyledViewProject,
  StyledAboutContainer,
} from "../styles/styled-components";
const AboutInfo = (props) => {
  return (
    <Fragment>
      <StyledAboutContainer>
        <h1>HELLO!</h1>
        <h2>My name is Mingyu, and I build things for the web</h2>
        <p>
          I am a software engineer specializing in building exceptional digital
          experiences. Currently, I am focused on building accessible
          components, and implementing accessibility remediations to ADP's web
          apps using WCAG standards and WAI-ARIA at{" "}
          <a href="https://www.audioeye.com/" target="_blank" rel="noreferrer">
            AudioEye.
          </a>
        </p>
        <StyledViewProject className="btn-container">
          <Link className="view-projects" to="/projects">
            Check out my projects!
          </Link>
        </StyledViewProject>
      </StyledAboutContainer>
    </Fragment>
  );
};

export default AboutInfo;
