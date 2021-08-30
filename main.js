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

  $('.randomize').click(() => {
    clearBoard(destroyer);
    clearBoard(submarine);
    clearBoard(cruiser);
    clearBoard(battleship);
    clearBoard(carrier);
    randomizePlayerShips(destroyer);
    randomizePlayerShips(submarine);
    randomizePlayerShips(cruiser);
    randomizePlayerShips(battleship);
    randomizePlayerShips(carrier);
  });
});