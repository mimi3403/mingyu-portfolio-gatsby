import React from "react";
import { Fragment } from "react";
import Layout from "../components/layout";
import AboutInfo from "../components/aboutinfo";
import Head from "../components/head";
import AboutMe from "../components/aboutme";
import Projects from "../components/projects";

const IndexPage = () => {
  return (
    <Fragment>
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
      <Layout>
        <Head page="Home" />
        <AboutInfo />
        <AboutMe />
        <Projects />
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
