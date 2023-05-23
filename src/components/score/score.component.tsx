import moon from "../../assets/img/luna.png";

import "./score.component.css";

export default function Score() {
  return (
    <div className="score">
      <span className="score__number">10000</span>
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
