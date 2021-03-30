function startGame() {
  // Initialize values
  height = 0;
  width = 0;

  //height and width initializers

  config = 1;

  if (config == 1){
    this.filled = new filling;
  /*    do{
        //prompt and check for the desired height and width of the game
      height = prompt("enter the desired size of your map.\nEnter the height: ");
      width = prompt("enter the desired size of your map.\nEnter the width: ");
      if(isNaN(height)){
        alert("invalid height. please try again!"); //MADE THIS FOR CONFIGURATION CONFIG
        height = -1;
      }
      if(isNaN(width)){
        alert("invalid width. please try again!");
        width = -1;
      }
    }while(height <= 0 || width <= 0);
    gameSettings =  new gameSettings(height,width, 1, 1, 0, 0);
    this.Ship = new ship(0,0,0,0,0);
    gameSettings =  new gameSettings(height,width, 1, 1, 0, 0);
    this.Map = new map(height,width);
    this.filled = new filling;
    //this.Map.display_map();
    //this.displayshipValues();*/
  }

  if (config == 0){
    height = 128;  //DEFAULT INITIALIZERS
    width = 128;

    gameSettings =  new gameSettings(height,width, 1, 1, 0, 0);

    this.filled = new filling;
    this.filled.map = 1;
    this.filled.ship = 1;

    this.Ship = new ship(0, 0, 1000, 100, 1000);
    this.Map = new map(height,width);
    this.Map.display_map();
    this.Ryzen = new SAMPLE_PLANET("Ryzen", 1, 0, 50); //cesspool of thieves and bandits
    this.Celeron = new SAMPLE_PLANET("Celeron", 1, 50, 0); //Musk-Tesla service center
    this.Xeon = new SAMPLE_PLANET("Xeon", 1, 50, 50); //repair depot, trades with Celeron
    this.Pentium1 = new SAMPLE_PLANET("Pentium1", 1, 25, 3);
    this.Pentium2 = new SAMPLE_PLANET("Pentium2", 1, 67, 75);
    this.Pentium3 = new SAMPLE_PLANET("Pentium3", 1, 90, 88);
    this.Pentium4 = new SAMPLE_PLANET("Pentium4", 1, 120, 9);
    this.Pentium5 = new SAMPLE_PLANET("Pentium5", 1, 78, 44);
    this.Pentium6 = new SAMPLE_PLANET("Pentium6", 1, 47, 33);
    this.Pentium7 = new SAMPLE_PLANET("Pentium7", 1, 95, 2);
    this.Meteor1 = new SAMPLE_ARTIFACT("Meteor Storm", 'M', 1, 5, 0);
    this.Asteroid1 = new SAMPLE_ARTIFACT("Asteroid", 'A', 1, 15, 2);
    this.Freighter = new SAMPLE_ARTIFACT("Freighter", 'F', 1, 12, 56);
    this.SpaceStation = new SAMPLE_ARTIFACT("Space Station", 'SS', 1, 0, 4);
    if(Ryzen.checkVISIBILITY() == 1){
      this.Map.update_position(Ryzen.loc_x, Ryzen.loc_y, 'R');
    }
    if(Celeron.checkVISIBILITY() == 1){
    this.Map.update_position(Celeron.loc_x, Celeron.loc_y, 'C');
    }
    if(Xeon.checkVISIBILITY() == 1){
    this.Map.update_position(Xeon.loc_x, Xeon.loc_y, 'X');
    }
    if(Pentium1.checkVISIBILITY() == 1){
      this.Map.update_position(Pentium1.loc_x, Pentium1.loc_y, 'P1');
    }
    if(Pentium2.checkVISIBILITY() == 1){
      this.Map.update_position(Pentium2.loc_x, Pentium2.loc_y, 'P2');
    }
    if(Pentium3.checkVISIBILITY() == 1){
      this.Map.update_position(Pentium3.loc_x, Pentium3.loc_y, 'P3');
    }
    if(Pentium4.checkVISIBILITY() == 1){
      this.Map.update_position(Pentium4.loc_x, Pentium4.loc_y, 'P4');
    }
    if(Pentium5.checkVISIBILITY() == 1){
      this.Map.update_position(Pentium5.loc_x, Pentium5.loc_y, 'P5');
    }
    if(Pentium6.checkVISIBILITY() == 1){
      this.Map.update_position(Pentium6.loc_x, Pentium6.loc_y, 'P6');
    }
    if(Pentium7.checkVISIBILITY() == 1){
      this.Map.update_position(Pentium7.loc_x, Pentium7.loc_y, 'P7');
    }

    this.Map.update_position(Meteor1.loc_x, Meteor1.loc_y, Meteor1.type);
    this.Map.update_position(Ship.x, Ship.y, "^");
    this.Map.update_position(2, 2, 'W');
    this.Map.update_position(0, 2, '*');
    this.displayshipValues();

    if(Freighter.checkVISIBILITY() == 1){
      this.Map.update_position(Freighter.loc_x, Freighter.loc_y, 'F');
    }

    if(SpaceStation.checkVISIBILITY() == 1){
      this.Map.update_position(SpaceStation.loc_x, SpaceStation.loc_y, 'SS');
    }
  }
}

