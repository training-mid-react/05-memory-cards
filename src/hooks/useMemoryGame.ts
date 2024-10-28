import { useState, useRef, useEffect } from 'react';
import { Turns, CardType, Score } from '../types';
import { initializeCards, flipCard, checkMatch } from '../utils';

export const useMemoryGame = () => {
  const [currentTurn, setCurrentTurn] = useState<Turns>(Turns.One);
  const [scores, setScores] = useState<Score>({ [Turns.One]: 0, [Turns.Two]: 0 });
  const [cards, setCards] = useState<CardType[]>(initializeCards());
  const selectedCards = useRef<number[]>([]);
  const timeoutRef = useRef<any | null>(null);

  const handleMatch = () => {
    setScores(prevScores => ({
      ...prevScores,
      [currentTurn]: prevScores[currentTurn] + 1,
    }));

    setCards(prevCards =>
      prevCards.map(card =>
        selectedCards.current.includes(card.id) ? { ...card, matched: true } : card
      )
    );

    selectedCards.current = [];
  };

  const resetFlippedCards = (newCards: CardType[]) => {
    timeoutRef.current = setTimeout(() => {
      setCards(newCards.map(card =>
        selectedCards.current.includes(card.id) ? { ...card, flipped: false } : card
      ));
      setCurrentTurn(prevTurn => (prevTurn === Turns.One ? Turns.Two : Turns.One));
      selectedCards.current = [];
    }, 1000);
  };

  const chooseCard = (cardId: number) => {
    if (selectedCards.current.length === 2) return;

    const updatedCards = flipCard(cards, cardId);
    setCards(updatedCards);
    selectedCards.current.push(cardId);

    if (selectedCards.current.length === 2) {
      checkMatch(updatedCards, selectedCards.current) ? handleMatch() : resetFlippedCards(updatedCards);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return { currentTurn, scores, cards, chooseCard };
};
