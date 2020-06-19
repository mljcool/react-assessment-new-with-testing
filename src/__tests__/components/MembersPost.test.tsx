import React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import MembersPost from 'Pages/Posts/Components/MembersPost';

const ReduxProvider = ({ children, reduxStore }: any) => (
  <Provider store={reduxStore}>{children}</Provider>
);

describe('<MembersPost />', () => {
  test('get component props', async () => {
    const store = configureStore();
    const wrapper = ({ children }: any) => (
      <ReduxProvider reduxStore={store}>{children}</ReduxProvider>
    );
    const component: any = await renderHook(() => MembersPost(), {
      wrapper,
    });
    const className = component.result.current.props.className;
    const testId = component.result.current.props['data-testid'];
    expect(className).toEqual('post-lists');
    expect(testId).toEqual('post-lists-component');
  });
});
