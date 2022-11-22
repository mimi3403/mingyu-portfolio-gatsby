import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import data from "../data/projects.json";
import { FaGithubSquare } from "@react-icons/all-files/fa/FaGithubSquare";
import { StyledProjectSection } from "../styles/styled-components";

const Projects = (props) => {
  console.log(data);
  return (
    <Layout>
      <Head page="Projects" />
      <h1>Some Things I’ve Built</h1>
      <StyledProjectSection>
        {data.map((project, idx) => (
          <article key={idx}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <a href={project.githubLink} target="blank" rel="noreferrer">
              View on <FaGithubSquare />
            </a>
            <a href={project.deployedLink} target="blank" rel="noreferrer">
              Visit!
            </a>
            <img src={project.image} alt="" />
          </article>
        ))}
      </StyledProjectSection>
    </Layout>
  );
};

export default Projects;
