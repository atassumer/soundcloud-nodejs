var util=require('util'),
    soundcloud=require('../lib/soundcloud'),
    express=require('express');

var host = "localhost"
	, port = "3000";

var app = express();


/**
 * Server starting
 */
app.get('/', function(req, res){
    soundcloud.getUserDetails("guscalderone",function(data) {
    	//console.log(data);
    	//res.send(util.inspect(data));
    });
    soundcloud.getUserTacks("guscalderone",function(data){
    	//console.log(data);
    	//res.send(util.inspect(data));
    });
    soundcloud.getAllLatestTracks(function(data){
    	//console.log(data);
    	//res.send(util.inspect(data));
    });
    soundcloud.getTrackbyID("78640458", function(data){
    	console.log(data);
    	res.send(util.inspect(data));
    });
});
app.listen(port,host);
util.log('started app');