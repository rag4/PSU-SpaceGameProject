function isGameOver() {
	//death style = 1 is turned on
	if(gameSettings.checkDEATH_STYLE() == 1) {
		// Game Over conditions
		if(Ship.get_supplies() < 1) {
			alert("YOU RAN OUT OF SUPPLIES");
			return true;
		}
		else if(Ship.get_energy() <= 0) {
			alert("YOU RAN OUT OF ENERGY");
			return true;
		}
		else if(Map["array"][Ship.get_y()][Ship.get_x()].element == '*'){
			alert("YOU CRASHED INTO AN ASTEROID");
			return true;
		}
	}
	//We are fine
	return false;
}

function gameOver(){
	var sfx = document.getElementById("gameoversfx"); 
	sfx.play(); 
	
	alert("YOU DIED\n(press OK to restart the game)");
	window.location.reload(true);
}