

function drawUnits(gameState){
    drawCharacters(gameState);
    drawHealthBars(gameState);
    drawID(gameState);

};

function drawCharacters(gameState){
    let allClients= gameState.allClients;
    allClients.forEach((client) => {     
        let teamColor = client.color;
        fill(teamColor);
        for(var i=0; i<5; i++){
            noStroke();
            if(i === client.currentUnit -1){
                stroke("red");
               strokeWeight(4);
            }
            ellipse(client.units[i].position.x, client.units[i].position.y, 30, 30);
        }
        noStroke();
        
    });
    noFill();
}

function drawHealthBars(gameState){
    let allClients= gameState.allClients;
    let thisClient= gameState.thisClient;
    allClients.forEach((client) => {     
        for(var i=0; i<5; i++){
            if(client.ID === thisClient.ID){
                fill(0,70,0); //fill friendly full health
                rect(client.units[i].position.x - 50, client.units[i].position.y + 22, 100,10);
                fill(0,150,0); //fill friendly health
                rect(client.units[i].position.x - 50, client.units[i].position.y + 22, client.units[i].currentHealth/100*100,10);
            }
            else{
                fill(100,0,0); //fill enemy full health
                rect(client.units[i].position.x - 50, client.units[i].position.y + 22, 100,10);
                fill(210,0,0); //fill enemy health
                rect(client.units[i].position.x - 50, client.units[i].position.y + 22, client.units[i].currentHealth/100*100,10);

            }

        }


    });
}


function drawID(gameState){
    let allClients = gameState.allClients;
    allClients.forEach((client) => {
        client.units.forEach((unit) => {
            textSize(20);
            fill("black");
            textAlign(CENTER, CENTER);
            text(unit.ID, unit.position.x, unit.position.y)
        });
    });
}