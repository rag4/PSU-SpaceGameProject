class ship {
    constructor(x, y, energy, supplies, credits) {
        this.x = x;
        this.y = y;
        this.energy = energy;
        this.supplies = supplies;
        this.credits = credits;
		    this.energyCost = 10;
		    this.damaged = false;
    }
    set_energyCost(x)
    {
        this.energyCost = x;
    }
    set_damaged(x)
    {
        this.damaged = x;
    }
    set_x(x)
    {
        this.x = x;
    }
    set_y(y)
    {
        this.y=y;
    }
    set_energy(e)
    {
        this.energy=e;
    }
    set_supplies(s)
    {
        this.supplies=s;
    }
    set_credits(c)
    {
        this.credits=c;
    }

    get_x() {
        return this.x;
    }

    get_coordinates() {
      return ("("+this.x+", "+this.y+")")
    }

    get_y() {
        return this.y;
    }

    get_energy() {
        return this.energy;
    }

    get_supplies() {
        return this.supplies;
    }

    get_credits() {
        return this.credits;
    }

    updateEnergy(distance) {
		if(this.damaged == true){
			this.energy -= (this.energyCost * distance * 5);
		}
		else{
			this.energy -= (this.energyCost * distance);
		}
    }

    updateSupplies() {
		//drop supplies by 2% of current supplies. Round to 2 decimal places.
		this.supplies = parseFloat((this.supplies - this.supplies * 0.02).toFixed(2));
    }

    augmentSupplies(){
      //increase supplies by 50 to harvest supplies from Freighter
      this.supplies += 50;
    }

    augmentEnergy(){
      //increase energy by 500 to harvest supplies from Freighter
      this.energy +=500; 
    }
}
