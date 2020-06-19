import React from 'react';
import { render } from '@testing-library/react';
import configureStore from '../../store';
import MainLayout from 'Components/MainLayout';
import { getPosts } from 'store/posts/actions';
import { Provider } from 'react-redux';
import { getAllPosts } from 'mock/getAllPosts';
import '@testing-library/jest-dom/extend-expect';

const ReduxProvider = ({ children, reduxStore }: any) => (
  <Provider store={reduxStore}>{children}</Provider>
);

describe('<MainLayout />', () => {
  test('get component props', async () => {
    const store = configureStore();

    const data = await getAllPosts();
    store.dispatch(getPosts({ posts: data, isLoading: true }));
    expect(store.getState().posts.posts).toHaveLength(10);
    expect(store.getState().posts.isLoading).toBeTruthy();
    const { getByText } = render(
      <Provider store={store}>
        <MainLayout />
      </Provider>
    );
    const getText = await getByText('Members');
    expect(getText).toBeInTheDocument();
  });
});
