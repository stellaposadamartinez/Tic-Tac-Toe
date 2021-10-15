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

  textSize(50);
  if(input.value() == 'A1x') {
    text('x', 35, 60);
  } else if(input.value() == 'A2x') {
    text('x', 35, 160); 
  } else if(input.value() == 'A3x') {
    text('x', 35, 260); 
  } else if(input.value() == 'B1x') {
    text('x', 135, 60); 
  } else if(input.value() == 'B2x') {
    text('x', 135, 160); 
  } else if(input.value() == 'B3x') {
    text('x', 135, 260); 
  } else if(input.value() == 'C1x') {
    text('x', 235, 60); 
  } else if(input.value() == 'C2x') {
    text('x', 235, 160); 
  } else if(input.value() == 'C3x') {
    text('x', 235, 260); 
  } else if(input.value() == 'A1o') {
    text('o', 35, 60);
  } else if(input.value() == 'A2o') {
    text('o', 35, 160);
  } else if(input.value() == 'A3o') {
    text('o', 35, 260);
  } else if(input.value() == 'B1o') {
    text('o', 135, 60);
  } else if(input.value() == 'B2o') {
    text('o', 135, 160);
  } else if(input.value() == 'B3o') {
    text('o', 135, 260);
  } else if(input.value() == 'C1o') {
    text('o', 235, 60);
  } else if(input.value() == 'C2o') {
    text('o', 235, 160);
  } else if(input.value() == 'C3o') {
    text('o', 235, 260);
  }

  /*text(input.value(), 50, 50);
  print(input.value());
  print('row: ', int(i[1]) - 1);
  print('column: ', int(i[0]) - 1);*/
}
