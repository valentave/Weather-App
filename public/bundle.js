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

/***/ "./src/js/Weather.js":
/*!***************************!*\
  !*** ./src/js/Weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Weather: () => (/* binding */ Weather)\n/* harmony export */ });\n\r\nclass Weather {\r\n    constructor(\r\n        city, \r\n        region, \r\n        country, \r\n        timestamp,\r\n        celcius,\r\n        fahrenheit,\r\n        condition,\r\n        condition_icon,\r\n        wind_kph,\r\n        wind_mph,\r\n        chance_of_rain,\r\n        chance_of_snow,\r\n        humidity,\r\n        forecast) {\r\n            this._city = city;\r\n            this._region = region;\r\n            this._country = country;\r\n            this._timestamp = timestamp;\r\n            this._celcius = celcius;\r\n            this._fahrenheit = fahrenheit;\r\n            this._condition = condition;\r\n            this._condition_icon = condition_icon;\r\n            this._wind_kph = wind_kph;\r\n            this._wind_mph = wind_mph;\r\n            this._chance_of_rain = chance_of_rain;\r\n            this._chance_of_snow = chance_of_snow;\r\n            this._humidity = humidity;\r\n            this._forecast = forecast;\r\n    }\r\n\r\n    get city() {\r\n        return this._city;\r\n    }\r\n    get region() {\r\n        return this._region;\r\n    }\r\n    get country() {\r\n        return this._country;\r\n    }\r\n    get timestamp() {\r\n        return this._timestamp;\r\n    }\r\n    get celcius() {\r\n        return this._celcius;\r\n    }\r\n    get fahrenheit() {\r\n        return this._fahrenheit;\r\n    }\r\n    get condition() {\r\n        return this._condition;\r\n    }\r\n    get conditionIcon() {\r\n        return this._condition_icon;\r\n    }\r\n    get windKPH() {\r\n        return this._wind_kph;\r\n    }\r\n    get windMPH() {\r\n        return this._wind_mph;\r\n    }\r\n    get chanceOfRain() {\r\n        return this._chance_of_rain;\r\n    }\r\n    get chanceOfSnow() {\r\n        return this._chance_of_snow;\r\n    }\r\n    get humidity() {\r\n        return this._humidity;\r\n    }\r\n    get forecast() {\r\n        return this._forecast;\r\n    }\r\n}\n\n//# sourceURL=webpack://weather-app/./src/js/Weather.js?");

/***/ }),

