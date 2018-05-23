module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./classes/Helper.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Helper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "random",
    value: function random(min, max) {
      return Math.floor(min + Math.random() * (max - min));
    }
  }]);

  return Helper;
}();



/***/ }),

/***/ "./containers/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cytoscape__ = __webpack_require__("cytoscape");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cytoscape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_cytoscape__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_Navbar__ = __webpack_require__("./containers/Navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_Helper__ = __webpack_require__("./classes/Helper.js");
var _jsxFileName = "/auto_home/lgeertsen/LayoutOverlayConsensus/containers/App.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var readChars = ["A", "C", "G", "T"];
var cy;
var numbers = [];

for (var i = 0; i < 51; i++) {
  numbers.push(i % 10);
}

var busy = false;

var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {
      step: 1,
      sequence: "",
      lengthSequence: 50,
      minLengthRead: 5,
      maxLengthRead: 10,
      animationText: "",
      animate: false,
      reads: [],
      busy: false,
      waitingFunctionList: [],
      showReads: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "createGraph",
    value: function createGraph(elements, callback) {
      cy = __WEBPACK_IMPORTED_MODULE_2_cytoscape___default()({
        container: document.getElementById('cy'),
        boxSelectionEnabled: false,
        autounselectify: true,
        layout: {
          name: 'circle'
        },
        style: __WEBPACK_IMPORTED_MODULE_2_cytoscape___default.a.stylesheet().selector('node').css({
          'height': 20,
          'width': 20,
          'background-color': '#e8e406',
          'content': 'data(read)',
          'opacity': 1,
          'transition-property': 'opacity',
          'transition-duration': '0.5s'
        }).selector('edge').css({
          'label': "data(label)",
          'curve-style': 'bezier',
          'width': 5,
          'line-color': '#f2f08c',
          'opacity': 0.7,
          'target-arrow-shape': 'triangle',
          'target-arrow-color': 'blue'
        }).selector('.hideNode').css({
          'opacity': 0
        }),
        elements: elements
      });
      callback();
    }
  }, {
    key: "generateSequence",
    value: function generateSequence() {
      var sequence = "";
      var r = this.state.lengthSequence;

      for (var _i = 0; _i < r; _i++) {
        var m = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(0, readChars.length);
        sequence += readChars[m];
      }

      this.setState({
        step: 2,
        sequence: sequence
      });
    }
  }, {
    key: "createReads",
    value: function createReads() {
      var reads = [];
      var i = 0;
      var sequence = this.state.sequence;
      var loop = true;
      var count = 0;

      while (loop) {
        var r = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(this.state.minLengthRead, this.state.maxLengthRead + 1);
        var f = i + r;

        if (i + r >= sequence.length) {
          f = sequence.length;
          loop = false;
        }

        var read = sequence.substring(i, f);
        reads.push(read);
        this.setState({
          reads: reads
        });

        if (this.state.busy || busy) {
          var waitingFunctionList = this.state.waitingFunctionList;
          waitingFunctionList.push({
            function: this.showRead,
            data: [this, count, i, read]
          });
          this.setState({
            waitingFunctionList: waitingFunctionList
          });
        } else {
          busy = true;
          this.setState({
            busy: true
          });
          this.showRead([this, count, i, read]);
        }

        var b = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(3, 6);
        i = f - b;
        count++;
      }

      this.setState({
        step: 3,
        reads: reads
      });
    }
  }, {
    key: "showRead",
    value: function showRead(data) {
      var self = data[0];
      var count = data[1];
      var index = data[2];
      var read = data[3];
      setTimeout(function () {
        self.setState({
          animate: false
        });
        var anim = document.getElementById("animationText");
        var r = document.getElementById("read" + count);
        var p1 = document.getElementById("sequence" + index).getBoundingClientRect();
        var p2 = document.getElementById("read" + count + "char0").getBoundingClientRect();
        self.setState({
          animationText: read
        });
        var top1 = p1.top - 5;
        anim.style.top = top1 + "px";
        anim.style.left = p1.left + "px";
        anim.style.fontSize = "25px";
        setTimeout(function () {
          self.setState({
            animate: true
          });
          var top2 = p2.top - 8;
          anim.style.top = top2 + "px";
          anim.style.left = p2.left + "px";
          anim.style.fontSize = "20px";
        }, 500);

        (function (self, count, index, read) {
          setTimeout(function () {
            r.style.opacity = 1;
            self.setState({
              animate: false
            });
            self.endBusy();
          }, 950);
        })(self);
      }, 600); // }, 0 + (1200 * count));
    }
  }, {
    key: "shuffleReads",
    value: function shuffleReads() {
      var lol = this.state.reads;

      for (var _i2 = 0; _i2 < lol.length; _i2++) {
        var index = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(0, lol.length);
        var r = lol[_i2];
        lol[_i2] = lol[index];
        lol[index] = r;
      }

      console.log(lol);
    }
  }, {
    key: "showGraph",
    value: function showGraph() {
      var elements = [];

      for (var _i3 = 0; _i3 < this.state.reads.length; _i3++) {
        var r = {};
        r.group = 'nodes';
        r.data = {
          id: 'r' + _i3,
          read: this.state.reads[_i3],
          label: '<h1>sfjdqsqkldj<h1>'
        };
        r.classes = 'hideNode';
        elements.push(r);
      }

      this.setState({
        step: 3
      });
      this.createGraph(elements, this.showNodes);
    }
  }, {
    key: "showNodes",
    value: function showNodes() {
      var nodes = cy.nodes();

      var _loop = function _loop(_i4) {
        (function (ind) {
          setTimeout(function () {
            nodes[_i4].removeClass('hideNode');
          }, 0 + 200 * ind);
        })(_i4);
      };

      for (var _i4 = 0; _i4 < nodes.length; _i4++) {
        _loop(_i4);
      }
    }
  }, {
    key: "skipAnimations",
    value: function skipAnimations() {
      this.setState({
        waitingFunctionList: []
      });

      if (this.state.step == 3) {
        this.setState({
          showReads: true
        });
        var anim = document.getElementById("animationText");
        anim.style.top = "-100px";
      }
    }
  }, {
    key: "callFunction",
    value: function callFunction(callback, data) {
      callback(data);
    }
  }, {
    key: "endBusy",
    value: function endBusy() {
      busy = false;
      this.setState({
        busy: false
      });

      if (this.state.waitingFunctionList.length > 0) {
        var f = this.state.waitingFunctionList.shift();
        this.callFunction(f.function, f.data);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      // cy.add([
      //   {data: { id: 'ab', weight: 3, source: 'r0', target: 'r8', label: "label" } },
      //   {data: { id: 'ac', weight: 3, source: 'r1', target: 'r9', label: "label" } }
      // ]);
      this.setState({
        step: 1,
        sequence: "",
        lengthSequence: 50,
        minLengthRead: 5,
        maxLengthRead: 10,
        animationText: "",
        animate: false,
        reads: [],
        busy: false,
        waitingFunctionList: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        className: "jsx-1574020928"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Navbar__["a" /* default */], {
        step: this.state.step,
        lengthSequence: this.state.lengthSequence,
        minLengthRead: this.state.minLengthRead,
        maxLengthRead: this.state.maxLengthRead,
        changeLengthSequence: function changeLengthSequence(e) {
          return _this2.setState({
            lengthSequence: e.target.value
          });
        },
        changeMinLength: function changeMinLength(e) {
          return _this2.setState({
            minLengthRead: e.target.value
          });
        },
        changeMaxLength: function changeMaxLength(e) {
          return _this2.setState({
            maxLengthRead: e.target.value
          });
        },
        generateSequence: function generateSequence() {
          return _this2.generateSequence();
        },
        createReads: function createReads() {
          return _this2.createReads();
        },
        shuffleReads: function shuffleReads() {
          return _this2.shuffleReads();
        },
        showGraph: function showGraph() {
          return _this2.showGraph();
        },
        showSidebar: function showSidebar() {
          _this2.setState({
            step: 4
          });

          setTimeout(function () {
            cy.resize();
            cy.center();
          }, 1100);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        id: "animationText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 265
        },
        className: "jsx-1574020928" + " " + ((this.state.animate ? 'animate' : '') || "")
      }, this.state.animationText.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "animation" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 267
          },
          className: "jsx-1574020928" + " " + ("read" + letter || "")
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        className: "jsx-1574020928"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.reset();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        className: "jsx-1574020928" + " " + "btn btn-outline-dark"
      }, "RESET"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.skipAnimations();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        className: "jsx-1574020928" + " " + "btn btn-outline-warning"
      }, "SKIP ANIMATIONS")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "graphs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 290
        },
        className: "jsx-1574020928"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 291
        },
        className: "jsx-1574020928" + " " + ((this.state.step == 4 ? 'open' : '') || "")
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sequenceContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        className: "jsx-1574020928"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        className: "jsx-1574020928"
      }, this.state.sequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 295
          },
          className: "jsx-1574020928" + " " + ("read" + letter || "")
        }, letter);
      }))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "readsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 304
        },
        className: "jsx-1574020928"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 305
        },
        className: "jsx-1574020928" + " " + ((this.state.showReads ? "row justify-content-center showReads" : "row justify-content-center") || "")
      }, this.state.reads.map(function (read, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          id: "read" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307
          },
          className: "jsx-1574020928" + " " + "read col-md-2"
        }, read.split('').map(function (letter, index2) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
            key: index2,
            id: "read" + index + "char" + index2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 309
            },
            className: "jsx-1574020928" + " " + ("read" + letter || "")
          }, letter);
        }));
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "cy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 316
        },
        className: "jsx-1574020928" + " " + ((this.state.step == 4 ? 'open' : '') || "")
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1574020928",
        css: "#animationText.jsx-1574020928{top:200px;left:0px;z-index:1000;position:fixed;border-bottom:2px solid green;}#animationText.animate.jsx-1574020928{-webkit-transition:top .5s linear,left .5s linear,font-size .5s linear;transition:top .5s linear,left .5s linear,font-size .5s linear;}#reset.jsx-1574020928{position:fixed;z-index:1000;left:10px;bottom:10px;}#graphs.jsx-1574020928{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}#sidebar.jsx-1574020928{width:100%;height:calc(100vh - 56px);padding:0 5%;background:#ecf0f1;-webkit-transition:height 1s ease;transition:height 1s ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}#sidebar.open.jsx-1574020928{height:calc(25vh - 56px);}#sequenceContainer.jsx-1574020928{padding-top:25px;text-align:center;}#sequenceContainer.jsx-1574020928 h6.jsx-1574020928,#numbers.jsx-1574020928,#animationText.jsx-1574020928{font-size:25px;font-weight:bold;word-break:break-all;line-height:40px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}#cy.jsx-1574020928{width:100%;height:calc(80vh - 56px);-webkit-transition:height 1s ease;transition:height 1s ease;}.wrapper.jsx-1574020928{height:calc(100vh - 56px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:25px;}.row.jsx-1574020928{max-height:calc(100vh - 56px);padding:25px 10px;text-align:center;font-weight:bold;font-size:20px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}.read.jsx-1574020928{opacity:0;}.showReads.jsx-1574020928 .read.jsx-1574020928{opacity:1;}.readA.jsx-1574020928{color:#27ae60;}.readC.jsx-1574020928{color:#2980b9;}.readG.jsx-1574020928{color:#c0392b;}.readT.jsx-1574020928{color:#8e44ad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThUb0IsQUFJdUIsQUFPdUQsQUFHbEQsQUFNRixBQUlILEFBV2UsQUFHUixBQUlGLEFBUUosQUFLZSxBQU9JLEFBU3BCLEFBR0EsQUFHSSxBQUdBLEFBR0EsQUFHQSxVQWpGTCxBQW1FWCxBQUdBLENBbEQ0QixBQTBCRCxHQTJCM0IsQUFHQSxBQUdBLEFBR0EsQ0F4RWUsQUE0QkksRUFKQyxFQWpDTCxNQThCZixDQW9CZSxFQXhDSCxFQStDTyxFQXhERixBQXFDTSxHQUp2QixDQVk0QixDQTFCYixDQVRELFNBVGtCLENBd0RaLEVBOUNwQixBQVNxQixHQWtCRixhQW9CQSxHQXJDUyxDQWtCUCxJQXpCRyxHQVp4QixNQXlEaUIsYUFiakIsRUFjcUIsRUFWSSw2QkE1QlYsS0FqQmYsa0JBVUEsV0F5QndCLHNCQUN4QixNQW9Cd0IsUUFWSCxJQTVCRyxVQXVDeEIsb0VBcENBLFdBMEJlLGFBQ2YiLCJmaWxlIjoiY29udGFpbmVycy9BcHAuanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBjeXRvc2NhcGUgZnJvbSAnY3l0b3NjYXBlJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi9jb250YWluZXJzL05hdmJhcic7XG5pbXBvcnQgSGVscGVyIGZyb20gJy4uL2NsYXNzZXMvSGVscGVyJztcblxuY29uc3QgcmVhZENoYXJzID0gW1wiQVwiLCBcIkNcIiwgXCJHXCIsIFwiVFwiXTtcblxudmFyIGN5O1xudmFyIG51bWJlcnMgPSBbXVxuZm9yICh2YXIgaSA9IDA7IGkgPCA1MTsgaSsrKSB7XG4gIG51bWJlcnMucHVzaChpJTEwKTtcbn1cblxudmFyIGJ1c3kgPSBmYWxzZTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RlcDogMSxcbiAgICAgIHNlcXVlbmNlOiBcIlwiLFxuICAgICAgbGVuZ3RoU2VxdWVuY2U6IDUwLFxuICAgICAgbWluTGVuZ3RoUmVhZDogNSxcbiAgICAgIG1heExlbmd0aFJlYWQ6IDEwLFxuICAgICAgYW5pbWF0aW9uVGV4dDogXCJcIixcbiAgICAgIGFuaW1hdGU6IGZhbHNlLFxuICAgICAgcmVhZHM6IFtdLFxuICAgICAgYnVzeTogZmFsc2UsXG4gICAgICB3YWl0aW5nRnVuY3Rpb25MaXN0OiBbXSxcbiAgICAgIHNob3dSZWFkczogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjcmVhdGVHcmFwaChlbGVtZW50cywgY2FsbGJhY2spIHtcbiAgICBjeSA9IGN5dG9zY2FwZSh7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjeScpLFxuICAgICAgYm94U2VsZWN0aW9uRW5hYmxlZDogZmFsc2UsXG4gICAgICBhdXRvdW5zZWxlY3RpZnk6IHRydWUsXG5cbiAgICAgIGxheW91dDoge1xuICAgICAgICBuYW1lOiAnY2lyY2xlJ1xuICAgICAgfSxcblxuICAgICAgc3R5bGU6IGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcbiAgICAgICAuc2VsZWN0b3IoJ25vZGUnKVxuICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICdoZWlnaHQnOiAyMCxcbiAgICAgICAgICAgJ3dpZHRoJzogMjAsXG4gICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNlOGU0MDYnLFxuICAgICAgICAgICAnY29udGVudCc6ICdkYXRhKHJlYWQpJyxcbiAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6ICdvcGFjaXR5JyxcbiAgICAgICAgICAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnMC41cydcbiAgICAgICAgIH0pXG4gICAgICAgLnNlbGVjdG9yKCdlZGdlJylcbiAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAnbGFiZWwnOiBcImRhdGEobGFiZWwpXCIsXG4gICAgICAgICAgICdjdXJ2ZS1zdHlsZSc6ICdiZXppZXInLFxuICAgICAgICAgICAnd2lkdGgnOiA1LFxuICAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZjJmMDhjJyxcbiAgICAgICAgICAgJ29wYWNpdHknOiAwLjcsXG4gICAgICAgICAgICd0YXJnZXQtYXJyb3ctc2hhcGUnOiAndHJpYW5nbGUnLFxuICAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJ2JsdWUnXG4gICAgICAgICB9KVxuICAgICAgIC5zZWxlY3RvcignLmhpZGVOb2RlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICB9KSxcblxuICAgICAgZWxlbWVudHM6IGVsZW1lbnRzXG4gICAgfSk7XG5cbiAgICBjYWxsYmFjaygpO1xuICB9XG5cbiAgZ2VuZXJhdGVTZXF1ZW5jZSgpIHtcbiAgICBsZXQgc2VxdWVuY2UgPSBcIlwiO1xuICAgIGxldCByID0gdGhpcy5zdGF0ZS5sZW5ndGhTZXF1ZW5jZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcjsgaSsrKSB7XG4gICAgICBsZXQgbSA9IEhlbHBlci5yYW5kb20oMCwgcmVhZENoYXJzLmxlbmd0aCk7XG4gICAgICBzZXF1ZW5jZSArPSByZWFkQ2hhcnNbbV07XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDIsIHNlcXVlbmNlOiBzZXF1ZW5jZX0pO1xuICB9XG5cbiAgY3JlYXRlUmVhZHMoKSB7XG4gICAgbGV0IHJlYWRzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBzZXF1ZW5jZSA9IHRoaXMuc3RhdGUuc2VxdWVuY2U7XG4gICAgbGV0IGxvb3AgPSB0cnVlO1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICB3aGlsZShsb29wKSB7XG4gICAgICBsZXQgciA9IEhlbHBlci5yYW5kb20odGhpcy5zdGF0ZS5taW5MZW5ndGhSZWFkLCB0aGlzLnN0YXRlLm1heExlbmd0aFJlYWQrMSk7XG4gICAgICBsZXQgZiA9IGkrcjtcbiAgICAgIGlmKGkrciA+PSBzZXF1ZW5jZS5sZW5ndGgpIHtcbiAgICAgICAgZiA9IHNlcXVlbmNlLmxlbmd0aDtcbiAgICAgICAgbG9vcCA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgbGV0IHJlYWQgPSBzZXF1ZW5jZS5zdWJzdHJpbmcoaSxmKTtcbiAgICAgIHJlYWRzLnB1c2gocmVhZCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHtyZWFkczogcmVhZHN9KTtcbiAgICAgIGlmKHRoaXMuc3RhdGUuYnVzeSB8fCBidXN5KSB7XG4gICAgICAgIGxldCB3YWl0aW5nRnVuY3Rpb25MaXN0ID0gdGhpcy5zdGF0ZS53YWl0aW5nRnVuY3Rpb25MaXN0O1xuICAgICAgICB3YWl0aW5nRnVuY3Rpb25MaXN0LnB1c2goe1xuICAgICAgICAgIGZ1bmN0aW9uOiB0aGlzLnNob3dSZWFkLFxuICAgICAgICAgIGRhdGE6IFt0aGlzLCBjb3VudCwgIGksIHJlYWRdXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHt3YWl0aW5nRnVuY3Rpb25MaXN0OiB3YWl0aW5nRnVuY3Rpb25MaXN0fSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBidXN5ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7YnVzeTogdHJ1ZX0pO1xuICAgICAgICB0aGlzLnNob3dSZWFkKFt0aGlzLCBjb3VudCwgIGksIHJlYWRdKTtcbiAgICAgIH1cbiAgICAgIGxldCBiID0gSGVscGVyLnJhbmRvbSgzLCA2KTtcbiAgICAgIGkgPSBmLWI7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAzLCByZWFkczogcmVhZHN9KTtcbiAgfVxuXG4gIHNob3dSZWFkKGRhdGEpIHtcblxuICAgIGxldCBzZWxmID0gZGF0YVswXTtcbiAgICBsZXQgY291bnQgPSBkYXRhWzFdO1xuICAgIGxldCBpbmRleCA9IGRhdGFbMl07XG4gICAgbGV0IHJlYWQgPSBkYXRhWzNdO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRlOiBmYWxzZX0pO1xuXG4gICAgICBsZXQgYW5pbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcbiAgICAgIGxldCByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkXCIgKyBjb3VudCk7XG4gICAgICBsZXQgcDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcXVlbmNlXCIgKyBpbmRleCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgcDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWRcIiArIGNvdW50ICsgXCJjaGFyMFwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2FuaW1hdGlvblRleHQ6IHJlYWR9KVxuICAgICAgbGV0IHRvcDEgPSBwMS50b3AgLSA1O1xuICAgICAgYW5pbS5zdHlsZS50b3AgPSB0b3AxICsgXCJweFwiO1xuICAgICAgYW5pbS5zdHlsZS5sZWZ0ID0gcDEubGVmdCArIFwicHhcIjtcbiAgICAgIGFuaW0uc3R5bGUuZm9udFNpemUgPSBcIjI1cHhcIjtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe2FuaW1hdGU6IHRydWV9KTtcblxuICAgICAgICBsZXQgdG9wMiA9IHAyLnRvcCAtIDg7XG4gICAgICAgIGFuaW0uc3R5bGUudG9wID0gdG9wMiArIFwicHhcIjtcbiAgICAgICAgYW5pbS5zdHlsZS5sZWZ0ID0gcDIubGVmdCArIFwicHhcIjtcbiAgICAgICAgYW5pbS5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgfSwgNTAwKTtcbiAgICAgIChmdW5jdGlvbihzZWxmLCBjb3VudCwgaW5kZXgsIHJlYWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRlOiBmYWxzZX0pO1xuICAgICAgICAgIHNlbGYuZW5kQnVzeSgpO1xuICAgICAgICB9LCA5NTApO1xuICAgICAgfSkoc2VsZik7XG4gICAgfSwgNjAwKTtcbiAgICAvLyB9LCAwICsgKDEyMDAgKiBjb3VudCkpO1xuICB9XG5cbiAgc2h1ZmZsZVJlYWRzKCkge1xuICAgIGxldCBsb2wgPSB0aGlzLnN0YXRlLnJlYWRzO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2wubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpbmRleCA9IEhlbHBlci5yYW5kb20oMCwgbG9sLmxlbmd0aCk7XG4gICAgICBsZXQgciA9IGxvbFtpXTtcbiAgICAgIGxvbFtpXSA9IGxvbFtpbmRleF07XG4gICAgICBsb2xbaW5kZXhdID0gcjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cobG9sKTtcbiAgfVxuXG4gIHNob3dHcmFwaCgpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yZWFkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHIgPSB7fTtcbiAgICAgIHIuZ3JvdXAgPSAnbm9kZXMnO1xuICAgICAgci5kYXRhID0ge1xuICAgICAgICBpZDogJ3InICsgaSxcbiAgICAgICAgcmVhZDogdGhpcy5zdGF0ZS5yZWFkc1tpXSxcbiAgICAgICAgbGFiZWw6ICc8aDE+c2ZqZHFzcWtsZGo8aDE+J1xuICAgICAgfTtcbiAgICAgIHIuY2xhc3NlcyA9ICdoaWRlTm9kZSc7XG4gICAgICBlbGVtZW50cy5wdXNoKHIpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAzfSk7XG4gICAgdGhpcy5jcmVhdGVHcmFwaChlbGVtZW50cywgdGhpcy5zaG93Tm9kZXMpO1xuICB9XG5cbiAgc2hvd05vZGVzKCkge1xuICAgIGxldCBub2RlcyA9IGN5Lm5vZGVzKCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW5kKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG5vZGVzW2ldLnJlbW92ZUNsYXNzKCdoaWRlTm9kZScpO1xuICAgICAgICB9LCAwICsgKDIwMCAqIGluZCkpO1xuICAgICAgfSkoaSk7XG4gICAgfVxuICB9XG5cbiAgc2tpcEFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7d2FpdGluZ0Z1bmN0aW9uTGlzdDogW119KTtcbiAgICBpZih0aGlzLnN0YXRlLnN0ZXAgPT0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1JlYWRzOiB0cnVlfSk7XG4gICAgICBsZXQgYW5pbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcbiAgICAgIGFuaW0uc3R5bGUudG9wID0gXCItMTAwcHhcIjtcbiAgICB9XG4gIH1cblxuICBjYWxsRnVuY3Rpb24oY2FsbGJhY2ssIGRhdGEpIHtcbiAgICBjYWxsYmFjayhkYXRhKTtcbiAgfVxuXG4gIGVuZEJ1c3koKSB7XG4gICAgYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2J1c3k6IGZhbHNlfSk7XG4gICAgaWYodGhpcy5zdGF0ZS53YWl0aW5nRnVuY3Rpb25MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBmID0gdGhpcy5zdGF0ZS53YWl0aW5nRnVuY3Rpb25MaXN0LnNoaWZ0KCk7XG4gICAgICB0aGlzLmNhbGxGdW5jdGlvbihmLmZ1bmN0aW9uLCBmLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIC8vIGN5LmFkZChbXG4gICAgLy8gICB7ZGF0YTogeyBpZDogJ2FiJywgd2VpZ2h0OiAzLCBzb3VyY2U6ICdyMCcsIHRhcmdldDogJ3I4JywgbGFiZWw6IFwibGFiZWxcIiB9IH0sXG4gICAgLy8gICB7ZGF0YTogeyBpZDogJ2FjJywgd2VpZ2h0OiAzLCBzb3VyY2U6ICdyMScsIHRhcmdldDogJ3I5JywgbGFiZWw6IFwibGFiZWxcIiB9IH1cbiAgICAvLyBdKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0ZXA6IDEsXG4gICAgICBzZXF1ZW5jZTogXCJcIixcbiAgICAgIGxlbmd0aFNlcXVlbmNlOiA1MCxcbiAgICAgIG1pbkxlbmd0aFJlYWQ6IDUsXG4gICAgICBtYXhMZW5ndGhSZWFkOiAxMCxcbiAgICAgIGFuaW1hdGlvblRleHQ6IFwiXCIsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIHJlYWRzOiBbXSxcbiAgICAgIGJ1c3k6IGZhbHNlLFxuICAgICAgd2FpdGluZ0Z1bmN0aW9uTGlzdDogW11cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImFwcFwiPlxuXG4gICAgICAgIDxOYXZiYXJcbiAgICAgICAgICBzdGVwPXt0aGlzLnN0YXRlLnN0ZXB9XG4gICAgICAgICAgbGVuZ3RoU2VxdWVuY2U9e3RoaXMuc3RhdGUubGVuZ3RoU2VxdWVuY2V9XG4gICAgICAgICAgbWluTGVuZ3RoUmVhZD17dGhpcy5zdGF0ZS5taW5MZW5ndGhSZWFkfVxuICAgICAgICAgIG1heExlbmd0aFJlYWQ9e3RoaXMuc3RhdGUubWF4TGVuZ3RoUmVhZH1cblxuICAgICAgICAgIGNoYW5nZUxlbmd0aFNlcXVlbmNlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2xlbmd0aFNlcXVlbmNlOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgIGNoYW5nZU1pbkxlbmd0aD17ZSA9PiB0aGlzLnNldFN0YXRlKHttaW5MZW5ndGhSZWFkOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgIGNoYW5nZU1heExlbmd0aD17ZSA9PiB0aGlzLnNldFN0YXRlKHttYXhMZW5ndGhSZWFkOiBlLnRhcmdldC52YWx1ZX0pfVxuXG4gICAgICAgICAgZ2VuZXJhdGVTZXF1ZW5jZT17KCkgPT4gdGhpcy5nZW5lcmF0ZVNlcXVlbmNlKCl9XG4gICAgICAgICAgY3JlYXRlUmVhZHM9eygpID0+IHRoaXMuY3JlYXRlUmVhZHMoKX1cbiAgICAgICAgICBzaHVmZmxlUmVhZHM9eygpID0+IHRoaXMuc2h1ZmZsZVJlYWRzKCl9XG4gICAgICAgICAgc2hvd0dyYXBoPXsoKSA9PiB0aGlzLnNob3dHcmFwaCgpfVxuICAgICAgICAgIHNob3dTaWRlYmFyPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7c3RlcDogNH0pOyBzZXRUaW1lb3V0KCgpID0+IHtjeS5yZXNpemUoKTsgY3kuY2VudGVyKCk7fSwgMTEwMCk7IH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGg2IGlkPVwiYW5pbWF0aW9uVGV4dFwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hbmltYXRlID8gJ2FuaW1hdGUnIDogJyd9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmFuaW1hdGlvblRleHQuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gaWQ9e1wiYW5pbWF0aW9uXCIgKyBpbmRleH0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvaDY+XG5cbiAgICAgICAgPGRpdiBpZD1cInJlc2V0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVzZXQoKX0+UkVTRVQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gdGhpcy5za2lwQW5pbWF0aW9ucygpfT5TS0lQIEFOSU1BVElPTlM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLnN0ZXAgPT0gMSB8fCB0aGlzLnN0YXRlLnN0ZXAgPT0gMiA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRzLm1hcCgocmVhZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJlYWQgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtyZWFkLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH0gKi99XG4gICAgICAgIDxkaXYgaWQ9XCJncmFwaHNcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGVwID09IDQgPyAnb3BlbicgOiAnJ30+XG4gICAgICAgICAgICA8ZGl2IGlkPVwic2VxdWVuY2VDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcXVlbmNlLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGlkPXtcInNlcXVlbmNlXCIgKyBpbmRleH0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgIHsvKiA8aDYgaWQ9XCJudW1iZXJzXCI+XG4gICAgICAgICAgICAgICAge251bWJlcnMubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT57bGV0dGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC9oNj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJyZWFkc0NvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zaG93UmVhZHMgPyBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIHNob3dSZWFkc1wiIDogXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwifT5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkcy5tYXAoKHJlYWQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGlkPXtcInJlYWRcIiArIGluZGV4fSBjbGFzc05hbWU9XCJyZWFkIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIHtyZWFkLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgyKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleDJ9IGlkPXtcInJlYWRcIiArIGluZGV4ICsgXCJjaGFyXCIgKyBpbmRleDJ9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJjeVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGVwID09IDQgPyAnb3BlbicgOiAnJ30+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAjYW5pbWF0aW9uVGV4dCB7XG4gICAgICAgICAgICAvLyBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JlZW47XG4gICAgICAgICAgfVxuICAgICAgICAgICNhbmltYXRpb25UZXh0LmFuaW1hdGUge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdG9wIC41cyBsaW5lYXIsIGxlZnQgLjVzIGxpbmVhciwgZm9udC1zaXplIC41cyBsaW5lYXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNyZXNldCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2dyYXBocyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NpZGViYXIge1xuICAgICAgICAgICAgd2lkdGggMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgICAgICAgICAgcGFkZGluZzogMCA1JTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlY2YwZjE7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAvLyBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZWJhci5vcGVuIHtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygyNXZoIC0gNTZweCk7O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2VxdWVuY2VDb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzZXF1ZW5jZUNvbnRhaW5lciBoNiwgI251bWJlcnMsICNhbmltYXRpb25UZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2N5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDgwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIHBhZGRpbmcgMjVweCAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNob3dSZWFkcyAucmVhZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZEEge1xuICAgICAgICAgICAgY29sb3I6ICMyN2FlNjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkQyB7XG4gICAgICAgICAgICBjb2xvcjogIzI5ODBiOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWRHIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzAzOTJiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZFQge1xuICAgICAgICAgICAgY29sb3I6ICM4ZTQ0YWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=containers/App.js */"
      }));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./containers/Navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
