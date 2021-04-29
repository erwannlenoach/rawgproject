/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Home.js":
/*!************************!*\
  !*** ./src/js/Home.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  console.log(\"Home\", argument);\n};\n\n\n\n//# sourceURL=webpack://RAWG/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/js/key.js\");\n__webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\n\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var id = window.location.hash.substring(1).split(\"/\")[1];\n    console.log(id);\n\n    var fetchGame = function fetchGame(url) {\n      var finalURL = url;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            background_image = response.background_image,\n            platforms = response.platforms,\n            genres = response.genres,\n            tags = response.tags,\n            website = response.website,\n            developers = response.developers,\n            ratings = response.ratings,\n            ratings_count = response.ratings_count;\n        console.log(response); // render game details\n\n        var articleDOM = document.querySelector(\".page-detail .article\"); // name \n\n        articleDOM.querySelector(\"h1.title\").innerHTML = name; // image\n\n        document.getElementById(\"gameimage\").innerHTML = \"<img id=\\\"mainImage\\\" src=\".concat(background_image, \">\"); // released date \n\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n\n        if (released == null) {\n          articleDOM.querySelector(\"p.release-date\").innerHTML = \"\";\n        } // developers\n\n\n        developers.forEach(function (x) {\n          return articleDOM.querySelector(\"a.dev\").innerHTML += \"<br>\".concat(x.name, \"</br>\");\n        });\n        articleDOM.querySelector(\"a.dev\").setAttribute('href', \"#pagelist\"); // tags \n\n        tags.forEach(function (x) {\n          return articleDOM.querySelector(\"a.tags\").innerHTML += \"<br>\".concat(x.name, \"</br>\");\n        });\n        articleDOM.querySelector(\"a.tags\").setAttribute('href', \"#pagelist\"); // genres \n\n        genres.forEach(function (x) {\n          return articleDOM.querySelector(\"a.genres\").innerHTML += \"<br>\".concat(x.name, \"</br>\");\n        });\n        articleDOM.querySelector(\"a.genres\").setAttribute('href', \"#pagelist\"); // platforms \n\n        platforms.forEach(function (x) {\n          return articleDOM.querySelector(\"a.platforms\").innerHTML += \"<br>\".concat(x.platform.name, \"</br>\");\n        });\n        articleDOM.querySelector(\"a.platforms\").setAttribute('href', \"#pagelist\"); // amount of ratings \n\n        articleDOM.querySelector(\"p.ratingsamount\").innerHTML = \"<br>\".concat(ratings_count, \" notes : </br>\"); //\n\n        ratings.forEach(function (x) {\n          return articleDOM.querySelector(\"a.ratings\").innerHTML += \"<br>\".concat(x.title, \" : \").concat(x.percent, \" % </br>\");\n        }); // website\n\n        articleDOM.querySelector(\"a.website\").innerHTML = website;\n        articleDOM.querySelector(\"a.website\").setAttribute('href', \"\".concat(website));\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\".concat(id, \"?key=\").concat(_key__WEBPACK_IMPORTED_MODULE_0__.key));\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-detail\\\">\\n          <div class=\\\"article\\\">\\n          <div id=\\\"gameimage\\\">\\n          <img id=\\\"mainImage\\\">\\n          </div>\\n            <h1 class=\\\"title\\\"></h1>\\n            <p class=\\\"release-date\\\">Release date : <span></span></p>\\n            <p class=\\\"description\\\"></p>\\n            <h1 class=\\\"title\\\"></h1>\\n            <a class=\\\"dev\\\"></a>\\n            <a class=\\\"genres\\\"></a>\\n            <a class=\\\"tags\\\"></a>\\n            <a class=\\\"platforms\\\"></a>\\n            <p class=\\\"ratingsamount\\\"></p>\\n            <a class=\\\"ratings\\\"></a>\\n            <a class=\\\"website\\\"></a>\\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n};\n\n // Le nom du/des studio(s) de développement (lien(s) interne(s) vers le template PageList) DONE\n// TODO: Quan ya pas de lien (DEV) il faut pas l'afficher :function HIDE avec le if\n// TODO: Une vidéo de présentation (Lecteur HTML 5 interne)\n// TODO: Quatre screenshots du jeu\n// TODO: Le/Les lien(s) pour acheter le jeu (lien(s) externe(s))\n// TODO: Une liste de jeux ressemblants au jeu (lien interne vers un jeu sur PageDetail)\n// TODO: Une liste de vidéos YouTube parlant du jeu (Lien externe vers YouTube)\n// TODO: appli version .io + readme.Md\n\n//# sourceURL=webpack://RAWG/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/js/key.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction findGame() {\n  // let ps = document.getElementById(\"ps\")\n  // if (ps.click){\n  //   let inputSearch = document.querySelector('.input-search').value + \"&platforms=187\"\n  //   return inputSearch\n  // } \n  var inputSearch = document.querySelector('.input-search').value;\n  PageList(inputSearch);\n}\n\nwindow.findGame = findGame;\n\nfunction PageList(argument) {\n  var preparePage = function preparePage() {\n    var now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD');\n    var nextyear = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'year').format('YYYY-MM-DD');\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url;\n\n      if (argument) {\n        finalURL = url + \"&search=\" + argument;\n      } else {\n        finalURL = url + \"&dates=\".concat(now, \",\").concat(nextyear);\n      } // finalURL = finalURL + \"&platforms=\" + argument\n\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (article) {\n          articles += \"\\n                    <div card=\\\"cardGame\\\"=>\\n                      <h1>\".concat(article.name, \"</h1>\\n                      <h2>Release date: \").concat(article.released, \"</h2>\\n                      <a href = \\\"#pagedetail/\").concat(article.slug, \"\\\">More information</a>\\n                    </div>\\n                  \");\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = articles;\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(_key__WEBPACK_IMPORTED_MODULE_0__.key, \"&page_size=27\"), argument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-list\\\">\\n          <div class=\\\"articles\\\">...loading</div>\\n        </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n}\n\n;\n\nfunction SortList(argument) {}\n\n\n\n//# sourceURL=webpack://RAWG/./src/js/PageList.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n/* harmony import */ var _sass_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sass/style.scss */ \"./src/sass/style.scss\");\n\n\nvar pageArgument;\n\nvar setRoute = function setRoute() {\n  var path = window.location.hash.substring(1).split(\"/\");\n  pageArgument = path[1] || \"\";\n  var pageContent = document.getElementById(\"pageContent\");\n  _routes__WEBPACK_IMPORTED_MODULE_0__.routes[path[0]](pageArgument);\n  return true;\n};\n\nwindow.addEventListener(\"hashchange\", function () {\n  return setRoute();\n});\nwindow.addEventListener(\"DOMContentLoaded\", function () {\n  return setRoute();\n});\n\n//# sourceURL=webpack://RAWG/./src/js/index.js?");

