let felder;
let nummerierung = [];
let nummerierungRow = 3;
let nummerierungColumn = 3;
let columnNums = "ABCDEFG";

function setup() {
  let canvasWidth = 300;
  let canvasHeight = 300;

  createCanvas(canvasWidth, canvasHeight);

  felder = new gameboard();
  felder.draw();
  
  for (var i = 0; i <= nummerierungColumn; i++) {
    for (var j = 0; j <= nummerierungRow; j++) {
      print('nummerierung:', columnNums[i], j + 1, 80 + i * 100, 95 + i * 100);
      fill('black');
      text(columnNums[i] + j + 1, 80 + i * 100, 95 + i * 100);
    }
  }
}

function draw() {

  //felder.draw();
  felder.eingabe();
}
