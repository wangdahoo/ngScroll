!function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){n(4),window.$scroller=n(5);var o=n(7),i=n(6),r=n(8);angular.module("ngTouch",[]).directive("ngTouchstart",function(){return{controller:["$scope","$element",function(e,t){function n(n){var o=t.attr("ng-touchstart");e.$event=n,e.$apply(o)}t.bind("touchstart",n)}]}}).directive("ngTouchmove",function(){return{controller:["$scope","$element",function(e,t){function n(e){e.preventDefault(),t.bind("touchmove",o),t.bind("touchend",i)}function o(n){var o=t.attr("ng-touchmove");e.$event=n,e.$apply(o)}function i(e){e.preventDefault(),t.unbind("touchmove",o),t.unbind("touchend",i)}t.bind("touchstart",n)}]}}).directive("ngTouchend",function(){return{controller:["$scope","$element",function(e,t){function n(n){var o=t.attr("ng-touchend");e.$event=n,e.$apply(o)}t.bind("touchend",n)}]}}),angular.module("svg",[]).directive("spinner",[function(){return{restrict:"AE",template:r.spinner}}]).directive("arrow",[function(){return{restrict:"AE",template:r.arrow}}]),angular.module("ngScroll",["ngTouch","svg"]).directive("scroll",[function(){function e(e){if(!t(e))throw"非法的width或height";return"%"!=e[e.length-1]?e+"px":e}function t(e){return/^[\d]+\%?$/.test(e)}function n(){return"vs_"+Math.random().toString(36).substr(3,8)}return{restrict:"E",transclude:!0,replace:!0,scope:{onRefresh:"=onRefresh",onInfinite:"=onInfinite",delegateId:"=delegateId"},controller:["$scope","$timeout",function(t,r){function a(){g.setDimensions(f.clientWidth,f.clientHeight,h.offsetWidth,h.offsetHeight)}function l(){g.finishPullToRefresh(),setTimeout(a)}function s(){g.triggerPullToRefresh()}function c(e,t,n){g.scrollTo(e,t,n)}function _(e,t,n){g.scrollBy(e,t,n)}function u(){f=document.getElementById(t.containerId),f.style.width=t.width,f.style.height=t.height,h=document.getElementById(t.contentId),m=h.getElementsByTagName("div")[0];var e=o(h);g=new i(e,{scrollingX:!1}),t.onRefresh&&g.activatePullToRefresh(60,function(){t.state=1},function(){t.state=0},function(){t.state=2,t.$on("$finishPullToRefresh",function(){setTimeout(function(){t.state=0,l()})}),t.onRefresh()}),t.onInfinite&&(v=setInterval(function(){var e=g.getValues();if(e.top+60>h.offsetHeight-f.clientHeight){if(y)return;y=!0,t.showLoading=!0,t.$digest(),t.onInfinite(),setTimeout(function(){y=!1},1500)}},10));var n=f.getBoundingClientRect();g.setPosition(n.left+f.clientLeft,n.top+f.clientTop);var r={resize:a,finishPullToRefresh:l,triggerPullToRefresh:s,scrollTo:c,scrollBy:_};window.$scroller.add(p,r)}t.containerId=Math.random().toString(36).substring(3,8),t.contentId=Math.random().toString(36).substring(3,8),t.state=0,t.showLoading=!1,t.refreshText="下拉刷新";var p=n();t.delegateId&&(p=t.delegateId),t.width=t.width?e(t.width):"100%",t.height=t.height?e(t.height):"100%";var f=void 0,h=void 0,g=void 0,m=void 0,d=!1,v=void 0,y=!1;t.touchStart=function(e){e.target.tagName.match(/input|textarea|select/i)||g.doTouchStart(e.touches,e.timeStamp)},t.touchMove=function(e){e.preventDefault(),g.doTouchMove(e.touches,e.timeStamp)},t.touchEnd=function(e){g.doTouchEnd(e.timeStamp)},t.mouseDown=function(e){e.target.tagName.match(/input|textarea|select/i)||(g.doTouchStart([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),d=!0)},t.mouseMove=function(e){e.preventDefault(),d&&(g.doTouchMove([{pageX:e.pageX,pageY:e.pageY}],e.timeStamp),d=!0)},t.mouseUp=function(e){d&&(g.doTouchEnd(e.timeStamp),d=!1)},r(u),t.$on("$destroy",function(){v&&clearInterval(v),window.$scroller.del(p)})}],template:r.scroll}}])},function(e,t,n){t=e.exports=n(2)(),t.push([e.id,"._v-container{-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%;height:100%;position:absolute;top:0;left:0;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;-o-user-select:none;user-select:none}._v-container>._v-content{width:100%;-webkit-transform-origin:left top;-webkit-transform:translateZ(0);-moz-transform-origin:left top;-moz-transform:translateZ(0);-ms-transform-origin:left top;-ms-transform:translateZ(0);-o-transform-origin:left top;-o-transform:translateZ(0);transform-origin:left top;transform:translateZ(0)}._v-container>._v-content>.pull-to-refresh-layer{width:100%;height:60px;margin-top:-60px;text-align:center;font-size:16px;color:#ccc}._v-container>._v-content>.loading-layer{width:100%;height:60px;text-align:center;font-size:16px;line-height:60px;color:#ccc;opacity:0;transition:opacity .15s linear;-webkit-transition:opacity .15s linear}._v-container>._v-content>.loading-layer.active{opacity:1}._v-container>._v-content>.loading-layer .spinner-holder,._v-container>._v-content>.pull-to-refresh-layer .spinner-holder{text-align:center;-webkit-font-smoothing:antialiased}._v-container>._v-content>.loading-layer .spinner-holder .arrow,._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .arrow{width:20px;height:20px;margin:8px auto 0;-webkit-transform:translateZ(0) rotate(0deg);transform:translateZ(0) rotate(0deg);-webkit-transition:-webkit-transform .2s linear;transition:transform .2s linear}._v-container>._v-content>.loading-layer .spinner-holder .text,._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .text{display:block;margin:0 auto;font-size:14px;line-height:20px;color:#aaa}._v-container>._v-content>.loading-layer .spinner-holder .spinner,._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .spinner{margin-top:14px;width:32px;height:32px;fill:#444;stroke:#69717d}._v-container>._v-content>.pull-to-refresh-layer.active .spinner-holder .arrow{-webkit-transform:translateZ(0) rotate(180deg);transform:translateZ(0) rotate(180deg)}",""])},function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=f[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(c(o.parts[r],t));f[o.id]={id:o.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],a=i[1],l=i[2],s=i[3],c={css:a,media:l,sourceMap:s};n[r]?n[r].parts.push(c):t.push(n[r]={id:r,parts:[c]})}return t}function r(e,t){var n=m(),o=y[y.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),y.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=y.indexOf(e);t>=0&&y.splice(t,1)}function l(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function s(e){var t=document.createElement("link");return t.rel="stylesheet",r(e,t),t}function c(e,t){var n,o,i;if(t.singleton){var r=v++;n=d||(d=l(t)),o=_.bind(null,n,r,!1),i=_.bind(null,n,r,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=s(t),o=p.bind(null,n),i=function(){a(n),n.href&&URL.revokeObjectURL(n.href)}):(n=l(t),o=u.bind(null,n),i=function(){a(n)});return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function _(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=T(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function u(e,t){var n=t.css,o=t.media;if(o&&e.setAttribute("media",o),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function p(e,t){var n=t.css,o=t.sourceMap;o&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([n],{type:"text/css"}),r=e.href;e.href=URL.createObjectURL(i),r&&URL.revokeObjectURL(r)}var f={},h=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},g=h(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),m=h(function(){return document.head||document.getElementsByTagName("head")[0]}),d=null,v=0,y=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=g()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var l=n[a],s=f[l.id];s.refs--,r.push(s)}if(e){var c=i(e);o(c,t)}for(var a=0;a<r.length;a++){var s=r[a];if(0===s.refs){for(var _=0;_<s.parts.length;_++)s.parts[_]();delete f[s.id]}}}};var T=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t,n){var o=n(1);"string"==typeof o&&(o=[[e.id,o,""]]);n(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,n){var o;!function(i){function r(){this.scrollers={},this.name="vue_scroller_accessor"}r.prototype.add=function(e,t){if(e in this.scrollers&&document.querySelector("["+e+"]"))throw"添加scroller失败, 重复的 scroller id";this.scrollers[e]=t},r.prototype.delegate=r.prototype.get=function(e){return e in this.scrollers?this.scrollers[e]:void 0},r.prototype.del=function(e){if(!(e in this.scrollers))throw"删除scroller失败, scroller id ["+e+"] 不存在";delete this.scrollers[e]};var a=new r;"undefined"!=typeof e&&e.exports?e.exports=a:(o=function(){return a}.call(t,n,t,e),!(void 0!==o&&(e.exports=o)))}(window)},function(e,t,n){var o;!function(e){var t=Date.now||function(){return+new Date},n=60,o=1e3,i={},r=1;e.core?core.effect||(core.effect={}):e.core={effect:{}},core.effect.Animate={requestAnimationFrame:function(){var t=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame,n=!!t;if(t&&!/requestAnimationFrame\(\)\s*\{\s*\[native code\]\s*\}/i.test(t.toString())&&(n=!1),n)return function(e,n){t(e,n)};var o=60,i={},r=0,a=1,l=null,s=+new Date;return function(e,t){var n=a++;return i[n]=e,r++,null===l&&(l=setInterval(function(){var e=+new Date,t=i;i={},r=0;for(var n in t)t.hasOwnProperty(n)&&(t[n](e),s=e);e-s>2500&&(clearInterval(l),l=null)},1e3/o)),n}}(),stop:function(e){var t=null!=i[e];return t&&(i[e]=null),t},isRunning:function(e){return null!=i[e]},start:function(e,a,l,s,c,_){var u=t(),p=u,f=0,h=0,g=r++;if(_||(_=document.body),g%20===0){var m={};for(var d in i)m[d]=!0;i=m}var v=function(r){var m=r!==!0,d=t();if(!i[g]||a&&!a(g))return i[g]=null,void(l&&l(n-h/((d-u)/o),g,!1));if(m)for(var y=Math.round((d-p)/(o/n))-1,T=0;T<Math.min(y,4);T++)v(!0),h++;s&&(f=(d-u)/s,f>1&&(f=1));var x=c?c(f):f;e(x,d,m)!==!1&&1!==f||!m?m&&(p=d,core.effect.Animate.requestAnimationFrame(v,_)):(i[g]=null,l&&l(n-h/((d-u)/o),g,1===f||null==s))};return i[g]=!0,core.effect.Animate.requestAnimationFrame(v,_),g}}}(window);var i;!function(r){var a=function(){};i=function(e,t){this.__callback=e,this.options={scrollingX:!0,scrollingY:!0,animating:!0,animationDuration:250,bouncing:!0,locking:!0,paging:!1,snapping:!1,zooming:!1,minZoom:.5,maxZoom:3,speedMultiplier:1,scrollingComplete:a,penetrationDeceleration:.03,penetrationAcceleration:.08};for(var n in t)this.options[n]=t[n]};var l=function(e){return Math.pow(e-1,3)+1},s=function(e){return(e/=.5)<1?.5*Math.pow(e,3):.5*(Math.pow(e-2,3)+2)},c={__isSingleTouch:!1,__isTracking:!1,__didDecelerationComplete:!1,__isGesturing:!1,__isDragging:!1,__isDecelerating:!1,__isAnimating:!1,__clientLeft:0,__clientTop:0,__clientWidth:0,__clientHeight:0,__contentWidth:0,__contentHeight:0,__snapWidth:100,__snapHeight:100,__refreshHeight:null,__refreshActive:!1,__refreshActivate:null,__refreshDeactivate:null,__refreshStart:null,__zoomLevel:1,__scrollLeft:0,__scrollTop:0,__maxScrollLeft:0,__maxScrollTop:0,__scheduledLeft:0,__scheduledTop:0,__scheduledZoom:0,__lastTouchLeft:null,__lastTouchTop:null,__lastTouchMove:null,__positions:null,__minDecelerationScrollLeft:null,__minDecelerationScrollTop:null,__maxDecelerationScrollLeft:null,__maxDecelerationScrollTop:null,__decelerationVelocityX:null,__decelerationVelocityY:null,setDimensions:function(e,t,n,o){var i=this;e===+e&&(i.__clientWidth=e),t===+t&&(i.__clientHeight=t),n===+n&&(i.__contentWidth=n),o===+o&&(i.__contentHeight=o),i.__computeScrollMax(),i.scrollTo(i.__scrollLeft,i.__scrollTop,!0)},setPosition:function(e,t){var n=this;n.__clientLeft=e||0,n.__clientTop=t||0},setSnapSize:function(e,t){var n=this;n.__snapWidth=e,n.__snapHeight=t},activatePullToRefresh:function(e,t,n,o){var i=this;i.__refreshHeight=e,i.__refreshActivate=t,i.__refreshDeactivate=n,i.__refreshStart=o},triggerPullToRefresh:function(){this.__publish(this.__scrollLeft,-this.__refreshHeight,this.__zoomLevel,!0),this.__refreshStart&&this.__refreshStart()},finishPullToRefresh:function(){var e=this;e.__refreshActive=!1,e.__refreshDeactivate&&e.__refreshDeactivate(),e.scrollTo(e.__scrollLeft,e.__scrollTop,!0)},getValues:function(){var e=this;return{left:e.__scrollLeft,top:e.__scrollTop,zoom:e.__zoomLevel}},getScrollMax:function(){var e=this;return{left:e.__maxScrollLeft,top:e.__maxScrollTop}},zoomTo:function(e,t,n,o,i){var r=this;if(!r.options.zooming)throw new Error("Zooming is not enabled!");i&&(r.__zoomComplete=i),r.__isDecelerating&&(core.effect.Animate.stop(r.__isDecelerating),r.__isDecelerating=!1);var a=r.__zoomLevel;null==n&&(n=r.__clientWidth/2),null==o&&(o=r.__clientHeight/2),e=Math.max(Math.min(e,r.options.maxZoom),r.options.minZoom),r.__computeScrollMax(e);var l=(n+r.__scrollLeft)*e/a-n,s=(o+r.__scrollTop)*e/a-o;l>r.__maxScrollLeft?l=r.__maxScrollLeft:l<0&&(l=0),s>r.__maxScrollTop?s=r.__maxScrollTop:s<0&&(s=0),r.__publish(l,s,e,t)},zoomBy:function(e,t,n,o,i){var r=this;r.zoomTo(r.__zoomLevel*e,t,n,o,i)},scrollTo:function(e,t,n,o){var i=this;if(i.__isDecelerating&&(core.effect.Animate.stop(i.__isDecelerating),i.__isDecelerating=!1),null!=o&&o!==i.__zoomLevel){if(!i.options.zooming)throw new Error("Zooming is not enabled!");e*=o,t*=o,i.__computeScrollMax(o)}else o=i.__zoomLevel;i.options.scrollingX?i.options.paging?e=Math.round(e/i.__clientWidth)*i.__clientWidth:i.options.snapping&&(e=Math.round(e/i.__snapWidth)*i.__snapWidth):e=i.__scrollLeft,i.options.scrollingY?i.options.paging?t=Math.round(t/i.__clientHeight)*i.__clientHeight:i.options.snapping&&(t=Math.round(t/i.__snapHeight)*i.__snapHeight):t=i.__scrollTop,e=Math.max(Math.min(i.__maxScrollLeft,e),0),t=Math.max(Math.min(i.__maxScrollTop,t),0),e===i.__scrollLeft&&t===i.__scrollTop&&(n=!1),i.__isTracking||i.__publish(e,t,o,n)},scrollBy:function(e,t,n){var o=this,i=o.__isAnimating?o.__scheduledLeft:o.__scrollLeft,r=o.__isAnimating?o.__scheduledTop:o.__scrollTop;o.scrollTo(i+(e||0),r+(t||0),n)},doMouseZoom:function(e,t,n,o){var i=this,r=e>0?.97:1.03;return i.zoomTo(i.__zoomLevel*r,!1,n-i.__clientLeft,o-i.__clientTop)},doTouchStart:function(e,t){if(null==e.length)throw new Error("Invalid touch list: "+e);if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);var n=this;n.__interruptedAnimation=!0,n.__isDecelerating&&(core.effect.Animate.stop(n.__isDecelerating),n.__isDecelerating=!1,n.__interruptedAnimation=!0),n.__isAnimating&&(core.effect.Animate.stop(n.__isAnimating),n.__isAnimating=!1,n.__interruptedAnimation=!0);var o,i,r=1===e.length;r?(o=e[0].pageX,i=e[0].pageY):(o=Math.abs(e[0].pageX+e[1].pageX)/2,i=Math.abs(e[0].pageY+e[1].pageY)/2),n.__initialTouchLeft=o,n.__initialTouchTop=i,n.__zoomLevelStart=n.__zoomLevel,n.__lastTouchLeft=o,n.__lastTouchTop=i,n.__lastTouchMove=t,n.__lastScale=1,n.__enableScrollX=!r&&n.options.scrollingX,n.__enableScrollY=!r&&n.options.scrollingY,n.__isTracking=!0,n.__didDecelerationComplete=!1,n.__isDragging=!r,n.__isSingleTouch=r,n.__positions=[]},doTouchMove:function(e,t,n){if(null==e.length)throw new Error("Invalid touch list: "+e);if(t instanceof Date&&(t=t.valueOf()),"number"!=typeof t)throw new Error("Invalid timestamp value: "+t);var o=this;if(o.__isTracking){var i,r;2===e.length?(i=Math.abs(e[0].pageX+e[1].pageX)/2,r=Math.abs(e[0].pageY+e[1].pageY)/2):(i=e[0].pageX,r=e[0].pageY);var a=o.__positions;if(o.__isDragging){var l=i-o.__lastTouchLeft,s=r-o.__lastTouchTop,c=o.__scrollLeft,_=o.__scrollTop,u=o.__zoomLevel;if(null!=n&&o.options.zooming){var p=u;if(u=u/o.__lastScale*n,u=Math.max(Math.min(u,o.options.maxZoom),o.options.minZoom),p!==u){var f=i-o.__clientLeft,h=r-o.__clientTop;c=(f+c)*u/p-f,_=(h+_)*u/p-h,o.__computeScrollMax(u)}}if(o.__enableScrollX){c-=l*this.options.speedMultiplier;var g=o.__maxScrollLeft;(c>g||c<0)&&(o.options.bouncing?c+=l/2*this.options.speedMultiplier:c=c>g?g:0)}if(o.__enableScrollY){_-=s*this.options.speedMultiplier;var m=o.__maxScrollTop;(_>m||_<0)&&(o.options.bouncing?(_+=s/2*this.options.speedMultiplier,o.__enableScrollX||null==o.__refreshHeight||(!o.__refreshActive&&_<=-o.__refreshHeight?(o.__refreshActive=!0,o.__refreshActivate&&o.__refreshActivate()):o.__refreshActive&&_>-o.__refreshHeight&&(o.__refreshActive=!1,o.__refreshDeactivate&&o.__refreshDeactivate()))):_=_>m?m:0)}a.length>60&&a.splice(0,30),a.push(c,_,t),o.__publish(c,_,u)}else{var d=o.options.locking?3:0,v=5,y=Math.abs(i-o.__initialTouchLeft),T=Math.abs(r-o.__initialTouchTop);o.__enableScrollX=o.options.scrollingX&&y>=d,o.__enableScrollY=o.options.scrollingY&&T>=d,a.push(o.__scrollLeft,o.__scrollTop,t),o.__isDragging=(o.__enableScrollX||o.__enableScrollY)&&(y>=v||T>=v),o.__isDragging&&(o.__interruptedAnimation=!1)}o.__lastTouchLeft=i,o.__lastTouchTop=r,o.__lastTouchMove=t,o.__lastScale=n}},doTouchEnd:function(e){if(e instanceof Date&&(e=e.valueOf()),"number"!=typeof e)throw new Error("Invalid timestamp value: "+e);var t=this;if(t.__isTracking){if(t.__isTracking=!1,t.__isDragging)if(t.__isDragging=!1,t.__isSingleTouch&&t.options.animating&&e-t.__lastTouchMove<=100){for(var n=t.__positions,o=n.length-1,i=o,r=o;r>0&&n[r]>t.__lastTouchMove-100;r-=3)i=r;if(i!==o){var a=n[o]-n[i],l=t.__scrollLeft-n[i-2],s=t.__scrollTop-n[i-1];t.__decelerationVelocityX=l/a*(1e3/60),t.__decelerationVelocityY=s/a*(1e3/60);var c=t.options.paging||t.options.snapping?4:1;Math.abs(t.__decelerationVelocityX)>c||Math.abs(t.__decelerationVelocityY)>c?t.__refreshActive||t.__startDeceleration(e):t.options.scrollingComplete()}else t.options.scrollingComplete()}else e-t.__lastTouchMove>100&&t.options.scrollingComplete();t.__isDecelerating||(t.__refreshActive&&t.__refreshStart?(t.__publish(t.__scrollLeft,-t.__refreshHeight,t.__zoomLevel,!0),t.__refreshStart&&t.__refreshStart()):((t.__interruptedAnimation||t.__isDragging)&&t.options.scrollingComplete(),t.scrollTo(t.__scrollLeft,t.__scrollTop,!0,t.__zoomLevel),t.__refreshActive&&(t.__refreshActive=!1,t.__refreshDeactivate&&t.__refreshDeactivate()))),t.__positions.length=0}},__publish:function(e,t,n,o){var i=this,r=i.__isAnimating;if(r&&(core.effect.Animate.stop(r),i.__isAnimating=!1),o&&i.options.animating){i.__scheduledLeft=e,i.__scheduledTop=t,i.__scheduledZoom=n;var a=i.__scrollLeft,c=i.__scrollTop,_=i.__zoomLevel,u=e-a,p=t-c,f=n-_,h=function(e,t,n){n&&(i.__scrollLeft=a+u*e,i.__scrollTop=c+p*e,i.__zoomLevel=_+f*e,i.__callback&&i.__callback(i.__scrollLeft,i.__scrollTop,i.__zoomLevel))},g=function(e){return i.__isAnimating===e},m=function(e,t,n){t===i.__isAnimating&&(i.__isAnimating=!1),(i.__didDecelerationComplete||n)&&i.options.scrollingComplete(),i.options.zooming&&(i.__computeScrollMax(),i.__zoomComplete&&(i.__zoomComplete(),i.__zoomComplete=null))};i.__isAnimating=core.effect.Animate.start(h,g,m,i.options.animationDuration,r?l:s)}else i.__scheduledLeft=i.__scrollLeft=e,i.__scheduledTop=i.__scrollTop=t,i.__scheduledZoom=i.__zoomLevel=n,i.__callback&&i.__callback(e,t,n),i.options.zooming&&(i.__computeScrollMax(),i.__zoomComplete&&(i.__zoomComplete(),i.__zoomComplete=null))},__computeScrollMax:function(e){var t=this;null==e&&(e=t.__zoomLevel),t.__maxScrollLeft=Math.max(t.__contentWidth*e-t.__clientWidth,0),t.__maxScrollTop=Math.max(t.__contentHeight*e-t.__clientHeight,0)},__startDeceleration:function(e){var t=this;if(t.options.paging){var n=Math.max(Math.min(t.__scrollLeft,t.__maxScrollLeft),0),o=Math.max(Math.min(t.__scrollTop,t.__maxScrollTop),0),i=t.__clientWidth,r=t.__clientHeight;t.__minDecelerationScrollLeft=Math.floor(n/i)*i,t.__minDecelerationScrollTop=Math.floor(o/r)*r,t.__maxDecelerationScrollLeft=Math.ceil(n/i)*i,t.__maxDecelerationScrollTop=Math.ceil(o/r)*r}else t.__minDecelerationScrollLeft=0,t.__minDecelerationScrollTop=0,t.__maxDecelerationScrollLeft=t.__maxScrollLeft,t.__maxDecelerationScrollTop=t.__maxScrollTop;var a=function(e,n,o){t.__stepThroughDeceleration(o)},l=t.options.snapping?4:.001,s=function(){var e=Math.abs(t.__decelerationVelocityX)>=l||Math.abs(t.__decelerationVelocityY)>=l;return e||(t.__didDecelerationComplete=!0),e},c=function(e,n,o){t.__isDecelerating=!1,t.__didDecelerationComplete&&t.options.scrollingComplete(),t.scrollTo(t.__scrollLeft,t.__scrollTop,t.options.snapping)};t.__isDecelerating=core.effect.Animate.start(a,s,c)},__stepThroughDeceleration:function(e){var t=this,n=t.__scrollLeft+t.__decelerationVelocityX,o=t.__scrollTop+t.__decelerationVelocityY;if(!t.options.bouncing){var i=Math.max(Math.min(t.__maxDecelerationScrollLeft,n),t.__minDecelerationScrollLeft);i!==n&&(n=i,t.__decelerationVelocityX=0);var r=Math.max(Math.min(t.__maxDecelerationScrollTop,o),t.__minDecelerationScrollTop);r!==o&&(o=r,t.__decelerationVelocityY=0)}if(e?t.__publish(n,o,t.__zoomLevel):(t.__scrollLeft=n,t.__scrollTop=o),!t.options.paging){var a=.95;t.__decelerationVelocityX*=a,t.__decelerationVelocityY*=a}if(t.options.bouncing){var l=0,s=0,c=t.options.penetrationDeceleration,_=t.options.penetrationAcceleration;n<t.__minDecelerationScrollLeft?l=t.__minDecelerationScrollLeft-n:n>t.__maxDecelerationScrollLeft&&(l=t.__maxDecelerationScrollLeft-n),o<t.__minDecelerationScrollTop?s=t.__minDecelerationScrollTop-o:o>t.__maxDecelerationScrollTop&&(s=t.__maxDecelerationScrollTop-o),0!==l&&(l*t.__decelerationVelocityX<=0?t.__decelerationVelocityX+=l*c:t.__decelerationVelocityX=l*_),0!==s&&(s*t.__decelerationVelocityY<=0?t.__decelerationVelocityY+=s*c:t.__decelerationVelocityY=s*_)}}};for(var _ in c)i.prototype[_]=c[_];"undefined"!=typeof e&&e.exports?e.exports=i:(o=function(){return i}.call(t,n,t,e),!(void 0!==o&&(e.exports=o)))}(window)},function(e,t,n){var o;!function(i){function r(e){var t,n=i,o=document.documentElement.style;n.opera&&"[object Opera]"===Object.prototype.toString.call(opera)?t="presto":"MozAppearance"in o?t="gecko":"WebkitAppearance"in o?t="webkit":"string"==typeof navigator.cpuClass&&(t="trident");var r,a={trident:"ms",gecko:"Moz",webkit:"Webkit",presto:"O"}[t],l=document.createElement("div"),s=a+"Perspective",c=a+"Transform";return l.style[s]!==r?function(t,n,o){e.style[c]="translate3d("+-t+"px,"+-n+"px,0) scale("+o+")"}:l.style[c]!==r?function(t,n,o){e.style[c]="translate("+-t+"px,"+-n+"px) scale("+o+")"}:function(t,n,o){e.style.marginLeft=t?-t/o+"px":"",e.style.marginTop=n?-n/o+"px":"",e.style.zoom=o||""}}"undefined"!=typeof e&&e.exports?e.exports=r:(o=function(){return r}.call(t,n,t,e),!(void 0!==o&&(e.exports=o)))}(window)},function(e,t){e.exports={scroll:'<div class="_v-container"\n     id="{{ containerId }}"\n     ng-touchstart="touchStart($event)"\n     ng-touchmove="touchMove($event)"\n     ng-touchend="touchEnd($event)"\n     ng-mousedown="mouseDown($event)"\n     ng-mousemove="mouseMove($event)"\n     ng-mouseup="mouseUp($event)"\n  >\n\n  <div class="_v-content" id="{{ contentId }}">\n    <div ng-if="onRefresh" class="pull-to-refresh-layer"\n         ng-class="{\'active\': state == 1, \'active refreshing\': state == 2}">\n        <span class="spinner-holder">\n          <arrow class="arrow" ng-if="state != 2"></arrow>\n          <span class="text" ng-if="state != 2">{{ refreshText }}</span>\n          <spinner class="spinner" ng-if="state == 2"></spinner>\n        </span>\n    </div>\n\n    <div ng-transclude></div>\n\n    <div ng-if="onInfinite" class="loading-layer" ng-class="{\'active\': showLoading}">\n        <span class="spinner-holder">\n          <spinner class="spinner"></spinner>\n        </span>\n    </div>\n  </div>\n</div>',spinner:'<svg viewBox="0 0 64 64" width="32px" height="32px" style="margin-top: 14px;">\n    <g stroke-width="4" stroke-linecap="round">\n        <line y1="17" y2="29" transform="translate(32,32) rotate(180)">\n            <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(210)">\n            <animate attributeName="stroke-opacity" dur="750ms" values="0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(240)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".1;0;1;.85;.7;.65;.55;.45;.35;.25;.15;.1"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(270)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".15;.1;0;1;.85;.7;.65;.55;.45;.35;.25;.15"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(300)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".25;.15;.1;0;1;.85;.7;.65;.55;.45;.35;.25"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(330)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".35;.25;.15;.1;0;1;.85;.7;.65;.55;.45;.35"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(0)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".45;.35;.25;.15;.1;0;1;.85;.7;.65;.55;.45"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(30)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".55;.45;.35;.25;.15;.1;0;1;.85;.7;.65;.55"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(60)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".65;.55;.45;.35;.25;.15;.1;0;1;.85;.7;.65"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(90)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".7;.65;.55;.45;.35;.25;.15;.1;0;1;.85;.7"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(120)">\n            <animate attributeName="stroke-opacity" dur="750ms" values=".85;.7;.65;.55;.45;.35;.25;.15;.1;0;1;.85"\n                     repeatCount="indefinite"></animate>\n        </line>\n        <line y1="17" y2="29" transform="translate(32,32) rotate(150)">\n            <animate attributeName="stroke-opacity" dur="750ms" values="1;.85;.7;.65;.55;.45;.35;.25;.15;.1;0;1"\n                     repeatCount="indefinite"></animate>\n        </line>\n    </g>\n</svg>\n',arrow:'<svg x="0px" y="0px" viewBox="0 0 63.657 63.657" style="enable-background:new 0 0 63.657 63.657;" xml:space="preserve" width="20px" height="20px" style="margin-top: 8px;">\n<g>\n\t<g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<polygon points="31.891,63.657 0.012,35.835 2.642,32.821 31.886,58.343 61.009,32.824 63.645,35.832     " fill="#aaaaaa"/>\n\t\t\t</g>\n\t\t</g>\n\t\t<g>\n\t\t\t<g>\n\t\t\t\t<rect x="29.827" width="4" height="60" fill="#aaaaaa"/>\n\t\t\t</g>\n\t\t</g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n\t<g>\n\t</g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n<g>\n</g>\n</svg>'}}]);