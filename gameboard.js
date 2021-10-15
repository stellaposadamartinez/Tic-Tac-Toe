class gameboard {
  constructor() {
  }

  draw() {   
    gameboardfields(0, 0);
  }
  
  eingabe() {
  }
}

function gameboardfields(x, y) {
  fill("mintcream");
  rect(x, y, 100, 100);
  rect(x + 100, y, 100, 100);
  rect(x + 200, y, 100, 100);

  rect(x, y + 100, 100, 100);
  rect(x + 100, y + 100, 100, 100);
  rect(x + 200, y + 100, 100, 100);

  rect(x, y + 200, 100, 100);
  rect(x + 100, y + 200, 100, 100);
  rect(x + 200, y + 200, 100, 100);
}