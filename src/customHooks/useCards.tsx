
import { useState } from "react";
import { initialCards } from "../constants";
import { Card } from "../types";
import { shuffleArray } from "../utils";

const useCards = () => {
  const [cards, setCards] = useState<Card[]>(shuffleArray(initialCards));

  const resetCards = () => {
    setCards(shuffleArray(initialCards));
  };

  return { cards, setCards, resetCards };
}

export default useCards;