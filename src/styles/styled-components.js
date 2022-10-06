import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333;
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
    width: 80px;
    height: 80px;
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
      }
    }
  }
`;

export const StyledViewProject = styled.div`
  a.view-projects {
    text-decoration: none;
  }
`;
