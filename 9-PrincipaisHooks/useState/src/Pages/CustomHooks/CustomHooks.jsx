import React from "react";
import styles from "./CustomHooks.module.css";

import { useState } from "react";
import { usePrevius } from "../../hooks/usePrevius";

const CustomHooks = () => {
  const [number, setNumber] = useState(0);

  const previusValue = usePrevius(number);

  return (
    <section className={styles.container}>
      <header className={styles.description}>
        <h1>Aprendendo CustomHooks</h1>
        <p>
          São hooks que criamos, muitas vezes usados para abtrair funções
          complexas do componente ou simplesmente reaproveitar código.
        </p>
      </header>
      <div className={styles.pratice}>
        <h2>Praticando CustomHooks</h2>
        <div className={styles.values}>
          <p>Valor Atual: {number}</p>
          <p>Valor Antigo: {previusValue}</p>
        </div>
        <button onClick={() => setNumber(Math.random())}>Alterar</button>
      </div>
    </section>
  );
};

export default CustomHooks;
