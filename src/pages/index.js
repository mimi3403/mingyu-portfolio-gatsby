import React from "react";
import { Fragment, useState, useEffect } from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import {
  StyledViewProject,
  StyledAboutContainer,
  StyledLoadingAnimation,
} from "../styles/styled-components";

const IndexPage = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <Fragment>
      {loading && (
        <StyledLoadingAnimation>
          <div className="container">
            <div className="loader-container">
              <div
                className="spinner"
                aria-label="Loading"
                role="alert"
                aria-live="assertive"
              ></div>
            </div>
          </div>
        </StyledLoadingAnimation>
      )}
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
