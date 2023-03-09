/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n --board-width: 9;\n}\n\n* {\n  font-family: 'Ubuntu', sans-serif;\n  background-color: rgb(245,245,245);\n  color: #212121;\n  box-sizing: border-box;\n  margin: 0;\n}\n  /*            */\n /* ANIMATIONS */\n/*           */\n@keyframes logoRotation {\n  from {\n      transform: scale(1) rotate(0);\n  }\n\n  to {\n      transform: scale(1.2) rotate(720deg);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n      opacity: 0;\n  }\n\n  to {\n      opacity: 1;\n  }\n}\n\n  /*               */\n /* STYLE CLASSES */\n/*               */\n.flexRow {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flexColumn {\n  display: flex;\n  flex-direction: column;\n}\n\n.centered {\n  align-items: center;\n  justify-content: center;\n}\n\n.left {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.right {\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.spacedEvenly {\n  justify-content: space-evenly;\n}\n\n.spacedApart {\n  justify-content: space-between;\n}\n\n.softBorder {\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 12px;\n  padding: 1rem;\n}\n\n.green {\n  background-color: green;\n}\n\n.hidden {\n  display: none;\n}\n  /*                */\n /* MAIN CONTAINER */\n/*                */\n\n#mainContainer {\n  height: fit-content;\n  min-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navigation Bar */\n#navContainer {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  padding: 1rem;\n}\n\n#siteName {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#menuBar {\n  gap: 2rem;\n  padding: 1rem;\n  justify-content: flex-end;\n}\n\n.menuItem {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n#menuIcon {\n  z-index: 5;\n  height: 3rem;\n  width: 3rem;\n}\n\n  /*            */\n /* INFO BOARD */\n/*            */\n\n#infoBoard{\n  height: 2.5rem;\n  width: fit-content;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-evenly;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n  /*            */\n /* GAME BOARD */\n/*            */\n\n#gameBoard {\n  height: fit-content;\n  margin-top: 2rem;\n  max-width: 90vw;\n  display: grid;\n  grid-template-columns: repeat(var(--board-width), 1fr);\n  grid-template-rows: auto;\n\n}\n\n.gameCell {\n  height: 2.5rem;\n  width: 2.5rem;\n  outline: 1px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.green {\n  background-color: green;\n}\n\n.gameCell:hover {\n  background-color: lightgrey;\n}\n\n.mine {\n  \n}\n\n  /*        */\n /* FOOTER */\n/*        */\n\n#gitLogo {\n  height: 2rem;\n  width: 2rem;\n}\n\n#gitLogo:hover {\n  animation: logoRotation .75s;\n  animation-fill-mode: forwards;\n}\n\nfooter {\n  padding: 3rem 0 1rem 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;CACC,gBAAgB;AACjB;;AAEA;EACE,iCAAiC;EACjC,kCAAkC;EAClC,cAAc;EACd,sBAAsB;EACtB,SAAS;AACX;EACE,eAAe;CAChB,eAAe;AAChB,cAAc;AACd;EACE;MACI,6BAA6B;EACjC;;EAEA;MACI,oCAAoC;EACxC;AACF;;AAEA;EACE;MACI,UAAU;EACd;;EAEA;MACI,UAAU;EACd;AACF;;EAEE,kBAAkB;CACnB,kBAAkB;AACnB,kBAAkB;AAClB;EACE,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;EACvB,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;AAC3B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,8BAA8B;AAChC;;AAEA;EACE,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;EACE,mBAAmB;CACpB,mBAAmB;AACpB,mBAAmB;;AAEnB;EACE,mBAAmB;EACnB,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,iBAAiB;EACjB,8BAA8B;EAC9B,WAAW;EACX,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,iBAAiB;AACnB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;AACb;;EAEE,eAAe;CAChB,eAAe;AAChB,eAAe;;AAEf;EACE,cAAc;EACd,kBAAkB;EAClB,aAAa;EACb,SAAS;EACT,6BAA6B;EAC7B,mBAAmB;EACnB,iBAAiB;EACjB,iBAAiB;AACnB;;EAEE,eAAe;CAChB,eAAe;AAChB,eAAe;;AAEf;EACE,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;EACf,aAAa;EACb,sDAAsD;EACtD,wBAAwB;;AAE1B;;AAEA;EACE,cAAc;EACd,aAAa;EACb,kBAAkB;EAClB,aAAa;EACb,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;;AAEA;;EAEE,WAAW;CACZ,WAAW;AACZ,WAAW;;AAEX;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,4BAA4B;EAC5B,6BAA6B;AAC/B;;AAEA;EACE,sBAAsB;EACtB,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,SAAS;AACX","sourcesContent":[":root {\n --board-width: 9;\n}\n\n* {\n  font-family: 'Ubuntu', sans-serif;\n  background-color: rgb(245,245,245);\n  color: #212121;\n  box-sizing: border-box;\n  margin: 0;\n}\n  /*            */\n /* ANIMATIONS */\n/*           */\n@keyframes logoRotation {\n  from {\n      transform: scale(1) rotate(0);\n  }\n\n  to {\n      transform: scale(1.2) rotate(720deg);\n  }\n}\n\n@keyframes fadeIn {\n  from {\n      opacity: 0;\n  }\n\n  to {\n      opacity: 1;\n  }\n}\n\n  /*               */\n /* STYLE CLASSES */\n/*               */\n.flexRow {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.flexColumn {\n  display: flex;\n  flex-direction: column;\n}\n\n.centered {\n  align-items: center;\n  justify-content: center;\n}\n\n.left {\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n\n.right {\n  align-items: flex-end;\n  justify-content: flex-end;\n}\n\n.spacedEvenly {\n  justify-content: space-evenly;\n}\n\n.spacedApart {\n  justify-content: space-between;\n}\n\n.softBorder {\n  border-style: solid;\n  border-width: 2px;\n  border-radius: 12px;\n  padding: 1rem;\n}\n\n.green {\n  background-color: green;\n}\n\n.hidden {\n  display: none;\n}\n  /*                */\n /* MAIN CONTAINER */\n/*                */\n\n#mainContainer {\n  height: fit-content;\n  min-height: 85vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* Navigation Bar */\n#navContainer {\n  display: flex;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  width: 100%;\n  align-items: center;\n  padding: 1rem;\n}\n\n#siteName {\n  font-size: 1.5rem;\n  font-weight: bold;\n}\n\n#menuBar {\n  gap: 2rem;\n  padding: 1rem;\n  justify-content: flex-end;\n}\n\n.menuItem {\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n#menuIcon {\n  z-index: 5;\n  height: 3rem;\n  width: 3rem;\n}\n\n  /*            */\n /* INFO BOARD */\n/*            */\n\n#infoBoard{\n  height: 2.5rem;\n  width: fit-content;\n  display: flex;\n  gap: 2rem;\n  justify-content: space-evenly;\n  align-items: center;\n  font-weight: bold;\n  font-size: 1.2rem;\n}\n\n  /*            */\n /* GAME BOARD */\n/*            */\n\n#gameBoard {\n  height: fit-content;\n  margin-top: 2rem;\n  max-width: 90vw;\n  display: grid;\n  grid-template-columns: repeat(var(--board-width), 1fr);\n  grid-template-rows: auto;\n\n}\n\n.gameCell {\n  height: 2.5rem;\n  width: 2.5rem;\n  outline: 1px solid;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.green {\n  background-color: green;\n}\n\n.gameCell:hover {\n  background-color: lightgrey;\n}\n\n.mine {\n  \n}\n\n  /*        */\n /* FOOTER */\n/*        */\n\n#gitLogo {\n  height: 2rem;\n  width: 2rem;\n}\n\n#gitLogo:hover {\n  animation: logoRotation .75s;\n  animation-fill-mode: forwards;\n}\n\nfooter {\n  padding: 3rem 0 1rem 0;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n}"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadFooter)
/* harmony export */ });
/* harmony import */ var _github_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./github.svg */ "./src/components/footer/github.svg");


