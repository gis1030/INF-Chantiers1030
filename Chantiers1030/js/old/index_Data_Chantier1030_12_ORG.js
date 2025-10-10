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
}) //.addTo(carte);

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

function PolygonStyle_AliceBlue(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "#F0F8FF",
        fillOpacity: 0.5
    };
}

function PolygonStyle_Coral(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "#FF7F50",
        fillOpacity: 0.5
    };
}

function PolygonStyle_Chartreuse(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "#7FFF00",
        fillOpacity: 0.5
    };
}

function PolygonStyle_Crimson(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "#DC143C",
        fillOpacity: 0.5
    };
}

function PolygonStyle_DarkKhaki(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "#BDB76B",
        fillOpacity: 0.5
    };
}

function PolygonStyle_DarkOrchid(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "#9932CC",
        fillOpacity: 0.5
    };
}

function PolygonStyle_DeepPink(feature) {
    return {
        weight: 2,
        color: "indianred",
        opacity: 0.5,
        fillColor: "#FF1493",
        fillOpacity: 0.5
    };
}

// ++++++ Liste des Marqueurs ++++++++
var SectorLabel = "2015"
var Chantier1030_01 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_AliceBlue,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q01.addLayer(Chantier1030_01)

var SectorLabel = "2016"
var Chantier1030_02 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Coral,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q02.addLayer(Chantier1030_02)

var SectorLabel = "2017"
var Chantier1030_03 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Chartreuse,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q03.addLayer(Chantier1030_03)

var SectorLabel = "2018"
var Chantier1030_04 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_Crimson,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q04.addLayer(Chantier1030_04)

var SectorLabel = "2019"
var Chantier1030_05 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_DarkKhaki,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q05.addLayer(Chantier1030_05)

var SectorLabel = "2020"
var Chantier1030_06 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_DarkOrchid,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q06.addLayer(Chantier1030_06)

var SectorLabel = "2021"
var Chantier1030_07 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_DeepPink,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q07.addLayer(Chantier1030_07)

//NEW
var SectorLabel = "2022"
var Chantier1030_15B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_DeepPink,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q15B.addLayer(Chantier1030_15B)

var SectorLabel = "2023"
var Chantier1030_16B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_DeepPink,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q16B.addLayer(Chantier1030_16B)

var SectorLabel = "2024"
var Chantier1030_17B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_DeepPink,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q17B.addLayer(Chantier1030_17B)

var SectorLabel = "2025"
var Chantier1030_18B = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebut.includes(SectorLabel)) return true
    },
    style: PolygonStyle_DeepPink,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q18B.addLayer(Chantier1030_18B)

//===============================================================

SectorLabel = "2015"
var Chantier1030_08 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
})//.addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q08.addLayer(Chantier1030_08)

SectorLabel = "2016"
var Chantier1030_09 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q09.addLayer(Chantier1030_09)

SectorLabel = "2017"
var Chantier1030_10 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q10.addLayer(Chantier1030_10)

SectorLabel = "2018"
var Chantier1030_11 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q11.addLayer(Chantier1030_11)

SectorLabel = "2019"
var Chantier1030_12 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q12.addLayer(Chantier1030_12)

SectorLabel = "2020"
var Chantier1030_13 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q13.addLayer(Chantier1030_13)

SectorLabel = "2021"
var Chantier1030_14 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q14.addLayer(Chantier1030_14)

//NEW
SectorLabel = "2022"
var Chantier1030_15 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q15.addLayer(Chantier1030_15)

SectorLabel = "2023"
var Chantier1030_16 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q16.addLayer(Chantier1030_16)

SectorLabel = "2024"
var Chantier1030_17 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q17.addLayer(Chantier1030_17)

SectorLabel = "2025"
var Chantier1030_18 = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if ((feature.properties.DateDebutAutorisee !== undefined) && (feature.properties.DateDebutAutorisee.includes(SectorLabel))) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,
}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_Q18.addLayer(Chantier1030_18)
//+++++++++++++++++++++++++++++++

// ++++++ Liste Chantier (Polygons) ++++++++
var Chantier1030_00 = L.geoJSON([BoundaryChantiers], {

    style: PolygonStyle,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters
//GroupMarkersMap1030_00.addLayer(Chantier1030_00)

var Chantier1030_Request = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebutAutorisee !== undefined) return true
    },
    style: PolygonStyle_Request,
    onEachFeature: onEachFeature,

}) // .addTo(carte); // inutile lors la utilisation des clusters

