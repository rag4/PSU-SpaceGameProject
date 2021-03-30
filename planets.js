//a VISIBLE planet will always be VISIBLE no matter what
class SAMPLE_PLANET{

  constructor(name, visibleflag, loc_x, loc_y){
    this.name = name;    
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