import React, { Component, PropTypes } from 'react';
import { findDOMNode } from 'react-dom';
import classnames from 'classnames';
import FormControl from 'react-bootstrap/lib/FormControl';
import defaultTimezones from './timezones.json';

import './index.css';

const UP_KEY = 38;
const DOWN_KEY = 40;
const ENTER_KEY = 13;
const RETURN_KEY = 14;
const ESCAPE_KEY = 27;

const propTypes = {
  absolute: PropTypes.bool,
  className: PropTypes.string,
  defaultValue: PropTypes.any,
  initialValue: PropTypes.any,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onKeyDown: PropTypes.func,
  placeholder: PropTypes.string,
  timezones: PropTypes.object,
  style: PropTypes.object,
  value: PropTypes.any,
};

const defaultProps = {
  absolute: true,
  defaultValue: '',
  initialValue: '',
  placeholder: '',
  onBlur: () => {},
  onChange: () => {},
  onFocus: () => {},
  onKeyDown: () => {},
  overflow: false,
  style: {},
  timezones: defaultTimezones,
};

class TimezonePicker extends Component {
  static zoneCompare(key, filter) {
    return key.toLowerCase().indexOf(filter.toLowerCase().trim()) !== -1;
  }

  constructor(props) {
    super(props);

    this.filterItems = this.filterItems.bind(this);
    this.getTimezone = this.getTimezone.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.scrollToIndex = this.scrollToIndex.bind(this);

    this.state = {
      focused: 0,
      isOpen: false,
      timezones: this.props.timezones,
      value: props.value || props.defaultValue || props.initialValue,
    };

    this.prevValue = this.state.value;
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const value = this.getTimezone(nextProps.value) || '';

      this.setState({ value });
    }
  }

  getTimezone(query) {
    if (!query) {
      return null;
    }

    return Object.keys(this.props.timezones).find(zone => zone === query || this.props.timezones[zone] === query);
  }

  filterItems(filter) {
    const { timezones } = this.props;

    if (filter.trim().length === 0) {
      return timezones;
    }

    const filteredTimezones = {};

    Object.keys(timezones).forEach((key) => {
      if (this.constructor.zoneCompare(key, filter) || this.constructor.zoneCompare(timezones[key], filter)) {
        filteredTimezones[key] = timezones[key];
      }
    });

    return filteredTimezones;
  }

  handleBlur() {
    const tz = this.getTimezone(this.state.value);

    if (tz === undefined) {
      this.setState({ value: '', timezones: this.props.timezones });
      if (this.prevValue) {
        this.props.onChange('');
        this.prevValue = '';
      }
    }

    this.setState({ isOpen: false });

    this.props.onBlur();
  }

  handleFilterChange(e) {
    const timezones = this.filterItems(e.target.value);

    this.setState({
      focused: 0,
      isOpen: Object.keys(timezones).length > 0,
      value: e.target.value || '',
      timezones,
    });
  }

  handleFocus(ev) {
    const { value, timezones } = this.state;
    if (ev) ev.target.select();

    if (value) {
      const keyz = Object.keys(timezones);

      for (let i = 0; i < keyz.length; ++i) {
        if (keyz[i] === value || timezones[keyz[i]] === value) {
          this.setState(
            { isOpen: true, focused: i },
            () => { this.scrollToIndex(i); }
          );

          this.props.onFocus(ev);

          return;
        }
      }
    }

    this.setState({ isOpen: true });

    this.props.onFocus();
  }

  handleKeyPress(e) {
    const { focused, timezones, isOpen } = this.state;

    if (e.which === UP_KEY || e.which === DOWN_KEY) {
      e.preventDefault();

      let newFocused;

      if (e.which === UP_KEY) {
        newFocused = focused === 0 ? Object.keys(timezones).length - 1 : focused - 1;
      } else {
        newFocused = focused === Object.keys(timezones).length - 1 ? 0 : focused + 1;
      }

      this.setState({ focused: newFocused });

      this.scrollToIndex(newFocused);
    } else if (e.which === ENTER_KEY || e.which === RETURN_KEY) {
      this.handleSelect(focused);
    } else if (e.which === ESCAPE_KEY) {
      findDOMNode(this.refInput).blur();
      this.handleBlur();
    }

    this.props.onKeyDown(e);
  }

  handleMouseEnter(idx, e) {
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

  handleSelect(index) {
    const { timezones } = this.state;

    const key = Object.keys(timezones)[index] || '';
    const value = timezones[key] || '';

    if (this.prevValue !== value) {
      this.prevValue = value;
      this.props.onChange(value);
    }

    this.setState({
      focused: 0,
      isOpen: false,
      timezones: this.props.timezones,
      value: key,
    }, () => { findDOMNode(this.refInput).blur(); });
  }

  scrollToIndex(idx) {
    const index = Math.max(0, idx - 3);

    this.disableMouse = true;
    findDOMNode(this.list).scrollTop = this.list.children[index].offsetTop;
  }

  render() {
    const { isOpen, value } = this.state;
    const { absolute, className, placeholder, style, ...restProps } = this.props;

    const rest = Object.assign({}, restProps);

    ['defaultValue', 'initialValue', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'timezones', 'value']
      .forEach(p => delete rest[p]);

    const isSelected = !isOpen && value;
    const containerClasses = classnames(
      'timezone-picker',
      className,
      {
        'timezone-picker-open': isOpen,
        'timezone-picker-selected': isSelected,
      });

    const listClass = classnames('timezone-picker-list', `timezone-picker-list-${absolute ? 'abs' : 'rel'}`);

    const timezones = Object.keys(this.state.timezones).map((zone, idx) => {
      const focused = this.state.focused === idx;

      return (
        <li
          className={classnames('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused })}
          key={zone}
          onMouseDown={() => { this.handleSelect(idx); }}
          onMouseEnter={(e) => { this.handleMouseEnter(idx, e); }}
          onTouchStart={() => { this.handleSelect(idx); }}
        >
          {zone}
        </li>
      );
    });

    return (
      <div className={containerClasses} style={style}>
        <div className="timezone-picker-textfield">
          <FormControl
            onBlur={this.handleBlur}
            onChange={this.handleFilterChange}
            onFocus={this.handleFocus}
            onKeyDown={this.handleKeyPress}
            placeholder={placeholder}
            ref={(c) => { this.refInput = c; }}
            value={this.getTimezone(value) || value}
            {...rest}
          />
          {isOpen && <ul className={listClass} ref={(c) => { this.list = c; }}>
            {timezones}
          </ul>}
        </div>
      </div>
    );
  }
}

TimezonePicker.propTypes = propTypes;
TimezonePicker.defaultProps = defaultProps;

export default TimezonePicker;
