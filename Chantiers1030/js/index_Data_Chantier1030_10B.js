// on personnalise les marqueurs
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
            "<dt> Statut : " + feature.properties.Statut + "</dt>";
        //"<dt> Regime : " + feature.properties.Regime + "</dt>" +
        //"<dt> Durée : " + feature.properties.Duree + "</dt>" +
        //"<dt> Date Debut : " + feature.properties.DateDebut + "</dt>" +
        //"<dt> Date Fin : " + feature.properties.DateFin + "</dt>" +
        //"<dt> Date Debut Autorisee : " + feature.properties.DateDebutAutorisee + "</dt>" +
        //"<dt> Date Fin Autorisee : " + feature.properties.DateFinAutorisee + "</dt>";
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

// ++++++ Liste des Marqueurs ++++++++
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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q01.addLayer(Marker1030_01)

var Chantier1030_01 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q02.addLayer(Marker1030_02)

var Chantier1030_02 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q03.addLayer(Marker1030_03)

var Chantier1030_03 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q04.addLayer(Marker1030_04)

var Chantier1030_04 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q05.addLayer(Marker1030_05)

var Chantier1030_05 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q06.addLayer(Marker1030_06)

var Chantier1030_06 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q07.addLayer(Marker1030_07)

var Chantier1030_07 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

