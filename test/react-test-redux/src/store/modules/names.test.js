import names, * as namesActions from './names';

describe('names', () => {
  describe('actions', () => {
    const actions = [
      namesActions.changeInput('input'),
      namesActions.insert('name')
    ];
    it('should create actions', () => {
      expect(actions).toMatchSnapshot();
    })
  });

  describe('reducer', () => {
    // names 의 첫 번째 argument 는 state, 두 번째는 action
    // names return state object
    let state = names(undefined, {});
    it('should return the initialState', () => {
      expect(state).toEqual({
        input: '',
        names: []
      })
    });

    it('should change input', () => {
      state = names(state, namesActions.changeInput('hello'));
      expect(state).toHaveProperty('input', 'hello');
    });

    it('should insert', () => {
      state = names(state, namesActions.insert('hello'));
      expect(state.names).toEqual(['hello']);
      state = names(state, namesActions.insert('world'));
      expect(state.names).toEqual(['hello', 'world']);
    })
  })
})
