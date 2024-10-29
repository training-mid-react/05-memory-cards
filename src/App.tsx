import AppBody from './components/AppBody';
import AppHeader from './components/AppHeader';
import { useApp } from './hooks/useApp';
import "./styles/app.scss";


function App() {
  const { cards, currentTurn, scores, chooseCard } = useApp()

  return (
    <>
      <AppHeader  currentTurn={currentTurn} scores={scores} />
      <AppBody  cards={cards} chooseCard={chooseCard} />
    </>
  )
}

export default App
