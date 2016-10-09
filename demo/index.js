'use strict';

angular
  .module('demo', [])

  .controller('mainController', ['$scope', function ($scope) {
    $scope.items = [];

    for (var i=1; i < 1000; i++) {
      $scope.items.push(i + ' - keep walking, be 2 with you.')
    }
  }])
;