function setEnergy(val) {
  document.getElementById("energy1").value = val;
}

function setSupplies(val) {
  document.getElementById("supplies1").value = val;
}

function displayshipValues() {
  document.getElementById("supplies1").value = this.Ship.get_supplies();
  document.getElementById("energy1").value = this.Ship.get_energy();
  document.getElementById("currentLoc").value = this.Ship.get_coordinates();
  document.getElementById("credits1").value = this.Ship.get_credits();
}

function setGamePlay() {
  var deathStyle = eval(document.getElementById("playStyle").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  gameSettings.setDEATH_STYLE(deathStyle);
}

function submitWormholeBehavior() {
  var wormholeRandom = document.getElementById("wormholeRandom").checked;
  var wormholeOutputX= eval(document.getElementById("wormholeOutputX").value);
  var wormholeOutputY = eval(document.getElementById("wormholeOutputY").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  gameSettings.setWORMHOLE_BEHAVIOR(wormholeRandom);
  gameSettings.setWORMHOLE_COORDINATES(wormholeOutputX, wormholeOutputY);
}
function save_ship(name)
  {
    var ship_name = "ship_"+name
    localStorage.setItem(ship_name, JSON.stringify(this.Ship));
    return;
  }
function load_ship(name)
  {
    var ship_name = "ship_"+name
    var new_ship = localStorage.getItem(ship_name);
    if(new_ship != undefined)
    {
      new_ship = JSON.parse( new_ship);
      this.Ship.set_x(new_ship.x);
      this.Ship.set_y(new_ship.y);
      this.Ship.set_energy(new_ship.energy);
      this.Ship.set_credits(new_ship.credits);
      this.Ship.set_supplies(new_ship.supplies);
    }
    setEnergy(this.Ship.get_energy());
    setSupplies(this.Ship.get_supplies());
    displayshipValues();
    return;
  }
function get_name()
{
    var name = prompt("enter the name of the file");
    name += ".txt";
    if (name == "") {
      alert("sorry cannot use empty string as file name");
      return;
    }
    alert("accessing: " + name + "...");
    return name;
  }
function load() {
  name = get_name();
  this.Map.load_map(name);
  load_ship(name);
}
function save()
{
  if(this.filled.ship == 0){
    alert("There is no map or ship yet!");
    return;
  }
  name = get_name();
  this.Map.save_map(name);
  save_ship(name);
}

function move(newDirection) {
  var column = Ship.y;
    var row = Ship.x;
    if (column >= this.Map.height)
      column = this.Map.height - column;
    if (row >= this.Map.width)
      row = this.Map.width - row;

  if(this.filled.ship == 0){
    alert("There is no ship to move!");
    return;
  }
  //var direction = eval(document.getElementById("direction").value);
  direction = newDirection;
  var distance = eval(document.getElementById("distance").value);
  direction = direction* Math.PI/180;
  var new_x = Ship.get_x()+ Math.round(Math.cos(direction)) * distance;
  var new_y = Ship.get_y()+ Math.round(Math.sin(direction)) * distance;

  if(newDirection == 0){
    document.getElementById("message").value = "Moved east by " + distance;
  }
  if(newDirection == 90){
    document.getElementById("message").value = "Moved north by " + distance;
  }
  if(newDirection == 180){
    document.getElementById("message").value = "Moved west by " + distance;
  }
  if(newDirection == 270){
    document.getElementById("message").value = "Moved south by " + distance;
  }


  if (checkForWormhole(new_y, new_x, Map)) {
    var sfx = document.getElementById("diceroll");
    sfx.currentTime = 3;
    sfx.play();
    if (gameSettings.checkWORMHOLE_BEHAVIOR()) {
      new_coordinates_array = moveRandomly(new_y, new_x, Map);
      new_y = new_coordinates_array[0];
      new_x = new_coordinates_array[1];
    }
    else {
      new_coordinates_array = gameSettings.getWORMHOLE_COORDINATES();
      new_y = new_coordinates_array[1] || 0;
      new_x = new_coordinates_array[0] || 0;
    }
  }

  Ship.updateEnergy(distance);
  Ship.updateSupplies();
  if(Map.get_element(row, column) == '^'){
    this.Map.update_position(row, column, "_");
  }
  checkforAsteroid(row, column, new_x, new_y, eval(newDirection))
  Ship.set_x(new_x);
  Ship.set_y(new_y);
  encounterArtifact(Ship, Map);
  badMax();
  if(isGameOver() == 1){
    gameOver();
  }
  else{
    if(Map.get_element(row, column) == '_'){
        this.Map.update_position(row, column, "^");
    }
  }
  displayshipValues();
  // Map.display_map();
}

function checkforAsteroid(old_x, old_y, new_x, new_y, newDirection){
  var asteroid_present = false;
  //debugger
  switch (newDirection) {
    case 0:
      for(i = old_x; i <= new_x - 1; i++){
        if (this.Map.get_element(i, old_y) == 'A'){
          asteroid_present = true;
        }
      }
      break;
    case 90:
      for(i = old_y; i <= new_y - 1; i++){
        if (this.Map.get_element(old_x, i) == 'A'){
          asteroid_present = true;
        }
      }
      break;
    case 180:
      for(i = old_x; i >= new_x; i--){
        if (this.Map.get_element(i, old_y) == 'A'){
          asteroid_present = true;
        }
      }
      break;
    case 270:
      for(i = old_y; i >= new_y; i--){
        if (this.Map.get_element(old_x, i) == 'A'){
          asteroid_present = true;
        }
      }
      break;
  }
  if (asteroid_present) {
    alert("You ran into a Asteroid!\nYour ship is destroyed.");
    if(gameSettings.checkDEATH_STYLE() == 1){
      gameOver();
    }
  }
}
function sensors(){
  if(sensorDeploy(Ship.get_coordinates(), Map)){ //returns true, add planet to visible list
    //gazetteer?
    checkVISIBILITY();
  }
}

function badMax() {
    var sfx1 = document.getElementById("badmaxencountersfx");
    var sfx2 = document.getElementById("badmaxgjsfx");
    var sfx3 = document.getElementById("badmaxkillsfx");
    var sfx4 = document.getElementById("badmaxhalfsfx");
    sfx1.currentTime=0;
    sfx2.currentTime=0;
    sfx3.currentTime=0;
    sfx4.currentTime=0;   
    //if we hit the number 1, bad max will board
    var minValue = 1;
    var maxValue = 20;
    var rand = Math.floor(Math.random() * (maxValue  - minValue+1)) + minValue;
    //encounter bad max
    if(rand == 1) {
        sfx1.play();
        alert("Oh No! BadMax and his henchmen are attacking your ship!!!! Press OK to fight them ");
        var minRandValue = 1;
        var maxRandValue = 3;
        var action = Math.floor(Math.random() * (maxRandValue-minRandValue+1)) + minRandValue;
        if(action == 1) {
             sfx1.pause();
             sfx2.play();
             alert ("Good job, you fought off bad Max");
        }
        if(action == 2) {
            sfx1.pause();
            sfx3.play();
            alert("BadMax blew up your ship.. Everyone aboard has been killed, they've taken everything.") ;
            if(gameSettings.checkDEATH_STYLE() == 1){
              gameOver();
            }
        }
        if(action == 3) {
            sfx1.pause();
            sfx4.play();
            alert("They boarded your ship! half of your credits and supplies have been stolen...") ;
            Ship.set_credits(Ship.get_credits() - Ship.get_credits() / 2);
            Ship.set_supplies(Ship.get_supplies() - Ship.get_supplies() / 2);
        }
    }
}

function addShip() {
  var sfx = document.getElementById("quickplaysfx");
  sfx.currentTime=0; 
  sfx.play(); 
  var shipLocX= eval(document.getElementById("shipLocX").value);
  var shipLocY = eval(document.getElementById("shipLocY").value);
  var energy = eval(document.getElementById("energy").value);
  var supplies = eval(document.getElementById("supplies").value);
  var credits = eval(document.getElementById("credits").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(shipLocX, shipLocY) == 1){
    alert("This space is already occupied!");
    return;
  }
  this.filled.ship = 1;
  this.filled.fillOccupancy(shipLocX, shipLocY);
  this.Ship = new ship(shipLocX, shipLocY, energy, supplies, credits);
  this.Map.update_position(Ship.x, Ship.y, "^");
  this.displayshipValues();
  document.getElementById("Toggle2").style.visibility = 'hidden';
}
function addPlanet() {
  var whichPlanet = eval(document.getElementById("whichPlanet").value)
  var planetLocX= eval(document.getElementById("planetLocX").value);
  var planetLocY = eval(document.getElementById("planetLocY").value);
  //var visibility = eval(document.getElementById("visibility").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(planetLocX, planetLocY) == 1){
    alert("This space is already occupied!")
    return;
  }
  this.filled.fillOccupancy(planetLocX, planetLocY)
  this.Planet = new SAMPLE_PLANET(name, 1, planetLocX, planetLocY);
  if(whichPlanet == 0){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'X');
  }
  if(whichPlanet == 1){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'R');
  }
  if(whichPlanet == 2){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'C');
  }
  if(whichPlanet == 3){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'P1');
  }
  if(whichPlanet == 4){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'P2');
  }
  if(whichPlanet == 5){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'P3');
  }
  if(whichPlanet == 6){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'P4');
  }
  if(whichPlanet == 7){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'P5');
  }
  if(whichPlanet == 8){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'P6');
  }
  if(whichPlanet == 9){
    this.Map.update_position(Planet.loc_x, Planet.loc_y, 'P7');
  }
}
function addMeteor() {
  var meteorLocX= eval(document.getElementById("meteorLocX").value);
  var meteorLocY = eval(document.getElementById("meteorLocY").value);
  //var visibility = eval(document.getElementById("visibility").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(meteorLocX, meteorLocY) == 1){
    alert("This space is already occupied!")
    return;
  }
  this.filled.fillOccupancy(meteorLocX, meteorLocY)
  this.Meteor = new SAMPLE_ARTIFACT("Meteor Storm", 'M', 1, meteorLocX, meteorLocY);
  this.Map.update_position(Meteor.loc_x, Meteor.loc_y, Meteor.type);
}
function addAsteroid() {
  var asteroidLocX= eval(document.getElementById("asteroidLocX").value);
  var asteroidLocY = eval(document.getElementById("asteroidLocY").value);
  //var visibility = eval(document.getElementById("visibility").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(asteroidLocX, asteroidLocY) == 1){
    alert("This space is already occupied!")
    return;
  }
  this.filled.fillOccupancy(asteroidLocX, asteroidLocY)
  this.Asteroid = new SAMPLE_ARTIFACT("Asteroid Storm", 'A', 1, asteroidLocX, asteroidLocY);
  this.Map.update_position(Asteroid.loc_x, Asteroid.loc_y, Asteroid.type);
}
function addFreighter() {
  var freighterLocX= eval(document.getElementById("freighterLocX").value);
  var freighterLocY = eval(document.getElementById("freighterLocY").value);
  //var visibility = eval(document.getElementById("visibility").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(freighterLocX, freighterLocY) == 1){
    alert("This space is already occupied!")
    return;
  }
  this.filled.fillOccupancy(freighterLocX, freighterLocY)
  this.Freighter = new SAMPLE_ARTIFACT("Freighter", 'F', 1, freighterLocX, freighterLocY);
  this.Map.update_position(Freighter.loc_x, Freighter.loc_y, 'F');
}
function addSpacestation() {
  var spacestationLocX= eval(document.getElementById("spacestationLocX").value);
  var spacestationLocY = eval(document.getElementById("spacestationLocY").value);
  //var visibility = eval(document.getElementById("visibility").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(spacestationLocX, spacestationLocY) == 1){
    alert("This space is already occupied!")
    return;
  }
  this.filled.fillOccupancy(spacestationLocX, spacestationLocY)
  this.SpaceStation = new SAMPLE_ARTIFACT("Space Station", 'SS', 1, spacestationLocX, spacestationLocY);
  this.Map.update_position(SpaceStation.loc_x, SpaceStation.loc_y, 'SS');
}

