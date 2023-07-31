/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n    --navy: #404258;\n    --lower_navy: #404258F3;\n    --gray: #474E68;\n    --white: #ffffff;\n    --btn_add: #de4c4a;\n    --btn_cancel: #292929;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n\nheader {\n    width: 100%;\n    height: 5vh;\n    background-color: var(--navy);\n    color: var(--white);\n    display: flex;\n    align-items: center;\n    padding: 20px;\n}\n.container {\n    height: 95vh;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n    grid-auto-flow: column;\n    \n}\n\n/* LEFT MENU */\n.left_menu {\n    background-color: #3e4058;\n    padding: 30px 20px;\n}\n\n.nav {\n    list-style: none;\n}\n.nav li{\n    margin: 15px 0;\n    font-size: 16px;\n    color: var(--white);\n    padding: 7px;\n    cursor: pointer;\n}\n.nav li:hover{\n    background-color: #42445e;\n    border: 3px;\n    border-radius: 5px;\n}\n\n.nav li img {\n    vertical-align: middle;\n}\n.nav li span {\n    margin-left: 4px;\n}\n\n\n.add-project-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-project-bar {\n    font-size: 16px;\n    margin-top: 30px;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n.project-btns {\n    display: flex;\n    \n}\n\n.arrow {\n    height: 16px;\n    width: 16px;\n    padding-top: 2px;\n    margin: 0px 20px;\n}\n.arrow::before{\n    position: absolute;\n    content: '';\n    width: 10px;\n    height: 10px;\n    border-top: 2px solid #000;\n    border-left: 2px solid #000;\n    transform: rotate(-45deg);\n    transition: transform .25s;\n}\n.arrow.down::before {\n    transform: rotate(-135deg);\n    transition: transform .25s;\n}\n\n.project_menu ul {\n    list-style: none;\n    cursor: pointer;\n}\n\n.nav-project {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.6s linear;\n} \n\n.dropdown {\n    visibility: visible;\n    cursor: none;\n    opacity: 1;\n}\n\n.nav-project li, .dropdown li{\n    margin-left: 5px;\n    color: var(--white);\n    font-size: 16px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.nav-project li, .dropdown li::before {\n    /* content: url(\"../assets/bullet.png\"); */\n    content: \"•\";\n    display: inline-block; \n    width: 1em;\n    font-size: 24px;\n    /* background-color: aqua; */\n}\n\n.nav-project li:hover, \n.dropdown li:hover\n{\n    background-color: #42445e;\n    border: 3px;\n    border-radius: 5px;\n}\n\n.active{\n    background-color: #42445e;\n    border: 3px;\n    border-radius: 5px;\n}\n\n\n/* Project Form after on click + */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgb(0, 0, 0, 0.4);\n    padding-top: 60px;\n}\n\n.modal-content {\n    width: 450px;\n    margin: 5% auto 15% auto;\n    border: 1px solid #000;\n    background-color: var(--navy);\n    color: var(--white);\n    border: 10px;\n    border-radius: 10px;\n}\n\n.projectHeader {\n    font-size: 12px;\n    padding: 15px;\n}\n\n.projectContent {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n}\n\n.projectContent span {\n    margin: 5px 0;\n}\n.inputForm, select {\n    width: calc(100% - 12px);\n    background-color: var(--navy);\n    border: 2px solid;\n    border-color:  var(--gray);\n    border-radius: 5px;\n    padding: 10px;\n    color: var(--white)\n}\n\nhr {\n    border-bottom: 1px solid var(--white);\n}\n\n.btn_container {\n    padding: 15px;\n    display: flex;\n    justify-content: end;\n    width: calc(100% - 12px);\n}\n\n.btn-cancel, .btn-submit {\n    padding: 5px 10px;\n    border: 0px;\n    border-radius: 3px;\n    color: var(--white);\n    font-weight: 600;\n    cursor: pointer;\n    \n}\n.btn-cancel {\n    background-color: var(--btn_cancel);\n    margin-right: 10px;\n}\n\n.btn-submit {\n    background-color: var(--btn_add);\n    \n}\n\n/* RIGHT CONTENT */\n.main_container {\n    background-color: var(--gray);\n    padding: 30px 80px;\n}\n\n/* Inbox Content */\n.inbox {\n    color: var(--white)\n}\n\n.add_task_btn {\n    background-color: rgb(0, 0, 0, 0);\n    border: 0;\n    cursor: pointer;\n    margin: 20px 0;\n    display: flex;\n}\n\n.add_task_btn span {\n    margin-left: 10px;\n}\n\n.weekContainer {\n    display: none;\n}\n.inboxContainer {\n    display: none;\n}\n\n.hideContainer {\n    display: none;\n}\n\n.showContainer {\n    display: block;\n}\n\n.textAreaForm {\n    width: calc(100% - 12px);\n    height: 150px;\n    background-color: var(--navy);\n    border: 2px solid;\n    border-color:  var(--gray);\n    border-radius: 5px;\n    padding: 10px;\n    color: var(--white);\n    resize: none;\n}\n\n.error {\n    width: calc(100% - 12px);\n    background-color: var(--navy);\n    border: 2px solid;\n    border-color:  red;\n    border-radius: 5px;\n    padding: 10px;\n    color: var(--white)\n}\n\n\nsmall {\n    margin-top: 10px;\n    color: red;\n    display: none;\n}\n\n.errorText {\n    margin-top: 5px;\n    color: red;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: var(--navy);\n    \n}\n\n\n\n\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n    --navy: #404258;\n    --lower_navy: #404258F3;\n    --gray: #474E68;\n    --white: #ffffff;\n    --btn_add: #de4c4a;\n    --btn_cancel: #292929;\n}\ninput:focus,\nselect:focus,\ntextarea:focus,\nbutton:focus {\n    outline: none;\n}\n\n* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: sans-serif;\n}\n\nheader {\n    width: 100%;\n    height: 5vh;\n    background-color: var(--navy);\n    color: var(--white);\n    display: flex;\n    align-items: center;\n    padding: 20px;\n}\n.container {\n    height: 95vh;\n    display: grid;\n    grid-template-columns: 305px 1fr;\n    grid-auto-flow: column;\n    \n}\n\n/* LEFT MENU */\n.left_menu {\n    background-color: #3e4058;\n    padding: 30px 20px;\n}\n\n.nav {\n    list-style: none;\n}\n.nav li{\n    margin: 15px 0;\n    font-size: 16px;\n    color: var(--white);\n    padding: 7px;\n    cursor: pointer;\n}\n.nav li:hover{\n    background-color: #42445e;\n    border: 3px;\n    border-radius: 5px;\n}\n\n.nav li img {\n    vertical-align: middle;\n}\n.nav li span {\n    margin-left: 4px;\n}\n\n\n.add-project-bar {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.add-project-bar {\n    font-size: 16px;\n    margin-top: 30px;\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n.project-btns {\n    display: flex;\n    \n}\n\n.arrow {\n    height: 16px;\n    width: 16px;\n    padding-top: 2px;\n    margin: 0px 20px;\n}\n.arrow::before{\n    position: absolute;\n    content: '';\n    width: 10px;\n    height: 10px;\n    border-top: 2px solid #000;\n    border-left: 2px solid #000;\n    transform: rotate(-45deg);\n    transition: transform .25s;\n}\n.arrow.down::before {\n    transform: rotate(-135deg);\n    transition: transform .25s;\n}\n\n.project_menu ul {\n    list-style: none;\n    cursor: pointer;\n}\n\n.nav-project {\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity 0.6s linear;\n} \n\n.dropdown {\n    visibility: visible;\n    cursor: none;\n    opacity: 1;\n}\n\n.nav-project li, .dropdown li{\n    margin-left: 5px;\n    color: var(--white);\n    font-size: 16px;\n    padding: 5px;\n    display: flex;\n    align-items: center;\n}\n\n.nav-project li, .dropdown li::before {\n    /* content: url(\"../assets/bullet.png\"); */\n    content: \"•\";\n    display: inline-block; \n    width: 1em;\n    font-size: 24px;\n    /* background-color: aqua; */\n}\n\n.nav-project li:hover, \n.dropdown li:hover\n{\n    background-color: #42445e;\n    border: 3px;\n    border-radius: 5px;\n}\n\n.active{\n    background-color: #42445e;\n    border: 3px;\n    border-radius: 5px;\n}\n\n\n/* Project Form after on click + */\n.modal {\n    display: none;\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgb(0, 0, 0);\n    background-color: rgb(0, 0, 0, 0.4);\n    padding-top: 60px;\n}\n\n.modal-content {\n    width: 450px;\n    margin: 5% auto 15% auto;\n    border: 1px solid #000;\n    background-color: var(--navy);\n    color: var(--white);\n    border: 10px;\n    border-radius: 10px;\n}\n\n.projectHeader {\n    font-size: 12px;\n    padding: 15px;\n}\n\n.projectContent {\n    padding: 15px;\n    display: flex;\n    flex-direction: column;\n}\n\n.projectContent span {\n    margin: 5px 0;\n}\n.inputForm, select {\n    width: calc(100% - 12px);\n    background-color: var(--navy);\n    border: 2px solid;\n    border-color:  var(--gray);\n    border-radius: 5px;\n    padding: 10px;\n    color: var(--white)\n}\n\nhr {\n    border-bottom: 1px solid var(--white);\n}\n\n.btn_container {\n    padding: 15px;\n    display: flex;\n    justify-content: end;\n    width: calc(100% - 12px);\n}\n\n.btn-cancel, .btn-submit {\n    padding: 5px 10px;\n    border: 0px;\n    border-radius: 3px;\n    color: var(--white);\n    font-weight: 600;\n    cursor: pointer;\n    \n}\n.btn-cancel {\n    background-color: var(--btn_cancel);\n    margin-right: 10px;\n}\n\n.btn-submit {\n    background-color: var(--btn_add);\n    \n}\n\n/* RIGHT CONTENT */\n.main_container {\n    background-color: var(--gray);\n    padding: 30px 80px;\n}\n\n/* Inbox Content */\n.inbox {\n    color: var(--white)\n}\n\n.add_task_btn {\n    background-color: rgb(0, 0, 0, 0);\n    border: 0;\n    cursor: pointer;\n    margin: 20px 0;\n    display: flex;\n}\n\n.add_task_btn span {\n    margin-left: 10px;\n}\n\n.weekContainer {\n    display: none;\n}\n.inboxContainer {\n    display: none;\n}\n\n.hideContainer {\n    display: none;\n}\n\n.showContainer {\n    display: block;\n}\n\n.textAreaForm {\n    width: calc(100% - 12px);\n    height: 150px;\n    background-color: var(--navy);\n    border: 2px solid;\n    border-color:  var(--gray);\n    border-radius: 5px;\n    padding: 10px;\n    color: var(--white);\n    resize: none;\n}\n\n.error {\n    width: calc(100% - 12px);\n    background-color: var(--navy);\n    border: 2px solid;\n    border-color:  red;\n    border-radius: 5px;\n    padding: 10px;\n    color: var(--white)\n}\n\n\nsmall {\n    margin-top: 10px;\n    color: red;\n    display: none;\n}\n\n.errorText {\n    margin-top: 5px;\n    color: red;\n}\n\n::-webkit-calendar-picker-indicator{\n    background-color: var(--navy);\n    \n}\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/getDate/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/getDate/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getDate)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name getDate
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|Number} date - the given date
 * @returns {Number} the day of month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * const result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */

