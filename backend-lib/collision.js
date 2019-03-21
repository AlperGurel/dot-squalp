const vector= require("victor");

module.exports = {
   checkCollision: function(clients){
    let allClients=clients;
    allClients.forEach(client => {
        client.units.forEach(unit => {
            if(unit.job.skills[0].activated){
                let activatedUnit = unit;
                client.units.forEach(unit => {
                    if(unit !== activatedUnit){
                    let unitPosition = new vector(unit.position.x, unit.position.y);
                    let skillPosition = new vector(activatedUnit.position.x, activatedUnit.position.y);
                    let directionVector = skillPosition.subtract(unitPosition);
                    let distance = directionVector.length();

                    if(distance < activatedUnit.job.skills[0].range)
                        setInterval(() => damageFromSkill(activatedUnit, unit), 1); 
                        console.log(unit.currentHealth);
                        console.log("distance:" +  distance);
                    }
                })
            }
        });
        // }
    });
   }

    
}
function damageFromSkill(damager, victim){
    victim.currentHealth -= damager.job.skills[0].damage;
   }


