import { CardType } from './types';
import { FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { TbBrandCSharp } from 'react-icons/tb';

export const initializeCards = (): CardType[] => [
  { id: 1, icon: FaJava, flipped: false, matched: false },
  { id: 2, icon: IoLogoJavascript, flipped: false, matched: false },
  { id: 3, icon: IoLogoJavascript, flipped: false, matched: false },
  { id: 4, icon: TbBrandCSharp, flipped: false, matched: false },
  { id: 5, icon: FaJava, flipped: false, matched: false },
  { id: 6, icon: TbBrandCSharp, flipped: false, matched: false }
];

export const flipCard = (cards: CardType[], cardId: number): CardType[] =>
  cards.map(card => (card.id === cardId ? { ...card, flipped: !card.flipped } : card));

export const checkMatch = (cards: CardType[], selectedCardIds: number[]): boolean => {
  if (selectedCardIds.length < 2) return false;
  const [firstCard, secondCard] = selectedCardIds.map(id => cards.find(card => card.id === id)!);
  return firstCard.icon === secondCard.icon;
};