function getDate(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var dayOfMonth = date.getDate();
  return dayOfMonth;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ui */ "./src/Ui.js");



const formProject = (() => {
    // Private variables and functions
    let errorMessage = "";
    
    const showError = (input) => {
        let errorDiv = document.querySelector(".errorText")
        if (!errorDiv) {
            errorDiv = document.createElement("div")
            errorDiv.textContent = errorMessage
            errorDiv.className = "errorText"
            input.parentNode.appendChild(errorDiv)
        }
    }
    
    const insertProject = (project) => {
        const navProject = document.querySelector(".nav-project")
        const dropdown = document.querySelector(".dropdown")
        const target = navProject || dropdown
        
        if (!target) {
            return;
        }
        let projectName = project.name
        const liEl = document.createElement("li")

        liEl.innerText = projectName
        liEl.setAttribute("projectId", project.id)
        liEl.onclick = _Ui__WEBPACK_IMPORTED_MODULE_1__["default"].currentStaus
        target.appendChild(liEl)
        
    }

    // Function to handle form submit 
    const handleSubmit = (event) => {
        event.preventDefault();

        // Get form data
        const form = event.target
        const formData = new FormData(form)

        // Clear any existing erros
        const errorDivs = document.querySelectorAll(".errorText")
        errorDivs.forEach((div) => div.remove())
        
        // check if values are not empty
        let isValid = true;
        let errorInput = null;

        for (const [key, value] of formData.entries()) {
            if (!value || value.trim() === "") {
                isValid = false;
                errorMessage = `Please enter name`
                errorInput = form.elements[key]
                break;
            }
        }

        if (!isValid) {
            showError(errorInput)
        } else {
            const project = createProject(formData.get("project_name"))

            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].projectToStorage(project)
            insertProject(project)
            _Ui__WEBPACK_IMPORTED_MODULE_1__["default"].createProjectContent(project.name)  

            form.reset()
            form.parentNode.style.display = "none"
        } 
    }

    const handleCancel = (event) => {
        const errorDivs = document.querySelectorAll(".errorText")
        errorDivs.forEach((div) => div.remove())
        event.target.form.reset()
        event.target.form.parentNode.style.display = "none"
    }

    const handleModalClick = (event) => {
        const modal = document.querySelector(".modal")
        const input = document.querySelector("input[name='project_name']")
        const error = document.querySelector(".errorText")
        
        if(event.target == modal)
        {
            input.value = ""
            event.target.style.display = "none"
            error.remove()
        }
    }

    return {
        init: () => {
            const form = document.getElementById("projectForm")
            const cancelBtn = document.querySelector(".btn-cancel")
            const modalParent = form.parentNode

            form.addEventListener("submit", handleSubmit)
            cancelBtn.addEventListener("click", handleCancel)
            modalParent.addEventListener("click", handleModalClick)
        },
        
    }
})()

