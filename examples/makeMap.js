var L = require('leaflet');
var map = L.map('map');
map.setView([ 42.32250876543571, -71.01837158203125], 10);
var stamenToner = L.tileLayer('http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png', {
	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
	subdomains: 'abcd',
	//minZoom: 0,
	maxZoom: 20
});
stamenToner.addTo(map);
module.exports = map;