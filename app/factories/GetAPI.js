app.factory("GetAPI", ["$http", "$q", function($http, $q){
  return function(type, numOfCalls){
    console.log($q);
    var deferred = $q.defer();
    var storageArr = [];
    var count = 1;
    Get();
    function Get(){
      if(count>numOfCalls){
        return;
      }
      $http.get("http://swapi.co/api/" + type + "/" + count)
      .then(function(data){
        console.log(data);
        storageArr.push(data.data);
        count++;
        Get();
        // return storageArr;
        deferred.resolve(storageArr);
      });
    }
    return deferred.promise;
  };
}]);