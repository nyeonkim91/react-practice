import React from 'react';
import { mount } from 'enzyme';
import CounterContainer from './CounterContainer';
import configureMockStore from 'redux-mock-store';
import * as counterActions from '../store/modules/counter';

describe('CounterContainer', () => {
  let component = null;
  const mockStore = configureMockStore();

  // 데이터들을 받아올 가짜 스토어 만들기
  let store = mockStore({
    counter: {
      number: 0
    }
  });

  it('renders properly', () => {
    const context = { store };
    component = mount(<CounterContainer />, { context });
    // OR component = mount(<CounterContainer store={store} />);
  })

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  })

  it('dispatches INCREASE action', () => {
    // 스토어에 액션이 디스패치 되면
    // 디스패치된 액션들의 목록을 store.getActions 를 통해 조회 가능
    component.find('button').at(0).simulate('click');
    expect(store.getActions()[0]).toEqual(counterActions.increase());
  });

  it('dispatches DECREASE action', () => {
    component.find('button').at(1).simulate('click');
    expect(store.getActions()[1]).toEqual(counterActions.decrease());
  });
})