const Project = (function() {
    
    let project_id = 0;

    const addTodo = (task) => {
        this.tasks.push(task)
    }
    const deleteTodo = (task) => {
        this.tasks = this.tasks.filter((t) => t !== task)
    }

    return function Project(name) {
        this.id = project_id++,
        this.name = name,
        this.tasks = [],
        addTodo,
        deleteTodo
    }
})()

/* 
    Creating new Project
*/
const createProject = (name) => {
    let newProject = new Project(name)
    return newProject
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formProject);


/***/ }),

/***/ "./src/Storage.js":
/*!************************!*\
  !*** ./src/Storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const projectToStorage = (project) => {
    let projects_list = JSON.parse(localStorage.getItem("projects"))     
        
    // If project list is not existing in local storage
    if (projects_list == null){
        projects_list = []
    }
    projects_list.push(project)
    localStorage.setItem("projects", JSON.stringify(projects_list))
}

const taskToStorage = (task) => {
    console.log(task)
    // When user check project not inbox
    if (task.projectId !== 0)
    {
        let projectList = JSON.parse(localStorage.getItem("projects")) 
        
        // If project list is not existing in local storage
        if (projectList == null){
            return;
        }
        
        let project = projectList.find(project => project.id === task.projectId)
        project.tasks.push(task)
        localStorage.setItem("projects", JSON.stringify(projectList))
    }
    
    // When user check inbox as a project 
    if (task.projectId == 0)
    {
        let inboxList = JSON.parse(localStorage.getItem("inbox"))
            
        // If localStorage don't have any tasks in inbox
        if (inboxList === null)
        {
            inboxList = [{
                "id": 0,
                "name": "inbox",
                "tasks": []
            }]
                
        }
        inboxList[0].tasks.push(task)
            
        localStorage.setItem("inbox", JSON.stringify(inboxList))
    }
}
    
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({projectToStorage, taskToStorage});


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "handleFormTaskProjectSelect": () => (/* binding */ handleFormTaskProjectSelect)
/* harmony export */ });
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/getDate/index.js");



