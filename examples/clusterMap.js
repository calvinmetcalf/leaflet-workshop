var L = require('leaflet');
var map = require('./makeHashMap');
require('leaflet.markercluster')(L);
var geojson = require('./fullTrees');



var utils = require('./utils');


//var clusters = new L.MarkerClusterGroup();
//clusters.addTo(map);
//
//clusters.addLayers(geojson.features.map(function(feature){
//	var marker = new L.Marker([feature.geometry.coordinates[1],feature.geometry.coordinates[0]]);
//	utils.onEachFeature(feature, marker);
//	return marker;
//}));
//


var clusters = new L.ClusterThis( geojson );
clusters.addTo(map);
