import { createContext, ReactNode, useContext, useState } from "react";

// Defining the context value
type ScoreContextType = {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
};

const Context = createContext<ScoreContextType | undefined>(undefined);

export function useScore() {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }
  return context;
}

export const ScoreContext = ({ children }: { children: ReactNode }) => {
  const [score, setScore] = useState(0);

  return (
    <Context.Provider value={{ score, setScore }}>{children}</Context.Provider>
  );
};
