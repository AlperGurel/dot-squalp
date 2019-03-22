

function drawUnits(gameState){
    drawSkill(gameState);
    drawCharacters(gameState);
    drawHealthBars(gameState);
    drawID(gameState);
    

};

function drawCharacters(gameState){
    let allClients= gameState.allClients;
    allClients.forEach((client) => {     
        let teamColor = client.color;
        fill(teamColor);
        client.units.forEach((unit) => {
            //if(unit.alive === 1){
                noStroke();
            if(unit.ID === client.currentUnit){
                stroke("red");
                strokeWeight(4);
            }
            ellipse(unit.position.x, unit.position.y, 30, 30);
           // }
            
        });
        noStroke();
        
    });
    noFill();
}

function drawHealthBars(gameState){
    let allClients= gameState.allClients;
    allClients.forEach((client) => {
        client.units.forEach(unit => {
            //if(unit.alive === 1){
                if(client.ID === thisClient.ID){
                    fill(0, 70, 0);
                    rect(unit.position.x - 50, unit.position.y + 22, 100, 10);
                    fill(0,150,0);
                    rect(unit.position.x - 50, unit.position.y + 22, (unit.currentHealth/unit.job.hp)*100, 10 );
                }
                else{
                    fill(100, 0, 0);
                    rect(unit.position.x - 50, unit.position.y + 22, 100, 10);
                    fill(210,0,0);
                    rect(unit.position.x - 50, unit.position.y + 22, (unit.currentHealth/unit.job.hp)*100, 10 );
                }
            //}

        });


    });
}


function drawID(gameState){
    let allClients = gameState.allClients;
    allClients.forEach((client) => {
        client.units.forEach((unit) => {
            //if(unit.alive === 1){
                textSize(20);
                fill("black");
                textAlign(CENTER, CENTER);
                text(unit.ID, unit.position.x, unit.position.y)
            //}

        });
    });
}

function drawSkill(gameState){
    let allClients = gameState.allClients;
    allClients.forEach((client) => {
        client.units.forEach((unit) => {
            //if(unit.alive === 1){
                if(unit.job.skills[0].activated){
                    fill(219, 134, 30, 100);
                    ellipse(unit.position.x, unit.position.y, unit.job.skills[0].range, unit.job.skills[0].range);
                }
            //}

        });
    });


}