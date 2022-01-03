import shuffleArray from "shuffle-array";

export type Card = number;
export type Stacks = Card[][];

export interface Game {
    stacks: Stacks;
    round: number;
    pickedCard?: Card; // done if defined
}

const CARDS_COUNT = 27;
const CARDS: Card[] = new Array(CARDS_COUNT).fill(0).map((_, i) => i);

function toStacks(cards: Card[]): Stacks {
    const stacks: Stacks = [[], [], []];
    cards.forEach((card, i) => stacks[i % 3].push(card));
    return stacks;
}

export function newGame(): Game {
    const cards = [...CARDS];

    shuffleArray(cards);

    return {
        stacks: toStacks(cards),
        round: 0,
    };
}

export function turn({ stacks, round }: Game, stackWithCard: number): Game {
    const otherIndices = [0, 1, 2].filter(i => i !== stackWithCard);

    const newStacks = toStacks([
        ...stacks[otherIndices[0]],
        ...stacks[stackWithCard],
        ...stacks[otherIndices[1]],
    ]);

    const newRound = round + 1;

    return {
        stacks: newStacks,
        round: newRound,
        pickedCard: newRound === 3 ? newStacks[1][4] : undefined,
    };
}