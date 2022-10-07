import React from "react";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaMailBulk } from "@react-icons/all-files/fa/FaMailBulk";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { StyledFooterSocialMedia } from "../styles/styled-components";

const SocialMediaInfo = () => {
  return (
    <StyledFooterSocialMedia>
      <nav aria-label="Social-Media">
        <ul>
          <li>
            <a href="mailto:mingyuhong24@gmail.com">
              <FaMailBulk />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/mingyu-hong/" target="_blank">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/mingyuxx/" target="_blank">
              <FaInstagram />
            </a>
          </li>
          <li>
            <a>
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </nav>
    </StyledFooterSocialMedia>
  );
};

export default SocialMediaInfo;
