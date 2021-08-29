const randomizeComputerShips = (ship) => {
  const vertical = ship.directions[1];
  const randomDirection = Math.floor(Math.random() * 2);
  const currentDirection = ship.directions[randomDirection];

  if (randomDirection === 0) {
    direction = 1;
  }

  if (randomDirection === 1) {
    direction = 10;
  }

  const randomize = Math.abs(Math.floor(Math.random() * computerSquares.length - (ship.directions[0].length * direction)));

  const taken = currentDirection.some(ind => computerSquares[randomize + ind].classList.contains('taken'));

  const rightEdge = currentDirection.some(ind => (randomize + ind) % 10 === 9);

  const leftEdge = currentDirection.some(ind => (randomize + ind) % 10 === 0);

  if (currentDirection === vertical && !taken) {
    currentDirection.forEach(ind => {
      computerSquares[randomize + ind].classList.add('taken', ship.name);
    });
    return;
  }

  if (!taken && !rightEdge && !leftEdge) {
    currentDirection.forEach(ind => {
      computerSquares[randomize + ind].classList.add('taken', ship.name);
    });
    return;
  }

  randomizeComputerShips(ship);

};