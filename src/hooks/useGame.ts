import { useState, useRef } from 'react';
import { Turns } from '../types';

export const useGame = () => {
  const [currentTurn, setCurrentTurn] = useState<Turns>(Turns.One);
  const selectedCards = useRef<number[]>([]);

  const switchTurn = () => {
    setCurrentTurn(prevTurn => (prevTurn === Turns.One ? Turns.Two : Turns.One));
    selectedCards.current = [];
  };

  return {
    currentTurn,
    selectedCards,
    switchTurn,
  };
};
