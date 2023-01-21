import React from "react";

import styles from "./UseState.module.css";

import { useState } from "react";

const UseState = () => {
  let userName = "João";
  const [name, setName] = useState("Felipe");
  const [clicked, setClicked] = useState(false);

  const [digitando, setDigitando] = useState("");

  const changeNames = () => {
    userName = "João alterado!";
    setName("Felipe alterado!");

    setClicked(true);
  };

  return (
    <section className={styles.section}>
      <header>
        <h1>Aprendendo useState</h1>
        <p>Geralmente é utilizamos para gereciamento de estado.</p>
      </header>
      <main>
        <h3>Por qual motivo usar useState?</h3>
        <p>
          Com o useState podemos alterar um valor de um state e renderiza-lo, o
          que não é possivel com váriaveis:
        </p>
        <div className={styles.examples}>
          <section>
            <p>
              <span>Variavel</span>: {userName}
            </p>
            <p>
              <span>useState</span>: {name}
            </p>
          </section>
          <button onClick={changeNames}>Alterar Valores!</button>
          <p
            className={`${styles.exemple__explication} ${
              clicked && styles.clicked
            }  `}
          >
            Como pode perceber, ao clicar no botão, apenas o valor com useState
            foi "alterado". Isso acontecer por causa da re-renderização do
            componente. <br /> Ambos valores foram alterados, mas como apenas o
            useState é re-rederizado, apenas ele mostra o valor alterado.
          </p>
        </div>
        <div className={styles.states__inputs}>
          <h3>O useState com inputs</h3>
          <p>
            Podemos utilizar o useState com input e com isso obtemos algumas
            acções, como por exemplo, ao atrelar o alteração de um state atraves
            do evento de onChange do input:
          </p>
          <form>
            <label>
              <span>Você está digitando: {digitando}</span>
              <input
                type="text"
                value={digitando}
                onChange={({ target }) => setDigitando(target.value)}
              />
            </label>
          </form>
          {digitando.length > 0 && (
            <>
              <p>
                O que acontece é que, como o useState está atrelado ao onChange
                do input, ao digitar no input, ele "seta" o use state com o
                valor atual do input e re-renderiza, assim o valor é alterado e
                re-renderizado sempre que algo e acrescentado ou removido do
                input.
              </p>
              <p>
                Isso nós permite pegar o valor em tempo real do input e assim
                trata-lo e envia-lo para o back-end.
              </p>
            </>
          )}
        </div>
      </main>
    </section>
  );
};

export default UseState;
