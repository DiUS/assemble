'use strict';

angular.module('assembleApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'google-maps',
  'autocomplete'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/floks', {
        templateUrl: 'views/floks.html',
        controller: 'FloksCtrl'
      })
      .when('/floks/:id', {
        templateUrl: 'views/flok.html',
        controller: 'FlokCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
