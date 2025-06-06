import { createContext, useContext, useState } from "react";

export function useScore() {
  return useContext(Context);
}

const Context = createContext({});

export const ScoreContext = ({ children }) => {
  const [score, setScore] = useState(0);

  return (
    <Context.Provider value={{ score, setScore }}>{children}</Context.Provider>
  );
};
