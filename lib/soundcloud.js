var request = require("./request");

/*
*
*   Deal with users
*
*/
//get single user details
exports.getUserDetails = function(scuser, callback) {
    request.getJson('users/' + scuser,callback);
};
//get single user tracks
exports.getUserTacks = function (user_id, callback) {
            request.getJson('users/' + user_id + '/tracks', callback);
};
//get user's track details
//exports.getUserTackDetails = function (user_id, callback) {
           //request.getJson('users/' + user_id + '/tracks', callback);
//};
/*
*
*   Deal with tracks
*
*/
//Get all tracks
exports.getAllLatestTracks = function(callback) {
    request.getJson('tracks',callback);
};
//get Track by ID
exports.getTrackbyID = function(id,callback) {
    request.getJson('tracks/' + id, callback);
};