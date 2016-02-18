var controllers = angular.module('BookItineraries.controllers', []);

controllers.controller('MainCtrl', function($scope) {
    $scope.books = [{
      "title": "All the Light We Cannot See",
      "id": 1
    }, {
      "title": 'Over the Edge of the World: Magellan\'s Terrifying Circumnavegation of the Globe',
      "id": 2
    }];

    $scope.status = {
      isFirstOpen: true,
      openStatus: [true],
      oneAtATime: true
    };

});

controllers.controller("BookItineraryCtrl", function ($scope,googleBooksAPIservice) {

  googleBooksAPIservice.getBook().success(function (data) {
      $scope.bookData = data.volumeInfo;
      console.log($scope.bookData);
  });

});
