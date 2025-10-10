// on personnalise les marqueurs
var TreeIcon01 = L.icon({
    iconUrl: 'src/images/ConeSignalisation.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

var TreeIcon02 = L.icon({
    iconUrl: 'src/images/STIB_plaque_arret.png',
    iconSize: [20, 40],
    iconAnchor: [10, 40],
    popupAnchor: [-5, -30]
});

var TreeIcon03 = L.icon({
    iconUrl: 'src/images/SignauStationnement.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

var TreeIcon04 = L.icon({
    iconUrl: 'src/images/SignauxInterdiction.png',
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
    if (feature.properties.Intersection) {
        var custompoup = "<dt>" + feature.properties.Intersection + "</dt>";
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
    style: function(feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

var DBPolygonsBoundary = L.geoJSON([BoundaryDistrict], {
    style: function(feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

var DBPolygons = L.geoJSON([ListWorkZones1030], {
    style: function(feature) {
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
    pointToLayer: function(feature, latlng) {
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
var Marker1030 = L.geoJSON([ListWorkZones1030], {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            return L.marker(latlng, { icon: TreeIcon01 });
        }
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030.addLayer(Marker1030)

// On va regropue les marqueurs dans une group leafvar
var GroupMarkersClustersALL = new L.featureGroup([
    GroupMarkersMap1030,
]);

carte.addLayer(GroupMarkersMap1030)
    // END ==== Donnnes GeoJson comme marqueurs ========