import React, { useState, useEffect } from "react";
import { StyledHeader } from "../styles/styled-components";
import { Link } from "gatsby";
import Burger from "./burger";
import NavDrawer from "./navDrawer";

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(true);
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1065px)");

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

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
      {!isSmallScreen ? (
        <nav aria-label="main">
          <ul>
            <li>
              <Link to="/">01. Home</Link>
            </li>
            <li>
              <Link to="/projects">02. Projects</Link>
            </li>
            <li>
              <Link to="/work">03. Work</Link>
            </li>
            <li>
              <Link to="/contact">04. Contact</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <>
          <NavDrawer open={open} setOpen={setOpen} />
          <Burger open={open} setOpen={setOpen} />
        </>
      )}
    </StyledHeader>
  );
};

export default Header;
