app.controller("FilmCtrl", 
  ["$scope", "$http", "$location", "GetAPI",
  function($scope, $http, $location, GetAPI) {
    console.log($location.path());
    $scope.stuff = [];

    // var promise = GetAPI("people", 2);
    // promise.then(function(data){
    //   $scope.stuff = data;
    // });



  }
]);