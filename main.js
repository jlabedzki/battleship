$(document).ready(() => {
  generateBoard(userGrid, userSquares, 100);
  generateBoard(computerGrid, computerSquares, 100);

  randomizePlayerShips(destroyer);
  randomizePlayerShips(submarine);
  randomizePlayerShips(cruiser);
  randomizePlayerShips(battleship);
  randomizePlayerShips(carrier);

  randomizeComputerShips(computerDestroyer);
  randomizeComputerShips(computerSubmarine);
  randomizeComputerShips(computerCruiser);
  randomizeComputerShips(computerBattleship);
  randomizeComputerShips(computerCarrier);

  $('#reshuffle').click(function () {
    const btn = $(this);

    clearBoard();
    setTimeout(() => {
      randomizePlayerShips(destroyer);
      randomizePlayerShips(submarine);
      randomizePlayerShips(cruiser);
      randomizePlayerShips(battleship);
      randomizePlayerShips(carrier);
    }, 250)

    btn.prop('disabled', true);
    window.setTimeout(() => {
      btn.prop('disabled', false);
    }, 300);
  });

  $(start).click(() => {
    startGame();
  });
});