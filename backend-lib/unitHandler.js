const jobs = require('./job');
const vector= require("victor");

module.exports = {

    createUnit: function(job){
    unit = new Unit(job);
    return unit;
    },

    createInitialUnits: function(){
        units =[];
        for(var i=1; i<=5; i++)
        {
            if(i===1)
                units.push(new Unit(new jobs.melee(), i));
            else
                units.push(new Unit(new jobs.melee(), i));
        }
        return units;
    }
    
}

class Unit{
    constructor(job, id){
        let tmp= createPosition();
        var a =tmp.posx;
        var b =tmp.posy;
        this.ID = id;
        this.position ={x:a, y:b};
        this.job = job;
        this.target = "undefined";
        this.currentHealth =this.job.hp;
        this.unitSize = 30;
        this.alive = 1;
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
            let velocity = directionVector.clone().normalize().multiplyScalar(this.job.speed);
  
            if(distance > 4){
                this.position.x += velocity.x;
                this.position.y += velocity.y;
            }
            
            //else make target undefined
        
        }
        
    }
    toggleSkill(skillCode){
        if(skillCode === 81){
            this.job.skills.forEach((skill, index) => {""
                if(skill.name.includes("bladeFury")){
                    if(this.job.skills[index].onCoolDown == false){
                        this.job.skills[index].activate();
                    }
                    
            } 
            });
            
        }
    }
    
}

function createPosition(){
    let x=  Math.floor(Math.random() * Math.floor(500)+ 50);
    let y=  Math.floor(Math.random() * Math.floor(300)+ 50);
    let position = {posx: x, posy:y};
    return position;
}


