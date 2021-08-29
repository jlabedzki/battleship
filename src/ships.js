class Ship {
  constructor(name, horizontal, vertical) {
    this.name = name;
    this.directions = [horizontal, vertical]
  }
}

const dest = new Ship('destroyer', [0, 1], [0, 10]);

const sub = new Ship('submarine', [0, 1, 2], [0, 10, 20]);

const cruz = new Ship('cruiser', [0, 1, 2], [0, 10, 20]);

const battle = new Ship('battleship', [0, 1, 2, 3], [0, 10, 20, 30]);

const car = new Ship('carrier', [0, 1, 2, 3, 4], [0, 10, 20, 30, 40]);