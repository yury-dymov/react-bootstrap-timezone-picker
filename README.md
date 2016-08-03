# react-bootstrap-timezone-picker
Time zone picker for react-bootstrap - [DEMO](https://yury-dymov.github.io/react-bootstrap-timezone-picker)

# Props
| Prop        | Type           | Default  | Required | Description |
| ------------- |:-------------:| :-----:|:------------:|:-----------|
| className      | string       | none |    No        | Class name for container |
| style      | object       | none |    No        | Style for container |
| timezones | object       | loaded from [timezone.json](https://github.com/yury-dymov/react-bootstrap-timezone-picker/blob/master/src/timezones.json) | No | Time zone option list  |
| placeholder      | string       | none |    No        | If value is empty, than placeholder is displayed |
| absolute      | bool       | false |    No        | Control time zone list overflow. Please check [demo](https://yury-dymov.github.io/react-bootstrap-timezone-picker) for more details. |
| initialValue      | string       | none |    No        | Initial time zone can be provided |
| value      | string       | none |    No        | Override selected time zone with a new value |
| onChange(newValue: string)      | func       | none |    No        | Triggered on user selection |
