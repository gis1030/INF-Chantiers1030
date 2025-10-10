function ClearData() {
    if (layerGroup) {
        layerGroup.clearLayers();
    }
    if (markerReal) {
        carte.removeLayer(markerReal);
    }

    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DemandeurOsiris").value = ""
    document.getElementById("RefInterneOsiris").value = ""
    document.getElementById("NatureOsiris").value = ""
    document.getElementById("DateDebutOsiris").value = ""
    document.getElementById("DateFinOsiris").value = ""
    document.getElementById("DureeOsiris").value = ""
    document.getElementById("DateDebutAutorOsiris").value = ""
    document.getElementById("DateFinAutorOsiris").value = ""
    document.getElementById("StatutOsiris").value = ""
    document.getElementById("GestionnaireOsiris").value = ""
    document.getElementById("ResponsableOsiris").value = ""
    document.getElementById("OrganisationeOsiris").value = ""
    document.getElementById("RuesOsiris").value = ""
    document.getElementById("RegimeOsiris").value = ""
    document.getElementById("ClasseVoirieOsiris").value = ""
    document.getElementById("SurfaceOsiris").value = ""
    document.getElementById("AvisCCCOsiris").value = ""
    document.getElementById("UrgenceOsiris").value = ""
    document.getElementById("CommentairesOsiris").value = ""

    document.getElementById("AnneDemOsiris").value = ""
    document.getElementById("MoisDemOsiris").value = ""
    document.getElementById("AnneAutOsiris").value = ""
    document.getElementById("MoisAutOsiris").value = ""

}



function ClearData01() {
    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DemandeurOsiris").value = ""
    document.getElementById("RefInterneOsiris").value = ""
    document.getElementById("NatureOsiris").value = ""
    document.getElementById("DateDebutOsiris").value = ""
    document.getElementById("DateFinOsiris").value = ""
    document.getElementById("DureeOsiris").value = ""
    document.getElementById("DateDebutAutorOsiris").value = ""
    document.getElementById("DateFinAutorOsiris").value = ""
    document.getElementById("StatutOsiris").value = ""
    document.getElementById("GestionnaireOsiris").value = ""
    document.getElementById("ResponsableOsiris").value = ""
    document.getElementById("OrganisationeOsiris").value = ""
    document.getElementById("RuesOsiris").value = ""
    document.getElementById("RegimeOsiris").value = ""
    document.getElementById("ClasseVoirieOsiris").value = ""
    document.getElementById("SurfaceOsiris").value = ""
    document.getElementById("AvisCCCOsiris").value = ""
    document.getElementById("UrgenceOsiris").value = ""
    document.getElementById("CommentairesOsiris").value = ""

    document.getElementById("AnneDemOsiris").value = ""
    document.getElementById("MoisDemOsiris").value = ""
    document.getElementById("AnneAutOsiris").value = ""
    document.getElementById("MoisAutOsiris").value = ""
};

function Return() {
    window.open("Carte_ChantiersSchaerbeek_Only1030_20.html");
    window.close("Carte_ChantiersSchaerbeek_Only1030_21.html");
}

function ReloadData() {
    window.close("Carte_ChantiersSchaerbeek_Only1030_22.html");
    window.open("Carte_ChantiersSchaerbeek_Only1030_22.html");
}


function ClearDataSearch() {
    // if (layerGroup) {
    //     layerGroup.clearLayers();
    // }
    // if (markerReal) {
    //     carte.removeLayer(markerReal);
    // }

    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DemandeurOsiris").value = ""
    document.getElementById("RefInterneOsiris").value = ""
    document.getElementById("NatureOsiris").value = ""
    document.getElementById("DateDebutOsiris").value = ""
    document.getElementById("DateFinOsiris").value = ""
    document.getElementById("DureeOsiris").value = ""
    document.getElementById("DateDebutAutorOsiris").value = ""
    document.getElementById("DateFinAutorOsiris").value = ""
    document.getElementById("StatutOsiris").value = ""
    document.getElementById("GestionnaireOsiris").value = ""
    document.getElementById("ResponsableOsiris").value = ""
    document.getElementById("OrganisationeOsiris").value = ""
    document.getElementById("RuesOsiris").value = ""
    document.getElementById("RegimeOsiris").value = ""
    document.getElementById("ClasseVoirieOsiris").value = ""
    document.getElementById("SurfaceOsiris").value = ""
    document.getElementById("AvisCCCOsiris").value = ""
    document.getElementById("UrgenceOsiris").value = ""
    document.getElementById("CommentairesOsiris").value = ""

    document.getElementById("AnneDemOsiris").value = ""
    document.getElementById("MoisDemOsiris").value = ""
    document.getElementById("AnneAutOsiris").value = ""
    document.getElementById("MoisAutOsiris").value = ""

    LoadALLData();
}

function ClearDataSearchTable() {

    document.getElementById("ChantierOsiris").value = ""
    document.getElementById("DemandeurOsiris").value = ""
    document.getElementById("RefInterneOsiris").value = ""
    document.getElementById("NatureOsiris").value = ""
    document.getElementById("DateDebutOsiris").value = ""
    document.getElementById("DateFinOsiris").value = ""
    document.getElementById("DureeOsiris").value = ""
    document.getElementById("DateDebutAutorOsiris").value = ""
    document.getElementById("DateFinAutorOsiris").value = ""
    document.getElementById("StatutOsiris").value = ""
    document.getElementById("GestionnaireOsiris").value = ""
    document.getElementById("ResponsableOsiris").value = ""
    document.getElementById("OrganisationeOsiris").value = ""
    document.getElementById("RuesOsiris").value = ""
    document.getElementById("RegimeOsiris").value = ""
    document.getElementById("ClasseVoirieOsiris").value = ""
    document.getElementById("SurfaceOsiris").value = ""
    document.getElementById("AvisCCCOsiris").value = ""
    document.getElementById("UrgenceOsiris").value = ""
    document.getElementById("CommentairesOsiris").value = ""

    document.getElementById("AnneDemOsiris").value = ""
    document.getElementById("MoisDemOsiris").value = ""
    document.getElementById("AnneAutOsiris").value = ""
    document.getElementById("MoisAutOsiris").value = ""

    //LoadALLData();
    window.open("Carte_ChantiersSchaerbeek_Only1030_30.html");
    window.close();
}