import { createContext, useReducer } from "react";

// exportando a criação de context:
export const TitleColorContext = createContext();

// criando e exportando provider:

export const titleColorReducer = (state, action) => {
  // criando Switch para aletar context:
  switch (action.type) {
    case "RED":
      return { ...state, color: "red" };
    case "BLUE":
      return { ...state, color: "blue" };
    case "TEAL":
      return { ...state, color: "teal" };
    case "GREEN":
      return { ...state, color: "green" };
    default:
      return state;
  }
};

export const TitleColorContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(titleColorReducer, { color: "purple" });

  return (
    <TitleColorContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TitleColorContext.Provider>
  );
};
