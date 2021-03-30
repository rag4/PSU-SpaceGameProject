//Configuration settings to engineer map to the user's liking, may be user sided while playing game
class filling{
    constructor(){
        this.locX = new Array();
        this.locY = new Array();
        this.map = 0;
        this.ship = 0;
    }

    fillOccupancy(locX,locY) {
        //var locLength = this.locX.length;
        //var count;
        //for(int i = 0; i < locLength; i++){
        //    count++;
            //goes to empty slot
        //}
        this.locX.push(locX);
        this.locY.push(locY);
        return 1;
    }

    checkOccupancy(locX, locY) {
        var locLength = this.locX.length;
        var i;
        for(i = 0; i < locLength; i++){
            if(this.locX[i] == locX && this.locY[i] == locY){
                return 1; //found :: success
            }
        }
        return 0; //fail
    }
}