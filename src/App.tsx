import { useEffect, useRef, useState } from 'react';
import { Card } from './components/Card/Card';
import './App.css';
import { INITIAL_CARDS } from './constants/constants';
import { CARD } from './types/types';

enum Turns {
  one = 'uno',
  two = 'dos'
}

function App() {
  const [currentTurn, setCurrentTurn] = useState<Turns>(Turns.one);
  const [scores, setScores] = useState({ [Turns.one]: 0, [Turns.two]: 0 });
  const [cards, setCards] = useState(INITIAL_CARDS);
  const countRef = useRef(1);
  const timeRef = useRef<number | null>(null);

  const chooseCard = (cardId: number) => {
    const newCards = toggleCard(cards, cardId);
    setCards(newCards);

    if (countRef.current % 2 === 0) {
      const flippedCards = newCards.filter(card => card.flipped && !card.matched);

      if (flippedCards.length === 2) {
        handleCardMatch(flippedCards);
      }
    }
    countRef.current += 1;
  };

  const toggleCard = (cards: CARD[], cardId: number) => {
    return cards.map(card =>
      card.id === cardId ? { ...card, flipped: !card.flipped } : card
    );
  };

  const handleCardMatch = (flippedCards: CARD[]) => {
    const [firstCard, secondCard] = flippedCards;

    if (firstCard.icon.component === secondCard.icon.component) {
      markAsMatched(firstCard, secondCard);
    } else {
      setTimeout(() => resetFlippedCards(), 1500);
    }
  };

  const markAsMatched = (firstCard: CARD, secondCard: CARD) => {
    setCards(prevCards => prevCards.map(card =>
      card.id === firstCard.id || card.id === secondCard.id ? { ...card, matched: true } : card
    ));
    setScores(prevScores => ({ ...prevScores, [currentTurn]: prevScores[currentTurn] + 1 }));
  };

  const resetFlippedCards = () => {
    setCards(prevCards => prevCards.map(card =>
      card.flipped && !card.matched ? { ...card, flipped: false } : card
    ));
    setCurrentTurn(prev => (prev === Turns.one ? Turns.two : Turns.one));
  };


  useEffect(() => {
    return () => {
      if (timeRef.current) {
        clearTimeout(timeRef.current);
      }
    };
  }, [currentTurn]);

  return (
    <>
      <div className='app__header'>
        <h2>Jugador uno: {scores[Turns.one]}</h2>
        <h2>Jugador dos: {scores[Turns.two]}</h2>
      </div>
      <h1>Turno: Jugador {currentTurn}</h1>
      <section className='cards'>
        {cards.map(card => (
          <Card
            key={card.id}
            icon={<card.icon.component size={card.icon.size} />}
            isFlipped={card.flipped}
            onClick={() => chooseCard(card.id)}
          />
        ))}
      </section>
    </>
  );
}

export default App;
