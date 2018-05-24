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
      } // let max = 0;
      // for(let i = 1; i < allPaths.length; i++) {
      //   if(allPaths[i].score > allPaths[max].score) {
      //     max = i;
      //   }
      // }
      // console.log(allPaths);
      // console.log(allPaths[max]);


      callback(allPaths);
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
          'transition-duration': '0.3s'
        }).selector('.showPath').css({
          'width': 2,
          'line-color': '#3498db',
          'target-arrow-color': '#2980b9'
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

      __WEBPACK_IMPORTED_MODULE_5__classes_Neighbor__["a" /* default */].nearest_neighbor(this.state.voisins, this.state.scores, function (allPaths) {
        var max = 0;

        for (var _i9 = 1; _i9 < allPaths.length; _i9++) {
          if (allPaths[_i9].score > allPaths[max].score) {
            max = _i9;
          }
        }

        _this2.setState({
          step: 7,
          path: allPaths[max].path
        });

        _this2.showPaths(allPaths); // this.highlightPath(allPaths[max].path);

      });
    }
  }, {
    key: "showPaths",
    value: function showPaths(allPaths) {
      var edges = cy.edges(); // let path = this.state.path;

      for (var j = 0; j < allPaths.length; j++) {
        (function (self, ind, completePath, max) {
          setTimeout(function () {
            console.log(completePath.score);
            console.log(completePath.path);
            var path = completePath.path;

            for (var _i10 = 0; _i10 < path.length - 1; _i10++) {
              edges.getElementById('e' + path[_i10] + 't' + path[_i10 + 1]).addClass('showPath');
            }

            setTimeout(function () {
              self.hidePath(path);

              if (ind == max) {
                self.highlightPath(self.state.path);
              }
            }, 750);
          }, 0 + 1250 * ind);
        })(this, j, allPaths[j], allPaths.length - 1);
      }
    }
  }, {
    key: "hidePath",
    value: function hidePath(path) {
      var edges = cy.edges();

      for (var _i11 = 0; _i11 < path.length - 1; _i11++) {
        edges.getElementById('e' + path[_i11] + 't' + path[_i11 + 1]).removeClass('showPath');
      }
    }
  }, {
    key: "highlightPath",
    value: function highlightPath(path) {
      var edges = cy.edges(); // let path = this.state.path;

      for (var _i12 = 0; _i12 < path.length - 1; _i12++) {
        (function (ind) {
          setTimeout(function () {
            edges.getElementById('e' + path[ind] + 't' + path[ind + 1]).addClass('path');
          }, 0 + 500 * ind);
        })(_i12);
      }
    }
  }, {
    key: "rebuildSequence",
    value: function rebuildSequence() {
      var seq = "";
      var path = this.state.path;

      for (var _i13 = 0; _i13 < path.length; _i13++) {
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
        })(this, _i13);
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
          lineNumber: 464
        },
        className: "jsx-1119711797"
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
          lineNumber: 466
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        id: "animationText",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 486
        },
        className: "jsx-1119711797" + " " + ((this.state.animate ? 'animate' : '') || "")
      }, this.state.animationText.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "animation" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 488
          },
          className: "jsx-1119711797" + " " + ("read" + letter || "")
        }, letter);
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "reset",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 492
        },
        className: "jsx-1119711797"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        onClick: function onClick() {
          return _this3.reset();
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 493
        },
        className: "jsx-1119711797" + " " + "btn btn-outline-dark"
      }, "RESET")), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "graphs",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 498
        },
        className: "jsx-1119711797"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sidebar",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 499
        },
        className: "jsx-1119711797" + " " + ((this.state.step > 4 ? 'open' : '') || "")
      }, this.state.step == 1 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 501
        },
        className: "jsx-1119711797" + " " + "wrapper"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 502
        },
        className: "jsx-1119711797" + " " + "row justify-content-center"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 503
        },
        className: "jsx-1119711797" + " " + "col-sm-12"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 504
        },
        className: "jsx-1119711797" + " " + "display-2"
      }, "Overlap Layout Consensus"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 505
        },
        className: "jsx-1119711797"
      }, "Made by:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 506
        },
        className: "jsx-1119711797"
      }, "Antoine Gouyon"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 507
        },
        className: "jsx-1119711797"
      }, "Lee Geertsen"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 508
        },
        className: "jsx-1119711797"
      }, "Thibault Odorico")))) : '', this.state.step < 5 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "sequenceContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 515
        },
        className: "jsx-1119711797"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 516
        },
        className: "jsx-1119711797"
      }, this.state.sequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 518
          },
          className: "jsx-1119711797" + " " + ("read" + letter || "")
        }, letter);
      }))) : '', this.state.step < 7 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "readsContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 530
        },
        className: "jsx-1119711797"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "readsBox",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 531
        },
        className: "jsx-1119711797" + " " + ((this.state.showReads ? "row justify-content-center showReads" : "row justify-content-center") || "")
      }, this.state.reads.map(function (read, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
          key: index,
          id: "read" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 533
          },
          className: "jsx-1119711797" + " " + "read col-md-2"
        }, read.split('').map(function (letter, index2) {
          return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
            key: index2,
            id: "read" + index + "char" + index2,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 535
            },
            className: "jsx-1119711797" + " " + ("read" + letter || "")
          }, letter);
        }));
      }))) : '', this.state.step > 7 ? __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "rebuildContainer",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 544
        },
        className: "jsx-1119711797"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "rebuildSequence",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 545
        },
        className: "jsx-1119711797"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 546
        },
        className: "jsx-1119711797"
      }, this.state.sequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 548
          },
          className: "jsx-1119711797" + " " + ("read" + letter || "")
        }, letter);
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 550
        },
        className: "jsx-1119711797"
      }), this.state.rebuildSequence.split('').map(function (letter, index) {
        return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("span", {
          key: index,
          id: "sequence" + index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 552
          },
          className: "jsx-1119711797" + " " + ("read" + letter || "")
        }, letter);
      })))) : ''), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "cy",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 560
        },
        className: "jsx-1119711797" + " " + ((this.state.step > 4 ? 'open' : '') || "")
      })), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "1119711797",
        css: "#animationText.jsx-1119711797{top:200px;left:0px;z-index:1000;position:fixed;border-bottom:2px solid green;}#animationText.animate.jsx-1119711797{-webkit-transition:top .5s linear,left .5s linear,font-size .5s linear;transition:top .5s linear,left .5s linear,font-size .5s linear;}#reset.jsx-1119711797{position:fixed;z-index:1000;left:10px;bottom:10px;}#graphs.jsx-1119711797{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}#sidebar.jsx-1119711797{width:100%;height:calc(100vh - 56px);padding:0 5%;background:#ecf0f1;-webkit-transition:height 1s ease;transition:height 1s ease;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;overflow-x:auto;}#sidebar.open.jsx-1119711797{height:calc(25vh - 56px);}#sequenceContainer.jsx-1119711797{padding-top:25px;text-align:center;}#rebuildSequence.jsx-1119711797{margin-top:25px;}#sequenceContainer.jsx-1119711797 h6.jsx-1119711797,#rebuildSequence.jsx-1119711797 h6.jsx-1119711797,#animationText.jsx-1119711797{font-size:25px;font-weight:bold;word-break:break-all;line-height:40px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}#cy.jsx-1119711797{width:100%;height:calc(80vh - 56px);-webkit-transition:height 1s ease;transition:height 1s ease;}.wrapper.jsx-1119711797{height:calc(100vh - 56px);display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:25px;}.wrapper.jsx-1119711797 h1.jsx-1119711797{margin-bottom:50px;}.row.jsx-1119711797{max-height:calc(100vh - 56px);padding:25px 10px;text-align:center;font-weight:bold;font-size:20px;-webkit-letter-spacing:4px;-moz-letter-spacing:4px;-ms-letter-spacing:4px;letter-spacing:4px;font-family:monospace;}.read.jsx-1119711797{opacity:0;}.showReads.jsx-1119711797 .read.jsx-1119711797{opacity:1;}.readA.jsx-1119711797{color:#27ae60;}.readC.jsx-1119711797{color:#2980b9;}.readG.jsx-1119711797{color:#c0392b;}.readT.jsx-1119711797{color:#8e44ad;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtqQm9CLEFBSXVCLEFBT3VELEFBR2xELEFBTUYsQUFJSCxBQVllLEFBR1IsQUFJRCxBQUlELEFBUUosQUFLZSxBQU9QLEFBR1csQUFTcEIsQUFHQSxBQUdJLEFBR0EsQUFHQSxBQUdBLFVBekZMLEFBMkVYLEFBR0EsQ0ExRDRCLEFBK0JELEdBOEIzQixBQUdBLEFBR0EsQUFHQSxDQWhGZSxBQWlDSSxDQUhuQixDQUxvQixFQWxDTCxBQThEZixNQS9CQSxDQXdCZSxFQTdDSCxFQXVETyxFQWhFRixBQTBDTSxHQVJ2QixDQWdCNEIsQ0EvQmIsQ0FURCxTQVRrQixDQWdFWixFQXREcEIsQUFTcUIsR0F1QkYsYUF1QkEsR0E3Q1MsQ0F1QlAsSUE5QkcsR0FaeEIsTUFpRWlCLGFBaEJqQixFQWlCcUIsRUFiSSw2QkFqQ1YsS0FqQmYsa0JBVUEsV0E4QndCLHNCQUN4QixNQXVCd0IsUUFiSCxJQWpDRyxVQStDeEIsb0VBNUNrQixXQStCSCxLQTlCZixRQStCQSIsImZpbGUiOiJjb250YWluZXJzL0FwcC5qcyIsInNvdXJjZVJvb3QiOiIvYXV0b19ob21lL2xnZWVydHNlbi9MYXlvdXRPdmVybGF5Q29uc2Vuc3VzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IGN5dG9zY2FwZSBmcm9tICdjeXRvc2NhcGUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uL2NvbnRhaW5lcnMvTmF2YmFyJztcbmltcG9ydCBIZWxwZXIgZnJvbSAnLi4vY2xhc3Nlcy9IZWxwZXInO1xuaW1wb3J0IE5laWdoYm9yIGZyb20gJy4uL2NsYXNzZXMvTmVpZ2hib3InO1xuXG5jb25zdCByZWFkQ2hhcnMgPSBbXCJBXCIsIFwiQ1wiLCBcIkdcIiwgXCJUXCJdO1xuXG52YXIgY3k7XG52YXIgbnVtYmVycyA9IFtdXG5mb3IgKHZhciBpID0gMDsgaSA8IDUxOyBpKyspIHtcbiAgbnVtYmVycy5wdXNoKGklMTApO1xufVxuXG52YXIgYnVzeSA9IGZhbHNlO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzdGVwOiAxLFxuICAgICAgc2VxdWVuY2U6IFwiXCIsXG4gICAgICByZWJ1aWxkU2VxdWVuY2U6IFwiXCIsXG4gICAgICBsZW5ndGhTZXF1ZW5jZTogNTAsXG4gICAgICBtaW5MZW5ndGhSZWFkOiA1LFxuICAgICAgbWF4TGVuZ3RoUmVhZDogMTAsXG4gICAgICBhbmltYXRpb25UZXh0OiBcIlwiLFxuICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICByZWFkczogW10sXG4gICAgICB2b2lzaW5zOiBbXSxcbiAgICAgIHNjb3JlczogW10sXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIGJ1c3k6IGZhbHNlLFxuICAgICAgd2FpdGluZ0Z1bmN0aW9uTGlzdDogW10sXG4gICAgICBzaG93UmVhZHM6IGZhbHNlXG4gICAgfVxuICB9XG5cbiAgY3JlYXRlR3JhcGgoZWxlbWVudHMsIGNhbGxiYWNrKSB7XG4gICAgY3kgPSBjeXRvc2NhcGUoe1xuICAgICAgY29udGFpbmVyOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3knKSxcbiAgICAgIGJveFNlbGVjdGlvbkVuYWJsZWQ6IGZhbHNlLFxuICAgICAgYXV0b3Vuc2VsZWN0aWZ5OiB0cnVlLFxuXG4gICAgICBsYXlvdXQ6IHtcbiAgICAgICAgbmFtZTogJ2NpcmNsZSdcbiAgICAgIH0sXG5cbiAgICAgIHN0eWxlOiBjeXRvc2NhcGUuc3R5bGVzaGVldCgpXG4gICAgICAgLnNlbGVjdG9yKCdub2RlJylcbiAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAnaGVpZ2h0JzogMjAsXG4gICAgICAgICAgICd3aWR0aCc6IDIwLFxuICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICcjZjFjNDBmJyxcbiAgICAgICAgICAgJ2NvbnRlbnQnOiAnZGF0YShyZWFkKScsXG4gICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAgJ3RyYW5zaXRpb24tcHJvcGVydHknOiAnb3BhY2l0eScsXG4gICAgICAgICAgICd0cmFuc2l0aW9uLWR1cmF0aW9uJzogJzAuM3MnXG4gICAgICAgICB9KVxuICAgICAgIC5zZWxlY3RvcignZWRnZScpXG4gICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgJ2xhYmVsJzogXCJkYXRhKGxhYmVsKVwiLFxuICAgICAgICAgICAnY3VydmUtc3R5bGUnOiAnYmV6aWVyJyxcbiAgICAgICAgICAgJ3dpZHRoJzogMSxcbiAgICAgICAgICAgJ2xpbmUtY29sb3InOiAnIzk1YTVhNicsXG4gICAgICAgICAgICdvcGFjaXR5JzogMSxcbiAgICAgICAgICAgJ3RhcmdldC1hcnJvdy1zaGFwZSc6ICd0cmlhbmdsZScsXG4gICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnIzk1YTVhNicsXG4gICAgICAgICAgICd0cmFuc2l0aW9uLXByb3BlcnR5JzogJ29wYWNpdHknLFxuICAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6ICcwLjNzJ1xuICAgICAgICAgfSlcbiAgICAgICAuc2VsZWN0b3IoJy5oaWRlTm9kZScpXG4gICAgICAgIC5jc3Moe1xuICAgICAgICAgICdvcGFjaXR5JzogMCxcbiAgICAgICAgfSlcbiAgICAgICAgLnNlbGVjdG9yKCcucGF0aCcpXG4gICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAnd2lkdGgnOiAzLFxuICAgICAgICAgICAgJ2xpbmUtY29sb3InOiAnI2U2N2UyMicsXG4gICAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyNkMzU0MDAnLFxuICAgICAgICAgICAgJ3RyYW5zaXRpb24tcHJvcGVydHknOiAnd2lkdGgsIGxpbmUtY29sb3IsIHRhcmdldC1hcnJvdy1jb2xvcicsXG4gICAgICAgICAgICAndHJhbnNpdGlvbi1kdXJhdGlvbic6ICcwLjNzJ1xuICAgICAgICAgIH0pXG4gICAgICAgICAgLnNlbGVjdG9yKCcuc2hvd1BhdGgnKVxuICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICd3aWR0aCc6IDIsXG4gICAgICAgICAgICAgICdsaW5lLWNvbG9yJzogJyMzNDk4ZGInLFxuICAgICAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJyMyOTgwYjknLFxuICAgICAgICAgICAgfSksXG5cbiAgICAgIGVsZW1lbnRzOiBlbGVtZW50c1xuICAgIH0pO1xuXG4gICAgY2FsbGJhY2soKTtcbiAgfVxuXG4gIGdlbmVyYXRlU2VxdWVuY2UoKSB7XG4gICAgbGV0IHNlcXVlbmNlID0gXCJcIjtcbiAgICBsZXQgdmlkZSA9IFwiXCI7XG4gICAgbGV0IHIgPSB0aGlzLnN0YXRlLmxlbmd0aFNlcXVlbmNlO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByOyBpKyspIHtcbiAgICAgIGxldCBtID0gSGVscGVyLnJhbmRvbSgwLCByZWFkQ2hhcnMubGVuZ3RoKTtcbiAgICAgIHNlcXVlbmNlICs9IHJlYWRDaGFyc1ttXTtcbiAgICAgIHZpZGUgKz0gXCItXCI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDIsIHNlcXVlbmNlOiBzZXF1ZW5jZX0pO1xuICAgIC8vIHRoaXMuc2V0U3RhdGUoe3N0ZXA6IDIsIHNlcXVlbmNlOiBcIkFBVEdDQ1RUQUNBQ1RHQUFHR1RUVEFcIn0pO1xuXG4gICAgLy8gb2Rvby5kZWZhdWx0KHsgZWw6JyNzZXF1ZW5jZUNvbnRhaW5lcicsIGZyb206IHZpZGUsIHRvOiBzZXF1ZW5jZSwgYW5pbWF0aW9uRGVsYXk6IDEwMDAsIGR1cmF0aW9uOiAyMDAwIH0pO1xuICB9XG5cbiAgY3JlYXRlUmVhZHMoKSB7XG4gICAgbGV0IHJlYWRzID0gW107XG4gICAgbGV0IGkgPSAwO1xuICAgIGxldCBzZXF1ZW5jZSA9IHRoaXMuc3RhdGUuc2VxdWVuY2U7XG4gICAgbGV0IGxvb3AgPSB0cnVlO1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICB3aGlsZShsb29wKSB7XG4gICAgICBsZXQgbWluID0gdGhpcy5zdGF0ZS5taW5MZW5ndGhSZWFkO1xuICAgICAgbGV0IG1heCA9IHRoaXMuc3RhdGUubWF4TGVuZ3RoUmVhZDtcbiAgICAgIGxldCByID0gSGVscGVyLnJhbmRvbShtaW4sIG1heCsxKTtcbiAgICAgIGxldCBmID0gaStyO1xuICAgICAgaWYoaStyID49IHNlcXVlbmNlLmxlbmd0aCkge1xuICAgICAgICBmID0gc2VxdWVuY2UubGVuZ3RoO1xuICAgICAgICBsb29wID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBsZXQgcmVhZCA9IHNlcXVlbmNlLnN1YnN0cmluZyhpLGYpO1xuICAgICAgcmVhZHMucHVzaChyZWFkKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3JlYWRzOiByZWFkc30pO1xuICAgICAgaWYodGhpcy5zdGF0ZS5idXN5IHx8IGJ1c3kpIHtcbiAgICAgICAgbGV0IHdhaXRpbmdGdW5jdGlvbkxpc3QgPSB0aGlzLnN0YXRlLndhaXRpbmdGdW5jdGlvbkxpc3Q7XG4gICAgICAgIHdhaXRpbmdGdW5jdGlvbkxpc3QucHVzaCh7XG4gICAgICAgICAgZnVuY3Rpb246IHRoaXMuc2hvd1JlYWQsXG4gICAgICAgICAgZGF0YTogW3RoaXMsIGNvdW50LCAgaSwgcmVhZF1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe3dhaXRpbmdGdW5jdGlvbkxpc3Q6IHdhaXRpbmdGdW5jdGlvbkxpc3R9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJ1c3kgPSB0cnVlO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtidXN5OiB0cnVlfSk7XG4gICAgICAgIHRoaXMuc2hvd1JlYWQoW3RoaXMsIGNvdW50LCAgaSwgcmVhZF0pO1xuICAgICAgfVxuICAgICAgbGV0IGIgPSBIZWxwZXIucmFuZG9tKDMsIDYpO1xuICAgICAgaSA9IGYtYjtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIC8vIHJlYWRzID0gW1xuICAgIC8vICAgXCJHQUFHR1RUVEFcIixcbiAgXHQvLyBcdFwiR0NDVFRBQ0FDXCIsXG4gIFx0Ly8gXHRcIkFDVEdBQUdHXCIsXG4gIFx0Ly8gXHRcIkFBVEdDQ1wiLFxuICBcdC8vIFx0XCJBQ0FDVEdcIlxuICAgIC8vIF07XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogMywgcmVhZHM6IHJlYWRzfSk7XG4gIH1cblxuICBzaG93UmVhZChkYXRhKSB7XG5cbiAgICBsZXQgc2VsZiA9IGRhdGFbMF07XG4gICAgbGV0IGNvdW50ID0gZGF0YVsxXTtcbiAgICBsZXQgaW5kZXggPSBkYXRhWzJdO1xuICAgIGxldCByZWFkID0gZGF0YVszXTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7YW5pbWF0ZTogZmFsc2V9KTtcblxuICAgICAgbGV0IGFuaW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvblRleHRcIik7XG4gICAgICBsZXQgciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVhZFwiICsgY291bnQpO1xuICAgICAgbGV0IHAxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXF1ZW5jZVwiICsgaW5kZXgpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgbGV0IHAyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkXCIgKyBjb3VudCArIFwiY2hhcjBcIikuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRpb25UZXh0OiByZWFkfSlcbiAgICAgIGxldCB0b3AxID0gcDEudG9wIC0gNTtcbiAgICAgIGFuaW0uc3R5bGUudG9wID0gdG9wMSArIFwicHhcIjtcbiAgICAgIGFuaW0uc3R5bGUubGVmdCA9IHAxLmxlZnQgKyBcInB4XCI7XG4gICAgICBhbmltLnN0eWxlLmZvbnRTaXplID0gXCIyNXB4XCI7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBzZWxmLnNldFN0YXRlKHthbmltYXRlOiB0cnVlfSk7XG5cbiAgICAgICAgbGV0IHRvcDIgPSBwMi50b3AgLSA4O1xuICAgICAgICBhbmltLnN0eWxlLnRvcCA9IHRvcDIgKyBcInB4XCI7XG4gICAgICAgIGFuaW0uc3R5bGUubGVmdCA9IHAyLmxlZnQgKyBcInB4XCI7XG4gICAgICAgIGFuaW0uc3R5bGUuZm9udFNpemUgPSBcIjIwcHhcIjtcbiAgICAgIH0sIDUwMCk7XG4gICAgICAoZnVuY3Rpb24oc2VsZiwgY291bnQsIGluZGV4LCByZWFkKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgICAgc2VsZi5zZXRTdGF0ZSh7YW5pbWF0ZTogZmFsc2V9KTtcbiAgICAgICAgICBzZWxmLmVuZEJ1c3koKTtcbiAgICAgICAgICBpZihzZWxmLnN0YXRlLnN0ZXAgPiAzKSB7XG4gICAgICAgICAgICBsZXQgYW5pbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pbWF0aW9uVGV4dFwiKTtcbiAgICAgICAgICAgIGFuaW0uc3R5bGUudG9wID0gXCItMTAwcHhcIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDk1MCk7XG4gICAgICB9KShzZWxmKTtcbiAgICB9LCA2MDApO1xuICAgIC8vIH0sIDAgKyAoMTIwMCAqIGNvdW50KSk7XG4gIH1cblxuICBzaHVmZmxlUmVhZHMoKSB7XG4gICAgdGhpcy5za2lwQW5pbWF0aW9ucygpO1xuICAgIGxldCBhbmltID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbmltYXRpb25UZXh0XCIpO1xuICAgIGFuaW0uc3R5bGUudG9wID0gXCItMTAwcHhcIjtcblxuICAgIGxldCBsb2wgPSB0aGlzLnN0YXRlLnJlYWRzO1xuICAgIC8vIGxldCBudW1zID0gW107XG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IGxvbC5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgbnVtcy5wdXNoKGkpO1xuICAgIC8vIH1cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbG9sLmxlbmd0aDsgaSsrKSB7XG4gICAgICBsZXQgaW5kZXggPSBIZWxwZXIucmFuZG9tKDAsIGxvbC5sZW5ndGgpO1xuICAgICAgbGV0IHIgPSBsb2xbaV07XG4gICAgICBsb2xbaV0gPSBsb2xbaW5kZXhdO1xuICAgICAgbG9sW2luZGV4XSA9IHI7XG5cblxuICAgICAgLy8gbGV0IG4gPSBudW1zW2ldO1xuICAgICAgLy8gbnVtc1tpXSA9IG51bXNbaW5kZXhdO1xuICAgICAgLy8gbnVtc1tpbmRleF0gPSBuO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhsb2wpO1xuICAgIC8vIGNvbnNvbGUubG9nKG51bXMpO1xuICAgIC8vIGxldCBwb3NpdGlvbnMgPSBbXVxuICAgIC8vXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IG51bXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgIGxldCByID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFkXCIgKyBpKTtcbiAgICAvLyAgIGxldCBwb3MgPSByLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vICAgcG9zaXRpb25zLnB1c2gocG9zKTtcbiAgICAvLyB9XG4gICAgLy9cbiAgICAvLyBmb3IobGV0IGkgPSAwOyBpIDwgbnVtcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgbGV0IHIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlYWRcIiArIGkpO1xuICAgIC8vICAgci5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcbiAgICAvLyAgIHIuc3R5bGUudG9wID0gcG9zaXRpb25zW2ldLnRvcCArIFwicHhcIjtcbiAgICAvLyAgIHIuc3R5bGUubGVmdCA9IHBvc2l0aW9uc1tpXS5sZWZ0ICsgXCJweFwiO1xuICAgIC8vIH1cbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiA0LCByZWFkczogbG9sfSk7XG4gIH1cblxuICBzaG93R3JhcGgoKSB7XG4gICAgbGV0IGVsZW1lbnRzID0gW107XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3RhdGUucmVhZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByID0ge307XG4gICAgICByLmdyb3VwID0gJ25vZGVzJztcbiAgICAgIHIuZGF0YSA9IHtcbiAgICAgICAgaWQ6ICdyJyArIGksXG4gICAgICAgIHJlYWQ6IHRoaXMuc3RhdGUucmVhZHNbaV0sXG4gICAgICAgIGxhYmVsOiAnPGgxPnNmamRxc3FrbGRqPGgxPidcbiAgICAgIH07XG4gICAgICByLmNsYXNzZXMgPSAnaGlkZU5vZGUnO1xuICAgICAgZWxlbWVudHMucHVzaChyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogNX0pO1xuICAgIHRoaXMuY3JlYXRlR3JhcGgoZWxlbWVudHMsIHRoaXMuc2hvd05vZGVzKTtcbiAgfVxuXG4gIG92ZXJsYXAoczEsIHMyKXtcbiAgXHRsZXQgbWF4ID0gMDtcbiAgICBmb3IobGV0IGkgPSAxOyBpIDw9IE1hdGgubWluKHMxLmxlbmd0aCwgczIubGVuZ3RoKTsgaSsrKSB7XG4gICAgICBpZihzMS5zdWJzdHIoczEubGVuZ3RoLWksIHMxLmxlbmd0aC0xKSA9PSBzMi5zdWJzdHIoMCwgaSkpIHtcbiAgICAgICAgaWYobWF4IDwgaSkge1xuICAgICAgICAgIC8vdXBkYXRlIG1heCBhbmQgc3RyXG4gICAgICAgICAgbWF4ID0gaTtcbiAgICAgICAgICAvL3Jlc3VsdCA9IHMxICsgczIuc3Vic3RyKGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vcmV0dXJuIHN0cjtcbiAgICByZXR1cm4gbWF4O1xuICB9XG5cbiAgZHJhd0VkZ2VzKCkge1xuICAgIGxldCB2b2lzaW5zID0gdGhpcy5zdGF0ZS52b2lzaW5zO1xuICAgIGxldCBzY29yZXMgPSB0aGlzLnN0YXRlLnNjb3JlcztcbiAgICBsZXQgcmVhZHMgPSB0aGlzLnN0YXRlLnJlYWRzO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHJlYWRzLmxlbmd0aDsgaSsrKXtcbiAgICAgIHZvaXNpbnNbaV0gPSBbXTtcbiAgICAgIHNjb3Jlc1tpXSA9IFtdO1xuICBcdFx0Zm9yKGxldCBqID0gMDsgaiA8IHJlYWRzLmxlbmd0aDsgaisrKXtcbiAgXHRcdFx0bGV0IHNjb3JlID0gMDtcbiAgXHRcdFx0aWYoaSAhPSBqKXtcbiAgXHRcdFx0XHRzY29yZSA9IHRoaXMub3ZlcmxhcChyZWFkc1tpXSwgcmVhZHNbal0pO1xuICBcdFx0XHRcdC8vIGlmKHNjb3JlID09IChpbnQpcmVhZHNbaV0uc2l6ZSgpKSByZWFkc1tqXS5zaXplKCkpXG5cbiAgXHRcdFx0XHQvL29uIG5lIGNvbXB0ZSBwYXMgbGVzIGNoZXZhdWNoZW1lbnRzIGF2ZWMgdW4gc2NvcmUgbnVsbGUgb3UgbGVzIGNoZXZhdWNoZW1lbnRzIGluY2x1c1xuICBcdFx0XHRcdGlmKHNjb3JlID4gMCkgLy8mJiBzY29yZSAhPSAoaW50KXJlYWRzW2pdLnNpemUoKSkvLyAmJiBzY29yZSA8IChpbnQpbWluKHJlYWRzW2ldLnNpemUoKSwgcmVhZHNbal0uc2l6ZSgpKSlcbiAgICAgICAgICAgIHZvaXNpbnNbaV0ucHVzaChqKTtcblxuICBcdFx0XHR9XG4gIFx0XHRcdHNjb3Jlc1tpXS5wdXNoKHNjb3JlKTtcbiAgXHRcdH1cbiAgXHR9XG4gICAgdGhpcy5zZXRTdGF0ZSh7dm9pc2luczogdm9pc2lucywgc2NvcmVzOiBzY29yZXN9KTtcblxuICAgIGxldCBlZGdlcyA9IFtdO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB2b2lzaW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgdm9pc2luc1tpXS5sZW5ndGg7IGorKykge1xuICAgICAgICBlZGdlcy5wdXNoKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpZDogJ2UnICsgaSArICd0JyArIHZvaXNpbnNbaV1bal0sXG4gICAgICAgICAgICBzb3VyY2U6ICdyJyArIGksXG4gICAgICAgICAgICB0YXJnZXQ6ICdyJyArIHZvaXNpbnNbaV1bal0sXG4gICAgICAgICAgICAvLyBsYWJlbDogXCJsYWJlbFwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBjbGFzc2VzOiAnaGlkZU5vZGUnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGN5LmFkZChlZGdlcyk7XG4gICAgdGhpcy5zaG93RWRnZXMoKTtcbiAgICB0aGlzLnNldFN0YXRlKHtzdGVwOiA2fSk7XG4gIH1cblxuICBzaG93Tm9kZXMoKSB7XG4gICAgbGV0IG5vZGVzID0gY3kubm9kZXMoKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbihpbmQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbm9kZXNbaW5kXS5yZW1vdmVDbGFzcygnaGlkZU5vZGUnKTtcbiAgICAgICAgfSwgMCArICgyMDAgKiBpbmQpKTtcbiAgICAgIH0pKGkpO1xuICAgIH1cbiAgfVxuXG4gIHNob3dFZGdlcygpIHtcbiAgICBsZXQgZWRnZXMgPSBjeS5lZGdlcygpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBlZGdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgKGZ1bmN0aW9uKGluZCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICBlZGdlc1tpbmRdLnJlbW92ZUNsYXNzKCdoaWRlTm9kZScpO1xuICAgICAgICB9LCAwICsgKDUwICogaW5kKSk7XG4gICAgICB9KShpKTtcbiAgICB9XG4gIH1cblxuICBuZWFyZXN0X25laWdoYm9yKCkge1xuICAgIE5laWdoYm9yLm5lYXJlc3RfbmVpZ2hib3IodGhpcy5zdGF0ZS52b2lzaW5zLCB0aGlzLnN0YXRlLnNjb3JlcywgYWxsUGF0aHMgPT4ge1xuICAgICAgbGV0IG1heCA9IDA7XG4gICAgICBmb3IobGV0IGkgPSAxOyBpIDwgYWxsUGF0aHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYoYWxsUGF0aHNbaV0uc2NvcmUgPiBhbGxQYXRoc1ttYXhdLnNjb3JlKSB7XG4gICAgICAgICAgbWF4ID0gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogNywgcGF0aDogYWxsUGF0aHNbbWF4XS5wYXRofSk7XG4gICAgICB0aGlzLnNob3dQYXRocyhhbGxQYXRocyk7XG4gICAgICAvLyB0aGlzLmhpZ2hsaWdodFBhdGgoYWxsUGF0aHNbbWF4XS5wYXRoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHNob3dQYXRocyhhbGxQYXRocykge1xuICAgIGxldCBlZGdlcyA9IGN5LmVkZ2VzKCk7XG4gICAgLy8gbGV0IHBhdGggPSB0aGlzLnN0YXRlLnBhdGg7XG4gICAgZm9yKGxldCBqID0gMDsgaiA8IGFsbFBhdGhzLmxlbmd0aDsgaisrKSB7XG4gICAgICAoZnVuY3Rpb24oc2VsZiwgaW5kLCBjb21wbGV0ZVBhdGgsIG1heCkge1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coY29tcGxldGVQYXRoLnNjb3JlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGNvbXBsZXRlUGF0aC5wYXRoKTtcbiAgICAgICAgICAgIGxldCBwYXRoID0gY29tcGxldGVQYXRoLnBhdGhcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aC0xOyBpKyspIHtcbiAgICAgICAgICAgICAgZWRnZXMuZ2V0RWxlbWVudEJ5SWQoJ2UnICsgcGF0aFtpXSArICd0JyArIHBhdGhbaSsxXSkuYWRkQ2xhc3MoJ3Nob3dQYXRoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgc2VsZi5oaWRlUGF0aChwYXRoKTtcbiAgICAgICAgICAgICAgaWYoaW5kID09IG1heCkge1xuICAgICAgICAgICAgICAgIHNlbGYuaGlnaGxpZ2h0UGF0aChzZWxmLnN0YXRlLnBhdGgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCA3NTApXG4gICAgICAgICAgfSwgMCArICgxMjUwICogaW5kKSk7XG4gICAgICAgIH0pKHRoaXMsIGosIGFsbFBhdGhzW2pdLCBhbGxQYXRocy5sZW5ndGgtMSk7XG4gICAgfVxuICB9XG5cbiAgaGlkZVBhdGgocGF0aCkge1xuICAgIGxldCBlZGdlcyA9IGN5LmVkZ2VzKCk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHBhdGgubGVuZ3RoLTE7IGkrKykge1xuICAgICAgZWRnZXMuZ2V0RWxlbWVudEJ5SWQoJ2UnICsgcGF0aFtpXSArICd0JyArIHBhdGhbaSsxXSkucmVtb3ZlQ2xhc3MoJ3Nob3dQYXRoJyk7XG4gICAgfVxuICB9XG5cbiAgaGlnaGxpZ2h0UGF0aChwYXRoKSB7XG4gICAgbGV0IGVkZ2VzID0gY3kuZWRnZXMoKTtcbiAgICAvLyBsZXQgcGF0aCA9IHRoaXMuc3RhdGUucGF0aDtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGF0aC5sZW5ndGgtMTsgaSsrKSB7XG4gICAgICAoZnVuY3Rpb24oaW5kKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIGVkZ2VzLmdldEVsZW1lbnRCeUlkKCdlJyArIHBhdGhbaW5kXSArICd0JyArIHBhdGhbaW5kKzFdKS5hZGRDbGFzcygncGF0aCcpO1xuICAgICAgICB9LCAwICsgKDUwMCAqIGluZCkpO1xuICAgICAgfSkoaSk7XG4gICAgfVxuICB9XG5cbiAgcmVidWlsZFNlcXVlbmNlKCkge1xuICAgIGxldCBzZXEgPSBcIlwiO1xuICAgIGxldCBwYXRoID0gdGhpcy5zdGF0ZS5wYXRoO1xuICBcdGZvcihsZXQgaSA9IDA7IGkgPCBwYXRoLmxlbmd0aDsgaSsrKXtcbiAgICAgIChmdW5jdGlvbihzZWxmLCBpbmQpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgbGV0IHNjb3JlID0gaW5kID09IHBhdGgubGVuZ3RoIC0gMSA/IDAgOiBzZWxmLnN0YXRlLnNjb3Jlc1twYXRoW2luZF1dW3BhdGhbaW5kKzFdXTtcbiAgICAgICAgICAvLyBpZihpbmQgPT0gMCkge1xuICAgICAgICAgIC8vICAgc2VxICs9IHNlbGYuc3RhdGUucmVhZHNbcGF0aFtpbmRdXTtcbiAgICAgICAgICAvLyB9XG4gICAgICAgICAgc2VxICs9IHNlbGYuc3RhdGUucmVhZHNbcGF0aFtpbmRdXS5zdWJzdHIoMCwgc2VsZi5zdGF0ZS5yZWFkc1twYXRoW2luZF1dLmxlbmd0aCAtIHNjb3JlKTtcbiAgICAgICAgICBzZWxmLnNldFN0YXRlKHtyZWJ1aWxkU2VxdWVuY2U6IHNlcX0pO1xuICAgICAgICB9LCAwICsgKDc1MCAqIGluZCkpO1xuICAgICAgfSkodGhpcywgaSk7XG5cbiAgXHR9XG4gICAgdGhpcy5zZXRTdGF0ZSh7c3RlcDogOCwgcmVidWlsZFNlcXVlbmNlOiBzZXF9KTtcbiAgfVxuXG4gIHNraXBBbmltYXRpb25zKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe3dhaXRpbmdGdW5jdGlvbkxpc3Q6IFtdfSk7XG4gICAgaWYodGhpcy5zdGF0ZS5zdGVwID09IDMpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dSZWFkczogdHJ1ZX0pO1xuICAgICAgbGV0IGFuaW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaW1hdGlvblRleHRcIik7XG4gICAgICBhbmltLnN0eWxlLnRvcCA9IFwiLTEwMHB4XCI7XG4gICAgfVxuICB9XG5cbiAgY2FsbEZ1bmN0aW9uKGNhbGxiYWNrLCBkYXRhKSB7XG4gICAgY2FsbGJhY2soZGF0YSk7XG4gIH1cblxuICBlbmRCdXN5KCkge1xuICAgIGJ1c3kgPSBmYWxzZTtcbiAgICB0aGlzLnNldFN0YXRlKHtidXN5OiBmYWxzZX0pO1xuICAgIGlmKHRoaXMuc3RhdGUud2FpdGluZ0Z1bmN0aW9uTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICB2YXIgZiA9IHRoaXMuc3RhdGUud2FpdGluZ0Z1bmN0aW9uTGlzdC5zaGlmdCgpO1xuICAgICAgdGhpcy5jYWxsRnVuY3Rpb24oZi5mdW5jdGlvbiwgZi5kYXRhKTtcbiAgICB9XG4gIH1cblxuICByZXNldCgpIHtcbiAgICAvLyBjeS5hZGQoW1xuICAgIC8vICAge2RhdGE6IHsgaWQ6ICdhYicsIHdlaWdodDogMywgc291cmNlOiAncjAnLCB0YXJnZXQ6ICdyOCcsIGxhYmVsOiBcImxhYmVsXCIgfSB9LFxuICAgIC8vICAge2RhdGE6IHsgaWQ6ICdhYycsIHdlaWdodDogMywgc291cmNlOiAncjEnLCB0YXJnZXQ6ICdyOScsIGxhYmVsOiBcImxhYmVsXCIgfSB9XG4gICAgLy8gXSk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGVwOiAxLFxuICAgICAgc2VxdWVuY2U6IFwiXCIsXG4gICAgICByZWJ1aWxkU2VxdWVuY2U6IFwiXCIsXG4gICAgICBsZW5ndGhTZXF1ZW5jZTogNTAsXG4gICAgICBtaW5MZW5ndGhSZWFkOiA2LFxuICAgICAgbWF4TGVuZ3RoUmVhZDogMTAsXG4gICAgICBhbmltYXRpb25UZXh0OiBcIlwiLFxuICAgICAgYW5pbWF0ZTogZmFsc2UsXG4gICAgICByZWFkczogW10sXG4gICAgICB2b2lzaW5zOiBbXSxcbiAgICAgIHNjb3JlczogW10sXG4gICAgICBwYXRoOiBbXSxcbiAgICAgIGJ1c3k6IGZhbHNlLFxuICAgICAgd2FpdGluZ0Z1bmN0aW9uTGlzdDogW10sXG4gICAgICBzaG93UmVhZHM6IGZhbHNlXG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJhcHBcIj5cblxuICAgICAgICA8TmF2YmFyXG4gICAgICAgICAgc3RlcD17dGhpcy5zdGF0ZS5zdGVwfVxuICAgICAgICAgIGxlbmd0aFNlcXVlbmNlPXt0aGlzLnN0YXRlLmxlbmd0aFNlcXVlbmNlfVxuICAgICAgICAgIG1pbkxlbmd0aFJlYWQ9e3RoaXMuc3RhdGUubWluTGVuZ3RoUmVhZH1cbiAgICAgICAgICBtYXhMZW5ndGhSZWFkPXt0aGlzLnN0YXRlLm1heExlbmd0aFJlYWR9XG5cbiAgICAgICAgICBjaGFuZ2VMZW5ndGhTZXF1ZW5jZT17ZSA9PiB0aGlzLnNldFN0YXRlKHtsZW5ndGhTZXF1ZW5jZTogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjaGFuZ2VNaW5MZW5ndGg9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7bWluTGVuZ3RoUmVhZDogZS50YXJnZXQudmFsdWV9KX1cbiAgICAgICAgICBjaGFuZ2VNYXhMZW5ndGg9e2UgPT4gdGhpcy5zZXRTdGF0ZSh7bWF4TGVuZ3RoUmVhZDogZS50YXJnZXQudmFsdWV9KX1cblxuICAgICAgICAgIGdlbmVyYXRlU2VxdWVuY2U9eygpID0+IHRoaXMuZ2VuZXJhdGVTZXF1ZW5jZSgpfVxuICAgICAgICAgIGNyZWF0ZVJlYWRzPXsoKSA9PiB0aGlzLmNyZWF0ZVJlYWRzKCl9XG4gICAgICAgICAgc2h1ZmZsZVJlYWRzPXsoKSA9PiB0aGlzLnNodWZmbGVSZWFkcygpfVxuICAgICAgICAgIHNob3dHcmFwaD17KCkgPT4gdGhpcy5zaG93R3JhcGgoKX1cbiAgICAgICAgICBkcmF3RWRnZXM9eygpID0+IHRoaXMuZHJhd0VkZ2VzKCl9XG4gICAgICAgICAgbmVhcmVzdF9uZWlnaGJvcj17KCkgPT4gdGhpcy5uZWFyZXN0X25laWdoYm9yKCl9XG4gICAgICAgICAgcmVidWlsZFNlcXVlbmNlPXsoKSA9PiB0aGlzLnJlYnVpbGRTZXF1ZW5jZSgpfVxuICAgICAgICAgIHJlc2V0PXsoKSA9PiB0aGlzLnJlc2V0KCl9XG4gICAgICAgIC8+XG5cbiAgICAgICAgPGg2IGlkPVwiYW5pbWF0aW9uVGV4dFwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5hbmltYXRlID8gJ2FuaW1hdGUnIDogJyd9PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLmFuaW1hdGlvblRleHQuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gaWQ9e1wiYW5pbWF0aW9uXCIgKyBpbmRleH0gY2xhc3NOYW1lPXtcInJlYWRcIiArIGxldHRlcn0+e2xldHRlcn08L3NwYW4+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvaDY+XG5cbiAgICAgICAgPGRpdiBpZD1cInJlc2V0XCI+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiIG9uQ2xpY2s9eygpID0+IHRoaXMucmVzZXQoKX0+UkVTRVQ8L2J1dHRvbj5cbiAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtd2FybmluZ1wiIG9uQ2xpY2s9eygpID0+IHRoaXMuc2tpcEFuaW1hdGlvbnMoKX0+U0tJUCBBTklNQVRJT05TPC9idXR0b24+ICovfVxuICAgICAgICA8L2Rpdj5cblxuXG4gICAgICAgIDxkaXYgaWQ9XCJncmFwaHNcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwic2lkZWJhclwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGVwID4gNCA/ICdvcGVuJyA6ICcnfT5cbiAgICAgICAgICAgIHt0aGlzLnN0YXRlLnN0ZXAgPT0gMSA/XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JhcHBlclwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNtLTEyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJkaXNwbGF5LTJcIj5PdmVybGFwIExheW91dCBDb25zZW5zdXM8L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDM+TWFkZSBieTo8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDQ+QW50b2luZSBHb3V5b248L2g0PlxuICAgICAgICAgICAgICAgICAgICA8aDQ+TGVlIEdlZXJ0c2VuPC9oND5cbiAgICAgICAgICAgICAgICAgICAgPGg0PlRoaWJhdWx0IE9kb3JpY288L2g0PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB7dGhpcy5zdGF0ZS5zdGVwIDwgNSA/XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJzZXF1ZW5jZUNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoNj5cbiAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnNlcXVlbmNlLnNwbGl0KCcnKS5tYXAoKGxldHRlciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gaWQ9e1wic2VxdWVuY2VcIiArIGluZGV4fSBjbGFzc05hbWU9e1wicmVhZFwiICsgbGV0dGVyfT57bGV0dGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvaDY+XG4gICAgICAgICAgICAgICAgey8qIDxoNiBpZD1cIm51bWJlcnNcIj5cbiAgICAgICAgICAgICAgICAgIHtudW1iZXJzLm1hcCgobGV0dGVyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT57bGV0dGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvaDY+ICovfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeyB0aGlzLnN0YXRlLnN0ZXAgPCA3ID9cbiAgICAgICAgICAgICAgPGRpdiBpZD1cInJlYWRzQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInJlYWRzQm94XCIgY2xhc3NOYW1lPXt0aGlzLnN0YXRlLnNob3dSZWFkcyA/IFwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXIgc2hvd1JlYWRzXCIgOiBcInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCJ9PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmVhZHMubWFwKChyZWFkLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGlkPXtcInJlYWRcIiArIGluZGV4fSBjbGFzc05hbWU9XCJyZWFkIGNvbC1tZC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAge3JlYWQuc3BsaXQoJycpLm1hcCgobGV0dGVyLCBpbmRleDIpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXgyfSBpZD17XCJyZWFkXCIgKyBpbmRleCArIFwiY2hhclwiICsgaW5kZXgyfSBjbGFzc05hbWU9e1wicmVhZFwiICsgbGV0dGVyfT57bGV0dGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHsgdGhpcy5zdGF0ZS5zdGVwID4gNyA/XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJyZWJ1aWxkQ29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cInJlYnVpbGRTZXF1ZW5jZVwiPlxuICAgICAgICAgICAgICAgICAgPGg2PlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZXF1ZW5jZS5zcGxpdCgnJykubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gaWQ9e1wic2VxdWVuY2VcIiArIGluZGV4fSBjbGFzc05hbWU9e1wicmVhZFwiICsgbGV0dGVyfT57bGV0dGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgIDxici8+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnN0YXRlLnJlYnVpbGRTZXF1ZW5jZS5zcGxpdCgnJykubWFwKChsZXR0ZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0gaWQ9e1wic2VxdWVuY2VcIiArIGluZGV4fSBjbGFzc05hbWU9e1wicmVhZFwiICsgbGV0dGVyfT57bGV0dGVyfTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2g2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaWQ9XCJjeVwiIGNsYXNzTmFtZT17dGhpcy5zdGF0ZS5zdGVwID4gNCA/ICdvcGVuJyA6ICcnfT48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgICNhbmltYXRpb25UZXh0IHtcbiAgICAgICAgICAgIC8vIG9wYWNpdHk6IDA7XG4gICAgICAgICAgICB0b3A6IDIwMHB4O1xuICAgICAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICAgICAgei1pbmRleDogMTAwMDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmVlbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2FuaW1hdGlvblRleHQuYW5pbWF0ZSB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0b3AgLjVzIGxpbmVhciwgbGVmdCAuNXMgbGluZWFyLCBmb250LXNpemUgLjVzIGxpbmVhcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3Jlc2V0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IDEwMDA7XG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjZ3JhcGhzIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZWJhciB7XG4gICAgICAgICAgICB3aWR0aCAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDUlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogI2VjZjBmMTtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAxcyBlYXNlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIC8vIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2lkZWJhci5vcGVuIHtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYygyNXZoIC0gNTZweCk7O1xuICAgICAgICAgIH1cbiAgICAgICAgICAjc2VxdWVuY2VDb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDI1cHg7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgfVxuICAgICAgICAgICNyZWJ1aWxkU2VxdWVuY2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgIC8vIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgI3NlcXVlbmNlQ29udGFpbmVyIGg2LCAjcmVidWlsZFNlcXVlbmNlIGg2LCAjYW5pbWF0aW9uVGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgICNjeSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyg4MHZoIC0gNTZweCk7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMXMgZWFzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMjVweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLndyYXBwZXIgaDEge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJvdyB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTZweCk7XG4gICAgICAgICAgICBwYWRkaW5nIDI1cHggMTBweDtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDRweDtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5zaG93UmVhZHMgLnJlYWQge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWRBIHtcbiAgICAgICAgICAgIGNvbG9yOiAjMjdhZTYwO1xuICAgICAgICAgIH1cbiAgICAgICAgICAucmVhZEMge1xuICAgICAgICAgICAgY29sb3I6ICMyOTgwYjk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5yZWFkRyB7XG4gICAgICAgICAgICBjb2xvcjogI2MwMzkyYjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnJlYWRUIHtcbiAgICAgICAgICAgIGNvbG9yOiAjOGU0NGFkO1xuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19 */\n/*@ sourceURL=containers/App.js */"
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