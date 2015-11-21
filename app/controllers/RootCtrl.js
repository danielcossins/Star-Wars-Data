app.controller("RootCtrl", 
  ["$scope", "$http", "$location", "GetAPI",
  function($scope, $http, $location, GetAPI) {
    $scope.search="";
  }
]);