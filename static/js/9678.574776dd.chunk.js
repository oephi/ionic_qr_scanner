"use strict";(self.webpackChunkqr_code_scanner=self.webpackChunkqr_code_scanner||[]).push([[9678,1325],{1325:function(t,e,n){n.r(e),n.d(e,{C:function(){return a},a:function(){return o},d:function(){return s}});var i=n(3431),r=n(9069),o=function(t,e,n,o,s,a){return(0,i.mG)(void 0,void 0,void 0,(function(){var c;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:if(t)return[2,t.attachViewToDom(e,n,s,o)];if(!a&&"string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return c="string"===typeof n?e.ownerDocument&&e.ownerDocument.createElement(n):n,o&&o.forEach((function(t){return c.classList.add(t)})),s&&Object.assign(c,s),e.appendChild(c),[4,new Promise((function(t){return(0,r.c)(c,t)}))];case 1:return i.sent(),[2,c]}}))}))},s=function(t,e){if(e){if(t){var n=e.parentElement;return t.removeViewFromDom(n,e)}e.remove()}return Promise.resolve()},a=function(){var t,e;return{attachViewToDom:function(n,o,s,a){return void 0===s&&(s={}),void 0===a&&(a=[]),(0,i.mG)(void 0,void 0,void 0,(function(){var c,u,l;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return t=n,o?(c="string"===typeof o?t.ownerDocument&&t.ownerDocument.createElement(o):o,a.forEach((function(t){return c.classList.add(t)})),Object.assign(c,s),t.appendChild(c),[4,new Promise((function(t){return(0,r.c)(c,t)}))]):[3,2];case 1:return i.sent(),[3,3];case 2:t.children.length>0&&(u=t.ownerDocument&&t.ownerDocument.createElement("div"),a.forEach((function(t){return u.classList.add(t)})),u.append.apply(u,t.children),t.appendChild(u)),i.label=3;case 3:return l=document.querySelector("ion-app")||document.body,e=document.createComment("ionic teleport"),t.parentNode.insertBefore(e,t),l.appendChild(t),[2,t]}}))}))},removeViewFromDom:function(){return t&&e&&(e.parentNode.insertBefore(t,e),e.remove()),Promise.resolve()}}}},9678:function(t,e,n){n.r(e),n.d(e,{ion_tab:function(){return s},ion_tabs:function(){return a}});var i=n(3431),r=n(5785),o=n(1325),s=function(){function t(t){(0,r.r)(this,t),this.loaded=!1,this.active=!1}return t.prototype.componentWillLoad=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return this.active?[4,this.setActive()]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},t.prototype.setActive=function(){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(t){switch(t.label){case 0:return[4,this.prepareLazyLoaded()];case 1:return t.sent(),this.active=!0,[2]}}))}))},t.prototype.changeActive=function(t){t&&this.prepareLazyLoaded()},t.prototype.prepareLazyLoaded=function(){if(!this.loaded&&null!=this.component){this.loaded=!0;try{return(0,o.a)(this.delegate,this.el,this.component,["ion-page"])}catch(t){console.error(t)}}return Promise.resolve(void 0)},t.prototype.render=function(){var t=this,e=t.tab,n=t.active,i=t.component;return(0,r.h)(r.H,{role:"tabpanel","aria-hidden":n?null:"true","aria-labelledby":"tab-button-".concat(e),class:{"ion-page":void 0===i,"tab-hidden":!n}},(0,r.h)("slot",null))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{active:["changeActive"]}},enumerable:!1,configurable:!0}),t}();s.style=":host(.tab-hidden){display:none !important}";var a=function(){function t(t){var e=this;(0,r.r)(this,t),this.ionNavWillLoad=(0,r.e)(this,"ionNavWillLoad",7),this.ionTabsWillChange=(0,r.e)(this,"ionTabsWillChange",3),this.ionTabsDidChange=(0,r.e)(this,"ionTabsDidChange",3),this.transitioning=!1,this.useRouter=!1,this.onTabClicked=function(t){var n=t.detail,i=n.href,r=n.tab;if(e.useRouter&&void 0!==i){var o=document.querySelector("ion-router");o&&o.push(i)}else e.select(r)}}return t.prototype.componentWillLoad=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(e){switch(e.label){case 0:return this.useRouter||(this.useRouter=!!document.querySelector("ion-router")&&!this.el.closest("[no-router]")),this.useRouter?[3,2]:(t=this.tabs).length>0?[4,this.select(t[0])]:[3,2];case 1:e.sent(),e.label=2;case 2:return this.ionNavWillLoad.emit(),[2]}}))}))},t.prototype.componentWillRender=function(){var t=this.el.querySelector("ion-tab-bar");if(t){var e=this.selectedTab?this.selectedTab.tab:void 0;t.selectedTab=e}},t.prototype.select=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(n){switch(n.label){case 0:return e=c(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,!1];case 1:return n.sent(),[4,this.notifyRouter()];case 2:return n.sent(),this.tabSwitch(),[2,!0]}}))}))},t.prototype.getTab=function(t){return(0,i.mG)(this,void 0,void 0,(function(){return(0,i.Jh)(this,(function(e){return[2,c(this.tabs,t)]}))}))},t.prototype.getSelected=function(){return Promise.resolve(this.selectedTab?this.selectedTab.tab:void 0)},t.prototype.setRouteId=function(t){return(0,i.mG)(this,void 0,void 0,(function(){var e,n=this;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return e=c(this.tabs,t),this.shouldSwitch(e)?[4,this.setActive(e)]:[2,{changed:!1,element:this.selectedTab}];case 1:return i.sent(),[2,{changed:!0,element:this.selectedTab,markVisible:function(){return n.tabSwitch()}}]}}))}))},t.prototype.getRouteId=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(e){return[2,void 0!==(t=this.selectedTab&&this.selectedTab.tab)?{id:t,element:this.selectedTab}:void 0]}))}))},t.prototype.setActive=function(t){return this.transitioning?Promise.reject("transitioning already happening"):(this.transitioning=!0,this.leavingTab=this.selectedTab,this.selectedTab=t,this.ionTabsWillChange.emit({tab:t.tab}),t.active=!0,Promise.resolve())},t.prototype.tabSwitch=function(){var t=this.selectedTab,e=this.leavingTab;this.leavingTab=void 0,this.transitioning=!1,t&&e!==t&&(e&&(e.active=!1),this.ionTabsDidChange.emit({tab:t.tab}))},t.prototype.notifyRouter=function(){if(this.useRouter){var t=document.querySelector("ion-router");if(t)return t.navChanged("forward")}return Promise.resolve(!1)},t.prototype.shouldSwitch=function(t){var e=this.selectedTab;return void 0!==t&&t!==e&&!this.transitioning},Object.defineProperty(t.prototype,"tabs",{get:function(){return Array.from(this.el.querySelectorAll("ion-tab"))},enumerable:!1,configurable:!0}),t.prototype.render=function(){return(0,r.h)(r.H,{onIonTabButtonClick:this.onTabClicked},(0,r.h)("slot",{name:"top"}),(0,r.h)("div",{class:"tabs-inner"},(0,r.h)("slot",null)),(0,r.h)("slot",{name:"bottom"}))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,r.i)(this)},enumerable:!1,configurable:!0}),t}(),c=function(t,e){var n="string"===typeof e?t.find((function(t){return t.tab===e})):e;return n||console.error('tab with id: "'.concat(n,'" does not exist')),n};a.style=":host{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:100%;height:100%;contain:layout size style;z-index:0}.tabs-inner{position:relative;-ms-flex:1;flex:1;contain:layout size style}"}}]);
//# sourceMappingURL=9678.574776dd.chunk.js.map