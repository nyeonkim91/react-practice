import React from 'react';
import { mount } from 'enzyme';
import NamesContainer from './NamesContainer';
import configureStore from '../store/configureStore';

describe('NamesContainer', () => {
  let component = null;

  // 카운터 테스팅과 달리 이번엔 실제 store 로 테스팅
  let store = configureStore();

  const context = { store };

  it('renders properly', () => {
    component = mount(<NamesContainer />, { context });
  });

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('dispatches CHANGE_INPUT action', () => {
    const mockedEvent = {
      target: {
        value: 'world'
      }
    };
    component.find('input').simulate('change', mockedEvent);
    expect(store.getState().names.input).toBe('world');
  });

  it('dispatch INSERT action', () => {
    component.find('form').simulate('submit');
    expect(store.getState().names.names).toEqual(['world']);
  });
})
