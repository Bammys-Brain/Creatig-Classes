class Ground {

    // rectangle 
    // x, y, width, height 
    // passing in arguments constructor 

constructor(x, y, width, height){ // predefined 

var options = { 'isStatic': 1} // {restitution : 1}

this.body  = Bodies.rectangle(x, y, width, height, options);
this.width = width;
this.height = height;

World.add(world, this.body);

}

display(){ // userdefined 

    var pos = this.body.position;

    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);

}

}