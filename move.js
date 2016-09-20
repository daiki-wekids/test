function moveLeft() {

	  for (var k = 0; k < 4; k++) {
		for (var j = 1; j <= 4; j++){
			for (var i = 2; i <= 4; i++){
				if (grid[i][j] !== 0 && i !== 1 && grid[i - 1][j] === 0) {
  					grid[i - 1][j] = grid[i][j];
  					grid[i][j] = 0;
  					//break;
  				}
  					//左にあるコマが同じ数字なら+1して自分は消える
  				else if(grid[i - 1][j] === grid[i][j] && grid[i][j] !== 0) { 
  					grid[i - 1][j] = grid[i - 1][j] + 101;
  					grid[i][j] = 0;
  					//break;
  				}
			}
		}
	}
	newTile();
  	showBoard();
}

function moveUp() {

	for (var k = 0; k < col; k++) {
		for (var i = 1; i <= col; i++){
			for (var j = 2; j <= row; j++){
				if (grid[i][j] !== 0 && j !== 1 && grid[i][j - 1] === 0) {
  					grid[i][j - 1] = grid[i][j];
  					grid[i][j] = 0;
  					//break;
  				}

  				else if(grid[i][j - 1] === grid[i][j] && grid[i][j] !== 0) { 
  					grid[i][j - 1] = grid[i][j - 1] + 101;
  					grid[i][j] = 0;
  					//break;
  				}
			}
		}
	}
	newTile();
	showBoard();
}

function moveDown() {
	
	for (var k = 0; k < 4; k++) {
		for (var i = 1; i <= 4; i++){
			for (var j = 3; j >= 1; j--){
				if (grid[i][j] !== 0 && j !== 4 && grid[i][j + 1] === 0) {
  					grid[i][j + 1] = grid[i][j];
  					grid[i][j] = 0;
  					//break;
  				}

  				else if(grid[i][j + 1] === grid[i][j] && grid[i][j] !== 0) { 
  					grid[i][j + 1] = grid[i][j + 1] + 101;
  					grid[i][j] = 0;
  					//break;
  				}
			}
		}
	}
	newTile();
	showBoard();
}

function moveRight() {

	for (var k = 0; k < 4; k++) {
		for (var j = 1; j <= 4; j++){
			for (var i = 3; i >= 1; i--){
				if (grid[i][j] !== 0 && i !== 4 && grid[i + 1][j] === 0) {
  					grid[i + 1][j] = grid[i][j];
  					grid[i][j] = 0;
  					//break;
  				}

  				else if(grid[i + 1][j] === grid[i][j] && grid[i][j] !== 0) { 
  					
  					grid[i + 1][j] = grid[i + 1][j] + 101;
  					grid[i][j] = 0;
  					//break;
  				}
			}
		}
	}
	newTile();
	showBoard();
}