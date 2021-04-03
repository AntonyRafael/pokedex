webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Projects\\Next\\Rotas\\pokedex\\pages\\index.js",
    _s = $RefreshSig$();


function Home() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      pokemos = _useState[0],
      setPokemons = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    fetch("https://pokeapi.co/api/v2/pokedex/2/").then(function (respostaDoServer) {
      if (respostaDoServer.ok) {
        return respostaDoServer.json();
      }
    }).then(function (respostaEmObjeto) {
      console.log(respostaEmObjeto.pokemon_entries);
      setPokemons(respostaEmObjeto.pokemon_entries);
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: ["Pokedex - Antony", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
      children: pokemos.map(function (pokemom) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {}, pokemom.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 5
  }, this);
}

_s(Home, "7BPXpXV/JIRDPbr24hpg1O98m94=");

_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9rZW1vcyIsInNldFBva2Vtb25zIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZlciIsIm9rIiwianNvbiIsInJlc3Bvc3RhRW1PYmpldG8iLCJjb25zb2xlIiwibG9nIiwicG9rZW1vbl9lbnRyaWVzIiwibWFwIiwicG9rZW1vbSIsImVudHJ5X251bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDdEJDLE9BRHNCO0FBQUEsTUFDYkMsV0FEYTs7QUFHN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsZ0JBQUQsRUFBc0I7QUFDMUIsVUFBSUEsZ0JBQWdCLENBQUNDLEVBQXJCLEVBQXlCO0FBQ3ZCLGVBQU9ELGdCQUFnQixDQUFDRSxJQUFqQixFQUFQO0FBQ0Q7QUFDRixLQUxILEVBTUdILElBTkgsQ0FNUSxVQUFDSSxnQkFBRCxFQUFzQjtBQUMxQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLGdCQUFnQixDQUFDRyxlQUE3QjtBQUNBVixpQkFBVyxDQUFDTyxnQkFBZ0IsQ0FBQ0csZUFBbEIsQ0FBWDtBQUNELEtBVEg7QUFVRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSxnREFFRTtBQUFBLGdCQUNLWCxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDdEI7QUFBQSx1RkFBU0EsT0FBTyxDQUFDQyxZQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0gsT0FGQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVVEOztHQTFCdUJoQixJOztLQUFBQSxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI4N2JhZjgzYWVjNzE5MTE2MjljLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCBbcG9rZW1vcywgc2V0UG9rZW1vbnNdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2VkZXgvMi9cIilcclxuICAgICAgLnRoZW4oKHJlc3Bvc3RhRG9TZXJ2ZXIpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9zdGFEb1NlcnZlci5vaykge1xyXG4gICAgICAgICAgcmV0dXJuIHJlc3Bvc3RhRG9TZXJ2ZXIuanNvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHJlc3Bvc3RhRW1PYmpldG8pID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb3N0YUVtT2JqZXRvLnBva2Vtb25fZW50cmllcyk7XHJcbiAgICAgICAgc2V0UG9rZW1vbnMocmVzcG9zdGFFbU9iamV0by5wb2tlbW9uX2VudHJpZXMpO1xyXG4gICAgICB9KTtcclxuICB9LCBbXSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICBQb2tlZGV4IC0gQW50b255XHJcbiAgICAgIDx1bD5cclxuICAgICAgICAgIHtwb2tlbW9zLm1hcCgocG9rZW1vbSkgPT4ge1xyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e3Bva2Vtb20uZW50cnlfbnVtYmVyfT48L2xpPlxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=