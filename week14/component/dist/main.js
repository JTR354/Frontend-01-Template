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
/******/ 	__webpack_require__.p = "https://jtr354.github.io/Frontend-01-Template/week14/component/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/carousel.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/carousel.js":
/*!*************************!*\
  !*** ./src/carousel.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar data = [\" https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg \", \" https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg \", \" https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg \", \" https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg \"]; // create\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel() {\n    _classCallCheck(this, Carousel);\n\n    this.root = null;\n    this.data = null;\n  }\n\n  _createClass(Carousel, [{\n    key: \"render\",\n    value: function render() {\n      this.root = document.createElement('div');\n      this.root.classList.add('carousel');\n      var fragment = document.createDocumentFragment();\n\n      var _iterator = _createForOfIteratorHelper(this.data),\n          _step;\n\n      try {\n        for (_iterator.s(); !(_step = _iterator.n()).done;) {\n          var d = _step.value;\n          var img = new Image();\n          img.src = d;\n          img.draggable = false;\n          fragment.appendChild(img);\n        }\n      } catch (err) {\n        _iterator.e(err);\n      } finally {\n        _iterator.f();\n      }\n\n      this.root.appendChild(fragment); // this.autoPlay()\n\n      this.dragePlay();\n    }\n  }, {\n    key: \"dragePlay\",\n    value: function dragePlay() {\n      var length = this.data.length;\n      var childNodes = this.root.childNodes;\n      var body = document.documentElement;\n      var position = 0;\n      var ImgWidth = 500;\n\n      function down(e) {\n        var nextPosition = (position + 1) % length;\n        var prevPosition = (position - 1 + length) % length;\n        var startX = e.clientX;\n        var moveX;\n        childNodes[position].style.transition = 'ease 0s';\n        childNodes[nextPosition].style.transition = 'ease 0s';\n        childNodes[prevPosition].style.transition = 'ease 0s';\n\n        function move(e) {\n          moveX = e.clientX - startX;\n          moveX = Math.max(-ImgWidth, moveX);\n          moveX = Math.min(ImgWidth, moveX);\n          childNodes[position].style.transform = \"translateX(\".concat(moveX + -position * ImgWidth, \"px)\");\n          childNodes[nextPosition].style.transform = \"translateX(\".concat(moveX + -nextPosition * ImgWidth + ImgWidth, \"px)\");\n          childNodes[prevPosition].style.transform = \"translateX(\".concat(moveX + -prevPosition * ImgWidth - ImgWidth, \"px)\");\n        }\n\n        function up() {\n          childNodes[position].style.transition = '';\n          childNodes[nextPosition].style.transition = '';\n          childNodes[prevPosition].style.transition = '';\n\n          if (moveX > 100) {\n            childNodes[position].style.transform = \"translateX(\".concat(-position * ImgWidth + ImgWidth, \"px)\");\n            childNodes[nextPosition].style.transform = \"translateX(\".concat(-nextPosition * ImgWidth + ImgWidth * 2, \"px)\");\n            childNodes[prevPosition].style.transform = \"translateX(\".concat(-prevPosition * ImgWidth, \"px)\");\n            childNodes[position].removeEventListener('mousedown', down);\n            position = prevPosition;\n          } else if (moveX < -100) {\n            childNodes[position].style.transform = \"translateX(\".concat(-position * ImgWidth - ImgWidth, \"px)\");\n            childNodes[nextPosition].style.transform = \"translateX(\".concat(-nextPosition * ImgWidth, \"px)\");\n            childNodes[prevPosition].style.transform = \"translateX(\".concat(-prevPosition * ImgWidth - ImgWidth - ImgWidth, \"px)\");\n            childNodes[position].removeEventListener('mousedown', down);\n            position = nextPosition;\n          } else {\n            childNodes[position].style.transform = \"translateX(\".concat(-position * ImgWidth, \"px)\");\n            childNodes[nextPosition].style.transform = \"translateX(\".concat(-nextPosition * ImgWidth + ImgWidth, \"px)\");\n            childNodes[prevPosition].style.transform = \"translateX(\".concat(-prevPosition * ImgWidth - ImgWidth, \"px)\");\n          }\n\n          body.removeEventListener('mousemove', move);\n          setTimeout(function () {\n            childNodes[position].addEventListener('mousedown', down);\n          }, 16);\n        }\n\n        body.addEventListener('mousemove', move);\n        body.addEventListener('mouseup', up);\n      }\n\n      childNodes[position].addEventListener('mousedown', down);\n    }\n  }, {\n    key: \"autoPlay\",\n    value: function autoPlay() {\n      var length = this.data.length;\n      var childNodes = this.root.childNodes;\n      var position = 0;\n\n      var nextPic = function nextPic() {\n        var nextPosition = (position + 1) % length;\n        var animations = [{\n          node: childNodes[position],\n          end: \"translateX(\".concat(-100 - 100 * [position], \"%)\"),\n          start: \"translateX(\".concat(-100 * [position], \"%)\")\n        }, {\n          node: childNodes[nextPosition],\n          end: \"translateX(\".concat(-100 * [nextPosition], \"%)\"),\n          start: \"translateX(\".concat(100 - 100 * [nextPosition], \"%)\")\n        }];\n        animations.forEach(function (_ref) {\n          var node = _ref.node,\n              start = _ref.start;\n          node.style.transition = 'ease 0s';\n          node.style.transform = start;\n        });\n        setTimeout(function () {\n          animations.forEach(function (_ref2) {\n            var node = _ref2.node,\n                end = _ref2.end;\n            node.style.transition = ''; // '' = use css rules\n\n            node.style.transform = end;\n          });\n          position = nextPosition;\n        }, 16);\n        setTimeout(nextPic, 3000);\n      };\n\n      setTimeout(nextPic, 3000);\n    }\n  }]);\n\n  return Carousel;\n}(); // create\n\n\nvar carousel = new Carousel(); // update\n\ncarousel.data = data;\ncarousel.render(); // mount\n\ndocument.getElementById('app').appendChild(carousel.root);\n\n//# sourceURL=webpack:///./src/carousel.js?");

/***/ })

/******/ });