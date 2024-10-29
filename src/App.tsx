import { ScoreBoard } from './components/ScoreBoard';
import { Card } from './components/Card';
import './App.css';
import useGame from './customHooks/useGame';

const App = () => {
  const { currentTurn, scores, cards, chooseCard, resetGame } = useGame();

  const allMatched = cards.every(card => card.assert);

  return (
    <>
      <ScoreBoard scores={scores} currentTurn={currentTurn} />
      <section className='cards'>
        {cards.map(card => (
          <Card
            key={card.id}
            icon={card.icon}
            isFlipped={card.flipped}
            onClick={() => chooseCard(card.id)}
          />
        ))}
      </section>
      <div className='button'>
        {allMatched && (
          <button onClick={() => resetGame()}>Reiniciar Juego</button>
        )}
      </div>
    </>
  );
};

export default App;