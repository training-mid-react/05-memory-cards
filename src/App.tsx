import React from 'react';
import { useMemoryGame } from './hooks/useMemoryGame';
import { Card } from './components/Card';
import { Turns } from './types';
import './App.css';

const App: React.FC = () => {
  const { currentTurn, scores, cards, chooseCard } = useMemoryGame();

  return (
    <>
      <div className="app__header">
        <h2>Jugador uno: {scores[Turns.One]}</h2>
        <h2>Jugador dos: {scores[Turns.Two]}</h2>
      </div>
      <h1>Turno: Jugador {currentTurn === Turns.One ? 'Uno' : 'Dos'}</h1>
      <section className="cards">
        {cards.map(card => (
          <Card
            key={card.id}
            icon={<card.icon size={50} />} 
            isFlipped={card.flipped || card.matched}
            onClick={() => chooseCard(card.id)}
          />
        ))}
      </section>
    </>
  );
};

export default App;
