// on personnalise les marqueurs
var TrashIcon01 = L.icon({
    iconUrl: 'src/images/Trash1030.png',
    iconSize: [20, 20],
    iconAnchor: [10, 5],
    popupAnchor: [-5, 5]
});

// BEGIN ======= Donnnes GeoJson comme marqueurs ======= BEGIN \\
// ++++++ Limites de Schaerbeek ++++++++
L.geoJSON([Boundary], {
    style: function(feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

L.geoJSON([BoundarySecteursSPEV], {
    style: function(feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,
}).addTo(carte);

// ++++++ Liste des Marqueurs ++++++++
if (typeof NumidLabel === 'undefined' || MonthLabel === 'undefined' || DayLabel === 'undefined' ||
    ClaimentLabel === 'undefined' || InterventorLabel === 'undefined' || TypeTrashLabel === 'undefined' ||
    StreetLabel === 'undefined' || ManagerLabel === 'undefined' || SectorIntLabel === 'undefined') {

    // var DateLabel = ""
    var NumidLabel = ""
    var MonthLabel = ""
    var DayLabel = ""
    var ClaimentLabel = ""
    var InterventorLabel = ""
    var TypeTrashLabel = ""
    var StreetLabel = ""
    var ManagerLabel = ""
    var SectorIntLabel = ""

    var Marker1030 = L.geoJSON([ListSPEVBilan2020], {
            style: function(feature) {
                return feature.properties && feature.properties.style;
            },
            onEachFeature: onEachFeature,

            pointToLayer: function(feature, latlng) {
                //return L.marker(latlng, { icon: TrashIcon01 });
                return L.circleMarker(latlng, {
                    color: 'black',
                    fillColor: '#9408bb',
                    color: "#000", //'#9408bb',
                    fillOpacity: 0.6,
                    radius: 5,
                    weight: 1,
                    opacity: 1
                })
            }
        }) // .addTo(carte); ; inutile lors de lúti;isation des clusters

    var jsonALL = {};
    jsonALL = ListSPEVBilan2020

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        filter: function(feature, layer) {
            return (feature.properties.TypeIntervention !== "ALL");
        },

        style: function(feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
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

    var Marker1030_00 = Marker1030
    var Marker1030_ALL_00 = Marker1030_ALL

    // Group CLusteres
    GroupMarkersMap1030.addLayer(Marker1030)
    GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL)
}

var GroupMarkersClustersALL1030 = new L.featureGroup([
    GroupMarkersMap1030
]);

carte.addLayer(GroupMarkersMap1030_ALL)
    // END ======= Donnnes GeoJson comme marqueurs ======= END \\

// BEGIN ======== Data Viewer ======== BEGIN \\ 
Marker1030.on("click", function(event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});

Marker1030_ALL.on("click", function(event) {
    var clickedMarker = event.layer;
    // console.log(clickedMarker)
    MarkerDataView(clickedMarker)
});
// END ======== Data Viewer ======== END \\

// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
function onEachFeature(feature, layer) {
    var popupContent = "<dt>" + feature.id + "</dt>";
    if (feature.properties.images) {
        var custompoup = "<dt><img src=" + feature.properties.images + " width='100' hight:'100'></dt>";
        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent + custompoup;
        }
    } else if (feature.properties.SectorName) {
        var custompoup = "<dt>" + feature.properties.SectorType + ": " +
            feature.properties.SectorName + "</dt>";
        popupContent += custompoup;
    } else if (feature.properties.NumDossier) {
        var custompoup = "<dt>" + "NumDossier : " + feature.properties.NumDossier + "</dt>" +
            "<dt>" + "Responsable : " + feature.properties.ResponsableInfraction + "</dt>" +
            "<dt>" + "Infraction : " + feature.properties.Quantite + " " + feature.properties.Infraction + "</dt>" +
            "<dt>" + "Date : " + feature.properties.DateInfraction + "</dt>" +
            "<dt>" + "Dossier : " + feature.properties.Dossier + "</dt>";
        popupContent = custompoup;

    } else if (feature.properties.AdresseIntervention) {
        var custompoup = "<dt>" + "ID : " + feature.id + "</dt>" +
            "<dt>" + "Date : " + feature.properties.Date + "</dt>" +
            "<dt>" + "Demandeur : " + feature.properties.Demandeur + "</dt>" +
            "<dt>" + "Intervention : " + feature.properties.TypeIntervention + "</dt>" +
            "<dt>" + "Intervenant : " + feature.properties.Intervenant + "</dt>" +
            "<dt>" + "Gestionnaire : " + feature.properties.Gestionnaire + "</dt>";
        popupContent = custompoup;

    } else {
        if (feature.properties && feature.properties.popupContent) {
            popupContent += feature.properties.popupContent;
        }
    }
    layer.bindPopup(popupContent);
}

function MarkerDataView(clickedMarker) {
    var AdresseRef = clickedMarker.feature.properties.AdresseIntervention + ", 1030 Schaerbeek";
    var CommentairesDossier = clickedMarker.feature.properties.Commentaires;
    //var CommentairesDossier = ""

    document.getElementById("NumidATrash").value = clickedMarker.feature.properties.popupContent
    document.getElementById("DateInfTrash").value = clickedMarker.feature.properties.Date
    document.getElementById("TimeInfTrash").value = clickedMarker.feature.properties.Heure
    document.getElementById("MonthInfTrash").value = clickedMarker.feature.properties.Mois
    document.getElementById("DayInfTrash").value = clickedMarker.feature.properties.Jour
    document.getElementById("DemandTrash").value = clickedMarker.feature.properties.Demandeur
    document.getElementById("IntervTrash").value = clickedMarker.feature.properties.Intervenant
    document.getElementById("TypeIntervTrash").value = clickedMarker.feature.properties.TypeIntervention
    document.getElementById("StreetTrash").value = clickedMarker.feature.properties.RueIntervention
    document.getElementById("GestionTrash").value = clickedMarker.feature.properties.Gestionnaire
    document.getElementById("SectSPEVTrash").value = clickedMarker.feature.properties.Secteur
    document.getElementById("ZoneTrash").value = clickedMarker.feature.properties.Zone
    document.getElementById("SectIntevTrash").value = clickedMarker.feature.properties.SecteurIntervention
    document.getElementById("CommentairesTrash").value = CommentairesDossier
    document.getElementById("LatitudeTrash").value = clickedMarker.feature.geometry.coordinates[1]
    document.getElementById("LongitudeTrash").value = clickedMarker.feature.geometry.coordinates[0]
    document.getElementById("AdresseTrash").value = AdresseRef
};

function LoadALLData() {
    Marker1030.eachLayer(function(marker) {
        carte.removeLayer(marker);
    });

    //Marker1030 = Marker1030_00
    Marker1030 = Marker1030_ALL
    Marker1030_ALL = Marker1030_ALL_00

    // On reinitialise les layers
    GroupMarkersMap1030.clearLayers();
    GroupMarkersMap1030_ALL.clearLayers();

    // On va regropue les marqueurs
    GroupMarkersMap1030.addLayer(Marker1030);
    GroupMarkersMap1030_ALL.addLayer(Marker1030_ALL);
}

function filterBy(val) {
    var result = Object.keys(obj).reduce(function(r, e) {
        if (e.toLowerCase().indexOf(val) != -1) {
            r[e] = obj[e];
        } else {
            Object.keys(obj[e]).forEach(function(k) {
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
}

function SearchData() {

    var NumidLabel = document.getElementById("NumidATrash").value;
    var MonthLabel = document.getElementById("MonthInfTrash").value;
    var DayLabel = document.getElementById("DayInfTrash").value;
    var ClaimentLabel = document.getElementById("DemandTrash").value;
    var InterventorLabel = document.getElementById("IntervTrash").value;
    var TypeTrashLabel = document.getElementById("TypeIntervTrash").value;
    var StreetLabel = document.getElementById("StreetTrash").value;
    var ManagerLabel = document.getElementById("GestionTrash").value;
    var SectorIntLabel = document.getElementById("SectIntevTrash").value;

    //on initialise les labels
    if (NumidLabel == "") {
        NumidLabel = "ALLData";
    }
    if (MonthLabel == "") {
        MonthLabel = "ALLData";
    }
    if (DayLabel == "") {
        DayLabel = "ALLData";
    }
    if (ClaimentLabel == "") {
        ClaimentLabel = "ALLData";
    }
    if (InterventorLabel == "") {
        InterventorLabel = "ALLData";
    }
    if (TypeTrashLabel == "") {
        TypeTrashLabel = "ALLData";
    }
    if (StreetLabel == "") {
        StreetLabel = "ALLData";
    }
    if (ManagerLabel == "") {
        ManagerLabel = "ALLData";
    }
    if (SectorIntLabel == "") {
        SectorIntLabel = "ALLData";
    }

    // on initialise les compteurs
    var k_MonthLabel = 0;
    var k_DayLabel = 0;
    var k_ClaimentLabel = 0;
    var k_InterventorLabel = 0;
    var k_TypeTrashLabel = 0;
    var k_StreetLabel = 0;
    var k_ManagerLabel = 0;
    var k_SectorIntLabel = 0;

    // On reinitialise les layers
    GroupMarkersMap1030_ALL.clearLayers();
    var jsonALL_00 = 0;
    var jsonSEARCH = {};
    //console.log(jsonSEARCH);

    // >>> recherche unique par numéro d'identification <<< \\
    if (NumidLabel !== "ALLData") {
        jsonSEARCH = {};
        jsonALL_00 = jsonALL;
        mylist = [{ SearchLabel: NumidLabel }];
        jsonSEARCH.features = jsonALL_00.features.filter(item => {
            if (mylist.filter(myitem => myitem.SearchLabel === item.properties.popupContent).length > 0) {
                return item;
            }
        });
    }

    // >>> recherche multiple <<< \\
    // TypeIntervention
    if (NumidLabel === "ALLData") {
        if (TypeTrashLabel !== "ALLData") {
            jsonSEARCH = {};
            jsonALL_00 = jsonALL;
            mylist = [{ SearchLabel: TypeTrashLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.TypeIntervention.toLowerCase()).length > 0) {
                    return item;
                }
            });

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.TypeIntervention.toLowerCase().includes(TypeTrashLabel.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_TypeTrashLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Type Intervention: ' + TypeTrashLabel + " > Total: " + k_TypeTrashLabel;
        }
    }
    // Rue de l'intervention
    if (NumidLabel === "ALLData") {
        if (StreetLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: StreetLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.RueIntervention.toLowerCase()).length > 0) {
                    return item;
                }
            });

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.RueIntervention.toLowerCase().includes(StreetLabel.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_StreetLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Rue infraction: ' + StreetLabel + " > Total: " + k_StreetLabel;
        }
    }
    // Gestionaire
    if (NumidLabel === "ALLData") {
        if (ManagerLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: ManagerLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Gestionnaire.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_ManagerLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Gestionnaire: ' + ManagerLabel + " > Total: " + k_ManagerLabel;
        }
    }
    // Secteur Intervention
    if (NumidLabel === "ALLData") {
        if (SectorIntLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: SectorIntLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.SecteurIntervention.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_SectorIntLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Secteur Intervention: ' + SectorIntLabel + " > Total: " + k_SectorIntLabel;
        }
    }
    // Intervenant
    if (NumidLabel === "ALLData") {
        if (InterventorLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: InterventorLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Intervenant.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_InterventorLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Intervenant: ' + InterventorLabel + " > Total: " + k_InterventorLabel;
        }
    }
    // Demandeur
    if (NumidLabel === "ALLData") {
        if (ClaimentLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: ClaimentLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Demandeur.toLowerCase()).length > 0) {
                    return item;
                }
            });
            k_ClaimentLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Demandeur: ' + ClaimentLabel + " > Total: " + k_ClaimentLabel;
        }
    }
    // Jour de la semaine
    if (NumidLabel === "ALLData") {
        if (DayLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: DayLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Jour.toLowerCase().includes(DayLabel.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_DayLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Jour: ' + DayLabel + " > Total: " + k_DayLabel;
        }
    }
    // Mois de l'anne
    if (NumidLabel === "ALLData") {
        if (MonthLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: MonthLabel }];

            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Mois.toLowerCase().includes(MonthLabel.toLowerCase()));
            // console.log(jsonSEARCH.features)

            k_MonthLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesTrash").value = 'Mois: ' + MonthLabel + " > Total: " + k_MonthLabel;
        }
    }

    //console.log(jsonSEARCH.features.length)
    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas de salissures répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    } else {
        var Marker1030_ALL = L.geoJSON([jsonSEARCH], {
            style: function(feature) {
                return feature.properties && feature.properties.style && feature.properties.CustomValue;
            },
            onEachFeature: onEachFeature,

            pointToLayer: function(feature, latlng) {
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

        Marker1030_ALL.on("click", function(event) {
            var clickedMarker = event.layer;
            // console.log(clickedMarker)
            MarkerDataView(clickedMarker)
        });

    };
}
// END ======== Javascript FUnctions  ======== END \\