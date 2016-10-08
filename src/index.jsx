import React, { Component, PropTypes }  from 'react';
import { findDOMNode }                  from 'react-dom';
import classnames                       from 'classnames';
import FormControl                      from 'react-bootstrap/lib/FormControl';
import defaultTimezones                 from './timezones.json';

import './index.css';

const UP_KEY    = 38;
const DOWN_KEY  = 40;
const ENTER_KEY = 13;

const propTypes = {
  absolute:     PropTypes.bool,
  className:    PropTypes.string,
  defaultValue: PropTypes.any,
  initialValue: PropTypes.any,
  onChange:     PropTypes.func,
  placeholder:  PropTypes.string,
  style:        PropTypes.any,
  timezones:    PropTypes.object,
  value:        PropTypes.any,
};

const defaultProps = {
  defaultValue: '',
  initialValue: '',
  placeholder:  '',
  onChange:     () => {},
  overflow:     false,
  timezones:    defaultTimezones,
};

class TimezonePicker extends Component {
  constructor(props) {
    super(props);

    this.handleBlur         = this.handleBlur.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
    this.handleFocus        = this.handleFocus.bind(this);
    this.handleKeyPress     = this.handleKeyPress.bind(this);
    this.handleMouseOver    = this.handleMouseOver.bind(this);
    this.handleSelect       = this.handleSelect.bind(this);
    this.getTimezone        = this.getTimezone.bind(this);
    this.filterItems        = this.filterItems.bind(this);
    this.scrollToIndex      = this.scrollToIndex.bind(this);
    this.zoneCompare        = this.zoneCompare.bind(this);

    this.state = {
      focused:    0,
      isOpen:     false,
      timezones:  this.props.timezones,
      value:      props.value || props.defaultValue || props.initialValue,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const value = this.getTimezone(nextProps.value) || '';

      this.setState({ value });
    }
  }

  handleBlur() {
    const tz = this.getTimezone(this.state.value);

    if (tz === undefined) {
      this.setState({ value: '', timezones: this.props.timezones });
      this.props.onChange('');
    }

    this.setState({ isOpen: false });
  }

  handleFilterChange(e) {
    const timezones = this.filterItems(e.target.value);

    this.setState({
      focused:    0,
      isOpen:     Object.keys(timezones).length > 0,
      value:      e.target.value || '',
      timezones,
    });
  }

  handleFocus() {
    const { value, timezones } = this.state;

    if (value) {
      const keyz = Object.keys(timezones);

      for (let i = 0; i < keyz.length; ++i) {
        if (keyz[i] === value || timezones[keyz[i]] === value) {
          return this.setState(
            { isOpen: true, focused: i },
            () => { this.scrollToIndex(i); }
          );
        }
      }
    }

    this.setState({ isOpen: true });
  }

  handleKeyPress(e) {
    const { focused, timezones, isOpen } = this.state;

    if (e.which === UP_KEY || e.which === DOWN_KEY) {
      e.preventDefault();

      if (!isOpen) {
        return this.setState({ isOpen: true }, this.handleFocus);
      }

      let newFocused;

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

  handleMouseOver(idx, e) {
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

    const key   = Object.keys(timezones)[index] || '';
    const value = timezones[key] || '';

    this.props.onChange(value);

    this.setState({
      focused:    0,
      isOpen:     false,
      timezones:  this.props.timezones,
      value:      key
    }, () => { findDOMNode(this.input).blur(); });
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

    Object.keys(timezones).forEach(key => {
      if (this.zoneCompare(key, filter) || this.zoneCompare(timezones[key], filter)) {
        filteredTimezones[key] = timezones[key];
      }
    });

    return filteredTimezones;
  }

  scrollToIndex(idx) {
    const index = Math.max(0, idx - 3);

    this.disableMouse = true;
    findDOMNode(this.list).scrollTop = this.list.children[index].offsetTop;
  }

  zoneCompare(key, filter) {
    return key.toLowerCase().includes(filter.toLowerCase().trim());
  }

  render() {
    const { value, isOpen }                             = this.state;
    const { className, style, placeholder, absolute }   = this.props;

    const isSelected = !isOpen && value;
    const containerClasses = classnames(
      'timezone-picker',
      className,
      {
        'timezone-picker-open':     isOpen,
        'timezone-picker-selected': isSelected
      });

    const listClass = classnames('timezone-picker-list', `timezone-picker-list-${absolute ? 'abs' : 'rel'}`);

    const timezones = Object.keys(this.state.timezones).map((zone, idx) => {
      const focused = this.state.focused === idx;

      return (
        <li
          className     = {classnames('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused })}
          key           = {zone}
          onMouseDown   = {() => { this.handleSelect(idx); }}
          onMouseOver   = {(e) => { this.handleMouseOver(idx, e); }}
        >
          {zone}
        </li>
      );
    });

    return (
      <div className={containerClasses} style={style}>
        <div className='timezone-picker-textfield'>
          <FormControl
            onChange      = {this.handleFilterChange}
            onBlur        = {this.handleBlur}
            onFocus       = {this.handleFocus}
            onKeyDown     = {this.handleKeyPress}
            placeholder   = {placeholder}
            ref           = {c => { this.input = c; }}
            value         = {this.getTimezone(value) || value}
          />
          {isOpen && <ul className={listClass} ref={c => { this.list = c; }}>
            {timezones}
          </ul>}
        </div>
      </div>
    );
  }
}

TimezonePicker.propTypes    = propTypes;
TimezonePicker.defaultProps = defaultProps;

export default TimezonePicker;
