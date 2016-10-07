angular
  .module('demo', [])

  .controller('mainController', ['$scope', function ($scope) {
    $scope.items = [];

    for (let i = 1; i < 1000; i++) {
      $scope.items.push(i + ' - keep walking, be 2 with you.')
    }
  }])
;
