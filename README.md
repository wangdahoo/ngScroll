# Angular Scroll Component ![version](https://img.shields.io/badge/release-%20v1.0.0%20-green.svg)

> smooth scrolling, pull to refresh and infinite loading, for Angular 1.x

## Demo
> see sample code in folder /demo. And checkout demo [here](https://wangdahoo.github.io/angular-scroll/)

## Quick Start
```html

  <scroll on-refresh="onRefresh"
          on-infinite="onInfinite"
          delegate-id="'myScroller'">
    <!-- content in scroller -->      
    <div class="item" ng-repeat="it in items">
      <span ng-bind="it"></span>
    </div>
  </scroll>

```

```js

// code in controller ... 

  $scope.$watch('items', function (newVal, oldVal) {
    $scope.$broadcast('$finishPullToRefresh');
    var scroller = $scroller.get('myScroller');
    if (scroller) scroller.resize();
  });
  
  $scope.onRefresh = function () {
    $timeout(function () {
      // do change items
    }, 2000);
  };
  
  $scope.onInfinite = function () {
    $timeout(function () {
      // do change items
    }, 2000);
  };

// code in controller ... 

```