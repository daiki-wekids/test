
//--------------------ボタン入力---------------------

function NewGameClick() {
  initGame();
}

function LeftClick() {
  target = document.getElementById("output");
  target.innerHTML = "Left Clicked";
  moveLeft();
}

function UpClick() {
  target = document.getElementById("output");
  target.innerHTML = "Up Clicked";
  moveUp();
}

function DownClick() {
  target = document.getElementById("output");
  target.innerHTML = "Down Clicked";
  moveDown();
}

function RightClick() {
  target = document.getElementById("output");
  target.innerHTML = "Right Clicked";
  moveRight();
}

function TestClick() {
  target = document.getElementById("output");
  target.innerHTML = "Test Clicked";
  newTile();
}

//----------------------キー入力-----------------------

document.onkeydown = function (e){
  if(!e) e = window.event; // レガシー

  if(e.keyCode == 37){
    moveLeft();
  }
  if(e.keyCode == 38){
    moveUp();
  }
  if(e.keyCode == 40){
    moveDown();
  }
  if(e.keyCode == 39){
    moveRight();
  }
}
/*
document.onkeydown = function (e){
  if(!e) e = window.event; // レガシー

  if(e.keyCode == 38){
    moveUp();
  }
}

document.onkeydown = function (e){
  if(!e) e = window.event; // レガシー

  if(e.keyCode == 40){
    moveDown();
  }
}

document.onkeydown = function (e){
  if(!e) e = window.event; // レガシー

  if(e.keyCode == 39){
    moveRight();
  }
}
*/