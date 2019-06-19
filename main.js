module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_FormControl__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_bootstrap_FormControl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap_FormControl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timezones_json__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__timezones_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__timezones_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_css__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__index_css__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var UP_KEY = 38;
var DOWN_KEY = 40;
var ENTER_KEY = 13;
var RETURN_KEY = 14;
var ESCAPE_KEY = 27;
var propTypes = {
  absolute: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  className: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  defaultValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  initialValue: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any,
  onBlur: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onChange: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onFocus: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  onKeyDown: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.func,
  placeholder: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.string,
  timezones: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  style: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.object,
  disabled: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.bool,
  value: __WEBPACK_IMPORTED_MODULE_1_prop_types___default.a.any
};
var defaultProps = {
  absolute: true,
  defaultValue: '',
  initialValue: '',
  placeholder: '',
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onKeyDown: function onKeyDown() {},
  style: {},
  disabled: false,
  timezones: __WEBPACK_IMPORTED_MODULE_5__timezones_json___default.a
};

var TimezonePicker =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TimezonePicker, _React$Component);

  _createClass(TimezonePicker, null, [{
    key: "zoneCompare",
    value: function zoneCompare(key, filter) {
      return key.toLowerCase().indexOf(filter.toLowerCase().trim()) !== -1;
    }
  }]);

  function TimezonePicker(props) {
    var _this;

    _classCallCheck(this, TimezonePicker);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimezonePicker).call(this, props));
    _this.filterItems = _this.filterItems.bind(_assertThisInitialized(_this));
    _this.getTimezone = _this.getTimezone.bind(_assertThisInitialized(_this));
    _this.handleBlur = _this.handleBlur.bind(_assertThisInitialized(_this));
    _this.handleFilterChange = _this.handleFilterChange.bind(_assertThisInitialized(_this));
    _this.handleFocus = _this.handleFocus.bind(_assertThisInitialized(_this));
    _this.handleKeyPress = _this.handleKeyPress.bind(_assertThisInitialized(_this));
    _this.handleMouseEnter = _this.handleMouseEnter.bind(_assertThisInitialized(_this));
    _this.handleSelect = _this.handleSelect.bind(_assertThisInitialized(_this));
    _this.scrollToIndex = _this.scrollToIndex.bind(_assertThisInitialized(_this));
    _this.state = {
      focused: 0,
      isOpen: false,
      timezones: _this.props.timezones,
      value: props.value || props.defaultValue || props.initialValue
    };
    _this.prevValue = _this.state.value;
    return _this;
  }

  _createClass(TimezonePicker, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        var value = this.getTimezone(nextProps.value) || '';
        this.setState({
          value: value
        });
      }
    }
  }, {
    key: "getTimezone",
    value: function getTimezone(query) {
      var _this2 = this;

      if (!query) {
        return null;
      }

      return Object.keys(this.props.timezones).find(function (zone) {
        return zone === query || _this2.props.timezones[zone] === query;
      });
    }
  }, {
    key: "filterItems",
    value: function filterItems(filter) {
      var _this3 = this;

      var timezones = this.props.timezones;

      if (filter.trim().length === 0) {
        return timezones;
      }

      var filteredTimezones = {};
      Object.keys(timezones).forEach(function (key) {
        if (_this3.constructor.zoneCompare(key, filter) || _this3.constructor.zoneCompare(timezones[key], filter)) {
          filteredTimezones[key] = timezones[key];
        }
      });
      return filteredTimezones;
    }
  }, {
    key: "handleBlur",
    value: function handleBlur() {
      var tz = this.getTimezone(this.state.value);

      if (tz === undefined) {
        this.setState({
          value: '',
          timezones: this.props.timezones
        });

        if (this.prevValue) {
          this.props.onChange('');
          this.prevValue = '';
        }
      }

      this.setState({
        isOpen: false
      });
      this.props.onBlur();
    }
  }, {
    key: "handleFilterChange",
    value: function handleFilterChange(e) {
      var timezones = this.filterItems(e.target.value);
      this.setState({
        focused: 0,
        isOpen: Object.keys(timezones).length > 0,
        value: e.target.value || '',
        timezones: timezones
      });
    }
  }, {
    key: "handleFocus",
    value: function handleFocus(ev) {
      var _this4 = this;

      var _this$state = this.state,
          value = _this$state.value,
          timezones = _this$state.timezones;

      if (ev) {
        ev.target.select();
      }

      if (value) {
        var keyz = Object.keys(timezones);

        var _loop = function _loop(i) {
          if (keyz[i] === value || timezones[keyz[i]] === value) {
            _this4.setState({
              isOpen: true,
              focused: i
            }, function () {
              _this4.scrollToIndex(i);
            });

            _this4.props.onFocus(ev);

            return {
              v: void 0
            };
          }
        };

        for (var i = 0; i < keyz.length; ++i) {
          var _ret = _loop(i);

          if (_typeof(_ret) === "object") return _ret.v;
        }
      }

      this.setState({
        isOpen: true
      });
      this.props.onFocus();
    }
  }, {
    key: "handleKeyPress",
    value: function handleKeyPress(e) {
      var _this$state2 = this.state,
          focused = _this$state2.focused,
          timezones = _this$state2.timezones;

      if (e.which === UP_KEY || e.which === DOWN_KEY) {
        e.preventDefault();
        var newFocused;

        if (e.which === UP_KEY) {
          newFocused = focused === 0 ? Object.keys(timezones).length - 1 : focused - 1;
        } else {
          newFocused = focused === Object.keys(timezones).length - 1 ? 0 : focused + 1;
        }

        this.setState({
          focused: newFocused
        });
        this.scrollToIndex(newFocused);
      } else if (e.which === ENTER_KEY || e.which === RETURN_KEY) {
        this.handleSelect(focused);
      } else if (e.which === ESCAPE_KEY) {
        Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.refInput).blur();
        this.handleBlur();
      }

      this.props.onKeyDown(e);
    }
  }, {
    key: "handleMouseEnter",
    value: function handleMouseEnter(idx, e) {
      if (e.pageX !== this.mouseX || e.pageY !== this.mouseY) {
        if (this.disableMouse) {
          this.disableMouse = false;
          this.mouseY = e.pageY;
          return;
        }

        this.mouseX = e.pageX;
        this.mouseY = e.pageY;
        this.setState({
          focused: idx
        });
      }
    }
  }, {
    key: "handleSelect",
    value: function handleSelect(index) {
      var _this5 = this;

      var timezones = this.state.timezones;
      var key = Object.keys(timezones)[index] || '';
      var value = timezones[key] || '';

      if (this.prevValue !== value) {
        this.prevValue = value;
        this.props.onChange(value);
      }

      this.setState({
        focused: 0,
        isOpen: false,
        timezones: this.props.timezones,
        value: key
      }, function () {
        Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(_this5.refInput).blur();
      });
    }
  }, {
    key: "scrollToIndex",
    value: function scrollToIndex(idx) {
      var index = Math.max(0, idx - 3);
      this.disableMouse = true;
      Object(__WEBPACK_IMPORTED_MODULE_2_react_dom__["findDOMNode"])(this.list).scrollTop = this.list.children[index].offsetTop;
    }
  }, {
    key: "render",
    value: function render() {
      var _this6 = this;

      var _this$state3 = this.state,
          isOpen = _this$state3.isOpen,
          value = _this$state3.value;

      var _this$props = this.props,
          absolute = _this$props.absolute,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          style = _this$props.style,
          disabled = _this$props.disabled,
          restProps = _objectWithoutProperties(_this$props, ["absolute", "className", "placeholder", "style", "disabled"]);

      var rest = Object.assign({}, restProps);
      ['defaultValue', 'initialValue', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'timezones', 'value'].forEach(function (p) {
        return delete rest[p];
      });
      var isSelected = !isOpen && value;
      var containerClasses = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('timezone-picker', className, {
        'timezone-picker-open': isOpen,
        'timezone-picker-selected': isSelected
      });
      var listClass = __WEBPACK_IMPORTED_MODULE_3_classnames___default()('timezone-picker-list', "timezone-picker-list-".concat(absolute ? 'abs' : 'rel'));
      var timezones = Object.keys(this.state.timezones).map(function (zone, idx) {
        var focused = _this6.state.focused === idx;
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()('timezone-picker-list-item', {
            'timezone-picker-list-item-active': focused
          }),
          key: zone,
          onMouseDown: function onMouseDown() {
            _this6.handleSelect(idx);
          },
          onMouseEnter: function onMouseEnter(e) {
            _this6.handleMouseEnter(idx, e);
          },
          onTouchStart: function onTouchStart() {
            _this6.handleSelect(idx);
          }
        }, zone);
      });
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: containerClasses,
        style: style
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        className: "timezone-picker-textfield"
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_bootstrap_FormControl___default.a, _extends({
        onBlur: this.handleBlur,
        onChange: this.handleFilterChange,
        onFocus: this.handleFocus,
        disabled: disabled,
        onKeyDown: this.handleKeyPress,
        placeholder: placeholder,
        ref: function ref(c) {
          _this6.refInput = c;
        },
        value: this.getTimezone(value) || value
      }, rest)), isOpen && __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: listClass,
        ref: function ref(c) {
          _this6.list = c;
        }
      }, timezones)));
    }
  }]);

  return TimezonePicker;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

