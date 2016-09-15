function NewGameClick() {
  location.reload();	// ブラウザが更新されるだけ
}

function LeftClick() {
  target = document.getElementById("output");
  target.innerHTML = "Left Clicked";
}

function UpClick() {
  target = document.getElementById("output");
  target.innerHTML = "Up Clicked";
}

function DownClick() {
  target = document.getElementById("output");
  target.innerHTML = "Down Clicked";
}

function RightClick() {
  target = document.getElementById("output");
  target.innerHTML = "Right Clicked";
}

function TestClick() {
  target = document.getElementById("output");
  target.innerHTML = "Test Clicked";
  board[1][1] = 5;
  field.showBoard();
}