/* 
    Task Form
*/
const formTask = (() => {
    let errorMessage = "";
    
    const showError = (input) => {
        let errorDiv = document.createElement("div")
        errorDiv.textContent = errorMessage.split("task").join(" ").toLowerCase()
        errorDiv.className = "errorText"
        input.parentNode.appendChild(errorDiv)
    }

    const handleDateInput = (event) => {
        let form = event.target.form;
        let dateInput = form.elements.dateTask
        let today = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date())
        dateInput.setAttribute("min", today)
    }
    const handleFormProjectSelect = (event) => {
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target
        const formData = new FormData(form)

        const errorDivs = document.querySelectorAll(".errorText")
        errorDivs.forEach((div) => div.remove())

        let isValid = true;
        let errorInput = null;

        for (const [key, value] of formData.entries()) {
            if (!value || value.trim() === "") {
                isValid = false;
                errorMessage = `Please enter ${key}`
                errorInput = form.elements[key]
                showError(errorInput)
            }
        }
        
        if (isValid) 
        {
            const task = createTask(formData)
            _Storage__WEBPACK_IMPORTED_MODULE_0__["default"].taskToStorage(task)

            form.reset()
            form.parentNode.style.display = "none"
        } 
        else 
        {
            console.log("XD?")
        } 
    }

    return {
        init: () => {
            const taskForm = document.getElementById("taskForm")
            const dateInput = document.getElementById("dateTask")

            dateInput.addEventListener("click", handleDateInput)
            taskForm.addEventListener("submit", handleSubmit)
            
        }
    }

})()

