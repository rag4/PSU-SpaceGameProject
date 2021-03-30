	function checkForWormhole(row, column, map) {
		var wormhole_present = false
		if (column >= map.height)
			column = map.height - column;
		if (row >= map.width)
			row = map.width - row;
	  if (gameSettings.checkOUT_OF_BOUNDS(column, row)) {
			wormhole_present = true
	  } else if (map["array"][row][column].element == 'W') {
			wormhole_present = true
		}
		return wormhole_present
	}

	function moveRandomly(row, column, map) {
		var new_row = 0
		var new_column = 0
		if (column >= map.height)
			column = map.height - column;
		if (row >= map.width)
			row = map.height - row;

		do {
			new_row = Math.floor(Math.random()*map.width)
			new_column = Math.floor(Math.random()*map.height)
		} while(gameSettings.checkOUT_OF_BOUNDS(new_column, new_row) && map["array"][row][column].get_element().toString() != '_')

		return [new_row, new_column]
	}
