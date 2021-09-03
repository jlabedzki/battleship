class Ship {
  constructor(name, horizontal, vertical) {
    this.name = name;
    this.directions = [horizontal, vertical]
  }
}

const opponentDestroyer = new Ship('opponentDestroyer', [0, 1], [0, 10]);
const opponentSubmarine = new Ship('opponentSubmarine', [0, 1, 2], [0, 10, 20]);
const opponentCruiser = new Ship('opponentCruiser', [0, 1, 2], [0, 10, 20]);
const opponentBattleship = new Ship('opponentBattleship', [0, 1, 2, 3], [0, 10, 20, 30]);
const opponentCarrier = new Ship('opponentCarrier', [0, 1, 2, 3, 4], [0, 10, 20, 30, 40]);

const destroyer = new Ship('destroyer', [0, 1], [0, 10]);
const submarine = new Ship('submarine', [0, 1, 2], [0, 10, 20]);
const cruiser = new Ship('cruiser', [0, 1, 2], [0, 10, 20]);
const battleship = new Ship('battleship', [0, 1, 2, 3], [0, 10, 20, 30]);
const carrier = new Ship('carrier', [0, 1, 2, 3, 4], [0, 10, 20, 30, 40]);