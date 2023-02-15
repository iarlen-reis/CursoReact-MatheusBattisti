import React from "react";
import styles from "./UseEffect.module.css";

import { useEffect, useState } from "react";

const UseEffect = () => {
  const [show, setShow] = useState("");
  const [showText, setShowText] = useState("");
  useEffect(() => {
    setShow("Toda vez que a página for recarregada serei exibido.");
  }, []);

  useEffect(() => {
    console.log(
      "Sou executado toda vez que o valor da dependência é alterado!"
    );
  }, [showText]);
  return (
    <main className={styles.container}>
      <header className={styles.intro__description}>
        <h1>O que é UseEffect?</h1>
        <p>
          useEffect é um dos hooks mais utilizados, ele serve para monitorar
          algo dentro da nossa aplicação.
        </p>
      </header>
      <div className={styles.second__description}>
        <h2>Algumas coisas que podemos fazer com useEffect:</h2>
        <ul>
          <li>- Determinar quando uma ação deve ser executada.</li>
          <li>- Executar alteração na DOM e requisições HTTP.</li>
          <li>- Podemos controlar uma ação por um array de dependências.</li>
        </ul>
      </div>
      <div className={styles.pratice__container}>
        <div className={styles.no__depedences}>
          <h2>useEffect sem dependências</h2>
          <p>
            - O useEffect sem dependência será executado toda vez que a página
            for recarregada:
          </p>
          <p>{show}</p>
        </div>
        <div className={styles.with__depedences}>
          <h2>useEffect com dependências</h2>
          <p>- Será executado apenas quando uma dependência for modificada:</p>
          <p>ShowText: {showText}</p>
          <button onClick={() => setShowText("Mudei!")}>Mudar showText</button>
        </div>
      </div>
    </main>
  );
};

export default UseEffect;