const Task = (function(){
        let task_id = 0
    
        return function Task(form) {
            this.id = task_id++
            this.name  = form.get("taskName")
            this.description = form.get("taskDescription")
            this.priority = form.get("taskPriority")
            this.projectId = parseInt(form.get("taskProject"))
        }
})()

/* 
    Creating new Task
*/
const createTask = (form) => {
    let newTask = new Task(form)
    return newTask
}

function handleFormTaskProjectSelect(){
    const projects = JSON.parse(localStorage.getItem("projects"))

    if (projects === null){
        return;
    }
    const selectTaskProject = document.querySelector("#projectTask")

    projects.forEach((project)=>{

        // Check if the option already exist
        const optionExist = Array
        .from(selectTaskProject.options)
        .some(option => parseInt(option.value) == parseInt(project.id))
            
        if (!optionExist) {
            const optionEl = document.createElement("option")
            optionEl.value = project.id
            optionEl.text = project.name
    
            // Add new option to selectTaskProject
            selectTaskProject.add(optionEl)
        }
        
    })
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formTask);


// formTask.init()

/***/ }),

/***/ "./src/Ui.js":
/*!*******************!*\
  !*** ./src/Ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
 



function initalizeButtons(){
    const createProjectBtn = document.querySelector("#create_btn")
    const addTaskBtn = document.querySelector(".add_task_btn")
    const arrowShowProjectBtn = document.querySelector("#arrow")

    createProjectBtn.addEventListener("click", handleCreateProjectBtn)
    addTaskBtn.addEventListener("click", handleAddTaskBtn)
    arrowShowProjectBtn.addEventListener("click", handleArrowShowProjectBtn)
}

function handleCreateProjectBtn(event) {
    let projectForm = document.getElementById("hiddenForm").style.display = "block"
}
function handleAddTaskBtn(event) {
    let taskForm = document.getElementById('hiddenTaskForm').style.display = 'block'
    ;(0,_Task__WEBPACK_IMPORTED_MODULE_0__.handleFormTaskProjectSelect)()
}

function handleArrowShowProjectBtn(event){
    event.target.classList.toggle("down");
    let ariaExpaned = event.target.classList.contains("down")
    
    const navProjectList = document.querySelector("#projectList")
    if (!ariaExpaned)
    {
        navProjectList.className = "nav-project"
    } 
    else{
        navProjectList.className = "dropdown"
    }
}

function currentStaus(event) {
    const activeProject = document.querySelector(".active")

    activeProject.classList.remove("active")
    event.target.classList.add("active")

    let name = event.target.getAttribute("name")
    createProjectContent(name)
    
}


function createProjectContent(project_name) {
    const template = `
        <div class="showContainer">
            <h1>${project_name}</h1>
        </div>
    `
    
    document.querySelector(".showContainer").remove()
    document.querySelector(".main_container").insertAdjacentHTML("afterbegin", template)
    
}
function handleNavBtn(e){
    console.log(e.target)
}
const app = (() =>{
    function init(){
        userSelection()
        initalizeButtons()
        _Project__WEBPACK_IMPORTED_MODULE_1__["default"].init()
        _Task__WEBPACK_IMPORTED_MODULE_0__["default"].init()
    }
    
    return {
        init: function() {
            return this.init();
        },
    };
})()

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);

/***/ }),

/***/ "./src/animation.js":
/*!**************************!*\
  !*** ./src/animation.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const arrow = document.querySelector("#arrow")
document.querySelectorAll(".nav").forEach((el) =>{
    for (const child of el.children)
    {
        child.addEventListener("click", (e)=>{
                const currentActive = document.querySelector(".active")
                if(currentActive)
                {
                    currentActive.classList.remove("active")
                }
                // console.log(currentActive)
                e.target.classList.add("active")
        })
    }
});


const modalTask = document.querySelector("#hiddenTaskForm")

window.onclick = function(e) {
    
    if (e.target == modalTask){
        modalTask.style.display = "none"
    }
}

// 

function currentStaus(event) {
    const activeProject = document.querySelector(".active")

    activeProject.classList.remove("active")
    event.target.classList.add("active")

    let name = event.target.getAttribute("name")
    createProjectContent(name)
    
}

const btn = document.querySelector(".btn_add_task")

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (currentStaus);

/*  
    1. check localStorage if there is already exist project
        a. if Exist getlocalstorage items and print in to website
        b. if no Exist createElement in LocalStorage and set as active
  
    2. Do that when user click btn site show what he wants
    
*/



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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animation */ "./src/animation.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Storage */ "./src/Storage.js");
/* harmony import */ var _Ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Ui */ "./src/Ui.js");








console.log("XD")



})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map