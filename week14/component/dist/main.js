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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/createElement.js":
/*!******************************!*\
  !*** ./src/createElement.js ***!
  \******************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction createElement(Cls, attribute) {\n  var o;\n\n  if (typeof Cls === 'function') {\n    o = new Cls();\n  } else {\n    o = new Wrap(Cls);\n  }\n\n  for (var name in attribute) {\n    o.setAttribute(name, attribute[name]);\n  }\n\n  var visit = function visit(children) {\n    var _iterator = _createForOfIteratorHelper(children),\n        _step;\n\n    try {\n      for (_iterator.s(); !(_step = _iterator.n()).done;) {\n        var child = _step.value;\n\n        if (child instanceof Array) {\n          visit(child);\n          continue;\n        }\n\n        if (typeof child === 'string') {\n          child = new Text(child);\n        }\n\n        o.appendChild(child);\n      }\n    } catch (err) {\n      _iterator.e(err);\n    } finally {\n      _iterator.f();\n    }\n  };\n\n  for (var _len = arguments.length, children = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {\n    children[_key - 2] = arguments[_key];\n  }\n\n  visit(children);\n  return o;\n}\n\nvar Text = /*#__PURE__*/function () {\n  function Text(text) {\n    _classCallCheck(this, Text);\n\n    this.root = document.createTextNode(text);\n  }\n\n  _createClass(Text, [{\n    key: \"moutedTo\",\n    value: function moutedTo(parent) {\n      parent.appendChild(this.root);\n    }\n  }]);\n\n  return Text;\n}();\n\nvar Wrap = /*#__PURE__*/function () {\n  function Wrap(type) {\n    _classCallCheck(this, Wrap);\n\n    this.root = document.createElement(type);\n    this.children = [];\n  }\n\n  _createClass(Wrap, [{\n    key: \"setAttribute\",\n    value: function setAttribute(key, value) {\n      this.root.setAttribute(key, value);\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: \"addEventLisinter\",\n    value: function addEventLisinter() {\n      var _this$root;\n\n      (_this$root = this.root).addEventLisinter.apply(_this$root, arguments);\n    }\n  }, {\n    key: \"removeEventLisinter\",\n    value: function removeEventLisinter() {\n      var _this$root2;\n\n      (_this$root2 = this.root).removeEventLisinter.apply(_this$root2, arguments);\n    }\n  }, {\n    key: \"moutedTo\",\n    value: function moutedTo(parent) {\n      parent.appendChild(this.root);\n\n      var _iterator2 = _createForOfIteratorHelper(this.children),\n          _step2;\n\n      try {\n        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {\n          var child = _step2.value;\n          child.moutedTo(this.root);\n        }\n      } catch (err) {\n        _iterator2.e(err);\n      } finally {\n        _iterator2.f();\n      }\n    }\n  }, {\n    key: \"style\",\n    get: function get() {\n      return this.root.style;\n    },\n    set: function set(value) {\n      this.root.style = value;\n    }\n  }]);\n\n  return Wrap;\n}();\n\n//# sourceURL=webpack:///./src/createElement.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/createElement.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\nvar data = [' https://static001.geekbang.org/resource/image/bb/21/bb38fb7c1073eaee1755f81131f11d21.jpg ', ' https://static001.geekbang.org/resource/image/1b/21/1b809d9a2bdf3ecc481322d7c9223c21.jpg ', ' https://static001.geekbang.org/resource/image/b6/4f/b6d65b2f12646a9fd6b8cb2b020d754f.jpg ', ' https://static001.geekbang.org/resource/image/73/e4/730ea9c393def7975deceb48b3eb6fe4.jpg '];\n\nvar Carousel = /*#__PURE__*/function () {\n  function Carousel(config) {\n    _classCallCheck(this, Carousel);\n\n    this.root = null;\n    this.children = [];\n    this.data = null;\n  }\n\n  _createClass(Carousel, [{\n    key: \"setAttribute\",\n    value: function setAttribute(name, value) {\n      // this.root.setAttribute(name, value)\n      this[name] = value;\n    }\n  }, {\n    key: \"appendChild\",\n    value: function appendChild(child) {\n      this.children.push(child);\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var children = this.data.map(function (url) {\n        return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"img\", {\n          src: url,\n          draggable: false\n        });\n      });\n      var root = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(\"div\", {\n        \"class\": \"carousel\"\n      }, children); // this.autoPlay(children)\n\n      this.dragePlay(root.root, children);\n      return root;\n    }\n  }, {\n    key: \"autoPlay\",\n    value: function autoPlay(childNodes) {\n      var length = this.data.length;\n      var position = 0;\n\n      var nextPic = function nextPic() {\n        var nextPosition = (position + 1) % length;\n        var animations = [{\n          node: childNodes[position],\n          end: \"translateX(\".concat(-100 - 100 * [position], \"%)\"),\n          start: \"translateX(\".concat(-100 * [position], \"%)\")\n        }, {\n          node: childNodes[nextPosition],\n          end: \"translateX(\".concat(-100 * [nextPosition], \"%)\"),\n          start: \"translateX(\".concat(100 - 100 * [nextPosition], \"%)\")\n        }];\n        animations.forEach(function (_ref) {\n          var node = _ref.node,\n              start = _ref.start;\n          node.style.transition = 'ease 0s';\n          node.style.transform = start;\n        });\n        setTimeout(function () {\n          animations.forEach(function (_ref2) {\n            var node = _ref2.node,\n                end = _ref2.end;\n            node.style.transition = ''; // '' = use css rules\n\n            node.style.transform = end;\n          });\n          position = nextPosition;\n        }, 16);\n        setTimeout(nextPic, 3000);\n      };\n\n      setTimeout(nextPic, 3000);\n    }\n  }, {\n    key: \"dragePlay\",\n    value: function dragePlay(root, childNodes) {\n      var length = this.data.length;\n      var ImgWidth = 500;\n      var position = 0;\n\n      function down(e) {\n        var nextPosition = (position + 1) % length;\n        var lastPosition = (position - 1 + length) % length;\n        var startX = e.clientX;\n        var config = [{\n          node: childNodes[position],\n          zero: -position * ImgWidth,\n          start: 0\n        }, {\n          node: childNodes[lastPosition],\n          zero: -lastPosition * ImgWidth,\n          start: -ImgWidth\n        }, {\n          node: childNodes[nextPosition],\n          zero: -nextPosition * ImgWidth,\n          start: ImgWidth\n        }];\n        config.forEach(function (_ref3) {\n          var node = _ref3.node,\n              start = _ref3.start,\n              zero = _ref3.zero;\n          node.style.transition = 'ease 0s';\n          node.style.transform = \"translateX(\".concat(start + zero, \"px)\");\n        });\n\n        function move(e) {\n          var moveX = e.clientX - startX;\n          moveX = Math.max(-ImgWidth, moveX);\n          moveX = Math.min(ImgWidth, moveX);\n          config.forEach(function (_ref4) {\n            var node = _ref4.node,\n                start = _ref4.start,\n                zero = _ref4.zero;\n            node.style.transform = \"translateX(\".concat(moveX + start + zero, \"px)\");\n          });\n        }\n\n        function up(e) {\n          var moveX = e.clientX - startX;\n          var offset = 0;\n\n          if (moveX < -100) {\n            offset = -1;\n          } else if (moveX > 100) {\n            offset = 1;\n          }\n\n          config.forEach(function (_ref5) {\n            var node = _ref5.node,\n                start = _ref5.start,\n                zero = _ref5.zero;\n            node.style.transition = '';\n            node.style.transform = \"translateX(\".concat(offset * ImgWidth + start + zero, \"px)\");\n          });\n          position = (-offset + position + length) % length;\n          document.removeEventListener('mousemove', move);\n          document.removeEventListener('mouseup', up);\n        }\n\n        document.addEventListener('mousemove', move);\n        document.addEventListener('mouseup', up);\n      }\n\n      root.addEventListener('mousedown', down);\n    }\n  }, {\n    key: \"moutedTo\",\n    value: function moutedTo(parent) {\n      this.render().moutedTo(parent);\n    }\n  }]);\n\n  return Carousel;\n}();\n\nvar compoent = Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])(Carousel, {\n  data: data\n});\ncompoent.moutedTo(document.body);\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ })

/******/ });