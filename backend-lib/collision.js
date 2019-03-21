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
                    let dpsTimer;
                    if(distance < activatedUnit.job.skills[0].range){
                        //dpsTimer = setInterval(() => damageFromSkill(activatedUnit, unit), 1); 
                        damageFromSkill(activatedUnit, unit);
                      
                    }
                    else{
                        clearTimeout(dpsTimer);
                    }
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
    console.log(victim.currentHealth);
    // victim.currentHealth -= 1;
   }


