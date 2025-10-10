// on personnalise les marqueurs
var DataIcon01 = L.icon({
    iconUrl: 'images/ConeSignalisation.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

var DataIcon02 = L.icon({
    iconUrl: 'images/STIB_plaque_arret.png',
    iconSize: [20, 40],
    iconAnchor: [10, 40],
    popupAnchor: [-5, -30]
});

var DataIcon03 = L.icon({
    iconUrl: 'images/SignauStationnement.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

var DataIcon05 = L.icon({
    iconUrl: 'images/SignauStationnement_02.png',
    iconSize: [10, 10],
    iconAnchor: [5, 10],
    //popupAnchor: [-5, 5]
});

var DataIcon04 = L.icon({
    iconUrl: 'images/SignauxInterdiction.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

// BEGIN ==== Donnnes GeoJson comme marqueurs =======
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
function onEachFeature(feature, layer) {

    var popupContent = "<dt> ID: " + feature.id + "</dt>";
    if (feature.properties.source__term_name) {
        var custompoup = "<dt> Source: " + feature.properties.source__term_name +
            "<dt> Rue: " + feature.properties.sit_rue + "</dt>" +
            "<dt> Info: " + feature.properties.sit_info;
        popupContent += custompoup;
    }
    if (feature.properties.SectorName) {
        var custompoup = "<dt>" + feature.properties.SectorType + ": " +
            feature.properties.SectorName + "</dt>";
        popupContent += custompoup;
    }
    if (feature.properties.ArretSTIB) {
        var custompoup = "<dt>" + feature.properties.ArretSTIB + "</dt>";
        popupContent += custompoup;
    }
    if (feature.properties.Numident) {
        var custompoup = "<dt> Source: " + feature.properties.Source_Pot +
            "<dt> Type Pot: " + feature.properties.Type_Pot + "</dt>" +
            "<dt> Type Pan: " + feature.properties.Type_Pan + "</dt>" +
            "<dt> Entrave Pan: " + feature.properties.Entrave_Pan;
        popupContent += custompoup;
    }
    layer.bindPopup(popupContent);
}

function onEachFeature02(feature, layer) {
    var layerType = layer.feature.geometry.type;
    if (layerType == 'Point') {
        console.log("...es un Point")
    } else if (layerType == 'LineString') {
        // display the length, etc
        console.log("...es un Linestring")
    } else if (layerType == 'Polygon') {
        console.log("...es un Polygon")
    } else if (layerType == 'MultiPolygon') {
        console.log("...es un MultiPolygon")
    } else {
        console.log("...es un desconocido")
    }
}

// ++++++ Limites de Schaerbeek ++++++++
L.geoJSON([Boundary], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

var DBPolygonsBoundary = L.geoJSON([BoundaryDistrict], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

var DBPolygons = L.geoJSON([ListWorkZones1030], {
    style: function (feature) {
        var layerType = feature.geometry.type;
        //console.log(layerType);
        if (layerType == 'Polygon') {
            return {
                color: "#000",
                fillColor: "#117A65",
                fillOpacity: 0.1
            };
        } else if (layerType == 'LineString') {
            return {
                color: "Purple",
                fillColor: "Purple",
            };
        } else if (layerType == 'Point') {
            return {
                color: "#000",
                fillColor: "#9B59B6",
                fillOpacity: 0.8
            };
        }
        return feature.properties && feature.properties.style;
    },

    onEachFeature: onEachFeature,
    pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, {
            radius: 8,
            color: "#000",
            fillColor: "#9B59B6",
            fillOpacity: 0.8,
            weight: 1,
            opacity: 1,
        });
    },
})

// ++++++ Liste des Marqueurs ++++++++
var Marker1030 = L.geoJSON([ListSignalisationMap1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: DataIcon01 });
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030.addLayer(Marker1030)

var MarkerSTIB1030 = L.geoJSON([ListArretsSTIB1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: DataIcon02 });
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersSTIB1030.addLayer(MarkerSTIB1030)

var MarkerParkingPrive1030 = L.geoJSON([ListParkingPrive1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: DataIcon03 });
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersParkingPrive1030.addLayer(MarkerParkingPrive1030)

var MarkerParking1030 = L.geoJSON([ListParking1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: DataIcon05 });
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersParking1030.addLayer(MarkerParking1030)

var MarkerEntrave1030 = L.geoJSON([ListSignalisationEntraveMap1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: DataIcon04 });
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersEntrave1030.addLayer(MarkerEntrave1030)

// On va regropue les marqueurs dans une group leafvar
var GroupMarkersClustersALL = new L.featureGroup([
    GroupMarkersMap1030,
    GroupMarkersEntrave1030,
    GroupMarkersSTIB1030,
    GroupMarkersParkingPrive1030,
    GroupMarkersParking1030,
]);

carte.addLayer(GroupMarkersMap1030)
// END ==== Donnnes GeoJson comme marqueurs ========


/*
// BEGIN ==== Data Viewer ========
Marker1030.on("click", function(event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

MarkerEntrave1030.on("click", function(event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

MarkerSTIB1030.on("click", function(event) {
    var clickedMarker = event.layer;
    //console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

MarkerParkingPrive1030.on("click", function(event) {
    var clickedMarker = event.layer;
    //console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});


function MarkerDataView(clickedMarker) {
    document.querySelector("#NumIdentSig").value = clickedMarker.feature.properties.id
    document.querySelector("#SourceTermNameSig").value = clickedMarker.feature.properties.source__term_name
    document.querySelector("#SitRueSig").value = clickedMarker.feature.properties.sit_rue
    document.querySelector("#SitInfoSig").value = clickedMarker.feature.properties.sit_info
    document.querySelector("#LatitudeSig").value = clickedMarker.feature.geometry.coordinates[1]
    document.querySelector("#LongitudeSig").value = clickedMarker.feature.geometry.coordinates[0]
    document.querySelector("#TypeSig").value = clickedMarker.feature.geometry.type
};
*/