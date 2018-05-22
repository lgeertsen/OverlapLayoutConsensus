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
      nbReads: 20,
      minLengthRead: 5,
      maxLengthRead: 10,
      reads: []
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
    key: "generateReads",
    value: function generateReads() {
      var reads = [];

      for (var i = 0; i < this.state.nbReads; i++) {
        (function (self, ind) {
          setTimeout(function () {
            var n = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(self.state.minLengthRead, self.state.maxLengthRead);
            var r = "";

            for (var j = 0; j < n; j++) {
              var m = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(0, readChars.length);
              r += readChars[m];
            }

            reads.push(r);
            self.setState({
              reads: reads
            });
          }, 0 + 30 * ind);
        })(this, i);
      }

      this.setState({
        step: 2,
        reads: reads
      });
    }
  }, {
    key: "showGraph",
    value: function showGraph() {
      var elements = [];

      for (var i = 0; i < this.state.reads.length; i++) {
        var r = {};
        r.group = 'nodes';
        r.data = {
          id: 'r' + i,
          read: this.state.reads[i],
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

      var _loop = function _loop(i) {
        (function (ind) {
          setTimeout(function () {
            nodes[i].removeClass('hideNode');
          }, 0 + 200 * ind);
        })(i);
      };

      for (var i = 0; i < nodes.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "reset",
    value: function reset() {
      cy.add([{
        data: {
          id: 'ab',
          weight: 3,
          source: 'r0',
          target: 'r8',
          label: "label"
        }
      }, {
        data: {
          id: 'ac',
          weight: 3,
          source: 'r1',
          target: 'r9',
          label: "label"
        }
      }]); // this.setState({
      //   step: 1,
      //   nbReads: 20,
      //   minLengthRead: 5,
      //   maxLengthRead: 10,
      //   reads: []
      // });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        className: "jsx-1646255465"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Navbar__["a" /* default */], {
        step: this.state.step,
        nbReads: this.state.nbReads,
        minLengthRead: this.state.minLengthRead,
        maxLengthRead: this.state.maxLengthRead,
        changeNbReads: function changeNbReads(e) {
          return _this2.setState({
            nbReads: e.target.value
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
        generateReads: function generateReads() {
          return _this2.generateReads();
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
          lineNumber: 133
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        id: "reset",
        onClick: function onClick() {
          return _this2.reset();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        className: "jsx-1646255465" + " " + "btn btn-outline-dark"
      }, "RESET"), this.state.step == 1 || this.state.step == 2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        className: "jsx-1646255465" + " " + "wrapper"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        className: "jsx-1646255465" + " " + "row justify-content-center"
      }, this.state.reads.map(function (read, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 152
          },
          className: "jsx-1646255465" + " " + "read col-md-2"
        }, read.split('').map(function (letter, index) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
            key: index,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 154
            },
            className: "jsx-1646255465" + " " + ("read" + letter || "")
          }, letter);
        }));
      }))) : '', __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "graphs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        className: "jsx-1646255465"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        className: "jsx-1646255465" + " " + ((this.state.step == 4 ? 'open' : '') || "")
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "cy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        className: "jsx-1646255465" + " " + ((this.state.step == 4 ? 'open' : '') || "")
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1646255465",
        css: "#reset.jsx-1646255465{position:fixed;z-index:1000;left:10px;bottom:10px;}#graphs.jsx-1646255465{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}#sidebar.jsx-1646255465{width:0%;height:calc(100vh - 56px);background:#ecf0f1;-webkit-transition:width 1s ease;transition:width 1s ease;}#sidebar.open.jsx-1646255465{width:30%;}#cy.jsx-1646255465{width:100%;height:calc(100vh - 56px);-webkit-transition:width 1s ease;transition:width 1s ease;}#cy.open.jsx-1646255465{width:70%;}.wrapper.jsx-1646255465{height:calc(100vh - 56px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:25px;}.row.jsx-1646255465{width:100vw;max-height:calc(100vh - 56px);padding:25px 10px;text-align:center;font-weight:bold;}.readA.jsx-1646255465{color:#27ae60;}.readC.jsx-1646255465{color:#2980b9;}.readG.jsx-1646255465{color:#c0392b;}.readT.jsx-1646255465{color:#8e44ad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNLb0IsQUFHNEIsQUFNRixBQUdMLEFBTUUsQUFHQyxBQUtELEFBR2dCLEFBT2QsQUFPRSxBQUdBLEFBR0EsQUFHQSxTQXZDWSxDQU01QixBQVFBLENBTDRCLENBZUksRUFPaEMsQUFHQSxBQUdBLEFBR0EsQ0FqRGUsV0EwQkEsRUF6QkgsT0FTUyxFQVNNLENBakJiLElBZ0NLLFFBL0JuQixJQVEyQixNQXdCUCxjQTdCcEIsSUE4Qm1CLGlCQWhCbkIsQUFpQkEsS0FWeUIsWUFmekIsdUZBZ0JxQiw2RkFDTixhQUNmIiwiZmlsZSI6ImNvbnRhaW5lcnMvQXBwLmpzIiwic291cmNlUm9vdCI6Ii9hdXRvX2hvbWUvbGdlZXJ0c2VuL0xheW91dE92ZXJsYXlDb25zZW5zdXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY3l0b3NjYXBlIGZyb20gJ2N5dG9zY2FwZSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29udGFpbmVycy9OYXZiYXInO1xuaW1wb3J0IEhlbHBlciBmcm9tICcuLi9jbGFzc2VzL0hlbHBlcic7XG5cbmNvbnN0IHJlYWRDaGFycyA9IFtcIkFcIiwgXCJDXCIsIFwiR1wiLCBcIlRcIl07XG5cbnZhciBjeTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc3RlcDogMSxcbiAgICAgIG5iUmVhZHM6IDIwLFxuICAgICAgbWluTGVuZ3RoUmVhZDogNSxcbiAgICAgIG1heExlbmd0aFJlYWQ6IDEwLFxuICAgICAgcmVhZHM6IFtdXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlR3JhcGgoZWxlbWVudHMsIGNhbGxiYWNrKSB7XG4gICAgY3kgPSBjeXRvc2NhcGUoe1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3knKSxcbiAgICAgIGJveFNlbGVjdGlvbkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgYXV0b3Vuc2VsZWN0aWZ5OiB0cnVlLFxuXG4gICAgICBsYXlvdXQ6IHtcbiAgICAgICAgbmFtZTogJ2NpcmNsZSdcbiAgICAgIH0sXG5cbiAgICAgIHN0eWxlOiBjeXRvc2NhcGUuc3R5bGVzaGVldCgpXG4gICAgICAgLnNlbGVjdG9yKCdub2RlJylcbiAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAnaGVpZ2h0JzogMjAsXG4gICAgICAgICAgICd3aWR0aCc6IDIwLFxuICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjZThlNDA2JyxcbiAgICAgICAgICAgJ2NvbnRlbnQnOiAnZGF0YShyZWFkKScsXG4gICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAgJ3RyYW5zaXRpb24tcHJvcGVydHknOiAnb3BhY2l0eScsXG4gICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzAuNXMnXG4gICAgICAgICB9KVxuICAgICAgIC5zZWxlY3RvcignZWRnZScpXG4gICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgJ2xhYmVsJzogXCJkYXRhKGxhYmVsKVwiLFxuICAgICAgICAgICAnY3VydmUtc3R5bGUnOiAnYmV6aWVyJyxcbiAgICAgICAgICAgJ3dpZHRoJzogNSxcbiAgICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2YyZjA4YycsXG4gICAgICAgICAgICdvcGFjaXR5JzogMC43LFxuICAgICAgICAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogJ3RyaWFuZ2xlJyxcbiAgICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICdibHVlJ1xuICAgICAgICAgfSlcbiAgICAgICAuc2VsZWN0b3IoJy5oaWRlTm9kZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgfSksXG5cbiAgICAgIGVsZW1lbnRzOiBlbGVtZW50c1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxuXG4gIGdlbmVyYXRlUmVhZHMoKSB7XG4gICAgbGV0IHJlYWRzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUubmJSZWFkczsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oc2VsZiwgaW5kKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxldCBuID0gSGVscGVyLnJhbmRvbShzZWxmLnN0YXRlLm1pbkxlbmd0aFJlYWQsIHNlbGYuc3RhdGUubWF4TGVuZ3RoUmVhZCk7XG4gICAgICAgICAgbGV0IHIgPSBcIlwiO1xuICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBtID0gSGVscGVyLnJhbmRvbSgwLCByZWFkQ2hhcnMubGVuZ3RoKTtcbiAgICAgICAgICAgIHIgKz0gcmVhZENoYXJzW21dO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZWFkcy5wdXNoKHIpO1xuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoe3JlYWRzOiByZWFkc30pO1xuICAgICAgICB9LCAwICsgKDMwICogaW5kKSk7XG4gICAgICB9KSh0aGlzLCBpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAyLCByZWFkczogcmVhZHN9KTtcbiAgfVxuXG4gIHNob3dHcmFwaCgpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yZWFkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHIgPSB7fTtcbiAgICAgIHIuZ3JvdXAgPSAnbm9kZXMnO1xuICAgICAgci5kYXRhID0ge1xuICAgICAgICBpZDogJ3InICsgaSxcbiAgICAgICAgcmVhZDogdGhpcy5zdGF0ZS5yZWFkc1tpXSxcbiAgICAgICAgbGFiZWw6ICc8aDE+c2ZqZHFzcWtsZGo8aDE+J1xuICAgICAgfTtcbiAgICAgIHIuY2xhc3NlcyA9ICdoaWRlTm9kZSc7XG4gICAgICBlbGVtZW50cy5wdXNoKHIpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAzfSk7XG4gICAgdGhpcy5jcmVhdGVHcmFwaChlbGVtZW50cywgdGhpcy5zaG93Tm9kZXMpO1xuICB9XG5cbiAgc2hvd05vZGVzKCkge1xuICAgIGxldCBub2RlcyA9IGN5Lm5vZGVzKCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW5kKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIG5vZGVzW2ldLnJlbW92ZUNsYXNzKCdoaWRlTm9kZScpO1xuICAgICAgICB9LCAwICsgKDIwMCAqIGluZCkpO1xuICAgICAgfSkoaSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgY3kuYWRkKFtcbiAgICAgIHtkYXRhOiB7IGlkOiAnYWInLCB3ZWlnaHQ6IDMsIHNvdXJjZTogJ3IwJywgdGFyZ2V0OiAncjgnLCBsYWJlbDogXCJsYWJlbFwiIH0gfSxcbiAgICAgIHtkYXRhOiB7IGlkOiAnYWMnLCB3ZWlnaHQ6IDMsIHNvdXJjZTogJ3IxJywgdGFyZ2V0OiAncjknLCBsYWJlbDogXCJsYWJlbFwiIH0gfVxuICAgIF0pO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgc3RlcDogMSxcbiAgICAvLyAgIG5iUmVhZHM6IDIwLFxuICAgIC8vICAgbWluTGVuZ3RoUmVhZDogNSxcbiAgICAvLyAgIG1heExlbmd0aFJlYWQ6IDEwLFxuICAgIC8vICAgcmVhZHM6IFtdXG4gICAgLy8gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJhcHBcIj5cblxuICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgc3RlcD17dGhpcy5zdGF0ZS5zdGVwfVxuICAgICAgICAgIG5iUmVhZHM9e3RoaXMuc3RhdGUubmJSZWFkc31cbiAgICAgICAgICBtaW5MZW5ndGhSZWFkPXt0aGlzLnN0YXRlLm1pbkxlbmd0aFJlYWR9XG4gICAgICAgICAgbWF4TGVuZ3RoUmVhZD17dGhpcy5zdGF0ZS5tYXhMZW5ndGhSZWFkfVxuICAgICAgICAgIGNoYW5nZU5iUmVhZHM9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7bmJSZWFkczogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjaGFuZ2VNaW5MZW5ndGg9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7bWluTGVuZ3RoUmVhZDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjaGFuZ2VNYXhMZW5ndGg9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7bWF4TGVuZ3RoUmVhZDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBnZW5lcmF0ZVJlYWRzPXsoKSA9PiB0aGlzLmdlbmVyYXRlUmVhZHMoKX1cbiAgICAgICAgICBzaG93R3JhcGg9eygpID0+IHRoaXMuc2hvd0dyYXBoKCl9XG4gICAgICAgICAgc2hvd1NpZGViYXI9eygpID0+IHt0aGlzLnNldFN0YXRlKHtzdGVwOiA0fSk7IHNldFRpbWVvdXQoKCkgPT4ge2N5LnJlc2l6ZSgpOyBjeS5jZW50ZXIoKTt9LCAxMTAwKTsgfX1cbiAgICAgICAgLz5cblxuICAgICAgICA8YnV0dG9uIGlkPVwicmVzZXRcIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVzZXQoKX0+UkVTRVQ8L2J1dHRvbj5cblxuICAgICAgICB7dGhpcy5zdGF0ZS5zdGVwID09IDEgfHwgdGhpcy5zdGF0ZS5zdGVwID09IDIgP1xuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkcy5tYXAoKHJlYWQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9XCJyZWFkIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICB7cmVhZC5zcGxpdCgnJykubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgOiAnJ1xuICAgICAgICB9XG4gICAgICAgIDxkaXYgaWQ9XCJncmFwaHNcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGVwID09IDQgPyAnb3BlbicgOiAnJ30+PC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImN5XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnN0ZXAgPT0gNCA/ICdvcGVuJyA6ICcnfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNyZXNldCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgbGVmdDogMTBweDtcbiAgICAgICAgICAgIGJvdHRvbTogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2dyYXBocyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZWJhciB7XG4gICAgICAgICAgICB3aWR0aCAwJTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU2cHgpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZjBmMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDFzIGVhc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlYmFyLm9wZW4ge1xuICAgICAgICAgICAgd2lkdGg6IDMwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2N5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY3kub3BlbiB7XG4gICAgICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIHBhZGRpbmcgMjVweCAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkQSB7XG4gICAgICAgICAgICBjb2xvcjogIzI3YWU2MDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWRDIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjk4MGI5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZEcge1xuICAgICAgICAgICAgY29sb3I6ICNjMDM5MmI7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkVCB7XG4gICAgICAgICAgICBjb2xvcjogIzhlNDRhZDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=containers/App.js */"
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
      }, "Number of Reads"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        min: "0",
        value: this.props.nbReads,
        onChange: function onChange(e) {
          return _this.props.changeNbReads(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        className: "jsx-411662241" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        className: "jsx-411662241"
      }, "Min Length:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        min: "5",
        max: "10",
        value: this.props.minLengthRead,
        onChange: function onChange(e) {
          return _this.props.changeMinLength(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-411662241" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-411662241"
      }, "Max Length:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        min: "5",
        max: "10",
        value: this.props.maxLengthRead,
        onChange: function onChange(e) {
          return _this.props.changeMaxLength(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-411662241" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.generateReads();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Generate reads")) : '', this.props.step == 2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.showGraph();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Show graph")) : '', this.props.step == 3 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this.props.showSidebar();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Next")) : '')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "411662241",
        css: ".form-control.jsx-411662241{width:100px;margin-left:10px;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXdDb0IsQUFHeUIsWUFDSyxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiY29udGFpbmVycy9OYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cIm5hdmJhclwiPlxuXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWxpZ2h0IGJnLWxpZ2h0XCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgaHJlZj1cIiNcIj5PdmVybGFwIExheW91dCBDb25zZW5zdXM8L2E+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiIHR5cGU9XCJidXR0b25cIiBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCIgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCIgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDEgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5OdW1iZXIgb2YgUmVhZHM8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiB0eXBlPVwibnVtYmVyXCIgbWluPVwiMFwiIHZhbHVlPXt0aGlzLnByb3BzLm5iUmVhZHN9IG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuY2hhbmdlTmJSZWFkcyhlKX0vPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5NaW4gTGVuZ3RoOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCI1XCIgbWF4PVwiMTBcIiB2YWx1ZT17dGhpcy5wcm9wcy5taW5MZW5ndGhSZWFkfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLmNoYW5nZU1pbkxlbmd0aChlKX0vPlxuICAgICAgICAgICAgICAgIDxsYWJlbD5NYXggTGVuZ3RoOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCI1XCIgbWF4PVwiMTBcIiB2YWx1ZT17dGhpcy5wcm9wcy5tYXhMZW5ndGhSZWFkfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLmNoYW5nZU1heExlbmd0aChlKX0vPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhbmdlciBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdlbmVyYXRlUmVhZHMoKX0+R2VuZXJhdGUgcmVhZHM8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gMiA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIG15LTIgbXktc20tMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvd0dyYXBoKCl9PlNob3cgZ3JhcGg8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gMyA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFuZ2VyIG15LTIgbXktc20tMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuc2hvd1NpZGViYXIoKX0+TmV4dDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogJycgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=containers/Navbar.js */"
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