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

var DataIcon05 = L.icon({
    iconUrl: 'images/icon-Entreprises.png',
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
    if (feature.properties.EntityNumber) {
        var custompoup = "<dt> Denomination : " + feature.properties.Denomination + "</dt>" +
            "<dt> EnterpriseNumber : " + feature.properties.EnterpriseNumber + "</dt>" +
            "<dt> NaceCode: " + feature.properties.NaceCode + "</dt>" +
            "<dt> SectorGroup: " + feature.properties.SectorGroup + "</dt>" +
            "<dt> Adresses: " + feature.properties.StreetFR + " " + feature.properties.HouseNumber + "</dt>";
        var popupContent0 = "<dt> EntityNumber : " + feature.properties.EntityNumber + "</dt>";

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
var SectorLabel = "A"
var Marker1030_01 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q01.addLayer(Marker1030_01)

SectorLabel = "B"
var Marker1030_02 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q02.addLayer(Marker1030_02)

SectorLabel = "C"
var Marker1030_03 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q03.addLayer(Marker1030_03)

SectorLabel = "D"
var Marker1030_04 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q04.addLayer(Marker1030_04)

SectorLabel = "E"
var Marker1030_05 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q05.addLayer(Marker1030_05)

SectorLabel = "F"
var Marker1030_06 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q06.addLayer(Marker1030_06)

SectorLabel = "G"
var Marker1030_07 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q07.addLayer(Marker1030_07)

SectorLabel = "H"
var Marker1030_08 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q08.addLayer(Marker1030_08)

SectorLabel = "I"
var Marker1030_09 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q09.addLayer(Marker1030_09)

SectorLabel = "J"
var Marker1030_10 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q10.addLayer(Marker1030_10)

SectorLabel = "K"
var Marker1030_11 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q11.addLayer(Marker1030_11)

SectorLabel = "L"
var Marker1030_12 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q12.addLayer(Marker1030_12)

SectorLabel = "M"
var Marker1030_13 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q13.addLayer(Marker1030_13)

SectorLabel = "N"
var Marker1030_14 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q14.addLayer(Marker1030_14)

SectorLabel = "O"
var Marker1030_15 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q15.addLayer(Marker1030_15)

SectorLabel = "P"
var Marker1030_16 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q16.addLayer(Marker1030_16)

SectorLabel = "Q"
var Marker1030_17 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q17.addLayer(Marker1030_17)

SectorLabel = "R"
var Marker1030_18 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q18.addLayer(Marker1030_18)

SectorLabel = "S"
var Marker1030_19 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q19.addLayer(Marker1030_19)

SectorLabel = "T"
var Marker1030_20 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q20.addLayer(Marker1030_20)

SectorLabel = "U"
var Marker1030_21 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q21.addLayer(Marker1030_21)

SectorLabel = "NR"
var Marker1030_22 = L.geoJSON([ListBCEMarkers1030], {
    filter: function (feature) {
        if (feature.properties.SectorCode === SectorLabel) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q22.addLayer(Marker1030_22)
//+++++++++++++++++++++++++++++++

var Marker1030_00 = L.geoJSON([ListBCEMarkers1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        //return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#db7420',
            color: "#000", //'#db7420',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_00.addLayer(Marker1030_00)

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
    GroupMarkersMap1030_Q15,
    GroupMarkersMap1030_Q16,
    GroupMarkersMap1030_Q17,
    GroupMarkersMap1030_Q18,
    GroupMarkersMap1030_Q19,
    GroupMarkersMap1030_Q20,
    GroupMarkersMap1030_Q21,
    GroupMarkersMap1030_Q22,
]);

carte.addLayer(GroupMarkersMap1030_00)
// END ==== Donnnes GeoJson comme marqueurs ========