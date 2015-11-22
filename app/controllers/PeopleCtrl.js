app.controller("PeopleCtrl", 
  ["$scope", "$http", "$location", "GetAPI", "GetOneData",
  function($scope, $http, $location, GetAPI, GetOneData) {
    console.log($location.path());
    $scope.stuff = [];
    var type = $location.path();
    type = type.substr(0, 0) + '' + type.substr(0 + 1);
    console.log(type);

    // var promise = GetAPI(type, 2);
    // promise.then(function(data){
    //   $scope.stuff = data;
    // });
    // for(var i=0; i<20; i++){
    //   GetOneData(type, i).then(function(data){
    //     $scope.stuff.push(data);
    //   });
    // }

    var numOfCalls = 20;
    var count = 1;
    Get();

    function Get(){
      if(count>numOfCalls){
        return;
      }
      $http.get("http://swapi.co/api/" + type + "/" + count)
      .then(function(data){
        console.log(data);
        count++;
        $scope.stuff.push(data.data);
        Get();
      },
      function(error) {
        console.log(error);
        count++;
        Get();
      });
    }
    


    // window.onscroll = function(ev) {
    //   if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    //     // you're at the bottom of the page
    //     // GetAPI(type, 2).then(function(data){
    //     //   $scope.stuff = data;
    //     // });
    //     console.log("I'm at the bottom");
    //   }
    // };

    // $(window).scroll(function() {
    //   if($(window).scrollTop() + $(window).height() == $(document).height()) {
    //       console.log("bottom!");
    //   }
    // });

  }
]);