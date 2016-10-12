'use strict';

angular
  .module('demo', ['ngScroll'])

  .controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
    $scope.items = [];

    for (var i = 0; i < 100; i++) {
      $scope.items.push(i + ' - keep walking, be 2 with you.')
    }

    var top = 0;
    var bottom = 100;

    function inc(n) {
      var _items = [];
      var i;
      if (n > 0) {
        for (i = bottom + 1; i <= bottom + n; i++) {
          _items.push(i + ' - keep walking, be 2 with you.');
        }

        $scope.items = $scope.items.concat(_items);
        bottom = bottom + n;
      } else {
        for (i = top + n; i <=  top - 1; i++) {
          _items.push(i + ' - keep walking, be 2 with you.');
        }

        $scope.items = _items.concat($scope.items);
        top = top + n;
      }
    }

    $scope.onRefresh = function () {
      $timeout(function () {
        inc(-10);
        $scope.$broadcast('$finishPullToRefresh');
      }, 2000);
    };

    $scope.onInfinite = function () {
      inc(10);
      $timeout(function () {
        $scroller.get('myScroller').resize();
      }, 2000);
    };

    // call resize after $scope update
    $timeout(function () { $scroller.get('myScroller').resize() }, 1000);

  }])
;
