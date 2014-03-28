'use strict';

angular.module('assembleApp')
  .controller('FlokCtrl', function ($scope) {
    $scope.flok = {
      description: "DiUS Hack Day",
      position: {
        latitude: -37.816256,
        longitude: 144.960929
      },
      date: "2014-03-24T09:00:00",
      attendees: _.times(103, function(index) { return "DiUS employee"; } ),
      distance: '50 metres',
      icon: 'images/flock_group.png'
    };

    $scope.options = {
      disableDefaultUI: true
    };
  });
