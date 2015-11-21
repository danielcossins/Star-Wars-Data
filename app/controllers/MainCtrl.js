app.controller("MainCtrl", 
  ["$scope", "$http", "$location", "GetAPI",
  function($scope, $http, $location, GetAPI) {
    console.log($location.path());
    $scope.stuff = [];

    // var count = 1;
    // for(var i=0; i<10; i++){
    //   $http.get("http://swapi.co/api/people/" + count)
    //   .then(function(data){
    //     console.log(data);
    //     $scope.stuff.push(data.data);
    //   });
    //   count++;
    // }
    var promise = GetAPI("people", 2);
    promise.then(function(data){
      $scope.stuff = data;
    });



    // THIS WORKS
    // var type="people";
    // var count = 1;
    // var numOfCalls = 5;
    // Get();

    // function Get(){
    //   if(count>numOfCalls){
    //     return;
    //   }
    //   $http.get("http://swapi.co/api/" + type + "/" + count)
    //   .then(function(data){
    //     console.log(data);
    //     $scope.stuff.push(data.data);
    //     count++;
    //     Get();
    //   });
    // }
  }
]);