import { PropsWithChildren, createContext } from "react";
import { useLocalStorage } from "../hooks/useLocaleStorage";
import { ScoreContextType } from "../interfaces/todos.interfaces";

export const ScoreContext = createContext({} as ScoreContextType);

export default function ScoreProvider({ children }: PropsWithChildren) {
  const [score, setScore] = useLocalStorage<number>("score", 0);

  const handleIncrementScore = (currentScore: number) => {
    setScore((prevScore: number) => prevScore + currentScore);
  };

  const values = {
    score,
    handleIncrementScore,
  };

  return (
    <ScoreContext.Provider value={values}>{children}</ScoreContext.Provider>
  );
}
