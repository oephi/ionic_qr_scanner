(this["webpackJsonpphoto-gallery-capacitor-react"]=this["webpackJsonpphoto-gallery-capacitor-react"]||[]).push([[36],{151:function(t,n,a){"use strict";a.r(n),a.d(n,"ion_ripple_effect",(function(){return u}));var i=a(17),e=a(1),o=a.n(e),r=a(3),c=a(5),s=a(6),f=a(18),l=a(14),u=function(){function t(n){Object(c.a)(this,t),Object(f.l)(this,n),this.type="bounded"}return Object(s.a)(t,[{key:"addRipple",value:function(){var t=Object(r.a)(o.a.mark((function t(n,a){var i=this;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",new Promise((function(t){Object(f.h)((function(){var e=i.el.getBoundingClientRect(),o=e.width,r=e.height,c=Math.sqrt(o*o+r*r),s=Math.max(r,o),l=i.unbounded?s:c+p,u=Math.floor(s*d),b=l/u,h=n-e.left,w=a-e.top;i.unbounded&&(h=.5*o,w=.5*r);var y=h-.5*u,k=w-.5*u,v=.5*o-h,g=.5*r-w;Object(f.n)((function(){var n=document.createElement("div");n.classList.add("ripple-effect");var a=n.style;a.top=k+"px",a.left=y+"px",a.width=a.height=u+"px",a.setProperty("--final-scale","".concat(b)),a.setProperty("--translate-end","".concat(v,"px, ").concat(g,"px")),(i.el.shadowRoot||i.el).appendChild(n),setTimeout((function(){t((function(){m(n)}))}),325)}))}))})));case 1:case"end":return t.stop()}}),t)})));return function(n,a){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t,n=Object(l.b)(this);return Object(f.j)(f.b,{role:"presentation",class:(t={},Object(i.a)(t,n,!0),Object(i.a)(t,"unbounded",this.unbounded),t)})}},{key:"unbounded",get:function(){return"unbounded"===this.type}},{key:"el",get:function(){return Object(f.g)(this)}}]),t}(),m=function(t){t.classList.add("fade-out"),setTimeout((function(){t.remove()}),200)},p=10,d=.5;u.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);
//# sourceMappingURL=stencil-ion-ripple-effect-entry-js.0e626143.chunk.js.map