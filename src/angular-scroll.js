;
(function (window, angular) {
  angular

    .module('ngScroll', [])

    /* ngTouchstart, ngTouchend, ngTouchmove */
    .directive("ngTouchstart", function () {
      return {
        controller: ["$scope", "$element", function ($scope, $element) {

          $element.bind("touchstart", onTouchStart);
          function onTouchStart(event) {
            var method = $element.attr("ng-touchstart");
            $scope.$event = event;
            $scope.$apply(method);
          }

        }]
      }
    })

    .directive("ngTouchmove", function () {
      return {
        controller: ["$scope", "$element", function ($scope, $element) {

          $element.bind("touchstart", onTouchStart);
          function onTouchStart(event) {
            event.preventDefault();
            $element.bind("touchmove", onTouchMove);
            $element.bind("touchend", onTouchEnd);
          }

          function onTouchMove(event) {
            var method = $element.attr("ng-touchmove");
            $scope.$event = event;
            $scope.$apply(method);
          }

          function onTouchEnd(event) {
            event.preventDefault();
            $element.unbind("touchmove", onTouchMove);
            $element.unbind("touchend", onTouchEnd);
          }

        }]
      }
    })

    .directive("ngTouchend", function () {
      return {
        controller: ["$scope", "$element", function ($scope, $element) {

          $element.bind("touchend", onTouchEnd);
          function onTouchEnd(event) {
            var method = $element.attr("ng-touchend");
            $scope.$event = event;
            $scope.$apply(method);
          }

        }]
      }
    })

    .directive('spinner', [function () {
      return {
        restrict: 'AE',
        templateUrl: 'templates/spinner.html'
      }
    }])

    .directive('scroll', [function () {

      return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
          onRefresh: '=onRefresh',
          onInfinite: '=onInfinite'
        },
        link: function (scope, element) {
          // todo:
        },
        controller: ['$scope', '$element', function ($scope, $element) {

          // todo:

        }],
        templateUrl: 'templates/scroll.html'
      }
    }])

})(window, angular);
