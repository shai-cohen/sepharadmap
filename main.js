var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik');




var map = L.map('map', {
center: [25.72126, -80.27542],
zoom: 5,
laters: [osmMap]

} );

var mapLayers = L.control.layers(baseMaps).addTo(map);