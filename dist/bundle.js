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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/src/scripts/index.js: Support for the experimental syntax 'classProperties' isn't currently enabled (11:4):\\n\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m\\u001b[36mclass\\u001b[39m \\u001b[33mStudent\\u001b[39m{\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 11 | \\u001b[39m\\ta \\u001b[33m=\\u001b[39m \\u001b[35m20\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m\\t  \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 12 | \\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 13 | \\u001b[39m\\ttoFunc(){\\u001b[0m\\n\\u001b[0m \\u001b[90m 14 | \\u001b[39m\\u001b[0m\\n\\nAdd @babel/plugin-proposal-class-properties (https://git.io/vb4SL) to the 'plugins' section of your Babel config to enable transformation.\\n    at Parser.raise (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:6387:17)\\n    at Parser.expectPlugin (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:7709:18)\\n    at Parser.parseClassProperty (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10901:12)\\n    at Parser.pushClassProperty (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10866:30)\\n    at Parser.parseClassMemberWithIsStatic (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10805:14)\\n    at Parser.parseClassMember (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10739:10)\\n    at withTopicForbiddingContext (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10694:14)\\n    at Parser.withTopicForbiddingContext (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:9773:14)\\n    at Parser.parseClassBody (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10671:10)\\n    at Parser.parseClass (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10645:22)\\n    at Parser.parseStatementContent (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:9942:21)\\n    at Parser.parseStatement (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:9900:17)\\n    at Parser.parseBlockOrModuleBlockBody (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10476:25)\\n    at Parser.parseBlockBody (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:10463:10)\\n    at Parser.parseTopLevel (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:9829:10)\\n    at Parser.parse (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:11341:17)\\n    at parse (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/parser/lib/index.js:11377:38)\\n    at parser (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/core/lib/transformation/normalize-file.js:166:34)\\n    at normalizeFile (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/core/lib/transformation/normalize-file.js:100:11)\\n    at runSync (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/core/lib/transformation/index.js:44:43)\\n    at runAsync (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/core/lib/transformation/index.js:35:14)\\n    at process.nextTick (/Users/fazlulkarim/Development/Github-Projects/webpack-4-starter/node_modules/@babel/core/lib/transform.js:34:34)\\n    at process._tickCallback (internal/process/next_tick.js:61:11)\");\n\n//# sourceURL=webpack:///./src/scripts/index.js?");

/***/ })

/******/ });