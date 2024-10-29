import { useGame } from './useGame';
import { useScore } from './useScore';
import { useCards } from './useCards';
import { checkMatch } from '../utils';

export const useMemoryGame = () => {
  const { currentTurn, selectedCards, switchTurn } = useGame();
  const { scores, incrementScore } = useScore();
  const { cards, chooseCard, setCards } = useCards(selectedCards, switchTurn);

  const handleMatch = () => {
    incrementScore(currentTurn);
    setCards(prevCards =>
      prevCards.map(card =>
        selectedCards.current.includes(card.id) ? { ...card, matched: true } : card
      )
    );
    selectedCards.current = [];
  };

  const chooseCardWithCheck = (cardId: number) => {
    chooseCard(cardId);
    const updatedCards = [...cards];
    
    if (selectedCards.current.length === 2) {
      const matchFound = checkMatch(updatedCards, selectedCards.current);
      if (matchFound) {
        handleMatch();
      }
    }
  };

  return { currentTurn, scores, cards, chooseCard: chooseCardWithCheck };
};
