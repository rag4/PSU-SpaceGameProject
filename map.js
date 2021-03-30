class cell {
  constructor() {
    this.element = '_';
  }
  set_element(element) {
    this.element = element;
  }
  get_element() {
    return this.element;
  }
}
//--------------------------------------
//-----------class: map----------------
class map {
  constructor(height,width) {
    this.height = height;
    this.width = width;
    this.array = [];
    for (var x = 0; x < this.width; ++x) {
      this.array[x] = [];
      for (var y = 0; y < this.height; ++y) {
        this.array[x][y] = new cell();
      }
    }
  }


  display_map() {
    var body = document.getElementsByTagName("body")[0];		//to get the body

    //get div
    var div = document.getElementById("map_div");

    //get table
    var table = document.getElementById("tbl");

    //get tbody
    var tbody = document.getElementById("map_body");	//to create the body table
    tbody.innerHTML = "";	//clear tbody first


    for (var x = 0 ; x < this.width ; ++x) {
      var tr = document.createElement("tr");		//create tr
      for (var y = 0 ; y < this.height ; ++y) {
        var td = document.createElement("td");	//create td
        var coord = x + "," + y
        td.setAttribute("id", coord);
        td.appendChild(document.createTextNode(this.array[x][y].element));	//add the array into the text of the td
        tr.appendChild(td);															//add the td into the tr
        //hide the div
        div.style.display ="none";
        var e = this.array[x][y].element
        if(e != '^' && e != '_' && e != 'W' && e != "*")
        {
          this.add_to_list(e,coord);
        }
      }

      //--add the elements together--
      tbody.appendChild(tr);		//add row into tbody
      table.appendChild(tbody);	//add new tbody into table
      div.appendChild(table);		//add new table into div
    }
    body.appendChild(div);		//add new div into the body
  }
  get_element(x, y){
	  return this.array[x][y].element;
  }
  add_to_list(cell,coord)
  {
  	var div = document.getElementById("CG")
  	var list = document.getElementById("list");
  	var item = document.createElement("LI");
  	cell = this.get_obj_name(cell);
  	cell = document.createTextNode("Object: "+cell+", coordinates: ("+coord+")");
  	item.appendChild(cell);
  	list.appendChild(item);
  	div.appendChild(list);
  }
  update_position(x, y, e) {
    var coord = x+","+y;
    this.array[x][y].element = e;
    //updates the element on html
    document.getElementById(coord).innerHTML = e;
    if(e != '^' && e != '_' && e != 'W' && e != "*")
      this.add_to_list(e,coord);
  }
  get_obj_name(obj)
  {
  	var str;
  	switch(obj[0])
  	{
  		case "a":
  		case "A":
  			str = "Asteroid";
  			break;
  		case "c":
  		case "C":
  			str = "Celeron";
  			break;
		case "s":
		case "S":
				str = "Space Station";
				break;
		case "f":
		case "F":
			str = "Freighter";
			break;
		case "m":
		case "M":
			str = "Meteor Storm";
			break;
		case "r":
		case "R":
			str = "Ryzen";
			break;
		case "x":
		case "X":
			str = "Xeon";
			break;
		case "p":
		case "P":
			str = "Pentium "+ obj[1];
			break;
  	}
  	return str;
  }
  update_status(status) {
    //--display the currents--
    var header = document.getElementById("status");
    header.innerHTML = "";							//clear status header

    var txt = document.createTextNode(status);
    header.appendChild(txt);
  }
  //this function loads the map from a file under the given name
  load_map(name)
  {
    var new_array = JSON.parse(localStorage.getItem(name));
    if (new_array == null) {
      alert("could not find the file!");
      return;
    }
    this.reinitialize(new_array);
    load_ship(name);
    //needs to display the  whole map from scratch
    this.display_map();
    return;
  }

  //this function saves the map to a file under the given name
  save_map(name) {
   var s_array = JSON.stringify(this.array);
    save_ship(name);
    localStorage.setItem(name,s_array); 
    return;
  }
  reinitialize( arr)
  {
    width = arr.length;
    height = arr[1].length;
    this.height = height;
    this.width = width;
    this.array = []
    for (var x = 0; x < width; ++x) {
      this.array[x] = [];
      for (var y = 0; y < height; ++y) {
        this.array[x][y] = new cell();
      }
    }
    this.array = arr;
  }
}
