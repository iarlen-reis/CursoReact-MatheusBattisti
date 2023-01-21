import React from "react";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <section className={styles.section}>
      <header>
        <h1>Bem-vindo ao aprendendo hooks!</h1>
        <p>
          Aprenda os principais hooks do react e a desenvolver seu proprio hook.
        </p>
      </header>
      <div className={styles.image}>
        <img src="public/undraw_online_stats_0g94.svg" alt="" />
      </div>
    </section>
  );
};

export default Home;
