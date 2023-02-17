import React from "react";
import { useState, useEffect } from "react";

const List = ({ getItems }) => {
  const [myItens, setMyItens] = useState([]);

  useEffect(() => {
    console.log("Buscando itens do DB...");

    setMyItens(getItems);
  }, [getItems]);

  return (
    <div>
      {myItens.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </div>
  );
};

export default List;
