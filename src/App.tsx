import './App.css';
import { Card } from './components/Card';
import { Header } from './components/Header';
import useGame from './hooks/useGame';
import useCards from './hooks/useCards';

function App() {
  const { currentTurn, scores, switchTurn, incrementScore } = useGame();

  const handleMatch = () => {
    incrementScore();
  };

  const handleMismatch = () => {
    switchTurn();
  };

  const { cards, chooseCard } = useCards({
    onMatch: handleMatch,
    onMismatch: handleMismatch
  });

  return (
    <div className='app'>
      <Header scores={scores} currentTurn={currentTurn} />
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
    </div>
  );
}

export default App;
