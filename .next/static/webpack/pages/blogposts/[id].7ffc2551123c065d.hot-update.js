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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\nvar BlogDetails = function(param) {\n    var data = param.data;\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    var id = router.query.id;\n    var myBlog = data.filter(function(e) {\n        return e.id == id;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box w-[65rem] bg-gray-200 rounded\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-3xl\",\n                        children: \"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur, suscipit?\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n                        lineNumber: 23,\n                        columnNumber: 13\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold\",\n                        children: \"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe maiores libero quia tenetur, assumenda iusto porro ex nobis facere culpa eos fugit. Perspiciatis eaque quos eius consectetur, excepturi rerum, sunt nam aperiam natus, nesciunt maiores. Perspiciatis distinctio facilis nulla, optio non consequatur laboriosam labore eveniet quas quam ab corrupti possimus.\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n                        lineNumber: 24,\n                        columnNumber: 13\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false);\n};\n_s(BlogDetails, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter\n    ];\n});\n_c = BlogDetails;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogDetails);\nvar _c;\n$RefreshReg$(_c, \"BlogDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7OztBQUN3QztBQUNkO0FBVTFCLElBQU1FLFdBQVcsR0FBRyxnQkFBWTtRQUFWQyxJQUFJLFNBQUpBLElBQUk7O0lBQ3hCLElBQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixJQUFNLEVBQUksR0FBS0ksTUFBTSxDQUFDRSxLQUFLLENBQW5CRCxFQUFFO0lBQ1YsSUFBTUUsTUFBTSxHQUFHSixJQUFJLENBQUNLLE1BQU0sQ0FBQ0MsU0FBQUEsQ0FBQyxFQUFFO1FBQzVCLE9BQU9BLENBQUMsQ0FBQ0osRUFBRSxJQUFFQSxFQUFFLENBQUM7SUFDbEIsQ0FBQyxDQUFDO0lBQ0YscUJBQ0U7a0JBQ0UsNEVBQUNLLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFdBQVc7c0JBQ3hCLDRFQUFDRCxLQUFHO2dCQUFDQyxTQUFTLEVBQUMsbUNBQW1DOztrQ0FDOUMsOERBQUNDLElBQUU7d0JBQUNELFNBQVMsRUFBQyx3QkFBd0I7a0NBQUMsbUZBQWlGOzs7Ozs2QkFBSztrQ0FDN0gsOERBQUNFLEdBQUM7d0JBQUNGLFNBQVMsRUFBQyxlQUFlO2tDQUFDLGlYQUErVzs7Ozs7NkJBQUk7Ozs7OztxQkFDOVk7Ozs7O2lCQUNGO3FCQUNMLENBQ0g7QUFDSixDQUFDO0dBaEJLVCxXQUFXOztRQUNBRixrREFBUzs7O0FBRHBCRSxLQUFBQSxXQUFXOztBQWtCakIsK0RBQWVBLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ibG9ncG9zdHMvW2lkXS5qcz8xZDNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcclxuICBsZXQgcmVzID0gYXdhaXQgYXhpb3MuZ2V0KFwiaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3Bvc3RzXCIpO1xyXG4gIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRhdGEsXHJcbiAgICB9LFxyXG4gIH07XHJcbn1cclxuY29uc3QgQmxvZ0RldGFpbHMgPSAoe2RhdGF9KSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5O1xyXG4gIGNvbnN0IG15QmxvZyA9IGRhdGEuZmlsdGVyKGU9PntcclxuICAgIHJldHVybiBlLmlkPT1pZDtcclxuICB9KVxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IHctWzY1cmVtXSBiZy1ncmF5LTIwMCByb3VuZGVkXCI+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtM3hsXCI+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIENvbnNlcXV1bnR1ciwgc3VzY2lwaXQ/PC9oMT5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPkxvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBTYWVwZSBtYWlvcmVzIGxpYmVybyBxdWlhIHRlbmV0dXIsIGFzc3VtZW5kYSBpdXN0byBwb3JybyBleCBub2JpcyBmYWNlcmUgY3VscGEgZW9zIGZ1Z2l0LiBQZXJzcGljaWF0aXMgZWFxdWUgcXVvcyBlaXVzIGNvbnNlY3RldHVyLCBleGNlcHR1cmkgcmVydW0sIHN1bnQgbmFtIGFwZXJpYW0gbmF0dXMsIG5lc2NpdW50IG1haW9yZXMuIFBlcnNwaWNpYXRpcyBkaXN0aW5jdGlvIGZhY2lsaXMgbnVsbGEsIG9wdGlvIG5vbiBjb25zZXF1YXR1ciBsYWJvcmlvc2FtIGxhYm9yZSBldmVuaWV0IHF1YXMgcXVhbSBhYiBjb3JydXB0aSBwb3NzaW11cy48L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiUmVhY3QiLCJCbG9nRGV0YWlscyIsImRhdGEiLCJyb3V0ZXIiLCJpZCIsInF1ZXJ5IiwibXlCbG9nIiwiZmlsdGVyIiwiZSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/blogposts/[id].js\n"));

/***/ })

});