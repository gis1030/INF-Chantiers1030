var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'images/marker-shadow.png',
        iconSize: [40, 40],
        shadowSize: [38, 40],
        iconAnchor: [20, 20],
        shadowAnchor: [10, 20],
        popupAnchor: [-0, 0],
    }
});

var Icon1030 = new LeafIcon({
    iconUrl: 'images/marker-icon_red.png',
});

var drawnItems = new L.FeatureGroup();
carte.addLayer(drawnItems);

var drawControl = new L.Control.Draw({
    position: 'topleft',
    draw: {
        polygon: {
            shapeOptions: {
                color: 'purple'
            },
            allowIntersection: false,
            drawError: {
                color: 'orange',
                timeout: 1000
            },
            showArea: true,
            metric: 'metric',
            repeatMode: true
        },
        polyline: {
            shapeOptions: {
                color: 'red'
            },
            showArea: true,
            metric: 'metric',
            repeatMode: true
        },
        rect: {
            shapeOptions: {
                color: 'green',
                timeout: 1000
            },
            showArea: true,
            metric: 'metric',
            repeatMode: true
        },
        circle: {
            shapeOptions: {
                color: 'steelblue'
            },
            showArea: true,
            radius: true,
            metric: 'metric',
            repeatMode: true
        },
        marker: {
            icon: Icon1030
        },
        circle: false,
        marker: false,
    },
    edit: {
        featureGroup: drawnItems
    }
});
carte.addControl(drawControl);

var geoJSONStyleOptions = {
    "color": "#000",
    "fillcolor": "Purple",
    "opacity": 0.65,
    "fillOpacity": 0.65,
    "weight": 5,
};

var drawnItemsShapes = new L.layerGroup();
//carte.addLayer(drawnItemsShapes);
carte.on('draw:created', function (e) {
    var type = e.layerType;
    var layer = e.layer;

    if (type === 'marker') {
        layer.bindPopup('A popup!');
    }
    // Shapes Only (methode 01)
    drawnItems.addLayer(layer);
    var shapes = getShapes(drawnItems);
    //layerGroup.clearLayers();

    // geJSON Data (methode 02)
    var shape = layer.toGeoJSON() // later to geoJSON
    var shape_for_db = JSON.stringify(shape); // convertit une valeur JavaScript en chaîne JSON
    //L.geoJSON(JSON.parse(shape_for_db)).addTo(carte);
    var shape_for_JS = L.geoJSON(JSON.parse(shape_for_db), {
        style: geoJSONStyleOptions
    }); //Chaîne de caractères JSON > valeur JavaScript
    console.log(shape_for_JS)

    drawnItemsShapes.addLayer(shape_for_JS)
    //console.log(drawnItemsShapes);
    //console.log(shape_for_db);

    var TMP01 = drawnItems.toGeoJSON();
    var TMP02 = JSON.stringify(TMP01);
    //console.log(TMP01);
    //console.log(TMP02);

    var TMP021 = "var ListWorkZones1030 = " + TMP02
    SaveData_02(TMP021, "ListeSchaerbeek_SecteursTravaux.js", 'text/plain')
});

var getShapes = function (drawnItems) {
    var shapes = [];
    shapes["polyline"] = [];
    shapes["circle"] = [];
    shapes["marker"] = [];

    drawnItems.eachLayer(function (layer) {
        // Note: Rectangle extends Polygon. Polygon extends Polyline.
        // Therefore, all of them are instances of Polyline
        if (layer instanceof L.Polyline) {
            shapes["polyline"].push(layer.getLatLngs())
        }
        if (layer instanceof L.Circle) {
            shapes["circle"].push([layer.getLatLng()])
        }
        if (layer instanceof L.Marker) {
            shapes["marker"].push([layer.getLatLng()], layer.getRadius());
        }
    });
    return shapes;
};

// seccion agregada
var DataTMP = DBPolygons.toGeoJSON();
//console.log(DataTMP);

var polyLayers00 = [];
for (var i = 0; i < DataTMP.features.length; i++) {
    var layerType = DataTMP.features[i].geometry.type;

    if (layerType == 'Point') {
        var layerCoord = DataTMP.features[i].geometry.coordinates;
        //console.log(i + " " + DataTMP.features[i].geometry.type)
        //console.log(layerCoord)

        var layerCircle = L.circle([layerCoord[1], layerCoord[0],
        {
            color: '#A93226',
            opacity: 0.5,
            weight: 6,
            smoothFactor: 1,
            lineCap: 'round',
            fill: true,
            fillOpacity: 0.2,
            radius: 500
        }
        ])
        polyLayers00.push(layerCircle)
    }
}
//console.log(polyLayers00)
for (let layer of polyLayers00) {
    drawnItems.addLayer(layer);
}

var polyLayers01 = [];
for (var i = 0; i < DataTMP.features.length; i++) {
    var layerType = DataTMP.features[i].geometry.type;
    if (layerType == 'Polygon') {
        var layerCoord = DataTMP.features[i].geometry.coordinates;
        //console.log(i + " " + DataTMP.features[i].geometry.type)
        //console.log(layerCoord)

        var LengthLayer = DataTMP.features[i].geometry.coordinates[0].length;
        var layerCoord = [];
        for (var j = 0; j < LengthLayer; j++) {
            layerCoord[j] = [DataTMP.features[i].geometry.coordinates[0][j][1],
            DataTMP.features[i].geometry.coordinates[0][j][0]
            ]
        }
        polyLayers01.push(L.polyline(layerCoord, {
            color: '#A93226',
            opacity: 0.5,
            weight: 6,
            smoothFactor: 1,
            lineCap: 'round',
            fill: true,
            fillOpacity: 0.2
        }))
    }
}
//console.log(polyLayers01)
for (let layer of polyLayers01) {
    drawnItems.addLayer(layer);
}

var polyLayers02 = [];
for (var i = 0; i < DataTMP.features.length; i++) {
    var layerType = DataTMP.features[i].geometry.type;
    if (layerType == 'LineString') {
        var layerCoord = DataTMP.features[i].geometry.coordinates;
        //console.log(i + " " + DataTMP.features[i].geometry.type)
        //console.log(layerCoord)

        var LengthLayer = DataTMP.features[i].geometry.coordinates.length;
        var layerCoord = [];
        for (var j = 0; j < LengthLayer; j++) {
            layerCoord[j] = [DataTMP.features[i].geometry.coordinates[j][1],
            DataTMP.features[i].geometry.coordinates[j][0]
            ]
        }
        //console.log(layerCoord)
        polyLayers02.push(L.polyline(layerCoord, {
            color: '#A93226',
            opacity: 0.5,
            weight: 6,
            smoothFactor: 1,
            lineCap: 'round',
            fill: true,
            fillOpacity: 0.2
        }))
    }
}
//console.log(polyLayers02)
for (let layer of polyLayers02) {
    drawnItems.addLayer(layer);
}