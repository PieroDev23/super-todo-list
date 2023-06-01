import { useContext } from "react";
import { ScoreContext } from "../context/score.context";

export function useScore() {
  return useContext(ScoreContext);
}
