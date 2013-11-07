group study
===

break up into groups and each group will write a leaflet plugin

ideas:

- extend geojson to cluster the points
- better way to deal with the css (you probobly don't want to use [mine](https://github.com/leaflet-extras/leaflet.css))
- bindPopup+[handle bars](http://handlebarsjs.com/)
- [awesome markers](https://github.com/lvoogdt/Leaflet.awesome-markers), but more so
- consume raj's poi format (any of them)
    - extra credit to write a geopackage plugin (examples of binary plugins are my [shp file](https://github.com/calvinmetcalf/leaflet.shapefile) and [fileGDB](https://github.com/calvinmetcalf/leaflet.filegdb))
- extend [leaflet.pouch](https://github.com/calvinmetcalf/leaflet.pouch) to deal with cloudant geometry (or just be better with a Gruntfile and tests)
- do something with putting an [r-tree](https://github.com/leaflet-extras/RTree) or [r*-tree](https://github.com/mourner/rbush) into a web worker and return data based on viewpoint with filtering and simplifying, load it with geojson over ajax, feel free to use my [web worker library](https://github.com/calvinmetcalf/catiline).
- do something with promises, kids these days love promises right?