!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=4)}([function(e,t,r){(function(n){t.log=function(...e){return"object"==typeof console&&console.log&&console.log(...e)},t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const r="color: "+this.color;t.splice(1,0,r,"color: inherit");let n=0,o=0;t[0].replace(/%[a-zA-Z%]/g,e=>{"%%"!==e&&(n++,"%c"===e&&(o=n))}),t.splice(o,0,r)},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug")}catch(e){}},t.load=function(){let e;try{e=t.storage.getItem("debug")}catch(e){}!e&&void 0!==n&&"env"in n&&(e=n.env.DEBUG);return e},t.useColors=function(){if("undefined"!=typeof window&&window.process&&("renderer"===window.process.type||window.process.__nwjs))return!0;if("undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))return!1;return"undefined"!=typeof document&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||"undefined"!=typeof window&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||"undefined"!=typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)},t.storage=function(){try{return localStorage}catch(e){}}(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],e.exports=r(2)(t);const{formatters:o}=e.exports;o.j=function(e){try{return JSON.stringify(e)}catch(e){return"[UnexpectedJSONParseError]: "+e.message}}}).call(this,r(1))},function(e,t){var r,n,o=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===s||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:s}catch(e){r=s}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,u=[],l=!1,d=-1;function h(){l&&c&&(l=!1,c.length?u=c.concat(u):d=-1,u.length&&f())}function f(){if(!l){var e=a(h);l=!0;for(var t=u.length;t;){for(c=u,u=[];++d<t;)c&&c[d].run();d=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function m(e,t){this.fun=e,this.array=t}function g(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new m(e,t)),1!==u.length||l||a(f)},m.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=g,o.addListener=g,o.once=g,o.off=g,o.removeListener=g,o.removeAllListeners=g,o.emit=g,o.prependListener=g,o.prependOnceListener=g,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,r){e.exports=function(e){function t(e){let t=0;for(let r=0;r<e.length;r++)t=(t<<5)-t+e.charCodeAt(r),t|=0;return n.colors[Math.abs(t)%n.colors.length]}function n(e){let r;function i(...e){if(!i.enabled)return;const t=i,o=Number(new Date),s=o-(r||o);t.diff=s,t.prev=r,t.curr=o,r=o,e[0]=n.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let a=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,(r,o)=>{if("%%"===r)return r;a++;const s=n.formatters[o];if("function"==typeof s){const n=e[a];r=s.call(t,n),e.splice(a,1),a--}return r}),n.formatArgs.call(t,e),(t.log||n.log).apply(t,e)}return i.namespace=e,i.enabled=n.enabled(e),i.useColors=n.useColors(),i.color=t(e),i.destroy=o,i.extend=s,"function"==typeof n.init&&n.init(i),n.instances.push(i),i}function o(){const e=n.instances.indexOf(this);return-1!==e&&(n.instances.splice(e,1),!0)}function s(e,t){const r=n(this.namespace+(void 0===t?":":t)+e);return r.log=this.log,r}function i(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return n.debug=n,n.default=n,n.coerce=function(e){return e instanceof Error?e.stack||e.message:e},n.disable=function(){const e=[...n.names.map(i),...n.skips.map(i).map(e=>"-"+e)].join(",");return n.enable(""),e},n.enable=function(e){let t;n.save(e),n.names=[],n.skips=[];const r=("string"==typeof e?e:"").split(/[\s,]+/),o=r.length;for(t=0;t<o;t++)r[t]&&("-"===(e=r[t].replace(/\*/g,".*?"))[0]?n.skips.push(new RegExp("^"+e.substr(1)+"$")):n.names.push(new RegExp("^"+e+"$")));for(t=0;t<n.instances.length;t++){const e=n.instances[t];e.enabled=n.enabled(e.namespace)}},n.enabled=function(e){if("*"===e[e.length-1])return!0;let t,r;for(t=0,r=n.skips.length;t<r;t++)if(n.skips[t].test(e))return!1;for(t=0,r=n.names.length;t<r;t++)if(n.names[t].test(e))return!0;return!1},n.humanize=r(3),Object.keys(e).forEach(t=>{n[t]=e[t]}),n.instances=[],n.names=[],n.skips=[],n.formatters={},n.selectColor=t,n.enable(n.load()),n}},function(e,t){var r=1e3,n=60*r,o=60*n,s=24*o,i=7*s,a=365.25*s;function c(e,t,r,n){var o=t>=1.5*r;return Math.round(e/r)+" "+n+(o?"s":"")}e.exports=function(e,t){t=t||{};var u=typeof e;if("string"===u&&e.length>0)return function(e){if((e=String(e)).length>100)return;var t=/^((?:\d+)?\-?\d?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);if(!t)return;var c=parseFloat(t[1]);switch((t[2]||"ms").toLowerCase()){case"years":case"year":case"yrs":case"yr":case"y":return c*a;case"weeks":case"week":case"w":return c*i;case"days":case"day":case"d":return c*s;case"hours":case"hour":case"hrs":case"hr":case"h":return c*o;case"minutes":case"minute":case"mins":case"min":case"m":return c*n;case"seconds":case"second":case"secs":case"sec":case"s":return c*r;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return c;default:return}}(e);if("number"===u&&!1===isNaN(e))return t.long?function(e){var t=Math.abs(e);if(t>=s)return c(e,t,s,"day");if(t>=o)return c(e,t,o,"hour");if(t>=n)return c(e,t,n,"minute");if(t>=r)return c(e,t,r,"second");return e+" ms"}(e):function(e){var t=Math.abs(e);if(t>=s)return Math.round(e/s)+"d";if(t>=o)return Math.round(e/o)+"h";if(t>=n)return Math.round(e/n)+"m";if(t>=r)return Math.round(e/r)+"s";return e+"ms"}(e);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(e))}},function(e,t,r){"use strict";r.r(t);var n={defaultQuery:{apiKey:"7212e3966b5c450fa48c618ebf60d8f0",page:1,lang:"en",pageSize:5},api:{name:"https://newsapi.org/v2/",topHeadlines:{name:"top-headlines",params:["apiKey","page","pageSize","q","sources","category","country"]},sources:{name:"sources",params:["apiKey","country","language","category"]}},alerts:{timeout:3e3,noNews:"There are no news matching your request.",noMewsLeft:"There are no more news left.",loaded:"Available news are loaded."},search:{minLength:3},maxNewsAllowed:40,noImageSrc:"./img/noImgProvided.png",prod:!0,debug:"*",gpOptions:{}},o=r(0),s=r.n(o),i=s()("view");class a{constructor(e,t){this.model=t,this.controller=e}ToggleAlert(e=!1,t,r){let o=document.querySelector(t);e?o.setAttribute("hidden",!0):(o.removeAttribute("hidden"),i("alert "+t),setTimeout(this.ToggleAlert,n.alerts.timeout,!0,t,"")),r&&(document.querySelector(t).textContent=r)}ToggleErrorAlert(e){this.ToggleAlert(!1,"#error",e)}ToggleBottomInfoAlert(e){this.ToggleAlert(!1,"#bottomInfo",e)}ToggleTopInfoAlert(e){this.ToggleAlert(!1,"#topInfo",e)}FillNewsFragmentWithInfo(e,t){e.querySelector(".newsTitle").textContent=t.title,e.querySelector(".newsImg").setAttribute("src",t.urlToImage?t.urlToImage:n.noImageSrc),e.querySelector(".newsDescription").textContent=t.description,e.querySelector(".newsAuthor").textContent=t.author,e.querySelector(".newsSourceName").textContent=t.source.name,e.querySelector(".newsUrl").setAttribute("href",t.url),e.querySelector(".newsPublishedAt").textContent=new Date(Date.parse(t.publishedAt)).toDateString()}AddNews(e){if(Array.isArray(e)&&e.length){let t=document.createDocumentFragment(),r=document.querySelector("#newsTemplate");i(r),e.forEach(e=>{let n=r.content.cloneNode(!0).querySelector(".pieceOfNews");this.FillNewsFragmentWithInfo(n,e),t.appendChild(n)}),document.querySelector("#news").appendChild(t)}}CleanNews(){document.querySelector("#news").textContent=""}ShowNews(e){Array.isArray(e)&&e.length?(this.CleanNews(),this.AddNews(e),this.ToggleTopInfoAlert(n.alerts.loaded)):this.ToggleErrorAlert(n.alerts.noNews)}ShowSources(e){if(Array.isArray(e)&&e.length){let t=document.createDocumentFragment(),r=document.querySelector("#sourceTemplate");e.forEach(e=>{let n=r.content.cloneNode(!0).querySelector(".source");n.querySelector(".sourceName").textContent=e.name,n.querySelector(".btn").setAttribute("id",e.id),n.querySelector(".btn").addEventListener("click",()=>this.controller.SourceSelected(e.id)),t.appendChild(n)}),document.querySelector("#sources").appendChild(t)}else i("error in showing sources")}HighlightSource(e){let t=document.querySelectorAll("#sources .source");i(t)}}var c=s()("model");class u{constructor(e){this.controller=e,this.view=new a(this.controller,this),this.currentNews,this.currentSources,this.newsAvailable=0,this.pagesLoaded=0,this.pageLength=n.defaultQuery.pageSize,this.lastQueryParams={}}GetRequest(e,t){c("request: ",e),null==e&&(e={country:"us"});let r=n.api.name+t.name+"?";r+=t.params.map(t=>null!=e[t]?t+"="+e[t]:null!=n.defaultQuery[t]?t+"="+n.defaultQuery[t]:null).filter(e=>e).join("&"),c("request query: ",r);let o=new XMLHttpRequest;return o.open("GET",r,!1),o.send(),200==o.status?JSON.parse(o.responseText):(c(o),{})}GetSources(){let e=this.GetRequest(null,n.api.sources);return c("got response:",e),e.sources}GetTopHeadlines(e){let t=this.GetRequest(e,n.api.topHeadlines);return c("got response:",t),"ok"==t.status&&(this.lastQueryParams=e||{},this.pagesLoaded=e&&e.page?e.page:1,this.newsAvailable=t.totalResults),t.articles}LoadMore(){c("load more"),Math.min(this.newsAvailable,n.maxNewsAllowed)>this.pagesLoaded*this.pageLength?(this.lastQueryParams.page=++this.pagesLoaded,this.view.AddNews(this.GetTopHeadlines(this.lastQueryParams)),this.view.ToggleBottomInfoAlert(n.alerts.loaded)):this.view.ToggleBottomInfoAlert(n.alerts.noMewsLeft)}LoadNews(e){this.currentNews=this.GetTopHeadlines(e),this.view.ShowNews(this.currentNews)}LoadFromSource(e){this.LoadNews({sources:e}),this.view.HighlightSource(e)}Init(){this.LoadNews(),this.currentSources=this.GetSources(),this.view.ShowSources(this.currentSources)}}var l=s()("controller");n.prod?s.a.disable():s.a.enable(n.debug),(new class{constructor(){this.model=new u(this)}SourceSelected(e){l("source selected: "+e),this.model.LoadFromSource(e)}Init(){l("init"),this.model.Init(),document.querySelector("#loadMore").addEventListener("click",()=>this.model.LoadMore()),document.getElementById("searchButton").addEventListener("click",()=>{let e=document.getElementById("searchText").value;l("search for: "+e),e.length>=n.search.minLength&&this.model.LoadNews({q:e})}),document.getElementById("searchText").addEventListener("keyup",e=>{13==e.keyCode&&document.getElementById("searchButton").click()})}}).Init()}]);