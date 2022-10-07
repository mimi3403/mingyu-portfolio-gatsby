import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/reset.css";
import { StyledLayout } from "../styles/styled-components";
import { graphql, useStaticQuery } from "gatsby";

const Layout = (props) => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          description
          siteUrl
          title
        }
      }
    }
  `);
  console.log(siteMetadata);
  return (
    <StyledLayout>
      <Header />
      <div>
        <main>{props.children}</main>
      </div>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