function addMap() {
  var mapSizeX= eval(document.getElementById("mapSizeX").value);
  var mapSizeY= eval(document.getElementById("mapSizeY").value);

  if(isNaN(mapSizeX) || isNaN(mapSizeY)){
    alert("invalid height. please try again!"); //MADE THIS FOR CONFIGURATION CONFIG
    return;
  }

  alert("map size is " + mapSizeX + " x " + mapSizeY);

  gameSettings =  new gameSettings(mapSizeY,mapSizeX, 1, 1, 0, 0);
  this.Map = new map(mapSizeY,mapSizeX);
  this.filled.map = 1;
  this.Map.display_map();
  
  document.getElementById("Toggle1").style.visibility = 'hidden';
  document.getElementById("quickGameToggle").style.visibility = 'hidden';
}

function addQuickMap() {
  var mapSizeX = 128;
  var mapSizeY = 128;

  alert("map size is " + mapSizeX + " x " + mapSizeY);

  gameSettings =  new gameSettings(mapSizeY,mapSizeX, 1, 1, 0, 0);
  this.Map = new map(mapSizeY,mapSizeX);
  this.filled.map = 1;
  this.Map.display_map();

  document.getElementById("Toggle1").style.visibility = 'hidden';
}

function addQuickShip() {
      var shipLocX= 0;
      var shipLocY = 0;
      var energy = 5000;
      var supplies = 100;
      var credits = 1000;

      if(this.filled.map == 0){
        alert("There is no map yet!");
        return;
      }

      if(this.filled.checkOccupancy(shipLocX, shipLocY) == 1){
        alert("This space is already occupied!");
        return;
      }

      this.filled.ship = 1;
      this.filled.fillOccupancy(shipLocX, shipLocY);
      this.Ship = new ship(shipLocX, shipLocY, energy, supplies, credits);
      this.Map.update_position(Ship.x, Ship.y, "^");
      this.displayshipValues();
      document.getElementById("Toggle2").style.visibility = 'hidden';
}

