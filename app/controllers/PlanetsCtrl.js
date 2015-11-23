app.controller("PlanetsCtrl", 
  ["$scope", "$http", "$location", "$window", "GetAPI", "GetOneData", "SimplePromise",
  function($scope, $http, $location, $window, GetAPI, GetOneData, SimplePromise) {
    console.log($location.path());
    $scope.stuff = [];
    var type = $location.path();
    type = type.substr(0, 0) + '' + type.substr(0 + 1);
    console.log(type);

    var numOfCalls = 5;
    var count = 1;
    Get();

    function Get(){
      if(count>numOfCalls){
        return;
      }
      $http.get("http://swapi.co/api/" + type + "/" + count)
      .then(function(data){
        console.log(data);
        // data.data.residents = ChangeArray(data.data.residents, data.data.residents.length, data.data.residents[0]);
        //recursive function
        $scope.stuff.push(data.data);
        count++;
        Get();
      },
      function(error) {
        console.log(error);
        count++;
        Get();
      });
    }

    // function ChangeArray(arrayToChange, numberOfCalls, url){
    //   if(index > numberOfCalls){
    //     return arrayToChange;
    //   }
    //   SimplePromise(url)
    //   .then(function(newData){
    //     console.log(newData);
    //     arrayToChange[index] = newData.name;
    //     index++;
    //     ChangeArray(arrayToChange, numberOfCalls, arrayToChange[index]);
    //   });
    // }


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