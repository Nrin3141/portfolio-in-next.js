webpackHotUpdate("static/development/pages/photography.js",{

/***/ "./components/Gallery/index.js":
/*!*************************************!*\
  !*** ./components/Gallery/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Gallery; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);










var Gallery =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Gallery, _React$Component);

  function Gallery(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Gallery);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Gallery).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleExtend", function (index) {
      _this.setState({
        extend: true,
        index: index
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleCollapse", function () {
      _this.setState({
        extend: false,
        index: 0
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleNextImage", function () {
      _this.setState(function (state) {
        return {
          index: _this.state.index + 1
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleLastImage", function () {
      _this.setState(function (state) {
        return {
          index: _this.state.index - 1
        };
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "componentDidUpdate", function () {
      console.log(_this.state);
    });

    _this.state = {
      extend: false,
      index: 0
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1489442561"
      }, this.state.extend ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1489442561"
      }, this.state.index < this.props.images.length ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleNextImage,
        className: "jsx-1489442561"
      }, "Next") : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/gallery/" + this.props.images[this.state.index],
        className: "jsx-1489442561" + " " + "large"
      }), this.state.index > 0 ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleLastImage,
        className: "jsx-1489442561"
      }, "Last") : null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleCollapse,
        className: "jsx-1489442561"
      }, "X")) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-1489442561" + " " + "masonry"
      }, this.props.images.map(function (image, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          onClick: function onClick() {
            return _this2.handleExtend(index);
          },
          key: index,
          src: "/static/gallery/" + image,
          className: "jsx-1489442561" + " " + "item"
        });
      })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1489442561"
      }, ".masonry.jsx-1489442561{-webkit-column-count:4;column-count:4;-webkit-column-gap:0.5em;column-gap:0.5em;}.item.jsx-1489442561{display:inline-block;background-color:#eee;margin:0 0 0.5em;width:100%;}.large.jsx-1489442561{width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25yaW4vcHJvamVjdHMvcG9ydGZvbGlvLXBhZ2UvY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEb0IsQUFHNEIsQUFJTSxBQU1WLFdBQ2IsVUFOd0IsaUJBSkwsS0FLQSxpQkFDTixXQUNiLFNBTkEiLCJmaWxlIjoiL2hvbWUvbnJpbi9wcm9qZWN0cy9wb3J0Zm9saW8tcGFnZS9jb21wb25lbnRzL0dhbGxlcnkvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbGxlcnkgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZXh0ZW5kOiBmYWxzZSxcbiAgICAgIGluZGV4OiAwXG4gICAgfTtcbiAgfVxuICBoYW5kbGVFeHRlbmQgPSBpbmRleCA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4dGVuZDogdHJ1ZSwgaW5kZXggfSk7XG4gIH07XG4gIGhhbmRsZUNvbGxhcHNlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHRlbmQ6IGZhbHNlLCBpbmRleDogMCB9KTtcbiAgfTtcbiAgaGFuZGxlTmV4dEltYWdlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgaW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggKyAxIH0pKTtcbiAgfTtcbiAgaGFuZGxlTGFzdEltYWdlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgaW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggLSAxIH0pKTtcbiAgfTtcbiAgY29tcG9uZW50RGlkVXBkYXRlID0gKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICB9O1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIHt0aGlzLnN0YXRlLmV4dGVuZCA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5kZXggPCB0aGlzLnByb3BzLmltYWdlcy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVOZXh0SW1hZ2V9Pk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgc3JjPXtcIi9zdGF0aWMvZ2FsbGVyeS9cIiArIHRoaXMucHJvcHMuaW1hZ2VzW3RoaXMuc3RhdGUuaW5kZXhdfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAge3RoaXMuc3RhdGUuaW5kZXggPiAwID8gKFxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMuaGFuZGxlTGFzdEltYWdlfT5MYXN0PC9idXR0b24+XG4gICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dGhpcy5oYW5kbGVDb2xsYXBzZX0+WDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFzb25yeVwiPlxuICAgICAgICAgICAge3RoaXMucHJvcHMuaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZUV4dGVuZChpbmRleCl9XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcbiAgICAgICAgICAgICAgICBzcmM9e1wiL3N0YXRpYy9nYWxsZXJ5L1wiICsgaW1hZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1hc29ucnkge1xuICAgICAgICAgICAgY29sdW1uLWNvdW50OiA0O1xuICAgICAgICAgICAgY29sdW1uLWdhcDogMC41ZW07XG4gICAgICAgICAgfVxuICAgICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAubGFyZ2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/nrin/projects/portfolio-page/components/Gallery/index.js */"));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=photography.js.aff4dcbecb83efcf65e6.hot-update.js.map