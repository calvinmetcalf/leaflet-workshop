first:
	browserify -e examples/makeMap.js -o leaflet-bundle.js
second:
	browserify -e examples/addgeojson.js -o leaflet-bundle.js
third:
	browserify -e examples/makeHashMap.js -o leaflet-bundle.js
fourth:
	browserify -e examples/clusters.js -o leaflet-bundle.js
fifth:
	browserify -e examples/infoMap.js -o leaflet-bundle.js