function addQuickPlanet(planet) {
  //make this 0 and map size - 1
  var minMapSpace = 0;
  var maxMapSpace = 127;
  //var whichPlanet = eval(document.getElementById("whichPlanet").value)
  var planetLocX= Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
  var planetLocY = Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(planetLocX, planetLocY) == 1){
    addQuickPlanet(planet);
    return;
  }
  this.filled.fillOccupancy(planetLocX, planetLocY)
  this.Planet = new SAMPLE_PLANET(name, 1, planetLocX, planetLocY);
  this.Map.update_position(Planet.loc_x, Planet.loc_y, planet);
}
function addQuickMeteor() {
//make this 0 and map size - 1
  var minMapSpace = 0;
  var maxMapSpace = 127;
  var meteorLocX= Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
  var meteorLocY = Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
  //var visibility = eval(document.getElementById("visibility").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(meteorLocX, meteorLocY) == 1){
    addQuickMeteor();
    return;
  }
  this.filled.fillOccupancy(meteorLocX, meteorLocY)
  this.Meteor = new SAMPLE_ARTIFACT("Meteor Storm", 'M', 1, meteorLocX, meteorLocY);
  this.Map.update_position(Meteor.loc_x, Meteor.loc_y, Meteor.type);
}

function addQuickAsteroid() {
  var minMapSpace = 0;
  var maxMapSpace = 127;
  var asteroidLocX = Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
  var asteroidLocY = Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
  //var visibility = eval(document.getElementById("visibility").value);
  if(this.filled.map == 0){
    alert("There is no map yet!");
    return;
  }
  if(this.filled.checkOccupancy(asteroidLocX, asteroidLocY) == 1){
    addQuickAsteroid();
    return;
  }
  this.filled.fillOccupancy(asteroidLocX, asteroidLocY)
  this.Asteroid = new SAMPLE_ARTIFACT("Asteroid Storm", 'A', 1, asteroidLocX, asteroidLocY);
  this.Map.update_position(Asteroid.loc_x, Asteroid.loc_y, Asteroid.type);
}

