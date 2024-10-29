export enum Turns {
    one = 'uno',
    two = 'dos'
}
export interface PropsAppHeader {
    currentTurn: Turns
    scores: {
        uno: number;
        dos: number;
    }
}

export interface Card {
    id: number;
    icon: JSX.Element;
    flipped: boolean;
    assert: boolean;
}

export interface PropsAppBody {
    cards: Card[];
    chooseCard: (cardId: number) => void
}

