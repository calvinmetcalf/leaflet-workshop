first:
	browserify -e examples/makeMap.js -o leaflet-bundle.js
second:
	browserify -e examples/addgeojson.js -o leaflet-bundle.js
third:
	browserify -e examples/makeHashMap.js -o leaflet-bundle.js