function loadFooter() {
  let footerText = document.createElement("p");
  footerText.textContent = "© 2023 Matt Talley (socrastein)";

  let logoContainer = document.createElement("a");
  logoContainer.href = "https://github.com/socrastein";
  logoContainer.target = "_blank";

  let logoImage = document.createElement("img");
  logoImage.src = _github_svg__WEBPACK_IMPORTED_MODULE_0__;
  logoImage.id = "gitLogo";
  logoContainer.appendChild(logoImage);

  const footer = document.querySelector("footer");

  footer.appendChild(footerText);
  footer.appendChild(logoContainer);
  
}


/***/ }),

/***/ "./src/components/gameBoard/checkWin.js":
/*!**********************************************!*\
  !*** ./src/components/gameBoard/checkWin.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _endGame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./endGame */ "./src/components/gameBoard/endGame.js");
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameState */ "./src/components/gameBoard/gameState.js");



/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let clearedCells = document.getElementsByClassName("clear");
  let cellsWithoutMines = _gameState__WEBPACK_IMPORTED_MODULE_1__["default"].boardCellCount - _gameState__WEBPACK_IMPORTED_MODULE_1__["default"].numberMines;

  if (clearedCells.length === cellsWithoutMines) {
    console.log("WINNER");
    (0,_endGame__WEBPACK_IMPORTED_MODULE_0__["default"])(true);
  }
}


/***/ }),

/***/ "./src/components/gameBoard/clickCell.js":
/*!***********************************************!*\
  !*** ./src/components/gameBoard/clickCell.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ clickCell)
/* harmony export */ });
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ "./src/components/gameBoard/gameState.js");
/* harmony import */ var _endGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endGame */ "./src/components/gameBoard/endGame.js");
/* harmony import */ var _checkWin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./checkWin */ "./src/components/gameBoard/checkWin.js");




function checkNeighboringCells(cellIndex) {
  let checkedCell = document.getElementById(`cell_${cellIndex}`);
  let w = _gameState__WEBPACK_IMPORTED_MODULE_0__["default"].boardWidth;
  let neighborValues = [-w - 1, -w, -w + 1, -1, 1, w - 1, w, w + 1]; // surrounding 6 cell's indices;
  // If clicked cell is on left side of board, ignore neighbors to left
  if (cellIndex % w == 0) {
    neighborValues = [-w, -w + 1, 1, w, w + 1];
  }
  // If clicked cell is on right side of board, ignore neighbors to right
  if (cellIndex % w == w - 1) {
    neighborValues = [-w - 1, -w, -1, w - 1, w];
  }
  let neighborArray = [];
  let mineDetected = false;
  let mineCount = 0;
  for (let i in neighborValues) {
    let neighborIndex = cellIndex + neighborValues[i];
    if (neighborIndex < 0 || neighborIndex > _gameState__WEBPACK_IMPORTED_MODULE_0__["default"].boardCellCount - 1) {
      continue;
    }
    let neighbor = document.getElementById(`cell_${neighborIndex}`);
    if (neighbor.classList.contains("mine")) {
      mineDetected = true;
      mineCount++;
    } else checkedCell.classList.add("clear");
    if (!neighbor.classList.contains("clear")) {
      neighborArray.push(neighborIndex);
    }
  }

  if (mineDetected) {
    checkedCell.innerHTML = `${mineCount}`;
    switch (mineCount) {
      case 1:
        checkedCell.style.backgroundColor = "";
    }
  } else {
    checkedCell.style.backgroundColor = "lightgrey";
    checkedCell.classList.add("clear");
    for (let i in neighborArray) {
      checkNeighboringCells(neighborArray[i]);
    }
  }

  (0,_checkWin__WEBPACK_IMPORTED_MODULE_2__["default"])();
}

function clickCell(cell) {
  if (_gameState__WEBPACK_IMPORTED_MODULE_0__["default"].gameOver) {
    return;
  }
  let cellIndex = Number(cell.target.id.substring(5));

  if (cell.target.classList.contains("mine")) {
    (0,_endGame__WEBPACK_IMPORTED_MODULE_1__["default"])();
    return;
  } else checkNeighboringCells(cellIndex);
}


/***/ }),

/***/ "./src/components/gameBoard/endGame.js":
/*!*********************************************!*\
  !*** ./src/components/gameBoard/endGame.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ "./src/components/gameBoard/gameState.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(win = false) {
  let difficultyDisplay = document.getElementById("difficultyDisplay");
  _gameState__WEBPACK_IMPORTED_MODULE_0__["default"].gameOver = true;
  let mines = document.getElementsByClassName("mine");
  for (let i = 0; i < mines.length; i++) {
    console.log(mines[i]);
    mines[i].innerHTML = "💣";
  }
  if (win) {
    difficultyDisplay.innerHTML = "You win!";
    console.log("You win!");
  } else {
    difficultyDisplay.innerHTML = "You lose";
    console.log("You lose");
  }
}


/***/ }),

/***/ "./src/components/gameBoard/gameState.js":
/*!***********************************************!*\
  !*** ./src/components/gameBoard/gameState.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const gameState = {
  difficulty: "easy",
  boardHeight: 9,
  boardWidth: 9,
  numberMines: 10,
  numberFlags: 0,
  hoveredCell: undefined,
  mouseOverGameboard: false,
  gameOver: false,
  get boardCellCount() {
    return this.boardHeight * this.boardWidth;
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameState);


/***/ }),

/***/ "./src/components/gameBoard/setFlag.js":
/*!*********************************************!*\
  !*** ./src/components/gameBoard/setFlag.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameState */ "./src/components/gameBoard/gameState.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let flagCountDisplay = document.getElementById("flagCountDisplay");
  if(!_gameState__WEBPACK_IMPORTED_MODULE_0__["default"].mouseOverGameboard){
    return
  }
  if(_gameState__WEBPACK_IMPORTED_MODULE_0__["default"].hoveredCell.innerHTML == "🚩"){
    _gameState__WEBPACK_IMPORTED_MODULE_0__["default"].hoveredCell.innerHTML = "";
    _gameState__WEBPACK_IMPORTED_MODULE_0__["default"].numberFlags -= 1;
  } else {
    _gameState__WEBPACK_IMPORTED_MODULE_0__["default"].hoveredCell.innerHTML = "🚩";
    _gameState__WEBPACK_IMPORTED_MODULE_0__["default"].numberFlags += 1;
  }

  flagCountDisplay.innerHTML = `🚩 ${_gameState__WEBPACK_IMPORTED_MODULE_0__["default"].numberFlags}x`
  return false;
}

/***/ }),

/***/ "./src/components/navbar/navBar.js":
/*!*****************************************!*\
  !*** ./src/components/navbar/navBar.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadNavBar)
/* harmony export */ });
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.svg */ "./src/components/navbar/menu.svg");
/* harmony import */ var _newGame_newGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../newGame/newGame */ "./src/components/newGame/newGame.js");
/* harmony import */ var _toggleMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toggleMenu */ "./src/components/navbar/toggleMenu.js");

// import siteLogo from "./logo.svg";





function loadNavBar() {
  let mainContainer = document.getElementById("mainContainer");

  let navContainer = document.createElement("div");
  navContainer.id = "navContainer";
  navContainer.classList.add("flexRow", "spacedApart");
  mainContainer.appendChild(navContainer);

  let siteTitle = document.createElement("div");
  siteTitle.id = "siteTitle";
  navContainer.appendChild(siteTitle);

  // let siteLogo = document.createElement("img");
  // siteLogo.id = "siteLogo";
  // siteLogo.src = siteLogo;
  // siteTitle.appendChild(siteLogo);

  let siteName = document.createElement("p");
  siteName.id = "siteName";
  siteName.textContent = "Minesweeper 💣";
  siteTitle.appendChild(siteName);

  let menuBar = document.createElement("div");
  menuBar.id = "menuBar";
  menuBar.classList.add("flexRow");
  navContainer.appendChild(menuBar);

  let menuItems = [
    { name: "Easy", onClick: () => (0,_newGame_newGame__WEBPACK_IMPORTED_MODULE_1__["default"])("easy") },
    { name: "Normal", onClick: () => (0,_newGame_newGame__WEBPACK_IMPORTED_MODULE_1__["default"])("normal") },
    { name: "Hard", onClick: () => (0,_newGame_newGame__WEBPACK_IMPORTED_MODULE_1__["default"])("hard") },
  ];

  menuItems.forEach((item) => {
    let menuItem = document.createElement("p");
    menuItem.textContent = item.name;
    menuItem.onclick = item.onClick;
    menuItem.classList.add("menuItem");
    menuBar.appendChild(menuItem);
  });

  let menuIcon = document.createElement("img");
  menuIcon.src = _menu_svg__WEBPACK_IMPORTED_MODULE_0__;
  menuIcon.id = "menuIcon";
  menuIcon.onclick = _toggleMenu__WEBPACK_IMPORTED_MODULE_2__["default"];
  navContainer.appendChild(menuIcon);
}


