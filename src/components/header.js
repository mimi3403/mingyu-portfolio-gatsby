import React from "react";
import { StyledHeader } from "../styles/styled-components";
import { Link } from "gatsby";

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">
          <img
            src="/images/homepage_logo.png"
            alt="Mingyu's Profolio home page"
          />
        </Link>
      </h1>
      <nav aria-label="main">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
