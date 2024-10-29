import { MutableRefObject, useState } from 'react';
import { CardType } from '../types';
import { initializeCards, flipCard, checkMatch } from '../utils';

export const useCards = (selectedCards: MutableRefObject<number[]>, switchTurn: () => void) => {
    const [cards, setCards] = useState<CardType[]>(initializeCards());

    const resetFlippedCards = (newCards: CardType[]) => {
        setTimeout(() => {
            setCards(newCards.map(card =>selectedCards.current.includes(card.id) ? { ...card, flipped: false } : card
            ));
            switchTurn();
        }, 1000);
    };

    const chooseCard = (cardId: number) => {
        if (selectedCards.current.length === 2 || cards.find(card => card.id === cardId)?.flipped) return;

        const updatedCards = flipCard(cards, cardId);

        setCards(updatedCards);

        selectedCards.current.push(cardId);

        if (selectedCards.current.length === 2) {
            if (!checkMatch(updatedCards, selectedCards.current)) {
                resetFlippedCards(updatedCards);
            }
        }
    };

    return {
        cards,
        chooseCard,
        setCards,
    };
};
