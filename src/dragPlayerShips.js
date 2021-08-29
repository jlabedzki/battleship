//Need to add some logic here to make sure that:
//1. Can't drag elements while game is ongoing
//2. Can't drag elements on top of eachother
//3. Can't rotate elements once they're inside the user grid.

$(destroyer).draggable({
  containment: '.userGrid',
  snap: '.square'
});

$(submarine).draggable({
  containment: '.userGrid',
  snap: '.square'
});

$(cruiser).draggable({
  containment: '.userGrid',
  snap: '.square'
});

$(battleship).draggable({
  containment: '.userGrid',
  snap: '.square'
});

$(carrier).draggable({
  containment: '.userGrid',
  snap: '.square'
});
