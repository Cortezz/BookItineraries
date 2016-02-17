var services = angular.module('BookItineraries.services',[]);


services.factory('googleBooksAPIservice', function ($http) {

var googleBooksAPI = {};

  googleBooksAPI.getBook = function() {
     return $http({
       method: 'GET',
       key: 'AIzaSyDFyuwO36onOQNwjE1PSU-B_Dq4eNb42Bc',
       url: ' https://www.googleapis.com/books/v1/volumes/s1gVAAAAYAAJ'
     });
   }

   return googleBooksAPI;
});
