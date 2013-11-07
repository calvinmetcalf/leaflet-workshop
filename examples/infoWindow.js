var utils = require('./utils');
module.exports = function(){
	require('leaflet.markercluster')(L);

	L.GeoInfoWindow = L.GeoJSON.extend({
		initialize:function(data,options){
			options = options||{};
			options.onEachFeature = utils.onEachFeature;
			L.GeoJSON.prototype.initialize.call(this,data,options);
		}
	});
}