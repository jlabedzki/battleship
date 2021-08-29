//Since the page loads with the ships horizontally, we set the default to horizontal
let horizontal = true;


//Takes in a ship parameter, which is a variable referencing the ships container element in the html file. Also takes in the name of the ship as a string so that we can toggle the class. If horizontal is true, then we change the class of the ship to it's vertical counterpart and vise versa.
const rotateShips = (ship, name) => {
  if (horizontal) {
    ship.toggleClass(`${name}ContainerVertical`)
    horizontal = false;
  }
  if (!horizontal) {
    ship.toggleClass(`${name}Container`);
    horizontal = true;
  }
};


destroyer.dblclick(() => {
  rotateShips(destroyer, 'destroyer');
});

submarine.dblclick(() => {
  rotateShips(submarine, 'submarine');
});

cruiser.dblclick(() => {
  rotateShips(cruiser, 'cruiser');
});

battleship.dblclick(() => {
  rotateShips(battleship, 'battleship');
});

carrier.dblclick(() => {
  rotateShips(carrier, 'carrier');
});

