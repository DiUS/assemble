'use strict';

angular.module('assembleApp')
  .controller('MainCtrl', function ($scope, $interval) {

    $interval(function () {
      for (var i = 0; i < $scope.people.length; i++) {
        var random = (Math.floor(Math.random() * 201) - 100) / Math.pow(10, 5);
        $scope.people[i].position.latitude = $scope.people[i].position.latitude - random;
        $scope.people[i].position.longitude = $scope.people[i].position.longitude + random;

        console.log($scope.people[i].position.latitude);
        console.log($scope.people[i].position.longitude);
      }
    }, 5000);

    // $scope.showPerson = function () {
    //   debugger;
    // };

    $scope.map = {
      center: {
          latitude: -37.8167,
          longitude: 144.9667
      },
      zoom: 15,
      draggable: true
    };

    $scope.people = [
      {
        name: 'Brendan Spinks',
        position: {
          latitude: -37.816256,
          longitude: 144.960929
        },
        icon: 'images/flock_marker.png'
      },
      {
        name: 'Marc Phoa',
        position: {
          latitude: -37.815896,
          longitude: 144.971476
        },
        icon: 'images/flock_marker.png'
      },
      {
        name: 'Cam Hine',
        position: {
          latitude: -37.8150647,
          longitude: 144.9598185
        },
        icon: 'images/flock_marker.png'
      }
    ]
});
