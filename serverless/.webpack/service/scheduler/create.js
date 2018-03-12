(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var AWS = __webpack_require__(0); // eslint-disable-line import/no-extraneous-dependencies

var options = {};

// connect to local DB if running offline
if (process.env.IS_OFFLINE) {
  options = {
    region: 'localhost',
    endpoint: 'http://localhost:8000'
  };
}

var client = new AWS.DynamoDB.DocumentClient(options);

module.exports = client;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("joi");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("boom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("uuid");

/***/ }),
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var uuid = __webpack_require__(4);
var dynamodb = __webpack_require__(1);
var Joi = __webpack_require__(2);
var Boom = __webpack_require__(3);

module.exports.create = function (event, context, callback) {
    var data = JSON.parse(event.body);

    var schema = Joi.object().keys({
        startAt: Joi.string().required(),
        endAt: Joi.string().required()
    });

    function validate(data, schema) {
        return new Promise(function (resolve, reject) {
            Joi.validate(data, schema, function (err) {
                if (err) {
                    reject(Boom.badRequest(JSON.stringify(err.details)).output.payload);
                } else {
                    resolve(data);
                }
            });
        });
    }

    function handler(data) {

        var timestamp = new Date().getTime();
        var params = {
            TableName: process.env.DYNAMODB_TABLE,
            Item: _extends({
                id: uuid.v1(),
                createdAt: timestamp,
                updatedAt: timestamp
            }, data)
        };

        // write the todo to the database
        return new Promise(function (resolve, reject) {
            dynamodb.put(params, function (error) {
                // handle potential errors
                if (error) {
                    console.error(error);
                    reject(error);
                } else {
                    resolve(params);
                }
            });
        });
    }

    validate(data, schema).then(function (result) {
        return handler(result);
    }).then(function (result) {
        // create a response
        var response = {
            statusCode: 200,
            body: JSON.stringify(result)
        };
        callback(null, response);
    }).catch(function (err) {
        console.error('Validation Failed');
        callback(null, _extends({
            headers: { 'Content-Type': 'application/json' }
        }, err));
    });
};

/***/ })
/******/ ])));