//Generates a blank board with 100 individual squares
//Each square is labeled A-J, 1-10
(function ($) {

})(jQuery);
const generateBoard = (grid, squares, amount) => {
  let counter = 1;

  while (counter <= amount) {
    const square = document.createElement('div');
    square.className = 'square';

    if (counter <= 10) {
      square.innerHTML = 'A' + counter;
    }

    if (counter > 10 && counter <= 20) {
      square.innerHTML = 'B' + (counter - 10);
    }

    if (counter > 20 && counter <= 30) {
      square.innerHTML = 'C' + (counter - 20);
    }

    if (counter > 30 && counter <= 40) {
      square.innerHTML = 'D' + (counter - 30);
    }

    if (counter > 40 && counter <= 50) {
      square.innerHTML = 'E' + (counter - 40);
    }

    if (counter > 50 && counter <= 60) {
      square.innerHTML = 'F' + (counter - 50);
    }

    if (counter > 60 && counter <= 70) {
      square.innerHTML = 'G' + (counter - 60);
    }

    if (counter > 70 && counter <= 80) {
      square.innerHTML = 'H' + (counter - 70);
    }

    if (counter > 80 && counter <= 90) {
      square.innerHTML = 'I' + (counter - 80);
    }

    if (counter > 90 && counter <= 100) {
      square.innerHTML = 'J' + (counter - 90);
    }

    //Setting the id for each square. Using dataset.id so that the user and computer's squares can share the same id.
    square.dataset.id = counter;

    //Using jquery to add each square to the board
    grid.append(square);

    //Pushing each square to an array (either userSquares or computerSquares) to be used in other functions.
    squares.push(square);
    counter++;
  }
};

