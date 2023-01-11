import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  // Buscando por query:

  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!query) return;

    navigate("/search?q=" + query);
    setQuery("");
  };

  return (
    <aside className="nav__bar__container">
      <nav className="nav__bar">
        <h1>React Router</h1>
        <ul>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">Sobre</NavLink>
        </ul>
        {/* Search */}
        <form>
          <input
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            value={query}
          />
          <button onClick={handleSubmit} type="submit">
            Procurar
          </button>
        </form>
      </nav>
    </aside>
  );
};

export default NavBar;
