import React from "react";

import styles from "./UseImperativeHandle.module.css";

import { useRef } from "react";

import SomeComponent from "../../components/SomeComponent/SomeComponent";

const UseImperativeHandle = () => {
  const componentRef = useRef();

  return (
    <section className={styles.container}>
      <header className={styles.description}>
        <h1>Aprendendo useImperativeHandle</h1>
        <p>
          Com ele podemos adicionar ações em outro componente de forma
          imperativa. Como não podemos passar refs como props, precisamos usar
          uma função fowardRef.
        </p>
      </header>
      <div className={styles.pratice}>
        <h2>Praticando useImperative</h2>
        <SomeComponent ref={componentRef} />
        <button onClick={() => componentRef.current.validar()}>Validar</button>
      </div>
    </section>
  );
};

export default UseImperativeHandle;
