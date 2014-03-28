'use strict';

angular.module('assembleApp')
  .controller('FloksCtrl', function ($scope) {

    $scope.floks = [
      {
        description: "Coffee at de'Alleyway",
        position: {
          latitude: -37.8150495,
          longitude: 144.964374
        },
        date: "2014-03-24T08:30:00",
        attendees: ['Cam Hine', 'Aaron Triantafylidis'],
        distance: '300 metres'
      },
      {
        description: "DiUS Hack Day",
        position: {
          latitude: -37.816256,
          longitude: 144.960929
        },
        date: "2014-03-24T09:00:00",
        attendees: _.times(103, function(index) { return "DiUS employee"; } ),
        distance: '50 metres'
      },
      {
        description: "Unilateral Social Committee Meeting",
        position: {
          latitude: -37.815398,
          longitude: 144.960708
        },
        date: "2014-03-24T18:00:00",
        attendees: _.times(34, function(index) { return "DiUS employee"; } ),
        distance: '250 metres'
      }
    ];
  });
