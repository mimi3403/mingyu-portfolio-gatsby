import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/reset.css";
import { StyledLayout } from "../styles/styled-components";

const Layout = (props) => {
  return (
    <StyledLayout>
      <Header />
      <div>
        <main
          style={{
            backgroundColor: "#0a192f",
            color: "#fff",
            // height: "100vh",
            // width: "100vw",
          }}
        >
          {props.children}
        </main>
      </div>
      <Footer />
    </StyledLayout>
  );
};

export default Layout;
