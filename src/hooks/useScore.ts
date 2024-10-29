import { useState } from 'react';
import { Turns, Score } from '../types';

export const useScore = () => {
  const [scores, setScores] = useState<Score>({ [Turns.One]: 0, [Turns.Two]: 0 });

  const incrementScore = (turn: Turns) => {
    setScores(prevScores => ({
      ...prevScores,
      [turn]: prevScores[turn] + 1,
    }));
  };

  return {
    scores,
    incrementScore,
  };
};
