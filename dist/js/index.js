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

/***/ "./src/css/index.scss":
/*!****************************!*\
  !*** ./src/css/index.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://travellife/./src/css/index.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.scss */ \"./src/css/index.scss\");\n/* harmony import */ var _js_navMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navMenu.js */ \"./src/js/navMenu.js\");\n/* harmony import */ var _js_navMenu_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_navMenu_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_backTop_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/backTop.js */ \"./src/js/backTop.js\");\n/* harmony import */ var _js_backTop_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_backTop_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\n\n//# sourceURL=webpack://travellife/./src/index.js?");

/***/ }),

/***/ "./src/js/backTop.js":
/*!***************************!*\
  !*** ./src/js/backTop.js ***!
  \***************************/
/***/ (() => {

eval("let BtnTop = document.getElementById('back-top__icon');\r\n// Sự kiện click \r\nBtnTop.addEventListener('click', function (e) {\r\n    e.preventDefault();\r\n    window.scrollTo({ top: 0, behavior: \"smooth\" });\r\n});\r\n// let scrollPos = 0;\r\n// scrollPos = (document.body.getBoundingClientRect()).top;\r\n// Bắt sự kiện khi sroll\r\nwindow.addEventListener('scroll', function () {\r\n    if ((document.body.getBoundingClientRect()).top < 0) {\r\n        document.getElementById('back-top').classList.add('active');\r\n    } else {\r\n        document.getElementById('back-top').classList.remove('active');\r\n    }\r\n});\r\n\n\n//# sourceURL=webpack://travellife/./src/js/backTop.js?");

/***/ }),

/***/ "./src/js/navMenu.js":
/*!***************************!*\
  !*** ./src/js/navMenu.js ***!
  \***************************/
/***/ (() => {

eval("// define all UI variable\r\nconst navContainer = document.querySelector('.navbar-nav');\r\nconst nav= document.querySelector('.navbar');\r\nconst navMenu = document.querySelector('.navbar .pamenu');\r\nconst navMenuChild = document.querySelector('.navbar .submenu');\r\nconst navMenuChild2 = document.querySelector('.navbar .submenu2');\r\nconst navTogglerOpenSub = document.querySelector('.pamenu-item .arrowSub');\r\nconst navTogglerOpenSub2 = document.querySelector('.pamenu-item .arrowSub2');\r\nconst arrow= document.querySelector('.arrowSub');\r\nconst arrow2= document.querySelector('.arrowSub2');\r\nconst navToggler = document.querySelector('.buttonOpen');\r\nallEventListners();\r\nfunction allEventListners() {\r\n  navToggler.addEventListener('click', togglerClick);\r\n  navTogglerOpenSub.addEventListener('click', togglerClickSub);\r\n  navTogglerOpenSub2.addEventListener('click', togglerClickSub2);\r\n}\r\n\r\nfunction togglerClick() {\r\n  navContainer.classList.toggle('containerShow');\r\n  navMenu.classList.toggle('open');\r\n  navToggler.classList.toggle('changeIcon');\r\n  nav.classList.toggle('insideContainerShow');\r\n}\r\nfunction togglerClickSub() {\r\n  navMenuChild.classList.toggle('openChild');\r\n  arrow.classList.toggle('run');;\r\n}\r\nfunction togglerClickSub2() {\r\n  navMenuChild2.classList.toggle('openChild2');\r\n  arrow2.classList.toggle('run2');\r\n}\n\n//# sourceURL=webpack://travellife/./src/js/navMenu.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;