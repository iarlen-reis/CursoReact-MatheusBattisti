import React from "react";
import { Link } from "react-router-dom";

function ShowProduct({ id, name, price }) {
  return (
    <li key={id}>
      <h2>{name}</h2>
      <p>R$ {price}</p>
      {/* Rota dinâmica */}
      <Link to={`/products/${id}`}>Detalhes</Link>
    </li>
  );
}

export default ShowProduct;
