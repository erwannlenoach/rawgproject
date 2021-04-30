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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Home\": () => (/* binding */ Home)\n/* harmony export */ });\nvar Home = function Home() {\n  var argument = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : \"\";\n  window.location.hash = 'pagelist';\n};\n\n\n\n//# sourceURL=webpack://RAWG/./src/js/Home.js?");

/***/ }),

/***/ "./src/js/PageDetail.js":
/*!******************************!*\
  !*** ./src/js/PageDetail.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageDetail\": () => (/* binding */ PageDetail)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/js/key.js\");\n__webpack_require__(/*! ./routes */ \"./src/js/routes.js\");\n\n\n\nvar PageDetail = function PageDetail(argument) {\n  var preparePage = function preparePage() {\n    var slug = window.location.hash.substring(1).split(\"/\")[1];\n    console.log(slug);\n\n    var fetchGame = function fetchGame(url) {\n      var finalURL = url;\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        var name = response.name,\n            released = response.released,\n            description = response.description,\n            background_image = response.background_image,\n            platforms = response.platforms,\n            genres = response.genres,\n            tags = response.tags,\n            website = response.website,\n            developers = response.developers,\n            ratings = response.ratings,\n            ratings_count = response.ratings_count,\n            stores = response.stores;\n        console.log(response); // render game details\n\n        var articleDOM = document.querySelector(\".page-detail .article\"); // name \n\n        articleDOM.querySelector(\"h1.title\").innerHTML = name; // image\n\n        document.getElementById(\"gameimage\").innerHTML = \"<img id=\\\"mainImage\\\" src=\".concat(background_image, \">\"); // screenshots \n\n        fetch(\"https://api.rawg.io/api/games/\".concat(slug, \"/screenshots?key=528babbc066842ebaf0b202ac5448d6e\")).then(function (data) {\n          return data.json();\n        }).then(function (data) {\n          var results = data.results;\n          console.log(data);\n          results = results.slice(0, 4);\n          results.forEach(function (x) {\n            return document.getElementById(\"screenshots\").innerHTML += \"<img class=\\\"secondaryImages\\\" src=\".concat(x.image, \">\");\n          });\n        }); // video\n\n        fetch(\"https://api.rawg.io/api/games/\".concat(slug, \"/movies?key=528babbc066842ebaf0b202ac5448d6e\")).then(function (movies) {\n          return movies.json();\n        }).then(function (movies) {\n          var results = movies.results;\n          document.getElementById(\"video\").innerHTML = \"\\n         <video width=\\\"700\\\" height=\\\"300\\\" controls autoplay>\\n         <source src=\".concat(results[0].data.max, \" type=video/mp4>\\n         </video>\");\n        }); // released date\n\n        articleDOM.querySelector(\"p.release-date span\").innerHTML = released;\n        articleDOM.querySelector(\"p.description\").innerHTML = description;\n\n        if (released == null) {\n          articleDOM.querySelector(\"p.release-date\").innerHTML = \"\";\n        } // developers\n\n\n        if (developers && developers.length) {\n          articleDOM.querySelector(\".dev\").innerHTML = developers.map(function (x) {\n            return \"<a href=\\\"#pagelist\\\">\".concat(x.name, \"</a>\");\n          }).join(', ');\n        } // tags \n\n\n        if (tags && tags.length) {\n          articleDOM.querySelector(\".tags\").innerHTML = tags.map(function (x) {\n            return \"<a href=\\\"#pagelist\\\">\".concat(x.name, \"</a>\");\n          }).join(', ');\n        } // genres \n\n\n        if (genres && genres.length) {\n          articleDOM.querySelector(\".genres\").innerHTML = genres.map(function (x) {\n            return \"<a href=\\\"#pagelist\\\">\".concat(x.name, \"</a>\");\n          }).join(', ');\n        } // platforms \n\n\n        if (platforms && platforms.length) {\n          articleDOM.querySelector(\".platforms\").innerHTML = platforms.map(function (x) {\n            return \"<a href=\\\"#pagelist\\\">\".concat(x.platform.name, \"</a>\");\n          }).join(', ');\n        } // amount of ratings \n\n\n        articleDOM.querySelector(\"p.ratingsamount\").innerHTML = \"<br>\".concat(ratings_count, \" notes : </br>\"); // ratings\n\n        if (ratings && ratings.length) {\n          articleDOM.querySelector(\".ratings\").innerHTML = ratings.map(function (x) {\n            return \"\".concat(x.title, \" : \").concat(x.percent, \" %\");\n          }).join(', ');\n        } // stores\n\n\n        if (stores && stores.length) {\n          articleDOM.querySelector(\".stores\").innerHTML = stores.map(function (x) {\n            return \"<a href=\\\"https://\".concat(x.store.domain, \"\\\">\").concat(x.store.name, \"</a>\");\n          }).join(', ');\n        } // domain doit être utilisé en URL relatif\n        //setAttribute('href', `${x.store.domain}`) )\n        // website\n\n\n        articleDOM.querySelector(\"a.website\").innerHTML = website;\n        articleDOM.querySelector(\"a.website\").setAttribute('href', \"\".concat(website));\n      });\n    };\n\n    fetchGame(\"https://api.rawg.io/api/games/\".concat(slug, \"?key=\").concat(_key__WEBPACK_IMPORTED_MODULE_0__.key));\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-detail\\\">\\n          <div class=\\\"article\\\">\\n       \\n            <div id=\\\"gameimage\\\">\\n            <img id=\\\"mainImage\\\">\\n            </div>\\n            <h1 class=\\\"title\\\"></h1>\\n            <div id=\\\"video\\\">\\n            </div>\\n          \\n            <p class=\\\"description\\\"></p>\\n         \\n           \\n            \\n            <div id=\\\"screenshots\\\">\\n  \\n            </div>\\n            <p class=\\\"release-date\\\">Release date : <span></span></p>\\n            <div class=\\\"row\\\">\\n              <div class=\\\"col-6 mb-3\\\">\\n                Developers:\\n                <div class=\\\"dev\\\"></div>\\n              </div>\\n              <div class=\\\"col-6 mb-3\\\">\\n                Genres:\\n                <div class=\\\"genres\\\"></div>\\n              </div>\\n              <div class=\\\"col-6 mb-3\\\">\\n                Tags:\\n                <div class=\\\"tags\\\"></div>\\n              </div>\\n              <div class=\\\"col-6 mb-3\\\">\\n                Platforms:\\n                <div class=\\\"platforms\\\"></div>\\n              </div>\\n            </div>\\n            <p class=\\\"ratingsamount\\\"></p>\\n            <div class=\\\"ratings\\\"></div>\\n            <div class=\\\"stores\\\"></div>\\n            <a class=\\\"website\\\"></a>\\n          </div>\\n        </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n};\n\n\n\n//# sourceURL=webpack://RAWG/./src/js/PageDetail.js?");

