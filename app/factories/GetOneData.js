app.factory("GetOneData", ["$http", "$q", function($http, $q){
  return function(type, index){
    var deferred = $q.defer();
    $http.get("http://swapi.co/api/" + type + "/" + index)
      .then(function(data){
        console.log(data);
        deferred.resolve(data.data);
      });
    return deferred.promise;
  };
}]);