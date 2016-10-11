'use strict';

angular
  .module('demo', ['ngScroll'])

  .controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.items = [];

    for (var i=1; i < 100; i++) {
      $scope.items.push(i + ' - keep walking, be 2 with you.')
    }

    $scope.onRefresh = function () {
      $timeout(function () {
        $scope.$broadcast('$finishPullToRefresh');
      }, 2000);
    }

  }])
;
