import React from "react";
import { useEffect, useState, useRef } from "react";
import styles from "./UseRef.module.css";

const UseRef = () => {
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  // Manipulando DOM:

  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    setText("");
    inputRef.current.focus;
  };

  return (
    <section className={styles.container}>
      <header className={styles.description}>
        <h1>Aprendendo a usar UseRef</h1>
        <p>
          O useRef pode ser utilizado como useState para gerenciar valores, a
          diferença é que ele é um objeto e seu valor está na propriedade
          current.
        </p>
        <p>
          outra propriedade interessante dele é que ele não re-renderiza o
          componente ao ser alterado.
        </p>
      </header>
      <div className={styles.counters}>
        <h2>Evitando loops infinitos:</h2>
        <p>O componente renderizou: {numberRef.current} vezes.</p>
        <p>Counter 1: {counter}</p>
        <button onClick={() => setCounter(counter + 1)}>Contador A</button>
        <p>Counter 2: {counterB}</p>
        <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      </div>
      <div className={styles.counters}>
        <h2>Manipulando DOM:</h2>

        <form onSubmit={handleSubmit}>
          <label>
            Digite algo:
            <input
              type="text"
              ref={inputRef}
              value={text}
              onChange={({ target }) => setText(target.value)}
            />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </section>
  );
};

export default UseRef;
