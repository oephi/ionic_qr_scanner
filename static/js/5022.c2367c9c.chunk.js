"use strict";(self.webpackChunkqr_code_scanner=self.webpackChunkqr_code_scanner||[]).push([[5022],{5022:function(e,n,t){t.r(n),t.d(n,{createSwipeBackGesture:function(){return u}});var r=t(1811),i=t(9507),a=t(7909),u=function(e,n,t,u,c){var o=e.ownerDocument.defaultView,s=(0,i.i)(e),f=function(e){return s?-e.deltaX:e.deltaX};return(0,a.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(e){return function(e){var n=e.startX;return s?n>=o.innerWidth-50:n<=50}(e)&&n()},onStart:t,onMove:function(e){var n=f(e)/o.innerWidth;u(n)},onEnd:function(e){var n=f(e),t=o.innerWidth,i=n/t,a=function(e){return s?-e.velocityX:e.velocityX}(e),u=a>=0&&(a>.2||n>t/2),d=(u?1-i:i)*t,h=0;if(d>5){var l=d/Math.abs(a);h=Math.min(l,540)}c(u,i<=0?.01:(0,r.j)(0,i,.9999),h)}})}}}]);
//# sourceMappingURL=5022.c2367c9c.chunk.js.map