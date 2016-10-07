;(function(window, angular) {
  function link (scope, element) {

  }

  angular

    .module('ngScroll', [])

    .directive('scroll', [function () {

      return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
          onRefresh: '=onRefresh',
          onInfinite: '=onInfinite'
        },
        link: link,
        template: '<div class="ng-scroller-wrapper">' +
          '<div class="ng-scroller">' +
          '<div ng-transclude></div>' +
          '</div>' +
          '</div>'
      }
    }])
})(window, angular);
