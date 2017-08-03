(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("form-data-object", [], factory);
	else if(typeof exports === 'object')
		exports["form-data-object"] = factory();
	else
		root["form-data-object"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Creates a form data object and values from multiple DOM wrappers and encodes them (if you want to)
 * @version 1.0.0
 * @author Chris Boakes modified from archived (https://code.google.com/archive/p/form-serialize/)
 * @param Array of wrapper elements - form
 * @param Boolean - encode - do we want to encodeURIComponent?
 * @param jsObject - do we want this to be a javscript object instead of FormData object
 * @return FormData Object or Javascript Object
 */
var _class = function () {
    function _class(forms, encode, jsObject) {
        _classCallCheck(this, _class);

        // By default, create a formData object, if not create an empty javascript object
        this.formData = typeof jsObject !== 'undefined' && jsObject === true ? {} : new FormData();

        // Is it a formData object?
        this.isFormData = typeof jsObject === 'undefined' || jsObject === false;

        // By default we want to encode the data
        this.encodeData = typeof encode !== 'undefined' ? encode : true;

        if (forms !== 'null' && this.isArray(forms) && forms.length > 0) {
            for (var i in forms) {
                this.setFormDataArray(forms[i]);
            }
        }
    }

    // Loop through the form elements and assign their name and value to the FormData object


    _createClass(_class, [{
        key: 'setFormDataArray',
        value: function setFormDataArray(formElement) {
            var i = void 0,
                j = [];

            var formChildren = formElement.querySelectorAll('input,select,textarea,button');

            for (i = formChildren.length - 1; i >= 0; i = i - 1) {
                if (formChildren[i].name === '') {
                    continue;
                }
                switch (formChildren[i].nodeName) {
                    case 'INPUT':
                        switch (formChildren[i].type) {
                            case 'text':
                            case 'hidden':
                            case 'button':
                            case 'reset':
                            case 'submit':
                            case 'number':
                            case 'color':
                            case 'date':
                            case 'datetime-local':
                            case 'email':
                            case 'month':
                            case 'range':
                            case 'search':
                            case 'tel':
                            case 'time':
                            case 'url':
                            case 'week':
                                this.appendFormData(formChildren[i].name, formChildren[i].value);
                                break;
                            case 'checkbox':
                            case 'radio':
                                if (formChildren[i].checked) {
                                    this.appendFormData(formChildren[i].name, formChildren[i].value);
                                }
                                break;
                            case 'file':
                                break;
                        }
                        break;
                    case 'TEXTAREA':
                        this.appendFormData(formChildren[i].name, formChildren[i].value);
                        break;
                    case 'SELECT':
                        switch (formChildren[i].type) {
                            case 'select-one':
                                this.appendFormData(formChildren[i].name, formChildren[i].value);
                                break;
                            case 'select-multiple':
                                for (j = formChildren[i].options.length - 1; j >= 0; j = j - 1) {
                                    if (formChildren[i].options[j].selected) {
                                        this.appendFormData(formChildren[i].name, formChildren[i].options[j].value);
                                    }
                                }
                                break;
                        }
                        break;
                    case 'BUTTON':
                        switch (formChildren[i].type) {
                            case 'reset':
                            case 'submit':
                            case 'button':
                                this.appendFormData(formChildren[i].name, formChildren[i].value);
                                break;
                        }
                        break;
                }
            }
        }
    }, {
        key: 'isArray',
        value: function isArray(item) {
            return Object.prototype.toString.call(item) === '[object Array]';
        }

        // Append single field to FormData object

    }, {
        key: 'appendFormData',
        value: function appendFormData(elementName, elementValue) {
            if (this.encodeData) {
                elementName = encodeURIComponent(elementName);
                elementValue = encodeURIComponent(elementValue);
            }
            // Append formData or javascript object
            if (this.isFormData) {
                this.formData.append(elementName, elementValue);
            } else {
                this.formData[elementName] = elementValue;
            }
        }

        /**
         * Loop through the fields and assign them to the formData object
         * @return FormData Object
         */

    }, {
        key: 'getFormData',
        value: function getFormData() {
            return this.formData;
        }
    }]);

    return _class;
}();

exports.default = _class;
;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=form-data-object.js.map