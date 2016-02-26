function drawMap(map, bookItinerary){
  var i,j;
  var path;
  var currentCharacter;
  var markers = [];
  var coords;

  for (i=0;i<bookItinerary.length;i++){
    currentCharacter = bookItinerary[i];
    path = [];

    for (j=0;j<currentCharacter.coords.length;j++){
      coords = new google.maps.LatLng(currentCharacter.coords[j].lat, currentCharacter.coords[j].long);
      path.push(coords);
      markers.push({coords: coords, desc: currentCharacter.coords[j].description});
    }

    var polyline = new google.maps.Polyline({
      path: path,
      strokeColor: generateRandomColor(),
      strokeWeight: 5,
      strokeOpacity: 0.8
    })
    polyline.setMap(map);
  }
  drawMarkers(markers,map);
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF'.split('');
  var color = '#';
  for (var i = 0; i < 6; i++ ) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function drawMarkers(markers, map){
var i;
var marker;
var infowindow = new google.maps.InfoWindow();

for (i=0;i<markers.length;i++){

  marker = new google.maps.Marker({
    position: markers[i].coords,
    title: "Character",
    icon: "../img/marker-24.svg",
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(markers[i].desc);
        infowindow.open(map, marker);
      }
    })(marker, i));
}
}
