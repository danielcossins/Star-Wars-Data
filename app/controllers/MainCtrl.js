app.controller("MainCtrl", 
  ["$scope", "$http", "$location",
  function($scope, $http, $location) {
    console.log($location.path());
    
  }
]);