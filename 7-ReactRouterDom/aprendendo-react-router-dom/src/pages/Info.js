import React from "react";
import { useParams } from "react-router-dom";

import "./Info.css";

const Info = () => {
  const { id } = useParams();

  return (
    <header className="heading">
      <h1>Sou o info do produto!</h1>
      <p>
        ID do produto: <span>{id}</span>
      </p>
    </header>
  );
};

export default Info;
