var L = require('leaflet');
var map = require('./makeMap');
var geojson = require('./geojson');
var utils = require('./utils');
var geoJSONlayer = L.geoJson(geojson, {
	onEachFeature:utils.onEachFeature
});
geoJSONlayer.addTo(map);
module.exports = map;