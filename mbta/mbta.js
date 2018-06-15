/* mbta.js */
function initMap() {

        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(init_places);
        } else { 
                map.innerHTML = "couldn't find you";
        }

}

function init_places(position) {

        var place_sstat = new google.maps.LatLng(42.352271, -71.05524200000001);
        var place_andrw = new google.maps.LatLng(42.330154, -71.057655);
        var place_portr = new google.maps.LatLng(42.3884, -71.11914899999999);
        var place_harsq = new google.maps.LatLng(42.373362, -71.118956);
        var place_jfk   = new google.maps.LatLng(42.320685, -71.052391);
        var place_shmnl = new google.maps.LatLng(42.31129, -71.053331);
        var place_pktrm = new google.maps.LatLng(42.35639457, -71.0624242);
        var place_brdwy = new google.maps.LatLng(42.342622, -71.056967);
        var place_nqncy = new google.maps.LatLng(42.275275, -71.029583);
        var place_smmnl = new google.maps.LatLng(42.29312583, -71.06573796000001);
        var place_davis = new google.maps.LatLng(42.39674, -71.121815);
        var place_alfcl = new google.maps.LatLng(42.395428, -71.142483);
        var place_knncl = new google.maps.LatLng(42.36249079, -71.08617653);
        var place_chmnl = new google.maps.LatLng(42.361166, -71.070628);
        var place_dwnxg = new google.maps.LatLng(42.355518, -71.060225);
        var place_qnctr = new google.maps.LatLng(42.251809, -71.005409);
        var place_qamnl = new google.maps.LatLng(42.233391, -71.007153);
        var place_asmnl = new google.maps.LatLng(42.284652, -71.06448899999999);
        var place_wlsta = new google.maps.LatLng(42.2665139, -71.0203369);
        var place_fldcr = new google.maps.LatLng(42.300093, -71.061667);
        var place_cntsq = new google.maps.LatLng(42.365486, -71.103802);
        var place_brntn = new google.maps.LatLng(42.2078543, -71.029583);

        var places = [place_alfcl, place_davis, place_portr, place_harsq,
                        place_cntsq, place_knncl, place_chmnl, place_pktrm,
                        place_dwnxg, place_sstat, place_brdwy, place_andrw, 
                        place_jfk, place_nqncy, place_wlsta, place_qnctr,
                        place_qamnl, place_brntn, place_shmnl, place_smmnl,   
                        place_fldcr, place_asmnl];
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
                        zoom: 9
        });

        /* Initialize user's marker */
        var user_location = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var user_icon = {url: "https://maps.google.com/mapfiles/kml/shapes/woman.png",
                        scaledSize: new google.maps.Size(40, 40)
                        };

        var user_marker = new google.maps.Marker({
                position: user_location,
                map: map,
                icon: user_icon
        });


        /* Initialize Red Line markers */
        var i;
        var train_icon = {url: "https://maps.google.com/mapfiles/kml/shapes/rail.png",
                        scaledSize: new google.maps.Size(40, 40)
        };
        for (i = 0; i < 22; i++) {
                var marker = new google.maps.Marker({
                        position: places[i],
                        map: map,
                        icon: train_icon
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


        var closest_station = places[0];
        var shortest_distance = google.maps.geometry.spherical.computeDistanceBetween(user_location, places[0]);

        for (var i = 1; i < 22; i++) {
                var curr_distance = google.maps.geometry.spherical.computeDistanceBetween(user_location, places[i]);
                if (curr_distance < shortest_distance) {
                        shortest_distance = curr_distance;
                        closest_station = places[i];
                }
        }

        shortest_distance = shortest_distance / 1609;
 
        var content_str = "Closest Station: ";

        for (i = 0; i < 22; i++) {
                if (closest_station.lat() == places[i].lat() && closest_station.lng() == places[i].lng()) {
                        switch (i) {
                                case 0:
                                        content_str += "Alewife<br>" + shortest_distance + " miles away";
                                        break;
                                case 1:
                                        content_str += "Davis Square<br>" + shortest_distance + " miles away";
                                        break;
                                case 2:
                                        content_str += "Porter Square<br>" + shortest_distance + " miles away";
                                        break;
                                case 3:
                                        content_str += "Harvard Square<br>" + shortest_distance + " miles away";
                                        break;
                                case 4:
                                        content_str += "Central Square<br>" + shortest_distance + " miles away";
                                        break;
                                case 5:
                                        content_str += "Kendall/MIT<br>" + shortest_distance + " miles away";
                                        break;
                                case 6:
                                        content_str += "Charles/MGH<br>" + shortest_distance + " miles away";
                                        break;
                                case 7:
                                        content_str += "Park Street<br>" + shortest_distance + " miles away";
                                        break;
                                case 8:
                                        content_str += "Downtown Crossing<br>" + shortest_distance + " miles away";
                                        break;
                                case 9:
                                        content_str += "South Station<br>" + shortest_distance + " miles away";
                                        break;
                                case 10:
                                        content_str += "Broadway<br>" + shortest_distance + " miles away";
                                        break;
                                case 11:
                                        content_str += "Andrew<br>" + shortest_distance + " miles away";
                                        break;
                                case 12:
                                        content_str += "JFK/UMass<br>" + shortest_distance + " miles away";
                                        break;
                                case 13:
                                        content_str += "North Quincy<br>" + shortest_distance + " miles away";
                                        break;
                                case 14:
                                        content_str += "Wollaston<br>" + shortest_distance + " miles away";
                                        break;
                                case 15:
                                        content_str += "Quincy Center<br>" + shortest_distance + " miles away";
                                        break;
                                case 16:
                                        content_str += "Quincy Adams<br>" + shortest_distance + " miles away";
                                        break;
                                case 17:
                                        content_str += "Braintree<br>" + shortest_distance + " miles away";
                                        break;
                                case 18:
                                        content_str += "Savin Hill<br>" + shortest_distance + " miles away";
                                        break;
                                case 19:
                                        content_str += "Shawmut<br>" + shortest_distance + " miles away";
                                        break;
                                case 20:
                                        content_str += "Fields Corner<br>" + shortest_distance + " miles away";
                                        break;
                                case 21:
                                        content_str += "Ashmont<br>" + shortest_distance + " miles away";
                                        break;
                        }
                        break;
                } 
        }
                
        /* Initialize info window */
        var infowindow = new google.maps.InfoWindow({
                content: content_str
        });

        user_marker.addListener('click', function() {
                infowindow.open(map, user_marker);
        });


}


