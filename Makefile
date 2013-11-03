first:
	browserify -e examples/makeMap.js -o bundle.js
second:
	browserify -e examples/addgeojson.js -o bundle.js