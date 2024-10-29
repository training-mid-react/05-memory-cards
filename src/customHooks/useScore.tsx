import { useState } from 'react';

enum TURNS {
  ONE = 'uno',
  TWO = 'dos'
}

const initialScores = {
  [TURNS.ONE]: 0,
  [TURNS.TWO]: 0
}

const useScore = () => {
  const [currentTurn, setCurrentTurn] = useState<TURNS>(TURNS.ONE);
  const [scores, setScores] = useState(initialScores);

  const switchTurn = () => {
    setCurrentTurn(prev => (prev === TURNS.ONE ? TURNS.TWO : TURNS.ONE));
  };

  const resetScores = () => {
    setCurrentTurn(TURNS.ONE)
    setScores(initialScores)
  }

  return { currentTurn, scores, switchTurn, setScores, resetScores };
};

export default useScore;
