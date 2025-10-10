//On charge les "tuiles"
var carte01 = L.tileLayer('https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png', {
    attribution: 'données © <a href="//osm.org/copyright">OpenStreetMap</a>/ODbL - rendu <a href="//openstreetmap.fr">OSM France</a>',
    minZoom: 13,
    maxZoom: 18,
    id: 'mapbox/streets-v15',
    //tileSize: 512,
    //zoomOffset: -1,
    //accessToken: 'your.mapbox.access.token'
});

mapLink = '<a href="http://www.esri.com/">Esri</a>';
wholink = 'i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community';
var carte02 = L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: '&copy; ' + mapLink + ', ' + wholink,
    id: '23',
    minZoom: 13,
    maxZoom: 18,
});

// On initialise la carte 
var carte = L.map('maCarte', { layers: [carte01] }).setView([50.86070401717095, 4.3830651582691456], 14);

// On ajoute de ClusterGroup
//var marqueurs = L.markerClusterGroup();
var marqueurs = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 18,
    iconCreateFunction: function (cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster digits-' + digits,
            iconSize: null
        });
    }
});

// on personnalise les marqueurs
var TreeIcon = L.icon({
    iconUrl: 'images/icons8-tree-64.png',
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    popupAnchor: [0, -30]
});

// ============== Donnnes GeoJson ==============
// fonction qui est appelée sur chaque entité avant de l'ajouter à une couche GeoJSON. 
function onEachFeature(feature, layer) {
    var popupContent = "<dt>" + feature.id + "</dt>";
    if (feature.properties && feature.properties.popupContent) {
        popupContent += feature.properties.popupContent;
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

// ++++++ Liste des Marqueurs ++++++++
var marqueur = L.geoJSON([MarkersList], {
    style: function (feature) {
        return feature.properties && feature.properties.style;
    },
    onEachFeature: onEachFeature,

    pointToLayer: function (feature, latlng) {
        return L.marker(latlng, { icon: TreeIcon });
    }
}) // .addTo(carte); ; inutile lors de lúti;isation des clusters
marqueurs.addLayer(marqueur)

// On va regropue les marqueurs dans une group leafvar
var groupe = new L.featureGroup(marqueurs);

carte.addLayer(marqueurs)
// ============== Donnnes GeoJson ==============

// ++++++++ Choix de cartes ++++++++
var CarteGroup = {
    "<b>Mapa</b>": carte01,
    "<b>Satelita</b>": carte02,
};
L.control.layers(CarteGroup).addTo(carte);
// ++++++++ Choix de cartes ++++++++

// +++++++ Revient a la position initial ++++++++
L.easyButton('<img src="images/home.png" width="26" height="26" >', function () {
    carte.setView([50.86070401717095, 4.3830651582691456], 14);
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
    position: 'bottomleft',
    collapsed: true,
    units: []
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