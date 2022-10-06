import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import { StyledViewProject } from "../styles/styled-components";

const IndexPage = () => {
  return (
    <Layout>
      <h1>HELLO!</h1>
      {/* <div className="profile-img">
        <img
          style={{
            borderRadius: "50%",
            width: "200px",
            height: "200px",
            verticalAlign: "middle",
            objectFit: "cover",
          }}
          src="/images/avatar.jpeg"
          alt=""
        />
      </div> */}
      <h2>I am Mingyu, and I build things for the web</h2>
      <div>
        <p>
          I am a software engineer specializing in building exceptional digital
          experiences. Currently, I am focused on building accessible
          components, and implementing accessibility remediations to ADP's web
          apps using WCAG standards and WAI-ARIA at AudioEye.
        </p>
        <StyledViewProject>
          <Link className="view-projects" to="/projects">
            Check out my projects!
          </Link>
        </StyledViewProject>
      </div>
    </Layout>
  );
};

export default IndexPage;
