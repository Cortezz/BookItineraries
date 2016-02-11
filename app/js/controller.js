var app = angular.module('BookItineraries', []);

app.controller('MainCtrl', function ($scope) {
    $scope.books = [
        'All the Light We Cannot See',
        'Over the Edge of the World: Magellan\'s Terrifying Circumnavegation of the Globe'
    ];
});
