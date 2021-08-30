class Ship {
  constructor(name, horizontal, vertical) {
    this.name = name;
    this.directions = [horizontal, vertical]
  }
}

//Creating a computer ship object for each type of ship to use in the randomizeComputerBoard function. Each ship has a name and two arrays. The arrays correspond to how the ship would look like on the computerGrid horizontally and vertically, respectively.

const computerDestroyer = new Ship('computerDestroyer', [0, 1], [0, 10]);
const computerSubmarine = new Ship('computerSubmarine', [0, 1, 2], [0, 10, 20]);
const computerCruiser = new Ship('computerCruiser', [0, 1, 2], [0, 10, 20]);
const computerBattleship = new Ship('computerBattleship', [0, 1, 2, 3], [0, 10, 20, 30]);
const computerCarrier = new Ship('computerCarrier', [0, 1, 2, 3, 4], [0, 10, 20, 30, 40]);

const destroyer = new Ship('destroyer', [0, 1], [0, 10]);
const submarine = new Ship('submarine', [0, 1, 2], [0, 10, 20]);
const cruiser = new Ship('cruiser', [0, 1, 2], [0, 10, 20]);
const battleship = new Ship('battleship', [0, 1, 2, 3], [0, 10, 20, 30]);
const carrier = new Ship('carrier', [0, 1, 2, 3, 4], [0, 10, 20, 30, 40]);