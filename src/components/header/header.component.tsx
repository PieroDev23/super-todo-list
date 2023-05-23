import { NavLink } from "react-router-dom";

import Score from "../score/score.component";

import "./header.component.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header__content container">
        <div className="logo">
          <h1 className="logo__title">TODO APP</h1>
        </div>

        <div className="header__bar">
          <nav className="navigation">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link--active" : ""}`
              }
            >
              All
            </NavLink>
            <NavLink
              to={"/pending"}
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link--active" : ""}`
              }
            >
              Pending
            </NavLink>
            <NavLink
              to={"/finished"}
              className={({ isActive }) =>
                `navigation__link ${isActive ? "navigation__link--active" : ""}`
              }
            >
              Finished
            </NavLink>
          </nav>

          <div className="header__bar__score">
            <Score />
          </div>
        </div>
      </div>
    </header>
  );
}
