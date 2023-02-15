import { createContext, useContext } from "react";

export const SomeContext = createContext();

export const HookUseContext = ({ children }) => {
  const contextValue = "EU SOU O CONTEXTO!";

  return (
    <SomeContext.Provider value={{ contextValue }}>
      {children}
    </SomeContext.Provider>
  );
};

export const UseHookContext = () => {
  return useContext(SomeContext);
};
