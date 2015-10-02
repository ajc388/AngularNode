//Configuration Settings
var port = 9000;

//Loading in extra frameworks
var app = require('express')(); //express package
var http = require('http').Server(app); //http server package from express

//Routes
app.get('/', function(req, res) {
  res.sendFile(__dirname + "/index.html");
});

//Port listener
http.listen(port, function() {
    console.log("==============================================");
    console.log("	         SERVER ONLINE!");
    console.log("==============================================");
    console.log("Listening to port: " + port );
    console.log("==============================================");
});