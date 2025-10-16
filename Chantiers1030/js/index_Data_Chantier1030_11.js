// on personnalise les marqueurs
var DataIcon05 = L.icon({
    iconUrl: 'images/icon-Entreprises.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

// ++++++ Style Geometry ++++++++
function PolygonStyle(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "khaki",
        fillOpacity: 0.5
    };
}

function PolygonStyle_Request(feature) {
    return {
        weight: 2,
        color: "#228B22",
        opacity: 0.5,
        fillColor: "#7CFC00",
        fillOpacity: 0.5
    };
}

function PolygonStyle_Processed(feature) {
    return {
        weight: 2,
        color: "#808080",
        opacity: 0.5,
        fillColor: "#DCDCDC",
        fillOpacity: 0.5
    };
}

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
        var custompoup =
            "<dt> EnterpriseNumber : " + feature.properties.EnterpriseNumber + "</dt>" +
            "<dt> Denomination : " + feature.properties.Denomination + "</dt>";
        // "<dt> NaceCode: " + feature.properties.NaceCode + "</dt>" +;
        // "<dt> SectorGroup: " + feature.properties.SectorGroup + "</dt>" +
        // "<dt> Adresses: " + feature.properties.StreetFR + " " + feature.properties.HouseNumber + "</dt>";
        var popupContent0 = "<dt> EntityNumber : " + feature.properties.EntityNumber + "</dt>";

        popupContent = popupContent0 + custompoup;
    }
    if (feature.properties.Chantier) {
        var custompoup =
            "<dt> Responsable : " + feature.properties.Responsable + "</dt>" +
            "<dt> Organisation : " + feature.properties.Organisation + "</dt>" +
            "<dt> Statut : " + feature.properties.Statut + "</dt>" +
            "<dt> Regime : " + feature.properties.Regime + "</dt>" +
            "<dt> Durée : " + feature.properties.Duree + "</dt>" +
            "<dt> Date Debut : " + feature.properties.DateDebut + "</dt>" +
            "<dt> Date Fin : " + feature.properties.DateFin + "</dt>" +
            "<dt> Date Debut Autorisee : " + feature.properties.DateDebutAutorisee + "</dt>" +
            "<dt> Date Fin Autorisee : " + feature.properties.DateFinAutorisee + "</dt>";
        // 
        var popupContent0 = "<dt> Chantier : " + feature.properties.Chantier + "</dt>";

        popupContent = popupContent0 + custompoup;
    }
    layer.bindPopup(popupContent);
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


// BEGIN ++++++ Liste des Marqueurs ++++++++ BEGIN
var SectorLabel = "2014"
var Marker1030_99 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q99.addLayer(Marker1030_99)

var SectorLabel = "2015"
var Marker1030_01 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q01.addLayer(Marker1030_01)

var SectorLabel = "2016"
var Marker1030_02 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q02.addLayer(Marker1030_02)

var SectorLabel = "2017"
var Marker1030_03 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q03.addLayer(Marker1030_03)

var SectorLabel = "2018"
var Marker1030_04 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q04.addLayer(Marker1030_04)

var SectorLabel = "2019"
var Marker1030_05 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q05.addLayer(Marker1030_05)

var SectorLabel = "2020"
var Marker1030_06 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q06.addLayer(Marker1030_06)

var SectorLabel = "2021"
var Marker1030_07 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q07.addLayer(Marker1030_07)


SectorLabel = "2022"
var Marker1030_08 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q08.addLayer(Marker1030_08)

SectorLabel = "2023"
var Marker1030_09 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q09.addLayer(Marker1030_09)

SectorLabel = "2024"
var Marker1030_10 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q10.addLayer(Marker1030_10)

SectorLabel = "2025"
var Marker1030_11 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q11.addLayer(Marker1030_11)

SectorLabel = "2026"
var Marker1030_12 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q12.addLayer(Marker1030_12)

SectorLabel = "2027"
var Marker1030_13 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q13.addLayer(Marker1030_13)

SectorLabel = "2028"
var Marker1030_14 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q14.addLayer(Marker1030_14)

SectorLabel = "2029"
var Marker1030_15 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q15.addLayer(Marker1030_15)

SectorLabel = "2030"
var Marker1030_16 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q16.addLayer(Marker1030_16)
// END ++++++ Liste des Marqueurs ++++++++ END

// BEGIN ++++++ Liste des Marqueurs (GroupB) ++++++++ BEGIN
SectorLabel = "2014"
var Marker1030_99B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q99B.addLayer(Marker1030_99B)

SectorLabel = "2015"
var Marker1030_01B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q01B.addLayer(Marker1030_01B)

SectorLabel = "2016"
var Marker1030_02B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q02B.addLayer(Marker1030_02B)

