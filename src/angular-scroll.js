require('./css/scroller.css');
window.$scroller = require('./module/accessor');
var getContentRender = require('./module/render');
var Scroller = require('./module/core');
var Templates = require('./templates');

/* ngTouch */
angular.module('ngTouch', [])

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
;

angular.module('svg', [])

  .directive('spinner', [function () {
    return {
      restrict: 'AE',
      template: Templates['spinner']
    }
  }])

  .directive('arrow', [function () {
    return {
      restrict: 'AE',
      template: Templates['arrow']
    }
  }])
;

/* ngScroll */
angular.module('ngScroll', ['ngTouch', 'svg'])

  .directive('scroll', [function () {

    function widthAndHeightCoerce(v) {
      if (!widthAndHeightValidator(v)) {
        throw '非法的width或height'
      }

      if (v[v.length - 1] != '%') return v + 'px';
      return v
    }

    function widthAndHeightValidator(v) {
      return /^[\d]+\%?$/.test(v)
    }

    function getDelegateId() {
      return 'vs_' + Math.random().toString(36).substr(3, 8)
    }

    return {
      restrict: 'E',
      transclude: true,
      replace: true,
      scope: {
        onRefresh: '=onRefresh',
        onInfinite: '=onInfinite',
        // width: '=width',
        // height: '=height',
        delegateId: '=delegateId'
      },
      controller: ['$scope', '$timeout', function ($scope, $timeout) {
        $scope.containerId = Math.random().toString(36).substring(3, 8);
        $scope.contentId = Math.random().toString(36).substring(3, 8);

        $scope.state = 0; // 0: pull to refresh, 1: release to refresh, 2: refreshing
        $scope.showLoading = false;

        $scope.refreshText = '下拉刷新';

        var delegateId = getDelegateId();
        if ($scope.delegateId) {
          delegateId = $scope.delegateId;
        }

        $scope.width = $scope.width ? widthAndHeightCoerce($scope.width) : '100%';
        $scope.height = $scope.height ? widthAndHeightCoerce($scope.height) : '100%';

        var container = undefined;
        var content = undefined;
        var scroller = undefined;
        var pullToRefreshLayer = undefined;
        var mousedown = false;
        var infiniteTimer = undefined;
        var scrollbottom = false;

        function resize() {
          scroller.setDimensions(container.clientWidth, container.clientHeight, content.offsetWidth, content.offsetHeight);
        }

        function finishPullToRefresh() {
          scroller.finishPullToRefresh();
          setTimeout(resize);
        }

        function triggerPullToRefresh() {
          scroller.triggerPullToRefresh();
        }

        function scrollTo(x, y, animate) {
          scroller.scrollTo(x, y, animate);
        }

        function scrollBy(x, y, animate) {
          scroller.scrollBy(x, y, animate);
        }

        $scope.touchStart = function (e) {
          // Don't react if initial down happens on a form element
          if (e.target.tagName.match(/input|textarea|select/i)) {
            return;
          }

          scroller.doTouchStart(e.touches, e.timeStamp);
        };

        $scope.touchMove = function (e) {
          e.preventDefault();
          scroller.doTouchMove(e.touches, e.timeStamp);
        };

        $scope.touchEnd = function (e) {
          scroller.doTouchEnd(e.timeStamp);
        };

        $scope.mouseDown = function (e) {
          // Don't react if initial down happens on a form element
          if (e.target.tagName.match(/input|textarea|select/i)) {
            return;
          }

          scroller.doTouchStart([{
            pageX: e.pageX,
            pageY: e.pageY
          }], e.timeStamp);

          mousedown = true;
        };

        $scope.mouseMove = function (e) {
          e.preventDefault();
          if (!mousedown) {
            return;
          }

          scroller.doTouchMove([{
            pageX: e.pageX,
            pageY: e.pageY
          }], e.timeStamp);

          mousedown = true;
        };

        $scope.mouseUp = function (e) {
          if (!mousedown) {
            return;
          }
          scroller.doTouchEnd(e.timeStamp);
          mousedown = false;
        };

        // 初始化
        function init() {
          container = document.getElementById($scope.containerId);
          container.style.width = $scope.width;
          container.style.height = $scope.height;
          content = document.getElementById($scope.contentId);
          pullToRefreshLayer = content.getElementsByTagName("div")[0];
          var render = getContentRender(content);
          scroller = new Scroller(render, {
            scrollingX: false
          });

          // enable PullToRefresh
          if ($scope.onRefresh) {
            scroller.activatePullToRefresh(60, function () {
              $scope.state = 1;
            }, function () {
              $scope.state = 0;
            }, function () {
              $scope.state = 2;
              $scope.$on('$finishPullToRefresh', function () {
                setTimeout(function () {
                  $scope.state = 0;
                  finishPullToRefresh()
                })
              });
              $scope.onRefresh();
            })
          }

          // enable infinite loading
          if ($scope.onInfinite) {
            infiniteTimer = setInterval(function () {
              var v = scroller.getValues();
              if (v.top + 60 > content.offsetHeight - container.clientHeight) {
                if (scrollbottom) return;
                scrollbottom = true;
                $scope.showLoading = true;
                $scope.$digest();
                $scope.onInfinite();
                setTimeout(function () {
                  scrollbottom = false;
                }, 1500)
              }
            }, 10);
          }

          // setup scroller
          var rect = container.getBoundingClientRect();
          scroller.setPosition(rect.left + container.clientLeft, rect.top + container.clientTop);
          var delegate = {
            resize: resize,
            finishPullToRefresh: finishPullToRefresh,
            triggerPullToRefresh: triggerPullToRefresh,
            scrollTo: scrollTo,
            scrollBy: scrollBy
          };
          window.$scroller.add(delegateId, delegate);
          // console.log(delegateId, delegate, window.$scroller);
        }

        $timeout(init);

        $scope.$on('$destroy', function () {
          if (infiniteTimer)
            clearInterval(infiniteTimer);

          window.$scroller.del(delegateId)
        });

      }],
      template: Templates['scroll']
    }
  }])
;
