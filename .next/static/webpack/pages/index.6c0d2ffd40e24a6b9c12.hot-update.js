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
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
          children: pokemom.pokemomspecies.name
        }, pokemom.entry_number, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9rZW1vcyIsInNldFBva2Vtb25zIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9zdGFEb1NlcnZlciIsIm9rIiwianNvbiIsInJlc3Bvc3RhRW1PYmpldG8iLCJjb25zb2xlIiwibG9nIiwicG9rZW1vbl9lbnRyaWVzIiwibWFwIiwicG9rZW1vbSIsInBva2Vtb21zcGVjaWVzIiwibmFtZSIsImVudHJ5X251bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUE7O0FBQUEsa0JBQ0VDLHNEQUFRLENBQUMsRUFBRCxDQURWO0FBQUEsTUFDdEJDLE9BRHNCO0FBQUEsTUFDYkMsV0FEYTs7QUFHN0JDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxTQUFLLENBQUMsc0NBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsZ0JBQUQsRUFBc0I7QUFDMUIsVUFBSUEsZ0JBQWdCLENBQUNDLEVBQXJCLEVBQXlCO0FBQ3ZCLGVBQU9ELGdCQUFnQixDQUFDRSxJQUFqQixFQUFQO0FBQ0Q7QUFDRixLQUxILEVBTUdILElBTkgsQ0FNUSxVQUFDSSxnQkFBRCxFQUFzQjtBQUMxQkMsYUFBTyxDQUFDQyxHQUFSLENBQVlGLGdCQUFnQixDQUFDRyxlQUE3QjtBQUNBVixpQkFBVyxDQUFDTyxnQkFBZ0IsQ0FBQ0csZUFBbEIsQ0FBWDtBQUNELEtBVEg7QUFVRCxHQVhRLEVBV04sRUFYTSxDQUFUO0FBYUEsc0JBQ0U7QUFBQSxnREFFRTtBQUFBLGdCQUNHWCxPQUFPLENBQUNZLEdBQVIsQ0FBWSxVQUFDQyxPQUFELEVBQWE7QUFDeEI7QUFBQTtBQUFBLG9CQUFnQ0EsT0FBTyxDQUFDQyxjQUFSLENBQXVCQztBQUF2RCxXQUFTRixPQUFPLENBQUNHLFlBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDRCxPQUZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBVUQ7O0dBMUJ1QmxCLEk7O0tBQUFBLEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNmMwZDJmZmQ0MGUyNGE2YjljMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xyXG4gIGNvbnN0IFtwb2tlbW9zLCBzZXRQb2tlbW9uc10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZWRleC8yL1wiKVxyXG4gICAgICAudGhlbigocmVzcG9zdGFEb1NlcnZlcikgPT4ge1xyXG4gICAgICAgIGlmIChyZXNwb3N0YURvU2VydmVyLm9rKSB7XHJcbiAgICAgICAgICByZXR1cm4gcmVzcG9zdGFEb1NlcnZlci5qc29uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigocmVzcG9zdGFFbU9iamV0bykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3Bvc3RhRW1PYmpldG8ucG9rZW1vbl9lbnRyaWVzKTtcclxuICAgICAgICBzZXRQb2tlbW9ucyhyZXNwb3N0YUVtT2JqZXRvLnBva2Vtb25fZW50cmllcyk7XHJcbiAgICAgIH0pO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIFBva2VkZXggLSBBbnRvbnlcclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtwb2tlbW9zLm1hcCgocG9rZW1vbSkgPT4ge1xyXG4gICAgICAgICAgPGxpIGtleT17cG9rZW1vbS5lbnRyeV9udW1iZXJ9Pntwb2tlbW9tLnBva2Vtb21zcGVjaWVzLm5hbWV9PC9saT47XHJcbiAgICAgICAgfSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=