/***/ }),

/***/ "./src/js/key.js":
/*!***********************!*\
  !*** ./src/js/key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"key\": () => (/* binding */ key)\n/* harmony export */ });\nvar key = '528babbc066842ebaf0b202ac5448d6e';\n\n\n//# sourceURL=webpack://RAWG/./src/js/key.js?");

/***/ }),

/***/ "./src/js/routes.js":
/*!**************************!*\
  !*** ./src/js/routes.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"routes\": () => (/* binding */ routes)\n/* harmony export */ });\n/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ \"./src/js/Home.js\");\n/* harmony import */ var _PageDetail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageDetail */ \"./src/js/PageDetail.js\");\n/* harmony import */ var _PageList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageList */ \"./src/js/PageList.js\");\n\n\n\nvar routes = {\n  \"\": _Home__WEBPACK_IMPORTED_MODULE_0__.Home,\n  \"pagelist\": _PageList__WEBPACK_IMPORTED_MODULE_2__.PageList,\n  \"pagedetail\": _PageDetail__WEBPACK_IMPORTED_MODULE_1__.PageDetail\n};\n\n\n//# sourceURL=webpack://RAWG/./src/js/routes.js?");

/***/ }),

/***/ "./node_modules/dayjs/dayjs.min.js":
/*!*****************************************!*\
  !*** ./node_modules/dayjs/dayjs.min.js ***!
  \*****************************************/
