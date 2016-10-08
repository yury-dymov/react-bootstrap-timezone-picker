# react-bootstrap-timezone-picker
Time zone picker for react-bootstrap - [DEMO](https://yury-dymov.github.io/react-bootstrap-timezone-picker)

[![react-bootstrap-timezone-picker](https://github.com/yury-dymov/react-bootstrap-timezone-picker/raw/master/docs/timezone-picker.gif)](https://github.com/yury-dymov/react-bootstrap-timezone-picker)

[![npm version](https://img.shields.io/npm/v/react-bootstrap-timezone-picker.svg?style=flat)](https://www.npmjs.com/package/react-bootstrap-timezone-picker)
[![Downloads](http://img.shields.io/npm/dm/react-bootstrap-timezone-picker.svg?style=flat-square)](https://npmjs.org/package/react-bootstrap-timezone-picker)
[![Build Status](https://img.shields.io/travis/yury-dymov/react-bootstrap-timezone-picker/master.svg?style=flat)](https://travis-ci.org/yury-dymov/react-bootstrap-timezone-picker)
[![Coverage Status](https://coveralls.io/repos/github/yury-dymov/react-bootstrap-timezone-picker/badge.svg?branch=master)](https://coveralls.io/github/yury-dymov/react-bootstrap-timezone-picker?branch=master)

# Installation
```Bash
npm install react-bootstrap-timezone-picker
```

# Usage Example
```JavaScript
import TimezonePicker from 'react-bootstrap-timezone-picker';
import 'react-bootstrap-timezone-picker/dist/react-bootstrap-timezone-picker.min.css';
...
<TimezonePicker
  absolute      = {false}
  defaultValue  = "Europe/Moscow"
  placeholder   = "Select timezone..."
  onChange      = {this.handleChange}
/>
...
```
Demo source code is available [here](https://github.com/yury-dymov/react-bootstrap-timezone-picker/blob/master/demo/index.jsx).

# Props
*Note:* all props are optional.

| Prop        | Type           | Default  | Description |
| ------------- |:-------------:| :-----:|:-----------|
| absolute      | bool       | true |    Control time zone list overflow. Please check [demo](https://yury-dymov.github.io/react-bootstrap-timezone-picker) for more details. |
| className      | string       | none |     Class name for container |
| defaultValue      | string       | none |     Initial time zone can be provided |
| onChange(newValue: string)      | func       | none |    Triggered on user selection |
| placeholder      | string       | none |     If value is empty, than placeholder is displayed |
| style      | object       | none |   Style for container |
| timezones | object       | loaded from [timezone.json](https://github.com/yury-dymov/react-bootstrap-timezone-picker/blob/master/src/timezones.json) | Time zone option list  |
| value      | string       | none |   Override selected time zone with a new value |

# License
MIT (c) Yury Dymov