/***/ "./src/js/displayWeather.js":
/*!**********************************!*\
  !*** ./src/js/displayWeather.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displayWeather: () => (/* binding */ displayWeather)\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/js/getWeather.js\");\n/* harmony import */ var _assets_humidity_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/humidity.png */ \"./src/assets/humidity.png\");\n\r\n\r\n\r\n\r\n\r\n\r\nconst $main = document.querySelector('.main');\r\n\r\nfunction formatDate(timestamp) {\r\n    let newTimestamp = parseInt(`${timestamp}000`);\r\n    const date = new Date(newTimestamp);\r\n    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];\r\n    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];\r\n\r\n    const dayOfWeek = daysOfWeek[date.getDay()];\r\n    const month = months[date.getMonth()];\r\n    const day = date.getDate();\r\n    const year = date.getFullYear();\r\n\r\n    const formattedDate = `${dayOfWeek}, ${month} ${day}, ${year}`;\r\n\r\n    return formattedDate;\r\n}\r\n\r\nfunction formatHour(timestamp) {\r\n    let newTimestamp = parseInt(`${timestamp}000`);\r\n    const date = new Date(newTimestamp);\r\n    let hour = date.getHours();\r\n    let minutes = date.getMinutes();\r\n    if (hour < 10) hour = '0' + hour;\r\n    if (minutes < 10) minutes = '0' + minutes;\r\n\r\n    const formattedHour = `${hour}:${minutes}hs.`\r\n    return formattedHour;\r\n}\r\n\r\nasync function displayWeather(city, celOrFar) {\r\n    const weather = await (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city);\r\n    // Create current section\r\n    const $current = document.createElement('section');\r\n    $current.classList.add('current');\r\n\r\n    // Create weather section\r\n    const $currentWeather = document.createElement('div');\r\n    $currentWeather.classList.add('current__weather');\r\n    const formattedDate = formatDate(weather.timestamp);\r\n    const formattedHour = formatHour(weather.timestamp);\r\n    const temperature = (celOrFar === 'celcius') ? `${weather.celcius}°C` : `${weather.fahrenheit}°F`;\r\n    const opositeTemperature = (celOrFar === 'celcius') ? '°F' : '°C';\r\n    $currentWeather.innerHTML = `\r\n        <p class=\"current__city\">${weather.city}, ${weather.region} - ${weather.country}</p>\r\n        <p class=\"current__date\">${formattedDate}</p>\r\n        <p class=\"current__hour\">${formattedHour}</p>\r\n        <p class=\"current__condition\">${weather.condition}</p>\r\n        <p class=\"current__temperature\">${temperature}</p>\r\n        <button class=\"current_change-temperature current__btn\">Display ${opositeTemperature}</button>\r\n        <img src=\"${weather.conditionIcon}\" alt=\"${weather.condition}\" class=\"current__image\">\r\n        `;\r\n    $current.appendChild($currentWeather);\r\n\r\n    // Creater extra data section\r\n    const $currentExtra = document.createElement('div');\r\n    $currentExtra.classList.add('current__extra');\r\n    const wind = (celOrFar === 'celcius') ? `${weather.windKPH} km/h` : `${weather.windMPH} mph`;\r\n    $currentExtra.innerHTML = `\r\n        <div class=\"current__extra-div\">\r\n            <img class=\"current__extra-img\" src=\"${_assets_humidity_png__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            <p class=\"current__extra-p\">Humidity:</p>\r\n            <p class=\"current__extra-date\">${weather.humidity}%</p>\r\n        </div>\r\n        <div class=\"current__extra-div\">\r\n            <img class=\"current__extra-img\" src=\"${_assets_humidity_png__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            <p class=current__extra-p\"\">Chance of rain:</p>\r\n            <p class=\"current__extra-date\">${weather.chanceOfRain}%</p>\r\n        </div>\r\n        <div class=\"current__extra-div\">\r\n            <img class=\"current__extra-img\" src=\"${_assets_humidity_png__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            <p class=\"current__extra-p\">Chance of snow:</p>\r\n            <p class=\"current__extra-date\">${weather.chanceOfSnow}%</p>\r\n        </div>\r\n        <div class=\"current__extra-div\">\r\n            <img class=\"current__extra-img\" src=\"${_assets_humidity_png__WEBPACK_IMPORTED_MODULE_1__}\">\r\n            <p class=\"current__extra-p\">Wind speed:</p>\r\n            <p class=\"current__extra-date\">${wind}</p>\r\n        </div>\r\n        `;\r\n    $current.appendChild($currentExtra);\r\n\r\n    // Create forecast section\r\n    const $forecast = document.createElement('section');\r\n    $forecast.classList.add('forecast');\r\n        // Display each day\r\n    const $forecastDays = document.createElement('div');\r\n    $forecastDays.classList.add('forecast__days-container');\r\n    $forecastDays.classList.add('forecast__container');\r\n    $forecast.appendChild($forecastDays);\r\n    for(let i = 1; i < weather.forecast.length; i++) {\r\n        const day = weather.forecast[i];\r\n        const $day = document.createElement('div');\r\n        $day.classList.add('forecast__day');\r\n        let dateDay = formatDate(day.date_epoch).split(',',1)[0];\r\n        const minTemp = (celOrFar === 'celcius') ? `${day.day.mintemp_c}°C` : `${day.day.mintemp_f}°F`;\r\n        const maxTemp = (celOrFar === 'celcius') ? `${day.day.maxtemp_c}°C` : `${day.day.maxtemp_f}°F`;\r\n        $day.innerHTML = `\r\n            <p class=\"forecast__date\">${dateDay}</p>\r\n            <p class=\"forecast__min-temperature\">${minTemp}</p>\r\n            <p class=\"forecast__max-temperature\">${maxTemp}</p>\r\n            <img class=\"forecast__img\" src=\"http:${day.day.condition.icon}\">\r\n            `;\r\n        $forecastDays.appendChild($day);\r\n    }\r\n        // Display each hour\r\n    const $forecastHours = document.createElement('div');\r\n    $forecastHours.classList.add('forecast__hours-container');\r\n    $forecastHours.classList.add('forecast__container');\r\n    $forecast.appendChild($forecastHours);\r\n    const dayHours = weather.forecast[0].hour.length;\r\n    for(let i = 0; i < dayHours; i++) {\r\n        const hour = weather.forecast[0].hour[i];\r\n        const $hour = document.createElement('div');\r\n        $hour.classList.add('forecast__hour');\r\n        const formattedHour = formatHour(hour.time_epoch);\r\n        const hourTemperature = (celOrFar === 'celcius') ? `${hour.temp_c}°C` : `${hour.temp_f}°F`;\r\n        $hour.innerHTML = `\r\n            <p class=\"forecast__hour\">${formattedHour}</p>\r\n            <p class=\"forecast__temperature\">${hourTemperature}</p>\r\n            <img class=\"forecast__img\" src=\"http:${hour.condition.icon}\">\r\n            `;\r\n        $forecastHours.appendChild($hour);\r\n    }\r\n    \r\n    $main.innerHTML = '';\r\n    $main.appendChild($current);\r\n    $main.append($forecast);\r\n}\r\n\r\n\n\n//# sourceURL=webpack://weather-app/./src/js/displayWeather.js?");

