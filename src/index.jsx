import React, { Component, PropTypes }  from 'react';
import { findDOMNode }                  from 'react-dom';
import classnames                       from 'classnames';
import FormControl                      from 'react-bootstrap/lib/FormControl';

import keys                             from 'lodash/keys';

import defaultTimezones                 from './timezones.json';

import './index.css';

const UP_KEY    = 38;
const DOWN_KEY  = 40;
const ENTER_KEY = 13;

export default class TimezonePicker extends Component {
  static propTypes = {
    className:    PropTypes.string,
    placeholder:  PropTypes.string,
    style:        PropTypes.any,
    timezones:    PropTypes.object,
    initialValue: PropTypes.string,
    value:        PropTypes.string,
    onChange:     PropTypes.func,
    absolute:     PropTypes.bool
  };

  static defaultProps = {
    timezones:    defaultTimezones,
    initialValue: '',
    placeholder:  '',
    onChange:     () => {},
    overflow:     false
  };

  state = {
    isOpen:     false,
    focused:    0,
    value:      this.props.value || this.props.initialValue,
    timezones:  this.props.timezones
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.props.value) {
      const value = this.getTimezone(nextProps.value) || '';

      this.setState({ value });
    }
  }

  handleFocus = () => {
    const { value, timezones } = this.state;

    if (value) {
      const keyz = keys(timezones);

      for (let i = 0; i < keyz.length; ++i) {
        if (keyz[i] === value || timezones[keyz[i]] === value) {
          return this.setState(
            { isOpen: true, focused: i },
            () => {
              this.scrollToIndex(i);
            }
          );
        }
      }
    }

    this.setState({ isOpen: true });
  };

  handleBlur = () => {
    const tz = this.getTimezone(this.state.value);

    if (tz === undefined) {
      this.setState({ value: '', timezones: this.props.timezones });
      this.props.onChange('');
    }

    this.setState({ isOpen: false });
  };

  handleFilterChange = (e) => {
    const timezones = this.filterItems(e.target.value);

    this.setState({
      timezones,
      isOpen:     keys(timezones).length > 0,
      focused:    0,
      value:      e.target.value || ''
    });
  };

  handleKeyPress = (e) => {
    const { focused, timezones, isOpen } = this.state;

    if (e.which === UP_KEY || e.which === DOWN_KEY) {
      e.preventDefault();

      if (!isOpen) {
        return this.setState({ isOpen: true }, this.handleFocus);
      }

      let newFocused;

      if (e.which === UP_KEY) {
        newFocused = focused === 0 ? keys(timezones).length - 1 : focused - 1;
      } else {
        newFocused = focused === keys(timezones).length - 1 ? 0 : focused + 1;
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
  };

  handleSelect = (index) => {
    const { timezones } = this.state;

    const key   = keys(timezones)[index] || '';
    const value = timezones[key] || '';

    this.props.onChange(value);

    this.setState({
      focused:    0,
      isOpen:     false,
      timezones:  this.props.timezones,
      value:      key
    }, () => findDOMNode(this.input).blur());
  };

  handleMouseOver = (idx, e) => {
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
  };

  getTimezone = (query) => {
    if (!query) {
      return null;
    }

    return keys(this.props.timezones).find(zone => zone === query || this.props.timezones[zone] === query);
  };

  zoneCompare = (key, filter) => key.toLowerCase().includes(filter.toLowerCase().trim());

  filterItems = (filter) => {
    const { timezones } = this.props;

    if (filter.trim().length === 0) {
      return timezones;
    }

    const filteredTimezones = {};

    keys(timezones).forEach(key => {
      if (this.zoneCompare(key, filter) || this.zoneCompare(timezones[key], filter)) {
        filteredTimezones[key] = timezones[key];
      }
    });

    return filteredTimezones;
  };

  scrollToIndex = (idx) => {
    const index = Math.max(0, idx - 3);

    this.disableMouse = true;
    findDOMNode(this.list).scrollTop = this.list.children[index].offsetTop;
  };

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

    const timezones = keys(this.state.timezones).map((zone, idx) => {
      const focused = this.state.focused === idx;

      return (
        <li
          key           = {idx}
          onMouseDown   = {() => this.handleSelect(idx)}
          onMouseOver   = {(e) => this.handleMouseOver(idx, e)}
          className     = {classnames('timezone-picker-list-item', { 'timezone-picker-list-item-active': focused })}
        >
          {zone}
        </li>
      );
    });

    return (
      <div style={style} className={containerClasses}>
        <div className='timezone-picker-textfield'>
          <FormControl
            placeholder   = {placeholder}
            onFocus       = {this.handleFocus}
            onBlur        = {this.handleBlur}
            onChange      = {this.handleFilterChange}
            onKeyDown     = {this.handleKeyPress}
            value         = {this.getTimezone(value) || value}
            ref           = {c => this.input = c}
          />
          {isOpen && <ul className={listClass} ref={c => this.list = c}>
            {timezones}
          </ul>}
        </div>
      </div>
    );
  }
}
