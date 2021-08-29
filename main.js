$(document).ready(() => {
  generateBoard(userGrid, userSquares, 100);
  generateBoard(computerGrid, computerSquares, 100);

  randomizeComputerShips(computerDestroyer);
  randomizeComputerShips(computerSubmarine);
  randomizeComputerShips(computerCruiser);
  randomizeComputerShips(computerBattleship);
  randomizeComputerShips(computerCarrier);
});