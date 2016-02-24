var controllers = angular.module('BookItineraries.controllers', []);

controllers.controller('MainCtrl', function($scope) {
    $scope.books = [{
      "title": "All the Light We Cannot See",
        "ISBN": '1476746583'
    }, {
      "title": 'Over the Edge of the World: Magellan\'s Terrifying Circumnavegation of the Globe',
      "ISBN": '006093638X'
    }];

    $scope.status = {
      isFirstOpen: true,
      openStatus: [true],
      oneAtATime: true
    };

});

controllers.controller("BookItineraryCtrl", function ($scope, $routeParams, googleBooksAPIservice, bookItineraryService) {

  $scope.ISBN = $routeParams.ISBN;


  googleBooksAPIservice.getBook($scope.ISBN).success(function (data) {
      $scope.bookData = data.items[0].volumeInfo;
  });

  bookItineraryService.getBookItinerary($scope.ISBN).success(function (data) {

    $scope.bookItinerary = data.itinerary;
    var characters = data.itinerary.characters;

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: data.zoom,
        center: new google.maps.LatLng(data.center.lat, data.center.long),
        mapTypeId: google.maps.MapTypeId.TERRAIN
       });

    drawMap(map);


  })

  function drawMap(map){
    var i,j;
    var path = [];
    var currentCharacter;

    for (i=0;i<$scope.bookItinerary.length;i++){
      currentCharacter = $scope.bookItinerary[i];
      console.log("currently searching "+currentCharacter.character);
      for (j=0;j<currentCharacter.coords.length;j++){
        path.push(new google.maps.LatLng(currentCharacter.coords[j].lat, currentCharacter.coords[j].long));
        console.log(currentCharacter.coords[j].lat + " - " + currentCharacter.coords[j].long);
      }

      var polyline = new google.maps.Polyline({
        path: path,
        strokeColor: "#ff0000",
        strokeWeight: 5,
        strokeOpacity: 0.8
      })
      polyline.setMap(map);
    }
  }





});