/***/ (function(module) {

eval("!function(t,e){ true?module.exports=e():0}(this,function(){\"use strict\";var t=\"millisecond\",e=\"second\",n=\"minute\",r=\"hour\",i=\"day\",s=\"week\",u=\"month\",a=\"quarter\",o=\"year\",f=\"date\",h=/^(\\d{4})[-/]?(\\d{1,2})?[-/]?(\\d{0,2})[^0-9]*(\\d{1,2})?:?(\\d{1,2})?:?(\\d{1,2})?[.:]?(\\d+)?$/,c=/\\[([^\\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,d={name:\"en\",weekdays:\"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday\".split(\"_\"),months:\"January_February_March_April_May_June_July_August_September_October_November_December\".split(\"_\")},$=function(t,e,n){var r=String(t);return!r||r.length>=e?t:\"\"+Array(e+1-r.length).join(n)+t},l={s:$,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return(e<=0?\"+\":\"-\")+$(r,2,\"0\")+\":\"+$(i,2,\"0\")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,u),s=n-i<0,a=e.clone().add(r+(s?-1:1),u);return+(-(r+(n-i)/(s?i-a:a-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(h){return{M:u,y:o,w:s,d:i,D:f,h:r,m:n,s:e,ms:t,Q:a}[h]||String(h||\"\").toLowerCase().replace(/s$/,\"\")},u:function(t){return void 0===t}},y=\"en\",M={};M[y]=d;var m=function(t){return t instanceof S},D=function(t,e,n){var r;if(!t)return y;if(\"string\"==typeof t)M[t]&&(r=t),e&&(M[t]=e,r=t);else{var i=t.name;M[i]=t,r=i}return!n&&r&&(y=r),r||!n&&y},v=function(t,e){if(m(t))return t.clone();var n=\"object\"==typeof e?e:{};return n.date=t,n.args=arguments,new S(n)},g=l;g.l=D,g.i=m,g.w=function(t,e){return v(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var S=function(){function d(t){this.$L=D(t.locale,null,!0),this.parse(t)}var $=d.prototype;return $.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(g.u(e))return new Date;if(e instanceof Date)return new Date(e);if(\"string\"==typeof e&&!/Z$/i.test(e)){var r=e.match(h);if(r){var i=r[2]-1||0,s=(r[7]||\"0\").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},$.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},$.$utils=function(){return g},$.isValid=function(){return!(\"Invalid Date\"===this.$d.toString())},$.isSame=function(t,e){var n=v(t);return this.startOf(e)<=n&&n<=this.endOf(e)},$.isAfter=function(t,e){return v(t)<this.startOf(e)},$.isBefore=function(t,e){return this.endOf(e)<v(t)},$.$g=function(t,e,n){return g.u(t)?this[e]:this.set(n,t)},$.unix=function(){return Math.floor(this.valueOf()/1e3)},$.valueOf=function(){return this.$d.getTime()},$.startOf=function(t,a){var h=this,c=!!g.u(a)||a,d=g.p(t),$=function(t,e){var n=g.w(h.$u?Date.UTC(h.$y,e,t):new Date(h.$y,e,t),h);return c?n:n.endOf(i)},l=function(t,e){return g.w(h.toDate()[t].apply(h.toDate(\"s\"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),h)},y=this.$W,M=this.$M,m=this.$D,D=\"set\"+(this.$u?\"UTC\":\"\");switch(d){case o:return c?$(1,0):$(31,11);case u:return c?$(1,M):$(0,M+1);case s:var v=this.$locale().weekStart||0,S=(y<v?y+7:y)-v;return $(c?m-S:m+(6-S),M);case i:case f:return l(D+\"Hours\",0);case r:return l(D+\"Minutes\",1);case n:return l(D+\"Seconds\",2);case e:return l(D+\"Milliseconds\",3);default:return this.clone()}},$.endOf=function(t){return this.startOf(t,!1)},$.$set=function(s,a){var h,c=g.p(s),d=\"set\"+(this.$u?\"UTC\":\"\"),$=(h={},h[i]=d+\"Date\",h[f]=d+\"Date\",h[u]=d+\"Month\",h[o]=d+\"FullYear\",h[r]=d+\"Hours\",h[n]=d+\"Minutes\",h[e]=d+\"Seconds\",h[t]=d+\"Milliseconds\",h)[c],l=c===i?this.$D+(a-this.$W):a;if(c===u||c===o){var y=this.clone().set(f,1);y.$d[$](l),y.init(),this.$d=y.set(f,Math.min(this.$D,y.daysInMonth())).$d}else $&&this.$d[$](l);return this.init(),this},$.set=function(t,e){return this.clone().$set(t,e)},$.get=function(t){return this[g.p(t)]()},$.add=function(t,a){var f,h=this;t=Number(t);var c=g.p(a),d=function(e){var n=v(h);return g.w(n.date(n.date()+Math.round(e*t)),h)};if(c===u)return this.set(u,this.$M+t);if(c===o)return this.set(o,this.$y+t);if(c===i)return d(1);if(c===s)return d(7);var $=(f={},f[n]=6e4,f[r]=36e5,f[e]=1e3,f)[c]||1,l=this.$d.getTime()+t*$;return g.w(l,this)},$.subtract=function(t,e){return this.add(-1*t,e)},$.format=function(t){var e=this;if(!this.isValid())return\"Invalid Date\";var n=t||\"YYYY-MM-DDTHH:mm:ssZ\",r=g.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},d=function(t){return g.s(s%12||12,t,\"0\")},$=i.meridiem||function(t,e,n){var r=t<12?\"AM\":\"PM\";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:g.s(a+1,2,\"0\"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:g.s(this.$D,2,\"0\"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:g.s(s,2,\"0\"),h:d(1),hh:d(2),a:$(s,u,!0),A:$(s,u,!1),m:String(u),mm:g.s(u,2,\"0\"),s:String(this.$s),ss:g.s(this.$s,2,\"0\"),SSS:g.s(this.$ms,3,\"0\"),Z:r};return n.replace(c,function(t,e){return e||l[t]||r.replace(\":\",\"\")})},$.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},$.diff=function(t,f,h){var c,d=g.p(f),$=v(t),l=6e4*($.utcOffset()-this.utcOffset()),y=this-$,M=g.m(this,$);return M=(c={},c[o]=M/12,c[u]=M,c[a]=M/3,c[s]=(y-l)/6048e5,c[i]=(y-l)/864e5,c[r]=y/36e5,c[n]=y/6e4,c[e]=y/1e3,c)[d]||y,h?M:g.a(M)},$.daysInMonth=function(){return this.endOf(u).$D},$.$locale=function(){return M[this.$L]},$.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=D(t,e,!0);return r&&(n.$L=r),n},$.clone=function(){return g.w(this.$d,this)},$.toDate=function(){return new Date(this.valueOf())},$.toJSON=function(){return this.isValid()?this.toISOString():null},$.toISOString=function(){return this.$d.toISOString()},$.toString=function(){return this.$d.toUTCString()},d}(),p=S.prototype;return v.prototype=p,[[\"$ms\",t],[\"$s\",e],[\"$m\",n],[\"$H\",r],[\"$W\",i],[\"$M\",u],[\"$y\",o],[\"$D\",f]].forEach(function(t){p[t[1]]=function(e){return this.$g(e,t[0],t[1])}}),v.extend=function(t,e){return t.$i||(t(e,S,v),t.$i=!0),v},v.locale=D,v.isDayjs=m,v.unix=function(t){return v(1e3*t)},v.en=M[y],v.Ls=M,v.p={},v});\n\n\n//# sourceURL=webpack://RAWG/./node_modules/dayjs/dayjs.min.js?");

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://RAWG/./src/sass/style.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;