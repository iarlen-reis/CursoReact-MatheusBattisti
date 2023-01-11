import React from "react";
import { useSearchParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Search = () => {
  const [seachParams] = useSearchParams();

  const url = "http://localhost:3000/products?" + seachParams;

  const { data: items, error } = useFetch(url);

  return (
    <section>
      <h1>Resultado para a buscar:</h1>
      {error && <p>Ocorreu um erro, tente novamente.</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$: {item.price}</p>
              <Link to={`/products/${item.id}/info`}>Detalhes</Link>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Search;
