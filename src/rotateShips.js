let horizontal = true;

const rotateShips = (ship) => {
  if (horizontal) {
    ship.toggleClass(`destroyerContainerVertical`)
    horizontal = false;
  }
};


destroyer.click(() => {
  rotateShips(destroyer);
});

submarine.click(() => {

});

cruiser.click(() => {

});

battleship.click(() => {

});

carrier.click(() => {

});

