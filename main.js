$(document).ready(() => {
  generateBoard(userGrid, userSquares, 100);
  generateBoard(computerGrid, computerSquares, 100);

  randomizeShips(destroyer, userSquares);
  randomizeShips(submarine, userSquares);
  randomizeShips(cruiser, userSquares);
  randomizeShips(battleship, userSquares);
  randomizeShips(carrier, userSquares);

  randomizeShips(computerDestroyer, computerSquares);
  randomizeShips(computerSubmarine, computerSquares);
  randomizeShips(computerCruiser, computerSquares);
  randomizeShips(computerBattleship, computerSquares);
  randomizeShips(computerCarrier, computerSquares);

  $('#reshuffle').click(function () {
    const btn = $(this);

    clearBoard();
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
    $('.button').prop('disabled', true);
    startGame();
  });
});