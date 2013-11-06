var L = require('leaflet');
L = require('./leaflet.hash')(L);
var map = L.map('map');
if(!location.hash){
	map.setView([ 42.32250876543571, -71.01837158203125], 10);
}
map.addHash();
var stamenToner = require('./stamenToner');
stamenToner.addTo(map);
module.exports = map;