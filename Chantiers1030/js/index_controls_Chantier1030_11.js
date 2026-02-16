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
    "Toutes les Chantiers (points)</b></br>": GroupMarkersMap1030_00,
    "Toutes les Chantiers (surfaces)</b></br>": Chantier1030_00,

    "Anne 2015</b></br>": GroupMarkersMap1030_2015,
    "Anne 2016</b></br>": GroupMarkersMap1030_2016,
    "Anne 2017</b></br>": GroupMarkersMap1030_2017,
    "Anne 2018</b></br>": GroupMarkersMap1030_2018,
    "Anne 2019</b></br>": GroupMarkersMap1030_2019,
    "Anne 2020</b></br>": GroupMarkersMap1030_2020,
    "Anne 2021</b></br>": GroupMarkersMap1030_2021,
    "Anne 2022</b></br>": GroupMarkersMap1030_2022,
    "Anne 2023</b></br>": GroupMarkersMap1030_2023,
    "Anne 2024</b></br>": GroupMarkersMap1030_2024,
    "Anne 2025</b></br>": GroupMarkersMap1030_2025,
    "Anne 2026</b></br>": GroupMarkersMap1030_2026,
    "Anne 2027</b></br>": GroupMarkersMap1030_2027,
    "Anne 2028</b></br>": GroupMarkersMap1030_2028,
    "Anne 2029</b></br>": GroupMarkersMap1030_2029,
    "Anne 2030</b></br>": GroupMarkersMap1030_2030,
};

var GroupDataPeriode01 = {
    "Toutes les Chantiers (points)</b></br>": GroupMarkersMap1030_00,
    "Toutes les Chantiers (surfaces)</b></br>": Chantier1030_00,
    //"Toutes les Chantiers debut (points)</b></br>": GroupMarkersMap1030_Begin,
    //"Toutes les Chantiers fin (points)</b></br>": GroupMarkersMap1030_End,

    "2014 Debut</b></br>": GroupMarkersMap1030_Q99,
    "2014 Fin</b></br>": GroupMarkersMap1030_Q99B,

    "2015 Debut</b></br>": GroupMarkersMap1030_Q01,
    "2015 Fin</b></br>": GroupMarkersMap1030_Q01B,

    "2016 Debut</b></br>": GroupMarkersMap1030_Q02,
    "2016 Fin</b></br>": GroupMarkersMap1030_Q02B,

    "2017 Debut</b></br>": GroupMarkersMap1030_Q03,
    "2017 Fin</b></br>": GroupMarkersMap1030_Q03B,

    "2018 Debut</b></br>": GroupMarkersMap1030_Q04,
    "2018 Fin</b></br>": GroupMarkersMap1030_Q04B,

    "2019 Debut</b></br>": GroupMarkersMap1030_Q05,
    "2019 Fin</b></br>": GroupMarkersMap1030_Q05B,

    "2020 Debut</b></br>": GroupMarkersMap1030_Q06,
    "2020 Fin</b></br>": GroupMarkersMap1030_Q06B,

    "2021 Debut</b></br>": GroupMarkersMap1030_Q07,
    "2021 Fin</b></br>": GroupMarkersMap1030_Q07B,

    "2022 Debut</b></br>": GroupMarkersMap1030_Q08,
    "2022 Fin</b></br>": GroupMarkersMap1030_Q08B,
}

var GroupDataPeriode02 = {
    "Toutes les Chantiers (points)</b></br>": GroupMarkersMap1030_00,
    "Toutes les Chantiers (surfaces)</b></br>": Chantier1030_00,
    //"Toutes les Chantiers debut (points)</b></br>": GroupMarkersMap1030_Begin,
    //"Toutes les Chantiers fin (points)</b></br>": GroupMarkersMap1030_End,

    "2023 Debut</b></br>": GroupMarkersMap1030_Q09,
    "2023 Fin</b></br>": GroupMarkersMap1030_Q09B,

    "2024 Debut</b></br>": GroupMarkersMap1030_Q10,
    "2024 Fin</b></br>": GroupMarkersMap1030_Q10B,

    "2025 Debut</b></br>": GroupMarkersMap1030_Q11,
    "2025 Fin</b></br>": GroupMarkersMap1030_Q11B,

    "2026 Debut</b></br>": GroupMarkersMap1030_Q12,
    "2026 Fin</b></br>": GroupMarkersMap1030_Q12B,

    "2027 Debut</b></br>": GroupMarkersMap1030_Q13,
    "2027 Fin</b></br>": GroupMarkersMap1030_Q13B,

    "2028 Debut</b></br>": GroupMarkersMap1030_Q14,
    "2028 Fin</b></br>": GroupMarkersMap1030_Q14B,

    "2029 Debut</b></br>": GroupMarkersMap1030_Q15,
    "2029 Fin</b></br>": GroupMarkersMap1030_Q15B,

    "2030 Debut</b></br>": GroupMarkersMap1030_Q16,
    "2030 Fin</b></br>": GroupMarkersMap1030_Q16B,
}


