let isGameOver = false;
let whoseTurn = 'user';

const startGame = () => {
  if (isGameOver) {
    return;
  }

  if (whoseTurn === 'user') {
    $(playerTurn).html('◄');
    $(opponentTurn).html('');
  }

  if (whoseTurn === 'opponent') {
    $(playerTurn).html('');
    $(opponentTurn).html('◄');
  }
}