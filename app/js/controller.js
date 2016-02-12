var app = angular.module('BookItineraries', ['ui.bootstrap']);

app.controller('MainCtrl', function($scope) {
  $scope.books = [
    'All the Light We Cannot See',
    'Over the Edge of the World: Magellan\'s Terrifying Circumnavegation of the Globe'
  ];

  $scope.status = {
    isFirstOpen: true,
    openStatus: [true],
    oneAtATime: true
  };

});
