import thunk from 'redux-thunk';
const middlewares = [thunk];
import configureStore from 'redux-mock-store';

const mockStore = configureStore(middlewares);

const getOnePost = () => ({ type: 'GET_ONE_POSTS' });

describe('<thunk />', () => {
  const initialState = {};

  test('thunk dispatch action and store', async () => {
    const store = mockStore({ initialState });
    store.dispatch(getOnePost());
    const actions = store.getActions();
    const expectedPayload = { type: 'GET_ONE_POSTS' };
    expect(actions).toEqual([expectedPayload]);
  });
});
