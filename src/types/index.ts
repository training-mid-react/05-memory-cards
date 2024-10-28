import { IconType } from 'react-icons';

export enum Turns {
  One = 'one',
  Two = 'two'
}

export interface CardType {
  id: number;
  icon: IconType;
  flipped: boolean;
  matched: boolean;
}

export type Score = Record<Turns, number>;
