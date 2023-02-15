import React from "react";
import styles from "./UseContext.module.css";

import { UseHookContext } from "../../hooks/HookUseContext";

const UseContext = () => {
  const { contextValue } = UseHookContext();

  return (
    <section className={styles.container}>
      <header className={styles.descripton}>
        <h1>Aprendendo sobre useContext</h1>
        <p>
          O useContext é um hooks que permite o compartilhamento de estados
          entre componentes de uma aplicação.
        </p>
      </header>
      <div className={styles.contextList}>
        <h2>Como utilizar o useContext?</h2>
        <ul>
          <li>- Crie uma pasta chamada hooks dentro da pasta src.</li>
          <li>- Crie um arquivo chamado use + nome do contexto.</li>
          <li>- Importe o CreateContext e crie um contexto.</li>
          <li>- Crie um provider para o contexto.</li>
          <li>- Englobe as rotas da aplicação com o contextoProvider.</li>
          <li>
            - Agora é só import a função useContext onde precisar usar o
            contexto!
          </li>
        </ul>
        <p>Esse é o context criado: {contextValue}</p>
      </div>
    </section>
  );
};

export default UseContext;
