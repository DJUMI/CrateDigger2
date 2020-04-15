const Discogs = require('disconnect').Client;
const fs = require('fs') 

var db = new Discogs().user()
db.getInventory('jiggyjamz', function(err, data){
	console.log(data);
});
