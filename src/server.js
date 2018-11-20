// server.js

// importing from node_modues (no ./relative path)
const minimist = require('minimist');

// app/index.js is default import 
const app = require('./app');

console.log("node.js server");

const options = minimist(process.argv.slice(2));

console.log(options);

console.log("others ", options._)
const PORT = options.port || 8080;

console.log("PORT ", PORT)

//app.listen(PORT);


var http=require("http");

//express application
var server = http.createServer(app)

server.listen(8080, "0.0.0.0", function(err){
   
    if (err) {
        console.error("Could not listen ", err);
        return;
    }

    console.log("callback ", server.address());
})

console.log("running on port ", PORT);
