$(document).ready(() => {
  generateBoard(userGrid, userSquares, 100);
  generateBoard(opponentGrid, opponentSquares, 100);

  randomizeShips(destroyer, userSquares);
  randomizeShips(submarine, userSquares);
  randomizeShips(cruiser, userSquares);
  randomizeShips(battleship, userSquares);
  randomizeShips(carrier, userSquares);

  randomizeShips(opponentDestroyer, opponentSquares);
  randomizeShips(opponentSubmarine, opponentSquares);
  randomizeShips(opponentCruiser, opponentSquares);
  randomizeShips(opponentBattleship, opponentSquares);
  randomizeShips(opponentCarrier, opponentSquares);

  $('#reshuffle').click(function () {
    const btn = $(this);

    clearBoard(userSquares);
    setTimeout(() => {
      randomizeShips(destroyer, userSquares);
      randomizeShips(submarine, userSquares);
      randomizeShips(cruiser, userSquares);
      randomizeShips(battleship, userSquares);
      randomizeShips(carrier, userSquares);
    }, 250)

    btn.prop('disabled', true);
    window.setTimeout(() => {
      btn.prop('disabled', false);
    }, 300);
  });

  $(start).click(() => {
    gameplay();
    $('.button').hide();
    $('#info').html('Info:');
  });

});