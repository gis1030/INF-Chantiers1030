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

var DataIcon06 = L.icon({
    iconUrl: 'images/icon-Cadastres.png',
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
    if (feature.properties.propertySituationIdf) {
        var custompoup = "<dt> PropertyType : " + feature.properties.PropertyType + "</dt>" +
            "<dt> Adresses: " + feature.properties.StreetFR + " " + feature.properties.HouseNumber + "</dt>";
        var popupContent0 = "<dt> EntityNumber : " + feature.properties.propertySituationIdf + "</dt>";
        popupContent = popupContent0 + custompoup;
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

// ++++++ Liste des Marqueurs ++++++++
var QuartierLabel = "Parc Josaphat"
var Marker1030_01 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q01.addLayer(Marker1030_01)

QuartierLabel = "Coteaux-Josaphat"
var Marker1030_02 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q02.addLayer(Marker1030_02)

QuartierLabel = "Colignon"
var Marker1030_03 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q03.addLayer(Marker1030_03)

QuartierLabel = "Palais-Reine"
var Marker1030_04 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q04.addLayer(Marker1030_04)

QuartierLabel = "Bienfaiteurs"
var Marker1030_05 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q05.addLayer(Marker1030_05)

QuartierLabel = "Helmet-Hamoir"
var Marker1030_06 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q06.addLayer(Marker1030_06)

QuartierLabel = "Terdelt-Fleur"
var Marker1030_07 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q07.addLayer(Marker1030_07)

QuartierLabel = "Jardin"
var Marker1030_08 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q08.addLayer(Marker1030_08)

QuartierLabel = "Reyers"
var Marker1030_09 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q09.addLayer(Marker1030_09)

QuartierLabel = "Cerisiers"
var Marker1030_10 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q10.addLayer(Marker1030_10)

QuartierLabel = "Linthout"
var Marker1030_11 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q11.addLayer(Marker1030_11)

QuartierLabel = "Plasky"
var Marker1030_12 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q12.addLayer(Marker1030_12)

QuartierLabel = "Nord"
var Marker1030_13 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q13.addLayer(Marker1030_13)

QuartierLabel = "Dehors De Schaerbeek"
var Marker1030_14 = L.geoJSON([ListCadastreMarkers1030], {
    filter: function (feature) {
        if (feature.properties.Quartier === QuartierLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q14.addLayer(Marker1030_14)

var Marker1030_00 = L.geoJSON([ListCadastreMarkers1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: TreeIcon06 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_00.addLayer(Marker1030_00)

//+++++++++++++++++++++++++++++++

// On va regropue les marqueurs dans une group leafvar
var GroupMarkersMap1030 = new L.featureGroup([
    GroupMarkersMap1030_Q01,
    GroupMarkersMap1030_Q02,
    GroupMarkersMap1030_Q03,
    GroupMarkersMap1030_Q04,
    GroupMarkersMap1030_Q05,
    GroupMarkersMap1030_Q06,
    GroupMarkersMap1030_Q07,
    GroupMarkersMap1030_Q08,
    GroupMarkersMap1030_Q09,
    GroupMarkersMap1030_Q10,
    GroupMarkersMap1030_Q11,
    GroupMarkersMap1030_Q12,
    GroupMarkersMap1030_Q13,
    GroupMarkersMap1030_Q14,
]);

carte.addLayer(GroupMarkersMap1030_00)
// END ==== Donnnes GeoJson comme marqueurs ========