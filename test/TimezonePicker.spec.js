import React                      from 'react';
import { findDOMNode }            from 'react-dom';
import chai, { expect }           from 'chai';
import chaiEnzyme                 from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';
import jsdom                      from 'jsdom';
import { spy }                    from 'sinon';

const KEY_UP = 38;
const KEY_DOWN = 40;
const KEY_RETURN = 13;
const KEY_ENTER = 14;
const KEY_ESCAPE = 27;

chai.use(chaiEnzyme());

const doc = jsdom.jsdom('<!doctype html><html><body><div id="app"></div></body></html>');

global.document = doc;
global.window = doc.defaultView;
global.navigator = window.navigator;

// We need to have `document` and `window` in global scope before requiring TextField
const TimezonePicker = require('../dist/react-bootstrap-timezone-picker').default;

describe('className style and events are propagated', () => {
  it('className: rnd-1234 -> .rnd-1234', () => {
    const component = render(<TimezonePicker className="rnd-1234" />);

    expect(component.find('.rnd-1234')).to.have.length(1);
  });

  it('style: { zIndex: "-9876"} => style={"z-index:-9876"}', () => {
    const component = render(<TimezonePicker style={{ zIndex: '-9876' }} />);

    expect(component).to.have.attr('style').match(/\-9876/);
  });

  it('onBlur propagated', () => {
    const handleBlur = spy();

    const component = mount(<TimezonePicker onBlur={handleBlur} />);

    component.instance().handleBlur();

    expect(handleBlur.calledOnce).to.equal(true);
  });

  it('onFocus propagated', () => {
    const handleFocus = spy();

    const component = mount(<TimezonePicker onFocus={handleFocus} />);

    component.instance().handleFocus();

    expect(handleFocus.calledOnce).to.equal(true);
  });

  it('onKeyDown propagated', () => {
    const handleKeyDown = spy();

    const component = mount(<TimezonePicker onKeyDown={handleKeyDown} />);

    component.find('input').simulate('keyDown', { keyCode: 55 });

    expect(handleKeyDown.calledOnce).to.equal(true);
  });
});

describe('placeholder, defaultValue, initialValue, value', () => {
  it('placeholder is shown if defaultValue, initialValue and value are empty', () => {
    const component = render(<TimezonePicker placeholder="Hello World" />);

    expect(component.find('input')).to.have.attr('placeholder').equal('Hello World');
  });

  it('defaultValue is shown', () => {
    const component = render(<TimezonePicker defaultValue="Europe/Moscow" />);

    expect(component.find('input')).to.have.attr('value').match(/Moscow/);
  });

  it('initialValue is shown', () => {
    const component = render(<TimezonePicker initialValue="Europe/Moscow" />);

    expect(component.find('input')).to.have.attr('value').match(/Moscow/);
  });

  it('value is overriding defaultValue', () => {
    const component = render(<TimezonePicker defaultValue="Europe/Moscow" value="America/Sao_Paulo" />);

    expect(component.find('input')).to.have.attr('value').match(/Paulo/);
  });

  it('value is overriding initialValue', () => {
    const component = render(<TimezonePicker initialValue="Europe/Moscow" value="America/Sao_Paulo" />);

    expect(component.find('input')).to.have.attr('value').match(/Paulo/);
  });

  it('input is controlled by state', () => {
    const component = mount(<TimezonePicker initialValue="Europe/Moscow" />);

    component.find('input').simulate('change', { target: { value: 'ma' } });

    expect(component.find('input')).to.have.attr('value').match(/ma/);
  });

  it('value is cleared if input is garbage', () => {
    const component = mount(<TimezonePicker initialValue="Europe/Moscow" />);

    component.find('input').simulate('change', { target: { value: 'ma' } });

    component.instance().handleBlur();

    expect(component.find('input')).to.have.attr('value').equal('');
  });

  it('default value is selected in option list', () => {
    const component = mount(<TimezonePicker initialValue="Pacific/Apia" />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Apia/);
  });
});

