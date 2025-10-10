// ++++++++ Choix de cartes et Elements ++++++++
var CarteGroup = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    "<b>Google Streets</b>": carte03,
    "<b>Google Satellite</b>": carte04,
    "<b>Google Satellite-Streets</b>": carte05,
    "<b>Google Terrain-Cycle</b>": carte06,
    "<b>Google Streets-Cycle</b>": carte07,
    "<b>Google Traffic</b>": carte08,
};

var GroupDataALL = {
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Parc Josaphat</b></br>": GroupMarkersMap1030_Q01,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Coteaux-Josaphat</b></br>": GroupMarkersMap1030_Q02,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Colignon</b></br>": GroupMarkersMap1030_Q03,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Palais-Reine</b></br>": GroupMarkersMap1030_Q04,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Bienfaiteurs</b></br>": GroupMarkersMap1030_Q05,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Helmet-Hamoir</b></br>": GroupMarkersMap1030_Q06,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Terdelt-Fleur</b></br>": GroupMarkersMap1030_Q07,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Jardin</b></br>": GroupMarkersMap1030_Q08,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Reyers</b></br>": GroupMarkersMap1030_Q09,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Cerisiers</b></br>": GroupMarkersMap1030_Q10,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Linthout</b></br>": GroupMarkersMap1030_Q11,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Plasky</b></br>": GroupMarkersMap1030_Q12,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Nord</b></br>": GroupMarkersMap1030_Q13,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Dehors De Schaerbeek</b></br>": GroupMarkersMap1030_Q14,
    "<img src='images/icon-Cadastres.png' width='24px'/><b>Tout Schaerbeek</b></br>": GroupMarkersMap1030_00,
};

//var LControl00 = L.control.layers(CarteGroup).addTo(carte);
//var LControl01 = L.control.layers(GroupDataALL).addTo(carte);

var LControl = L.control.layers(CarteGroup, GroupDataALL).addTo(carte);
// ++++++++ Choix de cartes et Elements ++++++++

// +++++++ Revient a la position initial ++++++++
L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
    carte.setView([50.86070401717095, 4.3830651582691456], 13);
    layerGroup.clearLayers();
}).addTo(carte);

// +++++++ Géolocalisation ++++++++
function onLocationFound(e) {
    var radius = e.accuracy / 2;
    var location = e.latlng
    L.marker(location).addTo(carte)
    L.circle(location, radius).addTo(carte);
}

function onLocationError(e) {
    alert(e.message);
}

function getLocationLeafvar() {
    carte.on('locationfound', onLocationFound);
    carte.on('locationerror', onLocationError);
    carte.locate({ setView: true, maxZoom: 15 });
}

L.easyButton('<img src="images/gps-position.png" width="26" height="26" >', function () {
    getLocationLeafvar()
}).addTo(carte);

// +++++++  MousePosition Maps ++++++++
var mousePoistion = L.geoportalControl.MousePosition({
    position: 'bottomright',
    collapsed: true,
    units: [],
}).addTo(carte);

// +++++++ Esri Leafvar Geocoder ++++++++
var searchControl = L.esri.Geocoding.geosearch({
    position: 'topleft',
    zoomToResult: true,
    useMapBounds: true,
    providers: [L.esri.Geocoding.arcgisOnlineProvider()],
    collapseAfterResult: true,
    expanded: false,
    title: 'Recherche d`emplacement',
    placeholder: 'SVP, Entrez une adresse...'
}).addTo(carte);

var geocodeService = L.esri.Geocoding.geocodeService({});
var layerGroup = L.layerGroup().addTo(carte);
carte.on('click', function (e) {

    geocodeService.reverse().latlng(e.latlng).run(function (error, result) {
        if (error) {
            return;
        }
        //var emplacement = convertToAddress(e.latlng);
        var lngLatString = `${Math.round(result.latlng.lat * 100000) / 100000}, ${Math.round(result.latlng.lng * 100000) / 100000}`;
        layerGroup.clearLayers();
        marker = L.marker(result.latlng)
            .addTo(layerGroup) //.addTo(carte) l'utilisation de vette option permet au marqueur de rester sur la carte
            .bindPopup(`<dt>${lngLatString}</dt>` + `<dt>${result.address.LongLabel}</dt>`) // adresse avec les coordonnées gps 
            //.bindPopup(result.address.Match_addr) // adresse sans les coordonnées gps 
            //.bindPopup(result.address.LongLabel) // version plus longue de l'adresse Match_addr contenant plus d'informations administratives
            //.bindPopup(result.address.ShortLabel) // version abrégée de l'adresse Match_addr
            .openPopup();
    });
});