SectorLabel = "2017"
var Marker1030_03B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q03B.addLayer(Marker1030_03B)

SectorLabel = "2018"
var Marker1030_04B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q04B.addLayer(Marker1030_04B)

SectorLabel = "2019"
var Marker1030_05B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q05B.addLayer(Marker1030_05B)

SectorLabel = "2020"
var Marker1030_06B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q06B.addLayer(Marker1030_06B)

SectorLabel = "2021"
var Marker1030_07B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q07B.addLayer(Marker1030_07B)

SectorLabel = "2022"
var Marker1030_08B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q08B.addLayer(Marker1030_08B)

SectorLabel = "2023"
var Marker1030_09B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q09B.addLayer(Marker1030_09B)

SectorLabel = "2024"
var Marker1030_10B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q10B.addLayer(Marker1030_10B)

SectorLabel = "2025"
var Marker1030_11B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q11B.addLayer(Marker1030_11B)

SectorLabel = "2026"
var Marker1030_12B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q12B.addLayer(Marker1030_12B)

SectorLabel = "2027"
var Marker1030_13B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q13B.addLayer(Marker1030_13B)

SectorLabel = "2028"
var Marker1030_14B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q14B.addLayer(Marker1030_14B)

SectorLabel = "2029"
var Marker1030_15B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q15B.addLayer(Marker1030_15B)

SectorLabel = "2030"
var Marker1030_16B = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin.includes(SectorLabel)) return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q16B.addLayer(Marker1030_16B)

// END ++++++ Liste des Marqueurs (GroupB) ++++++++ END

// ++++++ Group Points/Chantier (Polygons) ++++++++
var Marker1030_00 = L.geoJSON([ListOSIRIS_Markers1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_00.addLayer(Marker1030_00)

var Marker1030_Begin = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateDebut !== "") return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#df572aff', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
})//.addTo(carte)// inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Begin.addLayer(Marker1030_Begin)

var Marker1030_End = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if (feature.properties.DateFin !== "") return true
    },
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#b32a6cff', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
})//.addTo(carte) //inutile lors de lúti;isation des clusters
GroupMarkersMap1030_End.addLayer(Marker1030_End)

var Chantier1030_00 = L.geoJSON([BoundaryChantiers], {
    style: PolygonStyle,
    onEachFeature: onEachFeature,
})//.addTo(carte); // inutile lors de la utilisation des clusters
//GroupMarkersMap1030_00.addLayer(Chantier1030_00)

var Chantier1030_Begin = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut !== "") return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})//.addTo(carte); // inutile lors la utilisation des clusters

var Chantier1030_End = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateFin !== "") return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
}) //.addTo(carte); // inutile lors de la utilisation des clusters
// ++++++ Group Chantier (Polygons) ++++++++

// On va regropue les marqueurs dans une group leafvar
var GroupMarkersMap1030 = new L.featureGroup([
    GroupMarkersMap1030_Q99,
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
    //
    GroupMarkersMap1030_Q99B,
    GroupMarkersMap1030_Q01B,
    GroupMarkersMap1030_Q02B,
    GroupMarkersMap1030_Q03B,
    GroupMarkersMap1030_Q04B,
    GroupMarkersMap1030_Q05B,
    GroupMarkersMap1030_Q06B,
    GroupMarkersMap1030_Q07B,
    GroupMarkersMap1030_Q08B,
    GroupMarkersMap1030_Q09B,
    GroupMarkersMap1030_Q10B,
    GroupMarkersMap1030_Q11B,
    GroupMarkersMap1030_Q12B,
    GroupMarkersMap1030_Q13B,
    GroupMarkersMap1030_Q14B,
    GroupMarkersMap1030_Q15B,
    GroupMarkersMap1030_Q16B,
    //
    GroupMarkersMap1030_Begin,
    GroupMarkersMap1030_End,
]);

var GroupMarkersMap1030_2015 = new L.featureGroup([
    GroupMarkersMap1030_Q01,
    GroupMarkersMap1030_Q01B,
]);

var GroupMarkersMap1030_2016 = new L.featureGroup([
    GroupMarkersMap1030_Q02,
    GroupMarkersMap1030_Q02B,
]);

var GroupMarkersMap1030_2017 = new L.featureGroup([
    GroupMarkersMap1030_Q03,
    GroupMarkersMap1030_Q03B,
]);

var GroupMarkersMap1030_2018 = new L.featureGroup([
    GroupMarkersMap1030_Q04,
    GroupMarkersMap1030_Q04B,
]);

var GroupMarkersMap1030_2019 = new L.featureGroup([
    GroupMarkersMap1030_Q05,
    GroupMarkersMap1030_Q05B,
]);

