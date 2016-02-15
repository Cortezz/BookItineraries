var app = angular.module('BookItineraries', ['ui.bootstrap','ngMaps','ngEkathuwa', 'ngRoute']);



app.controller('MainCtrl', function($scope, $ekathuwa) {
  $scope.books = [{
    "title": "All the Light We Cannot See",
    "ISBN": "1476746583"
  }, {
    "title": 'Over the Edge of the World: Magellan\'s Terrifying Circumnavegation of the Globe',
    "ISBN": "006093638X"
  }];

  $scope.status = {
    isFirstOpen: true,
    openStatus: [true],
    oneAtATime: true
  };

  $scope.ekathuwaModalTemp = function () {
      $ekathuwa.modal({
          id: "ekathuwaModalTempId",
          scope: $scope,
          templateURL: "partials/bookInfo.html"
      });
  }


});
