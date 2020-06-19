import React from 'react';
import { render } from '@testing-library/react';
import configureStore from '../../store';
import { Provider } from 'react-redux';
import Routes from 'routes/Routes';
import '@testing-library/jest-dom/extend-expect';
import { act } from 'react-dom/test-utils';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';

const ReduxProvider = ({ children, reduxStore }: any) => (
  <Provider store={reduxStore}>{children}</Provider>
);

describe('<Router />', () => {
  test('get content this page createPost', async () => {
    const history = createMemoryHistory();

    const store = configureStore();

    history.push('/createPost');
    const { getAllByText } = render(
      <Provider store={store}>
        <MemoryRouter>
          <Routes />
        </MemoryRouter>
      </Provider>
    );
    const getText = await getAllByText('Create New Post');
    expect(getText).toHaveLength(1);
  });
});