/***/ }),

/***/ "./src/components/navbar/navBarResize.js":
/*!***********************************************!*\
  !*** ./src/components/navbar/navBarResize.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ onResize)
/* harmony export */ });
function onResize() {
  let screenWidth = window.screen.width;
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon");

  if (screenWidth < 600) {
    // siteLogo.style.height = "30px";
    // siteLogo.style.width = "30px";
    menuBar.classList.add("hidden");
    menuIcon.classList.remove("hidden");
  } else {
    // siteLogo.style.height = "50px";
    // siteLogo.style.width = "50px";
    menuBar.classList.remove("hidden");
    menuIcon.classList.add("hidden");
  }
}

/***/ }),

/***/ "./src/components/navbar/toggleMenu.js":
/*!*********************************************!*\
  !*** ./src/components/navbar/toggleMenu.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toggleMenu)
/* harmony export */ });
/* harmony import */ var _x_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./x.svg */ "./src/components/navbar/x.svg");
/* harmony import */ var _menu_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.svg */ "./src/components/navbar/menu.svg");



function toggleMenu() {
  let screenWidth = window.screen.width;
  console.log("Toggling menu");
  const menuBar = document.getElementById("menuBar");
  const menuIcon = document.getElementById("menuIcon")
  if (screenWidth >= 600) {
    return;
  }
  
  if(menuBar.classList.contains("hidden")){
    menuIcon.src = _x_svg__WEBPACK_IMPORTED_MODULE_0__;

    menuBar.setAttribute("class", "flexColumn centered");
    menuBar.style.position = "absolute";
    menuBar.style.top = "0";
    menuBar.style.paddingTop = "2rem";
    menuBar.style.width = "100%";
  } else {
    menuIcon.src = _menu_svg__WEBPACK_IMPORTED_MODULE_1__;
    menuBar.setAttribute("class", "flexRow hidden");
    menuBar.style.position = "static";
    menuBar.style.paddingTop = "1rem";
  }
}


/***/ }),

/***/ "./src/components/newGame/infoBoard.js":
/*!*********************************************!*\
  !*** ./src/components/newGame/infoBoard.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../gameBoard/gameState */ "./src/components/gameBoard/gameState.js");


/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__() {
  let infoBoard = document.createElement("div");
  infoBoard.id = "infoBoard";

  let difficultyDisplay = document.createElement("div");
  difficultyDisplay.id = "difficultyDisplay";
  infoBoard.appendChild(difficultyDisplay);

  let mineCountDisplay = document.createElement("div");
  mineCountDisplay.id = "mineCountDisplay";
  infoBoard.appendChild(mineCountDisplay);

  let flagCountDisplay = document.createElement("div");
  flagCountDisplay.id = "flagCountDisplay";
  infoBoard.appendChild(flagCountDisplay);

  let mainContainer = document.getElementById("mainContainer");
  mainContainer.appendChild(infoBoard);
}

/***/ }),

/***/ "./src/components/newGame/newGame.js":
/*!*******************************************!*\
  !*** ./src/components/newGame/newGame.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ newGame)
/* harmony export */ });
/* harmony import */ var _navbar_toggleMenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../navbar/toggleMenu */ "./src/components/navbar/toggleMenu.js");
/* harmony import */ var _gameBoard_clickCell__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../gameBoard/clickCell */ "./src/components/gameBoard/clickCell.js");
/* harmony import */ var _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gameBoard/gameState */ "./src/components/gameBoard/gameState.js");




function newGame(difficulty) {
  // Infoboard items:
  let difficultyDisplay = document.getElementById("difficultyDisplay");
  let mineCountDisplay = document.getElementById("mineCountDisplay");
  let flagCountDisplay = document.getElementById("flagCountDisplay");

  switch (difficulty) {
    case "easy":
      console.log("New Game: Easy");
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardHeight = 9;
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardWidth = 9;
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].numberMines = 10;
      difficultyDisplay.innerHTML = "Easy 9x9"
      mineCountDisplay.innerHTML = "💣 10x"
      document.documentElement.style.setProperty('--board-width', '9');
      break;

    case "normal":
      console.log("New Game: Normal");
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardHeight = 12;
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardWidth = 12;
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].numberMines = 24;
      difficultyDisplay.innerHTML = "Normal 12x12"
      mineCountDisplay.innerHTML = "💣 24x"
      document.documentElement.style.setProperty('--board-width', '12');

      break;

    case "hard":
      console.log("New Game: Hard");
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardHeight = 16;
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardWidth = 16;
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].numberMines = 45;
      difficultyDisplay.innerHTML = "Hard 16x16";
      mineCountDisplay.innerHTML = "💣 45x"
      document.documentElement.style.setProperty('--board-width', '16');

      break;
  }

  flagCountDisplay.innerHTML = "🚩 0x"

  let mainContainer = document.getElementById("mainContainer");
  let gameBoardContainer = document.getElementById("gameBoard");
  let gameBoardArray;

  if (!gameBoardContainer) {
    gameBoardContainer = document.createElement("div");
    gameBoardContainer.id = "gameBoard";
  } else {
    gameBoardContainer.innerHTML = "";
  }

  gameBoardContainer.addEventListener("mouseleave", () => {
    _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].mouseOverGameboard = false;
  });

  for (let i = 0; i < _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardCellCount; i++) {
    let gameBoardCell = document.createElement("div");
    gameBoardCell.classList.add("gameCell");
    gameBoardCell.id = `cell_${i}`;
    gameBoardCell.addEventListener("click", _gameBoard_clickCell__WEBPACK_IMPORTED_MODULE_1__["default"]);
    gameBoardContainer.appendChild(gameBoardCell);
  }

  mainContainer.appendChild(gameBoardContainer);

  gameBoardArray = gameBoardContainer.childNodes;

  while (true) {
    let totalMines = document.querySelectorAll(".mine").length;
    if (totalMines >= _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].numberMines) {
      break;
    }

    let randomNode =
      gameBoardArray[Math.floor(Math.random() * _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].boardCellCount)];
    if (randomNode.classList.contains("mine")) {
      continue;
    } else {
      randomNode.classList.add("mine");
    }
  }

  let allMyHoverElements = document.getElementsByClassName("gameCell");

  for (let i = 0; i < allMyHoverElements.length; i++) {
    allMyHoverElements.item(i).onmouseover = function () {
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].mouseOverGameboard = true;
      _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].hoveredCell = this;
    };
  }

  _gameBoard_gameState__WEBPACK_IMPORTED_MODULE_2__["default"].gameOver = false;

  const menuBar = document.getElementById("menuBar");
  if (menuBar.classList.contains("hidden")) {
    return;
  } else (0,_navbar_toggleMenu__WEBPACK_IMPORTED_MODULE_0__["default"])();
}


/***/ }),

/***/ "./src/components/footer/github.svg":
/*!******************************************!*\
  !*** ./src/components/footer/github.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "080591513b1a3eb8fdfe.svg";

/***/ }),

/***/ "./src/components/navbar/menu.svg":
/*!****************************************!*\
  !*** ./src/components/navbar/menu.svg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cade3556e6c9b326d623.svg";

/***/ }),

