"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/blogposts/[id]";
exports.ids = ["pages/blogposts/[id]"];
exports.modules = {

/***/ "./pages/blogposts/[id].js":
/*!*********************************!*\
  !*** ./pages/blogposts/[id].js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nasync function getServerSideProps() {\n    let res = await axios__WEBPACK_IMPORTED_MODULE_1___default().get(\"https://jsonplaceholder.typicode.com/posts\");\n    let data = res.data;\n    return {\n        props: {\n            data\n        }\n    };\n}\nconst BlogDetails = ({ data  })=>{\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { id  } = router.query;\n    const myBlog = data.filter((e)=>{\n        return e.id == id;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container flex mx-auto p-5\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"box w-[65rem] bg-gray-200 mx-auto rounded p-5 space-y-6 my-10 shadow-md bg-['#EAEAEA']\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"font-semibold text-3xl\",\n                        children: myBlog[0].title\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-semibold\",\n                        children: myBlog[0].body\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\Website Developnet Course\\\\NextJS\\\\siam-app\\\\pages\\\\blogposts\\\\[id].js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ibG9ncG9zdHMvW2lkXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMEI7QUFDYztBQUNkO0FBQ25CLGVBQWVHLGtCQUFrQixHQUFHO0lBQ3pDLElBQUlDLEdBQUcsR0FBRyxNQUFNSixnREFBUyxDQUFDLDRDQUE0QyxDQUFDO0lBQ3ZFLElBQUlNLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFJO0lBQ25CLE9BQU87UUFDTEMsS0FBSyxFQUFFO1lBQ0xELElBQUk7U0FDTDtLQUNGLENBQUM7QUFDSixDQUFDO0FBQ0QsTUFBTUUsV0FBVyxHQUFHLENBQUMsRUFBQ0YsSUFBSSxHQUFDLEdBQUs7SUFDOUIsTUFBTUcsTUFBTSxHQUFHUixzREFBUyxFQUFFO0lBQzFCLE1BQU0sRUFBRVMsRUFBRSxHQUFFLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSztJQUMzQixNQUFNQyxNQUFNLEdBQUdOLElBQUksQ0FBQ08sTUFBTSxDQUFDQyxDQUFBQSxDQUFDLEdBQUU7UUFDNUIsT0FBT0EsQ0FBQyxDQUFDSixFQUFFLElBQUVBLEVBQUUsQ0FBQztJQUNsQixDQUFDLENBQUM7SUFDRixxQkFDRTtrQkFDRSw0RUFBQ0ssS0FBRztZQUFDQyxTQUFTLEVBQUMsNEJBQTRCO3NCQUN6Qyw0RUFBQ0QsS0FBRztnQkFBQ0MsU0FBUyxFQUFDLHdGQUF3Rjs7a0NBQ3JHLDhEQUFDQyxJQUFFO3dCQUFDRCxTQUFTLEVBQUMsd0JBQXdCO2tDQUNuQ0osTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDTSxLQUFLOzs7OztpQ0FDYjtrQ0FDTCw4REFBQ0MsR0FBQzt3QkFBQ0gsU0FBUyxFQUFDLGVBQWU7a0NBQ3pCSixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUNRLElBQUk7Ozs7O2lDQUNiOzs7Ozs7eUJBQ0E7Ozs7O3FCQUNGO3FCQUNMLENBQ0g7QUFDSixDQUFDO0FBRUQsaUVBQWVaLFdBQVcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NpYW0tYXBwLy4vcGFnZXMvYmxvZ3Bvc3RzL1tpZF0uanM/MWQzZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgbGV0IHJlcyA9IGF3YWl0IGF4aW9zLmdldChcImh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS9wb3N0c1wiKTtcclxuICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhLFxyXG4gICAgfSxcclxuICB9O1xyXG59XHJcbmNvbnN0IEJsb2dEZXRhaWxzID0gKHtkYXRhfSkgPT4ge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeTtcclxuICBjb25zdCBteUJsb2cgPSBkYXRhLmZpbHRlcihlPT57XHJcbiAgICByZXR1cm4gZS5pZD09aWQ7XHJcbiAgfSlcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgZmxleCBteC1hdXRvIHAtNVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm94IHctWzY1cmVtXSBiZy1ncmF5LTIwMCBteC1hdXRvIHJvdW5kZWQgcC01IHNwYWNlLXktNiBteS0xMCBzaGFkb3ctbWQgYmctWycjRUFFQUVBJ11cIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtM3hsXCI+XHJcbiAgICAgICAgICAgIHtteUJsb2dbMF0udGl0bGV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPlxyXG4gICAgICAgICAgICB7bXlCbG9nWzBdLmJvZHl9XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJSZWFjdCIsImdldFNlcnZlclNpZGVQcm9wcyIsInJlcyIsImdldCIsImRhdGEiLCJwcm9wcyIsIkJsb2dEZXRhaWxzIiwicm91dGVyIiwiaWQiLCJxdWVyeSIsIm15QmxvZyIsImZpbHRlciIsImUiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInRpdGxlIiwicCIsImJvZHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/blogposts/[id].js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/blogposts/[id].js"));
module.exports = __webpack_exports__;

})();