import { formatScore } from "../../helpers/utilities.helper";
import { useScore } from "../../hooks/useScore.hook";

import "./score.component.css";
import moon from "../../assets/img/luna.png";

export default function Score() {
  const { score } = useScore();

  return (
    <div className="score">
      <span className="score__number">{formatScore(score)}</span>
      <img
        className="score__image"
        src={moon}
        alt="star icon"
        width={25}
        height={25}
      />
    </div>
  );
}