/***/ }),

/***/ "./src/js/PageList.js":
/*!****************************!*\
  !*** ./src/js/PageList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageList\": () => (/* binding */ PageList)\n/* harmony export */ });\n/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ \"./src/js/key.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ \"./node_modules/dayjs/dayjs.min.js\");\n/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _images_ps4_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/ps4.svg */ \"./src/images/ps4.svg\");\n/* harmony import */ var _images_linux_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/linux.svg */ \"./src/images/linux.svg\");\n/* harmony import */ var _images_mobile_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/mobile.svg */ \"./src/images/mobile.svg\");\n/* harmony import */ var _images_switch_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/switch.svg */ \"./src/images/switch.svg\");\n/* harmony import */ var _images_xbox_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/xbox.svg */ \"./src/images/xbox.svg\");\n\n\n\n\n\n\n\n\nfunction findGame() {\n  // let ps = document.getElementById(\"ps\")\n  // if (ps.click){\n  //   let inputSearch = document.querySelector('.input-search').value + \"&platforms=187\"\n  //   return inputSearch\n  // } \n  var inputSearch = document.querySelector('.input-search').value;\n  PageList(inputSearch);\n}\n\nfunction getPlatformLogo(platform) {\n  var logo = '';\n\n  if (platform.indexOf('playstation') > -1) {\n    logo = _images_ps4_svg__WEBPACK_IMPORTED_MODULE_2__.default;\n  }\n\n  if (platform.indexOf('linux') > -1) {\n    logo = _images_linux_svg__WEBPACK_IMPORTED_MODULE_3__.default;\n  }\n\n  if (platform.indexOf('mobile') > -1) {\n    logo = _images_mobile_svg__WEBPACK_IMPORTED_MODULE_4__.default;\n  }\n\n  if (platform.indexOf('switch') > -1) {\n    logo = _images_switch_svg__WEBPACK_IMPORTED_MODULE_5__.default;\n  }\n\n  if (platform.indexOf('xbox') > -1) {\n    logo = _images_xbox_svg__WEBPACK_IMPORTED_MODULE_6__.default;\n  }\n\n  if (logo) {\n    return \"<img src=\\\"./dist/\".concat(logo, \"\\\" />\");\n  }\n\n  return '';\n}\n\nfunction getListPlatformLogo(platforms) {\n  if (!platforms) {\n    return '';\n  }\n\n  return Object.keys(platforms.map(function (p) {\n    return getPlatformLogo(p.platform.slug);\n  }).reduce(function (result, img) {\n    result[img] = true;\n    return result;\n  }, {})).join('');\n}\n\nwindow.findGame = findGame;\n\nfunction PageList(argument) {\n  var preparePage = function preparePage() {\n    var now = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM-DD');\n    var nextyear = dayjs__WEBPACK_IMPORTED_MODULE_1___default()().add(1, 'year').format('YYYY-MM-DD');\n    var articles = \"\";\n\n    var fetchList = function fetchList(url, argument) {\n      var finalURL = url; //+ '&ordering=-released';\n\n      if (argument) {\n        finalURL = finalURL + \"&search=\" + argument;\n      } else {\n        finalURL = finalURL + \"&dates=\".concat(now, \",\").concat(nextyear);\n      } // finalURL = finalURL + \"&platforms=\" + argument\n\n\n      fetch(\"\".concat(finalURL)).then(function (response) {\n        return response.json();\n      }).then(function (response) {\n        response.results.forEach(function (article) {\n          console.log(article);\n          articles += \"\\n                    <div class=\\\"cardGame card col-sm-4 col-xs-12\\\" style=\\\"width: 18rem; margin: 20px auto; background-color: rgb(25, 25, 25) \\\">\\n                      <div class=\\\"background-image\\\">\\n                        <img src=\\\"\".concat(article.background_image, \"\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n                        <div class=\\\"informations\\\">\\n                          <div>\").concat(article.released, \"</div>\\n                          <div>\").concat(article.rating, \" / \").concat(article.rating_top, \" - \").concat(article.ratings_count, \" votes</div>\\n                          <div>\").concat(article.genres.map(function (g) {\n            return g.name;\n          }).sort().join(' - '), \"</div>\\n                        </div>\\n                      </div>\\n                      <h1>\").concat(article.name, \"</h1>\\n                      <p class=\\\"platforms\\\"></p>\\n                      <a href = \\\"#pagedetail/\").concat(article.slug, \"\\\">More information</a>\\n                      <div class=\\\"logos\\\">\").concat(getListPlatformLogo(article.platforms), \"</div>\\n                    </div>\\n                  \"); // platforms.platform.forEach(x => document.getElementsByClassName(\"platforms\").innerHTML += `<br>${x.name}</br>`))\n        });\n        document.querySelector(\".page-list .articles\").innerHTML = \"<div class=\\\"row\\\">\".concat(articles, \"</div>\");\n      });\n    };\n\n    fetchList(\"https://api.rawg.io/api/games?key=\".concat(_key__WEBPACK_IMPORTED_MODULE_0__.key, \"&page_size=27\"), argument);\n  };\n\n  var render = function render() {\n    pageContent.innerHTML = \"\\n        <section class=\\\"page-list\\\">\\n          <div class=\\\"articles\\\">...loading</div>\\n        </section>\\n      \";\n    preparePage();\n  };\n\n  render();\n}\n\n;\n\nfunction SortList(argument) {}\n\n\n\n//# sourceURL=webpack://RAWG/./src/js/PageList.js?");

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

