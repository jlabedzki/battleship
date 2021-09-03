const randomizePlayerShips = (ship) => {
  const horizontal = ship.directions[0];
  const vertical = ship.directions[1];
  const randomDirection = Math.floor(Math.random() * 2);
  const currentDirection = ship.directions[randomDirection];

  if (currentDirection === horizontal) {
    direction = 1;
  }

  //Setting the direction to 10 for vertical ships will avoid placing a ship that's longer than there are number of rows left, eg. Starting to place a carrier (5 squares long) vertically on the 8th row would result in part of the carrier being placed off the grid.
  if (currentDirection === vertical) {
    direction = 10;
  }

  //Initialize a random starting square to place a ship based on the number of squares on the board minus the length of the ship times its direction. This equation could produce a negative number, thus the use of Math.abs()
  const randomize = Math.abs(Math.floor(Math.random() * 100 - (ship.directions[0].length * direction)));

  const taken = currentDirection.some(ind => userSquares[randomize + ind].classList.contains('taken'));

  //Check to see if we're far enough away from the right edge to place our entire ship. 
  const rightEdge = currentDirection.some(ind => (randomize + ind) % 10 === 9);

  //If the ship is being placed vertically no need to check the edge placement
  if (currentDirection === vertical && !taken) {
    currentDirection.forEach(ind => {
      userSquares[randomize + ind].classList.add('taken', 'pulsing', ship.name);
    });
    return;
  }

  if (!taken && !rightEdge) {
    currentDirection.forEach(ind => {
      userSquares[randomize + ind].classList.add('taken', ship.name);
    });
    return;
  }

  //If the square we want to start on is taken or if we're too close to the right edge for a horizontal placement, then we run the function again.
  randomizePlayerShips(ship);

};