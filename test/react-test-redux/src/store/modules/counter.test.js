import counter, * as counterActions from './counter';

describe('counter', () => {
  // 액션 생성 함수 테스팅
  describe('actions', () => {
    it('shoulde create actions', () => {
      const expectedActions = [
        { type: 'counter/INCREASE' },
        { type: 'counter/DECREASE' }
      ];
      const actions = [
        counterActions.increase(),
        counterActions.decrease()
      ];
      expect(actions).toEqual(expectedActions)
    })
  })

  // 리듀서 테스팅
  describe('reducer', () => {
    let state = counter(undefined, {});
    it('should return the initialState', () => {
      expect(state).toHaveProperty('number', 0);
    })

    it('should increase', () => {
      state = counter(state, counterActions.increase());
      expect(state).toHaveProperty('number', 1);
    })

    it('should decrease', () => {
      state = counter(state, counterActions.decrease());
      expect(state).toHaveProperty('number', 0)
    })
  })
})