TimezonePicker.propTypes = propTypes;
TimezonePicker.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["default"] = (TimezonePicker);

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap/FormControl");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {"(GMT-11:00) Pago Pago":"Pacific/Pago_Pago","(GMT-10:00) Hawaii Time":"Pacific/Honolulu","(GMT-08:00) Pacific Time":"America/Los_Angeles","(GMT-08:00) Pacific Time - Tijuana":"America/Tijuana","(GMT-07:00) Mountain Time":"America/Denver","(GMT-07:00) Mountain Time - Arizona":"America/Phoenix","(GMT-07:00) Mountain Time - Chihuahua, Mazatlan":"America/Mazatlan","(GMT-06:00) Central Time":"America/Chicago","(GMT-06:00) Central Time - Mexico City":"America/Mexico_City","(GMT-06:00) Central Time - Regina":"America/Regina","(GMT-06:00) Guatemala":"America/Guatemala","(GMT-05:00) Bogota":"America/Bogota","(GMT-05:00) Eastern Time":"America/New_York","(GMT-05:00) Lima":"America/Lima","(GMT-04:30) Caracas":"America/Caracas","(GMT-04:00) Atlantic Time - Halifax":"America/Halifax","(GMT-04:00) Guyana":"America/Guyana","(GMT-04:00) La Paz":"America/La_Paz","(GMT-03:00) Buenos Aires":"America/Argentina/Buenos_Aires","(GMT-03:00) Godthab":"America/Godthab","(GMT-03:00) Montevideo":"America/Montevideo","(GMT-03:30) Newfoundland Time - St. Johns":"America/St_Johns","(GMT-03:00) Santiago":"America/Santiago","(GMT-02:00) Sao Paulo":"America/Sao_Paulo","(GMT-02:00) South Georgia":"Atlantic/South_Georgia","(GMT-01:00) Azores":"Atlantic/Azores","(GMT-01:00) Cape Verde":"Atlantic/Cape_Verde","(GMT+00:00) Casablanca":"Africa/Casablanca","(GMT+00:00) Dublin":"Europe/Dublin","(GMT+00:00) Lisbon":"Europe/Lisbon","(GMT+00:00) London":"Europe/London","(GMT+00:00) Monrovia":"Africa/Monrovia","(GMT+01:00) Algiers":"Africa/Algiers","(GMT+01:00) Amsterdam":"Europe/Amsterdam","(GMT+01:00) Berlin":"Europe/Berlin","(GMT+01:00) Brussels":"Europe/Brussels","(GMT+01:00) Budapest":"Europe/Budapest","(GMT+01:00) Central European Time - Belgrade":"Europe/Belgrade","(GMT+01:00) Central European Time - Prague":"Europe/Prague","(GMT+01:00) Copenhagen":"Europe/Copenhagen","(GMT+01:00) Madrid":"Europe/Madrid","(GMT+01:00) Paris":"Europe/Paris","(GMT+01:00) Rome":"Europe/Rome","(GMT+01:00) Stockholm":"Europe/Stockholm","(GMT+01:00) Vienna":"Europe/Vienna","(GMT+01:00) Warsaw":"Europe/Warsaw","(GMT+02:00) Athens":"Europe/Athens","(GMT+02:00) Bucharest":"Europe/Bucharest","(GMT+02:00) Cairo":"Africa/Cairo","(GMT+02:00) Jerusalem":"Asia/Jerusalem","(GMT+02:00) Johannesburg":"Africa/Johannesburg","(GMT+02:00) Helsinki":"Europe/Helsinki","(GMT+02:00) Kiev":"Europe/Kiev","(GMT+02:00) Moscow-01 - Kaliningrad":"Europe/Kaliningrad","(GMT+02:00) Riga":"Europe/Riga","(GMT+02:00) Sofia":"Europe/Sofia","(GMT+02:00) Tallinn":"Europe/Tallinn","(GMT+02:00) Vilnius":"Europe/Vilnius","(GMT+03:00) Istanbul":"Europe/Istanbul","(GMT+03:00) Baghdad":"Asia/Baghdad","(GMT+03:00) Nairobi":"Africa/Nairobi","(GMT+03:00) Minsk":"Europe/Minsk","(GMT+03:00) Riyadh":"Asia/Riyadh","(GMT+03:00) Moscow+00 - Moscow":"Europe/Moscow","(GMT+03:30) Tehran":"Asia/Tehran","(GMT+04:00) Baku":"Asia/Baku","(GMT+04:00) Moscow+01 - Samara":"Europe/Samara","(GMT+04:00) Tbilisi":"Asia/Tbilisi","(GMT+04:00) Yerevan":"Asia/Yerevan","(GMT+04:30) Kabul":"Asia/Kabul","(GMT+05:00) Karachi":"Asia/Karachi","(GMT+05:00) Moscow+02 - Yekaterinburg":"Asia/Yekaterinburg","(GMT+05:00) Tashkent":"Asia/Tashkent","(GMT+05:30) Colombo":"Asia/Colombo","(GMT+06:00) Almaty":"Asia/Almaty","(GMT+06:00) Dhaka":"Asia/Dhaka","(GMT+06:30) Rangoon":"Asia/Rangoon","(GMT+07:00) Bangkok":"Asia/Bangkok","(GMT+07:00) Jakarta":"Asia/Jakarta","(GMT+07:00) Moscow+04 - Krasnoyarsk":"Asia/Krasnoyarsk","(GMT+08:00) China Time - Beijing":"Asia/Shanghai","(GMT+08:00) Hong Kong":"Asia/Hong_Kong","(GMT+08:00) Kuala Lumpur":"Asia/Kuala_Lumpur","(GMT+08:00) Moscow+05 - Irkutsk":"Asia/Irkutsk","(GMT+08:00) Singapore":"Asia/Singapore","(GMT+08:00) Taipei":"Asia/Taipei","(GMT+08:00) Ulaanbaatar":"Asia/Ulaanbaatar","(GMT+08:00) Western Time - Perth":"Australia/Perth","(GMT+09:00) Moscow+06 - Yakutsk":"Asia/Yakutsk","(GMT+09:00) Seoul":"Asia/Seoul","(GMT+09:00) Tokyo":"Asia/Tokyo","(GMT+09:30) Central Time - Darwin":"Australia/Darwin","(GMT+10:00) Eastern Time - Brisbane":"Australia/Brisbane","(GMT+10:00) Guam":"Pacific/Guam","(GMT+10:00) Moscow+07 - Magadan":"Asia/Magadan","(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk":"Asia/Vladivostok","(GMT+10:00) Port Moresby":"Pacific/Port_Moresby","(GMT+10:30) Central Time - Adelaide":"Australia/Adelaide","(GMT+11:00) Eastern Time - Hobart":"Australia/Hobart","(GMT+11:00) Eastern Time - Melbourne, Sydney":"Australia/Sydney","(GMT+11:00) Guadalcanal":"Pacific/Guadalcanal","(GMT+11:00) Noumea":"Pacific/Noumea","(GMT+12:00) Majuro":"Pacific/Majuro","(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy":"Asia/Kamchatka","(GMT+13:00) Auckland":"Pacific/Auckland","(GMT+13:00) Fakaofo":"Pacific/Fakaofo","(GMT+13:00) Fiji":"Pacific/Fiji","(GMT+13:00) Tongatapu":"Pacific/Tongatapu","(GMT+14:00) Apia":"Pacific/Apia"}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
(function webpackMissingModule() { throw new Error("Cannot find module \"dist/react-bootstrap-timezone-picker.js\""); }());


/***/ })
/******/ ]);