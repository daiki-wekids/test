(function　field() {
	const row = 4;	//マスの数 (定数)
	const col = 4;

	var randTile1 = Math.floor( Math.random() * 2 ) + 1 ;	// 1or2 をrandTile1に入れる
	var randTile2 = Math.floor( Math.random() * 2 ) + 1 ;

	var randRow1 = Math.floor( Math.random() * row ) + 1 ;	// 1 ~ 4 をrandRow1に入れる
	var randCol1 = Math.floor( Math.random() * col ) + 1 ;
	var randRow2 = Math.floor( Math.random() * row ) + 1 ;
	var randCol2 = Math.floor( Math.random() * col ) + 1 ;

	if(randRow1===randRow2 && randCol1===randCol2) {	// ランダムマスが被ったら書き換える
		randRow2 = (row + 1) - randRow2;
		randCol2 = (col + 1) - randCol2;
	}

	board = [];		//ボード配列

	for(var i = 1; i <= col; i++){	// 4*4のボード
		board[i] = [];
		for(var j = 1; j <= row; j++){
			board[i][j] = 0;
		}
	}

	function　showBoard() {
		var b = document.getElementById("board");
					
		for(var y = 1; y <= col; y++) {		// 68pxずつずらして表示
			for(var x = 1; x <= row; x++) {
				var c = piece[board[x][y]].cloneNode(true);
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
				
	onload = function() {

		piece = [document.getElementById("cell"),	//配列　添字　0
				document.getElementById("2"),		// 1
				document.getElementById("4"),		// 2
				document.getElementById("8"),		// 3
				document.getElementById("16"),		// 4
				document.getElementById("32"),		// 5
				document.getElementById("64"),		// 6
				document.getElementById("128"),		// 7
				document.getElementById("256"),		// 8
				document.getElementById("512"),		// 9
				document.getElementById("1024"),	// 10
				document.getElementById("2048"),]	// 11

		board[randRow1][randCol1] = randTile1;		//ランダムなrow colにrandTile(1or2)を入れる
		board[randRow2][randCol2] = randTile2;

		/*	全タイル表示テスト
		board[1][1] = 1;
		board[1][2] = 2;
		board[1][3] = 3;
		board[1][4] = 4;
		board[2][1] = 5;
		board[2][2] = 6;
		board[2][3] = 7;
		board[2][4] = 8;
		board[3][1] = 9;
		board[3][2] = 10;
		board[3][3] = 11;
		*/

		showBoard();
	};

})();