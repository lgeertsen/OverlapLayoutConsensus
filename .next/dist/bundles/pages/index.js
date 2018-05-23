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
      var vide = "";
      var r = this.state.lengthSequence;

      for (var _i = 0; _i < r; _i++) {
        var m = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(0, readChars.length);
        sequence += readChars[m];
        vide += "-";
      }

      this.setState({
        step: 2,
        sequence: sequence
      }); // odoo.default({ el:'#sequenceContainer', from: vide, to: sequence, animationDelay: 1000, duration: 2000 });
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

            if (self.state.step > 3) {
              var _anim = document.getElementById("animationText");

              _anim.style.top = "-100px";
            }
          }, 950);
        })(self);
      }, 600); // }, 0 + (1200 * count));
    }
  }, {
    key: "shuffleReads",
    value: function shuffleReads() {
      this.skipAnimations();
      var anim = document.getElementById("animationText");
      anim.style.top = "-100px";
      var lol = this.state.reads; // let nums = [];
      // for(let i = 0; i < lol.length; i++) {
      //   nums.push(i);
      // }

      for (var _i2 = 0; _i2 < lol.length; _i2++) {
        var index = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(0, lol.length);
        var r = lol[_i2];
        lol[_i2] = lol[index];
        lol[index] = r; // let n = nums[i];
        // nums[i] = nums[index];
        // nums[index] = n;
      } // console.log(lol);
      // console.log(nums);
      // let positions = []
      //
      // for(let i = 0; i < nums.length; i++) {
      //   let r = document.getElementById("read" + i);
      //   let pos = r.getBoundingClientRect();
      //   positions.push(pos);
      // }
      //
      // for(let i = 0; i < nums.length; i++) {
      //   let r = document.getElementById("read" + i);
      //   r.style.position = "fixed";
      //   r.style.top = positions[i].top + "px";
      //   r.style.left = positions[i].left + "px";
      // }


      this.setState({
        step: 4,
        reads: lol
      });
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
        step: 5
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
          lineNumber: 281
        },
        className: "jsx-4106850627"
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
          lineNumber: 283
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        id: "animationText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 300
        },
        className: "jsx-4106850627" + " " + ((this.state.animate ? 'animate' : '') || "")
      }, this.state.animationText.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "animation" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302
          },
          className: "jsx-4106850627" + " " + ("read" + letter || "")
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        className: "jsx-4106850627"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.reset();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 307
        },
        className: "jsx-4106850627" + " " + "btn btn-outline-dark"
      }, "RESET"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.skipAnimations();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 308
        },
        className: "jsx-4106850627" + " " + "btn btn-outline-warning"
      }, "SKIP ANIMATIONS")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "graphs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 325
        },
        className: "jsx-4106850627"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 326
        },
        className: "jsx-4106850627" + " " + ((this.state.step > 4 ? 'open' : '') || "")
      }, this.state.step < 5 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sequenceContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        className: "jsx-4106850627"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        className: "jsx-4106850627"
      }, this.state.sequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 331
          },
          className: "jsx-4106850627" + " " + ("read" + letter || "")
        }, letter);
      }))) : '', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "readsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 342
        },
        className: "jsx-4106850627"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "readsBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 343
        },
        className: "jsx-4106850627" + " " + ((this.state.showReads ? "row justify-content-center showReads" : "row justify-content-center") || "")
      }, this.state.reads.map(function (read, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          id: "read" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          className: "jsx-4106850627" + " " + "read col-md-2"
        }, read.split('').map(function (letter, index2) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
            key: index2,
            id: "read" + index + "char" + index2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 347
            },
            className: "jsx-4106850627" + " " + ("read" + letter || "")
          }, letter);
        }));
      })))), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "cy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 354
        },
        className: "jsx-4106850627" + " " + ((this.state.step > 4 ? 'open' : '') || "")
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "4106850627",
        css: "#animationText.jsx-4106850627{top:200px;left:0px;z-index:1000;position:fixed;border-bottom:2px solid green;}#animationText.animate.jsx-4106850627{-webkit-transition:top .5s linear,left .5s linear,font-size .5s linear;transition:top .5s linear,left .5s linear,font-size .5s linear;}#reset.jsx-4106850627{position:fixed;z-index:1000;left:10px;bottom:10px;}#graphs.jsx-4106850627{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}#sidebar.jsx-4106850627{width:100%;height:calc(100vh - 56px);padding:0 5%;background:#ecf0f1;-webkit-transition:height 1s ease;transition:height 1s ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-x:auto;}#sidebar.open.jsx-4106850627{height:calc(25vh - 56px);}#sequenceContainer.jsx-4106850627{padding-top:25px;text-align:center;}#sequenceContainer.jsx-4106850627 h6.jsx-4106850627,#numbers.jsx-4106850627,#animationText.jsx-4106850627{font-size:25px;font-weight:bold;word-break:break-all;line-height:40px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}#cy.jsx-4106850627{width:100%;height:calc(80vh - 56px);-webkit-transition:height 1s ease;transition:height 1s ease;}.wrapper.jsx-4106850627{height:calc(100vh - 56px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:25px;}.row.jsx-4106850627{max-height:calc(100vh - 56px);padding:25px 10px;text-align:center;font-weight:bold;font-size:20px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}.read.jsx-4106850627{opacity:0;}.showReads.jsx-4106850627 .read.jsx-4106850627{opacity:1;}.readA.jsx-4106850627{color:#27ae60;}.readC.jsx-4106850627{color:#2980b9;}.readG.jsx-4106850627{color:#c0392b;}.readT.jsx-4106850627{color:#8e44ad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Xb0IsQUFJdUIsQUFPdUQsQUFHbEQsQUFNRixBQUlILEFBWWUsQUFHUixBQUlGLEFBUUosQUFLZSxBQU9JLEFBU3BCLEFBR0EsQUFHSSxBQUdBLEFBR0EsQUFHQSxVQWxGTCxBQW9FWCxBQUdBLENBbkQ0QixBQTJCRCxHQTJCM0IsQUFHQSxBQUdBLEFBR0EsQ0F6RWUsQUE2QkksRUFKQyxFQWxDTCxNQStCZixDQW9CZSxFQXpDSCxFQWdETyxFQXpERixBQXNDTSxHQUp2QixDQVk0QixDQTNCYixDQVRELFNBVGtCLENBeURaLEVBL0NwQixBQVNxQixHQW1CRixhQW9CQSxHQXRDUyxDQW1CUCxJQTFCRyxHQVp4QixNQTBEaUIsYUFiakIsRUFjcUIsRUFWSSw2QkE3QlYsS0FqQmYsa0JBVUEsV0EwQndCLHNCQUN4QixNQW9Cd0IsUUFWSCxJQTdCRyxVQXdDeEIsb0VBckNrQixXQTJCSCxLQTFCZixRQTJCQSIsImZpbGUiOiJjb250YWluZXJzL0FwcC5qcyIsInNvdXJjZVJvb3QiOiIvYXV0b19ob21lL2xnZWVydHNlbi9MYXlvdXRPdmVybGF5Q29uc2Vuc3VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGN5dG9zY2FwZSBmcm9tICdjeXRvc2NhcGUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbnRhaW5lcnMvTmF2YmFyJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vY2xhc3Nlcy9IZWxwZXInO1xuXG5jb25zdCByZWFkQ2hhcnMgPSBbXCJBXCIsIFwiQ1wiLCBcIkdcIiwgXCJUXCJdO1xuXG52YXIgY3k7XG52YXIgbnVtYmVycyA9IFtdXG5mb3IgKHZhciBpID0gMDsgaSA8IDUxOyBpKyspIHtcbiAgbnVtYmVycy5wdXNoKGklMTApO1xufVxuXG52YXIgYnVzeSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGVwOiAxLFxuICAgICAgc2VxdWVuY2U6IFwiXCIsXG4gICAgICBsZW5ndGhTZXF1ZW5jZTogNTAsXG4gICAgICBtaW5MZW5ndGhSZWFkOiA1LFxuICAgICAgbWF4TGVuZ3RoUmVhZDogMTAsXG4gICAgICBhbmltYXRpb25UZXh0OiBcIlwiLFxuICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICByZWFkczogW10sXG4gICAgICBidXN5OiBmYWxzZSxcbiAgICAgIHdhaXRpbmdGdW5jdGlvbkxpc3Q6IFtdLFxuICAgICAgc2hvd1JlYWRzOiBmYWxzZVxuICAgIH1cbiAgfVxuXG4gIGNyZWF0ZUdyYXBoKGVsZW1lbnRzLCBjYWxsYmFjaykge1xuICAgIGN5ID0gY3l0b3NjYXBlKHtcbiAgICAgIGNvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N5JyksXG4gICAgICBib3hTZWxlY3Rpb25FbmFibGVkOiBmYWxzZSxcbiAgICAgIGF1dG91bnNlbGVjdGlmeTogdHJ1ZSxcblxuICAgICAgbGF5b3V0OiB7XG4gICAgICAgIG5hbWU6ICdjaXJjbGUnXG4gICAgICB9LFxuXG4gICAgICBzdHlsZTogY3l0b3NjYXBlLnN0eWxlc2hlZXQoKVxuICAgICAgIC5zZWxlY3Rvcignbm9kZScpXG4gICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgJ2hlaWdodCc6IDIwLFxuICAgICAgICAgICAnd2lkdGgnOiAyMCxcbiAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnI2U4ZTQwNicsXG4gICAgICAgICAgICdjb250ZW50JzogJ2RhdGEocmVhZCknLFxuICAgICAgICAgICAnb3BhY2l0eSc6IDEsXG4gICAgICAgICAgICd0cmFuc2l0aW9uLXByb3BlcnR5JzogJ29wYWNpdHknLFxuICAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6ICcwLjVzJ1xuICAgICAgICAgfSlcbiAgICAgICAuc2VsZWN0b3IoJ2VkZ2UnKVxuICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICdsYWJlbCc6IFwiZGF0YShsYWJlbClcIixcbiAgICAgICAgICAgJ2N1cnZlLXN0eWxlJzogJ2JlemllcicsXG4gICAgICAgICAgICd3aWR0aCc6IDUsXG4gICAgICAgICAgICdsaW5lLWNvbG9yJzogJyNmMmYwOGMnLFxuICAgICAgICAgICAnb3BhY2l0eSc6IDAuNyxcbiAgICAgICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6ICd0cmlhbmdsZScsXG4gICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnYmx1ZSdcbiAgICAgICAgIH0pXG4gICAgICAgLnNlbGVjdG9yKCcuaGlkZU5vZGUnKVxuICAgICAgICAuY3NzKHtcbiAgICAgICAgICAnb3BhY2l0eSc6IDAsXG4gICAgICAgIH0pLFxuXG4gICAgICBlbGVtZW50czogZWxlbWVudHNcbiAgICB9KTtcblxuICAgIGNhbGxiYWNrKCk7XG4gIH1cblxuICBnZW5lcmF0ZVNlcXVlbmNlKCkge1xuICAgIGxldCBzZXF1ZW5jZSA9IFwiXCI7XG4gICAgbGV0IHZpZGUgPSBcIlwiO1xuICAgIGxldCByID0gdGhpcy5zdGF0ZS5sZW5ndGhTZXF1ZW5jZTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcjsgaSsrKSB7XG4gICAgICBsZXQgbSA9IEhlbHBlci5yYW5kb20oMCwgcmVhZENoYXJzLmxlbmd0aCk7XG4gICAgICBzZXF1ZW5jZSArPSByZWFkQ2hhcnNbbV07XG4gICAgICB2aWRlICs9IFwiLVwiO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAyLCBzZXF1ZW5jZTogc2VxdWVuY2V9KTtcblxuICAgIC8vIG9kb28uZGVmYXVsdCh7IGVsOicjc2VxdWVuY2VDb250YWluZXInLCBmcm9tOiB2aWRlLCB0bzogc2VxdWVuY2UsIGFuaW1hdGlvbkRlbGF5OiAxMDAwLCBkdXJhdGlvbjogMjAwMCB9KTtcbiAgfVxuXG4gIGNyZWF0ZVJlYWRzKCkge1xuICAgIGxldCByZWFkcyA9IFtdO1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgc2VxdWVuY2UgPSB0aGlzLnN0YXRlLnNlcXVlbmNlO1xuICAgIGxldCBsb29wID0gdHJ1ZTtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgd2hpbGUobG9vcCkge1xuICAgICAgbGV0IHIgPSBIZWxwZXIucmFuZG9tKHRoaXMuc3RhdGUubWluTGVuZ3RoUmVhZCwgdGhpcy5zdGF0ZS5tYXhMZW5ndGhSZWFkKzEpO1xuICAgICAgbGV0IGYgPSBpK3I7XG4gICAgICBpZihpK3IgPj0gc2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgIGYgPSBzZXF1ZW5jZS5sZW5ndGg7XG4gICAgICAgIGxvb3AgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCByZWFkID0gc2VxdWVuY2Uuc3Vic3RyaW5nKGksZik7XG4gICAgICByZWFkcy5wdXNoKHJlYWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVhZHM6IHJlYWRzfSk7XG4gICAgICBpZih0aGlzLnN0YXRlLmJ1c3kgfHwgYnVzeSkge1xuICAgICAgICBsZXQgd2FpdGluZ0Z1bmN0aW9uTGlzdCA9IHRoaXMuc3RhdGUud2FpdGluZ0Z1bmN0aW9uTGlzdDtcbiAgICAgICAgd2FpdGluZ0Z1bmN0aW9uTGlzdC5wdXNoKHtcbiAgICAgICAgICBmdW5jdGlvbjogdGhpcy5zaG93UmVhZCxcbiAgICAgICAgICBkYXRhOiBbdGhpcywgY291bnQsICBpLCByZWFkXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2FpdGluZ0Z1bmN0aW9uTGlzdDogd2FpdGluZ0Z1bmN0aW9uTGlzdH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVzeSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c3k6IHRydWV9KTtcbiAgICAgICAgdGhpcy5zaG93UmVhZChbdGhpcywgY291bnQsICBpLCByZWFkXSk7XG4gICAgICB9XG4gICAgICBsZXQgYiA9IEhlbHBlci5yYW5kb20oMywgNik7XG4gICAgICBpID0gZi1iO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogMywgcmVhZHM6IHJlYWRzfSk7XG4gIH1cblxuICBzaG93UmVhZChkYXRhKSB7XG5cbiAgICBsZXQgc2VsZiA9IGRhdGFbMF07XG4gICAgbGV0IGNvdW50ID0gZGF0YVsxXTtcbiAgICBsZXQgaW5kZXggPSBkYXRhWzJdO1xuICAgIGxldCByZWFkID0gZGF0YVszXTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7YW5pbWF0ZTogZmFsc2V9KTtcblxuICAgICAgbGV0IGFuaW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvblRleHRcIik7XG4gICAgICBsZXQgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZFwiICsgY291bnQpO1xuICAgICAgbGV0IHAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXF1ZW5jZVwiICsgaW5kZXgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IHAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkXCIgKyBjb3VudCArIFwiY2hhcjBcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRpb25UZXh0OiByZWFkfSlcbiAgICAgIGxldCB0b3AxID0gcDEudG9wIC0gNTtcbiAgICAgIGFuaW0uc3R5bGUudG9wID0gdG9wMSArIFwicHhcIjtcbiAgICAgIGFuaW0uc3R5bGUubGVmdCA9IHAxLmxlZnQgKyBcInB4XCI7XG4gICAgICBhbmltLnN0eWxlLmZvbnRTaXplID0gXCIyNXB4XCI7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRlOiB0cnVlfSk7XG5cbiAgICAgICAgbGV0IHRvcDIgPSBwMi50b3AgLSA4O1xuICAgICAgICBhbmltLnN0eWxlLnRvcCA9IHRvcDIgKyBcInB4XCI7XG4gICAgICAgIGFuaW0uc3R5bGUubGVmdCA9IHAyLmxlZnQgKyBcInB4XCI7XG4gICAgICAgIGFuaW0uc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgIH0sIDUwMCk7XG4gICAgICAoZnVuY3Rpb24oc2VsZiwgY291bnQsIGluZGV4LCByZWFkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7YW5pbWF0ZTogZmFsc2V9KTtcbiAgICAgICAgICBzZWxmLmVuZEJ1c3koKTtcbiAgICAgICAgICBpZihzZWxmLnN0YXRlLnN0ZXAgPiAzKSB7XG4gICAgICAgICAgICBsZXQgYW5pbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcbiAgICAgICAgICAgIGFuaW0uc3R5bGUudG9wID0gXCItMTAwcHhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDk1MCk7XG4gICAgICB9KShzZWxmKTtcbiAgICB9LCA2MDApO1xuICAgIC8vIH0sIDAgKyAoMTIwMCAqIGNvdW50KSk7XG4gIH1cblxuICBzaHVmZmxlUmVhZHMoKSB7XG4gICAgdGhpcy5za2lwQW5pbWF0aW9ucygpO1xuICAgIGxldCBhbmltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25UZXh0XCIpO1xuICAgIGFuaW0uc3R5bGUudG9wID0gXCItMTAwcHhcIjtcblxuICAgIGxldCBsb2wgPSB0aGlzLnN0YXRlLnJlYWRzO1xuICAgIC8vIGxldCBudW1zID0gW107XG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IGxvbC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgbnVtcy5wdXNoKGkpO1xuICAgIC8vIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9sLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaW5kZXggPSBIZWxwZXIucmFuZG9tKDAsIGxvbC5sZW5ndGgpO1xuICAgICAgbGV0IHIgPSBsb2xbaV07XG4gICAgICBsb2xbaV0gPSBsb2xbaW5kZXhdO1xuICAgICAgbG9sW2luZGV4XSA9IHI7XG4gICAgICAvLyBsZXQgbiA9IG51bXNbaV07XG4gICAgICAvLyBudW1zW2ldID0gbnVtc1tpbmRleF07XG4gICAgICAvLyBudW1zW2luZGV4XSA9IG47XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGxvbCk7XG4gICAgLy8gY29uc29sZS5sb2cobnVtcyk7XG4gICAgLy8gbGV0IHBvc2l0aW9ucyA9IFtdXG4gICAgLy9cbiAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgbGV0IHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWRcIiArIGkpO1xuICAgIC8vICAgbGV0IHBvcyA9IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gICBwb3NpdGlvbnMucHVzaChwb3MpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBsZXQgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZFwiICsgaSk7XG4gICAgLy8gICByLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIC8vICAgci5zdHlsZS50b3AgPSBwb3NpdGlvbnNbaV0udG9wICsgXCJweFwiO1xuICAgIC8vICAgci5zdHlsZS5sZWZ0ID0gcG9zaXRpb25zW2ldLmxlZnQgKyBcInB4XCI7XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDQsIHJlYWRzOiBsb2x9KTtcbiAgfVxuXG4gIHNob3dHcmFwaCgpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yZWFkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHIgPSB7fTtcbiAgICAgIHIuZ3JvdXAgPSAnbm9kZXMnO1xuICAgICAgci5kYXRhID0ge1xuICAgICAgICBpZDogJ3InICsgaSxcbiAgICAgICAgcmVhZDogdGhpcy5zdGF0ZS5yZWFkc1tpXSxcbiAgICAgICAgbGFiZWw6ICc8aDE+c2ZqZHFzcWtsZGo8aDE+J1xuICAgICAgfTtcbiAgICAgIHIuY2xhc3NlcyA9ICdoaWRlTm9kZSc7XG4gICAgICBlbGVtZW50cy5wdXNoKHIpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiA1fSk7XG4gICAgdGhpcy5jcmVhdGVHcmFwaChlbGVtZW50cywgdGhpcy5zaG93Tm9kZXMpO1xuICB9XG5cbiAgc2hvd05vZGVzKCkge1xuICAgIGxldCBub2RlcyA9IGN5Lm5vZGVzKCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW5kKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG5vZGVzW2ldLnJlbW92ZUNsYXNzKCdoaWRlTm9kZScpO1xuICAgICAgICB9LCAwICsgKDIwMCAqIGluZCkpO1xuICAgICAgfSkoaSk7XG4gICAgfVxuICB9XG5cbiAgc2tpcEFuaW1hdGlvbnMoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7d2FpdGluZ0Z1bmN0aW9uTGlzdDogW119KTtcbiAgICBpZih0aGlzLnN0YXRlLnN0ZXAgPT0gMykge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7c2hvd1JlYWRzOiB0cnVlfSk7XG4gICAgICBsZXQgYW5pbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcbiAgICAgIGFuaW0uc3R5bGUudG9wID0gXCItMTAwcHhcIjtcbiAgICB9XG4gIH1cblxuICBjYWxsRnVuY3Rpb24oY2FsbGJhY2ssIGRhdGEpIHtcbiAgICBjYWxsYmFjayhkYXRhKTtcbiAgfVxuXG4gIGVuZEJ1c3koKSB7XG4gICAgYnVzeSA9IGZhbHNlO1xuICAgIHRoaXMuc2V0U3RhdGUoe2J1c3k6IGZhbHNlfSk7XG4gICAgaWYodGhpcy5zdGF0ZS53YWl0aW5nRnVuY3Rpb25MaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBmID0gdGhpcy5zdGF0ZS53YWl0aW5nRnVuY3Rpb25MaXN0LnNoaWZ0KCk7XG4gICAgICB0aGlzLmNhbGxGdW5jdGlvbihmLmZ1bmN0aW9uLCBmLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCkge1xuICAgIC8vIGN5LmFkZChbXG4gICAgLy8gICB7ZGF0YTogeyBpZDogJ2FiJywgd2VpZ2h0OiAzLCBzb3VyY2U6ICdyMCcsIHRhcmdldDogJ3I4JywgbGFiZWw6IFwibGFiZWxcIiB9IH0sXG4gICAgLy8gICB7ZGF0YTogeyBpZDogJ2FjJywgd2VpZ2h0OiAzLCBzb3VyY2U6ICdyMScsIHRhcmdldDogJ3I5JywgbGFiZWw6IFwibGFiZWxcIiB9IH1cbiAgICAvLyBdKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0ZXA6IDEsXG4gICAgICBzZXF1ZW5jZTogXCJcIixcbiAgICAgIGxlbmd0aFNlcXVlbmNlOiA1MCxcbiAgICAgIG1pbkxlbmd0aFJlYWQ6IDUsXG4gICAgICBtYXhMZW5ndGhSZWFkOiAxMCxcbiAgICAgIGFuaW1hdGlvblRleHQ6IFwiXCIsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIHJlYWRzOiBbXSxcbiAgICAgIGJ1c3k6IGZhbHNlLFxuICAgICAgd2FpdGluZ0Z1bmN0aW9uTGlzdDogW11cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImFwcFwiPlxuXG4gICAgICAgIDxOYXZiYXJcbiAgICAgICAgICBzdGVwPXt0aGlzLnN0YXRlLnN0ZXB9XG4gICAgICAgICAgbGVuZ3RoU2VxdWVuY2U9e3RoaXMuc3RhdGUubGVuZ3RoU2VxdWVuY2V9XG4gICAgICAgICAgbWluTGVuZ3RoUmVhZD17dGhpcy5zdGF0ZS5taW5MZW5ndGhSZWFkfVxuICAgICAgICAgIG1heExlbmd0aFJlYWQ9e3RoaXMuc3RhdGUubWF4TGVuZ3RoUmVhZH1cblxuICAgICAgICAgIGNoYW5nZUxlbmd0aFNlcXVlbmNlPXtlID0+IHRoaXMuc2V0U3RhdGUoe2xlbmd0aFNlcXVlbmNlOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgIGNoYW5nZU1pbkxlbmd0aD17ZSA9PiB0aGlzLnNldFN0YXRlKHttaW5MZW5ndGhSZWFkOiBlLnRhcmdldC52YWx1ZX0pfVxuICAgICAgICAgIGNoYW5nZU1heExlbmd0aD17ZSA9PiB0aGlzLnNldFN0YXRlKHttYXhMZW5ndGhSZWFkOiBlLnRhcmdldC52YWx1ZX0pfVxuXG4gICAgICAgICAgZ2VuZXJhdGVTZXF1ZW5jZT17KCkgPT4gdGhpcy5nZW5lcmF0ZVNlcXVlbmNlKCl9XG4gICAgICAgICAgY3JlYXRlUmVhZHM9eygpID0+IHRoaXMuY3JlYXRlUmVhZHMoKX1cbiAgICAgICAgICBzaHVmZmxlUmVhZHM9eygpID0+IHRoaXMuc2h1ZmZsZVJlYWRzKCl9XG4gICAgICAgICAgc2hvd0dyYXBoPXsoKSA9PiB0aGlzLnNob3dHcmFwaCgpfVxuICAgICAgICAgIHNob3dTaWRlYmFyPXsoKSA9PiB7dGhpcy5zZXRTdGF0ZSh7c3RlcDogNH0pOyBzZXRUaW1lb3V0KCgpID0+IHtjeS5yZXNpemUoKTsgY3kuY2VudGVyKCk7fSwgMTEwMCk7IH19XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGg2IGlkPVwiYW5pbWF0aW9uVGV4dFwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hbmltYXRlID8gJ2FuaW1hdGUnIDogJyd9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmFuaW1hdGlvblRleHQuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gaWQ9e1wiYW5pbWF0aW9uXCIgKyBpbmRleH0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvaDY+XG5cbiAgICAgICAgPGRpdiBpZD1cInJlc2V0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVzZXQoKX0+UkVTRVQ8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS13YXJuaW5nXCIgb25DbGljaz17KCkgPT4gdGhpcy5za2lwQW5pbWF0aW9ucygpfT5TS0lQIEFOSU1BVElPTlM8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLnN0ZXAgPT0gMSB8fCB0aGlzLnN0YXRlLnN0ZXAgPT0gMiA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRzLm1hcCgocmVhZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJlYWQgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtyZWFkLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH0gKi99XG4gICAgICAgIDxkaXYgaWQ9XCJncmFwaHNcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGVwID4gNCA/ICdvcGVuJyA6ICcnfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN0ZXAgPCA1ID9cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlcXVlbmNlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VxdWVuY2Uuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBpZD17XCJzZXF1ZW5jZVwiICsgaW5kZXh9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICB7LyogPGg2IGlkPVwibnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAge251bWJlcnMubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9oNj4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8ZGl2IGlkPVwicmVhZHNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInJlYWRzQm94XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dSZWFkcyA/IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgc2hvd1JlYWRzXCIgOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRzLm1hcCgocmVhZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gaWQ9e1wicmVhZFwiICsgaW5kZXh9IGNsYXNzTmFtZT1cInJlYWQgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAge3JlYWQuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpbmRleDIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4Mn0gaWQ9e1wicmVhZFwiICsgaW5kZXggKyBcImNoYXJcIiArIGluZGV4Mn0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImN5XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnN0ZXAgPiA0ID8gJ29wZW4nIDogJyd9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2FuaW1hdGlvblRleHQge1xuICAgICAgICAgICAgLy8gb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjYW5pbWF0aW9uVGV4dC5hbmltYXRlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAuNXMgbGluZWFyLCBsZWZ0IC41cyBsaW5lYXIsIGZvbnQtc2l6ZSAuNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcmVzZXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNncmFwaHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlYmFyIHtcbiAgICAgICAgICAgIHdpZHRoIDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlYmFyLm9wZW4ge1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDI1dmggLSA1NnB4KTs7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzZXF1ZW5jZUNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NlcXVlbmNlQ29udGFpbmVyIGg2LCAjbnVtYmVycywgI2FuaW1hdGlvblRleHQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY3kge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoODB2aCAtIDU2cHgpO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDI1cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yb3cge1xuICAgICAgICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgICAgICAgICAgcGFkZGluZyAyNXB4IDEwcHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiA0cHg7XG4gICAgICAgICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuc2hvd1JlYWRzIC5yZWFkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkQSB7XG4gICAgICAgICAgICBjb2xvcjogIzI3YWU2MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWRDIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjk4MGI5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZEcge1xuICAgICAgICAgICAgY29sb3I6ICNjMDM5MmI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkVCB7XG4gICAgICAgICAgICBjb2xvcjogIzhlNDRhZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=containers/App.js */"
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
      }, "Shuffle reads")) : '', this.props.step == 4 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.showGraph();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Create graph")) : '')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "411662241",
        css: ".form-control.jsx-411662241{width:100px;margin-left:10px;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDb0IsQUFHeUIsWUFDSyxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiY29udGFpbmVycy9OYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm5hdmJhclwiPlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5PdmVybGFwIExheW91dCBDb25zZW5zdXM8L2E+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDEgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5MZW5ndGggT2YgU2VxdWVuY2U8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMTBcIiB2YWx1ZT17dGhpcy5wcm9wcy5sZW5ndGhTZXF1ZW5jZX0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5jaGFuZ2VMZW5ndGhTZXF1ZW5jZShlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdlbmVyYXRlU2VxdWVuY2UoKX0+R2VuZXJhdGUgc2VxdWVuY2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gMiA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWluIExlbmd0aCBSZWFkczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwXCIgdmFsdWU9e3RoaXMucHJvcHMubWluTGVuZ3RoUmVhZH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5jaGFuZ2VNaW5MZW5ndGgoZSl9Lz5cbiAgICAgICAgICAgICAgICA8bGFiZWw+TWF4IExlbmd0aCBSZWFkczo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiNVwiIG1heD1cIjEwXCIgdmFsdWU9e3RoaXMucHJvcHMubWF4TGVuZ3RoUmVhZH0gb25DaGFuZ2U9e2UgPT4gdGhpcy5wcm9wcy5jaGFuZ2VNYXhMZW5ndGgoZSl9Lz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbXktMiBteS1zbS0wXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5jcmVhdGVSZWFkcygpfT5DcmVhdGUgcmVhZHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIG15LTIgbXktc20tMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvd0dyYXBoKCl9PlNob3cgZ3JhcGg8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiAnJyB9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDMgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNodWZmbGVSZWFkcygpfT5TaHVmZmxlIHJlYWRzPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiAnJyB9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDQgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNob3dHcmFwaCgpfT5DcmVhdGUgZ3JhcGg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5mb3JtLWNvbnRyb2wge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=containers/Navbar.js */"
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
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("script", {
        src: "./static/AnimationText.js",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-3624454533"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_App__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3636536621",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Cb0IiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC4yL2Nzcy9hbGwuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZS5jc3NcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi9zdGF0aWMvQW5pbWF0aW9uVGV4dC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEFwcC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3395623713",
        css: "html,body{height:100%;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCMkIsQUFHeUIsWUFDSSxnQkFDbEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xuXG5pbXBvcnQgQXBwIGZyb20gJy4uL2NvbnRhaW5lcnMvQXBwJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJjb250YWluZXJcIj5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICAgIDxsaW5rIGhyZWY9XCJodHRwczovL3VzZS5mb250YXdlc29tZS5jb20vcmVsZWFzZXMvdjUuMC4yL2Nzcy9hbGwuY3NzXCIgcmVsPVwic3R5bGVzaGVldFwiLz5cbiAgICAgICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMC4wLWJldGEuMy9jc3MvYm9vdHN0cmFwLm1pbi5jc3NcIi8+XG4gICAgICAgICAgPGxpbmsgcmVsPVwic3R5bGVzaGVldFwiIHR5cGU9XCJ0ZXh0L2Nzc1wiIGhyZWY9XCIvc3RhdGljL2Nzcy9zdHlsZS5jc3NcIiAvPlxuICAgICAgICAgIDxzY3JpcHQgc3JjPVwiLi9zdGF0aWMvQW5pbWF0aW9uVGV4dC5qc1wiPjwvc2NyaXB0PlxuICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgPEFwcC8+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js */"
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