import React from 'react';
import { mount } from 'enzyme';
import PostContainer from './PostContainer';
import configureStore from '../store/configureStore';
import nock from 'nock';
import { Provider } from 'react-redux';

describe('PostContainer', () => {
  let component = null;
  const store = configureStore();

  it('renders correctly', () => {
    component = mount(
      <Provider store={store}>
        <PostContainer />
      </Provider>
    );
  });

  it('fetches and updates', async () => {
    nock('http://jsonplaceholder.typicode.com')
      .get('/posts/1').once().reply(200, {
        title: 'hello',
        body: 'world'
      });
    // 클릭함으로써 getPost 에서 반환되는 Promise 에 접근이 불가하므로
    // subscribe 기능을 활용하여 새로운 Promise 를 만들고 subscribe 를 통해 새 액션이 디스패치 될 때 resolve 하도록 한다.
    // subscribe 함수의 파라미터에 우리가 만든 함수를 정해주면, 새 액션이 디스패치 될 때마다 파라미터로 넣어준 함수가 호출된다.
    component.find('button').simulate('click');
    // new Promise((resolve, reject) => {...})
    const waitForNextAction = new Promise(resolve => {
      const unsubscribe = store.subscribe(() => {
        resolve();
        unsubscribe();
      });
    });
    await waitForNextAction;
    expect(component.find('h2').text()).toBe('hello');
    expect(component.find('p').text()).toBe('world');
  });
})
