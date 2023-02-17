import React from "react";

import styles from "./UseMemo.module.css";

import { useState, useEffect, useMemo } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  //const premiumNumbers = ["0", "100", "200"];

  const premiumNumbers = useMemo(() => {
    return ["0", "100", "200"];
  }, []);

  useEffect(() => {
    console.log("Premium Numbers foi alterado!");
  }, [premiumNumbers]);

  return (
    <section className={styles.container}>
      <header className={styles.descripton}>
        <h1>Aprendendo useMemo</h1>
        <p>
          O useMemo pode ser utilizado para garantir a referência a um objeto.
          Fazendo com que algo possa ser atrelado a uma refêrencia e não a um
          valor.
        </p>
      </header>
      <div className={styles.pratice}>
        <h2>Praticando useMemo</h2>
        <input type="text" onChange={({ target }) => setNumber(target.value)} />
        {premiumNumbers.includes(number) ? (
          <p className={styles.Win}>Acertou o número!</p>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default UseMemo;
