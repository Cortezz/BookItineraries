var app = angular.module('BookItineraries', ['ui.bootstrap']);



app.controller('MainCtrl', function($scope) {
  $scope.books = [
    {
      "title" : "All the Light We Cannot See",
      "ISBN" : "1476746583"
    },
    {
      "title": 'Over the Edge of the World: Magellan\'s Terrifying Circumnavegation of the Globe',
      "ISBN" : "006093638X"
    }];

  $scope.status = {
    isFirstOpen: true,
    openStatus: [true],
    oneAtATime: true
  };

  $scope.getBookInfo = function () {
       BookInfoService.get({ q: $scope.searchTerm }, function (response) {

           $scope.bookResults = response.items;
           $scope.orderProp = 'volumeInfo.title';

       });
   }

});

app.controller("bookInfo", function($scope, $http) {
  /*$http.get(' http://openlibrary.org/api/volumes/brief/isbn/1476746583.json').success(function(data) {
       $scope.bookInfo = data;
       console.Log("YO!");
   });*/
   $http.get('https://api.github.com/users/angular/repos').success(function(data) {
     $scope.gitRepos = data;
   });

});
