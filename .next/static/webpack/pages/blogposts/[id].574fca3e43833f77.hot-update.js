"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/blogposts/[id]",{

/***/ "./pages/blogposts/[id].js":
/*!*********************************!*\
  !*** ./pages/blogposts/[id].js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getServerSide\": function() { return /* binding */ getServerSide; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ \"./node_modules/@swc/helpers/src/_async_to_generator.mjs\");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ \"./node_modules/@swc/helpers/src/_ts_generator.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nfunction getServerSide() {\n    return _getServerSide.apply(this, arguments);\n}\nfunction _getServerSide() {\n    _getServerSide = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(function() {\n        var res, data, _tmp;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        axios.get(\"https://jsonplaceholder.typicode.com/posts\")\n                    ];\n                case 1:\n                    res = _state.sent();\n                    data = res.data;\n                    _tmp = {};\n                    return [\n                        2,\n                        (_tmp.props = {\n                            data: data\n                        }, _tmp)\n                    ];\n            }\n        });\n    });\n    return _getServerSide.apply(this, arguments);\n}\nvar BlogDetails = function() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n            children: id\n        }, void 0, false, {\n            fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n            lineNumber: 17,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(BlogDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BlogDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetails);\nvar _c;\n$RefreshReg$(_c, \"BlogDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFBd0M7QUFDZDtBQUNuQixTQUFlRSxhQUFhO1dBQWJBLGNBQWE7Q0FRbEM7U0FScUJBLGNBQWE7SUFBYkEsY0FBYSxHQUE1QiwrRkFBK0I7WUFDaENDLEdBQUcsRUFDSEMsSUFBSTs7OztvQkFERTs7d0JBQU1DLEtBQUssQ0FBQ0MsR0FBRyxDQUFDLDRDQUE0QyxDQUFDO3NCQUFBOztvQkFBbkVILEdBQUcsR0FBRyxhQUE2RDtvQkFDbkVDLElBQUksR0FBR0QsR0FBRyxDQUFDQyxJQUFJLENBQUM7O29CQUNwQjs7OEJBQ0VHLEtBQUssR0FBRTs0QkFDTEgsSUFBSSxFQUFKQSxJQUFJO3lCQUNMO3NCQUNEOzs7SUFDSixDQUFDO1dBUnFCRixjQUFhOztBQVNuQyxJQUFNTSxXQUFXLEdBQUcsV0FBTTs7SUFDeEIsSUFBTUMsTUFBTSxHQUFHVCxzREFBUyxFQUFFO0lBQzFCLElBQU0sRUFBSSxHQUFLUyxNQUFNLENBQUNFLEtBQUssQ0FBbkJELEVBQUU7SUFDVixxQkFDRTtrQkFDRSw0RUFBQ0UsSUFBRTtzQkFBRUYsRUFBRTs7Ozs7aUJBQU07cUJBQ1osQ0FDSDtBQUNKLENBQUM7R0FSS0YsV0FBVzs7UUFDQVIsa0RBQVM7OztBQURwQlEsS0FBQUEsV0FBVztBQVVqQiwrREFBZUEsV0FBVyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Jsb2dwb3N0cy9baWRdLmpzPzFkM2YiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGUoKSB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmNvbnN0IEJsb2dEZXRhaWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGgzPntpZH08L2gzPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJnZXRTZXJ2ZXJTaWRlIiwicmVzIiwiZGF0YSIsImF4aW9zIiwiZ2V0IiwicHJvcHMiLCJCbG9nRGV0YWlscyIsInJvdXRlciIsImlkIiwicXVlcnkiLCJoMyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blogposts/[id].js\n"));

/***/ })

});