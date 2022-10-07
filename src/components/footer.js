import React from "react";
import SocialMediaInfo from "./socialmediainfo";

import { StyledFooter } from "../styles/styled-components";

const Footer = ({ author, title }) => {
  return (
    <StyledFooter>
      <h2>Get In Touch!</h2>
      <SocialMediaInfo />
    </StyledFooter>
  );
};

export default Footer;
