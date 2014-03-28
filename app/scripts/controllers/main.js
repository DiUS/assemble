'use strict';

angular.module('assembleApp')
  .controller('MainCtrl', function ($scope, $interval) {

    $interval(function () {
      for (var i = 0; i < $scope.people.length; i++) {
        if ($scope.people[i].fixed === true) {
          continue;
        }

        var random = (Math.floor(Math.random() * 201) - 100) / Math.pow(10, 5);
        $scope.people[i].position.latitude = $scope.people[i].position.latitude - random;
        $scope.people[i].position.longitude = $scope.people[i].position.longitude + random;
      }
    }, 2000);

    $scope.currentPerson = null;
    $scope.search = {name: null} ;

    $scope.map = {
      center: {
          latitude: -37.8167,
          longitude: 144.9667
      },
      zoom: 15,
      draggable: true
    };

    $scope.$watch('search.name', function() {
      $scope.currentPerson = _.find($scope.people, function(person) { return person.name == $scope.search.name; } ) || $scope.currentPerson;
    });

    $scope.$watch('people', function () {
      $scope.peopleNames = _.map($scope.people, function(person) { return person.name; });
    });

    $scope.people = [
      {
        name: 'Brendan Spinks',
        position: {
          latitude: -37.813256,
          longitude: 144.960929
        },
        icon: 'images/flock_marker.png'
      },
      {
        name: 'Marc Phoa',
        position: {
          latitude: -37.811896,
          longitude: 144.971476
        },
        icon: 'images/flock_marker.png'
      },
      {
        name: 'Cam Hine',
        position: {
          latitude: -37.8110647,
          longitude: 144.9598185
        },
        icon: 'images/flock_marker.png'
      },
      {
        name: 'Stephen Bartlett && Travis Dixon',
        position: {
          latitude: -37.8150347,
          longitude: 144.9518185
        },
        icon: 'images/flock_group.png',
        fixed: true
      },
      {
        name: 'Aaron Triantafyllidis',
        position: {
          latitude: -37.816154,
          longitude: 144.960992
        },
        icon: 'images/my_location_animated.gif',
        fixed: true
      }
    ];

    $scope.options = {
      disableDefaultUI: true
    };

    $scope.markerOptions = {
      draggable: true
    };

    for (var i = 0; i < $scope.people.length; i++) {
      $scope.people[i].showPerson = function () {
        $scope.currentPerson = this.model;
        $scope.$digest();
      }
    };
});
