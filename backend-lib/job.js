const skills = require("./skills");
module.exports = {
    ranger: class{
        constructor(){
            this.hp=100;
            this.damage=50;
            this.speed=5;
            this.level=1;
            this.experience=0;
            this.range = 100;
            this.cost= 1000;
            this.name="ranger";
        }
    },

    default: class{
        constructor(){
            this.hp=20;
            this.damage=50;
            this.speed=5;
            this.level=1;
            this.experience=0;
            this.range = 100;
            this.cost=100;
            this.name = "default";
        }
    },
    melee: class{
        constructor(){
            this.skills = [new skills.bladefury()];
            this.hp=200;
            this.damage=50;
            this.speed=5;
            this.level=1;
            this.experience=0;
            this.range = 50;
            this.cost=100;
            this.name = "melee";
            
        }
    }
}