import React from "react";
import { Turns } from "../../types/turns";
import "./style.scss";

interface HeaderProps {
  scores: {
    [key in Turns]: number;
  };
  currentTurn: Turns;
}

export const Header: React.FC<HeaderProps> = ({ scores, currentTurn }) => {
  return (
    <>
      <div className="header__score">
        <h2>Jugador uno: {scores[Turns.one]}</h2>
        <h2>Jugador dos: {scores[Turns.two]}</h2>
      </div>
      <h1 className="header__title">Turno: Jugador {currentTurn}</h1>
    </>
  );
};
