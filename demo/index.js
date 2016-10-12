'use strict';

angular
  .module('demo', ['ngScroll'])

  .controller('mainController', ['$scope', '$timeout', function ($scope, $timeout) {
    var items = [];
    for (var i = 0; i < 20; i++) {
      items.push(i + ' - keep walking, be 2 with you.')
    }

    $scope.items = items;

    var top = 0;
    var bottom = 20;

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
        for (i = top + n; i <= top - 1; i++) {
          _items.push(i + ' - keep walking, be 2 with you.');
        }

        $scope.items = _items.concat($scope.items);
        top = top + n;
      }
    }

    $scope.$watch('items', function (newVal, oldVal) {
      $scope.$broadcast('$finishPullToRefresh');
      var scroller = $scroller.get('myScroller');
      if (scroller) scroller.resize();
    });

    $scope.onRefresh = function () {
      $timeout(function () {
        inc(-10);
      }, 2000);
    };

    $scope.onInfinite = function () {
      $timeout(function () {
        inc(10);
      }, 2000);
    };

  }])
;
