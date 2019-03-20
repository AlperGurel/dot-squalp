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
    }


    ////// MEMBER FUNCTIONS
    takeInput(data, unitID){
        this.currentUnit=unitID;
        this.units[this.currentUnit-1].move(data);
        this.units[this.currentUnit-1].target = data;
    }
    changeUnit(unitID){
        this.currentUnit = unitID;
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
        units.forEach((unit) => {
            if(unit.target){
                unit.goTarget();
            }
        });
    }

}

