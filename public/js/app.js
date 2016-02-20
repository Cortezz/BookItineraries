var app = angular.module('BookItineraries', ['BookItineraries.controllers',
        'BookItineraries.services', 'ngRoute','ui.bootstrap','ngMaps']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
          when('/books', {
              templateUrl: 'partials/frontpage.html',
              controller: 'MainCtrl'
          }).
          when('/books/:ISBN', {
              templateUrl: 'partials/bookItinerary.html',
              controller: 'BookItineraryCtrl'
          }).
          otherwise({
              redirectTo: '/books'
          });
  }]);