var GroupMarkersMap1030_2020 = new L.featureGroup([
    GroupMarkersMap1030_Q06,
    GroupMarkersMap1030_Q06B,
]);

var GroupMarkersMap1030_2021 = new L.featureGroup([
    GroupMarkersMap1030_Q07,
    GroupMarkersMap1030_Q07B,
]);

var GroupMarkersMap1030_2022 = new L.featureGroup([
    GroupMarkersMap1030_Q08,
    GroupMarkersMap1030_Q08B,
]);

var GroupMarkersMap1030_2023 = new L.featureGroup([
    GroupMarkersMap1030_Q09,
    GroupMarkersMap1030_Q09B,
]);

var GroupMarkersMap1030_2024 = new L.featureGroup([
    GroupMarkersMap1030_Q10,
    GroupMarkersMap1030_Q10B,
]);

var GroupMarkersMap1030_2025 = new L.featureGroup([
    GroupMarkersMap1030_Q11,
    GroupMarkersMap1030_Q11B,
]);

var GroupMarkersMap1030_2026 = new L.featureGroup([
    GroupMarkersMap1030_Q12,
    GroupMarkersMap1030_Q12B,
]);

var GroupMarkersMap1030_2027 = new L.featureGroup([
    GroupMarkersMap1030_Q13,
    GroupMarkersMap1030_Q13B,
]);

var GroupMarkersMap1030_2028 = new L.featureGroup([
    GroupMarkersMap1030_Q14,
    GroupMarkersMap1030_Q14B,
]);

var GroupMarkersMap1030_2029 = new L.featureGroup([
    GroupMarkersMap1030_Q15,
    GroupMarkersMap1030_Q15B,
]);

var GroupMarkersMap1030_2030 = new L.featureGroup([
    GroupMarkersMap1030_Q16,
    GroupMarkersMap1030_Q16B,
]);

carte.addLayer(GroupMarkersMap1030_00)
// END ==== Donnnes GeoJson comme marqueurs ========


// BEGIN ==== Data Viewer ========
Marker1030_00.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_Begin.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_End.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_99.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_01.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_02.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_03.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_04.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_05.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_06.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_07.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_08.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_09.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_10.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_11.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_12.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_13.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_14.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_15.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_16.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
//
Marker1030_99.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_01B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_02B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_03B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_04B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_05B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_06B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_07B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_08B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_09B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_10B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_11B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_12B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_13B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_14B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_15B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_16B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

//+++++++++++++++++++++++++++++++++++++++++++++++
function MarkerDataView(clickedMarker) {
    var AdresseRef = clickedMarker.feature.properties.StreetFR + " " + clickedMarker.feature.properties.HouseNumber + ", 1030 Schaerbeek";
    var CommentairesDossier = clickedMarker.feature.properties.Commentaires + " Dossier: " + clickedMarker.feature.properties.Dossier;

    document.getElementById("Chantier").value = clickedMarker.feature.properties.Chantier
    document.getElementById("Nom").value = clickedMarker.feature.properties.Nom
    document.getElementById("ReferenceInterne").value = clickedMarker.feature.properties.ReferenceInterne
    document.getElementById("Nature").value = clickedMarker.feature.properties.Nature
    document.getElementById("DateDebut").value = clickedMarker.feature.properties.DateDebut
    document.getElementById("DateFin").value = clickedMarker.feature.properties.DateFin
    document.getElementById("Duree").value = clickedMarker.feature.properties.Duree
    document.getElementById("Statut").value = clickedMarker.feature.properties.Statut
    document.getElementById("Gestionnaire").value = clickedMarker.feature.properties.Gestionnaire
    document.getElementById("Responsable").value = clickedMarker.feature.properties.Responsable
    document.getElementById("Organisation").value = clickedMarker.feature.properties.Organisation
    document.getElementById("Rues").value = clickedMarker.feature.properties.Rues
    document.getElementById("Regime").value = clickedMarker.feature.properties.Regime
    document.getElementById("ClasseVoirieMax").value = clickedMarker.feature.properties.ClasseVoirieMax
    document.getElementById("Surface").value = clickedMarker.feature.properties.Surface
    document.getElementById("AvisCCC").value = clickedMarker.feature.properties.AvisCCC
    document.getElementById("Urgence").value = clickedMarker.feature.properties.Urgence
    document.getElementById("ZonesPolice").value = clickedMarker.feature.properties.ZonesPolice
    document.getElementById("SymbolInfo").value = clickedMarker.feature.properties.SymbolInfo
    document.getElementById("LatitudeBCE").value = clickedMarker.feature.geometry.coordinates[1]
    document.getElementById("LongitudeBCE").value = clickedMarker.feature.geometry.coordinates[0]
};