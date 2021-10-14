class gameboard {
  constructor() { //boardWidth, boardHeight, numColumns, numRows
    //this.fields = [];
    //for(let i = 0; i < numRows; i < numColumns);
    this.letters = ["A", "B", "C"];
  }

  draw() {   
    //loop zur nummerierung der felder mit einer for-schleife

    //Felder
    gameboardfields(0, 0);

    //nummerierung der felder
    //this.fieldnumber("A1", 80, 95);
    //this.fieldnumber("B1", 180, 95);
    //this.fieldnumber("C1", 280, 95);

    //this.fieldnumber("A2", 80, 195);
    //this.fieldnumber("B2", 180, 195);
    //this.fieldnumber("C2", 280, 195);

    //this.fieldnumber("A3", 80, 295);
    //this.fieldnumber("B3", 180, 295);
    //this.fieldnumber("C3", 280, 295);
  }
  
  eingabe() {
    if(keyIsPressed) {
      if(key == 'a' && '') {
        textSize(50);
        text('X', 45, 55);
      } else if (key == 'a' + '2') {
        
      }
    }
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