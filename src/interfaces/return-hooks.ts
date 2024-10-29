import { CardType } from "./Card";
import { Turns } from "./Turn-interface";

export interface CardsHookType {
    currentTurn: Turns;
    scores: Record<Turns, number>;
    cards: CardType[];
    chooseCard: (cardId: number) => void;
}