// 3 - Alterando context
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const ChangeCounter = () => {
  const { counter, setCounter } = useContext(CounterContext);

  const handleChangeContext = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <p>Usando useContext para alterar um valor do context:</p>
      <button onClick={handleChangeContext}>Incrementar valor</button>
    </>
  );
};

export default ChangeCounter;
