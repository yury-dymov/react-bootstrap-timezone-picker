'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _FormControl = require('react-bootstrap/lib/FormControl');

var _FormControl2 = _interopRequireDefault(_FormControl);

var _keys = require('lodash/keys');

var _keys2 = _interopRequireDefault(_keys);

var _timezones = require('./timezones.json');

var _timezones2 = _interopRequireDefault(_timezones);

require('./index.css');

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
      focused: 0,
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
                _this.scrollToIndex(i);
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
      var tz = _this.getTimezone(_this.state.value);

      if (tz === undefined) {
        _this.setState({ value: '', timezones: _this.props.timezones });
        _this.props.onChange('');
      }

      _this.setState({ isOpen: false });
    }, _this.handleFilterChange = function (e) {
      var timezones = _this.filterItems(e.target.value);

      _this.setState({
        timezones: timezones,
        isOpen: (0, _keys2.default)(timezones).length > 0,
        focused: 0,
        value: e.target.value || ''
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

        _this.scrollToIndex(newFocused);
      } else if (e.which === ENTER_KEY) {
        if (isOpen) {
          _this.handleSelect(focused);
        } else {
          e.target.blur();
        }
      }
    }, _this.handleSelect = function (index) {
      var timezones = _this.state.timezones;


      var key = (0, _keys2.default)(timezones)[index] || '';
      var value = timezones[key] || '';

      _this.props.onChange(value);

      _this.setState({
        focused: 0,
        isOpen: false,
        timezones: _this.props.timezones,
        value: key
      }, function () {
        return (0, _reactDom.findDOMNode)(_this.input).blur();
      });
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
      return key.toLowerCase().includes(filter.toLowerCase().trim());
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
    }, _this.scrollToIndex = function (idx) {
      var index = Math.max(0, idx - 3);

      _this.disableMouse = true;
      (0, _reactDom.findDOMNode)(_this.list).scrollTop = _this.list.children[index].offsetTop;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(TimezonePicker, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.value !== this.props.value) {
        var value = this.getTimezone(nextProps.value) || '';

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
            value: this.getTimezone(value) || value,
            ref: function ref(c) {
              return _this2.input = c;
            }
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
  initialValue: '',
  placeholder: '',
  onChange: function onChange() {},
  overflow: false
};
exports.default = TimezonePicker;