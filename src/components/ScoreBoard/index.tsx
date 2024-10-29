import './style.scss'

interface ScoreBoardProps {
  scores: { [key: string]: number };
  currentTurn: string;
}

export const ScoreBoard: React.FC<ScoreBoardProps> = ({ scores, currentTurn }) => {
  console.log(scores);
  
  return (
    <div className='scoreboard'>
      <div className="scoreboard__players">
        <h2>Jugador uno: {scores['uno']}</h2>
        <h2>Jugador dos: {scores['dos']}</h2>
      </div>
      <h1>Turno: Jugador {currentTurn}</h1>
    </div>
  )
};
