"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/Blog.js":
/*!****************************!*\
  !*** ./components/Blog.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Blog(param) {\n    var id = param.id, title = param.title;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n        href: \"/blogposts/\".concat(id),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"blog cursor-pointer flex bg-purple-500 rounded shadow-lg shadow-gray-300 py-4 w-674 text-white font-semibold font-mono px-3\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"id bg-white text-black flex px-2\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-xl\",\n                        children: id\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\components\\\\Blog.js\",\n                        lineNumber: 9,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\components\\\\Blog.js\",\n                    lineNumber: 8,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    className: \"ml-3 text-xl\",\n                    children: title\n                }, void 0, false, {\n                    fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\components\\\\Blog.js\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\components\\\\Blog.js\",\n            lineNumber: 7,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\components\\\\Blog.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb2cuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQTZCO0FBQ0g7QUFFMUIsU0FBU0UsSUFBSSxDQUFDLEtBQWEsRUFBRTtRQUFiQyxFQUFFLEdBQUosS0FBYSxDQUFYQSxFQUFFLEVBQUVDLEtBQUssR0FBWCxLQUFhLENBQVBBLEtBQUs7SUFDdkIscUJBQ0UsOERBQUNKLGtEQUFJO1FBQUNLLElBQUksRUFBRSxhQUFZLENBQUssT0FBSEYsRUFBRSxDQUFFO2tCQUM1Qiw0RUFBQ0csS0FBRztZQUFDQyxTQUFTLEVBQUMsNkhBQTZIOzs4QkFDMUksOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxrQ0FBa0M7OEJBQy9DLDRFQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsU0FBUztrQ0FBRUosRUFBRTs7Ozs7NEJBQU07Ozs7O3dCQUM3Qjs4QkFDTiw4REFBQ00sSUFBRTtvQkFBQ0YsU0FBUyxFQUFDLGNBQWM7OEJBQUVILEtBQUs7Ozs7O3dCQUFNOzs7Ozs7Z0JBQ3JDOzs7OztZQUNELENBQ1A7QUFDSixDQUFDO0FBWFFGLEtBQUFBLElBQUk7QUFhYiwrREFBZUEsSUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmxvZy5qcz8zYThlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gQmxvZyh7IGlkLCB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIGhyZWY9e2AvYmxvZ3Bvc3RzLyR7aWR9YH0+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZyBjdXJzb3ItcG9pbnRlciBmbGV4IGJnLXB1cnBsZS01MDAgcm91bmRlZCBzaGFkb3ctbGcgc2hhZG93LWdyYXktMzAwIHB5LTQgdy02NzQgdGV4dC13aGl0ZSBmb250LXNlbWlib2xkIGZvbnQtbW9ubyBweC0zXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpZCBiZy13aGl0ZSB0ZXh0LWJsYWNrIGZsZXggcHgtMlwiPlxyXG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cInRleHQteGxcIj57aWR9PC9oND5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8aDMgY2xhc3NOYW1lPVwibWwtMyB0ZXh0LXhsXCI+e3RpdGxlfTwvaDM+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2c7XHJcbiJdLCJuYW1lcyI6WyJMaW5rIiwiUmVhY3QiLCJCbG9nIiwiaWQiLCJ0aXRsZSIsImhyZWYiLCJkaXYiLCJjbGFzc05hbWUiLCJoNCIsImgzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Blog.js\n"));

/***/ })

});