const jobs = require('./job');

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
    }
    // move(key){
    //     if(key === 38) //up
    //         this.position.y -= 5;
    //     if(key ===39) //right
    //         this.position.x += 5;
    //     if(key === 40) //down
    //         this.position.y += 5;
    //     if(key===37) //left
    //         this.position.x -= 5;
        
    // }
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
    
}

function createPosition(){
    let x=  Math.floor(Math.random() * Math.floor(500)+ 50);
    let y=  Math.floor(Math.random() * Math.floor(300)+ 50);
    let position = {posx: x, posy:y};
    return position;
}


