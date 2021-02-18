webpackHotUpdate_N_E("pages/users/[id]",{

/***/ "./pages/users/[id].js":
/*!*****************************!*\
  !*** ./pages/users/[id].js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_ADMIN_Desktop_nextproyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_ADMIN_Desktop_nextproyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ADMIN_Desktop_nextproyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_ADMIN_Desktop_nextproyect_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dist/next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");
/* harmony import */ var next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_lib_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/dist/next-server/server/router */ "./node_modules/next/dist/next-server/server/router.js");
/* harmony import */ var next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);




var _jsxFileName = "C:\\Users\\ADMIN\\Desktop\\nextproyect\\pages\\users\\[id].js",
    _this = undefined,
    _s = $RefreshSig$();





var User = function User() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  var id = next_dist_next_server_server_router__WEBPACK_IMPORTED_MODULE_4__["route"].query.id;
  console.log(obj);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("h1", {
    children: "profile"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 12
  }, _this);
};

_s(User, "fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = User;

User.getInitialProps = /*#__PURE__*/function () {
  var _ref = Object(C_Users_ADMIN_Desktop_nextproyect_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/C_Users_ADMIN_Desktop_nextproyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
    return C_Users_ADMIN_Desktop_nextproyect_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log(ctx.query.id);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (UserProfile);

var _c;

$RefreshReg$(_c, "User");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlcnMvLmpzIl0sIm5hbWVzIjpbIlVzZXIiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJpZCIsInJvdXRlIiwicXVlcnkiLCJjb25zb2xlIiwibG9nIiwib2JqIiwiZ2V0SW5pdGlhbFByb3BzIiwiY3R4IiwiVXNlclByb2ZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFHQSxJQUFNQSxJQUFJLEdBQUUsU0FBTkEsSUFBTSxHQUFLO0FBQUE7O0FBRWYsTUFBTUMsTUFBTSxHQUFJQyw2REFBUyxFQUF6QjtBQUZlLE1BR1BDLEVBSE8sR0FHREMseUVBQUssQ0FBQ0MsS0FITCxDQUdQRixFQUhPO0FBSWRHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZQyxHQUFaO0FBQ0Msc0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBUDtBQUNILENBTkQ7O0dBQU1SLEk7VUFFWUUscUQ7OztLQUZaRixJOztBQVFOQSxJQUFJLENBQUNTLGVBQUw7QUFBQSwwUkFBdUIsaUJBQU9DLEdBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNuQkosbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFHLENBQUNMLEtBQUosQ0FBVUYsRUFBdEI7O0FBRG1CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQXZCOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUllUSwwRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy91c2Vycy9baWRdLmM1MzI4YzEyZTQ1ODBhYjBjMDUwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkR2V0SW5pdGlhbFByb3BzIH0gZnJvbSBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHNcIjtcclxuaW1wb3J0IHsgcm91dGUgfSBmcm9tIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9yb3V0ZXJcIjtcclxuaW1wb3J0IHt1c2VSb3V0ZXJ9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuXHJcbmNvbnN0IFVzZXI9ICgpID0+e1xyXG5cclxuICBjb25zdCByb3V0ZXIgPSAgdXNlUm91dGVyKCk7XHJcbiAgIGNvbnN0IHtpZH0gPSByb3V0ZS5xdWVyeTtcclxuICAgY29uc29sZS5sb2cob2JqKVxyXG4gICAgcmV0dXJuIDxoMT5wcm9maWxlPC9oMT5cclxufVxyXG5cclxuVXNlci5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoY3R4KSA9PntcclxuICAgIGNvbnNvbGUubG9nKGN0eC5xdWVyeS5pZClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVXNlclByb2ZpbGUiXSwic291cmNlUm9vdCI6IiJ9