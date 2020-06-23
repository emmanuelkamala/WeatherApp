/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather */ \"./src/modules/weather.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n\r\n\r\n\r\n\r\n\r\nconst storage = new _modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst weatherLocation = storage.getLocationData();\r\nconst weather = new _modules_weather__WEBPACK_IMPORTED_MODULE_0__[\"default\"](weatherLocation.city);\r\nconst ui = new _modules_ui__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n\r\ndocument.getElementById('w-change-btn').addEventListener('click', (e) => {\r\n    const city = document.getElementById('city').value;\r\n    weather.changeLocation(city);\r\n    storage.setLocationData(city);\r\n    getWeather();\r\n    $('#locModal').modal('hide');\r\n})\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', getWeather);\r\n\r\ndocument.getElementById('weather-change').addEventListener('click', () => {\r\n    let w = document.getElementById('weather-change').textContent;\r\n\r\n    ui.changeWeather(w.slice(16));\r\n})\r\n\r\nfunction getWeather() {\r\n    weather.getWeather()\r\n    .then(results => {\r\n        ui.paint(results);\r\n    })\r\n    .catch(err => alert(err));\r\n}\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Storage {\r\n    constructor(){\r\n        this.city;\r\n        this.defaultCity = 'Dar es salaam';\r\n    }\r\n\r\n    getLocationData(){\r\n        if (localStorage.getItem('city') === null){\r\n            this.city = this.defaultCity;\r\n        } else {\r\n            this.city = localStorage.getItem('city');\r\n        }\r\n\r\n        return {\r\n            city: this.city\r\n        }\r\n    }\r\n\r\n    setLocationData(city){\r\n      localStorage.setItem('city', city);\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Storage);\n\n//# sourceURL=webpack:///./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass UI {\r\n    constructor(){\r\n        this.location = document.getElementById('w-location');\r\n        this.desc = document.getElementById('w-desc');\r\n        this.string = document.getElementById('w-string');\r\n        this.stringTwo = document.getElementById('w-string-two');\r\n        this.details = document.getElementById('w-details');\r\n        this.icon = document.getElementById('w-icon');\r\n        this.humidity = document.getElementById('w-humidity');\r\n        this.feelsLike = document.getElementById('w-feels-like');\r\n        this.pressure = document.getElementById('w-pressure');\r\n        this.wind = document.getElementById('w-wind');\r\n    }\r\n\r\n    paint(weather) {\r\n        this.location.textContent = weather.name;\r\n        this.desc.textContent = weather.weather[0].description;\r\n        this.stringTwo.textContent = `${(weather.main.temp - 273.15).toFixed(2)}`;\r\n        //this.string.textContent = weather.main.temp;\r\n    \r\n        this.icon.setAttribute('src', \"https://openweathermap.org/img/w/\" + weather.weather[0].icon + \".png\");\r\n        this.humidity.textContent = `Relative humidity: ${weather.main.humidity}`;\r\n        this.feelsLike.textContent = `Feels like: ${weather.main.feels_like}`;\r\n        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;\r\n        this.wind.textContent = `Wind: ${weather.wind.deg}`;\r\n    } \r\n\r\n    changeWeather(t) {\r\n        let cent = this.stringTwo.textContent;\r\n     \r\n        let fahr = cent * 9/5 + 32;\r\n        //cent = fahr * 5/9 - 32;\r\n\r\n           let x = document.getElementById(\"w-string\");\r\n           \r\n            if (t === 'Fahrenheit') {  \r\n                x.textContent = `${fahr}`;  \r\n                document.getElementById('weather-change').textContent = 'Change temp. to Celsius';\r\n\r\n            } else {\r\n               x.textContent = `${cent}`;\r\n               document.getElementById('weather-change').textContent = 'Change temp. to Fahrenheit';\r\n            }\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (UI);\n\n//# sourceURL=webpack:///./src/modules/ui.js?");

/***/ }),

/***/ "./src/modules/weather.js":
/*!********************************!*\
  !*** ./src/modules/weather.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Weather {\r\n  constructor(city){\r\n      this.apiKey = \"9c5eb41fc25cd5dcdd581304f1108308\";\r\n      this.city = city;\r\n  }\r\n\r\n  async getWeather(){\r\n      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`)\r\n\r\n      const responseData = await response.json();\r\n\r\n      return responseData\r\n  }\r\n\r\n  changeLocation(city) {\r\n     this.city = city;\r\n  }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\n\n//# sourceURL=webpack:///./src/modules/weather.js?");

/***/ })

/******/ });