/***/ }),

/***/ "./src/js/getWeather.js":
/*!******************************!*\
  !*** ./src/js/getWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _Weather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Weather */ \"./src/js/Weather.js\");\n\r\n\r\nasync function getWeather(city) {\r\n    const apiKey = '340019aa02124e398f8221444230707';\r\n    // Call the API\r\n    const weather = fetch(\r\n        `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=3&aqi=no&alerts=no`,\r\n        {mode: 'cors'})\r\n        .then(function(response) {\r\n            // Transform to JSON\r\n            return response.json();\r\n        })\r\n        .then(function(response) {\r\n            // Create the Weather object\r\n            const city = response.location.name;\r\n            const region = response.location.region;\r\n            const country = response.location.country;\r\n            const timestamp = response.location.localtime_epoch;\r\n            const celcius = response.current.temp_c;\r\n            const fahrenheit = response.current.temp_f;\r\n            const condition = response.current.condition.text;\r\n            const condition_icon = `http:${response.current.condition.icon}`;\r\n            const wind_kph = response.current.wind_kph;\r\n            const wind_mph = response.current.wind_mph;\r\n            const chance_of_rain = response.forecast.forecastday[0].day.daily_chance_of_rain;\r\n            const chance_of_snow = response.forecast.forecastday[0].day.daily_chance_of_snow;\r\n            const humidity = response.current.humidity;\r\n            const forecast = response.forecast.forecastday;\r\n            const weather = new _Weather__WEBPACK_IMPORTED_MODULE_0__.Weather(\r\n                city,\r\n                region,\r\n                country,\r\n                timestamp,\r\n                celcius,\r\n                fahrenheit,\r\n                condition,\r\n                condition_icon,\r\n                wind_kph,\r\n                wind_mph,\r\n                chance_of_rain,\r\n                chance_of_snow,\r\n                humidity,\r\n                forecast\r\n            );\r\n            return weather;\r\n        });\r\n\r\n        return weather;\r\n    }\n\n//# sourceURL=webpack://weather-app/./src/js/getWeather.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _displayWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayWeather */ \"./src/js/displayWeather.js\");\n\r\n\r\n(0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__.displayWeather)('casilda', 'celcius');\r\nconst input = document.querySelector('input');\r\nconst button = document.querySelector('button');\r\n\r\nbutton.addEventListener('click', () => (0,_displayWeather__WEBPACK_IMPORTED_MODULE_0__.displayWeather)(input.value, 'celcius'));\n\n//# sourceURL=webpack://weather-app/./src/js/index.js?");

/***/ }),

/***/ "./src/assets/humidity.png":
/*!*********************************!*\
  !*** ./src/assets/humidity.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"424691c723f91e12d7ca.png\";\n\n//# sourceURL=webpack://weather-app/./src/assets/humidity.png?");

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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