import { useEffect, useRef, useCallback } from 'react';
import useCards from './useCards';
import useScore from './useScore';

const useGame = () => {
  const { cards, setCards, resetCards } = useCards();
  const { currentTurn, scores, switchTurn, setScores, resetScores } = useScore();

  const countRef = useRef(1);
  const timeRef = useRef<number | null>(null);

  const chooseCard = useCallback((cardId: number) => {
    const newCards = cards.map(card => {
      if (card.id === cardId) {
        return { ...card, flipped: !card.flipped }
      }
      
      return card
    })
    
    setCards(newCards)
    
    if (countRef.current % 2 === 0) {
      const flippedCards = newCards.filter(card => card.flipped && !card.assert)
      console.log(flippedCards)

      if (flippedCards[0].icon.type.name === flippedCards[1].icon.type.name) {
        setCards(newCards.map(card => {
          if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
            return { ...card, assert: true }
          }
          
          return card
        }))
        setScores(prevScores => ({ ...prevScores, [currentTurn]: prevScores[currentTurn] + 1 }))
      } else {
        timeRef.current = setTimeout(() => switchTurn(), 1500)
      }
    }

    countRef.current += 1
  }, [currentTurn, switchTurn, setCards]);

  useEffect(() => {
    setCards(prevCards => 
      prevCards.map(card => (!card.assert ? { ...card, flipped: false } : card))
    );

    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, [currentTurn, setCards]);

  const resetGame = () => {
    resetCards()
    resetScores()
  }

  return { currentTurn, scores, cards, chooseCard, resetGame };
};

export default useGame;

