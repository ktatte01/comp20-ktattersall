/* mbta.js */
function initMap() {
        var place_sstat = {lat: 42.352271, lng: -71.05524200000001};
        var place_andrw = {lat: 42.330154, lng: -71.057655};
        var place_portr = {lat: 42.3884, lng: -71.11914899999999};
        var place_harsq = {lat: 42.373362, lng: -71.118956};
        var place_jfk   = {lat: 42.320685, lng: -71.052391};
        var place_shmnl = {lat: 42.31129, lng: -71.053331};
        var place_pktrm = {lat: 42.35639457, lng: -71.0624242};
        var place_brdwy = {lat: 42.342622, lng: -71.056967};
        var place_nqncy = {lat: 42.275275, lng: -71.029583};
        var place_smmnl = {lat: 42.29312583, lng: -71.06573796000001};
        var place_davis = {lat: 42.39674, lng: -71.121815};
        var place_alfcl = {lat: 42.395428, lng: -71.142483};
        var place_knncl = {lat: 42.36249079, lng: -71.08617653};
        var place_chmnl = {lat: 42.361166, lng: -71.070628};
        var place_dwnxg = {lat: 42.355518, lng: -71.060225};
        var place_qnctr = {lat: 42.251809, lng: -71.005409};
        var place_qamnl = {lat: 42.233391, lng: -71.007153};
        var place_asmnl = {lat: 42.284652, lng: -71.06448899999999};
        var place_wlsta = {lat: 42.2665139, lng: -71.0203369};
        var place_fldcr = {lat: 42.300093, lng: -71.061667};
        var place_cntsq = {lat: 42.365486, lng: -71.103802};
        var place_brntn = {lat: 42.2078543, lng: -71.029583};

        var places = [place_sstat, place_andrw, place_portr, place_harsq, place_jfk,
                        place_shmnl, place_pktrm, place_brdwy, place_nqncy, place_smmnl,
                        place_davis, place_alfcl, place_knncl, place_chmnl, place_dwnxg,
                        place_qnctr, place_qamnl, place_asmnl, place_wlsta, place_fldcr,
                        place_cntsq, place_brntn];


        var map = new google.maps.Map(document.getElementById('map'), {
                        center: place_sstat,
                        zoom: 11
        });

        var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        var i;

        for (i = 0; i < 22; i++) {
                var marker = new google.maps.Marker({
                        position: places[i],
                        map: map,
                        icon: iconBase + 'rail.png'
                });
        }
}