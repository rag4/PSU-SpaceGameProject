class gameSettings {

  constructor(height, width, deathflag, wormhole, wormholeOutputX, wormholeOutputY){
    this.height = height;  //numeric value representing map height;
    this.width = width;  //numeric value representing map width;
    this.deathflag = deathflag;  //flag that switches death style/behavior
    this.wormholeflag = wormhole;  //flag that switches wormhole behavior
    this.wormholeOutputX = wormholeOutputX;
    this.wormholeOutputY = wormholeOutputY;
  }

//setting the numeric values for the map's witdth and height
  setMAX(k){
    if(k <= 0){  //if numeric value is 0 or negative, return error/FAIL
      return 0;
    }
    this.height = eval(k);  //height and width should equal k; represents equal lengths
    this.width = eval(k);
    return 1;  //SUCCESS
  }

//setting the flag if user wants to 'NEVER DIE' or 'REGULAR PLAY'
  setDEATH_STYLE(flag){
    if (eval(flag) == 0){
      this.deathflag = 0;  // never dies
      return 1; // SUCCESS
    }
    if (eval(flag) == 1){  // regular play
      this.deathflag = 1;
      return 1; // SUCCESS
    }
    return 0; //invalid value: FAIL
  }

//setting the flag if user wants to wormhole to relocate user 'RANDOMLY or 'FIXED'
  setWORMHOLE_BEHAVIOR(flag){
    if (eval(flag) == 0){
      this.wormholeflag = 0;  // random
      return 1;  //SUCCESS
    }
    if (eval(flag) == 1){
      this.wormholeflag = 1;  // fixed
      return 1; //SUCCESS
    }
    return 0; //invalid value: FAIL
  }

//checks what 'deathflag' is set to (should always be checked each time user lands on collisions (..spaces)/ or required interaction..)
  checkDEATH_STYLE(){
    if (this.deathflag == 0){  // never dies
      return 0;  //SUCCESS
    }
    if (this.deathflag == 1){  // regular play
      return 1;  //SUCCESS
    }
    return -1; //flag not set or invalid value: FAIL
  }

//checks what 'wormholeflag' is set to (should always be checked each time user lands on wormhole (..spaces)/ or required interaction..)
  checkWORMHOLE_BEHAVIOR(){
    if (this.wormholeflag == 0){  // random
      return 0;
    }
    if (this.wormholeflag == 1){  // fixed
      return 1;
    }
    return -1;  //flag not set or invalid value: FAIL
  }

  setWORMHOLE_COORDINATES(wormholeOutputX, wormholeOutputY) {
    this.wormholeOutputX = wormholeOutputX;
    this.wormholeOutputY = wormholeOutputY;
  }

  getWORMHOLE_COORDINATES(){
    return [this.wormholeOutputX, this.wormholeOutputY]
  }

  //checks to see if location is out of bounds of map
    checkOUT_OF_BOUNDS(distance_x, distance_y){
      if (distance_x > this.width || distance_x < 0){
        return 1;  //OUT OF BOUNDS
      }
      if (distance_y > this.height || distance_y < 0){
        return 1;  //OUT OF BOUNDS: HEIGHT
      }
      return 0; //NOT OUT OF BOUNDS
    }



}
