function drawUI(gameState){
    drawUnitJob(gameState);
}

function drawUnitJob(gameState){
    let allClients = gameState.allClients;
    allClients.forEach(client =>{
        current = client.units.find((unit)=> {
            return client.currentUnit == unit.ID;
        })
        fill("black");
        textSize(20);
        text(current.job.name, 50, 50);
    });
    
}