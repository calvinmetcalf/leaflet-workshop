var L = require('leaflet');
var map = L.map('map');
map.setView([ 42.32250876543571, -71.01837158203125], 10);
var stamenToner = require('./stamenToner');
stamenToner.addTo(map);
module.exports = map;