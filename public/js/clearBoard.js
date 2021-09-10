const clearBoard = (squares) => {
  squares.forEach(square => {
    $(square).removeClass('taken');
    $(square).removeClass('hit');
    $(square).removeClass('miss');
    $(square).removeClass('destroyer');
    $(square).removeClass('submarine');
    $(square).removeClass('cruiser');
    $(square).removeClass('battleship');
    $(square).removeClass('carrier');
    $(square).removeClass('opponentDestroyer');
    $(square).removeClass('opponentSubmarine');
    $(square).removeClass('opponentCruiser');
    $(square).removeClass('opponentBattleship');
    $(square).removeClass('opponentCarrier');
  })
}