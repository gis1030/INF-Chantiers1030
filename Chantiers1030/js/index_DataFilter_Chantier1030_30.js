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
    })

    var jsonALL = {};
    jsonALL = ListOSIRIS_Markers1030

    var Marker1030_ALL = L.geoJSON([jsonALL], {
        style: function (feature) {
            return feature.properties && feature.properties.style && feature.properties.CustomValue;
        },
    });

    var Marker1030_00 = Marker1030
    var Marker1030_ALL_00 = Marker1030_ALL

    var GroupMarkersMap1030 = Marker1030
    var GroupMarkersMap1030_ALL = Marker1030_ALL
}

// BEGIN ======== Javascript FUnctions  ======== BEGIN \\
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
    Marker1030 = Marker1030_ALL
    Marker1030_ALL = Marker1030_ALL_00
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
    var jsonALL_00 = 0;
    var jsonSEARCH = {};

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
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
            }
            /*
            jsonALL_00 = jsonALL;
            jsonALL_Polygons_00 = jsonALL_Polygons;
            jsonSEARCH = {};
            jsonSEARCH_0 = {};
            jsonSEARCH_1 = {};
            */
            mylist = [{ SearchLabel: AnneDemLabel }];
            jsonSEARCH_0.features = jsonALL_00.features.filter(item => item.properties.DateDebut.toString().includes(AnneDemLabel.toString()));
            jsonSEARCH_1.features = jsonALL_00.features.filter(item => item.properties.DateFin.toString().includes(AnneDemLabel.toString()));
            jsonSEARCH = concatGeoJSON(jsonSEARCH_0, jsonSEARCH_1)

            k_AnneDemLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_AnneDemLabel; // 'Année demandée: ' + AnneDemLabel + " > Total: " + k_AnneDemLabel;
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
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
            }
            mylist = [{ SearchLabel: MoisDemLabel }];
            jsonSEARCH_0.features = jsonALL_00.features.filter(item => item.properties.DateDebut.toString().includes(MoisDemLabel.toString()));
            jsonSEARCH_1.features = jsonALL_00.features.filter(item => item.properties.DateFin.toString().includes(MoisDemLabel.toString()));
            jsonSEARCH = concatGeoJSON(jsonSEARCH_0, jsonSEARCH_1)

            k_MoisDemLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_MoisDemLabel; //  'Mois demandée: ' + MoisDemLabel + " > Total: " + k_MoisDemLabel;
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
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
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
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
                jsonSEARCH_0 = {};
                jsonSEARCH_1 = {};
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
        }
    }

    // Avis CCC
    if (ChantierLabel === "ALLData") {
        if (AvisCCCLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
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
        }
    }

    // Nature
    if (ChantierLabel === "ALLData") {
        if (NatureLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
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
        }
    }

    // Gestionnaire
    if (ChantierLabel === "ALLData") {
        if (GestionnaireLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
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
        }
    }

    // Statut
    if (ChantierLabel === "ALLData") {
        if (StatutLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
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
        }
    }

    // Organisation
    if (ChantierLabel === "ALLData") {
        if (OrganisationeLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: OrganisationeLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Organisation.toLowerCase().includes(OrganisationeLabel.toLowerCase()));

            k_OrganisationeLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_OrganisationeLabel; //'Organisation: ' + OrganisationeLabel + " > Total: " + k_OrganisationeLabel;
        }
    }

    // Regime
    if (ChantierLabel === "ALLData") {
        if (RegimeLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: RegimeLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Regime.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_RegimeLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_RegimeLabel; // 'Regime: ' + RegimeLabel + " > Total: " + k_RegimeLabel;
        }
    }

    // Classe Voirie
    if (ChantierLabel === "ALLData") {
        if (ClasseVoirieLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: ClasseVoirieLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.ClasseVoirieMax.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_ClasseVoirieLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_ClasseVoirieLabel; // 'Classe Voirie Max: ' + ClasseVoirieLabel + " > Total: " + k_ClasseVoirieLabel;
        }
    }
    // Urgence
    if (ChantierLabel === "ALLData") {
        if (UrgenceLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: UrgenceLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => {
                if (mylist.filter(myitem => myitem.SearchLabel.toLowerCase() === item.properties.Urgence.toLowerCase()).length > 0) {
                    return item;
                }
            });

            k_UrgenceLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_UrgenceLabel; // 'Urgence: ' + UrgenceLabel + " > Total: " + k_UrgenceLabel;
        }
    }

    // Rues
    if (ChantierLabel === "ALLData") {
        if (RuesLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: RuesLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Rues.toLowerCase().includes(RuesLabel.toLowerCase()));

            k_RuesLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_RuesLabel; //'Rues: ' + RuesLabel + " > Total: " + k_RuesLabel;
        }
    }

    // Demandeur
    if (ChantierLabel === "ALLData") {
        if (DemandeurLabel !== "ALLData") {
            if (jsonALL_00 === 0) {
                //console.log("... alternatiba 01")
                jsonALL_00 = jsonALL;
                jsonSEARCH = {};
            } else {
                //console.log("... alternatiba 02")
                jsonALL_00 = jsonSEARCH;
                jsonSEARCH = {};
            }
            mylist = [{ SearchLabel: DemandeurLabel }];
            jsonSEARCH.features = jsonALL_00.features.filter(item => item.properties.Nom.toLowerCase().includes(DemandeurLabel.toLowerCase()));

            k_DemandeurLabel = jsonSEARCH.features.length;
            document.querySelector("#CommentairesOsiris").value = "Total Chantiers: " + k_DemandeurLabel; //'Rues: ' + DemandeurLabel + " > Total: " + k_DemandeurLabel;
        }
    }

    // END <<<< recherche multiple >>> \\

    if (jsonSEARCH.features.length == 0) {
        alert("Il n'y a pas des chantiers répertoriée avec les valeurs de recherche sélectionnées.., modifiez les critères de recherche");
        ClearDataSearch();
    } else {
        HTMLTableViewer(jsonSEARCH);

    };
};