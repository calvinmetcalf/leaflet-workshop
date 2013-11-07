var L = require('leaflet');
require('leaflet.markercluster')(L);
var map = require('./makeHashMap.js');
var trees = require('./trees');
var clusters = new L.MarkerClusterGroup();
clusters.addTo(map);
clusters.addLayers(trees.map(function(ll){
	return new L.Marker(ll);
}));