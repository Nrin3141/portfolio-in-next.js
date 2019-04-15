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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleExtend", function (image) {
      _this.setState({
        extend: true
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleCollapse", function () {
      _this.setState({
        extend: false
      });
    });

    _this.state = {
      extend: false,
      image: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Gallery, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.state.extend) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", null, "Next"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          src: "/static/gallery" + this.state.image
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", null, "Last"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
          onClick: this.handleCollapse
        }, "X"));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
          className: "jsx-2794018089" + " " + "masonry"
        }, this.props.images.map(function (image, index) {
          return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
            onClick: function onClick() {
              return _this2.handleExtend(image);
            },
            key: index,
            src: "/static/gallery/" + image,
            className: "jsx-2794018089" + " " + "item"
          });
        }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
          id: "2794018089"
        }, ".masonry.jsx-2794018089{-webkit-column-count:4;column-count:4;-webkit-column-gap:0.5em;column-gap:0.5em;}.item.jsx-2794018089{background-color:#eee;display:inline-block;margin:0 0 0.5em;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25yaW4vcHJvamVjdHMvcG9ydGZvbGlvLXBhZ2UvY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNDc0IsQUFHOEIsQUFJTyxzQkFDRCxnQkFKSixLQUtBLGlCQUNOLFdBQ2IsU0FOQSIsImZpbGUiOiIvaG9tZS9ucmluL3Byb2plY3RzL3BvcnRmb2xpby1wYWdlL2NvbXBvbmVudHMvR2FsbGVyeS9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBjb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FsbGVyeSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHRlbmQ6IGZhbHNlLFxuICAgICAgaW1hZ2U6IFwiXCJcbiAgICB9O1xuICB9XG4gIGhhbmRsZUV4dGVuZCA9IGltYWdlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXh0ZW5kOiB0cnVlIH0pO1xuICB9O1xuICBoYW5kbGVDb2xsYXBzZSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgZXh0ZW5kOiBmYWxzZSB9KTtcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmV4dGVuZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8YnV0dG9uPk5leHQ8L2J1dHRvbj5cbiAgICAgICAgICA8aW1nIHNyYz17XCIvc3RhdGljL2dhbGxlcnlcIiArIHRoaXMuc3RhdGUuaW1hZ2V9IC8+XG4gICAgICAgICAgPGJ1dHRvbj5MYXN0PC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbGxhcHNlfT5YPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXNvbnJ5XCI+XG4gICAgICAgICAge3RoaXMucHJvcHMuaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXh0ZW5kKGltYWdlKX1cbiAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXG4gICAgICAgICAgICAgIHNyYz17XCIvc3RhdGljL2dhbGxlcnkvXCIgKyBpbWFnZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAubWFzb25yeSB7XG4gICAgICAgICAgICAgIGNvbHVtbi1jb3VudDogNDtcbiAgICAgICAgICAgICAgY29sdW1uLWdhcDogMC41ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW07XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIl19 */\n/*@ sourceURL=/home/nrin/projects/portfolio-page/components/Gallery/index.js */"));
      }
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=photography.js.055ab696d8cfb61f451e.hot-update.js.map