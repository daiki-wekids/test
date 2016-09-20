
	const row = 4;	//マスの数 (定数)
	const col = 4;

	grid = [];

	for(var i = 1; i <= col; i++){	// col * row のgrid配列すべてに0を入れる
		grid[i] = [];
		for(var j = 1; j <= row; j++){
			grid[i][j] = 0;
		}
	}

	function newTile() {

		twoOrFour = Math.floor( Math.random() * 2 ) + 1 ;

		for (var i = 0; i < 1000; i++) {

			randRow = Math.floor( Math.random() * row ) + 1 ;
			randCol = Math.floor( Math.random() * col ) + 1 ;

			if (grid[randRow][randCol] === 0) {
				grid[randRow][randCol] = twoOrFour;
				break;
			}
		}
		showBoard();
	}

	function　showBoard() {
		var b = document.getElementById("board");

		tile = [document.getElementById("cell"),	//配列　添字　0
				document.getElementById("num2"),		// 1
				document.getElementById("num4"),		// 2
				document.getElementById("num8"),		// 3
				document.getElementById("num16"),		// 4
				document.getElementById("num32"),		// 5
				document.getElementById("num64"),		// 6
				document.getElementById("num128"),		// 7
				document.getElementById("num256"),		// 8
				document.getElementById("num512"),		// 9
				document.getElementById("num1024"),	// 10
				document.getElementById("num2048"),]	// 11

		for(var i = 1; i <= col; i++){	// ボードすべてに0を入れる
			//grid[i] = [];
			for(var j = 1; j <= row; j++){
				//grid[i][j] = 0;
				if (grid[i][j] >= 100) {
					grid[i][j] = grid[i][j] - 100;
				}
			}
		}
					
		for(var y = 1; y <= col; y++) {		// 68pxずつずらして表示
			for(var x = 1; x <= row; x++) {
				var c = tile[grid[x][y]].cloneNode(true);
				c.style.left = ((x - 1) * 68) + "px";
				c.style.top = ((y - 1) * 68) + "px";
				b.appendChild(c);
							
				/*	クリックした場所の数字を増やす
				(function() {
					var _x = x, _y = y;
					c.onclick = function() {
						board[_x][_y] = board[_x][_y] + 1;
						showBoard();
					};
				})();
				*/
			}
		}
	}
				
	function initGame() {	//ゲームを初期状態にする

		for(var i = 1; i <= col; i++){	// ボードすべてに0を入れる
			grid[i] = [];
			for(var j = 1; j <= row; j++){
				grid[i][j] = 0;
			}
		}

		newTile();
		newTile();

		/* 全タイル表示テスト
		grid[1][1] = 1;
		grid[1][2] = 2;
		grid[1][3] = 3;
		grid[1][4] = 4;
		grid[2][1] = 5;
		grid[2][2] = 6;
		grid[2][3] = 7;
		grid[2][4] = 8;
		grid[3][1] = 9;
		grid[3][2] = 10;
		grid[3][3] = 11;
		*/

		showBoard();
	}

