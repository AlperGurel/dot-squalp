
let UNITSIZE ;
let INITIALPOS;
let units = [];
let allClients = [];
let thisClient;
var currentUnit = 1;
var lastUnit = currentUnit;
var socket;
const unitKeyList = [49, 50, 51, 52,53];
const skillKeyList = [81];
let gameState;


socket = io({transports: ['websocket'], upgrade: false}).connect();
socket.on('clientData',
    function(clients){
        thisClient = clients.find(client => {
            return client.ID === socket.id;   
        }); 
        allClients=clients;
        gameState = {allClients: allClients, thisClient:thisClient };
    }
)

var keys = {};
$(document).keydown(function (e) {
    keys[e.which] = true;
    
});

$(document).keyup(function (e) {
    delete keys[e.which];
    
});

class Unit{
    constructor(position, ID){
        this.ID = ID;
        this.position = position;
    }
     
    
}

function setup() {
    
    UNITSIZE = 30;
    INITIALPOS = {x: windowWidth/2, y: windowHeight/2};
    
    createCanvas(windowWidth, windowHeight);
    background(0);
    
   
}

function draw() {
    if(gameState){
        drawWorld(gameState);
        textSize(20);
    //dont try to reach currentunit by index
    //thisClient.selectedUnit.job.name
    if(thisClient.units[currentUnit-1]){
        fill("black");
        text(thisClient.units[currentUnit-1].job.name, 50, 50);
    }

    
    if(keyIsPressed){
        data = {key: keys, unitID:currentUnit};
        socket.emit('moveKey', data);    
    }
    }
    
    
    // socket.emit("update");
    
}

socket.on('unitMoved', function(clients){
        thisClient = clients.find(client => {
            return client.ID === socket.id;
        }); 
        allClients=clients;  
    }
);


function keyPressed(){
    if(unitKeyList.includes(keyCode)){
        lastUnit = currentUnit;
        if(keyCode===49){
            currentUnit = 1;
        }
        if(keyCode===50){
            currentUnit = 2;
        }
        if(keyCode===51){
            currentUnit = 3;
        }        
        if(keyCode===52){
            currentUnit = 4;
        }     
        if(keyCode===53){
            currentUnit = 5;
        }
        socket.emit("unitChange", currentUnit);

    };
    if(skillKeyList.includes(keyCode)){
        if(keyCode === 81){
            //check if that unit has that skill
            socket.emit("Skill", keyCode);
        }
    }

    
}

function sendTarget(event){
    let targetLocation = {x: event.clientX, y: event.clientY};
    let data = {targetLocation: targetLocation, unitID:currentUnit}
    socket.emit("targetSet", data);

}

//event listener for a left click
//take position of mouseX and mouseY as a targetLocation
document.addEventListener("click", sendTarget);


