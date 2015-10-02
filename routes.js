module.exports = function (app) {
	
	//GET Routes
	app.get('/', function(req, res) {
	  res.sendFile(__dirname + "/p1.html");
	});

	app.get('/p1', function(req, res) {
	  res.sendFile(__dirname + "/p1.html");
	});

	app.get('/p2', function(req, res) {
	  res.sendFile(__dirname + "/p2.html");
	});

	app.get('/p3', function(req, res) {
	  res.sendFile(__dirname + "/p3.html");
	});

	app.get('/p4', function(req, res) {
	  res.sendFile(__dirname + "/p4.html");
	});



	//POST Routes
}