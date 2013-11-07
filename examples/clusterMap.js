var L = require('leaflet');
var map = require('./makeHashMap');
require('leaflet.markercluster')(L);
var geojson = require('./fullTrees');
var utils = require('./utils');
var clusters = new L.MarkerClusterGroup();
clusters.addTo(map);
clusters.addLayers(geojson.features.map(function(v){
	var marker = new L.Marker([v.geometry.coordinates[1],v.geometry.coordinates[0]]);
	utils.onEachFeature(v,marker);
	return marker;
}));