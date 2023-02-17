import React from "react";
import styles from "./UseLayoutEffect.module.css";

import { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [name, setName] = useState("Algum nome");

  useEffect(() => {
    console.log("2");

    setName("Mudou de nome!");
  }, []);

  // Sempre será executado primeiro!
  useLayoutEffect(() => {
    console.log("1");

    setName("Outro nome!");
  }, []);

  return (
    <section className={styles.container}>
      <header className={styles.description}>
        <h1>Aprendendo useLayoutEffect</h1>
        <p>
          Ele é muito parecido com o useEffect, A grande diferença é que ele
          roda antes de rederizar o componente ou seja, ele é síncrono.
        </p>
      </header>
      <div className={styles.pratice}>
        <h2>Praticando useLayoutEffect</h2>
        <p>Nome: {name}</p>
      </div>
    </section>
  );
};

export default UseLayoutEffect;
