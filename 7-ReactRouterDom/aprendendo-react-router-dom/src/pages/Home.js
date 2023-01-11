import React from "react";
// import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import ShowProduct from "../components/ShowProduct";

import "./Home.css";

const Home = () => {
  // Caregamento de dados

  const url = "http://localhost:3000/products";
  const { data: items, error } = useFetch(url);

  return (
    <section>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <ShowProduct id={item.id} name={item.name} price={item.price} />
          ))}
      </ul>
    </section>
  );
};

export default Home;
