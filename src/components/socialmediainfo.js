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
            <a href="mailto:mingyuhong24@gmail.com ">
              <FaMailBulk />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/mingyu-hong/"
              target="blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/mingyuxx/"
              target="blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </a>
          </li>
          <li>
            <a href="www.facebook.com" target="blank" rel="noreferrer">
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </nav>
    </StyledFooterSocialMedia>
  );
};

export default SocialMediaInfo;
