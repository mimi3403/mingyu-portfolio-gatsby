import React from "react";
import { StyledBurger } from "../styles/styled-components";

function Burger({ open, setOpen }) {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div style={{ background: "#fff" }} />
      <div style={{ background: "#fff" }} />
      <div style={{ background: "#fff" }} />
    </StyledBurger>
  );
}

export default Burger;
