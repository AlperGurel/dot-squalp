const unitHandler = require('./unitHandler');
const jobs = require('./job');

module.exports = {
    createClient: function(ID){
        client = new Client(ID);
        return client;
    }
}

class Client {
    constructor(ID){
        this.ID = ID;
        this.units = unitHandler.createInitialUnits();
        this.color = this.getRandomColor();
        this.currentUnit =1;
        this.selectedUnit = units[0];
    }


    ////// MEMBER FUNCTIONS
    takeInput(data, unitID){
        // this.currentUnit=unitID;
        // this.units[this.currentUnit-1].move(data);
        // this.units[this.currentUnit-1].target = data;
        this.units.forEach(unit => {
            if(unit.ID == unitID){
                unit.target = data;
            }
        });

    }
    changeUnit(unitID){
        this.currentUnit = unitID;
        /*
       this.units.forEach(unit => {
            if
        });
        */
    }
    getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        console.log(color);
        return color;
    }
    updateUnitLocations() {
        this.units.forEach((unit) => {
            if(unit.target){
                unit.goTarget();
            }
        });
    }
    sendUnitSkill(skillCode){
        this.units[this.currentUnit-1].toggleSkill(skillCode);
    }
    // killUnit(unitID){
    //     this.units = this.units.filter(unit => {
    //         unit.ID !== unitID;
    //     });
    // }

}

