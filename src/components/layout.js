import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../styles/reset.css";

const Layout = (props) => {
  return (
    <div>
      <Header />
      <div>
        <main>{props.children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
