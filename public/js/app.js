(function ($) {
  $(document).ready(() => {
    elementsToBeHiddenBeforeStart();
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
    $usernameSubmit.click(displayUsername);
    $rulesButton.click(toggleRules);
    $reshuffle.click(reshuffle);
    $start.click(startGame);
    $playAgain.click(playAgain);
  });

  const elementsToBeHiddenBeforeStart = () => {
    $usernameSubmit.hide();
    $rules.hide();
    $chooseDifficulty.hide();
    $('#main').hide();
    $('#gameInfo').hide();
    $('#endInfo').hide();
  }

  const displayUsername = () => {
    const username = $('#username').val();
    $('#playerName').text(`${username}`)
    $('#welcome').hide();
    //change below to 'difficulty.show()' after creating div
    $chooseDifficulty.show();
    // $('#main').show();
    $('#leaderboard').append(`<tr><td>${$('#playerName').html()}</td><td id="numOfWins">0</td></tr>`);
  };

  $('#username').on('keypress', e => {
    if (e.which === 13 && $('#username').val()) {
      setTimeout(() => {
        $('#usernameSubmit').click();
      }, 300);
    }
  });

  const toggleRules = () => {
    if ($rules.is(':hidden')) {
      $rules.show();
      return;
    }
    $rules.hide();
  };

  const reshuffle = function () {
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
    ;
  }

  const startGame = () => {
    gameplay();
    $('.button').hide();
    $('#gameInfo').show();
    $rules.hide();
  }

  const playAgain = () => {
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

    $('#endInfo').hide();
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
  };
})(jQuery);