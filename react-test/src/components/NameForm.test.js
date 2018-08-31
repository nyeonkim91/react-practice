import React from 'react';
import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';
import NameForm from './NameForm';

describe('NameForm', () => {
  let component = null;

  it('renders correctly', () => {
    component = shallow(<NameForm />);
    // component = renderer.create(<NameForm />);
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
    // const tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
  });

  // DOM 시뮬레이션
  describe('insert new text', () => {
    it('has a form', () => {
      expect(component.find('form').exists()).toBe(true);
    })
    it('has an input', () => {
      expect(component.find('input').exists()).toBe(true);
    })
  })
});
