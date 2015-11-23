app.controller("PlanetsCtrl", 
  ["$scope", "$http", "$location", "$window", "GetAPI", "GetOneData",
  function($scope, $http, $location, $window, GetAPI, GetOneData) {
    console.log($location.path());
    $scope.stuff = [];
    var type = $location.path();
    type = type.substr(0, 0) + '' + type.substr(0 + 1);
    console.log(type);

    var numOfCalls = 1;
    var count = 1;
    Get();

    function Get(){
      if(count>numOfCalls){
        return;
      }
      $http.get("http://swapi.co/api/" + type + "/" + count)
      .then(function(data){
        console.log(data);
        console.log(data.data.residents);
        for(var i=0; i<data.data.residents.length; i++){
          console.log(data.data.residents[i]);
          $http.get(data.data.residents[i])
          .then(function(newData){
            console.log(newData);
            data.data.residents[i] = newData.data.name;
            console.log(data.data.residents[i]);
          },
          function(error){
            console.log(error);
          });
        }
        count++;
        $scope.stuff.push(data.data);
        console.log(data.data);
        Get();
      },
      function(error) {
        console.log(error);
        count++;
        Get();
      });
    }


    angular.element($window).bind("scroll", function() {
      var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
      var body = document.body, html = document.documentElement;
      var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight,  html.scrollHeight, html.offsetHeight);
      windowBottom = windowHeight + window.pageYOffset;
      if (windowBottom >= docHeight) {
          console.log('bottom reached');
          GetOneData(type, count).then(function(data){
            $scope.stuff.push(data);
          });
          count++;
      }
    });

  }
]);