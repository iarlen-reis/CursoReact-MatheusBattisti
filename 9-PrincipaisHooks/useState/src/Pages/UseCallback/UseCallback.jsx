import React from "react";

import styles from "./UseCallback.module.css";

import { useCallback, useState } from "react";
import List from "../../components/List/List";

const UseCallback = () => {
  const [counter, setCounter] = useState(0);

  const getItemsFromDataBase = useCallback(() => {
    return ["a", "b", "c"];
  }, []);

  return (
    <section className={styles.container}>
      <header className={styles.description}>
        <h1>Aprendendo useCallback</h1>
        <p>
          O useCallback basicamente memoriza uma função, fazendo ela <b>NÃO </b>
          ser reconstruida a cada rederização do componente.
        </p>
        <small>*Geralmente é utilizada para performace.</small>
      </header>
      <div className={styles.pratice}>
        <h2>Praticando useCallback</h2>
        <List getItems={getItemsFromDataBase} />
        <p>Contador: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Alterar!</button>
      </div>
    </section>
  );
};

export default UseCallback;
