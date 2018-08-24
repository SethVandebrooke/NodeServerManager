// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
// Include dependencies
const express = require('express');

//set the front end functions to run backend functions
var activeServers = {};
start = function (id) {
    let server = app.servers()[id];
    let Eapp = express();
    
    Eapp.use(express.static(server.path));
    activeServers[id] = Eapp.listen(server.port, function () {
        console.log("in use");
    });
};

stop = function (id) {
    let server = app.servers()[id];
    activeServers[id].close();
};
