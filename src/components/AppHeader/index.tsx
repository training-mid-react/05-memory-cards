import { PropsAppHeader, Turns } from "../../types/interfaces";



const AppHeader = ({currentTurn,scores}: PropsAppHeader) => {
    return <>
        <div className='app__header'>
            <h2>Jugador uno: {scores[Turns.one]}</h2>
            <h2>Jugador dos: {scores[Turns.two]}</h2>
        </div>
        <h1>Turno: Jugador {currentTurn}</h1>
    </>
}

export default AppHeader;

