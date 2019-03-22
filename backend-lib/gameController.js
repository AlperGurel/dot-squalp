module.exports = {
    gameController: function(clients){
        clients.forEach(client => {
            // client.units.forEach(unit => {
            //     //remove from unit list

            //     if(unit.currentHealth <= 0){
                
            //         unit.alive = 0;
            //     }
            // });
            let flag = false;
            client.units = client.units.filter(unit => {
                if(unit.currentHealth > 0)
                    return true;
                else{
                    flag=true;
                    return false;
                }
           });

           if(client.units.length > 0 && flag===true){
               
                client.units.forEach(unit =>{
                    client.currentUnit = unit.ID;
                    console.log("current changed to" + unit.ID);
                    flag=false;

                })
            }
        });
    }
    
}