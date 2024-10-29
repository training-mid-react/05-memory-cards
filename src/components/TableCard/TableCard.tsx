import { Card } from "../Card";
import { useCards } from "../../hooks";
import { Turns } from "../../interfaces";
import './style.scss';



export const TableCard = () => {

    const { cards, currentTurn, scores, chooseCard } = useCards();

    return (
        <div className='table-card'>
            <div className='table-card__header' >
                <h2>Jugador uno: {scores[Turns.one]} </h2>
                < h2 > Jugador dos: {scores[Turns.two]} </h2>
            </div>
            < h1 > Turno: Jugador {currentTurn} </h1>
            <section className='table-card__cards' >
                {
                    cards.map((card) => (
                        <Card
                            key={card.id}
                            icon={card.icon}
                            isFlipped={card.flipped}
                            onClick={() => chooseCard(card.id)}
                        />
                    ))
                }
            </section>
        </div>
    )
}
