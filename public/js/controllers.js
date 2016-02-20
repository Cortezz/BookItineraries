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

/*
  $scope.map = {
    'center' : [50, 10],
    'zoom': 4
  }*/



  googleBooksAPIservice.getBook($scope.ISBN).success(function (data) {
      $scope.bookData = data.items[0].volumeInfo;
      console.log($scope.bookData);
  });

  bookItineraryService.getBookItinerary($scope.ISBN).success(function (data) {

    $scope.bookItinerary = data;

    $scope.map = {
      'center': [data.center.lat, data.center.long],
      'zoom': data.zoom
    };
    console.log($scope.map.center);
    console.log($scope.BookItinerary);
  })


});
