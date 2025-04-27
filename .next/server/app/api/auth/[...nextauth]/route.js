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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Swapnil_Downloads_google_meet_main_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Swapnil\\\\Downloads\\\\google-meet-main\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_Swapnil_Downloads_google_meet_main_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNTd2FwbmlsJTVDRG93bmxvYWRzJTVDZ29vZ2xlLW1lZXQtbWFpbiU1Q3NyYyU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDU3dhcG5pbCU1Q0Rvd25sb2FkcyU1Q2dvb2dsZS1tZWV0LW1haW4maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQzZDO0FBQzFIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZ2xlLW1lZXQvPzdmZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcU3dhcG5pbFxcXFxEb3dubG9hZHNcXFxcZ29vZ2xlLW1lZXQtbWFpblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcU3dhcG5pbFxcXFxEb3dubG9hZHNcXFxcZ29vZ2xlLW1lZXQtbWFpblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handle),\n/* harmony export */   POST: () => (/* binding */ handle),\n/* harmony export */   authOptions: () => (/* binding */ authOptions)\n/* harmony export */ });\n/* harmony import */ var _lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/dbConnect */ \"(rsc)/./src/lib/dbConnect.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_models_User__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__[\"default\"])({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user, account }) {\n            if (user) {\n                token.id = user.id;\n            }\n            if (account) {\n                token.accessToken = account.access_token;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            session.user.id = token.id;\n            return session;\n        },\n        async signIn ({ user, profile }) {\n            await (0,_lib_dbConnect__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n            let dbUser = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().findOne({\n                email: user.email\n            });\n            //if user not found create a new user\n            if (!dbUser) {\n                dbUser = await _models_User__WEBPACK_IMPORTED_MODULE_1___default().create({\n                    name: profile.name,\n                    email: profile.email,\n                    profilePicture: profile.picture,\n                    isVerified: profile.email_verified ? true : false\n                });\n            }\n            user.id = dbUser._id.toString();\n            return true;\n        }\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 90 * 24 * 60 * 60\n    },\n    pages: {\n        signIn: \"/user-auth\"\n    }\n};\nconst handle = next_auth__WEBPACK_IMPORTED_MODULE_2___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUF3QztBQUNQO0FBQ0Q7QUFDdUI7QUFDQztBQUVqRCxNQUFNSyxjQUFjO0lBQ3pCLGlEQUFpRDtJQUNqREMsV0FBVztRQUNUSCxzRUFBY0EsQ0FBQztZQUNiSSxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLFNBQVM7WUFDL0JDLGNBQWNILFFBQVFDLEdBQUcsQ0FBQ0csYUFBYTtRQUN6QztRQUNBUixzRUFBY0EsQ0FBQztZQUNYRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNJLGdCQUFnQjtZQUN0Q0YsY0FBY0gsUUFBUUMsR0FBRyxDQUFDSyxvQkFBb0I7UUFDaEQ7S0FDSDtJQUNEQyxXQUFVO1FBQ1IsTUFBTUMsS0FBSSxFQUFDQyxLQUFLLEVBQUNDLElBQUksRUFBQ0MsT0FBTyxFQUFDO1lBRTFCLElBQUdELE1BQUs7Z0JBQ0pELE1BQU1HLEVBQUUsR0FBR0YsS0FBS0UsRUFBRTtZQUN0QjtZQUNBLElBQUdELFNBQVE7Z0JBQ1BGLE1BQU1JLFdBQVcsR0FBRUYsUUFBUUcsWUFBWTtZQUMzQztZQUVBLE9BQU9MO1FBQ1g7UUFDQSxNQUFNTSxTQUFRLEVBQUVBLE9BQU8sRUFBRU4sS0FBSyxFQUFFO1lBQzNCTSxRQUFRTCxJQUFJLENBQUNFLEVBQUUsR0FBRUgsTUFBTUcsRUFBRTtZQUMxQixPQUFPRztRQUNUO1FBRUEsTUFBTUMsUUFBTyxFQUFDTixJQUFJLEVBQUNPLE9BQU8sRUFBQztZQUN6QixNQUFNekIsMERBQVNBO1lBQ2YsSUFBSTBCLFNBQVMsTUFBTXpCLDJEQUFZLENBQUM7Z0JBQUMyQixPQUFPVixLQUFLVSxLQUFLO1lBQUE7WUFFbEQscUNBQXFDO1lBQ3JDLElBQUcsQ0FBQ0YsUUFBTztnQkFDUEEsU0FBUyxNQUFNekIsMERBQVcsQ0FBQztvQkFDdkI2QixNQUFLTCxRQUFRSyxJQUFJO29CQUNqQkYsT0FBTUgsUUFBUUcsS0FBSztvQkFDbkJHLGdCQUFlTixRQUFRTyxPQUFPO29CQUM5QkMsWUFBV1IsUUFBUVMsY0FBYyxHQUFHLE9BQU07Z0JBQzlDO1lBQ0o7WUFDQ2hCLEtBQUtFLEVBQUUsR0FBR00sT0FBT1MsR0FBRyxDQUFDQyxRQUFRO1lBQzdCLE9BQU87UUFDVjtJQUNKO0lBQ0FiLFNBQVE7UUFDTmMsVUFBVTtRQUNWQyxRQUFTLEtBQUssS0FBSyxLQUFLO0lBQzFCO0lBQ0FDLE9BQU07UUFDSmYsUUFBUTtJQUNWO0FBQ0YsRUFBQztBQUVELE1BQU1nQixTQUFTdEMsZ0RBQVFBLENBQUNHO0FBQ2dCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZ2xlLW1lZXQvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZGJDb25uZWN0IGZyb20gXCJAL2xpYi9kYkNvbm5lY3RcIjtcbmltcG9ydCBVc2VyIGZyb20gXCJAL21vZGVscy9Vc2VyXCI7XG5pbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR2l0aHViUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ2l0aHViXCJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIHByb3ZpZGVyczogW1xuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVFxuICAgICAgfSlcbiAgXSxcbiAgY2FsbGJhY2tzOntcbiAgICBhc3luYyBqd3Qoe3Rva2VuLHVzZXIsYWNjb3VudH0pe1xuXG4gICAgICAgIGlmKHVzZXIpe1xuICAgICAgICAgICAgdG9rZW4uaWQgPSB1c2VyLmlkO1xuICAgICAgICB9XG4gICAgICAgIGlmKGFjY291bnQpe1xuICAgICAgICAgICAgdG9rZW4uYWNjZXNzVG9rZW49IGFjY291bnQuYWNjZXNzX3Rva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgICAgIHNlc3Npb24udXNlci5pZD0gdG9rZW4uaWQ7XG4gICAgICAgIHJldHVybiBzZXNzaW9uXG4gICAgICB9LFxuXG4gICAgICBhc3luYyBzaWduSW4oe3VzZXIscHJvZmlsZX0pIHtcbiAgICAgICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgICAgIGxldCBkYlVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoe2VtYWlsOiB1c2VyLmVtYWlsfSlcblxuICAgICAgICAvL2lmIHVzZXIgbm90IGZvdW5kIGNyZWF0ZSBhIG5ldyB1c2VyXG4gICAgICAgIGlmKCFkYlVzZXIpe1xuICAgICAgICAgICAgZGJVc2VyID0gYXdhaXQgVXNlci5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIG5hbWU6cHJvZmlsZS5uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsOnByb2ZpbGUuZW1haWwsXG4gICAgICAgICAgICAgICAgcHJvZmlsZVBpY3R1cmU6cHJvZmlsZS5waWN0dXJlLFxuICAgICAgICAgICAgICAgIGlzVmVyaWZpZWQ6cHJvZmlsZS5lbWFpbF92ZXJpZmllZCA/IHRydWUgOmZhbHNlXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgICB1c2VyLmlkID0gZGJVc2VyLl9pZC50b1N0cmluZygpO1xuICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gIH0sXG4gIHNlc3Npb246e1xuICAgIHN0cmF0ZWd5OiAnand0JyxcbiAgICBtYXhBZ2UgOiA5MCAqIDI0ICogNjAgKiA2MFxuICB9LFxuICBwYWdlczp7XG4gICAgc2lnbkluOiAnL3VzZXItYXV0aCcsXG4gIH1cbn1cblxuY29uc3QgaGFuZGxlID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpXG5leHBvcnQge2hhbmRsZSBhcyBQT1NUICwgaGFuZGxlIGFzIEdFVH07Il0sIm5hbWVzIjpbImRiQ29ubmVjdCIsIlVzZXIiLCJOZXh0QXV0aCIsIkdpdGh1YlByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdJVEhVQl9JRCIsImNsaWVudFNlY3JldCIsIkdJVEhVQl9TRUNSRVQiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXIiLCJhY2NvdW50IiwiaWQiLCJhY2Nlc3NUb2tlbiIsImFjY2Vzc190b2tlbiIsInNlc3Npb24iLCJzaWduSW4iLCJwcm9maWxlIiwiZGJVc2VyIiwiZmluZE9uZSIsImVtYWlsIiwiY3JlYXRlIiwibmFtZSIsInByb2ZpbGVQaWN0dXJlIiwicGljdHVyZSIsImlzVmVyaWZpZWQiLCJlbWFpbF92ZXJpZmllZCIsIl9pZCIsInRvU3RyaW5nIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJwYWdlcyIsImhhbmRsZSIsIlBPU1QiLCJHRVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/lib/dbConnect.js":
/*!******************************!*\
  !*** ./src/lib/dbConnect.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"please define MONGODB_URI in your environment variable for databse connection\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function dbConnect() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const object = {\n            bufferCommands: false,\n            serverSelectionTimeoutMS: 5000\n        };\n        //create a new connection and return promise and store in the cahce object\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, object).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (error) {\n        cached.promise = null;\n        throw error;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiQ29ubmVjdC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsY0FBY0MsUUFBUUMsR0FBRyxDQUFDRixXQUFXO0FBRTNDLElBQUcsQ0FBQ0EsYUFBWTtJQUNiLE1BQU0sSUFBSUcsTUFBTTtBQUNuQjtBQUVBLElBQUlDLFNBQVNDLE9BQU9OLFFBQVE7QUFFNUIsSUFBRyxDQUFDSyxRQUFPO0lBQ1BBLFNBQVNDLE9BQU9OLFFBQVEsR0FBRztRQUFDTyxNQUFNO1FBQU1DLFNBQVE7SUFBSTtBQUN4RDtBQUVBLGVBQWVDO0lBQ1gsSUFBR0osT0FBT0UsSUFBSSxFQUFDO1FBQ1gsT0FBT0YsT0FBT0UsSUFBSTtJQUN0QjtJQUNBLElBQUcsQ0FBQ0YsT0FBT0csT0FBTyxFQUFDO1FBRWYsTUFBTUUsU0FBUztZQUNYQyxnQkFBZTtZQUNmQywwQkFBeUI7UUFDN0I7UUFFQSwwRUFBMEU7UUFDMUVQLE9BQU9HLE9BQU8sR0FBR1IsdURBQWdCLENBQUNDLGFBQWFTLFFBQVFJLElBQUksQ0FBQyxDQUFDZDtZQUN6RCxPQUFPQTtRQUNYO0lBQ0o7SUFDQSxJQUFJO1FBQ0FLLE9BQU9FLElBQUksR0FBRyxNQUFNRixPQUFPRyxPQUFPO0lBQ3RDLEVBQUUsT0FBT08sT0FBTztRQUNaVixPQUFPRyxPQUFPLEdBQUM7UUFDZixNQUFNTztJQUNWO0lBRUEsT0FBT1YsT0FBT0UsSUFBSTtBQUN0QjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ29vZ2xlLW1lZXQvLi9zcmMvbGliL2RiQ29ubmVjdC5qcz84YTU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSSA7XG5cbmlmKCFNT05HT0RCX1VSSSl7XG4gICB0aHJvdyBuZXcgRXJyb3IoJ3BsZWFzZSBkZWZpbmUgTU9OR09EQl9VUkkgaW4geW91ciBlbnZpcm9ubWVudCB2YXJpYWJsZSBmb3IgZGF0YWJzZSBjb25uZWN0aW9uJylcbn1cblxubGV0IGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZTtcblxuaWYoIWNhY2hlZCl7XG4gICAgY2FjaGVkID0gZ2xvYmFsLm1vbmdvb3NlID0ge2Nvbm46IG51bGwsIHByb21pc2U6bnVsbH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGRiQ29ubmVjdCAoKSB7XG4gICAgaWYoY2FjaGVkLmNvbm4pe1xuICAgICAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gICAgfVxuICAgIGlmKCFjYWNoZWQucHJvbWlzZSl7XG5cbiAgICAgICAgY29uc3Qgb2JqZWN0ID0ge1xuICAgICAgICAgICAgYnVmZmVyQ29tbWFuZHM6ZmFsc2UsXG4gICAgICAgICAgICBzZXJ2ZXJTZWxlY3Rpb25UaW1lb3V0TVM6NTAwMFxuICAgICAgICB9XG5cbiAgICAgICAgLy9jcmVhdGUgYSBuZXcgY29ubmVjdGlvbiBhbmQgcmV0dXJuIHByb21pc2UgYW5kIHN0b3JlIGluIHRoZSBjYWhjZSBvYmplY3RcbiAgICAgICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBvYmplY3QpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGNhY2hlZC5jb25uID0gYXdhaXQgY2FjaGVkLnByb21pc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY2FjaGVkLnByb21pc2U9bnVsbFxuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG5cbiAgICByZXR1cm4gY2FjaGVkLmNvbm5cbn1cblxuZXhwb3J0IGRlZmF1bHQgZGJDb25uZWN0OyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIk1PTkdPREJfVVJJIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiY2FjaGVkIiwiZ2xvYmFsIiwiY29ubiIsInByb21pc2UiLCJkYkNvbm5lY3QiLCJvYmplY3QiLCJidWZmZXJDb21tYW5kcyIsInNlcnZlclNlbGVjdGlvblRpbWVvdXRNUyIsImNvbm5lY3QiLCJ0aGVuIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/dbConnect.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nconst userSchema = new mongoose.Schema({\n    name: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String\n    },\n    profilePicture: {\n        type: String\n    },\n    isVerified: {\n        type: Boolean,\n        required: true\n    }\n}, {\n    timestamps: true\n});\nmodule.exports = mongoose.models.User || mongoose.model(\"User\", userSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6IjtBQUFBLE1BQU1BLFdBQVdDLG1CQUFPQSxDQUFDO0FBRXpCLE1BQU1DLGFBQWEsSUFBSUYsU0FBU0csTUFBTSxDQUFDO0lBQ25DQyxNQUFNO1FBQUNDLE1BQUtDO1FBQU9DLFVBQVM7SUFBSTtJQUNoQ0MsT0FBTTtRQUFDSCxNQUFLQztJQUFNO0lBQ2xCRyxnQkFBZTtRQUFDSixNQUFLQztJQUFNO0lBQzNCSSxZQUFXO1FBQUNMLE1BQUtNO1FBQVFKLFVBQVM7SUFBSTtBQUMxQyxHQUFFO0lBQUNLLFlBQVc7QUFBSTtBQUVsQkMsT0FBT0MsT0FBTyxHQUFHZCxTQUFTZSxNQUFNLENBQUNDLElBQUksSUFBSWhCLFNBQVNpQixLQUFLLENBQUMsUUFBT2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nb29nbGUtbWVldC8uL3NyYy9tb2RlbHMvVXNlci5qcz83ZDBiIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gcmVxdWlyZSgnbW9uZ29vc2UnKVxuXG5jb25zdCB1c2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgbmFtZToge3R5cGU6U3RyaW5nLHJlcXVpcmVkOnRydWV9LFxuICAgIGVtYWlsOnt0eXBlOlN0cmluZ30sXG4gICAgcHJvZmlsZVBpY3R1cmU6e3R5cGU6U3RyaW5nfSxcbiAgICBpc1ZlcmlmaWVkOnt0eXBlOkJvb2xlYW4scmVxdWlyZWQ6dHJ1ZX1cbn0se3RpbWVzdGFtcHM6dHJ1ZX0pXG5cbm1vZHVsZS5leHBvcnRzID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoJ1VzZXInLHVzZXJTY2hlbWEpIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInVzZXJTY2hlbWEiLCJTY2hlbWEiLCJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJwcm9maWxlUGljdHVyZSIsImlzVmVyaWZpZWQiLCJCb29sZWFuIiwidGltZXN0YW1wcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/object-hash","vendor-chunks/lru-cache","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CSwapnil%5CDownloads%5Cgoogle-meet-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();