// ++++++++ Choix de cartes et Elements ++++++++
var CarteGroup = {
    "<b>OSM.fr Carte</b>": carte01,
    "<b>Google Terrain</b>": carte02,
    "<b>Google Streets</b>": carte03,
    //"<b>Google Satellite</b>": carte04,
    "<b>Google Satellite-Streets</b>": carte05,
    //"<b>Google Terrain-Cycle</b>": carte06,
    //"<b>Google Streets-Cycle</b>": carte07,
    //"<b>Google Traffic</b>": carte08,
};

var GroupDataALL = {
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Toutes les Chantiers Position</b></br>": GroupMarkersMap1030_00,

    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2014</b></br>": GroupMarkersMap1030_2014,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2015</b></br>": GroupMarkersMap1030_2015,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2016</b></br>": GroupMarkersMap1030_2016,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2017</b></br>": GroupMarkersMap1030_2017,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2018</b></br>": GroupMarkersMap1030_2018,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2019</b></br>": GroupMarkersMap1030_2019,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2020</b></br>": GroupMarkersMap1030_2020,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2021</b></br>": GroupMarkersMap1030_2021,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2022</b></br>": GroupMarkersMap1030_2022,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2023</b></br>": GroupMarkersMap1030_2023,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2024</b></br>": GroupMarkersMap1030_2024,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2025</b></br>": GroupMarkersMap1030_2025,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2024</b></br>": GroupMarkersMap1030_2026,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2025</b></br>": GroupMarkersMap1030_2027,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2026</b></br>": GroupMarkersMap1030_2026,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2027</b></br>": GroupMarkersMap1030_2027,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2028</b></br>": GroupMarkersMap1030_2028,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2029</b></br>": GroupMarkersMap1030_2029,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>Anne 2030</b></br>": GroupMarkersMap1030_2030,
};

var GroupDataPeriode = {
    /*
     "<img src='images/icon-Entreprises.png' width='24px'/><b>2015 Debut</b></br>":  GroupMarkersMap1030_Q01,
      "<img src='images/icon-Entreprises.png' width='24px'/><b>2015 Fin</b></br>":  GroupMarkersMap1030_Q01B,

     "<img src='images/icon-Entreprises.png' width='24px'/><b>2016 Debut</b></br>":  GroupMarkersMap1030_Q02,
      "<img src='images/icon-Entreprises.png' width='24px'/><b>2016 Fin</b></br>":  GroupMarkersMap1030_Q02B,

     "<img src='images/icon-Entreprises.png' width='24px'/><b>2017 Debut</b></br>":  GroupMarkersMap1030_Q03,
      "<img src='images/icon-Entreprises.png' width='24px'/><b>2017 Fin</b></br>":  GroupMarkersMap1030_Q3B,

     "<img src='images/icon-Entreprises.png' width='24px'/><b>2018 Debut</b></br>":  GroupMarkersMap1030_Q04,
      "<img src='images/icon-Entreprises.png' width='24px'/><b>2018 Fin</b></br>":  GroupMarkersMap1030_Q04B,

     "<img src='images/icon-Entreprises.png' width='24px'/><b>2019 Debut</b></br>":  GroupMarkersMap1030_Q05,
      "<img src='images/icon-Entreprises.png' width='24px'/><b>2019 Fin</b></br>":  GroupMarkersMap1030_Q05B,

     "<img src='images/icon-Entreprises.png' width='24px'/><b>2020 Debut</b></br>":  GroupMarkersMap1030_Q06,
      "<img src='images/icon-Entreprises.png' width='24px'/><b>2020 Fin</b></br>":  GroupMarkersMap1030_Q06B,

      "<img src='images/icon-Entreprises.png' width='24px'/><b>2021 Debut Position</b></br>": GroupMarkersMap1030_Q07,
      "<img src='images/icon-Entreprises.png' width='24px'/><b>2021 Fin Position</b></br>": GroupMarkersMap1030_Q07B,
     */

    /*
    "<img src='images/icon-Entreprises.png' width='24px'/><b>2021 Debut Chantier</b></br>": Work1030_07,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>2021 Fin Chantier</b></br>": Work1030_14,
    */

    "<img src='images/icon-Entreprises.png' width='24px'/><b>Toutes les Zones de Chantiers</b></br>": DBPolygonsChantiers,

    "<img src='images/icon-Entreprises.png' width='24px'/><b>2025 Debut Position</b></br>": GroupMarkersMap1030_Q11,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>2025 Fin Position</b></br>": GroupMarkersMap1030_Q11B,

    "<img src='images/icon-Entreprises.png' width='24px'/><b>2026 Debut Position</b></br>": GroupMarkersMap1030_Q12,
    "<img src='images/icon-Entreprises.png' width='24px'/><b>2026 Fin Position</b></br>": GroupMarkersMap1030_Q12B,

    //    "<img src='images/icon-Entreprises.png' width='24px'/><b>Debut Chantier</b></br>": GroupMarkersMap1030_Q99,
    //    "<img src='images/icon-Entreprises.png' width='24px'/><b>Fin Chantier</b></br>": GroupMarkersMap1030_Q99B,
}

var LControl00 = L.control.layers(CarteGroup).addTo(carte);
//var LControl01 = L.control.layers(GroupDataALL).addTo(carte);

var LControl02 = L.control.layers(GroupDataALL, GroupDataPeriode).addTo(carte);
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