/***/ "./src/images/linux.svg":
/*!******************************!*\
  !*** ./src/images/linux.svg ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/9a317a7739e9a5267703a9307f8abacb.svg\");\n\n//# sourceURL=webpack://RAWG/./src/images/linux.svg?");

/***/ }),

/***/ "./src/images/mobile.svg":
/*!*******************************!*\
  !*** ./src/images/mobile.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/1aa15eb6e63595f0c01e29fd765f168d.svg\");\n\n//# sourceURL=webpack://RAWG/./src/images/mobile.svg?");

/***/ }),

/***/ "./src/images/ps4.svg":
/*!****************************!*\
  !*** ./src/images/ps4.svg ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/efe97f94b8021d7ce5e8b92bdb4237cc.svg\");\n\n//# sourceURL=webpack://RAWG/./src/images/ps4.svg?");

/***/ }),

/***/ "./src/images/switch.svg":
/*!*******************************!*\
  !*** ./src/images/switch.svg ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/96438e0fb90b0c00220572d7d5b608cc.svg\");\n\n//# sourceURL=webpack://RAWG/./src/images/switch.svg?");

/***/ }),

/***/ "./src/images/xbox.svg":
/*!*****************************!*\
  !*** ./src/images/xbox.svg ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"images/c44b5578fcccee020fd9a5e4b7292bca.svg\");\n\n//# sourceURL=webpack://RAWG/./src/images/xbox.svg?");

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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