/***/ "./src/components/navbar/x.svg":
/*!*************************************!*\
  !*** ./src/components/navbar/x.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "64f09d760e8936f5907a.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _components_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/footer/footer */ "./src/components/footer/footer.js");
/* harmony import */ var _components_navbar_navBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/navbar/navBar */ "./src/components/navbar/navBar.js");
/* harmony import */ var _components_navbar_navBarResize__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/navbar/navBarResize */ "./src/components/navbar/navBarResize.js");
/* harmony import */ var _components_newGame_newGame__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/newGame/newGame */ "./src/components/newGame/newGame.js");
/* harmony import */ var _components_gameBoard_setFlag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/gameBoard/setFlag */ "./src/components/gameBoard/setFlag.js");
/* harmony import */ var _components_newGame_infoBoard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/newGame/infoBoard */ "./src/components/newGame/infoBoard.js");


// IMPORTING IMAGES:
// import myImage from './my-image.png'



// IMPORTING MODULES:
// import myFunction from './module'








// CONSTANT ELEMENTS
window.oncontextmenu = _components_gameBoard_setFlag__WEBPACK_IMPORTED_MODULE_5__["default"];

// EVENT LISTENERS
// For displaying mobile menu when screen < 500px wide
window.addEventListener("resize", _components_navbar_navBarResize__WEBPACK_IMPORTED_MODULE_3__["default"]);

// RUN FUNCTIONS TO LOAD CONTENT:
(0,_components_navbar_navBar__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_components_navbar_navBarResize__WEBPACK_IMPORTED_MODULE_3__["default"])();

(0,_components_newGame_infoBoard__WEBPACK_IMPORTED_MODULE_6__["default"])();
(0,_components_newGame_newGame__WEBPACK_IMPORTED_MODULE_4__["default"])("easy");

