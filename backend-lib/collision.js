const vector= require("victor");
module.exports = {
   checkCollision: function(gameState){
    let allClients=gameState.allClients;

    allClients.forEach(client => {
        client.units.forEach(unit => {
            if(unit.job.skills[0].activated){
                let activatedUnit = unit;
                client.units.forEach(unit => {
                    let unitPosition = new vector(unit.position.x, unit.position.y);
                    let skillPosition = new vector(activatedUnit.position.x, activatedUnit.position.y);
                    let directionVector = skillPosition.subtract(unitPosition);
                    let distance = directionVector.length();
                    if(distance < activatedUnit.skills[0].range)
                    console.log("collision");

                })
            }
        });
    });
   }
}