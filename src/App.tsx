import { FaJava } from 'react-icons/fa6'
import './App.css'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandCSharp } from 'react-icons/tb'
import { Card } from './components/Card'
import { useEffect, useRef, useState } from 'react'

enum Turns {
  one = 'uno',
  two = 'dos'
}

function App() {
  const [currentTurn, setCurrentTurn] = useState<Turns>(Turns.one);
  const [scores, setScores] = useState({
    [Turns.one]: 0,
    [Turns.two]: 0
  })

  const countRef = useRef(1)
  const timeRef = useRef(0)

  const [cards, setCards] = useState([
    {
      id: 1,
      icon: <FaJava size={50} />,
      flipped: false,
      assert: false
    },
    {
      id: 2,
      icon: <IoLogoJavascript size={50} />,
      flipped: false,
      assert: false
    },
    {
      id: 3,
      icon: <IoLogoJavascript size={50} />,
      flipped: false,
      assert: false
    },
    {
      id: 4,
      icon: <TbBrandCSharp size={50} />,
      flipped: false,
      assert: false
    },
    {
      id: 5,
      icon: <FaJava size={50} />,
      flipped: false,
      assert: false
    },
    {
      id: 6,
      icon: <TbBrandCSharp size={50} />,
      flipped: false,
      assert: false
    }
  ])

  const chooseCard = (cardId: number) => {
    
    const newCards = cards.map(card => {
      if (card.id === cardId) {
        return { ...card, flipped: !card.flipped }
      }
      
      return card
    })
    
    setCards(newCards)
    
    if (countRef.current % 2 === 0) {
      const flippedCards = newCards.filter(card => card.flipped && !card.assert)
      console.log(flippedCards)

      if (flippedCards[0].icon.type.name === flippedCards[1].icon.type.name) {
        setCards(newCards.map(card => {
          if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
            return { ...card, assert: true }
          }
          
          return card
        }))
        setScores(prevScores => ({ ...prevScores, [currentTurn]: prevScores[currentTurn] + 1 }))
      } else {
        timeRef.current = setTimeout(() => setCurrentTurn(prev => prev === Turns.one ? Turns.two : Turns.one), 1500)
      }
    }

    countRef.current += 1
  }

  useEffect(() => {
    setCards(cards.map(card => {
      if (!card.assert) {
        return {...card, flipped: false}
      }

      return card
    }))

    return () => clearInterval(timeRef.current)
  }, [currentTurn])

  return (
    <>
      <div className='app__header'>
        <h2>Jugador uno: {scores[Turns.one]}</h2>
        <h2>Jugador dos: {scores[Turns.two]}</h2>
      </div>
      <h1>Turno: Jugador {currentTurn}</h1>
      <section className='cards'>
        {cards.map(card => <Card key={card.id} icon={card.icon} isFlipped={card.flipped} onClick={() => chooseCard(card.id)} />)}
      </section>
    </>
  )
}

export default App
