import { Card } from ".";
import { Turns } from "../enum";

export interface CardHookProps {
  scores: {
    uno: number;
    dos: number;
  };
  currentTurn: Turns;
  cards: Card[];
  chooseCard: (cardId: number) => void;
}