(0,_components_footer_footer__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7O0FBRXJCO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ29EO0FBQ0E7QUFDSTtBQUNMO0FBQ0U7QUFDRTs7O0FBR3ZEO0FBQ0EsdUJBQXVCLHFFQUFPOztBQUU5QjtBQUNBO0FBQ0Esa0NBQWtDLHVFQUFROztBQUUxQztBQUNBLHFFQUFVO0FBQ1YsMkVBQVE7O0FBRVIseUVBQVM7QUFDVCx1RUFBTzs7QUFFUCxxRUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dhbWVCb2FyZC9jaGVja1dpbi5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZUJvYXJkL2NsaWNrQ2VsbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZ2FtZUJvYXJkL2VuZEdhbWUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dhbWVCb2FyZC9nYW1lU3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2dhbWVCb2FyZC9zZXRGbGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2QmFyLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvbmF2QmFyUmVzaXplLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvdG9nZ2xlTWVudS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbmV3R2FtZS9pbmZvQm9hcmQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL25ld0dhbWUvbmV3R2FtZS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAtLWJvYXJkLXdpZHRoOiA5O1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiAnVWJ1bnR1Jywgc2Fucy1zZXJpZjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDUsMjQ1LDI0NSk7XFxuICBjb2xvcjogIzIxMjEyMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxufVxcbiAgLyogICAgICAgICAgICAqL1xcbiAvKiBBTklNQVRJT05TICovXFxuLyogICAgICAgICAgICovXFxuQGtleWZyYW1lcyBsb2dvUm90YXRpb24ge1xcbiAgZnJvbSB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKSByb3RhdGUoMCk7XFxuICB9XFxuXFxuICB0byB7XFxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpIHJvdGF0ZSg3MjBkZWcpO1xcbiAgfVxcbn1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICBmcm9tIHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblxcbiAgLyogICAgICAgICAgICAgICAqL1xcbiAvKiBTVFlMRSBDTEFTU0VTICovXFxuLyogICAgICAgICAgICAgICAqL1xcbi5mbGV4Um93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcblxcbi5mbGV4Q29sdW1uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uY2VudGVyZWQge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG59XFxuXFxuLnJpZ2h0IHtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5zcGFjZWRFdmVubHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxufVxcblxcbi5zcGFjZWRBcGFydCB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi5zb2Z0Qm9yZGVyIHtcXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICBib3JkZXItd2lkdGg6IDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4uZ3JlZW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuICAvKiAgICAgICAgICAgICAgICAqL1xcbiAvKiBNQUlOIENPTlRBSU5FUiAqL1xcbi8qICAgICAgICAgICAgICAgICovXFxuXFxuI21haW5Db250YWluZXIge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1pbi1oZWlnaHQ6IDg1dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi8qIE5hdmlnYXRpb24gQmFyICovXFxuI25hdkNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiBub3dyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4jc2l0ZU5hbWUge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21lbnVCYXIge1xcbiAgZ2FwOiAycmVtO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbi5tZW51SXRlbSB7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI21lbnVJY29uIHtcXG4gIHotaW5kZXg6IDU7XFxuICBoZWlnaHQ6IDNyZW07XFxuICB3aWR0aDogM3JlbTtcXG59XFxuXFxuICAvKiAgICAgICAgICAgICovXFxuIC8qIElORk8gQk9BUkQgKi9cXG4vKiAgICAgICAgICAgICovXFxuXFxuI2luZm9Cb2FyZHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnJlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcblxcbiAgLyogICAgICAgICAgICAqL1xcbiAvKiBHQU1FIEJPQVJEICovXFxuLyogICAgICAgICAgICAqL1xcblxcbiNnYW1lQm9hcmQge1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1hcmdpbi10b3A6IDJyZW07XFxuICBtYXgtd2lkdGg6IDkwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tYm9hcmQtd2lkdGgpLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcblxcbn1cXG5cXG4uZ2FtZUNlbGwge1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICB3aWR0aDogMi41cmVtO1xcbiAgb3V0bGluZTogMXB4IHNvbGlkO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uZ2FtZUNlbGw6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xcbn1cXG5cXG4ubWluZSB7XFxuICBcXG59XFxuXFxuICAvKiAgICAgICAgKi9cXG4gLyogRk9PVEVSICovXFxuLyogICAgICAgICovXFxuXFxuI2dpdExvZ28ge1xcbiAgaGVpZ2h0OiAycmVtO1xcbiAgd2lkdGg6IDJyZW07XFxufVxcblxcbiNnaXRMb2dvOmhvdmVyIHtcXG4gIGFuaW1hdGlvbjogbG9nb1JvdGF0aW9uIC43NXM7XFxuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG59XFxuXFxuZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDNyZW0gMCAxcmVtIDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDFyZW07XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQyxnQkFBZ0I7QUFDakI7O0FBRUE7RUFDRSxpQ0FBaUM7RUFDakMsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsU0FBUztBQUNYO0VBQ0UsZUFBZTtDQUNoQixlQUFlO0FBQ2hCLGNBQWM7QUFDZDtFQUNFO01BQ0ksNkJBQTZCO0VBQ2pDOztFQUVBO01BQ0ksb0NBQW9DO0VBQ3hDO0FBQ0Y7O0FBRUE7RUFDRTtNQUNJLFVBQVU7RUFDZDs7RUFFQTtNQUNJLFVBQVU7RUFDZDtBQUNGOztFQUVFLGtCQUFrQjtDQUNuQixrQkFBa0I7QUFDbkIsa0JBQWtCO0FBQ2xCO0VBQ0UsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmO0VBQ0UsbUJBQW1CO0NBQ3BCLG1CQUFtQjtBQUNwQixtQkFBbUI7O0FBRW5CO0VBQ0UsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtBQUNyQjs7QUFFQSxtQkFBbUI7QUFDbkI7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7RUFFRSxlQUFlO0NBQ2hCLGVBQWU7QUFDaEIsZUFBZTs7QUFFZjtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFNBQVM7RUFDVCw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixpQkFBaUI7QUFDbkI7O0VBRUUsZUFBZTtDQUNoQixlQUFlO0FBQ2hCLGVBQWU7O0FBRWY7RUFDRSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0RBQXNEO0VBQ3RELHdCQUF3Qjs7QUFFMUI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLDJCQUEyQjtBQUM3Qjs7QUFFQTs7QUFFQTs7RUFFRSxXQUFXO0NBQ1osV0FBVztBQUNaLFdBQVc7O0FBRVg7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsU0FBUztBQUNYXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXG4gLS1ib2FyZC13aWR0aDogOTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ1VidW50dScsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ1LDI0NSwyNDUpO1xcbiAgY29sb3I6ICMyMTIxMjE7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4gIC8qICAgICAgICAgICAgKi9cXG4gLyogQU5JTUFUSU9OUyAqL1xcbi8qICAgICAgICAgICAqL1xcbkBrZXlmcmFtZXMgbG9nb1JvdGF0aW9uIHtcXG4gIGZyb20ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDApO1xcbiAgfVxcblxcbiAgdG8ge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKSByb3RhdGUoNzIwZGVnKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gIH1cXG5cXG4gIHRvIHtcXG4gICAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cXG4gIC8qICAgICAgICAgICAgICAgKi9cXG4gLyogU1RZTEUgQ0xBU1NFUyAqL1xcbi8qICAgICAgICAgICAgICAgKi9cXG4uZmxleFJvdyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG5cXG4uZmxleENvbHVtbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmNlbnRlcmVkIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQge1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi5yaWdodCB7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uc3BhY2VkRXZlbmx5IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbn1cXG5cXG4uc3BhY2VkQXBhcnQge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4uc29mdEJvcmRlciB7XFxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgYm9yZGVyLXdpZHRoOiAycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLmdyZWVuIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbiAgLyogICAgICAgICAgICAgICAgKi9cXG4gLyogTUFJTiBDT05UQUlORVIgKi9cXG4vKiAgICAgICAgICAgICAgICAqL1xcblxcbiNtYWluQ29udGFpbmVyIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtaW4taGVpZ2h0OiA4NXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiBOYXZpZ2F0aW9uIEJhciAqL1xcbiNuYXZDb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogbm93cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuI3NpdGVOYW1lIHtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNtZW51QmFyIHtcXG4gIGdhcDogMnJlbTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4ubWVudUl0ZW0ge1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNtZW51SWNvbiB7XFxuICB6LWluZGV4OiA1O1xcbiAgaGVpZ2h0OiAzcmVtO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblxcbiAgLyogICAgICAgICAgICAqL1xcbiAvKiBJTkZPIEJPQVJEICovXFxuLyogICAgICAgICAgICAqL1xcblxcbiNpbmZvQm9hcmR7XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJyZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG5cXG4gIC8qICAgICAgICAgICAgKi9cXG4gLyogR0FNRSBCT0FSRCAqL1xcbi8qICAgICAgICAgICAgKi9cXG5cXG4jZ2FtZUJvYXJkIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW4tdG9wOiAycmVtO1xcbiAgbWF4LXdpZHRoOiA5MHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KHZhcigtLWJvYXJkLXdpZHRoKSwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG5cXG59XFxuXFxuLmdhbWVDZWxsIHtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIG91dGxpbmU6IDFweCBzb2xpZDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5ncmVlbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcXG59XFxuXFxuLmdhbWVDZWxsOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLm1pbmUge1xcbiAgXFxufVxcblxcbiAgLyogICAgICAgICovXFxuIC8qIEZPT1RFUiAqL1xcbi8qICAgICAgICAqL1xcblxcbiNnaXRMb2dvIHtcXG4gIGhlaWdodDogMnJlbTtcXG4gIHdpZHRoOiAycmVtO1xcbn1cXG5cXG4jZ2l0TG9nbzpob3ZlciB7XFxuICBhbmltYXRpb246IGxvZ29Sb3RhdGlvbiAuNzVzO1xcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XFxufVxcblxcbmZvb3RlciB7XFxuICBwYWRkaW5nOiAzcmVtIDAgMXJlbSAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxcmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgZ2l0aHViTG9nbyBmcm9tIFwiLi9naXRodWIuc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRGb290ZXIoKSB7XG4gIGxldCBmb290ZXJUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGZvb3RlclRleHQudGV4dENvbnRlbnQgPSBcIsKpIDIwMjMgTWF0dCBUYWxsZXkgKHNvY3Jhc3RlaW4pXCI7XG5cbiAgbGV0IGxvZ29Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgbG9nb0NvbnRhaW5lci5ocmVmID0gXCJodHRwczovL2dpdGh1Yi5jb20vc29jcmFzdGVpblwiO1xuICBsb2dvQ29udGFpbmVyLnRhcmdldCA9IFwiX2JsYW5rXCI7XG5cbiAgbGV0IGxvZ29JbWFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIGxvZ29JbWFnZS5zcmMgPSBnaXRodWJMb2dvO1xuICBsb2dvSW1hZ2UuaWQgPSBcImdpdExvZ29cIjtcbiAgbG9nb0NvbnRhaW5lci5hcHBlbmRDaGlsZChsb2dvSW1hZ2UpO1xuXG4gIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJmb290ZXJcIik7XG5cbiAgZm9vdGVyLmFwcGVuZENoaWxkKGZvb3RlclRleHQpO1xuICBmb290ZXIuYXBwZW5kQ2hpbGQobG9nb0NvbnRhaW5lcik7XG4gIFxufVxuIiwiaW1wb3J0IGVuZEdhbWUgZnJvbSBcIi4vZW5kR2FtZVwiO1xuaW1wb3J0IGdhbWVTdGF0ZSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgY2xlYXJlZENlbGxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsZWFyXCIpO1xuICBsZXQgY2VsbHNXaXRob3V0TWluZXMgPSBnYW1lU3RhdGUuYm9hcmRDZWxsQ291bnQgLSBnYW1lU3RhdGUubnVtYmVyTWluZXM7XG5cbiAgaWYgKGNsZWFyZWRDZWxscy5sZW5ndGggPT09IGNlbGxzV2l0aG91dE1pbmVzKSB7XG4gICAgY29uc29sZS5sb2coXCJXSU5ORVJcIik7XG4gICAgZW5kR2FtZSh0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IGdhbWVTdGF0ZSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcbmltcG9ydCBlbmRHYW1lIGZyb20gXCIuL2VuZEdhbWVcIjtcbmltcG9ydCBjaGVja1dpbiBmcm9tIFwiLi9jaGVja1dpblwiO1xuXG5mdW5jdGlvbiBjaGVja05laWdoYm9yaW5nQ2VsbHMoY2VsbEluZGV4KSB7XG4gIGxldCBjaGVja2VkQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsXyR7Y2VsbEluZGV4fWApO1xuICBsZXQgdyA9IGdhbWVTdGF0ZS5ib2FyZFdpZHRoO1xuICBsZXQgbmVpZ2hib3JWYWx1ZXMgPSBbLXcgLSAxLCAtdywgLXcgKyAxLCAtMSwgMSwgdyAtIDEsIHcsIHcgKyAxXTsgLy8gc3Vycm91bmRpbmcgNiBjZWxsJ3MgaW5kaWNlcztcbiAgLy8gSWYgY2xpY2tlZCBjZWxsIGlzIG9uIGxlZnQgc2lkZSBvZiBib2FyZCwgaWdub3JlIG5laWdoYm9ycyB0byBsZWZ0XG4gIGlmIChjZWxsSW5kZXggJSB3ID09IDApIHtcbiAgICBuZWlnaGJvclZhbHVlcyA9IFstdywgLXcgKyAxLCAxLCB3LCB3ICsgMV07XG4gIH1cbiAgLy8gSWYgY2xpY2tlZCBjZWxsIGlzIG9uIHJpZ2h0IHNpZGUgb2YgYm9hcmQsIGlnbm9yZSBuZWlnaGJvcnMgdG8gcmlnaHRcbiAgaWYgKGNlbGxJbmRleCAlIHcgPT0gdyAtIDEpIHtcbiAgICBuZWlnaGJvclZhbHVlcyA9IFstdyAtIDEsIC13LCAtMSwgdyAtIDEsIHddO1xuICB9XG4gIGxldCBuZWlnaGJvckFycmF5ID0gW107XG4gIGxldCBtaW5lRGV0ZWN0ZWQgPSBmYWxzZTtcbiAgbGV0IG1pbmVDb3VudCA9IDA7XG4gIGZvciAobGV0IGkgaW4gbmVpZ2hib3JWYWx1ZXMpIHtcbiAgICBsZXQgbmVpZ2hib3JJbmRleCA9IGNlbGxJbmRleCArIG5laWdoYm9yVmFsdWVzW2ldO1xuICAgIGlmIChuZWlnaGJvckluZGV4IDwgMCB8fCBuZWlnaGJvckluZGV4ID4gZ2FtZVN0YXRlLmJvYXJkQ2VsbENvdW50IC0gMSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCBuZWlnaGJvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjZWxsXyR7bmVpZ2hib3JJbmRleH1gKTtcbiAgICBpZiAobmVpZ2hib3IuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWluZVwiKSkge1xuICAgICAgbWluZURldGVjdGVkID0gdHJ1ZTtcbiAgICAgIG1pbmVDb3VudCsrO1xuICAgIH0gZWxzZSBjaGVja2VkQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2xlYXJcIik7XG4gICAgaWYgKCFuZWlnaGJvci5jbGFzc0xpc3QuY29udGFpbnMoXCJjbGVhclwiKSkge1xuICAgICAgbmVpZ2hib3JBcnJheS5wdXNoKG5laWdoYm9ySW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5lRGV0ZWN0ZWQpIHtcbiAgICBjaGVja2VkQ2VsbC5pbm5lckhUTUwgPSBgJHttaW5lQ291bnR9YDtcbiAgICBzd2l0Y2ggKG1pbmVDb3VudCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICBjaGVja2VkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIlwiO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjaGVja2VkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JleVwiO1xuICAgIGNoZWNrZWRDZWxsLmNsYXNzTGlzdC5hZGQoXCJjbGVhclwiKTtcbiAgICBmb3IgKGxldCBpIGluIG5laWdoYm9yQXJyYXkpIHtcbiAgICAgIGNoZWNrTmVpZ2hib3JpbmdDZWxscyhuZWlnaGJvckFycmF5W2ldKTtcbiAgICB9XG4gIH1cblxuICBjaGVja1dpbigpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjbGlja0NlbGwoY2VsbCkge1xuICBpZiAoZ2FtZVN0YXRlLmdhbWVPdmVyKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGxldCBjZWxsSW5kZXggPSBOdW1iZXIoY2VsbC50YXJnZXQuaWQuc3Vic3RyaW5nKDUpKTtcblxuICBpZiAoY2VsbC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwibWluZVwiKSkge1xuICAgIGVuZEdhbWUoKTtcbiAgICByZXR1cm47XG4gIH0gZWxzZSBjaGVja05laWdoYm9yaW5nQ2VsbHMoY2VsbEluZGV4KTtcbn1cbiIsImltcG9ydCBnYW1lU3RhdGUgZnJvbSBcIi4vZ2FtZVN0YXRlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uICh3aW4gPSBmYWxzZSkge1xuICBsZXQgZGlmZmljdWx0eURpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRpZmZpY3VsdHlEaXNwbGF5XCIpO1xuICBnYW1lU3RhdGUuZ2FtZU92ZXIgPSB0cnVlO1xuICBsZXQgbWluZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibWluZVwiKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5lcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnNvbGUubG9nKG1pbmVzW2ldKTtcbiAgICBtaW5lc1tpXS5pbm5lckhUTUwgPSBcIvCfkqNcIjtcbiAgfVxuICBpZiAod2luKSB7XG4gICAgZGlmZmljdWx0eURpc3BsYXkuaW5uZXJIVE1MID0gXCJZb3Ugd2luIVwiO1xuICAgIGNvbnNvbGUubG9nKFwiWW91IHdpbiFcIik7XG4gIH0gZWxzZSB7XG4gICAgZGlmZmljdWx0eURpc3BsYXkuaW5uZXJIVE1MID0gXCJZb3UgbG9zZVwiO1xuICAgIGNvbnNvbGUubG9nKFwiWW91IGxvc2VcIik7XG4gIH1cbn1cbiIsImNvbnN0IGdhbWVTdGF0ZSA9IHtcbiAgZGlmZmljdWx0eTogXCJlYXN5XCIsXG4gIGJvYXJkSGVpZ2h0OiA5LFxuICBib2FyZFdpZHRoOiA5LFxuICBudW1iZXJNaW5lczogMTAsXG4gIG51bWJlckZsYWdzOiAwLFxuICBob3ZlcmVkQ2VsbDogdW5kZWZpbmVkLFxuICBtb3VzZU92ZXJHYW1lYm9hcmQ6IGZhbHNlLFxuICBnYW1lT3ZlcjogZmFsc2UsXG4gIGdldCBib2FyZENlbGxDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5ib2FyZEhlaWdodCAqIHRoaXMuYm9hcmRXaWR0aDtcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZVN0YXRlO1xuIiwiaW1wb3J0IGdhbWVTdGF0ZSBmcm9tIFwiLi9nYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCl7XG4gIGxldCBmbGFnQ291bnREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGFnQ291bnREaXNwbGF5XCIpO1xuICBpZighZ2FtZVN0YXRlLm1vdXNlT3ZlckdhbWVib2FyZCl7XG4gICAgcmV0dXJuXG4gIH1cbiAgaWYoZ2FtZVN0YXRlLmhvdmVyZWRDZWxsLmlubmVySFRNTCA9PSBcIvCfmqlcIil7XG4gICAgZ2FtZVN0YXRlLmhvdmVyZWRDZWxsLmlubmVySFRNTCA9IFwiXCI7XG4gICAgZ2FtZVN0YXRlLm51bWJlckZsYWdzIC09IDE7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZVN0YXRlLmhvdmVyZWRDZWxsLmlubmVySFRNTCA9IFwi8J+aqVwiO1xuICAgIGdhbWVTdGF0ZS5udW1iZXJGbGFncyArPSAxO1xuICB9XG5cbiAgZmxhZ0NvdW50RGlzcGxheS5pbm5lckhUTUwgPSBg8J+aqSAke2dhbWVTdGF0ZS5udW1iZXJGbGFnc314YFxuICByZXR1cm4gZmFsc2U7XG59IiwiaW1wb3J0IG1lbnVTVkcgZnJvbSBcIi4vbWVudS5zdmdcIjtcbi8vIGltcG9ydCBzaXRlTG9nbyBmcm9tIFwiLi9sb2dvLnN2Z1wiO1xuXG5pbXBvcnQgbmV3R2FtZSBmcm9tIFwiLi4vbmV3R2FtZS9uZXdHYW1lXCI7XG5cbmltcG9ydCB0b2dnbGVNZW51IGZyb20gXCIuL3RvZ2dsZU1lbnVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE5hdkJhcigpIHtcbiAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250YWluZXJcIik7XG5cbiAgbGV0IG5hdkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG5hdkNvbnRhaW5lci5pZCA9IFwibmF2Q29udGFpbmVyXCI7XG4gIG5hdkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZmxleFJvd1wiLCBcInNwYWNlZEFwYXJ0XCIpO1xuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hdkNvbnRhaW5lcik7XG5cbiAgbGV0IHNpdGVUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHNpdGVUaXRsZS5pZCA9IFwic2l0ZVRpdGxlXCI7XG4gIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChzaXRlVGl0bGUpO1xuXG4gIC8vIGxldCBzaXRlTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gIC8vIHNpdGVMb2dvLmlkID0gXCJzaXRlTG9nb1wiO1xuICAvLyBzaXRlTG9nby5zcmMgPSBzaXRlTG9nbztcbiAgLy8gc2l0ZVRpdGxlLmFwcGVuZENoaWxkKHNpdGVMb2dvKTtcblxuICBsZXQgc2l0ZU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgc2l0ZU5hbWUuaWQgPSBcInNpdGVOYW1lXCI7XG4gIHNpdGVOYW1lLnRleHRDb250ZW50ID0gXCJNaW5lc3dlZXBlciDwn5KjXCI7XG4gIHNpdGVUaXRsZS5hcHBlbmRDaGlsZChzaXRlTmFtZSk7XG5cbiAgbGV0IG1lbnVCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtZW51QmFyLmlkID0gXCJtZW51QmFyXCI7XG4gIG1lbnVCYXIuY2xhc3NMaXN0LmFkZChcImZsZXhSb3dcIik7XG4gIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51QmFyKTtcblxuICBsZXQgbWVudUl0ZW1zID0gW1xuICAgIHsgbmFtZTogXCJFYXN5XCIsIG9uQ2xpY2s6ICgpID0+IG5ld0dhbWUoXCJlYXN5XCIpIH0sXG4gICAgeyBuYW1lOiBcIk5vcm1hbFwiLCBvbkNsaWNrOiAoKSA9PiBuZXdHYW1lKFwibm9ybWFsXCIpIH0sXG4gICAgeyBuYW1lOiBcIkhhcmRcIiwgb25DbGljazogKCkgPT4gbmV3R2FtZShcImhhcmRcIikgfSxcbiAgXTtcblxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGxldCBtZW51SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIG1lbnVJdGVtLnRleHRDb250ZW50ID0gaXRlbS5uYW1lO1xuICAgIG1lbnVJdGVtLm9uY2xpY2sgPSBpdGVtLm9uQ2xpY2s7XG4gICAgbWVudUl0ZW0uY2xhc3NMaXN0LmFkZChcIm1lbnVJdGVtXCIpO1xuICAgIG1lbnVCYXIuYXBwZW5kQ2hpbGQobWVudUl0ZW0pO1xuICB9KTtcblxuICBsZXQgbWVudUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICBtZW51SWNvbi5zcmMgPSBtZW51U1ZHO1xuICBtZW51SWNvbi5pZCA9IFwibWVudUljb25cIjtcbiAgbWVudUljb24ub25jbGljayA9IHRvZ2dsZU1lbnU7XG4gIG5hdkNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SWNvbik7XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcbiAgbGV0IHNjcmVlbldpZHRoID0gd2luZG93LnNjcmVlbi53aWR0aDtcbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJhclwiKTtcbiAgY29uc3QgbWVudUljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVJY29uXCIpO1xuXG4gIGlmIChzY3JlZW5XaWR0aCA8IDYwMCkge1xuICAgIC8vIHNpdGVMb2dvLnN0eWxlLmhlaWdodCA9IFwiMzBweFwiO1xuICAgIC8vIHNpdGVMb2dvLnN0eWxlLndpZHRoID0gXCIzMHB4XCI7XG4gICAgbWVudUJhci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgIG1lbnVJY29uLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH0gZWxzZSB7XG4gICAgLy8gc2l0ZUxvZ28uc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgLy8gc2l0ZUxvZ28uc3R5bGUud2lkdGggPSBcIjUwcHhcIjtcbiAgICBtZW51QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgbWVudUljb24uY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufSIsImltcG9ydCB4U1ZHIGZyb20gXCIuL3guc3ZnXCI7XG5pbXBvcnQgbWVudVNWRyBmcm9tIFwiLi9tZW51LnN2Z1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b2dnbGVNZW51KCkge1xuICBsZXQgc2NyZWVuV2lkdGggPSB3aW5kb3cuc2NyZWVuLndpZHRoO1xuICBjb25zb2xlLmxvZyhcIlRvZ2dsaW5nIG1lbnVcIik7XG4gIGNvbnN0IG1lbnVCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVCYXJcIik7XG4gIGNvbnN0IG1lbnVJY29uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51SWNvblwiKVxuICBpZiAoc2NyZWVuV2lkdGggPj0gNjAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIFxuICBpZihtZW51QmFyLmNsYXNzTGlzdC5jb250YWlucyhcImhpZGRlblwiKSl7XG4gICAgbWVudUljb24uc3JjID0geFNWRztcblxuICAgIG1lbnVCYXIuc2V0QXR0cmlidXRlKFwiY2xhc3NcIiwgXCJmbGV4Q29sdW1uIGNlbnRlcmVkXCIpO1xuICAgIG1lbnVCYXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgbWVudUJhci5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICBtZW51QmFyLnN0eWxlLnBhZGRpbmdUb3AgPSBcIjJyZW1cIjtcbiAgICBtZW51QmFyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG4gIH0gZWxzZSB7XG4gICAgbWVudUljb24uc3JjID0gbWVudVNWRztcbiAgICBtZW51QmFyLnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwiZmxleFJvdyBoaWRkZW5cIik7XG4gICAgbWVudUJhci5zdHlsZS5wb3NpdGlvbiA9IFwic3RhdGljXCI7XG4gICAgbWVudUJhci5zdHlsZS5wYWRkaW5nVG9wID0gXCIxcmVtXCI7XG4gIH1cbn1cbiIsImltcG9ydCBnYW1lU3RhdGUgZnJvbSBcIi4uL2dhbWVCb2FyZC9nYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCkge1xuICBsZXQgaW5mb0JvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgaW5mb0JvYXJkLmlkID0gXCJpbmZvQm9hcmRcIjtcblxuICBsZXQgZGlmZmljdWx0eURpc3BsYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBkaWZmaWN1bHR5RGlzcGxheS5pZCA9IFwiZGlmZmljdWx0eURpc3BsYXlcIjtcbiAgaW5mb0JvYXJkLmFwcGVuZENoaWxkKGRpZmZpY3VsdHlEaXNwbGF5KTtcblxuICBsZXQgbWluZUNvdW50RGlzcGxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1pbmVDb3VudERpc3BsYXkuaWQgPSBcIm1pbmVDb3VudERpc3BsYXlcIjtcbiAgaW5mb0JvYXJkLmFwcGVuZENoaWxkKG1pbmVDb3VudERpc3BsYXkpO1xuXG4gIGxldCBmbGFnQ291bnREaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZmxhZ0NvdW50RGlzcGxheS5pZCA9IFwiZmxhZ0NvdW50RGlzcGxheVwiO1xuICBpbmZvQm9hcmQuYXBwZW5kQ2hpbGQoZmxhZ0NvdW50RGlzcGxheSk7XG5cbiAgbGV0IG1haW5Db250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5Db250YWluZXJcIik7XG4gIG1haW5Db250YWluZXIuYXBwZW5kQ2hpbGQoaW5mb0JvYXJkKTtcbn0iLCJpbXBvcnQgdG9nZ2xlTWVudSBmcm9tIFwiLi4vbmF2YmFyL3RvZ2dsZU1lbnVcIjtcbmltcG9ydCBjbGlja0NlbGwgZnJvbSBcIi4uL2dhbWVCb2FyZC9jbGlja0NlbGxcIjtcbmltcG9ydCBnYW1lU3RhdGUgZnJvbSBcIi4uL2dhbWVCb2FyZC9nYW1lU3RhdGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbmV3R2FtZShkaWZmaWN1bHR5KSB7XG4gIC8vIEluZm9ib2FyZCBpdGVtczpcbiAgbGV0IGRpZmZpY3VsdHlEaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkaWZmaWN1bHR5RGlzcGxheVwiKTtcbiAgbGV0IG1pbmVDb3VudERpc3BsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pbmVDb3VudERpc3BsYXlcIik7XG4gIGxldCBmbGFnQ291bnREaXNwbGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmbGFnQ291bnREaXNwbGF5XCIpO1xuXG4gIHN3aXRjaCAoZGlmZmljdWx0eSkge1xuICAgIGNhc2UgXCJlYXN5XCI6XG4gICAgICBjb25zb2xlLmxvZyhcIk5ldyBHYW1lOiBFYXN5XCIpO1xuICAgICAgZ2FtZVN0YXRlLmJvYXJkSGVpZ2h0ID0gOTtcbiAgICAgIGdhbWVTdGF0ZS5ib2FyZFdpZHRoID0gOTtcbiAgICAgIGdhbWVTdGF0ZS5udW1iZXJNaW5lcyA9IDEwO1xuICAgICAgZGlmZmljdWx0eURpc3BsYXkuaW5uZXJIVE1MID0gXCJFYXN5IDl4OVwiXG4gICAgICBtaW5lQ291bnREaXNwbGF5LmlubmVySFRNTCA9IFwi8J+SoyAxMHhcIlxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLXdpZHRoJywgJzknKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcIm5vcm1hbFwiOlxuICAgICAgY29uc29sZS5sb2coXCJOZXcgR2FtZTogTm9ybWFsXCIpO1xuICAgICAgZ2FtZVN0YXRlLmJvYXJkSGVpZ2h0ID0gMTI7XG4gICAgICBnYW1lU3RhdGUuYm9hcmRXaWR0aCA9IDEyO1xuICAgICAgZ2FtZVN0YXRlLm51bWJlck1pbmVzID0gMjQ7XG4gICAgICBkaWZmaWN1bHR5RGlzcGxheS5pbm5lckhUTUwgPSBcIk5vcm1hbCAxMngxMlwiXG4gICAgICBtaW5lQ291bnREaXNwbGF5LmlubmVySFRNTCA9IFwi8J+SoyAyNHhcIlxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLWJvYXJkLXdpZHRoJywgJzEyJyk7XG5cbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBcImhhcmRcIjpcbiAgICAgIGNvbnNvbGUubG9nKFwiTmV3IEdhbWU6IEhhcmRcIik7XG4gICAgICBnYW1lU3RhdGUuYm9hcmRIZWlnaHQgPSAxNjtcbiAgICAgIGdhbWVTdGF0ZS5ib2FyZFdpZHRoID0gMTY7XG4gICAgICBnYW1lU3RhdGUubnVtYmVyTWluZXMgPSA0NTtcbiAgICAgIGRpZmZpY3VsdHlEaXNwbGF5LmlubmVySFRNTCA9IFwiSGFyZCAxNngxNlwiO1xuICAgICAgbWluZUNvdW50RGlzcGxheS5pbm5lckhUTUwgPSBcIvCfkqMgNDV4XCJcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1ib2FyZC13aWR0aCcsICcxNicpO1xuXG4gICAgICBicmVhaztcbiAgfVxuXG4gIGZsYWdDb3VudERpc3BsYXkuaW5uZXJIVE1MID0gXCLwn5qpIDB4XCJcblxuICBsZXQgbWFpbkNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpbkNvbnRhaW5lclwiKTtcbiAgbGV0IGdhbWVCb2FyZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZUJvYXJkXCIpO1xuICBsZXQgZ2FtZUJvYXJkQXJyYXk7XG5cbiAgaWYgKCFnYW1lQm9hcmRDb250YWluZXIpIHtcbiAgICBnYW1lQm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGdhbWVCb2FyZENvbnRhaW5lci5pZCA9IFwiZ2FtZUJvYXJkXCI7XG4gIH0gZWxzZSB7XG4gICAgZ2FtZUJvYXJkQ29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG4gIH1cblxuICBnYW1lQm9hcmRDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgKCkgPT4ge1xuICAgIGdhbWVTdGF0ZS5tb3VzZU92ZXJHYW1lYm9hcmQgPSBmYWxzZTtcbiAgfSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lU3RhdGUuYm9hcmRDZWxsQ291bnQ7IGkrKykge1xuICAgIGxldCBnYW1lQm9hcmRDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBnYW1lQm9hcmRDZWxsLmNsYXNzTGlzdC5hZGQoXCJnYW1lQ2VsbFwiKTtcbiAgICBnYW1lQm9hcmRDZWxsLmlkID0gYGNlbGxfJHtpfWA7XG4gICAgZ2FtZUJvYXJkQ2VsbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tDZWxsKTtcbiAgICBnYW1lQm9hcmRDb250YWluZXIuYXBwZW5kQ2hpbGQoZ2FtZUJvYXJkQ2VsbCk7XG4gIH1cblxuICBtYWluQ29udGFpbmVyLmFwcGVuZENoaWxkKGdhbWVCb2FyZENvbnRhaW5lcik7XG5cbiAgZ2FtZUJvYXJkQXJyYXkgPSBnYW1lQm9hcmRDb250YWluZXIuY2hpbGROb2RlcztcblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIGxldCB0b3RhbE1pbmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5taW5lXCIpLmxlbmd0aDtcbiAgICBpZiAodG90YWxNaW5lcyA+PSBnYW1lU3RhdGUubnVtYmVyTWluZXMpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGxldCByYW5kb21Ob2RlID1cbiAgICAgIGdhbWVCb2FyZEFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGdhbWVTdGF0ZS5ib2FyZENlbGxDb3VudCldO1xuICAgIGlmIChyYW5kb21Ob2RlLmNsYXNzTGlzdC5jb250YWlucyhcIm1pbmVcIikpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByYW5kb21Ob2RlLmNsYXNzTGlzdC5hZGQoXCJtaW5lXCIpO1xuICAgIH1cbiAgfVxuXG4gIGxldCBhbGxNeUhvdmVyRWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZ2FtZUNlbGxcIik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxNeUhvdmVyRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICBhbGxNeUhvdmVyRWxlbWVudHMuaXRlbShpKS5vbm1vdXNlb3ZlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGdhbWVTdGF0ZS5tb3VzZU92ZXJHYW1lYm9hcmQgPSB0cnVlO1xuICAgICAgZ2FtZVN0YXRlLmhvdmVyZWRDZWxsID0gdGhpcztcbiAgICB9O1xuICB9XG5cbiAgZ2FtZVN0YXRlLmdhbWVPdmVyID0gZmFsc2U7XG5cbiAgY29uc3QgbWVudUJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudUJhclwiKTtcbiAgaWYgKG1lbnVCYXIuY2xhc3NMaXN0LmNvbnRhaW5zKFwiaGlkZGVuXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2UgdG9nZ2xlTWVudSgpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5cbi8vIElNUE9SVElORyBJTUFHRVM6XG4vLyBpbXBvcnQgbXlJbWFnZSBmcm9tICcuL215LWltYWdlLnBuZydcblxuXG5cbi8vIElNUE9SVElORyBNT0RVTEVTOlxuLy8gaW1wb3J0IG15RnVuY3Rpb24gZnJvbSAnLi9tb2R1bGUnXG5pbXBvcnQgbG9hZEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXJcIjtcbmltcG9ydCBsb2FkTmF2QmFyIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdkJhclwiO1xuaW1wb3J0IG9uUmVzaXplIGZyb20gXCIuL2NvbXBvbmVudHMvbmF2YmFyL25hdkJhclJlc2l6ZVwiO1xuaW1wb3J0IG5ld0dhbWUgZnJvbSBcIi4vY29tcG9uZW50cy9uZXdHYW1lL25ld0dhbWVcIjtcbmltcG9ydCBzZXRGbGFnIGZyb20gXCIuL2NvbXBvbmVudHMvZ2FtZUJvYXJkL3NldEZsYWdcIjtcbmltcG9ydCBpbmZvQm9hcmQgZnJvbSBcIi4vY29tcG9uZW50cy9uZXdHYW1lL2luZm9Cb2FyZFwiO1xuXG5cbi8vIENPTlNUQU5UIEVMRU1FTlRTXG53aW5kb3cub25jb250ZXh0bWVudSA9IHNldEZsYWc7XG5cbi8vIEVWRU5UIExJU1RFTkVSU1xuLy8gRm9yIGRpc3BsYXlpbmcgbW9iaWxlIG1lbnUgd2hlbiBzY3JlZW4gPCA1MDBweCB3aWRlXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBvblJlc2l6ZSk7XG5cbi8vIFJVTiBGVU5DVElPTlMgVE8gTE9BRCBDT05URU5UOlxubG9hZE5hdkJhcigpO1xub25SZXNpemUoKTtcblxuaW5mb0JvYXJkKCk7XG5uZXdHYW1lKFwiZWFzeVwiKTtcblxubG9hZEZvb3RlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9