var Chantier1030_Processed = L.geoJSON([BoundaryChantiers], {
    filter: function (feature) {
        if (feature.properties.DateDebutAutorisee === undefined) return true
    },
    style: PolygonStyle_Processed,
    onEachFeature: onEachFeature,

})//.addTo(carte); // inutile lors de la utilisation des clusters

// On va regropue les marqueurs dans une group leafvar
var GroupMarkersMap1030 = new L.featureGroup([
    Chantier1030_01, //GroupMarkersMap1030_Q01,
    Chantier1030_02, //GroupMarkersMap1030_Q02,
    Chantier1030_03, //GroupMarkersMap1030_Q03,
    Chantier1030_04, //GroupMarkersMap1030_Q04,
    Chantier1030_05, //GroupMarkersMap1030_Q05,
    Chantier1030_06, //GroupMarkersMap1030_Q06,
    Chantier1030_07, //GroupMarkersMap1030_Q07,
    Chantier1030_08, //GroupMarkersMap1030_Q08,
    Chantier1030_09, //GroupMarkersMap1030_Q09,
    Chantier1030_10, //GroupMarkersMap1030_Q10,
    Chantier1030_11, //GroupMarkersMap1030_Q11,
    Chantier1030_12, //GroupMarkersMap1030_Q12,
    Chantier1030_13, //GroupMarkersMap1030_Q13,
    Chantier1030_14, //GroupMarkersMap1030_Q14,
    Chantier1030_15, //GroupMarkersMap1030_Q15,
    Chantier1030_16, //GroupMarkersMap1030_Q16,
    Chantier1030_17, //GroupMarkersMap1030_Q17,
    Chantier1030_18, //GroupMarkersMap1030_Q18,
    Chantier1030_15B, //GroupMarkersMap1030_Q15B,
    Chantier1030_16B, //GroupMarkersMap1030_Q16B,
    Chantier1030_17B, //GroupMarkersMap1030_Q17B,
    Chantier1030_18B, //GroupMarkersMap1030_Q18B,
]);

var GroupMarkersMap1030_2015 = new L.featureGroup([
    Chantier1030_01, //GroupMarkersMap1030_Q01,
    Chantier1030_08, //GroupMarkersMap1030_Q08,
]);

var GroupMarkersMap1030_2016 = new L.featureGroup([
    Chantier1030_02, //GroupMarkersMap1030_Q02,
    Chantier1030_09, //GroupMarkersMap1030_Q09,
]);

var GroupMarkersMap1030_2017 = new L.featureGroup([
    Chantier1030_03, //GroupMarkersMap1030_Q03,
    Chantier1030_10, //GroupMarkersMap1030_Q10,
]);

var GroupMarkersMap1030_2018 = new L.featureGroup([
    Chantier1030_04, //GroupMarkersMap1030_Q04,
    Chantier1030_11, //GroupMarkersMap1030_Q11,
]);

var GroupMarkersMap1030_2019 = new L.featureGroup([
    Chantier1030_05, //GroupMarkersMap1030_Q05,
    Chantier1030_12, //GroupMarkersMap1030_Q12,
]);

var GroupMarkersMap1030_2020 = new L.featureGroup([
    Chantier1030_06, //GroupMarkersMap1030_Q06,
    Chantier1030_13, //GroupMarkersMap1030_Q13,
]);

var GroupMarkersMap1030_2021 = new L.featureGroup([
    Chantier1030_07, //GroupMarkersMap1030_Q07,
    Chantier1030_14, //GroupMarkersMap1030_Q14,
]);

// NEW
var GroupMarkersMap1030_2022 = new L.featureGroup([
    Chantier1030_15B, //GroupMarkersMap1030_Q15,
    Chantier1030_15, //GroupMarkersMap1030_Q15B,
]);

var GroupMarkersMap1030_2023 = new L.featureGroup([
    Chantier1030_16, //GroupMarkersMap1030_Q16,
    Chantier1030_16B, //GroupMarkersMap1030_Q16B,
]);

var GroupMarkersMap1030_2024 = new L.featureGroup([
    Chantier1030_17, //GroupMarkersMap1030_Q17,
    Chantier1030_17B, //GroupMarkersMap1030_Q17B,
]);

var GroupMarkersMap1030_2025 = new L.featureGroup([
    Chantier1030_18, //GroupMarkersMap1030_Q18,
    Chantier1030_18B, //GroupMarkersMap1030_Q18B,
]);

//carte.addLayer(Chantier1030_00) //GroupMarkersMap1030_00

carte.addLayer(GroupMarkersMap1030_2025) //GroupMarkersMap1030_00
// END ==== Donnnes GeoJson comme marqueurs ========

// BEGIN ==== Data Viewer ========
Chantier1030_00.on("click", function (event) {
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