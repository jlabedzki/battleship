document.addEventListener('DOMContentLoaded', () => {
  generateBoard(userGrid, userSquares, 100);
  generateBoard(computerGrid, computerSquares, 100);

  randomizeComputerShips(dest);
  randomizeComputerShips(sub);
  randomizeComputerShips(cruz);
  randomizeComputerShips(battle);
  randomizeComputerShips(car);
});