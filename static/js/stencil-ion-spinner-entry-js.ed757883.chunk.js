(this["webpackJsonpphoto-gallery-capacitor-react"]=this["webpackJsonpphoto-gallery-capacitor-react"]||[]).push([[37],{161:function(t,e,r){"use strict";r.r(e),r.d(e,"ion_spinner",(function(){return f}));var n=r(17),i=r(5),s=r(6),a=r(18),o=r(14),c=r(189),l=r(193),f=function(){function t(e){Object(i.a)(this,t),Object(a.l)(this,e),this.paused=!1}return Object(s.a)(t,[{key:"getName",value:function(){var t=this.name||o.c.get("spinner"),e=Object(o.b)(this);return t||("ios"===e?"lines":"circular")}},{key:"render",value:function(){var t,e=Object(o.b)(this),r=this.getName(),i=l.a[r]||l.a.lines,s="number"===typeof this.duration&&this.duration>10?this.duration:i.dur,f=[];if(void 0!==i.circles)for(var m=0;m<i.circles;m++)f.push(u(i,s,m,i.circles));else if(void 0!==i.lines)for(var d=0;d<i.lines;d++)f.push(p(i,s,d,i.lines));return Object(a.j)(a.b,{class:Object.assign(Object.assign({},Object(c.a)(this.color)),(t={},Object(n.a)(t,e,!0),Object(n.a)(t,"spinner-".concat(r),!0),Object(n.a)(t,"spinner-paused",!!this.paused||o.c.getBoolean("_testing")),t)),role:"progressbar",style:i.elmDuration?{animationDuration:s+"ms"}:{}},f)}}]),t}(),u=function(t,e,r,n){var i=t.fn(e,r,n);return i.style["animation-duration"]=e+"ms",Object(a.j)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(a.j)("circle",{transform:i.transform||"translate(32,32)",cx:i.cx,cy:i.cy,r:i.r,style:t.elmDuration?{animationDuration:e+"ms"}:{}}))},p=function(t,e,r,n){var i=t.fn(e,r,n);return i.style["animation-duration"]=e+"ms",Object(a.j)("svg",{viewBox:i.viewBox||"0 0 64 64",style:i.style},Object(a.j)("line",{transform:"translate(32,32)",y1:i.y1,y2:i.y2}))};f.style=":host{display:inline-block;position:relative;width:28px;height:28px;color:var(--color);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}:host(.ion-color){color:var(--ion-color-base)}svg{left:0;top:0;-webkit-transform-origin:center;transform-origin:center;position:absolute;width:100%;height:100%;-webkit-transform:translateZ(0);transform:translateZ(0)}[dir=rtl] svg,:host-context([dir=rtl]) svg{left:unset;right:unset;right:0}[dir=rtl] svg,:host-context([dir=rtl]) svg{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}:host(.spinner-lines) line,:host(.spinner-lines-small) line{stroke-width:4px;stroke-linecap:round;stroke:currentColor}:host(.spinner-lines) svg,:host(.spinner-lines-small) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite}:host(.spinner-bubbles) svg{-webkit-animation:spinner-scale-out 1s linear infinite;animation:spinner-scale-out 1s linear infinite;fill:currentColor}:host(.spinner-circles) svg{-webkit-animation:spinner-fade-out 1s linear infinite;animation:spinner-fade-out 1s linear infinite;fill:currentColor}:host(.spinner-crescent) circle{fill:transparent;stroke-width:4px;stroke-dasharray:128px;stroke-dashoffset:82px;stroke:currentColor}:host(.spinner-crescent) svg{-webkit-animation:spinner-rotate 1s linear infinite;animation:spinner-rotate 1s linear infinite}:host(.spinner-dots) circle{stroke-width:0;fill:currentColor}:host(.spinner-dots) svg{-webkit-animation:spinner-dots 1s linear infinite;animation:spinner-dots 1s linear infinite}:host(.spinner-circular){-webkit-animation:spinner-circular linear infinite;animation:spinner-circular linear infinite}:host(.spinner-circular) circle{-webkit-animation:spinner-circular-inner ease-in-out infinite;animation:spinner-circular-inner ease-in-out infinite;stroke:currentColor;stroke-dasharray:80px, 200px;stroke-dashoffset:0px;stroke-width:5.6;fill:none}:host(.spinner-paused),:host(.spinner-paused) svg,:host(.spinner-paused) circle{-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@keyframes spinner-fade-out{0%{opacity:1}100%{opacity:0}}@-webkit-keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@keyframes spinner-scale-out{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1)}100%{-webkit-transform:scale(0, 0);transform:scale(0, 0)}}@-webkit-keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-rotate{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@keyframes spinner-dots{0%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}50%{-webkit-transform:scale(0.4, 0.4);transform:scale(0.4, 0.4);opacity:0.3}100%{-webkit-transform:scale(1, 1);transform:scale(1, 1);opacity:0.9}}@-webkit-keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes spinner-circular{100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@-webkit-keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}@keyframes spinner-circular-inner{0%{stroke-dasharray:1px, 200px;stroke-dashoffset:0px}50%{stroke-dasharray:100px, 200px;stroke-dashoffset:-15px}100%{stroke-dasharray:100px, 200px;stroke-dashoffset:-125px}}"},189:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return l})),r.d(e,"c",(function(){return o})),r.d(e,"d",(function(){return u}));var n=r(1),i=r.n(n),s=r(3),a=r(17),o=function(t,e){return null!==e.closest(t)},c=function(t){return"string"===typeof t&&t.length>0?Object(a.a)({"ion-color":!0},"ion-color-".concat(t),!0):void 0},l=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},f=/^[a-z][a-z0-9+\-.]*:/,u=function(){var t=Object(s.a)(i.a.mark((function t(e,r,n){var s;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null==e||"#"===e[0]||f.test(e)){t.next=5;break}if(!(s=document.querySelector("ion-router"))){t.next=5;break}return null!=r&&r.preventDefault(),t.abrupt("return",s.push(e,n));case 5:return t.abrupt("return",!1);case 6:case"end":return t.stop()}}),t)})));return function(e,r,n){return t.apply(this,arguments)}}()},193:function(t,e,r){"use strict";r.d(e,"a",(function(){return n}));var n={bubbles:{dur:1e3,circles:9,fn:function(t,e,r){var n="".concat(t*e/r-t,"ms"),i=2*Math.PI*e/r;return{r:5,style:{top:"".concat(9*Math.sin(i),"px"),left:"".concat(9*Math.cos(i),"px"),"animation-delay":n}}}},circles:{dur:1e3,circles:8,fn:function(t,e,r){var n=e/r,i="".concat(t*n-t,"ms"),s=2*Math.PI*n;return{r:5,style:{top:"".concat(9*Math.sin(s),"px"),left:"".concat(9*Math.cos(s),"px"),"animation-delay":i}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:function(){return{r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}}}},crescent:{dur:750,circles:1,fn:function(){return{r:26,style:{}}}},dots:{dur:750,circles:3,fn:function(t,e){var r=-110*e+"ms";return{r:6,style:{left:"".concat(9-9*e,"px"),"animation-delay":r}}}},lines:{dur:1e3,lines:12,fn:function(t,e,r){return{y1:17,y2:29,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(t*e/r-t,"ms")}}}},"lines-small":{dur:1e3,lines:12,fn:function(t,e,r){return{y1:12,y2:20,style:{transform:"rotate(".concat(30*e+(e<6?180:-180),"deg)"),"animation-delay":"".concat(t*e/r-t,"ms")}}}}}}}]);
//# sourceMappingURL=stencil-ion-spinner-entry-js.ed757883.chunk.js.map