// on personnalise les marqueurs
var DataIcon05 = L.icon({
    iconUrl: 'images/icon-Entreprises.png',
    iconSize: [20, 20],
    iconAnchor: [10, 20],
    popupAnchor: [-5, 5]
});

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
if (typeof ChantierLabel === 'undefined' || AnneDemLabel === 'undefined' || MoisDemLabel === 'undefined' || AnneAutLabel === 'undefined' ||
    MoisAutLabel === 'undefined' || DemandeurLabel === 'undefined' || NatureLabel === 'undefined' ||
    StatutLabel === 'undefined' || GestionnaireLabel === 'undefined' || OrganisationeLabel === 'undefined' ||
    RuesLabel === 'undefined' || RegimeLabel === 'undefined' || ClasseVoirieLabel === 'undefined' ||
    AvisCCCLabel === 'undefined' || UrgenceLabel === 'undefined') {

    var ChantierLabel = ""
    var AnneDemLabel = ""
    var MoisDemLabel = ""
    var AnneAutLabel = ""
    var MoisAutLabel = ""
    var DemandeurLabel = ""
    var NatureLabel = ""
    var StatutLabel = ""
    var GestionnaireLabel = ""
    var OrganisationeLabel = ""
    var RuesLabel = ""
    var RegimeLabel = ""
    var ClasseVoirieLabel = ""
    var AvisCCCLabel = ""
    var UrgenceLabel = ""

    // ++++++ Liste ALL Chantier (Points) ++++++++
    var Marker1030 = L.geoJSON([ListOSIRIS_Markers1030], {
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

    var jsonALL = {};
    jsonALL = ListOSIRIS_Markers1030

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        style: function (feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function (feature, latlng) {
            return L.circleMarker(latlng, {
                color: 'black',
                fillColor: '#bd2848',
                color: "#000", //'#bd2848',
                fillOpacity: 0.6,
                radius: 8,
                weight: 1,
                opacity: 1
            })
        }
    }); // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var Marker1030_00 = Marker1030
    var Marker1030_ALL_00 = Marker1030_ALL

    // ++++++ Group Chantier (Polygons) ++++++++
    var Chantier1030 = L.geoJSON([BoundaryChantiers], {
        style: PolygonStyle,
        onEachFeature: onEachFeature,
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var jsonALL_Polygons = {};
    jsonALL_Polygons = BoundaryChantiers

    var Chantier1030_ALL = L.geoJSON([jsonALL_Polygons], {
        style: PolygonStyle,
        onEachFeature: onEachFeature,
    }) // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var Chantier1030_00 = Chantier1030
    var Chantier1030_ALL_00 = Chantier1030_ALL

    // Group CLusteres
    GroupMarkersMap1030.addLayer(Marker1030)
    GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL)

    GroupPolygonsMap1030.addLayer(Chantier1030)
    GroupPolygonsMap1030_ALL.addLayer(Chantier1030_ALL)
}

var GroupMarkersClustersALL1030 = new L.featureGroup([
    GroupMarkersMap1030,
]);

var GroupPolygonsClustersALL1030 = new L.featureGroup([
    GroupPolygonsMap1030,
]);

var GroupChantiersALL1030 = new L.featureGroup([
    GroupMarkersMap1030_ALL,
    GroupPolygonsMap1030_ALL,
]);

carte.addLayer(GroupChantiersALL1030)
//carte.addLayer(GroupMarkersMap1030_ALL)
//carte.addLayer(GroupPolygonsMap1030_ALL)
// END ==== Donnnes GeoJson comme marqueurs ========


// BEGIN ======== Data Viewer ======== BEGIN \\ 
Marker1030.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_ALL.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Chantier1030_ALL.on("click", function (event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
// END ======== Data Viewer ======== END \\


// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
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

function LoadALLData() {
    // Points
    Marker1030.eachLayer(function (marker) {
        carte.removeLayer(marker);
    });

    //Marker1030 = Marker1030_00
    Marker1030 = Marker1030_ALL
    Marker1030_ALL = Marker1030_ALL_00

    // On reinitialise les layers >> Points
    GroupMarkersMap1030.clearLayers();
    GroupMarkersMap1030_ALL.clearLayers();

    // On va regropue les marqueurs
    GroupMarkersMap1030.addLayer(Marker1030);
    GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL);

    // Polygons
    Chantier1030.eachLayer(function (marker) {
        carte.removeLayer(marker);
    });

    //Chantier1030 = Chantier1030_00
    Chantier1030 = Chantier1030_ALL
    Chantier1030_ALL = Chantier1030_ALL_00

    // On reinitialise les layers
    GroupPolygonsMap1030.clearLayers();
    GroupPolygonsMap1030_ALL.clearLayers();

    // On va regropue les marqueurs
    GroupPolygonsMap1030.addLayer(Chantier1030);
    GroupPolygonsMap1030_ALL.addLayer(Chantier1030_ALL);
}

function filterBy(val) {
    var result = Object.keys(obj).reduce(function (r, e) {
        if (e.toLowerCase().indexOf(val) != -1) {
            r[e] = obj[e];
        } else {
            Object.keys(obj[e]).forEach(function (k) {
                if (k.toLowerCase().indexOf(val) != -1) {
                    var object = {}
                    object[k] = obj[e][k];
                    r[e] = object;
                }
            })
        }
        return r;
    }, {})
    return result;
}

function concatGeoJSON(g1, g2) {
    return {
        "type": "FeatureCollection",
        "features": g1.features.concat(g2.features)
    }
};

function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};

    for (var i in originalArray) {
        lookupObject[originalArray[i][prop]] = originalArray[i];
    }

    for (i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
    return newArray;
}

function SearchData() {

    var AnneDemLabel = document.getElementById("AnneDemOsiris").value;
    var MoisDemLabel = document.getElementById("MoisDemOsiris").value;
    var AnneAutLabel = document.getElementById("AnneAutOsiris").value;
    var MoisAutLabel = document.getElementById("MoisAutOsiris").value;

    var ChantierLabel = document.getElementById("ChantierOsiris").value;
    var DemandeurLabel = document.getElementById("DemandeurOsiris").value;
    var NatureLabel = document.getElementById("NatureOsiris").value;
    var StatutLabel = document.getElementById("StatutOsiris").value;
    var GestionnaireLabel = document.getElementById("GestionnaireOsiris").value;
    var OrganisationeLabel = document.getElementById("OrganisationeOsiris").value;
    var RuesLabel = document.getElementById("RuesOsiris").value;
    var RegimeLabel = document.getElementById("RegimeOsiris").value;
    var ClasseVoirieLabel = document.getElementById("ClasseVoirieOsiris").value;
    var AvisCCCLabel = document.getElementById("AvisCCCOsiris").value;
    var UrgenceLabel = document.getElementById("UrgenceOsiris").value;


    if (AnneDemLabel == "") {
        AnneDemLabel = "ALLData";
    }
    if (MoisDemLabel == "") {
        MoisDemLabel = "ALLData";
    }
    if (AnneAutLabel == "") {
        AnneAutLabel = "ALLData";
    }
    if (MoisAutLabel == "") {
        MoisAutLabel = "ALLData";
    }
    if (ChantierLabel == "") {
        ChantierLabel = "ALLData";
    }
    if (DemandeurLabel == "") {
        DemandeurLabel = "ALLData";
    }
    if (NatureLabel == "") {
        NatureLabel = "ALLData";
    }
    if (StatutLabel == "") {
        StatutLabel = "ALLData";
    }
    if (GestionnaireLabel == "") {
        GestionnaireLabel = "ALLData";
    }
    if (OrganisationeLabel == "") {
        OrganisationeLabel = "ALLData";
    }
    if (RuesLabel == "") {
        RuesLabe = "ALLData";
    }
    if (RegimeLabel == "") {
        RegimeLabel = "ALLData";
    }
    if (ClasseVoirieLabel == "") {
        ClasseVoirieLabel = "ALLData";
    }
    if (AvisCCCLabel == "") {
        AvisCCCLabel = "ALLData";
    }
    if (UrgenceLabel == "") {
        UrgenceLabel = "ALLData";
    }

    // on initialise les compteurs
    var k_ChantierLabel = 0;
    var k_AnneDemLabel = 0;
    var k_MoisDemLabel = 0;
    var k_AnneAutLabel = 0;
    var k_MoisAutLabel = 0;
    var k_DemandeurLabel = 0;
    var k_NatureLabel = 0;
    var k_StatutLabel = 0;
    var k_GestionnaireLabel = 0;
    var k_OrganisationeLabel = 0;
    var k_RuesLabel = 0;
    var k_RegimeLabel = 0;
    var k_ClasseVoirieLabel = 0;
    var k_AvisCCCLabel = 0;
    var k_UrgenceLabel = 0;

    // On reinitialise les layers >> Points
    GroupMarkersMap1030_ALL.clearLayers();
    var jsonALL_00 = 0;
    var jsonSEARCH = {};

    // On reinitialise les layers >> Polygons
    GroupPolygonsMap1030_ALL.clearLayers();
    var jsonALL_Polygons_00 = 0;
    var jsonSEARCH_Polygons = {};

    // >>> recherche unique par numéro d'identification <<< \\
    if (ChantierLabel !== "ALLData") {
        jsonSEARCH = {};
        jsonALL_00 = jsonALL;
        mylist = [{ SearchLabel: ChantierLabel }];
        console.log(mylist)
        jsonSEARCH.features = jsonALL_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.Chantier.toString()).length > 0) {
                return item;
            }
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Chantier.toString().includes(ChantierLabel.toString()));

            k_ChantierLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_ChantierLabel; // 'Chantier: ' + k_ChantierLabel + " > Total: " + k_ChantierLabel;
        });

        jsonSEARCH_Polygons = {};
        jsonALL_Polygons_00 = jsonALL_Polygons;
        mylist = [{ SearchLabel: ChantierLabel }];
        jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.Chantier.toString()).length > 0) {
                return item;
            }
        });
    };

    // >>> recherche multiple <<< \\
    // Annee Demandee
    if (ChantierLabel === "ALLData") {
        if (AnneDemLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            }
            /*
            jsonALL_00 = jsonALL;
            jsonALL_Polygons_00 = jsonALL_Polygons;
            jsonSEARCH = {};
            jsonSEARCH_0 = {};
            jsonSEARCH_1 = {};
            jsonSEARCH_Polygons = {};
            jsonSEARCH_Polygons_0 = {};
            jsonSEARCH_Polygons_1 = {};
            */
            mylist = [{ SearchLabel: AnneDemLabel }];
            jsonSEARCH_0.features = jsonALL_00.features.filter(item => item.properties.DateDebut.toString().includes(AnneDemLabel.toString()));
            jsonSEARCH_1.features = jsonALL_00.features.filter(item => item.properties.DateFin.toString().includes(AnneDemLabel.toString()));
            jsonSEARCH = concatGeoJSON(jsonSEARCH_0, jsonSEARCH_1)

            k_AnneDemLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_AnneDemLabel; // 'Année demandée: ' + AnneDemLabel + " > Total: " + k_AnneDemLabel;

            mylist = [{ SearchLabel: AnneDemLabel }];
            jsonSEARCH_Polygons_0.features = jsonALL_Polygons_00.features.filter(item => item.properties.DateDebut.toString().includes(AnneDemLabel.toString()));
            jsonSEARCH_Polygons_1.features = jsonALL_Polygons_00.features.filter(item => item.properties.DateFin.toString().includes(AnneDemLabel.toString()));
            jsonSEARCH_Polygons = concatGeoJSON(jsonSEARCH_Polygons_0, jsonSEARCH_Polygons_1)
        }
    }

    // Mois Demandee
    if (ChantierLabel === "ALLData") {
        if (MoisDemLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            }
            mylist = [{ SearchLabel: MoisDemLabel }];
            jsonSEARCH_0.features = jsonALL_00.features.filter(item => item.properties.DateDebut.toString().includes(MoisDemLabel.toString()));
            jsonSEARCH_1.features = jsonALL_00.features.filter(item => item.properties.DateFin.toString().includes(MoisDemLabel.toString()));
            jsonSEARCH = concatGeoJSON(jsonSEARCH_0, jsonSEARCH_1)

            k_MoisDemLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_MoisDemLabel; //  'Mois demandée: ' + MoisDemLabel + " > Total: " + k_MoisDemLabel;

            mylist = [{ SearchLabel: MoisDemLabel }];
            jsonSEARCH_Polygons_0.features = jsonALL_Polygons_00.features.filter(item => item.properties.DateDebut.toString().includes(MoisDemLabel.toString()));
            jsonSEARCH_Polygons_1.features = jsonALL_Polygons_00.features.filter(item => item.properties.DateFin.toString().includes(MoisDemLabel.toString()));
            jsonSEARCH_Polygons = concatGeoJSON(jsonSEARCH_Polygons_0, jsonSEARCH_Polygons_1)
        }
    }

    // Mois Autorisee
    if (ChantierLabel === "ALLData") {
        if (AnneAutLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            }
            mylist = [{ SearchLabel: AnneAutLabel }];
            jsonSEARCH_0.features = jsonALL_00.features.filter(item => {
                if (item.properties.hasOwnProperty('DateDebutAutorisee')) {
                    if (mylist.filter(myitem => item.properties.DateDebutAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH_1.features = jsonALL_00.features.filter(item => {
                if (item.properties.hasOwnProperty('DateFinAutorisee')) {
                    if (mylist.filter(myitem => item.properties.DateFinAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH = concatGeoJSON(jsonSEARCH_0, jsonSEARCH_1)

            k_AnneAutLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_AnneAutLabel; // 'Année demandée: ' + AnneAutLabel + " > Total: " + k_AnneAutLabel;
            mylist = [{ SearchLabel: AnneAutLabel }];
            jsonSEARCH_Polygons_0.features = jsonALL_Polygons_00.features.filter(item => {
                if (item.properties.hasOwnProperty('DateDebutAutorisee')) {
                    if (mylist.filter(myitem => item.properties.DateDebutAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH_Polygons_1.features = jsonALL_Polygons_00.features.filter(item => {
                if (item.properties.hasOwnProperty('DateFinAutorisee')) {
                    if (mylist.filter(myitem => item.properties.DateFinAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH_Polygons = concatGeoJSON(jsonSEARCH_Polygons_0, jsonSEARCH_Polygons_1)
        }
    }

    // Mois Autorisee
    if (ChantierLabel === "ALLData") {
        if (MoisAutLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
                jsonSEARCH_Polygons_0 = {};
                jsonSEARCH_Polygons_1 = {};
            }
            mylist = [{ SearchLabel: MoisAutLabel }];
            jsonSEARCH_0.features = jsonALL_00.features.filter(item => {
                //console.log(item)
                if (item.properties.hasOwnProperty('DateDebutAutorisee')) {
                    //console.log("por aqui paso...")
                    if (mylist.filter(myitem => item.properties.DateDebutAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH_1.features = jsonALL_00.features.filter(item => {
                if (item.properties.hasOwnProperty('DateFinAutorisee')) {
                    if (mylist.filter(myitem => item.properties.DateFinAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH = concatGeoJSON(jsonSEARCH_0, jsonSEARCH_1)

            k_MoisAutLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_MoisAutLabel; // 'Mois demandée: ' + MoisAutLabel + " > Total: " + k_MoisAutLabel;
            mylist = [{ SearchLabel: MoisAutLabel }];
            jsonSEARCH_Polygons_0.features = jsonALL_Polygons_00.features.filter(item => {
                if (item.properties.hasOwnProperty('DateDebutAutorisee')) {
                    if (mylist.filter(myitem => item.properties.DateDebutAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH_Polygons_1.features = jsonALL_Polygons_00.features.filter(item => {
                if (item.properties.hasOwnProperty('DateFinAutorisee')) {
                    if (mylist.filter(myitem => item.properties.DateFinAutorisee.toString().includes(myitem.SearchLabel.toString())).length > 0) {
                        return item;
                    }
                }
            });
            jsonSEARCH_Polygons = concatGeoJSON(jsonSEARCH_Polygons_0, jsonSEARCH_Polygons_1)
        }
    }

    // Avis CCC
    if (ChantierLabel === "ALLData") {
        if (AvisCCCLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            //jsonSEARCH = {};
            //jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: AvisCCCLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.AvisCCC.toLowerCase()).length > 0) {
                    return item;
                }
            }); // Los dos metodos funcionan
            //jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.AvisCCC.toLowerCase().includes(AvisCCCLabel.toLowerCase()));

            k_AvisCCCLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_AvisCCCLabel; //'Avis CCC: ' + AvisCCCLabel + " > Total: " + k_AvisCCCLabel;

            //jsonSEARCH_Polygons = {};
            //jsonALL_Polygons_00 = jsonALL_Polygons;
            mylist = [{ SearchLabel: AvisCCCLabel }];
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.AvisCCC.toLowerCase()).length > 0) {
                    return item;
                }
            }); // Los dos metodos funcionan
            //jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.AvisCCC.toLowerCase().includes(AvisCCCLabel.toLowerCase()));
        }
    }

    // Nature
    if (ChantierLabel === "ALLData") {
        if (NatureLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            //jsonSEARCH = {};
            //jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: NatureLabel }];
            /* jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Nature.toLowerCase()).length > 0) {
                    return item;
                }
            }); */
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Nature.toLowerCase().includes(NatureLabel.toLowerCase()));

            k_NatureLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_NatureLabel; //'Nature: ' + NatureLabel + " > Total: " + k_NatureLabel;

            //jsonSEARCH_Polygons = {};
            //jsonALL_Polygons_00 = jsonALL_Polygons;
            mylist = [{ SearchLabel: NatureLabel }];
            /* jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Nature.toLowerCase()).length > 0) {
                    return item;
                }
            }); */
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.Nature.toLowerCase().includes(NatureLabel.toLowerCase()));
        }
    }

    // Gestionnaire
    if (ChantierLabel === "ALLData") {
        if (GestionnaireLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            //jsonSEARCH = {};
            //jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: GestionnaireLabel }];
            /* jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Gestionnaire.toLowerCase()).length > 0) {
                    return item;
                }
            }); */
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Gestionnaire.toLowerCase().includes(GestionnaireLabel.toLowerCase()));

            k_GestionnaireLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_GestionnaireLabel; //'Gestionnaire: ' + GestionnaireLabel + " > Total: " + k_GestionnaireLabel;

            //jsonSEARCH_Polygons = {};
            //jsonALL_Polygons_00 = jsonALL_Polygons;
            mylist = [{ SearchLabel: GestionnaireLabel }];
            /* jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Gestionnaire.toLowerCase()).length > 0) {
                    return item;
                }
            }); */
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.Gestionnaire.toLowerCase().includes(GestionnaireLabel.toLowerCase()));
        }
    }

    // Statut
    if (ChantierLabel === "ALLData") {
        if (StatutLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            //jsonSEARCH = {};
            //jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: StatutLabel }];
            /* jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Statut.toLowerCase()).length > 0) {
                    return item;
                }
            }); */
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Statut.toLowerCase().includes(StatutLabel.toLowerCase()));

            k_StatutLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_StatutLabel; //'Statut: ' + StatutLabel + " > Total: " + k_StatutLabel;

            //jsonSEARCH_Polygons = {};
            //jsonALL_Polygons_00 = jsonALL_Polygons;
            mylist = [{ SearchLabel: StatutLabel }];
            /* jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Statut.toLowerCase()).length > 0) {
                    return item;
                }
            }); */
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.Statut.toLowerCase().includes(StatutLabel.toLowerCase()));
        }
    }

    // Organisation
    if (ChantierLabel === "ALLData") {
        if (OrganisationeLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: OrganisationeLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Organisation.toLowerCase().includes(OrganisationeLabel.toLowerCase()));

            k_OrganisationeLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_OrganisationeLabel; //'Organisation: ' + OrganisationeLabel + " > Total: " + k_OrganisationeLabel;

            mylist = [{ SearchLabel: StatutLabel }];
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.Organisation.toLowerCase().includes(OrganisationeLabel.toLowerCase()));
        }
    }

    // Regime
    if (ChantierLabel === "ALLData") {
        if (RegimeLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: RegimeLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Regime.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_RegimeLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_RegimeLabel; // 'Regime: ' + RegimeLabel + " > Total: " + k_RegimeLabel;

            mylist = [{ SearchLabel: RegimeLabel }];
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Regime.toLowerCase()).length > 0) {
                    return item;
                }
            });
        }
    }

    // Classe Voirie
    if (ChantierLabel === "ALLData") {
        if (ClasseVoirieLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: ClasseVoirieLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.ClasseVoirieMax.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_ClasseVoirieLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_ClasseVoirieLabel; // 'Classe Voirie Max: ' + ClasseVoirieLabel + " > Total: " + k_ClasseVoirieLabel;

            mylist = [{ SearchLabel: ClasseVoirieLabel }];
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.ClasseVoirieMax.toLowerCase()).length > 0) {
                    return item;
                }
            });
        }
    }
    // Urgence
    if (ChantierLabel === "ALLData") {
        if (UrgenceLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: UrgenceLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Urgence.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_UrgenceLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_UrgenceLabel; // 'Urgence: ' + UrgenceLabel + " > Total: " + k_UrgenceLabel;

            mylist = [{ SearchLabel: UrgenceLabel }];
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Urgence.toLowerCase()).length > 0) {
                    return item;
                }
            });
        }
    }

    // Rues
    if (ChantierLabel === "ALLData") {
        if (RuesLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: RuesLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Rues.toLowerCase().includes(RuesLabel.toLowerCase()));

            k_RuesLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_RuesLabel; //'Rues: ' + RuesLabel + " > Total: " + k_RuesLabel;

            mylist = [{ SearchLabel: StatutLabel }];
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.Rues.toLowerCase().includes(RuesLabel.toLowerCase()));
        }
    }

    // Demandeur
    if (ChantierLabel === "ALLData") {
        if (DemandeurLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonALL_Polygons;
                jsonSEARCH_Polygons = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonALL_Polygons_00 = jsonSEARCH_Polygons;
                jsonSEARCH_Polygons = {};
            }
            mylist = [{ SearchLabel: DemandeurLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Nom.toLowerCase().includes(DemandeurLabel.toLowerCase()));

            k_DemandeurLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_DemandeurLabel; //'Rues: ' + DemandeurLabel + " > Total: " + k_DemandeurLabel;

            mylist = [{ SearchLabel: StatutLabel }];
            jsonSEARCH_Polygons.features = jsonALL_Polygons_00.features.filter(item => item.properties.Nom.toLowerCase().includes(DemandeurLabel.toLowerCase()));
        }
    }

    // END <<<< recherche multiple >>> \\

    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas des chantiers répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    } else {
        var Marker1030_ALL = L.geoJSON([jsonSEARCH], {
            style: function (feature) {
                return feature.properties && feature.properties.style && feature.properties.CustomValue;
            },
            onEachFeature: onEachFeature,

            pointToLayer: function (feature, latlng) {
                //return L.marker(latlng, { icon: TreeIcon01 });
                return L.circleMarker(latlng, {
                    color: 'black',
                    fillColor: '#bd2848',
                    color: "#000", //'#bd2848',
                    fillOpacity: 0.6,
                    radius: 8,
                    weight: 1,
                    opacity: 1
                })
            }
        }); // .addTo(carte); ; inutile lors de lúti;isation des clusters
        GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL)

        Marker1030_ALL.on("click", function (event) {
            var clickedMarker = event.layer;
            // console.log(clickedMarker)
            MarkerDataView(clickedMarker)
        });

        var Chantier1030_ALL = L.geoJSON([jsonSEARCH_Polygons], {
            style: function (feature) {
                return feature.properties && feature.properties.style && feature.properties.CustomValue;
            },
            onEachFeature: onEachFeature,

            pointToLayer: function (feature, latlng) {
                //return L.marker(latlng, { icon: TreeIcon01 });
                return L.circleMarker(latlng, {
                    color: 'black',
                    fillColor: '#bd2848',
                    color: "#000", //'#bd2848',
                    fillOpacity: 0.6,
                    radius: 8,
                    weight: 1,
                    opacity: 1
                })
            }
        }); // .addTo(carte); ; inutile lors de lúti;isation des clusters
        GroupPolygonsMap1030_ALL.addLayer(Chantier1030_ALL)

        Chantier1030_ALL.on("click", function (event) {
            var clickedMarker = event.layer;
            // console.log(clickedMarker)
            MarkerDataView(clickedMarker)
        });

    };
};