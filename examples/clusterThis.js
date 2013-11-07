var utils = require('./utils');
module.exports = function(){
	L.ClusterThis = L.MarkerClusterGroup.extend({
		initialize:function(data,options){






			var clusters = L.MarkerClusterGroup.prototype.initialize.call(this);

      clusters.addLayers(data.features.map(function(feature){
        var marker = new L.Marker([feature.geometry.coordinates[1],feature.geometry.coordinates[0]]);
        utils.onEachFeature(feature, marker);
        return marker;
      }));

//			options = options||{};
//			if(options.onEachFeature){
//				options.oldEach = onEachFeature;
//			}else{
//				options.oldEach = function(){};
//			}
//			options.onEachFeature = function(feature, layer){
//				utils.onEachFeature(feature,layer);
//				options.oldEach(feature,layer);
//			};





			//var clusters = L.MarkerClusterGroup.prototype.initialize.call(this,data,options);
		}
	});
}
