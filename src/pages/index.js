import React from "react";
import { Fragment, useState, useEffect } from "react";
import Layout from "../components/layout";
import AboutInfo from "../components/aboutinfo";
import { StyledLoadingAnimation } from "../styles/styled-components";

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
        <AboutInfo />
      </Layout>
    </Fragment>
  );
};

export default IndexPage;
