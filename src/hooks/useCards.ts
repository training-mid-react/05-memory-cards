import { useState, useRef, useEffect } from "react";
import { CardType, initialCards } from "../constants/cards";

interface UseCardsProps {
  onMatch: () => void;
  onMismatch: () => void;
}

const useCards = ({ onMatch, onMismatch }: UseCardsProps) => {
  const [cards, setCards] = useState<CardType[]>(initialCards);
  const timeoutRef = useRef<number | null>(null);

  const chooseCard = (cardId: number) => {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === cardId && !card.flipped && !card.assert
          ? { ...card, flipped: true }
          : card
      )
    );
  };

  useEffect(() => {
    const flippedCards = cards.filter((card) => card.flipped && !card.assert);

    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (first?.icon.type === second?.icon.type) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            card.id === first?.id || card.id === second?.id
              ? { ...card, assert: true }
              : card
          )
        );
        onMatch();
      } else {
        timeoutRef.current = setTimeout(() => {
          setCards((prevCards) =>
            prevCards.map((card) =>
              card.assert ? card : { ...card, flipped: false }
            )
          );
          onMismatch();
        }, 1500);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [cards, onMatch, onMismatch]);

  return {
    cards,
    chooseCard,
  };
};

export default useCards;
