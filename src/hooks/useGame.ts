import { useState } from 'react';
import { Turns } from '../types/turns';

interface Scores {
  [Turns.one]: number;
  [Turns.two]: number;
}

const useGame = () => {
  const [currentTurn, setCurrentTurn] = useState<Turns>(Turns.one);
  const [scores, setScores] = useState<Scores>({
    [Turns.one]: 0,
    [Turns.two]: 0
  });

  const switchTurn = () => {
    setCurrentTurn(prev => (prev === Turns.one ? Turns.two : Turns.one));
  };

  const incrementScore = () => {
    setScores(prevScores => ({
      ...prevScores,
      [currentTurn]: prevScores[currentTurn] + 1
    }));
  };

  return {
    currentTurn,
    scores,
    switchTurn,
    incrementScore
  };
};

export default useGame;
