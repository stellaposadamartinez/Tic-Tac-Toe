let felder;

let nummerierungRow = 2;
let nummerierungColumn = 2;
let columnNums = "ABCDEF";

let input
let button
let feldName

let structure = [];

function setup() {
  let canvasWidth = 300;
  let canvasHeight = 350;

  for (let i = 0; i < nummerierungColumn; i++) {
    let row = [];
    for (let j = 0; j < nummerierungRow; j++) {
      row.push("");
    }
    structure.push(row);
  }

  createCanvas(canvasWidth, canvasHeight);
  background('lightgrey');

  input = createInput();
  input.position(60, 315);

  button = createButton('submit');
  button.position(190, 315);
  button.mousePressed(eingabe);

  felder = new gameboard();
  felder.draw();
  
  fill('black');
  textSize(15);
  for (var i = 0; i <= nummerierungColumn; i++) {
    for (var j = 0; j <= nummerierungRow; j++) {
      text(columnNums[i] + (j + 1), i * 100 + 70, 95 + j * 100);
    }
  }
}

function eingabe(){
  let i = input.value();
  print(input.value());
  print('row: ', int(i[1]) - 1);
  print('column: ', int(i[0]) - 1);
}
