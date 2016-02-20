var services = angular.module('BookItineraries.services', []);


services.factory('googleBooksAPIservice', function($http) {

  var googleBooksAPI = {};

  googleBooksAPI.getBook = function(ISBN) {
    return $http({
      method: 'GET',
      key: 'AIzaSyDFyuwO36onOQNwjE1PSU-B_Dq4eNb42Bc',
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:' + ISBN
    });
  }

  return googleBooksAPI;
});

services.factory('bookItineraryService', function($http) {

  var bookItinerary = {};

  bookItinerary.getBookItinerary = function(ISBN) {
    return $http.get("/book/" + ISBN).success(function(data) {
      bookItinerary = data;
    });
  }

  return bookItinerary;
})
