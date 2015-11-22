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
        controller: 'PlanetsCtrl'
      })
      .when('/spaceships', {
        templateUrl: 'partials/spaceships.html',
        controller: 'SpaceshipsCtrl'
      })
      .when('/vehicles', {
        templateUrl: 'partials/vehicles.html',
        controller: 'VehiclesCtrl'
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
        controller: 'SpeciesCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);