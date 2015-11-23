app.factory("SimplePromise", ["$http", "$q", function($http, $q){
  return function(url){
    var deferred = $q.defer();
    $http.get(url)
      .then(function(data){
        console.log(data);
        deferred.resolve(data.data);
      });
    return deferred.promise;
  };
}]);