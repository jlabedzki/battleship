//Clears the players ships off their board when clicking the reshuffle button.

const clearBoard = () => {
  userSquares.forEach(square => {
    $(square).removeClass('taken');
    $(square).removeClass('destroyer');
    $(square).removeClass('submarine');
    $(square).removeClass('cruiser');
    $(square).removeClass('battleship');
    $(square).removeClass('carrier');
  })
}