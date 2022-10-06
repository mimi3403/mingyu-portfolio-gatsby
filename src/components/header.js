import React from "react";
import { StyledHeader } from "../styles/styled-components";
import { Link } from "gatsby";

const Header = (props) => {
  return (
    <StyledHeader>
      <h1>
        <Link to="/">Mingyu Hong</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
};

export default Header;