var SectorLabel = "2022"
var Marker1030_15B = L.geoJSON([ListOSIRIS_Markers1030], {
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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q15B.addLayer(Marker1030_15B)

var Chantier1030_15B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

var SectorLabel = "2023"
var Marker1030_16B = L.geoJSON([ListOSIRIS_Markers1030], {
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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q16B.addLayer(Marker1030_16B)

var Chantier1030_16B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

var SectorLabel = "2024"
var Marker1030_17B = L.geoJSON([ListOSIRIS_Markers1030], {
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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q17B.addLayer(Marker1030_17B)

var Chantier1030_17B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

var SectorLabel = "2025"
var Marker1030_18B = L.geoJSON([ListOSIRIS_Markers1030], {
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
            fillColor: '#778899', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_Q18B.addLayer(Marker1030_18B)

var Chantier1030_18B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,
})

//++++++++++++++++++++++++++++++++++++++++++

SectorLabel = "2015"
var Marker1030_08 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_08 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2016"
var Marker1030_09 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_09 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2017"
var Marker1030_10 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_10 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2018"
var Marker1030_11 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_11 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2019"
var Marker1030_12 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_12 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2020"
var Marker1030_13 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_13 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2021"
var Marker1030_14 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_14 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2022"
var Marker1030_15 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_15 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2023"
var Marker1030_16 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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

var Chantier1030_16 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2024"
var Marker1030_17 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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
GroupMarkersMap1030_Q17.addLayer(Marker1030_17)

var Chantier1030_17 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

SectorLabel = "2025"
var Marker1030_18 = L.geoJSON([ListOSIRIS_Markers1030], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
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
GroupMarkersMap1030_Q18.addLayer(Marker1030_18)

var Chantier1030_18 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})

// ++++++ Group Chantier (Polygons) ++++++++
var Chantier1030_00 = L.geoJSON([BoundaryChantiers], {
    style: PolygonStyle,
    onEachFeature: onEachFeature,
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
//GroupMarkersMap1030_00.addLayer(Chantier1030_00)

var Chantier1030_Request = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebutAutorisee !== undefined) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,

}) // .addTo(carte); ; inutile lors de lúti;isation des clusters

var Chantier1030_Processed = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebutAutorisee === undefined) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,

}) // .addTo(carte); ; inutile lors de lúti;isation des clusters 

// ++++++ Liste ALL Chantier (Points) ++++++++
var Marker1030_00 = L.geoJSON([ListOSIRIS_Markers1030], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        // return L.marker(latlng, { icon: DataIcon05 });
        return L.circleMarker(latlng, {
            color: 'black',
            fillColor: '#EE82EE', //'#ff7f50', //'#d39f2f',
            color: "#000", //'#d39f2f',
            fillOpacity: 0.6,
            radius: 8,
            weight: 1,
            opacity: 1
        })
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
GroupMarkersMap1030_00.addLayer(Marker1030_00)

var GroupMarkersMap1030_ALL = new L.featureGroup([
    GroupMarkersMap1030_00,
    //Chantier1030_00,
]);

var GroupChantiersMap1030_ALL = new L.featureGroup([
    Chantier1030_00,
    //Chantier1030_Processed,
    //Chantier1030_Request,
]);

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

var GroupMarkersMap1030_2015 = new L.featureGroup([
    GroupMarkersMap1030_Q01,
    GroupMarkersMap1030_Q08,
    Chantier1030_01,
    Chantier1030_08,
]);

var GroupMarkersMap1030_2016 = new L.featureGroup([
    GroupMarkersMap1030_Q02,
    GroupMarkersMap1030_Q09,
    Chantier1030_02,
    Chantier1030_09,
]);

var GroupMarkersMap1030_2017 = new L.featureGroup([
    GroupMarkersMap1030_Q03,
    GroupMarkersMap1030_Q10,
    Chantier1030_03,
    Chantier1030_10,
]);

var GroupMarkersMap1030_2018 = new L.featureGroup([
    GroupMarkersMap1030_Q04,
    GroupMarkersMap1030_Q11,
    Chantier1030_04,
    Chantier1030_11,
]);

var GroupMarkersMap1030_2019 = new L.featureGroup([
    GroupMarkersMap1030_Q05,
    GroupMarkersMap1030_Q12,
    Chantier1030_05,
    Chantier1030_12,
]);

var GroupMarkersMap1030_2020 = new L.featureGroup([
    GroupMarkersMap1030_Q06,
    GroupMarkersMap1030_Q13,
    Chantier1030_06,
    Chantier1030_13,
]);

var GroupMarkersMap1030_2021 = new L.featureGroup([
    GroupMarkersMap1030_Q07,
    GroupMarkersMap1030_Q14,
    Chantier1030_07,
    Chantier1030_14,
]);

var GroupMarkersMap1030_2022 = new L.featureGroup([
    GroupMarkersMap1030_Q15,
    GroupMarkersMap1030_Q15B,
    Chantier1030_15,
    Chantier1030_15B,
]);

var GroupMarkersMap1030_2023 = new L.featureGroup([
    GroupMarkersMap1030_Q16,
    GroupMarkersMap1030_Q16B,
    Chantier1030_16,
    Chantier1030_16B,
]);

var GroupMarkersMap1030_2024 = new L.featureGroup([
    GroupMarkersMap1030_Q17,
    GroupMarkersMap1030_Q17B,
    Chantier1030_17,
    Chantier1030_17B,
]);

var GroupMarkersMap1030_2025 = new L.featureGroup([
    GroupMarkersMap1030_Q18,
    GroupMarkersMap1030_Q18B,
    Chantier1030_18,
    Chantier1030_18B,
]);

carte.addLayer(GroupMarkersMap1030_ALL)
//carte.addLayer(GroupChantiersMap1030_ALL)
//carte.addLayer(Chantier1030_00)
//carte.addLayer(Chantier1030_Processed)
//carte.addLayer(Chantier1030_Request)

// END ==== Donnnes GeoJson comme marqueurs ========


// BEGIN ==== Data Viewer ========
Marker1030_00.on("click", function (event) {
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

Marker1030_17.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_18.on("click", function (event) {
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

Marker1030_17B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_18B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
// >>>>>>> END clusters <<<<<<<<<

// >>>>>>> BEGIN Chantiers <<<<<<<<<
Chantier1030_00.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_Request.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_Processed.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_01.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_02.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_03.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_04.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_05.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_06.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_07.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_08.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_09.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_10.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_11.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_12.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_13.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_14.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_15.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_16.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_17.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_18.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_15B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_16B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_17B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_18B.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

// >>>>>>> END Chantiers <<<<<<<<<
function MarkerDataView(clickedMarker) {
    //var AdresseRef = clickedMarker.feature.properties.StreetFR + " " + clickedMarker.feature.properties.HouseNumber + ", 1030 Schaerbeek";
    //var CommentairesDossier = clickedMarker.feature.properties.Commentaires + " Dossier: " + clickedMarker.feature.properties.Dossier;

    document.getElementById("ChantierOsiris").value = clickedMarker.feature.properties.Chantier
    document.getElementById("DemandeurOsiris").value = clickedMarker.feature.properties.Nom
    document.getElementById("RefInterneOsiris").value = clickedMarker.feature.properties.ReferenceInterne
    document.getElementById("NatureOsiris").value = clickedMarker.feature.properties.Nature
    document.getElementById("DateDebutOsiris").value = clickedMarker.feature.properties.DateDebut
    document.getElementById("DateFinOsiris").value = clickedMarker.feature.properties.DateFin
    document.getElementById("DureeOsiris").value = clickedMarker.feature.properties.Duree
    document.getElementById("DateDebutAutorOsiris").value = clickedMarker.feature.properties.DateDebutAutorisee
    document.getElementById("DateFinAutorOsiris").value = clickedMarker.feature.properties.DateFinAutorisee
    document.getElementById("StatutOsiris").value = clickedMarker.feature.properties.Statut
    document.getElementById("GestionnaireOsiris").value = clickedMarker.feature.properties.Gestionnaire
    document.getElementById("ResponsableOsiris").value = clickedMarker.feature.properties.Responsable
    document.getElementById("OrganisationeOsiris").value = clickedMarker.feature.properties.Organisation
    document.getElementById("RuesOsiris").value = clickedMarker.feature.properties.Rues
    document.getElementById("RegimeOsiris").value = clickedMarker.feature.properties.Regime
    document.getElementById("ClasseVoirieOsiris").value = clickedMarker.feature.properties.ClasseVoirieMax
    document.getElementById("SurfaceOsiris").value = clickedMarker.feature.properties.Surface
    document.getElementById("AvisCCCOsiris").value = clickedMarker.feature.properties.AvisCCC
    document.getElementById("UrgenceOsiris").value = clickedMarker.feature.properties.Urgence

    //document.getElementById("ZonesPoliceOsiris").value = clickedMarker.feature.properties.ZonesPolice
    //document.getElementById("Latitude").value = clickedMarker.feature.geometry.coordinates[1]
    //document.getElementById("Longitude").value = clickedMarker.feature.geometry.coordinates[0]
};