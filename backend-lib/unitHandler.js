const jobs = require('./job');
const vector= require("victor");

module.exports = {

    createUnit: function(job){
    unit = new Unit(job);
    return unit;
    },

    createInitialUnits: function(){
        units =[];
        for(var i=0; i<5; i++)
        {
            if(i===0)
                units.push(new Unit(new jobs.ranger()));
            else
                units.push(new Unit(new jobs.default()));
        }
        return units;
    }
    
}

class Unit{
    constructor(job){
        let tmp= createPosition();
        var a =tmp.posx;
        var b =tmp.posy;
        this.ID = 0;
        this.position ={x:a, y:b};
        this.job = job;
        this.target = "undefined";
        this.currentHealth =this.job.hp;
    }

    move(key){
        if(key.hasOwnProperty(38)) //up
            this.position.y -= 5;
        if(key.hasOwnProperty(39)) //right
            this.position.x += 5;
        if(key.hasOwnProperty(40)) //down
            this.position.y += 5;
        if(key.hasOwnProperty(37)) //left
            this.position.x -= 5;
        
    }

    goTarget(){

        if (this.target !== "undefined"){
            let target = new vector(this.target.x, this.target.y);
            let position = new vector(this.position.x, this.position.y);
            let directionVector = target.subtract(position);
            let distance = directionVector.length();
            let velocity = directionVector.clone().normalize().multiplyScalar(2);
  
            if(distance > 1){
                this.position.x += velocity.x;
                this.position.y += velocity.y;
            }
            
            //else make target undefined
        
        }
        
    }
    
}

function createPosition(){
    let x=  Math.floor(Math.random() * Math.floor(500)+ 50);
    let y=  Math.floor(Math.random() * Math.floor(300)+ 50);
    let position = {posx: x, posy:y};
    return position;
}


