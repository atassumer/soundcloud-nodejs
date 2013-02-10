var config = require('./config')
	, jsonraver = require("jsonraver")
	, qs = require('querystring'),;

exports.request = function(config){
	var client_id = config.client_id
		, host = config.host;

	getJson = function(resource,params,callback){
		if (typeof params === 'function') {
            callback = params;
            params = {};
        }
        params.client_id = client_id;
		jsonraver(host + resource + + '.json' + ((params) ? '?' + qs.stringify(params) : '', function(err, data) {
		    if(err) {
		        // ToDo Error handlling
		    } else {
		        callback(data);
		    }               
		});
	};
}