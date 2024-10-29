import { useEffect, useRef, useState } from "react";
import { cardInit } from "../constants/constants";
import { Turns } from "../types/interfaces";

export const useApp = () => {
    const [currentTurn, setCurrentTurn] = useState<Turns>(Turns.one);
    const [scores, setScores] = useState({
        [Turns.one]: 0,
        [Turns.two]: 0
    })

    const countRef = useRef(1)
    const timeRef = useRef(0)

    const [cards, setCards] = useState(cardInit)

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
        // ! cambio para usar el ultimo estados con el callback del state
        setCards( prevCards => prevCards.map(card => {
            if (!card.assert) {
                return { ...card, flipped: false }
            }

            return card
        }))

        return () => clearInterval(timeRef.current)
    }, [currentTurn])

    return {
        scores,
        currentTurn,
        cards,
        chooseCard
    }
}