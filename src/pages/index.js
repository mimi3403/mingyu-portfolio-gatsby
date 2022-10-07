import React from "react";
import { Fragment } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import {
  StyledViewProject,
  StyledAboutContainer,
} from "../styles/styled-components";

const IndexPage = () => {
  return (
    <Fragment>
      <div className="container">
        <div className="loader-container">
          <div className="spinner"></div>
        </div>
      </div>
      <Layout>
        <h1>HELLO!</h1>
        <h2>I am Mingyu, and I build things for the web</h2>
        <StyledAboutContainer>
          <p>
            I am a software engineer specializing in building exceptional
            digital experiences. Currently, I am focused on building accessible
            components, and implementing accessibility remediations to ADP's web
            apps using WCAG standards and WAI-ARIA at{" "}
            <a href="https://www.audioeye.com/" target="_blank">
              AudioEye.
            </a>
          </p>
        </StyledAboutContainer>
        <StyledViewProject>
          <Link className="view-projects" to="/projects">
            Check out my projects!
          </Link>
        </StyledViewProject>
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
