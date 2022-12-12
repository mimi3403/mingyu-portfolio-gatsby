import React, { Fragment } from "react";
import { StyledAboutMe } from "../styles/styled-components";

const AboutMe = () => {
  return (
    <Fragment>
      <StyledAboutMe id="about">
        <div className="inner">
          <h2 className="numbered-heading">About Me</h2>
          <div className="about-container">
            <p>
              Hi! My name is Mingyu, and I am a full-stack developer with
              experience designing and developing full-stack applications across
              multiple platforms using modern industry-adopted languages and
              frameworks. I have a strong passion for problem solving, and
              working with users with challenging and sophisticated needs.
            </p>
            <p>
              My main focus today is to build accessible products and to develop
              solutions that deliver the best user experience
            </p>
            <p>
              Here are a few technologies I've been working with recently in my
              projects:
            </p>
            <ul className="skills-list">
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Node.js</li>
              <li>Next.js</li>
              <li>MongoDB</li>
              <li>WAI-ARIA</li>
            </ul>
          </div>
          {/* <StyledProfileImgContainer>
            <div className="wrapper">
              <img src="/images/headshot.png" alt="" />
            </div>
          </StyledProfileImgContainer> */}
        </div>
      </StyledAboutMe>
    </Fragment>
  );
};

export default AboutMe;
