function drawMap(map, bookItinerary) {
  var i, j;
  var path;
  var currentCharacter;
  var markers = [];
  var coords;
  var itineraryLength = [];

  for (i = 0; i < bookItinerary.length; i++) {
    currentCharacter = bookItinerary[i];
    path = [];
    itineraryLength[i] = currentCharacter.coords.length;

    for (j = 0; j < currentCharacter.coords.length; j++) {
      coords = new google.maps.LatLng(currentCharacter.coords[j].lat, currentCharacter.coords[j].long);
      path.push(coords);
      markers.push({
        character: currentCharacter.character,
        coords: coords,
        desc: currentCharacter.coords[j].description
      });
    }

    var polyline = new google.maps.Polyline({
      path: path,
      strokeColor: generateRandomColor(),
      strokeWeight: 3,
      strokeOpacity: 0.8
    })
    polyline.setMap(map);
  }
  drawMarkers(markers, map, itineraryLength);
}

function generateRandomColor() {
  return 'rgb(' + (Math.floor(Math.random() * 256)) + ','
  + (Math.floor(Math.random() * 256)) + ','
  + (Math.floor(Math.random() * 256)) + ')';
}


function drawMarkers(markers, map, itineraryLength) {
  var i,j,markerCounter;
  var marker;
  var infowindow = new google.maps.InfoWindow();

  for (i = 0, j=0, markerCounter=1; i < markers.length; i++) {

    if (markers[i].desc!=""){
       marker = new google.maps.Marker({
         position: markers[i].coords,
         title: "Character",
         icon: "https://7c29ac479ebd9f2e21b06584476b397450a02067-www.googledrive.com/host/0BwyVoAL8Xtc-VllZUzFNNDcyclU/number_"+markerCounter+"%20copy.png",
         map: map
       });

       if (markerCounter==(itineraryLength[j]))
       {
         markerCounter = 0;
         j++;
       }

       google.maps.event.addListener(marker, 'click', (function(marker, i) {
         return function() {
           infowindow.setContent(generateContent(markers[i].character, markers[i].desc));
           infowindow.open(map, marker);
         }
       })(marker, i));
       markerCounter++;
     }
  }
}

function generateContent(character, desc){
  return '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h4 id="firstHeading" class="firstHeading">'+character+'</h4>'+
      '<div id="bodyContent">'+
      '<p>'+desc+'</p>'+
      '</div>'+
      '</div>';
}
