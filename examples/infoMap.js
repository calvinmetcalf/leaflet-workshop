var L = require('leaflet');
var map = require('./makeMap');
var geojson = require('./geojson');
require('./infoWindow')(L);
var geoJSONlayer = new L.GeoInfoWindow(geojson);
geoJSONlayer.addTo(map);
module.exports = map;