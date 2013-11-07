var utils = require('./utils');
module.exports = function(){
	L.GeoInfoWindow = L.GeoJSON.extend({
		initialize:function(data,options){
			options = options||{};
			if(options.onEachFeature){
				options.oldEach = onEachFeature;
			}else{
				options.oldEach = function(){};
			}
			options.onEachFeature = function(feature, layer){
				utils.onEachFeature(feature,layer);
				options.oldEach(feature,layer);
			};
			L.GeoJSON.prototype.initialize.call(this,data,options);
		}
	});
}