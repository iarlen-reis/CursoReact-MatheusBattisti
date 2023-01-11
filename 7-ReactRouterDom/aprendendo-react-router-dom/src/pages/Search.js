import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import ShowProduct from "../components/ShowProduct";

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
            <ShowProduct id={item.id} name={item.name} price={item.price} />
          ))}
      </ul>
    </section>
  );
};

export default Search;