describe('option list', () => {
  it('option list is provided', () => {
    const component = mount(<TimezonePicker />);

    component.find('input').simulate('change', { target: { value: 'M' } });

    expect(component.find('.timezone-picker-list')).to.have.length(1);
  });

  it('filtering works', () => {
    const component = mount(<TimezonePicker />);

    component.find('input').simulate('change', { target: { value: 'ki' } });

    expect(component.find('.timezone-picker-list > li')).to.have.length(3);

    component.find('input').simulate('change', { target: { value: 'kie' } });

    expect(component.find('.timezone-picker-list > li')).to.have.length(1);
  });

  it('initially first option is selected', () => {
    const component = mount(<TimezonePicker />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list')).to.have.length(1);

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Pago/);
  });

  it('pressing down makes next option active', () => {
    const component = mount(<TimezonePicker />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Pago/);

    component.find('input').simulate('keyDown', { which: KEY_DOWN });

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Hawaii/);
  });

  it('pressing down on last option makes first option active', () => {
    const component = mount(<TimezonePicker />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Pago/);

    component.find('input').simulate('keyDown', { which: KEY_DOWN });

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Hawaii/);
  });

  it('pressing up makes previous option active', () => {
    const component = mount(<TimezonePicker defaultValue="Pacific/Honolulu" />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Hawaii/);

    component.find('input').simulate('keyDown', { which: KEY_UP });

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Pago/);
  });

  it('pressing up on first option makes last option active', () => {
    const component = mount(<TimezonePicker />);

    component.instance().handleFocus();

    component.find('input').simulate('keyDown', { which: KEY_UP });

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Apia/);
  });

  it('escape pressed: option list is removed 1/2, good value persists', () => {
    const component = mount(<TimezonePicker initialValue="Europe/Moscow" />);

    component.find('input').simulate('change', { target: { value: '(GMT+02:00) Kiev' } });
    component.find('input').simulate('keyDown', { which: KEY_ESCAPE });

    expect(component.find('.timezone-picker-list')).to.have.length(0);
    expect(component.find('input')).to.have.attr('value').equal('(GMT+02:00) Kiev');
  });

  it('escape pressed: option list is removed 2/2, bad value cleared', () => {
    const component = mount(<TimezonePicker initialValue="Europe/Moscow" />);

    component.find('input').simulate('change', { target: { value: 'mo' } });
    component.find('input').simulate('keyDown', { which: KEY_ESCAPE });

    expect(component.find('.timezone-picker-list')).to.have.length(0);
    expect(component.find('input')).to.have.attr('value').equal('');
  });

  it('mouseEnter makes item active', () => {
    const component = mount(<TimezonePicker defaultValue="Pacific/Honolulu" />);

    component.instance().handleFocus();
    component.find('li').first().simulate('mouseEnter', { pageX: 1, pageY: 2 });
    component.instance().handleMouseEnter(0, { pageX: 1, pageY: 2 });

    expect(component.find('.timezone-picker-list-item-active')).to.have.html().match(/Pago/);
  });

  it('mouse click hides options and updates value', () => {
    const component = mount(<TimezonePicker />);

    component.instance().handleFocus();
    component.find('li').last().simulate('mouseDown');

    expect(component.find('input')).to.have.attr('value').match(/Apia/);
    expect(component.find('.timezone-picker-list')).to.have.length(0);
  });

  it('touch start hides options and updates value', () => {
    const component = mount(<TimezonePicker />);

    component.instance().handleFocus();
    component.find('li').last().simulate('touchStart');

    expect(component.find('input')).to.have.attr('value').match(/Apia/);
    expect(component.find('.timezone-picker-list')).to.have.length(0);
  });
});

describe('onChange', () => {
  it('called after mouse click', (done) => {
    function handleChange(val) {
      expect(val).to.match(/Apia/);
      done();
    }

    const component = mount(<TimezonePicker onChange={handleChange}/>);

    component.instance().handleFocus();
    component.find('li').last().simulate('mouseDown');
  });

  it('called after enter pressed', (done) => {
    function handleChange(val) {
      expect(val).to.match(/Apia/);
      done();
    }

    const component = mount(<TimezonePicker onChange={handleChange}/>);

    component.instance().handleFocus();
    component.find('input').simulate('keyDown', { which: KEY_UP });
    component.find('input').simulate('keyDown', { which: KEY_ENTER });
  });

  it('called after return pressed', (done) => {
    function handleChange(val) {
      expect(val).to.match(/Apia/);
      done();
    }

    const component = mount(<TimezonePicker onChange={handleChange}/>);

    component.instance().handleFocus();
    component.find('input').simulate('keyDown', { which: KEY_UP });
    component.find('input').simulate('keyDown', { which: KEY_ENTER });
  });

  it("not called if value hasn't changed", () => {
    const handleChange = spy();

    const component = mount(<TimezonePicker onChange={handleChange} defaultValue="Pacific/Pago_Pago" />);

    component.instance().handleFocus();
    component.find('input').simulate('keyDown', { which: KEY_ENTER });

    expect(handleChange.called).to.equal(false);
  });
});

it('passing timezones', () => {
  const component = mount(<TimezonePicker timezones={{ tz1: "tz1", tz2: "tz2" }}/>);

  component.instance().handleFocus();

  expect(component.find('.timezone-picker-list > li')).to.have.length(2);
});

describe('absolute prop', () => {
  it('absolute works', () => {
    const component = mount(<TimezonePicker absolute />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list-rel')).to.have.length(0);
    expect(component.find('.timezone-picker-list-abs')).to.have.length(1);
  });

  it('relative works', () => {
    const component = mount(<TimezonePicker absolute={false} />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list-rel')).to.have.length(1);
    expect(component.find('.timezone-picker-list-abs')).to.have.length(0);
  });

  it('default is absolute', () => {
    const component = mount(<TimezonePicker />);

    component.instance().handleFocus();

    expect(component.find('.timezone-picker-list-rel')).to.have.length(0);
    expect(component.find('.timezone-picker-list-abs')).to.have.length(1);
  });
});
