app.controller("MainCtrl", 
  ["$scope", "$http", "$location",
  function($scope, $http, $location) {
    console.log($location.path());
    $scope.stuff = [];

    var count = 1;
    for(var i=0; i<10; i++){
      $http.get("http://swapi.co/api/people/" + count)
      .then(function(data){
        console.log(data);
        $scope.stuff.push(data.data);
      });
      count++;
    }
  }
]);