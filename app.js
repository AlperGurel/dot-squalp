const express = require("express");
const app = new express();
const port = 3000;
const server = require('http').Server(app);
const clientHandler = require('./backend-lib/clientHandler');
let io = require('socket.io')(server);
let clients = [];

app.set("view engine", "ejs");

app.use("/css", express.static("css/"));
app.use("/img", express.static("img/"));
app.use("/js",express.static("js/"));
app.use("/lib",express.static("lib/"));
app.use("/node_modules",express.static("node_modules/"));


app.get("/", (req, res) => {
    res.render("index");
});


server.listen(port, () => console.log("Port is runnniing!!!!"));


//socket handling
io.sockets.on('connection',
  function (socket) {
    console.log("We have a new client: " + socket.id);
    client = clientHandler.createClient(socket.id);
    clients.push(client);
    io.sockets.emit('clientData', clients);
        var tmp = clients.map((el) => {
        return el.ID;
    })
    console.log("All Client List: " + tmp);
    

    socket.on('disconnect', function() {
        console.log("disconnect: ", socket.id);
        clients = clients.filter(client => {
            return client.ID !== socket.id;
       });
       io.sockets.emit('clientData', clients);
    });
    
    socket.on('_moveKey', function(data) {
        for(var i=0; i<clients.length; i++){
            if(clients[i].ID===socket.id)
            {
                clients[i].takeInput(data.key, data.unitID);
                break;
            }
        }
        io.sockets.emit('unitMoved', clients);
        var tmp = clients.map((el) => {
            return el.ID;
        })
        });
    // test mouseClick
    socket.on("targetSet", (data) => {
        clients.forEach((client) => {
            
            if(client.ID === socket.id){
                //we dont need unit ID
                client.takeInput(data.targetLocation, data.unitID);            
            }
        });
    });

    socket.on("unitChange", (currentUnit) => {
        clients.forEach((client) => {
            if(client.ID===socket.id)
            {
                client.changeUnit(currentUnit);
            }
        });
    });

    // socket.on("update", () => {
    //     clients.forEach((client) => {
    //        client.updateUnitLocations(); 
    //     });
    //     io.sockets.emit('clientData', clients);
       
    // });

    // socket.on("update", () => {
    //     clients.forEach((client) => {
    //        client.updateUnitLocations(); 
           
    //     });
    //     io.sockets.emit('clientData', clients);
    // });
    
    
  }
  
);

function update(){
    clients.forEach((client) => {
       client.updateUnitLocations();  
    });
    io.sockets.emit('clientData', clients);
}

setInterval(update, 25);

