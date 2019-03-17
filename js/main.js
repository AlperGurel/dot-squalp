let UNITSIZE ;
let INITIALPOS;
let units = [];
let allClients = [];
let thisClient;
var socket;
socket = io({transports: ['websocket'], upgrade: false}).connect();
socket.on('clientData',
    function(clients){
        thisClient = clients.find(client => {
            return client.ID === socket.id;   
        }); 
        allClients=clients;
        console.log(allClients);
        console.log("Your client ID: " + thisClient.ID);
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
    background(153);
    
   
}

function draw() {
    background(153);
    drawUnits();
    textSize(20);
    fill(0);
    text(thisClient.units[thisClient.currentUnit-1].job.name, 50, 50);
    if(keyIsPressed){
    data = {key: keys, unitID:unitSelector(keyCode)};
    socket.emit('moveKey', data);
    
    }
    
}

socket.on('unitMoved', function(clients){
    console.log("unit moved triggereedd");
        thisClient = clients.find(client => {
            return client.ID === socket.id;
        }); 
        allClients=clients;  
        drawUnits();
    }
);


function keyPressed(){
    
}

function unitSelector(keyCode){
    if(keyCode===49)
        return 1;
    if(keyCode===50)
        return 2;
    if(keyCode===51)
        return 3;
    if(keyCode===52)
        return 4;
    if(keyCode===53)
        return 5;
    else
        return -1;
}


function drawUnits(){
    allClients.forEach((client) => {     
        let teamColor = client.color;
        fill(teamColor);
        colorMode(HSB, 255);
        let strokeColor=color(hue(teamColor),saturation(teamColor)-100,brightness(teamColor));
        for(var i=0; i<5; i++){
            noStroke();
            if(i === client.currentUnit -1){
                stroke(strokeColor);
               strokeWeight(4);
            }
            client.currentUnit
            ellipse(client.units[i].position.x, client.units[i].position.y, 30, 30);
        }
        noStroke();
    });
}

function clientInitializer(){
    /*
    unit = new Unit(INITIALPOS, 0);
    units.push(unit);*/
}


