/* mbta.js */
function initMap() {

        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(init_places);
        } else { 
                map.innerHTML = "couldn't find you";
        }

}

function init_places(position) {

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

        var braintree = [place_alfcl, place_davis, place_portr, place_harsq,
                        place_cntsq, place_knncl, place_chmnl, place_pktrm,
                        place_dwnxg, place_sstat, place_brdwy, place_andrw, 
                        place_jfk, place_nqncy, place_wlsta, place_qnctr,
                        place_qamnl, place_brntn];
        var ashmont = [place_jfk, place_shmnl, place_fldcr, place_smmnl,
                        place_asmnl];

        /* Initialize map */
        var map = new google.maps.Map(document.getElementById('map'), {
                        center: place_sstat,
                        zoom: 8
        });

        /* Initialize user's marker */
        var user_location = {lat: position.coords.latitude, lng: position.coords.longitude};
        var user_icon = {url: "https://maps.google.com/mapfiles/kml/shapes/woman.png",
                        scaledSize: new google.maps.Size(40, 40)
                        };

        var user_marker = new google.maps.Marker({
                position: user_location,
                map: map,
                icon: user_icon
        });

        /* Initialize info window */
        var infowindow = new google.maps.InfoWindow({
                content: '<div class = "bodyContent"> test </div>'
        });

        user_marker.addListener('click', function() {
                infowindow.open(map, user_marker);
        });

        /* Initialize Red Line markers */
        var i;
        for (i = 0; i < 18; i++) {
                var icon = {url: "https://maps.google.com/mapfiles/kml/shapes/rail.png",
                        scaledSize: new google.maps.Size(40, 40)
                };

                if (i > 0 || i < 5) {
                        var markerA = new google.maps.Marker({
                                position: ashmont[i],
                                map: map,
                                icon: icon
                        });
                }

                var markerB = new google.maps.Marker({
                        position: braintree[i],
                        map: map,
                        icon: icon
                });
        }

        /* Initialize polylines */
        var braintree_line = new google.maps.Polyline({
                path: braintree,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 3
        });

        var ashmont_line = new google.maps.Polyline({
                path: ashmont,
                geodesic: true,
                strokeColor: '#FF0000',
                strokeOpacity: 1.0,
                strokeWeight: 3
        });

        braintree_line.setMap(map);
        ashmont_line.setMap(map);

  //      var closest_station = places[0];
      //  var shortest_distance = computeDistanceBetween(from, to[, radius])

        


        
}



