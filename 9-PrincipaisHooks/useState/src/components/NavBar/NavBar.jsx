import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./NavBar.module.css";
const NavBar = () => {
  return (
    <aside className={styles.aside}>
      <nav>
        <NavLink to="/">Hooks</NavLink>
        <ul>
          <li>
            <NavLink to="/use-state">useState</NavLink>
          </li>
          <li>
            <NavLink to="/use-reducer">useReducer</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
