import { getPost } from './post';
import nock from 'nock';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import configureStore from '../configureStore';

describe('post', () => {
  describe('actions', () => {
    // actions 만 확인하는 것이기 때문에 실제 스토어 사용할 필요X
    const store = configureMockStore([thunk])();

    it('getPost dispatches proper actions', async () => {
      // 아래의 주소로 get('/posts/1') 요청이 왔을때 가로채서 다음의 응답을 보내라
      nock('http://jsonplaceholder.typicode.com')
        .get('/posts/1').once().reply(200, {
          title: 'hello',
          body: 'world'
        });
      await store.dispatch(getPost(1));
      expect(store.getActions()[0]).toHaveProperty('type', 'post/GET_POST_PENDING');
      expect(store.getActions()[1]).toHaveProperty('type', 'post/GET_POST_SUCCESS');
      expect(store.getActions()).toMatchSnapshot();
    });

    it('fails', async () => {
      store.clearActions(); // 기존 액션 비우기
      nock('http://jsonplaceholder.typicode.com')
        .get('/posts/0').once().reply(400);
      try {
        await store.dispatch(getPost(0));
      } catch (e) {

      }
      expect(store.getActions()).toMatchSnapshot();
    });
  })

  describe('reducer', () => {
    // reducer 를 통해 store 에 제대로 전달되는지 확인해야 하므로 실제 store 사용
    const store = configureStore();
    it('should process getPost', async () => {
      nock('http://jsonplaceholder.typicode.com')
        .get('/posts/1').once().reply(200, {
          title: 'hello',
          body: 'world'
        });
      await store.dispatch(getPost(1));
      expect(store.getState().post.title).toBe('hello');
    })
  })
})
