import "./App.css";

import { useState } from "react";
import { useFetch } from "./hooks/useFetch";

function App() {
  // const [products, setProducts] = useState([]);
  const url = "http://localhost:3000/products";

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // Resgatando dados:

  // useEffect(() => {
  //   async function fetchAPI() {
  //     const response = await fetch(url);

  //     const data = await response.json();

  //     setProducts(data);
  //   }

  //   fetchAPI();
  // }, []);

  // Costum hook:

  const { data: items, httpConfig, loading } = useFetch(url);

  // Adição de produtos

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.length < 5 || price.length < 1) return;

    const product = {
      name,
      price,
    };

    httpConfig(product, "POST");
    setName("");
    setPrice("");
  };

  // Removendo produto:
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de produtos</h1>
      <ul>
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>R$: {item.price}</span>
              <button onClick={() => handleRemove(item.id)}>Deletar</button>
            </li>
          ))}
      </ul>
      <div className="add__product">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              autoComplete="off"
              onChange={(event) => setName(event.target.value)}
            />
          </label>
          <label>
            Preço:
            <input
              type="text"
              name="price"
              value={price}
              autoComplete="off"
              onChange={(event) => setPrice(event.target.value)}
            />
          </label>
          {/* Loading no post */}
          {loading && (
            <button type="submit" disabled>
              Aguarde
            </button>
          )}
          {!loading && <button type="submit">Criar</button>}
        </form>
      </div>
    </div>
  );
}

export default App;
