import React from 'react';
import app from '../app';
import Counter from './Counter';
import renderer from 'react-test-renderer';

describe('<Counter />', () => {
  it('can render initially', () => {
    let app = shallow(<Counter />);
    expect(app.find('h4#counter').exists()).toBe(true);
  });

  it('has count: 0 initially', () => {
    let app = shallow(<Counter />);
    expect(app.state('counter')).toBe(0);

    let counterHeader = app.find('h4#counter');
    expect(counterHeader.exists()).toBe(true);
    expect(counterHeader.text()).toBe('0');
  });

  it('can increment count on button click', () => {
    let app = mount(<Counter />);
    let button = app.find('button#increment');
    expect(app.state('counter')).toBe(0);

    button.simulate('click');
    expect(app.state('counter')).toBe(1);
    expect(app.find('h4#counter').text()).toBe('1');

    button.simulate('click');
    expect(app.state('counter')).toBe(2);
    expect(app.find('h4#counter').text()).toBe('2');
  });

  it('can decrement count on button click', () => {
    let app = mount(<Counter />);
    let button = app.find('button#decrement');
    expect(app.state('counter')).toBe(0);

    button.simulate('click');
    expect(app.state('counter')).toBe(-1);
    expect(app.find('h4#counter').text()).toBe('-1');

    button.simulate('click');
    expect(app.state('counter')).toBe(-2);
    expect(app.find('h4#counter').text()).toBe('-2');
  });

  it('renders consistently', () => {
    const tree = renderer.create(<Counter />).toJSON();

    expect(tree).toMatchSnapshot();
  })



})