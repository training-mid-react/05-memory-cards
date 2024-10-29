import { PropsAppBody } from "../../types/interfaces";
import { Card } from "../Card";

const AppBody = ({ cards, chooseCard }: PropsAppBody) => {
    return (
        <section className='cards'>
            {cards.map(card => <Card key={card.id} icon={card.icon} isFlipped={card.flipped} onClick={() => chooseCard(card.id)} />)}
        </section>
    )
}

export default AppBody;