webpackHotUpdate(4,{

/***/ "./containers/App.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__containers_Navbar__ = __webpack_require__("./containers/Navbar.js");
var _jsxFileName = "/home/ubuntu/workspace/containers/App.js";


(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

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
      minLengthRead: 5,
      maxLengthRead: 10,
      reads: []
    };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", {
        id: "app",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        className: "jsx-3636536621"
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__containers_Navbar__["a" /* default */], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        }
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        },
        className: "jsx-3636536621"
      }, "Min:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "text",
        value: this.state.minLengthRead,
        onChange: function onChange(e) {
          return _this2.setState({
            minLengthRead: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        className: "jsx-3636536621"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        },
        className: "jsx-3636536621"
      }, "Max:"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("input", {
        type: "number",
        value: this.state.maxLengthRead,
        onChange: function onChange(e) {
          return _this2.setState({
            maxLengthRead: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        },
        className: "jsx-3636536621"
      }), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("button", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        className: "jsx-3636536621"
      }, "Generate reads"), __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_styled_jsx_style___default.a, {
        styleId: "3636536621",
        css: "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhaW5lcnMvQXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCb0IiLCJmaWxlIjoiY29udGFpbmVycy9BcHAuanMiLCJzb3VyY2VSb290IjoiL2hvbWUvdWJ1bnR1L3dvcmtzcGFjZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vY29udGFpbmVycy9OYXZiYXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtaW5MZW5ndGhSZWFkOiA1LFxuICAgICAgbWF4TGVuZ3RoUmVhZDogMTAsXG4gICAgICByZWFkczogW11cbiAgICB9XG59XG4gICAgXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cImFwcFwiPlxuXG4gICAgICAgIDxOYXZiYXIvPlxuICAgICAgICBcbiAgICAgICAgPGxhYmVsPk1pbjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5taW5MZW5ndGhSZWFkfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHttaW5MZW5ndGhSZWFkOiBlLnRhcmdldC52YWx1ZX0pfS8+XG4gICAgICAgIDxsYWJlbD5NYXg6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiB2YWx1ZT17dGhpcy5zdGF0ZS5tYXhMZW5ndGhSZWFkfSBvbkNoYW5nZT17ZSA9PiB0aGlzLnNldFN0YXRlKHttYXhMZW5ndGhSZWFkOiBlLnRhcmdldC52YWx1ZX0pfS8+XG4gICAgICAgIDxidXR0b24+R2VuZXJhdGUgcmVhZHM8L2J1dHRvbj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0iXX0= */\n/*@ sourceURL=containers/App.js */"
      }));
    }
  }, {
    key: "__reactstandin__regenerateByEval",
    // @ts-ignore
    value: function __reactstandin__regenerateByEval(key, code) {
      // @ts-ignore
      this[key] = eval(code);
    }
  }]);

  return App;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);


;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "/home/ubuntu/workspace/containers/App.js");
  leaveModule(module);
})();

;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.f7c1764ab0d51005a78f.hot-update.js.map