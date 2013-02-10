var fs = require('fs')
	, jsonraver = require("jsonraver")
	, qs = require('querystring');


module.exports.getJson = function(resource,params,callback){
		var config = JSON.parse(fs.readFileSync('../config/config.json'));
		if (typeof params === 'function') {
            callback = params;
            params = {};
        }
        params.client_id = config.client_id;
		jsonraver(config.host + resource + '.json' + ((params) ? '?' + qs.stringify(params) : ''), function(err, data) {
		    if(err) {
		        console.log("Geee error");
		        console.log("URL: ", config.host + resource + '.json' + ((params) ? '?' + qs.stringify(params) : ''))
		    } else {
		        callback(data);
		    }               
		});
	};