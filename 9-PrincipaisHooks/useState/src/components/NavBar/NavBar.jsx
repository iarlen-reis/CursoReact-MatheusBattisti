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
          <li>
            <NavLink to="/use-effect">useEffect</NavLink>
          </li>
          <li>
            <NavLink to="/use-context">useContext</NavLink>
          </li>
          <li>
            <NavLink to="/use-ref">useRef</NavLink>
          </li>
          <li>
            <NavLink to="/use-callback">useCallback</NavLink>
          </li>
          <li>
            <NavLink to="/use-memo">useMemo</NavLink>
          </li>
          <li>
            <NavLink to="/use-layout">useLayoutEffect</NavLink>
          </li>
          <li>
            <NavLink to="/use-imperative">useImperative</NavLink>
          </li>
          <li>
            <NavLink to="/use-custom">useCustom</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar;
