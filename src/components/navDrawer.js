import React from "react";
import { Link } from "gatsby";
import { StyledNavDrawer } from "../styles/styled-components";

function NavDrawer({ open, setOpen }) {
  return (
    <StyledNavDrawer open={open}>
      <div className="drawer-block">
        <ul>
          <li>
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/work" onClick={() => setOpen(false)}>
              Work
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </StyledNavDrawer>
  );
}

export default NavDrawer;
