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

var propTypes = {
  absolute: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  initialValue: _react.PropTypes.any,
  onChange: _react.PropTypes.func,
  placeholder: _react.PropTypes.string,
  style: _react.PropTypes.any,
  timezones: _react.PropTypes.object,
  value: _react.PropTypes.any
};

var defaultProps = {
  initialValue: '',
  placeholder: '',
  onChange: function onChange() {},
  overflow: false,
  timezones: _timezones2.default
};

var TimezonePicker = function (_Component) {
  _inherits(TimezonePicker, _Component);

  function TimezonePicker(props) {
    _classCallCheck(this, TimezonePicker);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TimezonePicker).call(this, props));

    _this.filterItems = _this.filterItems.bind(_this);
    _this.getTimezone = _this.getTimezone.bind(_this);
    _this.handleBlur = _this.handleBlur.bind(_this);
    _this.handleFilterChange = _this.handleFilterChange.bind(_this);
    _this.handleFocus = _this.handleFocus.bind(_this);
    _this.handleKeyPress = _this.handleKeyPress.bind(_this);
    _this.handleMouseOver = _this.handleMouseOver.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    _this.scrollToIndex = _this.scrollToIndex.bind(_this);
    _this.zoneCompare = _this.zoneCompare.bind(_this);

    _this.state = {
      focused: 0,
      isOpen: false,
      timezones: _this.props.timezones,
      value: props.value || props.initialValue
    };
    return _this;
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
    key: 'handleBlur',
    value: function handleBlur() {
      var tz = this.getTimezone(this.state.value);

      if (tz === undefined) {
        this.setState({ value: '', timezones: this.props.timezones });
        this.props.onChange('');
      }

      this.setState({ isOpen: false });
    }
  }, {
    key: 'handleFilterChange',
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
    key: 'handleFocus',
    value: function handleFocus() {
      var _this2 = this;

      var _state = this.state;
      var value = _state.value;
      var timezones = _state.timezones;


      if (value) {
        var keyz = Object.keys(timezones);

        var _loop = function _loop(i) {
          if (keyz[i] === value || timezones[keyz[i]] === value) {
            return {
              v: _this2.setState({ isOpen: true, focused: i }, function () {
                _this2.scrollToIndex(i);
              })
            };
          }
        };

        for (var i = 0; i < keyz.length; ++i) {
          var _ret = _loop(i);

          if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
        }
      }

      this.setState({ isOpen: true });
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var _state2 = this.state;
      var focused = _state2.focused;
      var timezones = _state2.timezones;
      var isOpen = _state2.isOpen;


      if (e.which === UP_KEY || e.which === DOWN_KEY) {
        e.preventDefault();

        if (!isOpen) {
          return this.setState({ isOpen: true }, this.handleFocus);
        }

        var newFocused = void 0;

        if (e.which === UP_KEY) {
          newFocused = focused === 0 ? Object.keys(timezones).length - 1 : focused - 1;
        } else {
          newFocused = focused === Object.keys(timezones).length - 1 ? 0 : focused + 1;
        }

        this.setState({ focused: newFocused });

        this.scrollToIndex(newFocused);
      } else if (e.which === ENTER_KEY) {
        if (isOpen) {
          this.handleSelect(focused);
        } else {
          e.target.blur();
        }
      }
    }
  }, {
    key: 'handleMouseOver',
    value: function handleMouseOver(idx, e) {
      if (e.pageX !== this.mouseX || e.pageY !== this.mouseY) {
        if (this.disableMouse) {
          this.disableMouse = false;
          this.mouseY = e.pageY;
          return;
        }

        this.mouseX = e.pageX;
        this.mouseY = e.pageY;
        this.setState({ focused: idx });
      }
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(index) {
      var _this3 = this;

      var timezones = this.state.timezones;


      var key = Object.keys(timezones)[index] || '';
      var value = timezones[key] || '';

      this.props.onChange(value);

      this.setState({
        focused: 0,
        isOpen: false,
        timezones: this.props.timezones,
        value: key
      }, function () {
        (0, _reactDom.findDOMNode)(_this3.input).blur();
      });
    }
  }, {
    key: 'getTimezone',
    value: function getTimezone(query) {
      var _this4 = this;

      if (!query) {
        return null;
      }

      return Object.keys(this.props.timezones).find(function (zone) {
        return zone === query || _this4.props.timezones[zone] === query;
      });
    }
  }, {
    key: 'filterItems',
    value: function filterItems(filter) {
      var _this5 = this;

      var timezones = this.props.timezones;


      if (filter.trim().length === 0) {
        return timezones;
      }

      var filteredTimezones = {};

      Object.keys(timezones).forEach(function (key) {
        if (_this5.zoneCompare(key, filter) || _this5.zoneCompare(timezones[key], filter)) {
          filteredTimezones[key] = timezones[key];
        }
      });

      return filteredTimezones;
    }
  }, {
    key: 'scrollToIndex',
    value: function scrollToIndex(idx) {
      var index = Math.max(0, idx - 3);

      this.disableMouse = true;
      (0, _reactDom.findDOMNode)(this.list).scrollTop = this.list.children[index].offsetTop;
    }
  }, {
    key: 'zoneCompare',
    value: function zoneCompare(key, filter) {
      return key.toLowerCase().includes(filter.toLowerCase().trim());
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _state3 = this.state;
      var value = _state3.value;
      var isOpen = _state3.isOpen;
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

      var timezones = Object.keys(this.state.timezones).map(function (zone, idx) {
        var focused = _this6.state.focused === idx;

        return _react2.default.createElement(
          'li',
          {
            className: (0, _classnames2.default)('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused }),
            key: zone,
            onMouseDown: function onMouseDown() {
              _this6.handleSelect(idx);
            },
            onMouseOver: function onMouseOver(e) {
              _this6.handleMouseOver(idx, e);
            }
          },
          zone
        );
      });

      return _react2.default.createElement(
        'div',
        { className: containerClasses, style: style },
        _react2.default.createElement(
          'div',
          { className: 'timezone-picker-textfield' },
          _react2.default.createElement(_FormControl2.default, {
            onChange: this.handleFilterChange,
            onBlur: this.handleBlur,
            onFocus: this.handleFocus,
            onKeyDown: this.handleKeyPress,
            placeholder: placeholder,
            ref: function ref(c) {
              _this6.input = c;
            },
            value: this.getTimezone(value) || value
          }),
          isOpen && _react2.default.createElement(
            'ul',
            { className: listClass, ref: function ref(c) {
                _this6.list = c;
              } },
            timezones
          )
        )
      );
    }
  }]);

  return TimezonePicker;
}(_react.Component);

TimezonePicker.propTypes = propTypes;
TimezonePicker.defaultProps = defaultProps;

exports.default = TimezonePicker;