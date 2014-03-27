'use strict';

angular.module('assembleApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.map = {
      center: {
          latitude: -37.8167,
          longitude: 144.9667
      },
      zoom: 15,
      draggable: true
    };
  });
