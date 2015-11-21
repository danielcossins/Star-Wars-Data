app.controller("MainCtrl", 
  ["$scope", "$http", "$location",
  function($scope, $http, $location) {
    console.log($location.path());
    $scope.stuff = [];


    $http.get("http://swapi.co/api/people/1/")
    .then(function(data){
      console.log(data);
      $scope.stuff.push(data.data);
    });
  }
]);