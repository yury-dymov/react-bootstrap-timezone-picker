(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("classnames"), require("lodash/keys"), require("react"), require("react-bootstrap/lib/FormControl"));
	else if(typeof define === 'function' && define.amd)
		define(["classnames", "lodash/keys", "react", "react-bootstrap/lib/FormControl"], factory);
	else if(typeof exports === 'object')
		exports["react-bootstrap-timezone-picker"] = factory(require("classnames"), require("lodash/keys"), require("react"), require("react-bootstrap/lib/FormControl"));
	else
		root["react-bootstrap-timezone-picker"] = factory(root["classnames"], root["lodash/keys"], root["react"], root["react-bootstrap/lib/FormControl"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(5);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(3);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _FormControl = __webpack_require__(6);

	var _FormControl2 = _interopRequireDefault(_FormControl);

	var _keys = __webpack_require__(4);

	var _keys2 = _interopRequireDefault(_keys);

	var _timezones = __webpack_require__(2);

	var _timezones2 = _interopRequireDefault(_timezones);

	__webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var UP_KEY = 38;
	var DOWN_KEY = 40;
	var ENTER_KEY = 13;

	var TimezonePicker = function (_Component) {
	  _inherits(TimezonePicker, _Component);

	  function TimezonePicker() {
	    var _Object$getPrototypeO;

	    var _temp, _this, _ret;

	    _classCallCheck(this, TimezonePicker);

	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }

	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(TimezonePicker)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.state = {
	      isOpen: false,
	      focused: -1,
	      value: _this.props.value || _this.props.initialValue,
	      timezones: _this.props.timezones
	    }, _this.handleFocus = function () {
	      var _this$state = _this.state;
	      var value = _this$state.value;
	      var timezones = _this$state.timezones;


	      if (value) {
	        var keyz = (0, _keys2.default)(timezones);

	        var _loop = function _loop(i) {
	          if (keyz[i] === value || timezones[keyz[i]] === value) {
	            return {
	              v: _this.setState({ isOpen: true, focused: i }, function () {
	                _this.disableMouse = true;
	                _this.list.children[Math.max(0, i - 3)].scrollIntoView();
	              })
	            };
	          }
	        };

	        for (var i = 0; i < keyz.length; ++i) {
	          var _ret2 = _loop(i);

	          if ((typeof _ret2 === 'undefined' ? 'undefined' : _typeof(_ret2)) === "object") return _ret2.v;
	        }
	      }

	      _this.setState({ isOpen: true });
	    }, _this.handleBlur = function () {
	      if (!_this.getTimezone(_this.state.value)) {
	        _this.setState({ value: '', timezones: _this.props.timezones });
	        _this.props.onChange('');
	      }

	      _this.setState({ isOpen: false });
	    }, _this.handleFilterChange = function (e) {
	      _this.setState({
	        timezones: _this.filterItems(e.target.value),
	        isOpen: true,
	        focused: -1,
	        value: e.target.value
	      });
	    }, _this.handleKeyPress = function (e) {
	      var _this$state2 = _this.state;
	      var focused = _this$state2.focused;
	      var timezones = _this$state2.timezones;
	      var isOpen = _this$state2.isOpen;


	      if (e.which === UP_KEY || e.which === DOWN_KEY) {
	        e.preventDefault();

	        if (!isOpen) {
	          return _this.setState({ isOpen: true }, _this.handleFocus);
	        }

	        var newFocused = void 0;

	        if (e.which === UP_KEY) {
	          newFocused = focused === 0 ? (0, _keys2.default)(timezones).length - 1 : focused - 1;
	        } else {
	          newFocused = focused === (0, _keys2.default)(timezones).length - 1 ? 0 : focused + 1;
	        }

	        _this.setState({ focused: newFocused });

	        _this.disableMouse = true;
	        _this.list.children[Math.max(0, newFocused - 3)].scrollIntoView();
	      } else if (e.which === ENTER_KEY) {
	        _this.handleSelect(focused);

	        if (!isOpen) {
	          e.target.blur();
	        }
	      }
	    }, _this.handleSelect = function (index) {
	      var timezones = _this.state.timezones;


	      var key = (0, _keys2.default)(timezones)[index];
	      var value = timezones[key];

	      _this.setState({
	        focused: -1,
	        isOpen: false,
	        timezones: _this.props.timezones,
	        value: key
	      });

	      _this.props.onChange(value);
	    }, _this.handleMouseOver = function (idx, e) {
	      if (e.pageX !== _this.mouseX || e.pageY !== _this.mouseY) {
	        if (_this.disableMouse) {
	          _this.disableMouse = false;
	          _this.mouseY = e.pageY;
	          return;
	        }

	        _this.mouseX = e.pageX;
	        _this.mouseY = e.pageY;
	        _this.setState({ focused: idx });
	      }
	    }, _this.getTimezone = function (query) {
	      if (!query) {
	        return null;
	      }

	      return (0, _keys2.default)(_this.props.timezones).find(function (zone) {
	        return zone === query || _this.props.timezones[zone] === query;
	      });
	    }, _this.zoneCompare = function (key, filter) {
	      return key.toLowerCase().includes(filter.toLowerCase().replace(/\s/g, ''));
	    }, _this.filterItems = function (filter) {
	      var timezones = _this.props.timezones;


	      if (filter.trim().length === 0) {
	        return timezones;
	      }

	      var filteredTimezones = {};

	      (0, _keys2.default)(timezones).forEach(function (key) {
	        if (_this.zoneCompare(key, filter) || _this.zoneCompare(timezones[key], filter)) {
	          filteredTimezones[key] = timezones[key];
	        }
	      });

	      return filteredTimezones;
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }

	  _createClass(TimezonePicker, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.value !== this.props.value) {
	        var value = this.getTimezone(nextProps.value);

	        this.setState({ value: value });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _state = this.state;
	      var value = _state.value;
	      var isOpen = _state.isOpen;
	      var _props = this.props;
	      var className = _props.className;
	      var style = _props.style;
	      var placeholder = _props.placeholder;
	      var absolute = _props.absolute;


	      var isSelected = !isOpen && value;
	      var containerClasses = (0, _classnames2.default)('timezone-picker', className, {
	        'timezone-picker-open': isOpen,
	        'timezone-picker-selected': isSelected
	      });

	      var listClass = (0, _classnames2.default)('timezone-picker-list', 'timezone-picker-list-' + (absolute ? 'abs' : 'rel'));

	      var timezones = (0, _keys2.default)(this.state.timezones).map(function (zone, idx) {
	        var focused = _this2.state.focused === idx;

	        return _react2.default.createElement(
	          'li',
	          {
	            key: idx,
	            onMouseDown: function onMouseDown() {
	              return _this2.handleSelect(idx);
	            },
	            onMouseOver: function onMouseOver(e) {
	              return _this2.handleMouseOver(idx, e);
	            },
	            className: (0, _classnames2.default)('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused })
	          },
	          zone
	        );
	      });

	      return _react2.default.createElement(
	        'div',
	        { style: style, className: containerClasses },
	        _react2.default.createElement(
	          'div',
	          { className: 'timezone-picker-textfield' },
	          _react2.default.createElement(_FormControl2.default, {
	            placeholder: placeholder,
	            onFocus: this.handleFocus,
	            onBlur: this.handleBlur,
	            onChange: this.handleFilterChange,
	            onKeyDown: this.handleKeyPress,
	            value: this.getTimezone(value) || value
	          }),
	          isOpen && _react2.default.createElement(
	            'ul',
	            { className: listClass, ref: function ref(c) {
	                return _this2.list = c;
	              } },
	            timezones
	          )
	        )
	      );
	    }
	  }]);

	  return TimezonePicker;
	}(_react.Component);

	TimezonePicker.propTypes = {
	  className: _react.PropTypes.string,
	  placeholder: _react.PropTypes.string,
	  style: _react.PropTypes.any,
	  timezones: _react.PropTypes.object,
	  initialValue: _react.PropTypes.object,
	  value: _react.PropTypes.object,
	  onChange: _react.PropTypes.func,
	  absolute: _react.PropTypes.bool
	};
	TimezonePicker.defaultProps = {
	  timezones: _timezones2.default,
	  placeholder: '',
	  onChange: function onChange() {},
	  overflow: false
	};
	exports.default = TimezonePicker;

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
		"(GMT-11:00) Pago Pago": "Pacific/Pago_Pago",
		"(GMT-10:00) Hawaii Time": "Pacific/Honolulu",
		"(GMT-08:00) Pacific Time": "America/Los_Angeles",
		"(GMT-08:00) Pacific Time - Tijuana": "America/Tijuana",
		"(GMT-07:00) Mountain Time": "America/Denver",
		"(GMT-07:00) Mountain Time - Arizona": "America/Phoenix",
		"(GMT-07:00) Mountain Time - Chihuahua, Mazatlan": "America/Mazatlan",
		"(GMT-06:00) Central Time": "America/Chicago",
		"(GMT-06:00) Central Time - Mexico City": "America/Mexico_City",
		"(GMT-06:00) Central Time - Regina": "America/Regina",
		"(GMT-06:00) Guatemala": "America/Guatemala",
		"(GMT-05:00) Bogota": "America/Bogota",
		"(GMT-05:00) Eastern Time": "America/New_York",
		"(GMT-05:00) Lima": "America/Lima",
		"(GMT-04:30) Caracas": "America/Caracas",
		"(GMT-04:00) Atlantic Time - Halifax": "America/Halifax",
		"(GMT-04:00) Guyana": "America/Guyana",
		"(GMT-04:00) La Paz": "America/La_Paz",
		"(GMT-03:00) Buenos Aires": "America/Argentina/Buenos_Aires",
		"(GMT-03:00) Godthab": "America/Godthab",
		"(GMT-03:00) Montevideo": "America/Montevideo",
		"(GMT-03:30) Newfoundland Time - St. Johns": "America/St_Johns",
		"(GMT-03:00) Santiago": "America/Santiago",
		"(GMT-02:00) Sao Paulo": "America/Sao_Paulo",
		"(GMT-02:00) South Georgia": "Atlantic/South_Georgia",
		"(GMT-01:00) Azores": "Atlantic/Azores",
		"(GMT-01:00) Cape Verde": "Atlantic/Cape_Verde",
		"(GMT+00:00) Casablanca": "Africa/Casablanca",
		"(GMT+00:00) Dublin": "Europe/Dublin",
		"(GMT+00:00) Lisbon": "Europe/Lisbon",
		"(GMT+00:00) London": "Europe/London",
		"(GMT+00:00) Monrovia": "Africa/Monrovia",
		"(GMT+01:00) Algiers": "Africa/Algiers",
		"(GMT+01:00) Amsterdam": "Europe/Amsterdam",
		"(GMT+01:00) Berlin": "Europe/Berlin",
		"(GMT+01:00) Brussels": "Europe/Brussels",
		"(GMT+01:00) Budapest": "Europe/Budapest",
		"(GMT+01:00) Central European Time - Belgrade": "Europe/Belgrade",
		"(GMT+01:00) Central European Time - Prague": "Europe/Prague",
		"(GMT+01:00) Copenhagen": "Europe/Copenhagen",
		"(GMT+01:00) Madrid": "Europe/Madrid",
		"(GMT+01:00) Paris": "Europe/Paris",
		"(GMT+01:00) Rome": "Europe/Rome",
		"(GMT+01:00) Stockholm": "Europe/Stockholm",
		"(GMT+01:00) Vienna": "Europe/Vienna",
		"(GMT+01:00) Warsaw": "Europe/Warsaw",
		"(GMT+02:00) Athens": "Europe/Athens",
		"(GMT+02:00) Bucharest": "Europe/Bucharest",
		"(GMT+02:00) Cairo": "Africa/Cairo",
		"(GMT+02:00) Jerusalem": "Asia/Jerusalem",
		"(GMT+02:00) Johannesburg": "Africa/Johannesburg",
		"(GMT+02:00) Helsinki": "Europe/Helsinki",
		"(GMT+02:00) Istanbul": "Europe/Istanbul",
		"(GMT+02:00) Kiev": "Europe/Kiev",
		"(GMT+02:00) Moscow-01 - Kaliningrad": "Europe/Kaliningrad",
		"(GMT+02:00) Riga": "Europe/Riga",
		"(GMT+02:00) Sofia": "Europe/Sofia",
		"(GMT+02:00) Tallinn": "Europe/Tallinn",
		"(GMT+02:00) Vilnius": "Europe/Vilnius",
		"(GMT+03:00) Baghdad": "Asia/Baghdad",
		"(GMT+03:00) Nairobi": "Africa/Nairobi",
		"(GMT+03:00) Minsk": "Europe/Minsk",
		"(GMT+03:00) Riyadh": "Asia/Riyadh",
		"(GMT+03:00) Moscow+00 - Moscow": "Europe/Moscow",
		"(GMT+03:30) Tehran": "Asia/Tehran",
		"(GMT+04:00) Baku": "Asia/Baku",
		"(GMT+04:00) Moscow+01 - Samara": "Europe/Samara",
		"(GMT+04:00) Tbilisi": "Asia/Tbilisi",
		"(GMT+04:00) Yerevan": "Asia/Yerevan",
		"(GMT+04:30) Kabul": "Asia/Kabul",
		"(GMT+05:00) Karachi": "Asia/Karachi",
		"(GMT+05:00) Moscow+02 - Yekaterinburg": "Asia/Yekaterinburg",
		"(GMT+05:00) Tashkent": "Asia/Tashkent",
		"(GMT+05:30) Colombo": "Asia/Colombo",
		"(GMT+06:00) Almaty": "Asia/Almaty",
		"(GMT+06:00) Dhaka": "Asia/Dhaka",
		"(GMT+06:30) Rangoon": "Asia/Rangoon",
		"(GMT+07:00) Bangkok": "Asia/Bangkok",
		"(GMT+07:00) Jakarta": "Asia/Jakarta",
		"(GMT+07:00) Moscow+04 - Krasnoyarsk": "Asia/Krasnoyarsk",
		"(GMT+08:00) China Time - Beijing": "Asia/Shanghai",
		"(GMT+08:00) Hong Kong": "Asia/Hong_Kong",
		"(GMT+08:00) Kuala Lumpur": "Asia/Kuala_Lumpur",
		"(GMT+08:00) Moscow+05 - Irkutsk": "Asia/Irkutsk",
		"(GMT+08:00) Singapore": "Asia/Singapore",
		"(GMT+08:00) Taipei": "Asia/Taipei",
		"(GMT+08:00) Ulaanbaatar": "Asia/Ulaanbaatar",
		"(GMT+08:00) Western Time - Perth": "Australia/Perth",
		"(GMT+09:00) Moscow+06 - Yakutsk": "Asia/Yakutsk",
		"(GMT+09:00) Seoul": "Asia/Seoul",
		"(GMT+09:00) Tokyo": "Asia/Tokyo",
		"(GMT+09:30) Central Time - Darwin": "Australia/Darwin",
		"(GMT+10:00) Eastern Time - Brisbane": "Australia/Brisbane",
		"(GMT+10:00) Guam": "Pacific/Guam",
		"(GMT+10:00) Moscow+07 - Magadan": "Asia/Magadan",
		"(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk": "Asia/Vladivostok",
		"(GMT+10:00) Port Moresby": "Pacific/Port_Moresby",
		"(GMT+10:30) Central Time - Adelaide": "Australia/Adelaide",
		"(GMT+11:00) Eastern Time - Hobart": "Australia/Hobart",
		"(GMT+11:00) Eastern Time - Melbourne, Sydney": "Australia/Sydney",
		"(GMT+11:00) Guadalcanal": "Pacific/Guadalcanal",
		"(GMT+11:00) Noumea": "Pacific/Noumea",
		"(GMT+12:00) Majuro": "Pacific/Majuro",
		"(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy": "Asia/Kamchatka",
		"(GMT+13:00) Auckland": "Pacific/Auckland",
		"(GMT+13:00) Fakaofo": "Pacific/Fakaofo",
		"(GMT+13:00) Fiji": "Pacific/Fiji",
		"(GMT+13:00) Tongatapu": "Pacific/Tongatapu",
		"(GMT+14:00) Apia": "Pacific/Apia"
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("lodash/keys");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-bootstrap/lib/FormControl");

/***/ }
/******/ ])
});
;