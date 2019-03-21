module.exports = {
    gameController: function(clients){
        clients.forEach(client => {
            client.units.forEach(unit => {
                if(unit.currentHealth <= 0){
                    unit.alive = 0;
                }
            });
        });
    }
    
}