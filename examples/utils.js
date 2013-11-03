exports.onEachFeature = function(feature, layer) {
    if (feature.properties) {
        layer.bindPopup(Object.keys(feature.properties).map(function(k) {
            return k + ": " + feature.properties[k];
        }).join("<br />"), {
	        maxHeight: 200
        });
    }
}