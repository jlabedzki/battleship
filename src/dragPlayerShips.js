//Need to add some logic here to make sure that:
//1. Can't drag elements while game is ongoing
//2. Can't drag elements on top of eachother
//3. Can't rotate elements once they're placed on the board


// $('.square').droppable({
//   drop: function(event, ui) {
//     $(this).addClass('taken')
//   }
// });



// $('.grid div').droppable({
//   drop: function(event, ui) {
//     $(this).addClass('taken')
//   }
// });

// $(destroyer).draggable({
//   containment: '.userGrid',
//   snap: '.square',
// });

// $(submarine).draggable({
//   containment: '.userGrid',
//   snap: '.square'
// });

// $(cruiser).draggable({
//   containment: '.userGrid',
//   snap: '.square'
// });

// $(battleship).draggable({
//   containment: '.userGrid',
//   snap: '.square'
// });

// $(carrier).draggable({
//   containment: '.userGrid',
//   snap: '.square'
// });

// let selectedShipNameWithIndex;
// let draggedShip;
// let draggedShipLength;
// let selectedShipIndex;
// ships.forEach(ship => $(ship).on('dragstart', dragStart));
// userSquares.forEach(square => square.addEventListener('dragstart', dragStart));
// userSquares.forEach(square => square.addEventListener('dragover', dragOver));
// userSquares.forEach(square => square.addEventListener('dragenter', dragEnter));
// userSquares.forEach(square => square.addEventListener('dragleave', dragLeave));
// userSquares.forEach(square => square.addEventListener('dragdrop', dragDrop));
// userSquares.forEach(square => square.addEventListener('dragend', dragEnd));

// ships.forEach(ship => $(ship).on('mousedown', ev => {
//   selectedShipNameWithIndex = ev.target.id;
// }));
  
// function dragStart() {
//   draggedShip = this;
//   draggedShipLength = this.childNodes.length;
// };

// function dragOver(ev) {
//   ev.preventDefault();
// };

// function dragEnter(ev) {
//   ev.preventDefault();
// };

// function dragLeave(ev) {
//   // ev.preventDefault();
//   console.log('dragLeave');
// };

// function dragDrop() {
//   const shipNameWithLastID = draggedShip.lastChild.id;
//   const shipClass = shipNameWithLastID.slice(0, -2);
//   console.log(shipClass);
//   const lastShipIndex = parseInt(shipNameWithLastID.substr(-1));
//   let shiplastID = lastShipIndex + parseInt(this.dataset.id);

//   selectedShipIndex = parseInt(selectedShipNameWithIndex.subtr(-1))
//   console.log(selectedShipIndex);
// };

// const dragEnd = () => {
  
// };


