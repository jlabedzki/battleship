let isGameOver = false;
let turn = 'user';
let opponentPreviousTurn;

let destroyerCount = 2;
let submarineCount = 3;
let cruiserCount = 3;
let battleshipCount = 4;
let carrierCount = 5;
let userTotalCount = 17;

let opponentDestroyerCount = 2;
let opponentSubmarineCount = 3;
let opponentCruiserCount = 3;
let opponentBattleshipCount = 4;
let opponentCarrierCount = 5;
let opponentTotalCount = 17;

const fireMissile = square => {
  const label = $(square).html();

  if (!$(square).hasClass('hit') && !$(square).hasClass('miss')) {

    if ($(square).hasClass('opponentDestroyer')) opponentDestroyerCount--;
    if ($(square).hasClass('opponentSubmarine')) opponentSubmarineCount--;
    if ($(square).hasClass('opponentCruiser')) opponentCruiserCount--;
    if ($(square).hasClass('opponentBattleship')) opponentBattleshipCount--;
    if ($(square).hasClass('opponentCarrier')) opponentCarrierCount--;

    if ($(square).hasClass('taken')) {
      opponentTotalCount--;
      $('#messageLog').prepend(`<p>Player fires at ${label}: <strong>HIT!</strong></p>`)
      $(square).addClass('hit');
      $(square).html('');
    } else {
      $('#messageLog').prepend(`<p>Player fires at ${label}: <strong>MISS!</strong></p>`)
      $(square).addClass('miss');
      $(square).html('');
    }

    turn = 'opponent';
    gameplay();
  }
};

const opponentFire = () => {
  const random = Math.floor(Math.random() * 100);
  const square = userSquares[random];
  const label = $(square).html();

  if (!$(square).hasClass('hit') && !$(square).hasClass('miss')) {
    if ($(square).hasClass('destroyer')) {
      $(square).removeClass('destroyer');
      destroyerCount--;
    }
    if ($(square).hasClass('submarine')) {
      $(square).removeClass('submarine');
      submarineCount--;
    }
    if ($(square).hasClass('cruiser')) {
      $(square).removeClass('cruiser');
      cruiserCount--;
    }
    if ($(square).hasClass('battleship')) {
      $(square).removeClass('battleship');
      battleshipCount--;
    }
    if ($(square).hasClass('carrier')) {
      $(square).removeClass('carrier');
      carrierCount--;
    }

    if ($(square).hasClass('taken')) {
      userTotalCount--;
      $('#messageLog').prepend(`<p>Opponent fires at ${label}: <strong>HIT!</strong></p>`)
      $(square).addClass('hit');
      $(square).html('');
    } else {
      $('#messageLog').prepend(`<p>Opponent fires at ${label}: <strong>MISS!</strong></p>`)
      $(square).addClass('miss');
      $(square).html('');
    }

    turn = 'user'
    gameplay();
  } else {
    opponentFire();
  }
};

const gameplay = () => {
  console.log('usercount:', userTotalCount, 'opponent count:', opponentTotalCount);
  if (userTotalCount === 0 || opponentTotalCount === 0) {
    isGameOver = true;
  }

  if (isGameOver) {
    opponentSquares.forEach(square => {
      $(square).off('click');
    })

    return gameOver('user');
  }

  if (turn === 'user') {
    $(playerTurn).addClass('turnIndicator');
    $(opponentTurn).removeClass('turnIndicator');

    opponentSquares.forEach(square => {
      $(square).click(() => {
        setTimeout(() => {
          fireMissile(square);
        }, 150);
      });
    });
  }

  if (turn === 'opponent') {
    $(playerTurn).removeClass('turnIndicator');
    $(opponentTurn).addClass('turnIndicator');

    opponentSquares.forEach(square => {
      $(square).off('click');
    })

    setTimeout(() => {
      opponentFire();
    }, 1000)
  }
}

const gameOver = player => {
  $(playerTurn).html('');
  $(opponentTurn).html('');
  let winner = player;
  return;
}