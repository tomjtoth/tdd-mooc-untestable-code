// TODO: Singletons or global variables
// TODO: File system
// TODO: Network sockets
// TODO: Time: days until Christmas
// TODO: Concurrency

// Randomness: rolling dice in a dice game

export function diceRoll() {
  const min = 1;
  const max = 6;
  return Math.floor(Math.random() * (max + 1 - min) + min);
}

export function diceHandValue(die1, die2) {
  if (die1 === die2) {
    // one pair
    return 100 + die1;
  } else {
    // high die
    return Math.max(die1, die2);
  }
}
