import "./App.css";
import { Card } from "./components/Card";
import { Turns } from "./utils";
import { useCards } from "./hooks";

export const App = () => {
  const { scores, currentTurn, cards, chooseCard } = useCards();

  return (
    <>
      <div className="app__header">
        <h2>Jugador uno: {scores[Turns.one]}</h2>
        <h2>Jugador dos: {scores[Turns.two]}</h2>
      </div>
      <h1>Turno: Jugador {currentTurn}</h1>
      <section className="cards">
        {cards.map((card) => (
          <Card
            key={card.id}
            icon={card.icon}
            isFlipped={card.flipped}
            onClick={() => chooseCard(card.id)}
          />
        ))}
      </section>
    </>
  );
};

export default App;
