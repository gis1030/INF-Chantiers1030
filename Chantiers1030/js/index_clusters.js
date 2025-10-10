// On ajoute de ClusterGroup
var GroupMarkersMap1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster02 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersEntrave1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster01 digits-' + digits,
            iconSize: null
        });
    }
});


var GroupMarkersSTIB1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster01 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersParkingPrive1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster03 digits-' + digits,
            iconSize: null
        });
    }
});

var GroupMarkersParking1030 = L.markerClusterGroup({
    spiderfyOnMaxZoom: true,
    showCoverageOnHover: true,
    zoomToBoundsOnClick: true,
    removeOutsideVisibleBounds: true,
    disableClusteringAtZoom: 17,
    maxClusterRadius: 35,
    singleMarkerMode: false,
    iconCreateFunction: function(cluster) {
        var digits = (cluster.getChildCount() + '').length;
        return L.divIcon({
            html: cluster.getChildCount(),
            className: 'cluster03 digits-' + digits,
            iconSize: null
        });
    }
});