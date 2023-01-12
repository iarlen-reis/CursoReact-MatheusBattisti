import "./App.css";
// import { useContext } from "react";
// import { CounterContext } from "./context/CounterContext";

// 4 - Importando alterador do context:
import ChangeCounter from "./components/ChangeCounter";

// 5 - Refatorando com hook:
import { useCounterContext } from "./hooks/useCounterContext";

// Criando context para cor de titulo:

import { useTitleColorContext } from "./hooks/useTitleColorContext";

function App() {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  // Context de color (complexo):
  const { color, dispatch } = useTitleColorContext();

  // Alterando state (complexo):
  const setTitleColor = (color) => {
    dispatch({ type: color });
  };

  return (
    <div className="App">
      <h1 style={{ color: color }}>Aprendendo context API</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
      {/* Alterando valor do context (complexo) */}
      <button onClick={() => setTitleColor("RED")}>Vermelho</button>
      <button onClick={() => setTitleColor("GREEN")}>Verde</button>
      <button onClick={() => setTitleColor("BLUE")}>Azul</button>
    </div>
  );
}

export default App;