var GroupDataPeriode01B = {
    "Toutes les Chantiers (points)</b></br>": GroupMarkersMap1030_00,
    //"Toutes les Chantiers debut (surfaces)</b></br>": Chantier1030_Begin,
    "Toutes les Chantiers debut (points)</b></br>": GroupMarkersMap1030_Begin,

    "2014 Debut</b></br>": GroupMarkersMap1030_Q99,
    "2015 Debut</b></br>": GroupMarkersMap1030_Q01,
    "2016 Debut</b></br>": GroupMarkersMap1030_Q02,
    "2017 Debut</b></br>": GroupMarkersMap1030_Q03,
    "2018 Debut</b></br>": GroupMarkersMap1030_Q04,
    "2019 Debut</b></br>": GroupMarkersMap1030_Q05,
    "2020 Debut</b></br>": GroupMarkersMap1030_Q06,
    "2021 Debut</b></br>": GroupMarkersMap1030_Q07,
    "2022 Debut</b></br>": GroupMarkersMap1030_Q08,
    "2023 Debut</b></br>": GroupMarkersMap1030_Q09,
    "2024 Debut</b></br>": GroupMarkersMap1030_Q10,
    "2025 Debut</b></br>": GroupMarkersMap1030_Q11,
    "2026 Debut</b></br>": GroupMarkersMap1030_Q12,
    "2027 Debut</b></br>": GroupMarkersMap1030_Q13,
    "2028 Debut</b></br>": GroupMarkersMap1030_Q14,
    "2029 Debut</b></br>": GroupMarkersMap1030_Q15,
    "2030 Debut</b></br>": GroupMarkersMap1030_Q16,
}

var GroupDataPeriode02B = {
    "Toutes les Chantiers (points)</b></br>": GroupMarkersMap1030_00,
    //"Toutes les Chantiers fin (surfaces)</b></br>": Chantier1030_End,
    "Toutes les Chantiers fin (points)</b></br>": GroupMarkersMap1030_End,

    "2014 Fin</b></br>": GroupMarkersMap1030_Q99B,
    "2015 Fin</b></br>": GroupMarkersMap1030_Q01B,
    "2016 Fin</b></br>": GroupMarkersMap1030_Q02B,
    "2017 Fin</b></br>": GroupMarkersMap1030_Q03B,
    "2018 Fin</b></br>": GroupMarkersMap1030_Q04B,
    "2019 Fin</b></br>": GroupMarkersMap1030_Q05B,
    "2020 Fin</b></br>": GroupMarkersMap1030_Q06B,
    "2021 Fin</b></br>": GroupMarkersMap1030_Q07B,
    "2022 Fin</b></br>": GroupMarkersMap1030_Q08B,
    "2023 Fin</b></br>": GroupMarkersMap1030_Q09B,
    "2024 Fin</b></br>": GroupMarkersMap1030_Q10B,
    "2025 Fin</b></br>": GroupMarkersMap1030_Q11B,
    "2026 Fin</b></br>": GroupMarkersMap1030_Q12B,
    "2027 Fin</b></br>": GroupMarkersMap1030_Q13B,
    "2028 Fin</b></br>": GroupMarkersMap1030_Q14B,
    "2029 Fin</b></br>": GroupMarkersMap1030_Q15B,
    "2030 Fin</b></br>": GroupMarkersMap1030_Q16B,
}

var LControl00 = L.control.layers(CarteGroup).addTo(carte);
var LControl01 = L.control.layers(GroupDataALL).addTo(carte);

var LControl02 = L.control.layers(GroupDataPeriode01B).addTo(carte);
var LControl03 = L.control.layers(GroupDataPeriode02B).addTo(carte);
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

// +++++++ menu principal +++++++++++++++++
let MyControlClass = L.Control.extend({
    options: {
        position: 'topleft',
    },

    onAdd: function (carte) {
        var div = L.DomUtil.create('div', 'leaflet-bar my-control');

        var myButton = L.DomUtil.create('button', 'my-button-class', div);
        myButton.innerHTML = 'menu principal';
        myButton.style.width = '85px';
        L.DomEvent.on(myButton, 'click', function () {
            window.open("../index.html");
            window.close();
        }, this);
        return div;
    },

    onRemove: function (carte) {
    }
});
let myControl = new MyControlClass().addTo(carte);