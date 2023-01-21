import React, { useReducer, useState } from "react";

import styles from "./UseReducer.module.css";

const UseReducer = () => {
  const [clicked, setClicked] = useState(false);

  const [number, dispatch] = useReducer((state, action) => {
    setClicked(true);
    return Math.random(state).toFixed(2);
  });

  // Tasks inicial, vamos iniciar o reducer com ela.

  const initialTasks = [
    { id: 1, text: "Fazer alguma coisa." },
    { id: 2, text: "Fazer outra coisa." },
  ];

  // Função que vai manipular o reducer.
  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const newTask = {
          id: Math.random(),
          text: taskText,
        };

        setTaskText("");

        return [...state, newTask];

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  // Usando useState para pegar os states que vão ser adicionados:

  const [taskText, setTaskText] = useState("");

  // Reducer, ela recebe a função que criamos para manipular o state e o valor incial

  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!taskText) return;

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <section className={styles.section}>
      <header>
        <h1>Aprendendo useReducer!</h1>
        <p>
          O <strong>useReducer</strong> também é um gerenciador de valores, a
          diferença dele para o <strong>useState</strong> é que ele receber uma
          <strong> função</strong> para alterar o valor.
        </p>
        <main>
          <div className={styles.example__1}>
            <h3>Aplicando useReducer:</h3>
            <p>Número: {number}</p>
            <button onClick={() => dispatch()}>Gerar valor</button>
            {clicked && (
              <p>
                O botão <strong>"Gerar valor"</strong> recebe a função
                <strong> dispatch </strong>
                do <strong>useReducer</strong>, então a clicar no botão, a
                função é <strong>executada</strong> e no caso desse exemplo
                geramos um número e manipulamos ele.
              </p>
            )}
          </div>
          <div className={styles.example__2}>
            <h3>Usando useReducer com action</h3>
            <p>
              Quando usamos o <strong>useReducer</strong> em coisas mais
              complexas, geralmente ele é utilizado com a estrutura{" "}
              <strong>switch</strong> com
              <strong> switch</strong>.
            </p>
            <h4>Tarefas: </h4>
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  {task.text}
                  <input
                    type="button"
                    value="X"
                    onDoubleClick={() => removeTask(task.id)}
                  />
                </li>
              ))}
            </ul>
            <form onSubmit={handleSubmit}>
              <label>
                <span>Digite uma tarefa:</span>
                <input
                  type="text"
                  value={taskText}
                  onChange={({ target }) => setTaskText(target.value)}
                />
              </label>
              <button>Criar tarefa</button>
            </form>
          </div>
        </main>
      </header>
    </section>
  );
};

export default UseReducer;