function addQuickFreighter() {
    var minMapSpace = 0;
    var maxMapSpace = 127;
    var freighterLocX = Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
    var freighterLocY = Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
   //var visibility = eval(document.getElementById("visibility").value);
   if(this.filled.map == 0){
     alert("There is no map yet!");
     return;
   }
   if(this.filled.checkOccupancy(freighterLocX, freighterLocY) == 1){
     addQuickFreighter();
     return;
   }
   this.filled.fillOccupancy(freighterLocX, freighterLocY)
   this.Freighter = new SAMPLE_ARTIFACT("Freighter", 'F', 1, freighterLocX, freighterLocY);
   this.Map.update_position(Freighter.loc_x, Freighter.loc_y, 'F');
 }

 function addQuickSpacestation() {
   var minMapSpace = 0;
   var maxMapSpace = 127;
   var spacestationLocX = Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
   var spacestationLocY= Math.floor(Math.random() * (maxMapSpace - minMapSpace+1) ) + minMapSpace;
   //var visibility = eval(document.getElementById("visibility").value);
   if(this.filled.map == 0){
     alert("There is no map yet!");
     return;
   }
   if(this.filled.checkOccupancy(spacestationLocX, spacestationLocY) == 1){
     addQuickSpacestation();
     return;
   }
   this.filled.fillOccupancy(spacestationLocX, spacestationLocY)
   this.SpaceStation = new SAMPLE_ARTIFACT("Space Station", 'SS', 1, spacestationLocX, spacestationLocY);
   this.Map.update_position(SpaceStation.loc_x, SpaceStation.loc_y, 'SS');
 }

function quickGame() {
    var sfx = document.getElementById("quickplaysfx"); 
    sfx.currentTime=0;
    sfx.play(); 
    document.getElementById("quickGameToggle").style.visibility = 'hidden';
    document.getElementById("planetToggle").style.visibility = 'hidden';
    addQuickMap();
    addQuickShip();
    addQuickPlanet('X');
    addQuickPlanet('R');
    addQuickPlanet('C');
    addQuickPlanet('P1');
    addQuickPlanet('P2');
    addQuickPlanet('P3');
    addQuickPlanet('P4');
    addQuickPlanet('P5');
    addQuickPlanet('P6');
    addQuickPlanet('P7');
    addQuickMeteor();
    addQuickAsteroid();
    addQuickFreighter();
    addQuickSpacestation();
    sfx.pause();
}


