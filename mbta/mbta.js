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

        var map = new google.maps.Map(document.getElementById('map'), {
                        center: place_sstat,
                        zoom: 11
        });

        var mark_sstat = new google.maps.Marker({position: place_sstat, map: map});
        var mark_andrw = new google.maps.Marker({position: place_andrw, map: map});
        var mark_portr = new google.maps.Marker({position: place_portr, map: map});
        var mark_harsq = new google.maps.Marker({position: place_harsq, map: map});
        var mark_jfk   = new google.maps.Marker({position: place_jfk,   map: map});
        var mark_shmnl = new google.maps.Marker({position: place_shmnl, map: map});
        var mark_pktrm = new google.maps.Marker({position: place_pktrm, map: map});
        var mark_brdwy = new google.maps.Marker({position: place_brdwy, map: map});
        var mark_nqncy = new google.maps.Marker({position: place_nqncy, map: map});
        var mark_smmnl = new google.maps.Marker({position: place_smmnl, map: map});
        var mark_davis = new google.maps.Marker({position: place_davis, map: map});
        var mark_alfcl = new google.maps.Marker({position: place_alfcl, map: map});
        var mark_knncl = new google.maps.Marker({position: place_knncl, map: map});
        var mark_chmnl = new google.maps.Marker({position: place_chmnl, map: map});
        var mark_dwnxg = new google.maps.Marker({position: place_dwnxg, map: map});
        var mark_qnctr = new google.maps.Marker({position: place_qnctr, map: map});
        var mark_qamnl = new google.maps.Marker({position: place_qamnl, map: map});
        var mark_asmnl = new google.maps.Marker({position: place_asmnl, map: map});
        var mark_wlsta = new google.maps.Marker({position: place_wlsta, map: map});
        var mark_fldcr = new google.maps.Marker({position: place_fldcr, map: map});
        var mark_cntsq = new google.maps.Marker({position: place_cntsq, map: map});
        var mark_brntn = new google.maps.Marker({position: place_brntn, map: map});
}