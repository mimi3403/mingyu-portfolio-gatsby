import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0a192f;
  color: #fff;
  height: 5rem;
  padding: 0 1rem;
  box-shadow: 1px 1px 3px 1px #808080;
  a {
    text-decoration: none;
    color: inherit;
  }
  h1 {
    margin: 0px;
  }
  img {
    border-radius: 50%;
    width: 50px;
    height: 50px;
    vertical-align: middle;
    object-fit: cover;
    align-items: center;
    margin: 0;
  }
  nav {
    display: flex;
    align-items: center;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    li {
      margin: 0 1rem 0 0;
      a {
        font-weight: 700;
        color: #64ffda;
        :hover {
          color: #5ae5c4;
        }
      }
    }
  }
`;

export const StyledFooter = styled.footer`
  h2 {
    margin: 0;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #0a192f;
  color: #fff;
  height: 5rem;
  p {
    margin: 0;
  }
  small {
    text-align: center;
  }
  @media (max-width: 576px) {
    font-size: 12px;
  }
`;
export const StyledLayout = styled.div`
  display: flex;
  margin: 0;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  background-color: #0a192f;
  & > div {
    flex-grow: 1;
  }
  main {
    color: #fff;
  }
`;
export const StyledViewProject = styled.div`
  a.view-projects {
    text-decoration: none;
    color: #64ffda;
    border-radius: 3px;
    border: 3px solid #64ffda;
    background-color: #0a192f;
    padding: 12px 18px;
    font-size: 16px;
    cursor: pointer;
    :hover {
      background-color: #495670;
    }
  }
`;

export const StyledAboutContainer = styled.div`
  a {
    display: inline;
    color: #64ffda;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;

export const StyledFooterSocialMedia = styled.div`
  nav {
    display: flex;
    align-items: center;
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    margin: 0;
    li {
      margin: 0 1rem 0 0;
      a {
        font-weight: 700;
        color: #64ffda;
        text-decoration: none;
        cursor: pointer;
        :hover {
          color: #5ae5c4;
        }
      }
    }
  }
`;

export const StyledBurger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  animation: fadeIn 1800ms linear forwards;
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &:focus {
    outline: none;
  }
  div {
    width: 2rem;
    height: 0.25rem;
    background: #fff;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    @media (max-width: 576px) {
      background: ${({ open }) => (open ? "#fff" : "#333")};
    }
    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }
    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }
    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const StyledNavDrawer = styled.nav`
  div.drawer-block {
    width: 100vw;
    background-color: rgba(10, 25, 47, 0.3);
    opacity: ${({ open }) => (open ? "1" : "0")};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: all 0.3s ease-in-out;
    backdrop-filter: blur(3px);
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #0a192f;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    right: 0;
    transition: transform 0.3s ease-in-out;
    @media (max-width: 576px) {
      width: 100%;
    }
  }
  li {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #64ffda;
    text-decoration: none;
    transition: color 0.8s linear;
    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
    a :hover {
      color: #5ae5c4;
    }
  }
`;

export const StyledLoadingAnimation = styled.div`
  .loader-container {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    background: rgba(73, 86, 112, 0.4);
    z-index: 1;
  }

  .spinner {
    width: 64px;
    height: 64px;
    border: 8px solid;
    border-color: #5ae5c4 transparent #5ae5c4 transparent;
    border-radius: 50%;
    animation: spin-anim 1.2s linear infinite;
  }

  @keyframes spin-anim {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
