!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=4)}([function(e,t){e.exports=React},function(e,t){e.exports=NetlifyCmsApp},function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}}},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){n(5),n(6),e.exports=n(11)},function(e,t,n){"use strict";var i=n(2),o=i(n(1)),r=i(n(12));window.___emitter=r.default,window.___loader={enqueue:function(){},hovering:function(){}},o.default.init(),o.default.registerPreviewStyle("cms.css")},function(e,t,n){"use strict";(function(e){var t=n(2)(n(10));window.netlifyIdentity=t.default;var i=function(){return t.default.on("login",(function(){document.location.href="/aman/admin/"}))};t.default.on("init",(function(e){e?t.default.on("logout",(function(){i()})):i()})),e((function(){t.default.init()}))}).call(this,n(7).setImmediate)},function(e,t,n){(function(e){var i=void 0!==e&&e||"undefined"!=typeof self&&self||window,o=Function.prototype.apply;function r(e,t){this._id=e,this._clearFn=t}t.setTimeout=function(){return new r(o.call(setTimeout,i,arguments),clearTimeout)},t.setInterval=function(){return new r(o.call(setInterval,i,arguments),clearInterval)},t.clearTimeout=t.clearInterval=function(e){e&&e.close()},r.prototype.unref=r.prototype.ref=function(){},r.prototype.close=function(){this._clearFn.call(i,this._id)},t.enroll=function(e,t){clearTimeout(e._idleTimeoutId),e._idleTimeout=t},t.unenroll=function(e){clearTimeout(e._idleTimeoutId),e._idleTimeout=-1},t._unrefActive=t.active=function(e){clearTimeout(e._idleTimeoutId);var t=e._idleTimeout;t>=0&&(e._idleTimeoutId=setTimeout((function(){e._onTimeout&&e._onTimeout()}),t))},n(8),t.setImmediate="undefined"!=typeof self&&self.setImmediate||void 0!==e&&e.setImmediate||this&&this.setImmediate,t.clearImmediate="undefined"!=typeof self&&self.clearImmediate||void 0!==e&&e.clearImmediate||this&&this.clearImmediate}).call(this,n(3))},function(e,t,n){(function(e,t){!function(e,n){"use strict";if(!e.setImmediate){var i,o,r,a,u,c=1,s={},l=!1,f=e.document,d=Object.getPrototypeOf&&Object.getPrototypeOf(e);d=d&&d.setTimeout?d:e,"[object process]"==={}.toString.call(e.process)?i=function(e){t.nextTick((function(){p(e)}))}:!function(){if(e.postMessage&&!e.importScripts){var t=!0,n=e.onmessage;return e.onmessage=function(){t=!1},e.postMessage("","*"),e.onmessage=n,t}}()?e.MessageChannel?((r=new MessageChannel).port1.onmessage=function(e){p(e.data)},i=function(e){r.port2.postMessage(e)}):f&&"onreadystatechange"in f.createElement("script")?(o=f.documentElement,i=function(e){var t=f.createElement("script");t.onreadystatechange=function(){p(e),t.onreadystatechange=null,o.removeChild(t),t=null},o.appendChild(t)}):i=function(e){setTimeout(p,0,e)}:(a="setImmediate$"+Math.random()+"$",u=function(t){t.source===e&&"string"==typeof t.data&&0===t.data.indexOf(a)&&p(+t.data.slice(a.length))},e.addEventListener?e.addEventListener("message",u,!1):e.attachEvent("onmessage",u),i=function(t){e.postMessage(a+t,"*")}),d.setImmediate=function(e){"function"!=typeof e&&(e=new Function(""+e));for(var t=new Array(arguments.length-1),n=0;n<t.length;n++)t[n]=arguments[n+1];var o={callback:e,args:t};return s[c]=o,i(c),c++},d.clearImmediate=m}function m(e){delete s[e]}function p(e){if(l)setTimeout(p,0,e);else{var t=s[e];if(t){l=!0;try{!function(e){var t=e.callback,n=e.args;switch(n.length){case 0:t();break;case 1:t(n[0]);break;case 2:t(n[0],n[1]);break;case 3:t(n[0],n[1],n[2]);break;default:t.apply(void 0,n)}}(t)}finally{m(e),l=!1}}}}}("undefined"==typeof self?void 0===e?this:e:self)}).call(this,n(3),n(9))},function(e,t){var n,i,o=e.exports={};function r(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===r||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:r}catch(e){n=r}try{i="function"==typeof clearTimeout?clearTimeout:a}catch(e){i=a}}();var c,s=[],l=!1,f=-1;function d(){l&&c&&(l=!1,c.length?s=c.concat(s):f=-1,s.length&&m())}function m(){if(!l){var e=u(d);l=!0;for(var t=s.length;t;){for(c=s,s=[];++f<t;)c&&c[f].run();f=-1,t=s.length}c=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===a||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function h(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new p(e,t)),1!==s.length||l||u(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=h,o.addListener=h,o.once=h,o.off=h,o.removeListener=h,o.removeAllListeners=h,o.emit=h,o.prependListener=h,o.prependOnceListener=h,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t){e.exports=netlifyIdentity},function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),r=n(0),a=n.n(r),u=function(e){var t=e.entry,n=(0,e.widgetFor)("body"),i=t.getIn(["data","title"]);return a.a.createElement("div",{className:"page"},a.a.createElement("h1",{className:"page__title"},i),a.a.createElement("div",{className:"page__body"},n))},c=function(e){var t=e.entry,n=(0,e.widgetFor)("body"),i=t.getIn(["data","title"]);return a.a.createElement("div",{className:"post"},a.a.createElement("h1",{className:"post__title"},i),a.a.createElement("div",{className:"post__body"},n))};o.a.registerPreviewTemplate("pages",u),o.a.registerPreviewTemplate("posts",c)},function(e,t,n){"use strict";n.r(t);const i=function(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map((function(e){e(n)})),(e["*"]||[]).slice().map((function(e){e(t,n)}))}}}();t.default=i}]);
//# sourceMappingURL=cms.js.map