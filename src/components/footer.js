import React from "react";
import SocialMediaInfo from "./socialmediainfo";

import { StyledFooter } from "../styles/styled-components";

const Footer = ({ author, title }) => {
  return (
    <StyledFooter>
      <h2>Get In Touch!</h2>
      <SocialMediaInfo />
      <small>Created by {author}</small>
    </StyledFooter>
  );
};

export default Footer;
