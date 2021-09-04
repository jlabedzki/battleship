$(document).ready(() => {
  $('#gameInfo').hide();
  $('.gameOver').hide();
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
    $('#gameInfo').show();
  });

  $('#playAgain').click(() => {
    clearBoard(userSquares);
    clearBoard(opponentSquares);

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

    $('.gameOver').hide();
    $('.button').show();

    $('#pDestroyer').removeClass('linethrough');
    $('#pSubmarine').removeClass('linethrough');
    $('#pCruiser').removeClass('linethrough');
    $('#pBattleship').removeClass('linethrough');
    $('#pCarrier').removeClass('linethrough');
    $('#oDestroyer').removeClass('linethrough');
    $('#oSubmarine').removeClass('linethrough');
    $('#oCruiser').removeClass('linethrough');
    $('#oBattleship').removeClass('linethrough');
    $('#oCarrier').removeClass('linethrough');

    $('#messageLog').empty();

    turn = 'user'

    destroyerCount = 2;
    submarineCount = 3;
    cruiserCount = 3;
    battleshipCount = 4;
    carrierCount = 5;
    userTotalCount = 17;

    opponentDestroyerCount = 2;
    opponentSubmarineCount = 3;
    opponentCruiserCount = 3;
    opponentBattleshipCount = 4;
    opponentCarrierCount = 5;
    opponentTotalCount = 17;
  })

});