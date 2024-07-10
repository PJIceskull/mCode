/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadPeopleData: () => (/* binding */ loadPeopleData)\n/* harmony export */ });\n/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ \"./src/model.js\");\n// Import Functions\r\n\r\n\r\n// Global Variables\r\nlet peopleData = []; // Array to hold json Data\r\n\r\n// Load data for Employees on People Page\r\nfunction loadPeopleData() {\r\n  $.each(peopleData.Team_Members, function (index, teamMember) {\r\n    if (teamMember.Team == \"Project\") {\r\n      $(\"#Project_Team\").append(`<section>\r\n        <div class=\"profileSection\">\r\n          <div class=\"profileIMG\">\r\n            <img\r\n              src=\"images/Profile/${teamMember.ProfileIMG}\"\r\n              alt=\"Picture of Employee\"\r\n              loading=\"lazy\"\r\n            />\r\n          </div>\r\n          <div class=\"profileText\">\r\n            <h3>${teamMember.name}</h3>\r\n            <p>${teamMember.Position}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"descriptionText\">\r\n          <p>${teamMember.Description}</p>\r\n        </div>\r\n      </section>`);\r\n    } else if (teamMember.Team == \"Advisory\") {\r\n      $(\"#Advisory_Team\").append(`<section>\r\n        <div class=\"profileSection\">\r\n          <div class=\"profileIMG\">\r\n            <img\r\n              src=\"images/Profile/${teamMember.ProfileIMG}\"\r\n              alt=\"Picture of Employee\"\r\n              loading=\"lazy\"\r\n            />\r\n          </div>\r\n          <div class=\"profileText\">\r\n            <h3>${teamMember.name}</h3>\r\n            <p>${teamMember.Position}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"descriptionText\">\r\n          <p>${teamMember.Description}</p>\r\n        </div>\r\n      </section>`);\r\n    }\r\n  });\r\n}\r\nfunction getPeopleData() {\r\n  $.get(`data/projectTeam.json`, function (data) {\r\n    // Assign JSON data to global variable\r\n    peopleData = data;\r\n    // console.log(peopleData); // Print to Console\r\n  }).fail(function (error) {\r\n    console.log(\"Error: \", error);\r\n    alert(\"Error: \", error);\r\n  });\r\n}\r\n\r\nfunction initURLListener() {\r\n  $(window).on(\"hashchange\", _model_js__WEBPACK_IMPORTED_MODULE_0__.changeRoute);\r\n  (0,_model_js__WEBPACK_IMPORTED_MODULE_0__.changeRoute)();\r\n  getPeopleData();\r\n}\r\n\r\nfunction initListeners() {}\r\n\r\n$(document).ready(function () {\r\n  initURLListener();\r\n  initListeners();\r\n});\r\n\r\n// Load Porfolio data when after document is ready\r\n// $(window).on(\"load\", function () {\r\n//   // Put function to load data.\r\n//   loadPeopleData();\r\n// });\r\n\n\n//# sourceURL=webpack://mcode/./src/index.js?");

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   changeRoute: () => (/* binding */ changeRoute)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n// Import Functions\r\n\r\n\r\nfunction changeRoute() {\r\n  let hashTag = window.location.hash;\r\n  let pageID = hashTag.replace(\"#\", \"\");\r\n  //   console.log(hashTag + ' ' + pageID);\r\n\r\n  if (pageID != \"\") {\r\n    $.get(`pages/${pageID}.html`, function (data) {\r\n      console.log(\"data \" + data);\r\n      $(\"#app\").html(data);\r\n    });\r\n    if (pageID == \"people\") {\r\n      $.get(`pages/people.html`, function (data) {\r\n        $(\"#app\").html(data);\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.loadPeopleData)();\r\n      });\r\n      $(window).on(\"load\", function () {\r\n        // Put function to load data.\r\n        (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.loadPeopleData)();\r\n      });\r\n    }\r\n  } else {\r\n    $.get(`pages/home.html`, function (data) {\r\n      console.log(\"data \" + data);\r\n      $(\"#app\").html(data);\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mcode/./src/model.js?");

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
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;