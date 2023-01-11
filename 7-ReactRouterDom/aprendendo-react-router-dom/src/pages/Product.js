import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Product.css";

const Product = () => {
  // Rota dinâmica: Pegando parâmetro da url
  const { id } = useParams();

  // Carregamento de dado individual
  const url = "http://localhost:3000/products/" + id;

  const { data: product, error } = useFetch(url);

  return (
    <section>
      <h1 className="title__product">Produto individual</h1>
      {error && <p>Ocorreu um error!</p>}
      {product && (
        <ul className="product">
          <li>
            <h2>{product.name}</h2>
            <p>R$ {product.price}</p>
            {/* Nested routes */}
            <Link to={`/products/${product.id}/info`}>Mais informações</Link>
          </li>
        </ul>
      )}
    </section>
  );
};

export default Product;
