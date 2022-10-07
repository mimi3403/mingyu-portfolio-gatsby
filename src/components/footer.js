import React from "react";
// import { FontAwesomeIcon } from "@fontawesome/react-fontawesome";
import {
  StyledFooter,
  StyledFooterSocialMedia,
} from "../styles/styled-components";

const Footer = (props) => {
  return (
    <StyledFooter>
      <h2>Get In Touch!</h2>
      <StyledFooterSocialMedia>
        <nav aria-label="Social-Media">
          <ul>
            <li>
              {/* <FontAwesomeIcon icon="fa-brands fa-linkedin" /> */}
              <a>Email</a>
            </li>
            <li>
              <a>Linkedin</a>
            </li>
            <li>
              <a>Instagram</a>
            </li>
            <li>
              <a>Facebook</a>
            </li>
          </ul>
        </nav>
      </StyledFooterSocialMedia>
    </StyledFooter>
  );
};

export default Footer;
