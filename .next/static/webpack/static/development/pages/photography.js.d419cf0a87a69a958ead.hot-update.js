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
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Footer */ "./components/Footer/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");












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

      document.addEventListener("keydown", _this.handleKey);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleCollapse", function () {
      _this.setState({
        extend: false,
        index: 0
      });

      document.removeEventListener("keydown", _this.handleKey);
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

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__["default"])(_this)), "handleKey", function (e) {
      if (e.key === "Escape") {
        _this.handleCollapse();
      }

      if (e.key === "ArrowRight") {
        _this.handleNextImage();
      }

      if (e.key === "ArrowLeft") {
        _this.handleLastImage();
      }
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
        className: "jsx-3043780939"
      }, this.state.extend ? react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3043780939" + " " + "slideshow-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.state.index > 0 ? this.handleLastImage : null,
        className: "jsx-3043780939"
      }, "Last"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3043780939" + " " + "img-container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
        src: "/static/gallery/" + this.props.images[this.state.index],
        className: "jsx-3043780939" + " " + "large"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        id: "collapse-button-container",
        className: "jsx-3043780939"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.handleCollapse,
        className: "jsx-3043780939"
      }, "X"))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("button", {
        onClick: this.state.index < this.props.images.length - 1 ? this.handleNextImage : null,
        className: "jsx-3043780939"
      }, "Next")) : react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3043780939"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_10__["default"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3043780939" + " " + "container"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
        className: "jsx-3043780939"
      }, "Gallery"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
        className: "jsx-3043780939"
      }, "This is a gallery showcasing some of my photography!"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
        className: "jsx-3043780939" + " " + "masonry"
      }, this.props.images.map(function (image, index) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("img", {
          onClick: function onClick() {
            return _this2.handleExtend(index);
          },
          key: index,
          src: "/static/gallery/" + image,
          className: "jsx-3043780939" + " " + "item"
        });
      }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_9__["default"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "3043780939"
      }, ".masonry.jsx-3043780939{-webkit-column-count:1;column-count:1;-webkit-column-gap:0.5em;column-gap:0.5em;}@media only screen and (min-width:400px){.masonry.jsx-3043780939{-webkit-column-count:2;column-count:2;}}@media only screen and (min-width:800px){.masonry.jsx-3043780939{-webkit-column-count:3;column-count:3;}}@media only screen and (min-width:1600px){.masonry.jsx-3043780939{-webkit-column-count:4;column-count:4;}}.container.jsx-3043780939{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:0 5% 0 5%;}#collapse-button-container.jsx-3043780939{position:absolute;top:2%;width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}#collapse-button-container.jsx-3043780939 button.jsx-3043780939{border-radius:10%;padding:0 2%;}.img-container.jsx-3043780939{position:relative;background:black;height:100vh;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;}.slideshow-container.jsx-3043780939{display:grid;grid-template-columns:1fr 20fr 1fr;width:100%;height:100vh;}button.jsx-3043780939{background:black;border:none;color:white;}button.jsx-3043780939:hover{background:grey;}.item.jsx-3043780939{display:inline-block;background-color:#eee;margin:0 0 0.5em;width:100%;cursor:pointer;}.large.jsx-3043780939{max-height:100%;max-width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL25yaW4vcHJvamVjdHMvcG9ydGZvbGlvLXBhZ2UvY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVGb0IsQUFHNEIsQUFNRSxBQUtBLEFBS0EsQUFJSixBQU1LLEFBT0EsQUFJQSxBQVNMLEFBTUksQUFLRCxBQUdLLEFBT0wsYUFwQm1CLEdBV3JDLEFBVWlCLENBZkgsQ0ExQkwsQUFPTSxBQUlJLEdBdUJLLElBakNYLElBMEJDLEVBbkJkLEFBa0NBLElBOUJlLENBVkEsRUE1QkksQUFNakIsQUFLQSxBQUtBLEdBc0NGLEVBT21CLEtBdEJKLEFBUUYsV0FDRSxDQWNGLFdBQ0ksQ0FkakIsRUE3QndCLE1BbkJ4QixNQStEQSx3QkFuQ3lCLFlBV0EsOEJBbkJKLHlEQVNyQixZQVdxQix3QkFuQkQsa0JBQ3BCLG1EQW1Cb0Isa0JBQ3BCIiwiZmlsZSI6Ii9ob21lL25yaW4vcHJvamVjdHMvcG9ydGZvbGlvLXBhZ2UvY29tcG9uZW50cy9HYWxsZXJ5L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi4vRm9vdGVyXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vTWVudVwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYWxsZXJ5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGV4dGVuZDogZmFsc2UsXG4gICAgICBpbmRleDogMFxuICAgIH07XG4gIH1cbiAgaGFuZGxlRXh0ZW5kID0gaW5kZXggPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHRlbmQ6IHRydWUsIGluZGV4IH0pO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5KTtcbiAgfTtcbiAgaGFuZGxlQ29sbGFwc2UgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGV4dGVuZDogZmFsc2UsIGluZGV4OiAwIH0pO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIHRoaXMuaGFuZGxlS2V5KTtcbiAgfTtcbiAgaGFuZGxlTmV4dEltYWdlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgaW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggKyAxIH0pKTtcbiAgfTtcbiAgaGFuZGxlTGFzdEltYWdlID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgaW5kZXg6IHRoaXMuc3RhdGUuaW5kZXggLSAxIH0pKTtcbiAgfTtcbiAgaGFuZGxlS2V5ID0gZSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICB0aGlzLmhhbmRsZUNvbGxhcHNlKCk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIpIHtcbiAgICAgIHRoaXMuaGFuZGxlTmV4dEltYWdlKCk7XG4gICAgfVxuICAgIGlmIChlLmtleSA9PT0gXCJBcnJvd0xlZnRcIikge1xuICAgICAgdGhpcy5oYW5kbGVMYXN0SW1hZ2UoKTtcbiAgICB9XG4gIH07XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAge3RoaXMuc3RhdGUuZXh0ZW5kID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2xpZGVzaG93LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXRlLmluZGV4ID4gMCA/IHRoaXMuaGFuZGxlTGFzdEltYWdlIDogbnVsbH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTGFzdFxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICBzcmM9e1wiL3N0YXRpYy9nYWxsZXJ5L1wiICsgdGhpcy5wcm9wcy5pbWFnZXNbdGhpcy5zdGF0ZS5pbmRleF19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb2xsYXBzZS1idXR0b24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXt0aGlzLmhhbmRsZUNvbGxhcHNlfT5YPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUuaW5kZXggPCB0aGlzLnByb3BzLmltYWdlcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuaGFuZGxlTmV4dEltYWdlXG4gICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBOZXh0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPE1lbnUgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxoMT5HYWxsZXJ5PC9oMT5cbiAgICAgICAgICAgICAgPHA+VGhpcyBpcyBhIGdhbGxlcnkgc2hvd2Nhc2luZyBzb21lIG9mIG15IHBob3RvZ3JhcGh5ITwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYXNvbnJ5XCI+XG4gICAgICAgICAgICAgICAge3RoaXMucHJvcHMuaW1hZ2VzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuaGFuZGxlRXh0ZW5kKGluZGV4KX1cbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIHNyYz17XCIvc3RhdGljL2dhbGxlcnkvXCIgKyBpbWFnZX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYXNvbnJ5IHtcbiAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMTtcbiAgICAgICAgICAgIGNvbHVtbi1nYXA6IDAuNWVtO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDAwcHgpIHtcbiAgICAgICAgICAgIC5tYXNvbnJ5IHtcbiAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiAyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gICAgICAgICAgICAubWFzb25yeSB7XG4gICAgICAgICAgICAgIGNvbHVtbi1jb3VudDogMztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxNjAwcHgpIHtcbiAgICAgICAgICAgIC5tYXNvbnJ5IHtcbiAgICAgICAgICAgICAgY29sdW1uLWNvdW50OiA0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgNSUgMCA1JTtcbiAgICAgICAgICB9XG4gICAgICAgICAgI2NvbGxhcHNlLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAyJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIH1cbiAgICAgICAgICAjY29sbGFwc2UtYnV0dG9uLWNvbnRhaW5lciBidXR0b24ge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAlO1xuICAgICAgICAgICAgcGFkZGluZzogMCAyJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmltZy1jb250YWluZXIge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnNsaWRlc2hvdy1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDIwZnIgMWZyO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgICAgICAgICAgbWFyZ2luOiAwIDAgMC41ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmxhcmdlIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0= */\n/*@ sourceURL=/home/nrin/projects/portfolio-page/components/Gallery/index.js */"));
    }
  }]);

  return Gallery;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);



/***/ })

})
//# sourceMappingURL=photography.js.d419cf0a87a69a958ead.hot-update.js.map