var _jsxFileName = "/auto_home/lgeertsen/LayoutOverlayConsensus/containers/Navbar.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var App =
/*#__PURE__*/
function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 6
        },
        className: "jsx-411662241"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        className: "jsx-411662241" + " " + "navbar navbar-expand-lg navbar-light bg-light"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-411662241" + " " + "navbar-brand"
      }, "Overlap Layout Consensus"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        type: "button",
        "data-toggle": "collapse",
        "data-target": "#navbarSupportedContent",
        "aria-controls": "navbarSupportedContent",
        "aria-expanded": "false",
        "aria-label": "Toggle navigation",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        className: "jsx-411662241" + " " + "navbar-toggler"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-411662241" + " " + "navbar-toggler-icon"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-411662241" + " " + "collapse navbar-collapse"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-411662241" + " " + "navbar-nav mr-auto"
      }), this.props.step == 1 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-411662241"
      }, "Length Of Sequence"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        min: "10",
        value: this.props.lengthSequence,
        onChange: function onChange(e) {
          return _this.props.changeLengthSequence(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-411662241" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.generateSequence();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Generate sequence")) : '', this.props.step == 2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-411662241"
      }, "Min Length Reads:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        min: "5",
        max: "10",
        value: this.props.minLengthRead,
        onChange: function onChange(e) {
          return _this.props.changeMinLength(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-411662241" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-411662241"
      }, "Max Length Reads:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        min: "5",
        max: "10",
        value: this.props.maxLengthRead,
        onChange: function onChange(e) {
          return _this.props.changeMaxLength(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-411662241" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.createReads();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Create reads")) : '', this.props.step == 3 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.shuffleReads();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Shuffle reads")) : '')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "411662241",
        css: ".form-control.jsx-411662241{width:100px;margin-left:10px;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTBDb0IsQUFHeUIsWUFDSyxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiY29udGFpbmVycy9OYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm5hdmJhclwiPlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5PdmVybGFwIExheW91dCBDb25zZW5zdXM8L2E+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDEgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5MZW5ndGggT2YgU2VxdWVuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMTBcIiB2YWx1ZT17dGhpcy5wcm9wcy5sZW5ndGhTZXF1ZW5jZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5jaGFuZ2VMZW5ndGhTZXF1ZW5jZShlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdlbmVyYXRlU2VxdWVuY2UoKX0+R2VuZXJhdGUgc2VxdWVuY2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gMiA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWluIExlbmd0aCBSZWFkczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwXCIgdmFsdWU9e3RoaXMucHJvcHMubWluTGVuZ3RoUmVhZH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5jaGFuZ2VNaW5MZW5ndGgoZSl9Lz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWF4IExlbmd0aCBSZWFkczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwXCIgdmFsdWU9e3RoaXMucHJvcHMubWF4TGVuZ3RoUmVhZH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5jaGFuZ2VNYXhMZW5ndGgoZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbXktMiBteS1zbS0wXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jcmVhdGVSZWFkcygpfT5DcmVhdGUgcmVhZHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIG15LTIgbXktc20tMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvd0dyYXBoKCl9PlNob3cgZ3JhcGg8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiAnJyB9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDMgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNodWZmbGVSZWFkcygpfT5TaHVmZmxlIHJlYWRzPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiAnJyB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAuZm9ybS1jb250cm9sIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=containers/Navbar.js */"
      }));
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("styled-jsx/style");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_App__ = __webpack_require__("./containers/App.js");
var _jsxFileName = "/auto_home/lgeertsen/LayoutOverlayConsensus/pages/index.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        className: "jsx-3624454533"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        className: "jsx-3624454533"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("meta", {
        charSet: "utf-8",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        className: "jsx-3624454533"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        href: "https://use.fontawesome.com/releases/v5.0.2/css/all.css",
        rel: "stylesheet",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        className: "jsx-3624454533"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-3624454533"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("link", {
        rel: "stylesheet",
        type: "text/css",
        href: "/static/css/style.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        className: "jsx-3624454533"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_App__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3636536621",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Cb0IiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC4yL2Nzcy9hbGwuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZS5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEFwcC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3395623713",
        css: "html,body{height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFCMkIsQUFHeUIsWUFDSSxnQkFDbEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC4yL2Nzcy9hbGwuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZS5jc3NcIiAvPlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEFwcC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */"
      }));
    }
  }]);

  return Index;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "cytoscape":
/***/ (function(module, exports) {

module.exports = require("cytoscape");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map