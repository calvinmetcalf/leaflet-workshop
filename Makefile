first:
	./node_modules/browserify/bin/cmd.js -e examples/makeMap.js -o leaflet-bundle.js
second:
	./node_modules/browserify/bin/cmd.js -e examples/addgeojson.js -o leaflet-bundle.js
third:
	./node_modules/browserify/bin/cmd.js -e examples/makeHashMap.js -o leaflet-bundle.js
fourth:
	./node_modules/browserify/bin/cmd.js -e examples/clusters.js -o leaflet-bundle.js
fifth:
	./node_modules/browserify/bin/cmd.js -e examples/infoMap.js -o leaflet-bundle.js
sixth:
	./node_modules/browserify/bin/cmd.js -e examples/clusterMap.js -o leaflet-bundle.js