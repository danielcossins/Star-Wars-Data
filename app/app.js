var app = angular.module("StarWars",[ 'ngRoute']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'partials/main.html',
        controller: 'MainCtrl'
      })
      .when('/planets', {
        templateUrl: 'partials/planets.html',
        controller: 'PeopleCtrl'
      })
      .when('/starships', {
        templateUrl: 'partials/spaceships.html',
        controller: 'PeopleCtrl'
      })
      .when('/vehicles', {
        templateUrl: 'partials/vehicles.html',
        controller: 'PeopleCtrl'
      })
      .when('/people', {
        templateUrl: 'partials/people.html',
        controller: 'PeopleCtrl'
      })
      .when('/films', {
        templateUrl: 'partials/films.html',
        controller: 'FilmCtrl'
      })
      .when('/species', {
        templateUrl: 'partials/species.html',
        controller: 'PeopleCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);