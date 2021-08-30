//Clears the players ships off their board when clicking the reshuffle button.

const clearBoard = ship => {
  userSquares.forEach(square => {
    $(square).removeClass('taken');
    $(square).removeClass(ship.name);
  })
}