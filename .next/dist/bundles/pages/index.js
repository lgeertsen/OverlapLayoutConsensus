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

/***/ "./classes/Neighbor.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassName; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ClassName =
/*#__PURE__*/
function () {
  function ClassName() {
    _classCallCheck(this, ClassName);
  }

  _createClass(ClassName, null, [{
    key: "n_nearest_neighbor",
    value: function n_nearest_neighbor(n, voisins, scores) {
      var total_score = 0;
      var visited = [];

      for (var i = 0; i < voisins.length; i++) {
        visited.push(false);
      } //n est un sommet de voisins choisi arbitrairement.


      var path = [];
      path[0] = n;
      visited[n] = true;

      for (var _i = 1; _i < voisins.length; _i++) {
        var max_score = -1;
        var best_vois = 0;

        for (var j = 0; j < voisins[n].length; j++) {
          var vois = voisins[n][j];
          var score = scores[n][vois];

          if (!visited[vois] && score > max_score) {
            max_score = score;
            best_vois = vois;
          }
        } //pas de voisins donc chemin impossible


        if (max_score == -1) return {
          score: -1,
          path: path
        };
        total_score += max_score;
        n = best_vois;
        path[_i] = n;
        visited[n] = true;
      }

      return {
        score: total_score,
        path: path
      };
    }
  }, {
    key: "nearest_neighbor",
    value: function nearest_neighbor(voisins, scores, callback) {
      var allPaths = [];

      for (var i = 0; i < voisins.length; i++) {
        allPaths[i] = this.n_nearest_neighbor(i, voisins, scores);
      }

      var max = 0;

      for (var _i2 = 1; _i2 < allPaths.length; _i2++) {
        if (allPaths[_i2].score > allPaths[max].score) {
          max = _i2;
        }
      }

      console.log(allPaths);
      console.log(allPaths[max]);
      callback(allPaths[max].path);
    }
  }]);

  return ClassName;
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_Neighbor__ = __webpack_require__("./classes/Neighbor.js");
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
      rebuildSequence: "",
      lengthSequence: 50,
      minLengthRead: 5,
      maxLengthRead: 10,
      animationText: "",
      animate: false,
      reads: [],
      voisins: [],
      scores: [],
      path: [],
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
          'background-color': '#f1c40f',
          'content': 'data(read)',
          'opacity': 1,
          'transition-property': 'opacity',
          'transition-duration': '0.3s'
        }).selector('edge').css({
          'label': "data(label)",
          'curve-style': 'bezier',
          'width': 1,
          'line-color': '#95a5a6',
          'opacity': 1,
          'target-arrow-shape': 'triangle',
          'target-arrow-color': '#95a5a6',
          'transition-property': 'opacity',
          'transition-duration': '0.3s'
        }).selector('.hideNode').css({
          'opacity': 0
        }).selector('.path').css({
          'width': 3,
          'line-color': '#e67e22',
          'target-arrow-color': '#d35400',
          'transition-property': 'width, line-color, target-arrow-color',
          'transition-duration': '0.5s'
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
      }); // this.setState({step: 2, sequence: "AATGCCTTACACTGAAGGTTTA"});
      // odoo.default({ el:'#sequenceContainer', from: vide, to: sequence, animationDelay: 1000, duration: 2000 });
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
        var min = this.state.minLengthRead;
        var max = this.state.maxLengthRead;
        var r = __WEBPACK_IMPORTED_MODULE_4__classes_Helper__["a" /* default */].random(min, max + 1);
        console.log(r);
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
      } // reads = [
      //   "GAAGGTTTA",
      // 	"GCCTTACAC",
      // 	"ACTGAAGG",
      // 	"AATGCC",
      // 	"ACACTG"
      // ];


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
    key: "overlap",
    value: function overlap(s1, s2) {
      var max = 0;

      for (var _i4 = 1; _i4 <= Math.min(s1.length, s2.length); _i4++) {
        if (s1.substr(s1.length - _i4, s1.length - 1) == s2.substr(0, _i4)) {
          if (max < _i4) {
            //update max and str
            max = _i4; //result = s1 + s2.substr(i);
          }
        }
      } //return str;


      return max;
    }
  }, {
    key: "drawEdges",
    value: function drawEdges() {
      var voisins = this.state.voisins;
      var scores = this.state.scores;
      var reads = this.state.reads;

      for (var _i5 = 0; _i5 < reads.length; _i5++) {
        voisins[_i5] = [];
        scores[_i5] = [];

        for (var j = 0; j < reads.length; j++) {
          var score = 0;

          if (_i5 != j) {
            score = this.overlap(reads[_i5], reads[j]); // if(score == (int)reads[i].size()) reads[j].size())
            //on ne compte pas les chevauchements avec un score nulle ou les chevauchements inclus

            if (score > 0) //&& score != (int)reads[j].size())// && score < (int)min(reads[i].size(), reads[j].size()))
              voisins[_i5].push(j);
          }

          scores[_i5].push(score);
        }
      }

      this.setState({
        voisins: voisins,
        scores: scores
      });
      var edges = [];

      for (var _i6 = 0; _i6 < voisins.length; _i6++) {
        for (var _j = 0; _j < voisins[_i6].length; _j++) {
          edges.push({
            data: {
              id: 'e' + _i6 + 't' + voisins[_i6][_j],
              source: 'r' + _i6,
              target: 'r' + voisins[_i6][_j] // label: "label"

            },
            classes: 'hideNode'
          });
        }
      }

      cy.add(edges);
      this.showEdges();
      this.setState({
        step: 6
      });
    }
  }, {
    key: "showNodes",
    value: function showNodes() {
      var nodes = cy.nodes();

      for (var _i7 = 0; _i7 < nodes.length; _i7++) {
        (function (ind) {
          setTimeout(function () {
            nodes[ind].removeClass('hideNode');
          }, 0 + 200 * ind);
        })(_i7);
      }
    }
  }, {
    key: "showEdges",
    value: function showEdges() {
      var edges = cy.edges();

      for (var _i8 = 0; _i8 < edges.length; _i8++) {
        (function (ind) {
          setTimeout(function () {
            edges[ind].removeClass('hideNode');
          }, 0 + 50 * ind);
        })(_i8);
      }
    }
  }, {
    key: "nearest_neighbor",
    value: function nearest_neighbor() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_5__classes_Neighbor__["a" /* default */].nearest_neighbor(this.state.voisins, this.state.scores, function (bestPath) {
        _this2.setState({
          step: 7,
          path: bestPath
        });

        _this2.highlightPath(bestPath);
      });
    }
  }, {
    key: "highlightPath",
    value: function highlightPath(path) {
      var edges = cy.edges(); // let path = this.state.path;

      for (var _i9 = 0; _i9 < path.length - 1; _i9++) {
        (function (ind) {
          setTimeout(function () {
            edges.getElementById('e' + path[ind] + 't' + path[ind + 1]).addClass('path');
          }, 0 + 750 * ind);
        })(_i9);
      }
    }
  }, {
    key: "rebuildSequence",
    value: function rebuildSequence() {
      var seq = "";
      var path = this.state.path;

      for (var _i10 = 0; _i10 < path.length; _i10++) {
        (function (self, ind) {
          setTimeout(function () {
            var score = ind == path.length - 1 ? 0 : self.state.scores[path[ind]][path[ind + 1]]; // if(ind == 0) {
            //   seq += self.state.reads[path[ind]];
            // }

            seq += self.state.reads[path[ind]].substr(0, self.state.reads[path[ind]].length - score);
            self.setState({
              rebuildSequence: seq
            });
          }, 0 + 750 * ind);
        })(this, _i10);
      }

      this.setState({
        step: 8,
        rebuildSequence: seq
      });
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
        rebuildSequence: "",
        lengthSequence: 50,
        minLengthRead: 6,
        maxLengthRead: 10,
        animationText: "",
        animate: false,
        reads: [],
        voisins: [],
        scores: [],
        path: [],
        busy: false,
        waitingFunctionList: [],
        showReads: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 422
        },
        className: "jsx-3183033512"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__containers_Navbar__["a" /* default */], {
        step: this.state.step,
        lengthSequence: this.state.lengthSequence,
        minLengthRead: this.state.minLengthRead,
        maxLengthRead: this.state.maxLengthRead,
        changeLengthSequence: function changeLengthSequence(e) {
          return _this3.setState({
            lengthSequence: e.target.value
          });
        },
        changeMinLength: function changeMinLength(e) {
          return _this3.setState({
            minLengthRead: e.target.value
          });
        },
        changeMaxLength: function changeMaxLength(e) {
          return _this3.setState({
            maxLengthRead: e.target.value
          });
        },
        generateSequence: function generateSequence() {
          return _this3.generateSequence();
        },
        createReads: function createReads() {
          return _this3.createReads();
        },
        shuffleReads: function shuffleReads() {
          return _this3.shuffleReads();
        },
        showGraph: function showGraph() {
          return _this3.showGraph();
        },
        drawEdges: function drawEdges() {
          return _this3.drawEdges();
        },
        nearest_neighbor: function nearest_neighbor() {
          return _this3.nearest_neighbor();
        },
        rebuildSequence: function rebuildSequence() {
          return _this3.rebuildSequence();
        },
        reset: function reset() {
          return _this3.reset();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 424
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        id: "animationText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 444
        },
        className: "jsx-3183033512" + " " + ((this.state.animate ? 'animate' : '') || "")
      }, this.state.animationText.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "animation" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 446
          },
          className: "jsx-3183033512" + " " + ("read" + letter || "")
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 450
        },
        className: "jsx-3183033512"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.reset();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 451
        },
        className: "jsx-3183033512" + " " + "btn btn-outline-dark"
      }, "RESET")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "graphs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 469
        },
        className: "jsx-3183033512"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 470
        },
        className: "jsx-3183033512" + " " + ((this.state.step > 4 ? 'open' : '') || "")
      }, this.state.step < 5 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sequenceContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 472
        },
        className: "jsx-3183033512"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 473
        },
        className: "jsx-3183033512"
      }, this.state.sequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 475
          },
          className: "jsx-3183033512" + " " + ("read" + letter || "")
        }, letter);
      }))) : '', this.state.step < 7 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "readsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 487
        },
        className: "jsx-3183033512"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "readsBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 488
        },
        className: "jsx-3183033512" + " " + ((this.state.showReads ? "row justify-content-center showReads" : "row justify-content-center") || "")
      }, this.state.reads.map(function (read, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          id: "read" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 490
          },
          className: "jsx-3183033512" + " " + "read col-md-2"
        }, read.split('').map(function (letter, index2) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
            key: index2,
            id: "read" + index + "char" + index2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 492
            },
            className: "jsx-3183033512" + " " + ("read" + letter || "")
          }, letter);
        }));
      }))) : '', this.state.step > 6 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "rebuildContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        className: "jsx-3183033512"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "rebuildSequence",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        className: "jsx-3183033512"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        className: "jsx-3183033512"
      }, this.state.sequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 505
          },
          className: "jsx-3183033512" + " " + ("read" + letter || "")
        }, letter);
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        className: "jsx-3183033512"
      }), this.state.rebuildSequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 509
          },
          className: "jsx-3183033512" + " " + ("read" + letter || "")
        }, letter);
      })))) : ''), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "cy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 517
        },
        className: "jsx-3183033512" + " " + ((this.state.step > 4 ? 'open' : '') || "")
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3183033512",
        css: "#animationText.jsx-3183033512{top:200px;left:0px;z-index:1000;position:fixed;border-bottom:2px solid green;}#animationText.animate.jsx-3183033512{-webkit-transition:top .5s linear,left .5s linear,font-size .5s linear;transition:top .5s linear,left .5s linear,font-size .5s linear;}#reset.jsx-3183033512{position:fixed;z-index:1000;left:10px;bottom:10px;}#graphs.jsx-3183033512{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}#sidebar.jsx-3183033512{width:100%;height:calc(100vh - 56px);padding:0 5%;background:#ecf0f1;-webkit-transition:height 1s ease;transition:height 1s ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-x:auto;}#sidebar.open.jsx-3183033512{height:calc(25vh - 56px);}#sequenceContainer.jsx-3183033512{padding-top:25px;text-align:center;}#rebuildSequence.jsx-3183033512{margin-top:25px;}#sequenceContainer.jsx-3183033512 h6.jsx-3183033512,#rebuildSequence.jsx-3183033512 h6.jsx-3183033512,#animationText.jsx-3183033512{font-size:25px;font-weight:bold;word-break:break-all;line-height:40px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}#cy.jsx-3183033512{width:100%;height:calc(80vh - 56px);-webkit-transition:height 1s ease;transition:height 1s ease;}.wrapper.jsx-3183033512{height:calc(100vh - 56px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:25px;}.row.jsx-3183033512{max-height:calc(100vh - 56px);padding:25px 10px;text-align:center;font-weight:bold;font-size:20px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}.read.jsx-3183033512{opacity:0;}.showReads.jsx-3183033512 .read.jsx-3183033512{opacity:1;}.readA.jsx-3183033512{color:#27ae60;}.readC.jsx-3183033512{color:#2980b9;}.readG.jsx-3183033512{color:#c0392b;}.readT.jsx-3183033512{color:#8e44ad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVnQm9CLEFBSXVCLEFBT3VELEFBR2xELEFBTUYsQUFJSCxBQVllLEFBR1IsQUFJRCxBQUlELEFBUUosQUFLZSxBQU9JLEFBU3BCLEFBR0EsQUFHSSxBQUdBLEFBR0EsQUFHQSxVQXRGTCxBQXdFWCxBQUdBLENBdkQ0QixBQStCRCxHQTJCM0IsQUFHQSxBQUdBLEFBR0EsQ0E3RWUsQUFpQ0ksQ0FIbkIsQ0FMb0IsRUFsQ0wsTUErQmYsQ0F3QmUsRUE3Q0gsRUFvRE8sRUE3REYsQUEwQ00sR0FSdkIsQ0FnQjRCLENBL0JiLENBVEQsU0FUa0IsQ0E2RFosRUFuRHBCLEFBU3FCLEdBdUJGLGFBb0JBLEdBMUNTLENBdUJQLElBOUJHLEdBWnhCLE1BOERpQixhQWJqQixFQWNxQixFQVZJLDZCQWpDVixLQWpCZixrQkFVQSxXQThCd0Isc0JBQ3hCLE1Bb0J3QixRQVZILElBakNHLFVBNEN4QixvRUF6Q2tCLFdBK0JILEtBOUJmLFFBK0JBIiwiZmlsZSI6ImNvbnRhaW5lcnMvQXBwLmpzIiwic291cmNlUm9vdCI6Ii9hdXRvX2hvbWUvbGdlZXJ0c2VuL0xheW91dE92ZXJsYXlDb25zZW5zdXMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgY3l0b3NjYXBlIGZyb20gJ2N5dG9zY2FwZSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29udGFpbmVycy9OYXZiYXInO1xuaW1wb3J0IEhlbHBlciBmcm9tICcuLi9jbGFzc2VzL0hlbHBlcic7XG5pbXBvcnQgTmVpZ2hib3IgZnJvbSAnLi4vY2xhc3Nlcy9OZWlnaGJvcic7XG5cbmNvbnN0IHJlYWRDaGFycyA9IFtcIkFcIiwgXCJDXCIsIFwiR1wiLCBcIlRcIl07XG5cbnZhciBjeTtcbnZhciBudW1iZXJzID0gW11cbmZvciAodmFyIGkgPSAwOyBpIDwgNTE7IGkrKykge1xuICBudW1iZXJzLnB1c2goaSUxMCk7XG59XG5cbnZhciBidXN5ID0gZmFsc2U7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHN0ZXA6IDEsXG4gICAgICBzZXF1ZW5jZTogXCJcIixcbiAgICAgIHJlYnVpbGRTZXF1ZW5jZTogXCJcIixcbiAgICAgIGxlbmd0aFNlcXVlbmNlOiA1MCxcbiAgICAgIG1pbkxlbmd0aFJlYWQ6IDUsXG4gICAgICBtYXhMZW5ndGhSZWFkOiAxMCxcbiAgICAgIGFuaW1hdGlvblRleHQ6IFwiXCIsXG4gICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgIHJlYWRzOiBbXSxcbiAgICAgIHZvaXNpbnM6IFtdLFxuICAgICAgc2NvcmVzOiBbXSxcbiAgICAgIHBhdGg6IFtdLFxuICAgICAgYnVzeTogZmFsc2UsXG4gICAgICB3YWl0aW5nRnVuY3Rpb25MaXN0OiBbXSxcbiAgICAgIHNob3dSZWFkczogZmFsc2VcbiAgICB9XG4gIH1cblxuICBjcmVhdGVHcmFwaChlbGVtZW50cywgY2FsbGJhY2spIHtcbiAgICBjeSA9IGN5dG9zY2FwZSh7XG4gICAgICBjb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjeScpLFxuICAgICAgYm94U2VsZWN0aW9uRW5hYmxlZDogZmFsc2UsXG4gICAgICBhdXRvdW5zZWxlY3RpZnk6IHRydWUsXG5cbiAgICAgIGxheW91dDoge1xuICAgICAgICBuYW1lOiAnY2lyY2xlJ1xuICAgICAgfSxcblxuICAgICAgc3R5bGU6IGN5dG9zY2FwZS5zdHlsZXNoZWV0KClcbiAgICAgICAuc2VsZWN0b3IoJ25vZGUnKVxuICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICdoZWlnaHQnOiAyMCxcbiAgICAgICAgICAgJ3dpZHRoJzogMjAsXG4gICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJyNmMWM0MGYnLFxuICAgICAgICAgICAnY29udGVudCc6ICdkYXRhKHJlYWQpJyxcbiAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6ICdvcGFjaXR5JyxcbiAgICAgICAgICAgJ3RyYW5zaXRpb24tZHVyYXRpb24nOiAnMC4zcydcbiAgICAgICAgIH0pXG4gICAgICAgLnNlbGVjdG9yKCdlZGdlJylcbiAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAnbGFiZWwnOiBcImRhdGEobGFiZWwpXCIsXG4gICAgICAgICAgICdjdXJ2ZS1zdHlsZSc6ICdiZXppZXInLFxuICAgICAgICAgICAnd2lkdGgnOiAxLFxuICAgICAgICAgICAnbGluZS1jb2xvcic6ICcjOTVhNWE2JyxcbiAgICAgICAgICAgJ29wYWNpdHknOiAxLFxuICAgICAgICAgICAndGFyZ2V0LWFycm93LXNoYXBlJzogJ3RyaWFuZ2xlJyxcbiAgICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICcjOTVhNWE2JyxcbiAgICAgICAgICAgJ3RyYW5zaXRpb24tcHJvcGVydHknOiAnb3BhY2l0eScsXG4gICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzAuM3MnXG4gICAgICAgICB9KVxuICAgICAgIC5zZWxlY3RvcignLmhpZGVOb2RlJylcbiAgICAgICAgLmNzcyh7XG4gICAgICAgICAgJ29wYWNpdHknOiAwLFxuICAgICAgICB9KVxuICAgICAgICAuc2VsZWN0b3IoJy5wYXRoJylcbiAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICd3aWR0aCc6IDMsXG4gICAgICAgICAgICAnbGluZS1jb2xvcic6ICcjZTY3ZTIyJyxcbiAgICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnI2QzNTQwMCcsXG4gICAgICAgICAgICAndHJhbnNpdGlvbi1wcm9wZXJ0eSc6ICd3aWR0aCwgbGluZS1jb2xvciwgdGFyZ2V0LWFycm93LWNvbG9yJyxcbiAgICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzAuNXMnXG4gICAgICAgICAgfSksXG5cbiAgICAgIGVsZW1lbnRzOiBlbGVtZW50c1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxuXG4gIGdlbmVyYXRlU2VxdWVuY2UoKSB7XG4gICAgbGV0IHNlcXVlbmNlID0gXCJcIjtcbiAgICBsZXQgdmlkZSA9IFwiXCI7XG4gICAgbGV0IHIgPSB0aGlzLnN0YXRlLmxlbmd0aFNlcXVlbmNlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyBpKyspIHtcbiAgICAgIGxldCBtID0gSGVscGVyLnJhbmRvbSgwLCByZWFkQ2hhcnMubGVuZ3RoKTtcbiAgICAgIHNlcXVlbmNlICs9IHJlYWRDaGFyc1ttXTtcbiAgICAgIHZpZGUgKz0gXCItXCI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDIsIHNlcXVlbmNlOiBzZXF1ZW5jZX0pO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDIsIHNlcXVlbmNlOiBcIkFBVEdDQ1RUQUNBQ1RHQUFHR1RUVEFcIn0pO1xuXG4gICAgLy8gb2Rvby5kZWZhdWx0KHsgZWw6JyNzZXF1ZW5jZUNvbnRhaW5lcicsIGZyb206IHZpZGUsIHRvOiBzZXF1ZW5jZSwgYW5pbWF0aW9uRGVsYXk6IDEwMDAsIGR1cmF0aW9uOiAyMDAwIH0pO1xuICB9XG5cbiAgY3JlYXRlUmVhZHMoKSB7XG4gICAgbGV0IHJlYWRzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBzZXF1ZW5jZSA9IHRoaXMuc3RhdGUuc2VxdWVuY2U7XG4gICAgbGV0IGxvb3AgPSB0cnVlO1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICB3aGlsZShsb29wKSB7XG4gICAgICBsZXQgbWluID0gdGhpcy5zdGF0ZS5taW5MZW5ndGhSZWFkO1xuICAgICAgbGV0IG1heCA9IHRoaXMuc3RhdGUubWF4TGVuZ3RoUmVhZDtcbiAgICAgIGxldCByID0gSGVscGVyLnJhbmRvbShtaW4sIG1heCsxKTtcbiAgICAgIGNvbnNvbGUubG9nKHIpO1xuICAgICAgbGV0IGYgPSBpK3I7XG4gICAgICBpZihpK3IgPj0gc2VxdWVuY2UubGVuZ3RoKSB7XG4gICAgICAgIGYgPSBzZXF1ZW5jZS5sZW5ndGg7XG4gICAgICAgIGxvb3AgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGxldCByZWFkID0gc2VxdWVuY2Uuc3Vic3RyaW5nKGksZik7XG4gICAgICByZWFkcy5wdXNoKHJlYWQpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7cmVhZHM6IHJlYWRzfSk7XG4gICAgICBpZih0aGlzLnN0YXRlLmJ1c3kgfHwgYnVzeSkge1xuICAgICAgICBsZXQgd2FpdGluZ0Z1bmN0aW9uTGlzdCA9IHRoaXMuc3RhdGUud2FpdGluZ0Z1bmN0aW9uTGlzdDtcbiAgICAgICAgd2FpdGluZ0Z1bmN0aW9uTGlzdC5wdXNoKHtcbiAgICAgICAgICBmdW5jdGlvbjogdGhpcy5zaG93UmVhZCxcbiAgICAgICAgICBkYXRhOiBbdGhpcywgY291bnQsICBpLCByZWFkXVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7d2FpdGluZ0Z1bmN0aW9uTGlzdDogd2FpdGluZ0Z1bmN0aW9uTGlzdH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYnVzeSA9IHRydWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2J1c3k6IHRydWV9KTtcbiAgICAgICAgdGhpcy5zaG93UmVhZChbdGhpcywgY291bnQsICBpLCByZWFkXSk7XG4gICAgICB9XG4gICAgICBsZXQgYiA9IEhlbHBlci5yYW5kb20oMywgNik7XG4gICAgICBpID0gZi1iO1xuICAgICAgY291bnQrKztcbiAgICB9XG4gICAgLy8gcmVhZHMgPSBbXG4gICAgLy8gICBcIkdBQUdHVFRUQVwiLFxuICBcdC8vIFx0XCJHQ0NUVEFDQUNcIixcbiAgXHQvLyBcdFwiQUNUR0FBR0dcIixcbiAgXHQvLyBcdFwiQUFUR0NDXCIsXG4gIFx0Ly8gXHRcIkFDQUNUR1wiXG4gICAgLy8gXTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiAzLCByZWFkczogcmVhZHN9KTtcbiAgfVxuXG4gIHNob3dSZWFkKGRhdGEpIHtcblxuICAgIGxldCBzZWxmID0gZGF0YVswXTtcbiAgICBsZXQgY291bnQgPSBkYXRhWzFdO1xuICAgIGxldCBpbmRleCA9IGRhdGFbMl07XG4gICAgbGV0IHJlYWQgPSBkYXRhWzNdO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRlOiBmYWxzZX0pO1xuXG4gICAgICBsZXQgYW5pbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcbiAgICAgIGxldCByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkXCIgKyBjb3VudCk7XG4gICAgICBsZXQgcDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlcXVlbmNlXCIgKyBpbmRleCkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBsZXQgcDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWRcIiArIGNvdW50ICsgXCJjaGFyMFwiKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHNlbGYuc2V0U3RhdGUoe2FuaW1hdGlvblRleHQ6IHJlYWR9KVxuICAgICAgbGV0IHRvcDEgPSBwMS50b3AgLSA1O1xuICAgICAgYW5pbS5zdHlsZS50b3AgPSB0b3AxICsgXCJweFwiO1xuICAgICAgYW5pbS5zdHlsZS5sZWZ0ID0gcDEubGVmdCArIFwicHhcIjtcbiAgICAgIGFuaW0uc3R5bGUuZm9udFNpemUgPSBcIjI1cHhcIjtcblxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNlbGYuc2V0U3RhdGUoe2FuaW1hdGU6IHRydWV9KTtcblxuICAgICAgICBsZXQgdG9wMiA9IHAyLnRvcCAtIDg7XG4gICAgICAgIGFuaW0uc3R5bGUudG9wID0gdG9wMiArIFwicHhcIjtcbiAgICAgICAgYW5pbS5zdHlsZS5sZWZ0ID0gcDIubGVmdCArIFwicHhcIjtcbiAgICAgICAgYW5pbS5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xuICAgICAgfSwgNTAwKTtcbiAgICAgIChmdW5jdGlvbihzZWxmLCBjb3VudCwgaW5kZXgsIHJlYWQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgci5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRlOiBmYWxzZX0pO1xuICAgICAgICAgIHNlbGYuZW5kQnVzeSgpO1xuICAgICAgICAgIGlmKHNlbGYuc3RhdGUuc3RlcCA+IDMpIHtcbiAgICAgICAgICAgIGxldCBhbmltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25UZXh0XCIpO1xuICAgICAgICAgICAgYW5pbS5zdHlsZS50b3AgPSBcIi0xMDBweFwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgOTUwKTtcbiAgICAgIH0pKHNlbGYpO1xuICAgIH0sIDYwMCk7XG4gICAgLy8gfSwgMCArICgxMjAwICogY291bnQpKTtcbiAgfVxuXG4gIHNodWZmbGVSZWFkcygpIHtcbiAgICB0aGlzLnNraXBBbmltYXRpb25zKCk7XG4gICAgbGV0IGFuaW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvblRleHRcIik7XG4gICAgYW5pbS5zdHlsZS50b3AgPSBcIi0xMDBweFwiO1xuXG4gICAgbGV0IGxvbCA9IHRoaXMuc3RhdGUucmVhZHM7XG4gICAgLy8gbGV0IG51bXMgPSBbXTtcbiAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgbG9sLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBudW1zLnB1c2goaSk7XG4gICAgLy8gfVxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsb2wubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCBpbmRleCA9IEhlbHBlci5yYW5kb20oMCwgbG9sLmxlbmd0aCk7XG4gICAgICBsZXQgciA9IGxvbFtpXTtcbiAgICAgIGxvbFtpXSA9IGxvbFtpbmRleF07XG4gICAgICBsb2xbaW5kZXhdID0gcjtcblxuXG4gICAgICAvLyBsZXQgbiA9IG51bXNbaV07XG4gICAgICAvLyBudW1zW2ldID0gbnVtc1tpbmRleF07XG4gICAgICAvLyBudW1zW2luZGV4XSA9IG47XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKGxvbCk7XG4gICAgLy8gY29uc29sZS5sb2cobnVtcyk7XG4gICAgLy8gbGV0IHBvc2l0aW9ucyA9IFtdXG4gICAgLy9cbiAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgbGV0IHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWRcIiArIGkpO1xuICAgIC8vICAgbGV0IHBvcyA9IHIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgLy8gICBwb3NpdGlvbnMucHVzaChwb3MpO1xuICAgIC8vIH1cbiAgICAvL1xuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBudW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICBsZXQgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZFwiICsgaSk7XG4gICAgLy8gICByLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuICAgIC8vICAgci5zdHlsZS50b3AgPSBwb3NpdGlvbnNbaV0udG9wICsgXCJweFwiO1xuICAgIC8vICAgci5zdHlsZS5sZWZ0ID0gcG9zaXRpb25zW2ldLmxlZnQgKyBcInB4XCI7XG4gICAgLy8gfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDQsIHJlYWRzOiBsb2x9KTtcbiAgfVxuXG4gIHNob3dHcmFwaCgpIHtcbiAgICBsZXQgZWxlbWVudHMgPSBbXTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zdGF0ZS5yZWFkcy5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHIgPSB7fTtcbiAgICAgIHIuZ3JvdXAgPSAnbm9kZXMnO1xuICAgICAgci5kYXRhID0ge1xuICAgICAgICBpZDogJ3InICsgaSxcbiAgICAgICAgcmVhZDogdGhpcy5zdGF0ZS5yZWFkc1tpXSxcbiAgICAgICAgbGFiZWw6ICc8aDE+c2ZqZHFzcWtsZGo8aDE+J1xuICAgICAgfTtcbiAgICAgIHIuY2xhc3NlcyA9ICdoaWRlTm9kZSc7XG4gICAgICBlbGVtZW50cy5wdXNoKHIpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiA1fSk7XG4gICAgdGhpcy5jcmVhdGVHcmFwaChlbGVtZW50cywgdGhpcy5zaG93Tm9kZXMpO1xuICB9XG5cbiAgb3ZlcmxhcChzMSwgczIpe1xuICBcdGxldCBtYXggPSAwO1xuICAgIGZvcihsZXQgaSA9IDE7IGkgPD0gTWF0aC5taW4oczEubGVuZ3RoLCBzMi5sZW5ndGgpOyBpKyspIHtcbiAgICAgIGlmKHMxLnN1YnN0cihzMS5sZW5ndGgtaSwgczEubGVuZ3RoLTEpID09IHMyLnN1YnN0cigwLCBpKSkge1xuICAgICAgICBpZihtYXggPCBpKSB7XG4gICAgICAgICAgLy91cGRhdGUgbWF4IGFuZCBzdHJcbiAgICAgICAgICBtYXggPSBpO1xuICAgICAgICAgIC8vcmVzdWx0ID0gczEgKyBzMi5zdWJzdHIoaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy9yZXR1cm4gc3RyO1xuICAgIHJldHVybiBtYXg7XG4gIH1cblxuICBkcmF3RWRnZXMoKSB7XG4gICAgbGV0IHZvaXNpbnMgPSB0aGlzLnN0YXRlLnZvaXNpbnM7XG4gICAgbGV0IHNjb3JlcyA9IHRoaXMuc3RhdGUuc2NvcmVzO1xuICAgIGxldCByZWFkcyA9IHRoaXMuc3RhdGUucmVhZHM7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmVhZHMubGVuZ3RoOyBpKyspe1xuICAgICAgdm9pc2luc1tpXSA9IFtdO1xuICAgICAgc2NvcmVzW2ldID0gW107XG4gIFx0XHRmb3IobGV0IGogPSAwOyBqIDwgcmVhZHMubGVuZ3RoOyBqKyspe1xuICBcdFx0XHRsZXQgc2NvcmUgPSAwO1xuICBcdFx0XHRpZihpICE9IGope1xuICBcdFx0XHRcdHNjb3JlID0gdGhpcy5vdmVybGFwKHJlYWRzW2ldLCByZWFkc1tqXSk7XG4gIFx0XHRcdFx0Ly8gaWYoc2NvcmUgPT0gKGludClyZWFkc1tpXS5zaXplKCkpIHJlYWRzW2pdLnNpemUoKSlcblxuICBcdFx0XHRcdC8vb24gbmUgY29tcHRlIHBhcyBsZXMgY2hldmF1Y2hlbWVudHMgYXZlYyB1biBzY29yZSBudWxsZSBvdSBsZXMgY2hldmF1Y2hlbWVudHMgaW5jbHVzXG4gIFx0XHRcdFx0aWYoc2NvcmUgPiAwKSAvLyYmIHNjb3JlICE9IChpbnQpcmVhZHNbal0uc2l6ZSgpKS8vICYmIHNjb3JlIDwgKGludCltaW4ocmVhZHNbaV0uc2l6ZSgpLCByZWFkc1tqXS5zaXplKCkpKVxuICAgICAgICAgICAgdm9pc2luc1tpXS5wdXNoKGopO1xuXG4gIFx0XHRcdH1cbiAgXHRcdFx0c2NvcmVzW2ldLnB1c2goc2NvcmUpO1xuICBcdFx0fVxuICBcdH1cbiAgICB0aGlzLnNldFN0YXRlKHt2b2lzaW5zOiB2b2lzaW5zLCBzY29yZXM6IHNjb3Jlc30pO1xuXG4gICAgbGV0IGVkZ2VzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHZvaXNpbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB2b2lzaW5zW2ldLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGVkZ2VzLnB1c2goe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGlkOiAnZScgKyBpICsgJ3QnICsgdm9pc2luc1tpXVtqXSxcbiAgICAgICAgICAgIHNvdXJjZTogJ3InICsgaSxcbiAgICAgICAgICAgIHRhcmdldDogJ3InICsgdm9pc2luc1tpXVtqXSxcbiAgICAgICAgICAgIC8vIGxhYmVsOiBcImxhYmVsXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNsYXNzZXM6ICdoaWRlTm9kZSdcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY3kuYWRkKGVkZ2VzKTtcbiAgICB0aGlzLnNob3dFZGdlcygpO1xuICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDZ9KTtcbiAgfVxuXG4gIHNob3dOb2RlcygpIHtcbiAgICBsZXQgbm9kZXMgPSBjeS5ub2RlcygpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGluZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBub2Rlc1tpbmRdLnJlbW92ZUNsYXNzKCdoaWRlTm9kZScpO1xuICAgICAgICB9LCAwICsgKDIwMCAqIGluZCkpO1xuICAgICAgfSkoaSk7XG4gICAgfVxuICB9XG5cbiAgc2hvd0VkZ2VzKCkge1xuICAgIGxldCBlZGdlcyA9IGN5LmVkZ2VzKCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGVkZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW5kKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVkZ2VzW2luZF0ucmVtb3ZlQ2xhc3MoJ2hpZGVOb2RlJyk7XG4gICAgICAgIH0sIDAgKyAoNTAgKiBpbmQpKTtcbiAgICAgIH0pKGkpO1xuICAgIH1cbiAgfVxuXG4gIG5lYXJlc3RfbmVpZ2hib3IoKSB7XG4gICAgTmVpZ2hib3IubmVhcmVzdF9uZWlnaGJvcih0aGlzLnN0YXRlLnZvaXNpbnMsIHRoaXMuc3RhdGUuc2NvcmVzLCBiZXN0UGF0aCA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiA3LCBwYXRoOiBiZXN0UGF0aH0pO1xuICAgICAgdGhpcy5oaWdobGlnaHRQYXRoKGJlc3RQYXRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZ2hsaWdodFBhdGgocGF0aCkge1xuICAgIGxldCBlZGdlcyA9IGN5LmVkZ2VzKCk7XG4gICAgLy8gbGV0IHBhdGggPSB0aGlzLnN0YXRlLnBhdGg7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoLTE7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGluZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlZGdlcy5nZXRFbGVtZW50QnlJZCgnZScgKyBwYXRoW2luZF0gKyAndCcgKyBwYXRoW2luZCsxXSkuYWRkQ2xhc3MoJ3BhdGgnKTtcbiAgICAgICAgfSwgMCArICg3NTAgKiBpbmQpKTtcbiAgICAgIH0pKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJlYnVpbGRTZXF1ZW5jZSgpIHtcbiAgICBsZXQgc2VxID0gXCJcIjtcbiAgICBsZXQgcGF0aCA9IHRoaXMuc3RhdGUucGF0aDtcbiAgXHRmb3IobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGg7IGkrKyl7XG4gICAgICAoZnVuY3Rpb24oc2VsZiwgaW5kKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGxldCBzY29yZSA9IGluZCA9PSBwYXRoLmxlbmd0aCAtIDEgPyAwIDogc2VsZi5zdGF0ZS5zY29yZXNbcGF0aFtpbmRdXVtwYXRoW2luZCsxXV07XG4gICAgICAgICAgLy8gaWYoaW5kID09IDApIHtcbiAgICAgICAgICAvLyAgIHNlcSArPSBzZWxmLnN0YXRlLnJlYWRzW3BhdGhbaW5kXV07XG4gICAgICAgICAgLy8gfVxuICAgICAgICAgIHNlcSArPSBzZWxmLnN0YXRlLnJlYWRzW3BhdGhbaW5kXV0uc3Vic3RyKDAsIHNlbGYuc3RhdGUucmVhZHNbcGF0aFtpbmRdXS5sZW5ndGggLSBzY29yZSk7XG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7cmVidWlsZFNlcXVlbmNlOiBzZXF9KTtcbiAgICAgICAgfSwgMCArICg3NTAgKiBpbmQpKTtcbiAgICAgIH0pKHRoaXMsIGkpO1xuXG4gIFx0fVxuICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDgsIHJlYnVpbGRTZXF1ZW5jZTogc2VxfSk7XG4gIH1cblxuICBza2lwQW5pbWF0aW9ucygpIHtcbiAgICB0aGlzLnNldFN0YXRlKHt3YWl0aW5nRnVuY3Rpb25MaXN0OiBbXX0pO1xuICAgIGlmKHRoaXMuc3RhdGUuc3RlcCA9PSAzKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtzaG93UmVhZHM6IHRydWV9KTtcbiAgICAgIGxldCBhbmltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25UZXh0XCIpO1xuICAgICAgYW5pbS5zdHlsZS50b3AgPSBcIi0xMDBweFwiO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxGdW5jdGlvbihjYWxsYmFjaywgZGF0YSkge1xuICAgIGNhbGxiYWNrKGRhdGEpO1xuICB9XG5cbiAgZW5kQnVzeSgpIHtcbiAgICBidXN5ID0gZmFsc2U7XG4gICAgdGhpcy5zZXRTdGF0ZSh7YnVzeTogZmFsc2V9KTtcbiAgICBpZih0aGlzLnN0YXRlLndhaXRpbmdGdW5jdGlvbkxpc3QubGVuZ3RoID4gMCkge1xuICAgICAgdmFyIGYgPSB0aGlzLnN0YXRlLndhaXRpbmdGdW5jdGlvbkxpc3Quc2hpZnQoKTtcbiAgICAgIHRoaXMuY2FsbEZ1bmN0aW9uKGYuZnVuY3Rpb24sIGYuZGF0YSk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgLy8gY3kuYWRkKFtcbiAgICAvLyAgIHtkYXRhOiB7IGlkOiAnYWInLCB3ZWlnaHQ6IDMsIHNvdXJjZTogJ3IwJywgdGFyZ2V0OiAncjgnLCBsYWJlbDogXCJsYWJlbFwiIH0gfSxcbiAgICAvLyAgIHtkYXRhOiB7IGlkOiAnYWMnLCB3ZWlnaHQ6IDMsIHNvdXJjZTogJ3IxJywgdGFyZ2V0OiAncjknLCBsYWJlbDogXCJsYWJlbFwiIH0gfVxuICAgIC8vIF0pO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgc3RlcDogMSxcbiAgICAgIHNlcXVlbmNlOiBcIlwiLFxuICAgICAgcmVidWlsZFNlcXVlbmNlOiBcIlwiLFxuICAgICAgbGVuZ3RoU2VxdWVuY2U6IDUwLFxuICAgICAgbWluTGVuZ3RoUmVhZDogNixcbiAgICAgIG1heExlbmd0aFJlYWQ6IDEwLFxuICAgICAgYW5pbWF0aW9uVGV4dDogXCJcIixcbiAgICAgIGFuaW1hdGU6IGZhbHNlLFxuICAgICAgcmVhZHM6IFtdLFxuICAgICAgdm9pc2luczogW10sXG4gICAgICBzY29yZXM6IFtdLFxuICAgICAgcGF0aDogW10sXG4gICAgICBidXN5OiBmYWxzZSxcbiAgICAgIHdhaXRpbmdGdW5jdGlvbkxpc3Q6IFtdLFxuICAgICAgc2hvd1JlYWRzOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiYXBwXCI+XG5cbiAgICAgICAgPE5hdmJhclxuICAgICAgICAgIHN0ZXA9e3RoaXMuc3RhdGUuc3RlcH1cbiAgICAgICAgICBsZW5ndGhTZXF1ZW5jZT17dGhpcy5zdGF0ZS5sZW5ndGhTZXF1ZW5jZX1cbiAgICAgICAgICBtaW5MZW5ndGhSZWFkPXt0aGlzLnN0YXRlLm1pbkxlbmd0aFJlYWR9XG4gICAgICAgICAgbWF4TGVuZ3RoUmVhZD17dGhpcy5zdGF0ZS5tYXhMZW5ndGhSZWFkfVxuXG4gICAgICAgICAgY2hhbmdlTGVuZ3RoU2VxdWVuY2U9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7bGVuZ3RoU2VxdWVuY2U6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgY2hhbmdlTWluTGVuZ3RoPXtlID0+IHRoaXMuc2V0U3RhdGUoe21pbkxlbmd0aFJlYWQ6IGUudGFyZ2V0LnZhbHVlfSl9XG4gICAgICAgICAgY2hhbmdlTWF4TGVuZ3RoPXtlID0+IHRoaXMuc2V0U3RhdGUoe21heExlbmd0aFJlYWQ6IGUudGFyZ2V0LnZhbHVlfSl9XG5cbiAgICAgICAgICBnZW5lcmF0ZVNlcXVlbmNlPXsoKSA9PiB0aGlzLmdlbmVyYXRlU2VxdWVuY2UoKX1cbiAgICAgICAgICBjcmVhdGVSZWFkcz17KCkgPT4gdGhpcy5jcmVhdGVSZWFkcygpfVxuICAgICAgICAgIHNodWZmbGVSZWFkcz17KCkgPT4gdGhpcy5zaHVmZmxlUmVhZHMoKX1cbiAgICAgICAgICBzaG93R3JhcGg9eygpID0+IHRoaXMuc2hvd0dyYXBoKCl9XG4gICAgICAgICAgZHJhd0VkZ2VzPXsoKSA9PiB0aGlzLmRyYXdFZGdlcygpfVxuICAgICAgICAgIG5lYXJlc3RfbmVpZ2hib3I9eygpID0+IHRoaXMubmVhcmVzdF9uZWlnaGJvcigpfVxuICAgICAgICAgIHJlYnVpbGRTZXF1ZW5jZT17KCkgPT4gdGhpcy5yZWJ1aWxkU2VxdWVuY2UoKX1cbiAgICAgICAgICByZXNldD17KCkgPT4gdGhpcy5yZXNldCgpfVxuICAgICAgICAvPlxuXG4gICAgICAgIDxoNiBpZD1cImFuaW1hdGlvblRleHRcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuYW5pbWF0ZSA/ICdhbmltYXRlJyA6ICcnfT5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5hbmltYXRpb25UZXh0LnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGlkPXtcImFuaW1hdGlvblwiICsgaW5kZXh9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2g2PlxuXG4gICAgICAgIDxkaXYgaWQ9XCJyZXNldFwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWRhcmtcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnJlc2V0KCl9PlJFU0VUPC9idXR0b24+XG4gICAgICAgICAgey8qIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmdcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNraXBBbmltYXRpb25zKCl9PlNLSVAgQU5JTUFUSU9OUzwvYnV0dG9uPiAqL31cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgey8qIHt0aGlzLnN0YXRlLnN0ZXAgPT0gMSB8fCB0aGlzLnN0YXRlLnN0ZXAgPT0gMiA/XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYWRzLm1hcCgocmVhZCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInJlYWQgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgIHtyZWFkLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA6ICcnXG4gICAgICAgIH0gKi99XG4gICAgICAgIDxkaXYgaWQ9XCJncmFwaHNcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGVwID4gNCA/ICdvcGVuJyA6ICcnfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN0ZXAgPCA1ID9cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInNlcXVlbmNlQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUuc2VxdWVuY2Uuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBpZD17XCJzZXF1ZW5jZVwiICsgaW5kZXh9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9oNj5cbiAgICAgICAgICAgICAgICB7LyogPGg2IGlkPVwibnVtYmVyc1wiPlxuICAgICAgICAgICAgICAgICAge251bWJlcnMubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPC9oNj4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7IHRoaXMuc3RhdGUuc3RlcCA8IDcgP1xuICAgICAgICAgICAgICA8ZGl2IGlkPVwicmVhZHNDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicmVhZHNCb3hcIiBjbGFzc05hbWU9e3RoaXMuc3RhdGUuc2hvd1JlYWRzID8gXCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBzaG93UmVhZHNcIiA6IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIn0+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5yZWFkcy5tYXAoKHJlYWQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gaWQ9e1wicmVhZFwiICsgaW5kZXh9IGNsYXNzTmFtZT1cInJlYWQgY29sLW1kLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7cmVhZC5zcGxpdCgnJykubWFwKChsZXR0ZXIsIGluZGV4MikgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleDJ9IGlkPXtcInJlYWRcIiArIGluZGV4ICsgXCJjaGFyXCIgKyBpbmRleDJ9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnN0ZXAgPiA2ID9cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInJlYnVpbGRDb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicmVidWlsZFNlcXVlbmNlXCI+XG4gICAgICAgICAgICAgICAgICA8aDY+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcXVlbmNlLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBpZD17XCJzZXF1ZW5jZVwiICsgaW5kZXh9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPGJyLz5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVidWlsZFNlcXVlbmNlLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBpZD17XCJzZXF1ZW5jZVwiICsgaW5kZXh9IGNsYXNzTmFtZT17XCJyZWFkXCIgKyBsZXR0ZXJ9PntsZXR0ZXJ9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBpZD1cImN5XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnN0ZXAgPiA0ID8gJ29wZW4nIDogJyd9PjwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgI2FuaW1hdGlvblRleHQge1xuICAgICAgICAgICAgLy8gb3BhY2l0eTogMDtcbiAgICAgICAgICAgIHRvcDogMjAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZWVuO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjYW5pbWF0aW9uVGV4dC5hbmltYXRlIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRvcCAuNXMgbGluZWFyLCBsZWZ0IC41cyBsaW5lYXIsIGZvbnQtc2l6ZSAuNXMgbGluZWFyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjcmVzZXQge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgICAgICBib3R0b206IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgICNncmFwaHMge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlYmFyIHtcbiAgICAgICAgICAgIHdpZHRoIDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNSU7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZWNmMGYxO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDFzIGVhc2U7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIC8vIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgLy8gYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgICAgICAgfVxuICAgICAgICAgICNzaWRlYmFyLm9wZW4ge1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDI1dmggLSA1NnB4KTs7XG4gICAgICAgICAgfVxuICAgICAgICAgICNzZXF1ZW5jZUNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMjVweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3JlYnVpbGRTZXF1ZW5jZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgICAgICAgICAgLy8gdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2VxdWVuY2VDb250YWluZXIgaDYsICNyZWJ1aWxkU2VxdWVuY2UgaDYsICNhbmltYXRpb25UZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2N5IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDgwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAyNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucm93IHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSA1NnB4KTtcbiAgICAgICAgICAgIHBhZGRpbmcgMjVweCAxMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNHB4O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNob3dSZWFkcyAucmVhZCB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZEEge1xuICAgICAgICAgICAgY29sb3I6ICMyN2FlNjA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkQyB7XG4gICAgICAgICAgICBjb2xvcjogIzI5ODBiOTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWRHIHtcbiAgICAgICAgICAgIGNvbG9yOiAjYzAzOTJiO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZFQge1xuICAgICAgICAgICAgY29sb3I6ICM4ZTQ0YWQ7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=containers/App.js */"
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

  function App(props) {
    var _this;

    _classCallCheck(this, App);

    _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
    _this.state = {
      clicked: false
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "navbar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        className: "jsx-411662241"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("nav", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        },
        className: "jsx-411662241" + " " + "navbar navbar-expand-lg navbar-light bg-light"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
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
          lineNumber: 18
        },
        className: "jsx-411662241" + " " + "navbar-toggler"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        className: "jsx-411662241" + " " + "navbar-toggler-icon"
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "navbarSupportedContent",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-411662241" + " " + "collapse navbar-collapse"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-411662241" + " " + "navbar-nav mr-auto"
      }), this.props.step == 1 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        className: "jsx-411662241"
      }, "Length Of Sequence"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        min: "10",
        value: this.props.lengthSequence,
        onChange: function onChange(e) {
          return _this2.props.changeLengthSequence(e);
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        className: "jsx-411662241" + " " + "form-control"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.generateSequence();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        className: "jsx-411662241" + " " + "btn btn-outline-dark my-2 my-sm-0"
      }, "Generate sequence")) : '', this.props.step == 2 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.createReads();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        className: "jsx-411662241" + " " + "btn btn-outline-secondary my-2 my-sm-0"
      }, "Create reads")) : '', this.props.step == 3 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.shuffleReads();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        className: "jsx-411662241" + " " + "btn btn-outline-primary my-2 my-sm-0"
      }, "Shuffle reads")) : '', this.props.step == 4 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.showGraph();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        className: "jsx-411662241" + " " + "btn btn-outline-info my-2 my-sm-0"
      }, "Create graph")) : '', this.props.step == 5 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.drawEdges();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        className: "jsx-411662241" + " " + "btn btn-outline-warning my-2 my-sm-0"
      }, "Draw edges")) : '', this.props.step == 6 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.nearest_neighbor();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        className: "jsx-411662241" + " " + "btn btn-outline-danger my-2 my-sm-0"
      }, "Calculate path")) : '', this.props.step == 7 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.rebuildSequence();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        className: "jsx-411662241" + " " + "btn btn-outline-success my-2 my-sm-0"
      }, "Rebuild sequence")) : '', this.props.step == 8 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        className: "jsx-411662241" + " " + "form-inline my-2 my-lg-0"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.reset();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        className: "jsx-411662241" + " " + "btn btn-dark my-2 my-sm-0"
      }, "RESET")) : '')), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "411662241",
        css: ".form-control.jsx-411662241{width:100px;margin-left:10px;margin-right:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZFb0IsQUFHeUIsWUFDSyxpQkFDQyxrQkFDcEIiLCJmaWxlIjoiY29udGFpbmVycy9OYXZiYXIuanMiLCJzb3VyY2VSb290IjoiL2F1dG9faG9tZS9sZ2VlcnRzZW4vTGF5b3V0T3ZlcmxheUNvbnNlbnN1cyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNsaWNrZWQ6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwibmF2YmFyXCI+XG5cbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItbGlnaHQgYmctbGlnaHRcIj5cbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiBocmVmPVwiI1wiPk92ZXJsYXAgTGF5b3V0IENvbnNlbnN1czwvYT5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIj48L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gMSA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsPkxlbmd0aCBPZiBTZXF1ZW5jZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHR5cGU9XCJudW1iZXJcIiBtaW49XCIxMFwiIHZhbHVlPXt0aGlzLnByb3BzLmxlbmd0aFNlcXVlbmNlfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnByb3BzLmNoYW5nZUxlbmd0aFNlcXVlbmNlKGUpfS8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFyayBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmdlbmVyYXRlU2VxdWVuY2UoKX0+R2VuZXJhdGUgc2VxdWVuY2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gMiA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG5cbiAgICAgICAgICAgICAgICB7LyogPGxhYmVsPk1pbiBMZW5ndGggUmVhZHM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjVcIiBtYXg9XCIxMFwiIHZhbHVlPXt0aGlzLnByb3BzLm1pbkxlbmd0aFJlYWR9IG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuY2hhbmdlTWluTGVuZ3RoKGUpfS8+XG4gICAgICAgICAgICAgICAgPGxhYmVsPk1heCBMZW5ndGggUmVhZHM6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgdHlwZT1cIm51bWJlclwiIG1pbj1cIjVcIiBtYXg9XCIxMFwiIHZhbHVlPXt0aGlzLnByb3BzLm1heExlbmd0aFJlYWR9IG9uQ2hhbmdlPXtlID0+IHRoaXMucHJvcHMuY2hhbmdlTWF4TGVuZ3RoKGUpfS8+ICovfVxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLmNyZWF0ZVJlYWRzKCl9PkNyZWF0ZSByZWFkczwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbXktMiBteS1zbS0wXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zaG93R3JhcGgoKX0+U2hvdyBncmFwaDwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gMyA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBteS0yIG15LXNtLTBcIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnByb3BzLnNodWZmbGVSZWFkcygpfT5TaHVmZmxlIHJlYWRzPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiAnJyB9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDQgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLWluZm8gbXktMiBteS1zbS0wXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5zaG93R3JhcGgoKX0+Q3JlYXRlIGdyYXBoPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgOiAnJyB9XG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGVwID09IDUgP1xuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5saW5lIG15LTIgbXktbGctMFwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXdhcm5pbmcgbXktMiBteS1zbS0wXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5kcmF3RWRnZXMoKX0+RHJhdyBlZGdlczwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogJycgfVxuICAgICAgICAgICAge3RoaXMucHJvcHMuc3RlcCA9PSA2ID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBteS0yIG15LWxnLTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1kYW5nZXIgbXktMiBteS1zbS0wXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5uZWFyZXN0X25laWdoYm9yKCl9PlxuICAgICAgICAgICAgICAgICAgICBDYWxjdWxhdGUgcGF0aFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogJycgfVxuICAgICAgICAgICAge3RoaXMucHJvcHMuc3RlcCA9PSA3ID9cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlubGluZSBteS0yIG15LWxnLTBcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIG15LTIgbXktc20tMFwiIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMucmVidWlsZFNlcXVlbmNlKCl9PlJlYnVpbGQgc2VxdWVuY2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA6ICcnIH1cbiAgICAgICAgICAgIHt0aGlzLnByb3BzLnN0ZXAgPT0gOCA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmUgbXktMiBteS1sZy0wXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgbXktMiBteS1zbS0wXCIgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5yZXNldCgpfT5SRVNFVDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDogJycgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L25hdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLmZvcm0tY29udHJvbCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=containers/Navbar.js */"
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