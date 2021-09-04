

const clearBoard = (squares) => {
  squares.forEach(square => {
    $(square).removeClass('taken');
    $(square).removeClass('destroyer');
    $(square).removeClass('submarine');
    $(square).removeClass('cruiser');
    $(square).removeClass('battleship');
    $(square).removeClass('carrier');
  })
}