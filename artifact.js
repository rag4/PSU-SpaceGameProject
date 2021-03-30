//an artifact will always be INVISIBLE unless sensor seeks
class SAMPLE_ARTIFACT{

  constructor(name, type, visibleflag, loc_x, loc_y){
    this.name = name;
	this.type = type;
    this.visibileflag = visibleflag;
    this.loc_x = loc_x;
    this.loc_y = loc_y;
  }

  get_x() {
    return this.loc_x;
  }

  get_y() {
    return this.loc_y;
  }

  get_coordinates() {
    return ("("+this.x+", "+this.y+")")
  }

  checkVISIBILITY(){
    if(this.visibileflag == 0){
      return 0;
    }
    if(this.visibileflag == 1){
      return 1;
    }
    return -1;
  }


  setVISIBILITY(flag){
    if(flag = 0){
      this.visibleflag = 0;
      return 1;
    }
    if(flag = 1){
      this.visibleflag = 1;
      return 1;
    }
    return 0;
  }
}
  function encounterArtifact(ship, map){
    column = ship.y;
    row = ship.x;
    if (column == map.height)
			column = column - 1;
		if (row == map.width)
			row = row - 1;
  elemType = map.get_element(row, column);

	if(elemType == 'M'){
    var sfx = document.getElementById("badmaxhalfsfx"); 
    sfx.currentTime=0;
    sfx.play(); 
	  alert("You ran into a meteor storm!\nYour ship is damaged and will leak energy until you get it repaired");
    ship.damaged = true;
    sfx.pause();
	}

	if(elemType == 'A'){
    var sfx = document.getElementById("badmaxkillsfx");
    sfx.currentTime=0; 
    sfx.play(); 
	  alert("You ran into a Asteroid!\nYour ship is destroyed. Game Over!");
    if(gameSettings.checkDEATH_STYLE() == 1){
      gameOver();
    }
    sfx.pause();
	}

  if(elemType == 'F'){
    var sfx = document.getElementById("freightsfx");
    sfx.currentTime=0; 
    sfx.play(); 
    alert("You have encountered a freighter!\nYou have now gained supplies and energy.");
    Ship.augmentSupplies();
    Ship.augmentEnergy();
    sfx.pause();
  }

  if(elemType == 'SS'){
    do{
        var sfx1 = document.getElementById("spacestationsfx");
        var sfx2 = document.getElementById("spacestationlosesfx"); 
        var sfx3 = document.getElementById("quickplaysfx");
        sfx1.currentTime=0;
        sfx1.play(); 
        var play = prompt("You encountered a space station! Would you like an opportunity to play a game of chance?(Y/N)");
    }while(play !== "Y" && play !== "y" && play !== "N" && play !== "n");
    if(play == "Y" || play == "y") {
       sfx1.pause();
       sfx3.currentTime=0;
       sfx3.play();
       let rand = Math.floor(Math.random() * Math.floor(2));
       sfx3.play();
       switch(rand) {
            case 0:
                sfx3.currentTime=0;
                sfx3.play();
                promptDiceGame();
                break;
            case 1:
                Ship.set_credits(Ship.get_credits() - 10);
                alert("Sorry no Casinian at this space station. You have been charged 10 credits for docking.");
                sfx2.currentTime=0;
                sfx2.play();
                sfx2.pause();
                break;
       }
    }else {
        sfx1.pause();
        sfx2.currentTime=0;
        sfx2.play();
        Ship.set_credits(Ship.get_credits() - 10);
        }
  }
    function promptDiceGame() {
         sfx3.pause();
         var winRate = 5;
         var minDiceValue = 1;
         var maxDiceValue = 6;
         var sound = document.getElementById("spacestationlosesfx");
         //won't work bc of alerts
         //var dicey = new Audio('diceroll2.mp3');
         alert("Casinian: Why isn't it your lucky day.. you get to gamble with me.");
         alert("Here are the rules.. I will roll a dice, if you can guess the roll (1-6), you win.");
         do{
            var bet = prompt("How many credits are you willing to put on the line? A win will return 5X your bet");
         }
         while(isNaN(bet) == true || bet <=0 || bet > Ship.get_credits());
         var string = " credits, no backing out now.";
         alert("You are betting " + bet + string);
         do {
              var inRange = false;
              var guess = prompt("What do you think I will roll? (1-6)");
            }
         while(isNaN(guess) == true || guess < 1 || guess > 6);

         alert(" Click OK to roll.");
         let rand = Math.floor(Math.random() * (maxDiceValue - minDiceValue+1) ) + minDiceValue;
         results(rand, guess);
         //alert("My roll was a .. " + rand + guessString + guess);
         //win game
         if(guess == rand) {
             alert("Scum, you win this time.. Take your winnings and get out of here.");
             //grant credits
             var winnings = bet * winRate;
             Ship.set_credits(Ship.get_credits() + winnings)
         }
         else{
         sound.play();
         alert("Victory is mine!!! Get out and give me your credits.");
         sound.pause();
         Ship.set_credits(Ship.get_credits() - bet);
         }
    }

    function results(rand, guess) {
      var guessString = ". While YOUR stupid guess was a "
      alert("My roll was a " + rand + guessString + guess);
    }
}

